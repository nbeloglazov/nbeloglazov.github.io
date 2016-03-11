---
layout: post
title: Getting Started with Self-Hosted ClojureScript. Part 2.
date: "2016-03-07 00:00:00"
single_language: true
---

 * [Part 1](/2016/03/05/getting-started-with-self-hosted-cljs-part-1.html)
 * Part 2
 * [Part 3](/2016/03/11/getting-started-with-self-hosted-cljs-part-3.html)

In [Part 1](/2016/03/05/getting-started-with-self-hosted-cljs-part-1.html) we learned how to compile simple cljs namespaces. Here is what we had at the end of the previous article:


```clojure
(ns my.main
  (:require [cljs.js :as cjs]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(def state (cjs/empty-state))

(defn compile [source opts]
  (cjs/compile-str state source "bla" opts #(println (:value %))))

(def source "
  (ns my.test)
  (defn triple [x] (* x 3))
  (triple 5)")

(compile source {:eval cjs/js-eval})
```

Let's modify callback function in `compile` function so it prints compiled code if it was successful or error otherwise:

```clojure
(defn print-result [res]
  (if (:value res)
    (println (:value res))
    (pprint res)))

(defn compile [source opts]
  (cjs/compile-str state source "bla" opts print-result))
```

### Adding some :require
Now we're going to use functions from other namespaces. We're going to move function `triple` into separate namespace `my.math` and require `my.math` from `my.test`. When cljs compiles namespace and sees that it requires another namespace - the compiler needs to get the source of that dependancy namespace as well. The compiler doesn't know how to get them (all it knows is how to compile). So we have to provide a `load` function that given namespace name loads source of the namespace. Usually, this `load` function fetches clj/cljs/cljc files from disk. We want to keep it simple so we're going to inline source of `my.math` in our file without loading it from anywhere. Here is the code:

```clojure
(def deps {
  'my.math "(ns my.math) (defn triple [x] (* 3 x))"})

(def source "
  (ns my.test (:require my.math))
  (my.math/triple 5)")

(defn load-inlined [opts cb]
  (println "Loading dependency" opts)
  (if-let [dep-source (deps (:name opts))]
    (cb {:lang :clj :source dep-source})
    (throw (js/Error. (str "Unknown namespace " opts)))))

(compile source {:eval cjs/js-eval :load load-inlined})
```
Console output:

```text
Loading dependency {:name my.math, :path my/math}

goog.provide('my.test');
goog.require('cljs.core');
goog.require('my.math');
my.math.triple.call(null,(5));
```
Note that final output contains only compiled `source`, it doesn't include compiled `my.math` which is a dependency. Compiler didn't actually compile `my.math`, just analyzed it. If you try adding a typo, e.g. change `(my.math/triple 5)` to `(my.math/truple 5)` you'll get an warning in console:

```text
Loading dependency {:name my.math, :path my/math}
WARNING: Use of undeclared Var my.math/truple at line 3

goog.provide('my.test');
goog.require('cljs.core');
goog.require('my.math');
my.math.truple.call(null,(5));
```

You see that source is still compiled with `truple` but the compiler warned us that it haven't found `truple` function in `my.math` namespace. Note that content of `my.math` namespace doesn't affect compilation of source in any way. We could even return an empty string for `my.math`. In that case, `source` would still be compiled the same way, but the compiler would warn us that we're using undeclared functions.
<br><br>
You can add more dependencies. For example `my.math` might require additional namespaces and compiler will try to load them using the `load` function we provided. Even if you require some standard namespaces like `clojure.string` - compiler still asks us to provide the source. We can either load real source file from ClojureScript jar file or just return an empty string and ignore compiler warnings about calling undeclared functions `clojure.string`.

### How about macros?

