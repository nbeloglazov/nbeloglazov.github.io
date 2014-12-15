---
layout: post
title: Бэкапим монгу используя кложур
date: "2014-12-15 00:00:00"
---

В этом посте я покажу простую тулу для создания бэкапов монги и закачки их на [Google Cloud Storage](https://cloud.google.com/storage/). Предположим есть небольшой веб-проект, который использует монгу. Проект запущен на одной машине на каком-нибудь из кучи облачных хостингов. И хочется периодически делать бэкапы монги. Некоторые провайдеры предоставляют сервисы для создания снапшотов дисков или что-нибудь подобное, но часто это требует отключения машины или демонтирования диска, а это звучит как-то тяжеловато. Вместо этого давайте напишем свою небольшую тулу, которая будет периодически запускаться, делая бэкап и закачивая его на файловый хостинг, такой как Dropbox, Google Drive или (в нашем случае) Google Cloud Storage. Я выбрал Cloud Storage, потому что уже использую [гугловую облачную платформу](https://cloud.google.com/) в качестве хостинга для [Хатника](http://hatnik.com) и почему не использовать один из сервисов это платформы?

Тула достаточно маленькая и состоит из 2 частей: создания бэкапа и закачки его в хранилище.

### Создание бэкапа

Допустим монга не требует аутентификации, а ОС - линукс. Тогда код:

```clojure
(require '[clojure.java
            [shell :refer [sh with-sh-dir]]
            [io :refer [file]]])

(defn clean
  "Удаляет старый дамп из текущей папки, если он есть."
  []
  (sh "rm" "-r" "dump")
  (sh "rm" "dump.zip"))

(defn create-dump
  "Создаёт дамп и пакует его в dump.zip файл в текущей папке."
  []
  (clean)
  (sh "mongodump")
  (sh "zip" "-r" "dump.zip" "dump"))

(defn archive-name
  "Генерирует имя для дампа. Под таким именем он будет сохранён в хранилище."
  []
  (-> (java.text.SimpleDateFormat. "yyyy-MM-dd_kk-mm")
      (.format (java.util.Date.))
      (str ".zip")))
```

Как можно видеть, код достаточно тривиальный. Для создания бэкапа используется `mongodump`. Согласно монговским [докам](http://docs.mongodb.org/manual/core/backups/#backup-with-mongodump) такой способ подходит для небольших по размеры баз, т.к. он влияет на производительность.

### Закачиваем в облако

Теперь мы будем мучаться с Google API, что закачать несчастный файл. Для начала нужно настроить [service account](https://cloud.google.com/storage/docs/authentication#service_accounts), который даст нашей программе доступ к хранилищу. После этого будет выдан специальный емейл и файл с приватным ключом, который и будут использоваться в качестве логина/пароля. Будем использовать официальную джава библиотеку для работы с API хранилища ([javadocs](https://developers.google.com/resources/api-libraries/documentation/storage/v1/java/latest/)). Я не буду приводить все используемые импорты джава классов, т.к. их достаточно много и если надо, их можно посмотреть в проекте в конце поста. Собственно код:

```clojure
(def email-address "<YOUR SERVICE ACCOUNT EMAIL HERE>")
(def p12-file (file "<PATH TO PRIVATE KEY FILE>"))
(def bucket-name "mongo-backups")
(def app-name "<YOUR GOOGLE CLOUD PROJECT NAME>") ; не уверен, что это вообще нужно

(defn authorize
  "Авторизует и возвращает объект, который будет использоваться для создания
  объекта хранилища."
  []
  (.. (GoogleCredential$Builder.)
      (setTransport (GoogleNetHttpTransport/newTrustedTransport))
      (setJsonFactory (JacksonFactory/getDefaultInstance))
      (setServiceAccountId email-address)
      (setServiceAccountScopes [StorageScopes/DEVSTORAGE_FULL_CONTROL
                                StorageScopes/DEVSTORAGE_READ_ONLY
                                StorageScopes/DEVSTORAGE_READ_WRITE])
      (setServiceAccountPrivateKeyFromP12File p12-file)
      (build)))

(defn get-storage
  "Авторизует и возвращает объект хранилища."
  []
  (.. (Storage$Builder. http-transport json-factory (authorize))
      (setApplicationName app-name)
      (build)))

(defn upload-zip-file [name zip-file]
  (let [client (get-storage)
        object (doto (StorageObject.)
                 (.setName name)
                 (.setContentType "application/zip"))
        content (FileContent. "application/zip" zip-file)]
     (.. client
         (objects)
         (insert bucket-name object content)
         (execute))))
```

Теперь наконец объединим обе части вместе:

```clojure
(defn create-and-upload-dump []
  (with-sh-dir "/tmp"
    (create-dump)
    (upload-zip-file (archive-name) (file "/tmp/dump.zip"))
    (clean)))

; main метод нужен для того, чтобы тулу можно было запускать
; из командной строк
(defn -main [& args]
  (create-and-upload-dump))
```

Вот и всё. Чтобы протестировать тулу нужно выполнить `create-and-upload-dump` функцию.

### Создаём cron задачу

Осталось создать исполняемый jar файл с помощью `lein uberjar`, скопировать его на сервер вместе с приватным ключом и настроить cron задачу которая будет запускать его ежедневно. Для настройки задачи создадим скрипт в папке `/etc/cron.daily`. Пример скрипта:

```bash
#!/bin/sh
#
# Ежедневный бэкап монги

WORKING_DIR=/home/nbeloglazov/backup
cd $WORKING_DIR
java -jar $WORKING_DIR/backup.jar
```

Подозреваю, что если использовать Dropbox или какой другой сервис, то код может быть проще. Аутентификация в гугловом API запутанная и достаточно непросто подобрать правильную комбинацию и порядок вызовов методов, чтобы всё заработало.

Пример законченной тулы: [проект на гитхабе](https://github.com/nbeloglazov/hatnik/tree/master/tools/backup).
