---
layout: post
title: Poor Man's Cljsfiddle
date: "2014-08-16 22:00:00"
---

### Intro
In this post I'll describe how to create poor man's cljsfiddle in 4 steps. Rich man's [cljsfiddle](http://cljsfiddle.net/) is a website similar to [jsfiddle](http://jsfiddle.net/) which allows you to try and test clojurescript snippets online. It was created by [Jonas](https://github.com/jonase) during [Lisp in Summer Projects](http://lispinsummerprojects.org/) (he took first place!). Cljsfiddle is pretty cool and I encourage you to try it out. But let's get back to our own cljsfidle. Let's call it cljsbin to avoid confusion. Cljsbin will have only 3 elements on a page: textarea for writing clojurescript, send button and iframe for running compiled cljs code. Minimalist design for the win!

How it should work:

1. User puts clojurescript to the textarea code and clicks "Send".
2. A POST `/create` request is sent. The request contains cljs source.
3. The server receives the request, generates unique id for the new snippet, compiles the source and responds with the id.
4. Upon receiving response browser extracts the id and sets `src` attribute of the iframe to `/html/ID`.
5. Iframe loads html file from the server. The file imports single script file: `/js/ID`. The script contains compiled js which is executed inside the iframe.

### Step 0 - Create Project
Project structure:

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

### Step 1 - Serve Static Siles
We start by creating a server that does only static files. The server will serve 3 static files: index.html, styles.css and script.js (we need a little bit of js to handle button click).

cljsbin.clj:

```clojure
(ns cljsbin
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [files]]))

(defroutes app
  ; Serve index.html as initial page when user requests
  ; http://localhost:8080/
  (GET "/" [] (slurp "public/index.html"))
  ; Serve static files. By default 'public' directory is used.
  ; Example: public/script.js served when user requests
  ; http://localhost:8080/script.js
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

Use [this](https://github.com/nbeloglazov/blog-projects/blob/master/cljsbin/public/styles.css) styles.css.

Run server using jetty:

```clojure
(ring.adapter.jetty/run-jetty cljsbin/app {:port 8080})
```

Open [http://localhost:8080](http://localhost:8080), click button and check js console - you should see "Not implemented" message.

### Step 2 - Serve Iframe Files
Time to serve html and js files which will be loaded by the iframe. Result js file will be static for now as we're not sending code from the page.

```clojure
(ns cljsbin
  (:require ...
            [ring.util.response :as resp]
            [hiccup.page :refer [html5]]))

; Create response for "/js/ID"
(defn snippet-js [id]
  (-> (str "console.log('I am snippet " id "!');")
      (resp/response)
      (resp/content-type "application/javascript")))