One really cool feature of self-hosted cljs is that it can compile and expand macros. Macros are an important part of Clojure/ClojureScript ecosystem and without this feature, self-hosted cljs can't be truly self-hosted. Macros in self-hosted cljs work similar to regular ClojureScript: `source` is a regular cljs file that contains definitions of functions, variables, calls functions from other namespaces and also may call macros. But it cannot define macros: if you add `defmacro` to cljs source it will be ignored and you won't be able to use it. Macros must be defined in separate "macros" namespaces. With regular ClojureScript you put macros in .clj files not .cljs. In self-hosted cljs it is similar but instead of .clj vs .cljs files there is macros vs regular namespaces. How does compiler load macros namespaces? Using the `load` function we passed in compile options map. For macros namespaces, it adds `:macros true` so we (implementors of `load` function) can understand which type of namespaces compiler needs. Let's see it in practice.
<br><br>
We're going to turn `triple` function into a macro: it's going to perform multiplication during compile time instead of runtime. This macro is going to work only if you pass a number. Code hasn't changed much:

```clojure
(def deps {
  'my.math "(ns my.math) (defmacro triple [x] (* 3 x))"})

(def source "
  (ns my.test (:require-macros my.math))
  (def foo (my.math/triple 5))")

(defn load-inlined [opts cb]
  (println "Loading dependency" opts)
  (if-let [dep-source (deps (:name opts))]
    (cb {:lang :clj :source dep-source})
    (throw (js/Error. (str "Unknown namespace " opts)))))

(compile source {:eval cjs/js-eval
                 :load load-inlined})

```

Note that we now use `:require-macros` instead of `:require` in `my.test` and `triple` is now defined as `defmacro`, not `defn`. Console output:

```text
Loading dependency {:name my.math, :macros true, :path my/math}

goog.provide('my.test');
goog.require('cljs.core');
my.test.foo = (15);
```

Compiler applied `triple` macro to number 5 during compilation and we got `15` even without evaluating compiled code! Also take closer look at `Loading dependency {:name my.math, :macros true, :path my/math}`. It now has `:macros true` which wasn't there before. This means that compiler asked us to load macros `my.math` namespace, not a regular namespace. It is possible that same namespace is loaded "twice": as macros and as regular namespace. But it doesn't mean that we have to return the same source for both cases. On the contrary, usually "macros" namespace has, well, some `defmacro` in it and regular namespaces has regular cljs functions. We'll see such example in a little bit.
<br><br>
How does cljs apply macros? Roughly the process is following: the compiler compiles macros namespace to js, `defmacro` becomes js functions with additional properties, then it uses these freshly evaluated js function whenever it finds macro calls. So far we've seen only final compiled js from `source`, but under the hood the compiler also compiles `my.math` namespace because now it's macro namespace. Is there a way to see it so we can better understand how it works? Fortunately, there is. You can add `:verbose true` to compile options and it will enable internal debug logs. It is super useful if you're trying to debug some issue with compilation in dependencies. Let's see what we get:

```clojure
(compile source {:eval cjs/js-eval
                 :load load-inlined
                 :verbose true})
```

Console output:

```text
Namespace side effects for my.test
Processing :use-macros for my.test
Processing :require-macros for my.test
Loading my.math macros namespace
Loading dependency {:name my.math, :macros true, :path my/math}
Evaluating my.math
Namespace side effects for my.math
Processing :use-macros for my.math
Processing :require-macros for my.math

goog.provide("my.math$macros");
my.math$macros.triple = (function my$math$macros$triple(_AMPERSAND_form,_AMPERSAND_env,x){
return ((3) * x);
});
my.math$macros.triple.cljs$lang$macro = true;

goog.provide('my.test');
goog.require('cljs.core');
my.test.foo = (15);
```

