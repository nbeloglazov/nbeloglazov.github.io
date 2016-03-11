---
layout: post
title: Getting Started with Self-Hosted ClojureScript. Part 3.
date: "2016-03-11 00:00:00"
single_language: true
---

 * [Part 1](/2016/03/05/getting-started-with-self-hosted-cljs-part-1.html)
 * [Part 2](/2016/03/07/getting-started-with-self-hosted-cljs-part-2.html)
 * Part 3


In previous parts of this tutorial we learned how to compile ClojureScript code using only ClojureScript. In this article we'll see how we can optimize this process by using compilation cache.

### Cache in self-hosted cljs

If you read [documentation](https://github.com/cljsinfo/cljs-api-docs/blob/catalog/refs/cljs.js/STARload-fnSTAR.md) for `*load-fn*` carefully you probably noticed that one of the values we can pass to to callback function is `:cache` . When is it useful? A couple of use case come in mind:

1. In jsfiddle-like service. Your service might provide a set of cljs libraries to use. It makes sense to precompile all these libraries as they don't change from user to user. That's what I do for Quil: I precompile `quil.core` and load cache only, no source code. Fully compiling Quil using self-hosted js takes around 5 sec on my laptop which is quite a lot especially if you want to compile simple sketch.
2. Mike Fikes [uses](http://blog.fikesfarm.com/posts/2016-02-03-planck-macros-aot.html) caching capabilities to precompile macros for Planck, OS X ClojureScript REPL.
3. Going further I can imagine web IDE for ClojureScript. In such IDE project might consist of dozens of cljs files and compiling them might be long. To optimize cache of each source file compilation might be stored in browser local storage and reused.

Let's cache now! The first question is where do we get cache from? Obviously, we need to compile source first and somehow get cache from that compilation. Here is the way I did it: you can pass `:cache-source` function in compilation `opts` map. This function will be called once each namespace is compiled and compiler passes a map that contains compiled source and analysis cache. For now, let's simply log the map in console:

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

(defn print-cache [opts cb]
  (pprint opts)
  (cb {:value nil}))

(compile source {:eval cjs/js-eval
                 :load load-inlined
                 :cache-source print-cache})
```

Note that `print-cache` takes 2 arguments: map with cache data and callback to call once we're done with processing cache. In our case we print cache and call `cb` immediately after that. Here is the cache we get in console:

```clojure
{:lang :clj,
 :name my.math,
 :path "my/math",
 :source
 "goog.provide(\"my.math$macros\");\nmy.math$macros.triple = (function my$math$macros$triple(_AMPERSAND_form,_AMPERSAND_env,x){\nreturn ((3) * x);\n});\n\nmy.math$macros.triple.cljs$lang$macro = true;\n",
 :cache
 {:use-macros nil,
  :excludes #{},
  :name my.math$macros,
  :imports nil,
  :requires nil,
  :uses nil,
  :defs
  {triple
   {:protocol-inline nil,
    :meta
    {:file my.math,
     :line 1,
     :column 24,
     :end-line 1,
     :end-column 30,
     :macro true,
     :arglists '([x])},
    :name my.math$macros/triple,
    :variadic false,
    :file nil,
    :end-column 30,
    :method-params ([&form &env x]),
    :protocol-impl nil,
    :arglists-meta (nil nil),
    :column 14,
    :line 1,
    :macro true,
    :end-line 1,
    :max-fixed-arity 3,
    :fn-var true,
    :arglists '([x])}},
  :require-macros nil,
  :doc nil}}
```

Now is the time to compile using that cache. To achieve that we're going to replace `load-inlined` function with `load-cached`. `load-cached` is going to return cache data you saw above (I simply copy-pasted it):

```clojure
(def cache
  {'my.math '{:source "goog.provide(\"my.math$macros\");\nmy.math$macros.triple = (function my$math$macros$triple(_AMPERSAND_form,_AMPERSAND_env,x){\nreturn ((3) * x);\n});\n\nmy.math$macros.triple.cljs$lang$macro = true;\n",
              :cache {:use-macros nil, :excludes #{}, :name my.math$macros, :imports nil, :requires nil, :uses nil, :defs {triple {:protocol-inline nil, :meta {:file my.math, :line 1, :column 24, :end-line 1, :end-column 30, :macro true, :arglists (quote ([x]))}, :name my.math$macros/triple, :variadic false, :file nil, :end-column 30, :method-params ([&form &env x]), :protocol-impl nil, :arglists-meta (nil nil), :column 14, :line 1, :macro true, :end-line 1, :max-fixed-arity 3, :fn-var true, :arglists (quote ([x]))}}, :require-macros nil, :doc nil}}})

(def source "
  (ns my.test (:require-macros my.math))
  (my.math/triple 5)")

(defn load-cached [opts cb]
  (println "Loading cached dependency" opts)
  (if-let [dep (cache (:name opts))]
    (cb {:lang :js :source (:source dep) :cache (:cache dep)})
    (throw (js/Error. (str "Unknown namespace " opts)))))

(defn print-cache [opts cb]
  (pr opts)
  (cb {:value nil}))

(compile source {:eval cjs/js-eval
                 :load load-cached
                 :cache-source print-cache})
```

Console output:

```javascript
goog.provide('my.test');
goog.require('cljs.core');
my.test.foo = (15);
```

It works! Few notes:

* We never pass the source of `my.math` to the compiler. Instead we pass compiled js and analysis cache.
* When using cache we provide compiled js so `:lang` must be set to `:js`, not `:clj` as we did before.
* If experimenting with it yourself - don't forget to add quote `'` before cache map because it contains symbols and without quoting ClojureScript is going to try and resolve them thinking that they're actual variables.
* A map passed to `:cache-source` doesn't tell you if a namespace is macro or regular. Check the cache above and you'll see that there is no `:macro true` or similar in it. It might be problematic if you have some namespace compiled both as macros and as regular namespace. For example in Part 2 we had `my.math` both as macro and regular namespace. In that case `:cache-source` will be called twice and you'll have to figure out if given cache is for macro or regular namespace. One workaround is to check `(:name (:cache opts))` which has `$macros` at the end  if it's a macro namespace.

In your real application you probably want to gather caches of all namespaces and save them somewhere for later use. There are various ways to do it. For example, I collect all caches into an atom and once everything compiled I save the content of the atom in a file on disk (I'm running on nodejs so I have access to filesystem).

### Conclusion

I hope this tutorial was useful and helped to start working with self-hosted cljs. Personally, I believe it is important to have a way to experiment with self-hosted cljs without distractions of loading files from a filesystem, understanding the difference between clj, cljs, cljc files and other. The compiler doesn't care about it at all.  That's what I tried to do in this tutorial: having single file that contains all necessary data to play with self-hosted cljs. If you're interested in more advanced/practical things here are some tips:

* Checkout amazing Mike Fikes' blog: [http://blog.fikesfarm.com/](http://blog.fikesfarm.com/). It contains a lot of insights on various self-hosted cljs things.
* Checkout articles on ClojureScript [wiki](https://github.com/clojure/clojurescript/wiki) about bootstrapped cljs.
* Checkout [replumb](https://github.com/Lambda-X/replumb) library that does some plumbing of self-hosted cljs infrastructure.
* If you have problems, ask on ClojureScript mailing list. There are many experienced people (e.g Mike) who're willing to help.
* If something doesn't work as you expect - it might be a bug. There are still some rough edges in self-hosted cljs and you might stumble upon one. Try to prepare minimal reproducible example and send it to the mailing list.
* Try reading and debugging [`js.cljs`](https://github.com/clojure/clojurescript/blob/master/src/main/cljs/cljs/js.cljs) source code. It's not easy but very useful if you get some issues with cljs compilation.

Have fun with self-hosted cljs!
