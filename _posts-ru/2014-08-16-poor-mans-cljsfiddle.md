---
layout: post
title: Cljsfiddle для бедных
date: "2014-08-16 22:00:00"
---

### Введение

В этом посте я расскажу, как написать cljsfiddle для бедных за 4 шага. Настоящий [cljsfiddle](http://cljsfiddle.net/) - это сайт, похожий на [jsfiddle](http://jsfiddle.net/), который позволяет тестировать и играться с кложурскриптом онлайн. Сайт был создан [Джонасом](https://github.com/jonase) (не знаю, как правильно) для конкурса [Lisp in Summer Projects](http://lispinsummerprojects.org/) (кстати он занял первое место). Но вернёмся к нашей версии cljsfiddle. Будем её называть cljsbin, чтобы не путаться. Cljsbin будет состоять только из 3 элементов: поля для ввода кложурскрипт кода, кнопки "Send" и iframe, в котором будет запускаться скомпилированный код. Минималистический дизайн и все дела!

Как это будет работать:

1. Пользователь пишет кложурскрипт и нажимает "Send".
2. Отправляется POST `/create` запрос. В запросе содержится исходник.
3. Сервер получает запрос, генерирует уникальный id для нового сниппета, компилирует исходник и отправляет ответ, содержащий id.
4. Как только браузер получил ответ, он достаёт id и устанавливает `src` аттрибут iframe в `/html/ID`.
5. Iframe загружает html файл с сервера. Файл пустой, в нём содержится только импорт 1 скрипта - `/js/ID`. Скрипт содержит скомпилированный js код, который и выполняется в iframe.

### Шаг 0 - Создание проекта
Структура проекта:

```text
├── project.clj
├── src
│   └── cljsbin.clj
└── public
    ├── index.html
    ├── script.js
    └── styles.css
```

project.clj:

```clojure
(defproject cljsbin "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]
                 [hiccup "1.0.5"]
                 [ring "1.3.0"]
                 [ring/ring-json "0.3.1"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [me.raynes/fs "1.4.6"]])
```

### Шаг 1 - Раздаём статические файлы
Начнём мы с создания сервера, который умеет только отдавать статику. У сервера есть целых 3 файла: index.html, styles.css и script.js (нам нужно немного джаваскрипта, чтобы обрабатывать нажатие на кнопку).

cljsbin.clj:

```clojure
(ns cljsbin
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [files]]))

(defroutes app
  ; Отдаём index.html как начальную страницу, когда пользователь
  ; запрашивает http://localhost:8080/
  (GET "/" [] (slurp "public/index.html"))
  ; Отдаём статику. По умолчанию используется 'public' папка для
  ; статики. Например если пользователь запросил http://localhost:8080/script.js,
  ; то сервер попытается отдать public/script.js файл.
  (files "/"))
```

index.html:

```html
<html>
  <head>
    <title>Cljsbin</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="/script.js"></script>
    <link rel="stylesheet" href="/styles.css"></link>
  </head>
  <body>
    <div id="input-area">
      <textarea id="source"></textarea>
      <button id="send">Send</button>
    </div>
    <iframe id="result"></iframe>
  </body>
</html>
```

script.js:

```javascript
function send() {
    console.log('Not implemented. Wait for the Step 2.');
}


$(function() {
    $('#send').on('click', send);
});
```

Тривиальный styles.css можно взять [отсюда](https://github.com/nbeloglazov/blog-projects/blob/master/cljsbin/public/styles.css).

Запускам сервер при помощи jetty:

```clojure
(ring.adapter.jetty/run-jetty cljsbin/app {:port 8080})
```

Открываем [http://localhost:8080](http://localhost:8080), нажимаем на кнопку и проверяем js консоль - мы должны увидеть "Not implemented" сообщение.

### Шаг 2 - Раздаём файлы для iframe
Теперь давайте научим сервер отдавать html и js файлы, которые будут загружаться в iframe. js файл будет на данном этапе статическим, т.к. мы ещё не посылаем код со страницы.

```clojure
(ns cljsbin
  (:require ...
            [ring.util.response :as resp]
            [hiccup.page :refer [html5]]))

; Создаём ответ на запрос "/js/ID"
(defn snippet-js [id]
  (-> (str "console.log('I am snippet " id "!');")
      (resp/response)
      (resp/content-type "application/javascript")))

; Создаём ответ на запрос "/html/ID"
(defn snippet-html [id]
  ; Структура html элементарна, так что тут легче использовать
  ; hiccup, вместо того чтобы загружать и модифировать какой-нибудь
  ; html шаблон.
  (-> (list [:head
             [:title (str "Snippet " id)]
             [:script {:src (str "/js/" id)}]]
            [:body])
      html5))

(defroutes app
  (GET "/js/:id" [id] (snippet-js id))
  (GET "/html/:id" [id] (snippet-html id))
  ...)
```

Теперь перезапустим сервер и откроем [http://localhost:8080/html/42](http://localhost:8080/html/42), мы должны увидеть пустую страницу и сообщение "I am snippet 42!" в js консоли.

### Шаг 3 - Реализуем посылку кода
Осталось чуть-чуть! Теперь добавим поддержку `/create` запроса и изменим джаваскриптовую `send` функцию. Компиляцию cljs->js мы пока не делаем, просто сохраняем исходники без изменениея. Формат запроса (json):

```javascript
{"source": "Some cljs code here."}
```

И ответ (json):

```javascript
{"id": "12345"}
```

Изменяем cljsbin.clj:

```clojure
(ns cljsbin
  (:require [compojure.core :refer [defroutes GET POST]]
            ...
            [ring.middleware.json :as json]))

; Сохраняем сниппеты в атоме. Мы могли бы использовать
; БД здесь, но в конце концов у нас же cljsfiddle для
; бедных.
; Структура мапы: id->js
(def snippets (atom {}))

; Генератор уникальных id.
(let [id (atom 0)]
  (defn next-id []
    (str (swap! id inc))))

; Реализация "/create".
; Сохраняем исходник и возвращаем id.
(defn create-snippet [source]
  (let [id (next-id)]
    (swap! snippets assoc id source)
    (resp/response {:id id})))

; Изменённый snippet-js. Сейчас уже ипользуется не
; статическая строка в качестве js кода, а он извлекается
; из атома со снипетами.
(defn snippet-js [id]
  (-> (@snippets id)
      (resp/response)
      (resp/content-type "application/javascript")))

(defroutes app
  (POST "/create" req (-> req :body :source create-snippet))
  ...)

; Используем ring middleware для декодирование/кодирования
; json запросов/ответов.
(def handler
  (-> app
      (json/wrap-json-body {:keywords? true})
      json/wrap-json-response))
```

Изменяем script.js:

```javascript
function send() {
    var data = {source: $('#source').val()};
    $.ajax({
        url: '/create',
        method: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(resp) {
            var src = '/html/' + resp.id;
            $('#result').attr('src', src);
        }
    });
}

...
```

Я очень извиняюсь за то, что использую неправославный джаваскрипт вместо благословлённого кложурскрипта, но у меня рука не поднялась настраивать cljsbuild и прочую штуку для несчастных 16 строк. Теперь опять перезапускаем сервер, только в этот раз используем `cljsbin/handler` вместо `cljsbin/app`. Открываем [http://localhost:8080](http://localhost:8080) и пробуем послать следующий код:

```javascript
window.addEventListener('load', function() {
  document.body.innerHTML = 'I am alive!';
});
```

Мы должны увидеть сообщение 'I am alive!' в iframe справа. У нас получился [jsfiddle](http://jsfiddle.net) для бедных!

### Шаг 4 - Компиляция кложурскрипта

Наконец-то, самая интересная часть - компиляция cljs->js. Перейдём сразу к коду:

```clojure
(ns cljsbin
  (:require ...
            [cljs.closure :as cljs]
            [me.raynes.fs :as fs]))

; Создаём временную директорию, где будет происходить компиляция.
; Директория помогает ускорить процесс компиляции: компилятор хранит
; промежуточные результаты в ней. Например в ней он хранит скомпиленные
; в js cljs.core и clojure.* неймспейсы. Директория опциональна.
(def cljs-compilation-dir (fs/temp-dir "cljs-compilation"))

(defn compile-cljs [source]
  (let [; Компилятор предпочитает работать с файлами, так что
        ; создадим временные файлы для хранение исходника и
        ; скомпилированного результата.
        source-file (fs/temp-file "cljs-source")
        compiled-file (fs/temp-file "cljs-compiled")]

    ; Пишем исходник во временный файл.
    (spit source-file source)

    ; Компилируем, используя :simple уровень оптимизации.
    (cljs/build source-file
                {:optimizations :simple
                 :output-to (.getAbsolutePath compiled-file)
                 :output-dir (.getAbsolutePath cljs-compilation-dir)
                 :pretty-print true})

    ; Читаем скомпиленный код и удаляем временные файлы.
    (let [compiled (slurp compiled-file)]
      (fs/delete source-file)
      (fs/delete compiled-file)
      compiled)))

; Обновлённый create-snippet
(defn create-snippet [source]
  (let [id (next-id)
        js (compile-cljs source)]
    (swap! snippets assoc id js)
    (resp/response {:id id})))
```

Перезапускаем сервер в последний раз и пробуем послать следующий код (возможно придётся немного подождать, пока он компилируется):

```clojure
(ns hello
  (:require [clojure.browser.dom :as dom]))

(defn say-hello []
  (->> "Hello from ClojureScript!"
       (dom/element)
       (dom/append (.-body js/document))))

(.addEventListener js/window "load" say-hello)
```

Наслаждаемся приветствием от кложурскрипта! Теперь можно начинать работу над промо-видео и запуском проекта на кикстартере.

### Заключение

Мы сделали простенький cljsfiddle менее чем в 60 строк на кложуре (и 16 на джаваскрипте), что, по-моему, весьма неплохо. В данный момент я работаю над созданием cljsfiddle-подобного сайта для [Quil](https://github.com/quil/quil): я хочу сделать сайт для того, чтобы делиться скетчами, написанными под Quil на кложурскрипте. Ещё одна приятная особенность кложурскрипт компилятора заключается в том, что легко подключать другие кложурскрипт библиотеки, которые могут быть использованы из кода, который мы компилируем - нужано просто добавить их в project.clj и всё! Компилятор сам выяснит, какие из них используются в коде, достанёт и скомпилит их.

Компиляция состоит из 2 основных шагов:

1. Компиляция cljs файлов и их зависимостей в отдельные js файлы.
2. Компиляция всех этих js файлов в финальный js файл используя [Google Closure Compiler](https://developers.google.com/closure/compiler/).

Я использовал `cljs.closure/build` функцию, которая делает оба этих шага за меня. Джонас в cljsfiddle выбрал другой способ: он использует кложурскрипт компилятор только для того, чтобы выполнить шаг 1, и потом делает шаг 2 вручную: [шаг 1](https://github.com/jonase/cljsfiddle/blob/9565ccf0d256fdbf97bf524dafb499ed470f32cc/src/clj/cljsfiddle/closure.clj#L33) и [шаг 2](https://github.com/jonase/cljsfiddle/blob/9565ccf0d256fdbf97bf524dafb499ed470f32cc/src/clj/cljsfiddle/closure.clj#L47). Это позволяет ему компилировать в памяти, не используя файлы. Но выглядит это более сложно. Скорее всего есть и другие преимущества такого подхода, буду рад услышать о них в комментариях.

Код из данного поста доступен на [GitHub](https://github.com/nbeloglazov/blog-projects/tree/master/cljsbin.)