It might be somewhat noisy but take a look at the last 2 chunks of code. The first defines `my.math$macros` namespace which is our macros namespace that compiler used under the hood. You can see that it has special `$macros` suffix that helps to keep it separate from regular namespaces. The last chunk of code is compiled `source` which we already saw, so nothing interesting here. With `:verbose` output compiler prints all code it compiles and evaluates which is cool.
<br><br>
Let's try now load the same namespace twice: as macro and as regular namespace. We're going to fix `triple` macro so it does following: if the argument is a number - perform multiplication during compile time, otherwise (if it is a variable or call to other function) defer calculation to `triple-fn` function. In order to do that, we need to fix our `load-inlined` function. Right now it is dumb and cannot distinguish between macros and regular namespaces, but in real life you should distinguish between these two cases. Actually, [documentation](https://github.com/cljsinfo/cljs-api-docs/blob/catalog/refs/cljs.js/STARload-fnSTAR.md) for `*load-fn*` suggests that when loading macros namespace you should use only .clj or .cljc files and for regular namespaces .cljs or .cljc files. In our case, we're going to have 2 maps of inlined namespaces: `deps-macros` and `deps-regular`. Here it is:

```clojure
(def deps-macros
  {'my.math "
  (ns my.math)
  (defmacro triple [x]
    (if (number? x)
      (* 3 x)
      `(my.math/triple-fn ~x)))"})

(def deps-regular
  {'my.math "(ns my.math) (defn triple-fn [x] (* 3 x))"})

(def source "
  (ns my.test (:require my.math) (:require-macros my.math))
  (def five 5)
  (+ (my.math/triple 5) (my.math/triple five))")


(defn load-inlined [opts cb]
  (println "Loading dependency" opts)
  (let [deps (if (:macros opts) deps-macros deps-regular)
        source (deps (:name opts))]
    (if source
      (cb {:lang :clj :source source})
      (throw (js/Error. (str "Unknown namespace " opts))))))

(compile source {:eval cjs/js-eval
                 :load load-inlined
                 :verbose true})
```

Console output (debug info omitted):

```text
Loading dependency {:name my.math, :macros nil, :path my/math}
Loading dependency {:name my.math, :macros true, :path my/math}

goog.provide("my.test");
my.test.five = (5);
((15) + my.math.triple_fn.call(null,my.test.five));
```

 It worked! You can see that `my.math` was loaded twice. First as regular namespace and second time as macro namespaces. From compiled code we see that the first call to `triple` was calculated in-place while the second was deferred to `triple-fn`. Just like we expected. But to be honest, this example is not complete because even though `my.math` was loaded twice, the compiler compiled only macro namespace and didn't compile regular namespace, just analyzed it. To make it fully work replace `cjs/compile-str` with `cjs/eval-str` in `compile` function and now it should fully compile and evaluate each namespace and produce "30" in console output. Also, with `verbose` output you should see all 3 namespaces being compiled under the hood.
<br><br>
Initially, I wanted to make this example more elegant by making `triple` both macro and function. This way we can use `triple` anywhere. Where possible compiler precomputes and where it is not possible - defers it to runtime `triple` function. I tried following:

```clojure
(defmacro triple [x]
  (if (number? x)
    (* 3 x)
    `(my.math/triple ~x)))
```

But the problem here that when compiler processes `(my.math/triple five)` - it thinks that it is macro and expands it to `(my.math/triple five)` and ... expands it again. And again. And again. And many more times until we're out of stack. Basically, the compiler doesn't know if we use `my.math/triple` as macro or function. One way hack I found is to make "function" call look more like js call and not regular clojure:

```clojure
(defmacro triple [x]
  (if (number? x)
    (* 3 x)
    `(.triple js/my.math ~x)))
```

This way the compiler doesn't try to expand result as macro. But it doesn't look clojurish and I decided to go with more clunky `triple-fn` instead. I don't know if there is a better way to do it.
<br><br>
That's all for today. We learned how to compile both regular cljs and macros in self-hosted cljs! In the [next article](/2016/03/11/getting-started-with-self-hosted-cljs-part-3.html), I'll show how to optimize compilation using cache.