; Create response for "/html/ID"
(defn snippet-html [id]
  ; Html structure is dead simple so it is easier to use hiccup here
  ; then load/update html template.
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

Now reload the server and open [http://localhost:8080/html/42](http://localhost:8080/html/42), you should see blank page and "I am snippet 42!" message in the js console.

### Step 3 - Implement Send
We're almost there! Let's implement `/create` request now and update js `send` function. No cljs->js compilation yet, just store source and serve it without modification. Format of request (json):

```javascript
{"source": "Some cljs code here."}
```

And response (json):

```javascript
{"id": "12345"}
```

Update for cljsbin.clj:

```clojure
(ns cljsbin
  (:require [compojure.core :refer [defroutes GET POST]]
            ...
            [ring.middleware.json :as json]))

; Save all snippets in an atom. We could use db,
; but we're doing poor's man cljsfiddle after all.
; Map structure: id -> js.
(def snippets (atom {}))

; Unique id generator.
(let [id (atom 0)]
  (defn next-id []
    (str (swap! id inc))))

; Implementation of "/create".
; Store source and return snippet id.
(defn create-snippet [source]
  (let [id (next-id)]
    (swap! snippets assoc id source)
    (resp/response {:id id})))

; Updated snippet-js. Note that now it retrieves js from
; the snippet atom instead of using static string.
(defn snippet-js [id]
  (-> (@snippets id)
      (resp/response)
      (resp/content-type "application/javascript")))

(defroutes app
  (POST "/create" req (-> req :body :source create-snippet))
  ...)

; Use ring middleware to decode/encode json requests/response.
(def handler
  (-> app
      (json/wrap-json-body {:keywords? true})
      json/wrap-json-response))
```

Update script.js:

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

I'm very sorry for using unholy javascript here instead of blessed clojurescript, but I couldn't make myself setup all cljsbuild stuff for mere 16 lines of js. Now restart the server, but using `cljsbin/handler` instead of `cljsbin/app` this time. Open [http://localhost:8080](http://localhost:8080) and try to send following code:

```javascript
window.addEventListener('load', function() {
  document.body.innerHTML = 'I am alive!';
});
```

You should see 'I am alive!' message in the iframe on the right. We got poor's man [jsfiddle](http://jsfiddle.net)!

### Step 4 - Clojurescript Compilation

Finally, the most interesting part - cljs-> js compilation. Let's go straight to code:

```clojure
(ns cljsbin
  (:require ...
            [cljs.closure :as cljs]
            [me.raynes.fs :as fs]))

; Create temp dir where cljs will be compiled.
; It is used to speed up compilation: clojurescript compiler stores
; intermediate results there. For example cljs.core and clojure.*
; namespaces compiled to js. The directory is optional.
(def cljs-compilation-dir (fs/temp-dir "cljs-compilation"))

(defn compile-cljs [source]
  (let [; Clojurescript compiler prefers to work with files as
        ; input/outputs so we create temp files for the source
        ; and compiled output
        source-file (fs/temp-file "cljs-source")
        compiled-file (fs/temp-file "cljs-compiled")]

    ; Write source into the temp file.
    (spit source-file source)

    ; Compile source using :simple level of optimization.
    (cljs/build source-file
                {:optimizations :simple
                 :output-to (.getAbsolutePath compiled-file)
                 :output-dir (.getAbsolutePath cljs-compilation-dir)
                 :pretty-print true})

    ; Read compiled output and cleanup temp files.
    (let [compiled (slurp compiled-file)]
      (fs/delete source-file)
      (fs/delete compiled-file)
      compiled)))

; Updated create-snippet
(defn create-snippet [source]
  (let [id (next-id)
        js (compile-cljs source)]
    (swap! snippets assoc id js)
    (resp/response {:id id})))
```

Restart the server for the last time and try sending cljs code (you might need to wait a little while cljs is compiled):

```clojure
(ns hello
  (:require [clojure.browser.dom :as dom]))

(defn say-hello []
  (->> "Hello from ClojureScript!"
       (dom/element)
       (dom/append (.-body js/document))))

(.addEventListener js/window "load" say-hello)
```

Enjoy greetings from clojurescript! Time to create an awesome promo video and launch Kickstarter campaign...

### Final thoughts

We did simple cljsfiddle app in less than 60 lines of clojure code (and 16 lines of javascript), which is pretty cool, I think. Currently I'm working on cljsfiddle-kinda-clone for [Quil](https://github.com/quil/quil): I want to create a website for sharing sketches written in Quil on ClojureScript. And that work inspired me to write this post. Nice thing about using clojurescript compiler is that it is very simple to add support for other cljs libraries when compiling cljs code: just include them into your `project.clj` and compiler automatically discovers and compiles them.

Cljs compilation consists of 2 major steps:

1. Compile cljs files and their dependencies to separate js files.
2. Compile js files to a single js file using [Google Closure Compiler](https://developers.google.com/closure/compiler/).

I used `cljs.closure/build` function which does both steps for me. Jonas in his cljsfiddle chose another way: he uses clojurescript compiler to perform only step 1 and then he does step 2 manually: [step 1](https://github.com/jonase/cljsfiddle/blob/9565ccf0d256fdbf97bf524dafb499ed470f32cc/src/clj/cljsfiddle/closure.clj#L33) and [step 2](https://github.com/jonase/cljsfiddle/blob/9565ccf0d256fdbf97bf524dafb499ed470f32cc/src/clj/cljsfiddle/closure.clj#L47). It allows to perform compilation in memory - no need to use temp files. But it looks more complex. There are most likely other pros, would be glad to hear them.

Code from this post is available on [GitHub](https://github.com/nbeloglazov/blog-projects/tree/master/cljsbin).
