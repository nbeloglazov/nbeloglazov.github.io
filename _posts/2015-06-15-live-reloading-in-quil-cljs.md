---
layout: post
title: Live Reloading in Quil Cljs
date: "2015-06-15 00:00:00"
---
Quil supported live reloading since forever and it has been one of its coolest features. But only in Clojure. ClojureScript version lacked the support until now. Latest Quil release (2.2.6) fixes the problem. Now if you use plugins for live coding in ClojureScript such as [figwheel](https://github.com/bhauman/lein-figwheel) - you'll be able to reload Quil functions (draw, update, key handlers) on fly without reloading the browser. Here is 3 steps instructions how to do it:

1 Create new Quil cljs project: `lein new quil-cljs hello` and go to `hello` folder.  
2 Setup figwheel in `project.clj`:

  ```clojure
  ...
  :plugins [[lein-cljsbuild "1.0.6"]
              [lein-figwheel "0.3.3"]]
  ...
  :cljsbuild {:builds [{:source-paths ["src"]
                          :figwheel true
                          :compiler {...}}]}
  ```

3 Start figwheel: `lein figwheel`.

That's all. Now open `index.html` and you should see a ball rotating around the center of the sketch. When you update `core.clj` and save it - the updates will be reflected in the browser. For example change rotation direction by modifying `update` function: replace plus with minus: `(- (:angle state) 0.1)` and save it. The ball will start rotating in counter-clockwise direction.

Auto-reloading is supported only in `defsketch`. If you use `sketch` function - it won't work (the same as in Clojure version). When `defsketch` macro is used, all functions (draw, update, etc) are wrapped into anonymous functions so they're called by name rather than by value. This allows for reloading to work: when `hello.core/draw` is reloaded by figwheel, quil will call the anonymous function wrapper which in turn calls `hello.core/draw`. It adds some overhead so use `sketch` instead of `defsketch` in "production".
