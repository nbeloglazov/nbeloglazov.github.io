---
layout: post
title: Getting Started with Self-Hosted ClojureScript. Part 1.
date: "2016-03-05 00:00:00"
single_language: true
---

 * Part 1
 * [Part 2](/2016/03/05/getting-started-with-self-hosted-cljs-part-2.html)

ClojureScript is a compiler for Clojure that targets JavaScript. About [7 months ago](https://groups.google.com/forum/#!searchin/clojurescript/1.7.28/clojurescript/Z6xD9UthbvQ/gsLMbURGAgAJ) it got a nice feature that allows you to compile ClojureScript code using ClojureScript: self-hosting. That means that we can now compile ClojureScript fully in browser! That's pretty cool for creating various interactive in-browser tutorials/repls/workspaces/whatever. I've been working on compiling Quil using self-hosted cljs (including macros) and decided to write basic tutorial of how to work with self-hosted cljs. This tutorial uses vanilla cljs without any additional libraries or features like reading files from disk, sending XHR so all you need is to understand basic ClojureScript syntax. In these articles I'll be using latest ClojureScript currently available: 1.7.228.

### Prepare
Let's start with creating a basic cljs project.

```bash
git clone https://github.com/nbeloglazov/blog-projects.git
cd blog-projects/self-hosted-cljs
lein cljsbuild auto
```

Open `index.html` in your browser. Alternatively you can create or reuse any existing cljs project your have.

### Your first compile
Let's start with standard "Hello, world". If you cloned my project the code is already there:

```clojure
(ns my.main
  (:require [cljs.js :as cjs]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(def state (cjs/empty-state))

(cjs/eval-str state
              "(.log js/console \"Hello, world\")"
              "bla"
              {:eval cjs/js-eval}
              identity)
```
Reload the page and you should see "Hello, world" in console. So let's see what's going on here:

1. Require `cljs.js` namespace. That namespace contains all self-hosting-related functions.
2. Define `state` variable that is initialized with empty state. Tbh I don't know what state can contain so I usually pass empty state to all eval/compile functions.
3. Calling `eval-str` to eval cljs code. It takes quite a few of arguments. But the important ones for us here is second (source) and fourth (opts) arguments. Other are "default" and we can ignore them for now. If curious - check [docs](https://github.com/cljsinfo/cljs-api-docs/blob/catalog/refs/cljs.js/eval-str.md) to see what each argument is. In options map we provide a function that is used to evaluated compiled js. Cljs compiler doesn't have default eval function so we have to provide it explicitly all the time. If you take a look at [`js-eval`](https://github.com/cljsinfo/cljs-api-docs/blob/catalog/refs/cljs.js/js-eval.md) function you'll see that it is plain old javascript `eval()` (as name implies), no magic here.

Evaluation is good, but it would be more interesting to see compiled code before it is evaluated. It helps to understand how it works and makes it easier to debug. To see compiled code of `eval-str` we'll be using `compile-str`:

```clojure
(cjs/compile-str state
                 "(.log js/console \"Hello, world\")"
                 "bla"
                 {:eval cjs/js-eval}
                 #(println (:value %)))
```

And output in logs:

```javascript
console.log("Hello, world");
```

The last (fifth) argument is changed from `identity` to `#(println (:value %))`. This argument is a callback function that will be invoked once cljs finished compiling. The result will be passed to the provided callback. In the first example with `eval-str` we didn't really care about the result, we just wanted `console.log` to be evaluated. But now we use `compile-str` and we want to see result of compilation, so we pass a function that takes that result and prints it to console.
<br><br>
Now let's compile real namespace with multiple functions. Also I'm going to introduce helper `compile` function to omit default arguments:

```clojure
(defn compile [source opts]
  (cjs/compile-str state source "bla" opts #(println (:value %))))

(def source "
  (ns my.test)
  (defn triple [x] (* x 3))
  (triple 5)")

(compile source {:eval cjs/js-eval})
```

And result is following:

```js
goog.provide('my.test');
goog.require('cljs.core');
my.test.triple = (function my$test$triple(x){
return (x * (3));
});
my.test.triple.call(null,(5));
```

Compiled code readable and you can pretty easily relate cljs source with compiled js. It has some `goog.provide` and `goog.require` magic which comes from Google Closure compiler used by ClojureScript, but it is quite simple: compiled code declares namespace `my.test` and uses namespace `cljs.core`. Everything else is standard javascript.
<br><br>
Thats all for now. Now we can compile basic cljs namespaces. In the next article we'll be compiling code consisting from multiple namespaces/files and using macros.
