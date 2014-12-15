---
layout: post
title: Mongo Backup Using Clojure
date: "2014-12-15 00:00:00"
---

In this post I'll show a simple tool that creates Mongo backup and uploads it to [Google Cloud Storage](https://cloud.google.com/storage/). Suppose you have a small webproject that uses mongo. The project runs on a single machine on some cloud provider. And you want to have periodic mongo backups. Potentially you can achieve it using features of your provider like disk snapshots, but it may require shutting down the machine or unmounting disk and it feels heavy and not fun. Instead we'll create our own tool that periodically creates backups and uploads them to a file hosting service like Dropbox or Google Drive or (in my case) Google Cloud Storage. I use Google Cloud Storage because I'm already using [Google Cloud Platform](https://cloud.google.com/) as hosting for [Hatnik](http://hatnik.com) so why not to use available services?

The tool is relatively small and consists of 2 parts: backup creation and uploading.

### Create backup

Assumptions: mongo instance doesn't require authentication and OS is linux.

```clojure
(require '[clojure.java
            [shell :refer [sh with-sh-dir]]
            [io :refer [file]]])

(defn clean
  "Removes old dump from current folder if exists."
  []
  (sh "rm" "-r" "dump")
  (sh "rm" "dump.zip"))

(defn create-dump
  "Creates dump and pack it into dump.zip file in current folder."
  []
  (clean)
  (sh "mongodump")
  (sh "zip" "-r" "dump.zip" "dump"))

(defn archive-name
  "Generates name for dump file. That's how it will be saved in Cloud Storage."
  []
  (-> (java.text.SimpleDateFormat. "yyyy-MM-dd_kk-mm")
      (.format (java.util.Date.))
      (str ".zip")))
```

As you can see it is pretty trivial. We use `mongodump` utility for creating dump from running mongo instance. Mongo [docs](http://docs.mongodb.org/manual/core/backups/#backup-with-mongodump) say that it should be used only for small deployments as it hurts performance.

### Uploading to cloud

Now we're going to jump through Google API hoops in order to upload single zip file. First of all you should setup [service account](https://cloud.google.com/storage/docs/authentication#service_accounts) that will allow the tool to upload to the storage. It will generate an email address and private key that will be used for authentication. Now let's go to code. To simplify things we will be using official java library for working with Google Cloud Storage ([javadocs](https://developers.google.com/resources/api-libraries/documentation/storage/v1/java/latest/)). In the code I omit all imports as there are quite a few of them and you can get them from github project at the end of the post.

```clojure
(def email-address "<YOUR SERVICE ACCOUNT EMAIL HERE>")
(def p12-file (file "<PATH TO PRIVATE KEY FILE>"))
(def bucket-name "mongo-backups")
(def app-name "<YOUR GOOGLE CLOUD PROJECT NAME>") ; not sure if it's actually needed

(defn authorize
  "Authorizes app and returns credentials object that will be used to
  create storage object."
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
  "Authorizes and creates storage object."
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

And finally glue both parts together:

```clojure
(defn create-and-upload-dump []
  (with-sh-dir "/tmp"
    (create-dump)
    (upload-zip-file (archive-name) (file "/tmp/dump.zip"))
    (clean)))

; main method needed to run the tool from command line
(defn -main [& args]
  (create-and-upload-dump))
```

That's all. You can test the tool by executing `create-and-upload-dump` function from repl.

### Create cron job

Now we can generate executable jar using `lein uberjar`, copy it to some directory on the server together with private key file and create daily cron job by creating script in `/etc/cron.daily` folder. My cron job looks like this:

```bash
#!/bin/sh
#
# Daily mongo backups

WORKING_DIR=/home/nbeloglazov/backup
cd $WORKING_DIR
java -jar $WORKING_DIR/backup.jar
```

I suspect that if Dropbox or something else is used instead of Google Cloud Storage then code should be simpler. Authentication in Google APIs is kinda messy and it's not easy to find correct combination and order of methods to call to make it work.

For reference here is a complete working version of the tool: [project on GitHub](https://github.com/nbeloglazov/hatnik/tree/master/tools/backup).

