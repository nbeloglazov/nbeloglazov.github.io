---
layout: post
title: Clojure Google Summer of Code Results
date: "2014-09-23 00:00:00"
single_language: true
---
Google Summer of Code is over and here is a summary of great work Clojure students have done this summer!

<br>

Student: Aleksandr Sorokoumov  
Project: [Incanter and core.matrix integration](http://www.google-melange.com/gsoc/project/details/google/gsoc2014/gerrrr/5693417237512192)

I introduced core.matrix as a martix backend for Incanter, instead of clatrix (one of the core.matrix backends). This resulted in a possibility to choose the most appropriate matrix backend for the particular project and transparently switch between them if necessary. Besides, Incanter dataset implementation was replaced by core.matrix one. Due to this, most of the dataset functions are available through core.matrix without a need to install Incanter. More details about Incanter changes can be found in [change log](https://github.com/incanter/incanter/wiki/Incanter-2.0-change-log).

<br>

Student: Alexander Yakushev  
Project: [Lean Clojure/JVM runtime](http://www.google-melange.com/gsoc/project/details/google/gsoc2014/unlogic/5732278101606400)  

During this summer I modified Clojure compiler in a separate branch to produce lean bytecode where all Var objects are replaced with static fields of the namespace class. This simultaneously decreased the time required to load the compiled namespace, the memory footprint of that namespace in memory and the added time cost of dereferencing a var each time it is used. The patched compiler also doesn't emit the bytecode for macros (as they are used only during the macroexpansion and are not needed in runtime) and intelligently elides metadata (so that it is used during compilation but then is not emitted). Some of the observations and thoughts accumulated during this summer were featured in the [blog](http://clojure-android.info/blog/) under "gsoc" tag.

Lean compilation is now tested to correctly compile Clojure, core.async and few small libraries. The easiest way to try it out is to use [lein-skummet](https://github.com/alexander-yakushev/lein-skummet) plugin as described [here](http://clojure-android.info/blog/2014/08/12/gsoc-2014-skummet-alpha1/). The compiler was also trialled with Clojure on Android where it showed significant loading time improvements. The easy-to-use way of using lean compilation in CoA will follow soon with the release of the new lein-droid version (and will be announced in the blog).

Additional resources: [README](https://github.com/ndr-qef/light-aleph), [announcement thread](https://groups.google.com/forum/#!msg/light-table-discussion/gu5RvYS7j94/E7ozA7xJgPYJ).

<br>

Student: Andrea Marchiori  
Project: [Aleph, a BOT browser and introspector for Light Table](https://www.google-melange.com/gsoc/project/details/google/gsoc2014/ndr_qef/5757334940811264)

Light Table leverages the BOT architecture to create a platform designed around extensibility. In BOT, working components are defined by several elements. How these elements are combined, how they interact, and how they affect the application state is a source of complexity that makes BOT opaque. Aleph aims to make BOT accessible by providing a uniform interface for querying and recording state at runtime.

<br>

Student: Di Xu  
Project: [Typed Clojure: Heterogeneous operations & Dotted Polymorphism](https://www.google-melange.com/gsoc/project/details/google/gsoc2014/xudifsd/5717271485874176)

I added two more function type to Typed Clojure, which can be used to annotate some built-in and/or user-defined functions like `assoc` and `hash-map`. Without those two types, type checking some custom variants accurately becomes impossible without hard-coding each variant into the type checker.

I've written documentation under doc of my git tree, including document about [my implementation](https://github.com/xudifsd/core.typed/blob/repeat-support/docs/infer-detail.md), and general [introduction](https://github.com/xudifsd/core.typed/blob/repeat-support/docs/tutorial-on-inference.md) of type inference used in Typed Clojure.
 
I also published a [blog post](http://xudifsd.org/blog/2014/08/%E5%85%B3%E4%BA%8Etyped-clojure/) to introduce Typed Clojure in Chinese.

<br>

Student: Maksim Karandashov  
Project: [Quil on ClojureScript](https://www.google-melange.com/gsoc/project/details/google/gsoc2014/norgat/5676830073815040)

Quil is a library for creating animated sketches. It is based on a very popular Java library Processing. During this summer I've added ClojureScript support to Quil. I used cljx to make Quil crossplatform and Processing.js for ClojureScript version. Current version of Quil allows you to create a sketch that can be run on Clojure or ClojureScript without modifications (or even both using cljx). I've also created Processing.js [externs](https://github.com/quil/processing-js/tree/master/resources/externs) for Google Closure Compiler and Leiningen [templates](https://github.com/quil/quil-templates) for Quil (for Clojure and ClojureScript).

For more information check Quil ClojureScript [wiki page](https://github.com/quil/quil/wiki/ClojureScript) and my [blog post](http://norgat.blogspot.ru/2014/06/alpha-version-of-quil-on-clojurescript.html).

<br>

Student: Minori Yamashita  
Project: [Typed ClojureScript Library Annotations](http://www.google-melange.com/gsoc/project/details/google/gsoc2014/ympbyc/5676830073815040)

I added core.typed annotations to cljs.core functions and made some changes to the checker to make them pass. I also started work on TypeScript d.ts to core.typed annotation transpiler and in order to do so I worked on a type called jsnominal to represent TypeScript interface.  I'm willing to continue working on this project but I gotta get myself sorted with the fall semester.

<br>

Student: Nicola Mometto  
Project: [tools.analyzer extensions: cljs port, documentation](http://www.google-melange.com/gsoc/project/details/google/gsoc2014/bronsa/5776756782923776)

During my GSOC I wrote the tools.analyzer.js contrib library, an analyzer for clojurescript code written on top of the tools.analyzer infrastructure. The advantages tools.analyzer.js has over the default clojurescript analyzer are: increased modularity, simpler implementation, pluggable extension points and an AST format compatible between all the tools.analyzer analyzers (tools.analyzer.jvm is the main one, but a tools.analyzer.clr port is being worked on by David Miller)
making it possible to write analyzer passes that are host agnostic and can work with every tools.analyzer analyzer.

I also kept on working extensively on all my other contrib libraries, enhancing tools.emitter.jvm and tools.reader and reworking tools.analyzer and thus tools.analyzer.jvm to share as much code/infrastructure as possible with tools.analyzer.js and the AST format has been documented via an AST quickref that can be found in the README of each repo.

I wrote a [mail post](https://groups.google.com/forum/#!searchin/clojure/tools.emitter.jvm/clojure/Mzakv8NHuO4/RsWeiBdvcz4J) describing in detail what has been going on for each project in the last months.

Usage examples and a detailed changelog can be found in the readme of each repo: [tools.reader](https://github.com/clojure/tools.reader), [tools.analyzer](https://github.com/clojure/tools.analyzer), [tools.analyzer.jvm](https://github.com/clojure/tools.analyzer.jvm), [tools.analyzer.js](https://github.com/clojure/tools.analyzer.js), [tools.emitter.jvm](https://github.com/clojure/tools.emitter.jvm).

<br>

Student: Prasant Chidella  
Project: [Linear Algebra for Clojure – Adding linear algebra tools to core.matrix](http://www.google-melange.com/gsoc/project/details/google/gsoc2014/prasant94/5750085036015616)

I added some linear algebra functions like LU Decomposition, QR decomposition, SVD, least  squares, norm, rank etc. to vectorz which is a Linear algebra library in java. This is the backend for vectorz-clj, one of core.matrix's implementations. These functions are very close to their counterparts in other java based libraries like EJML, jblas etc in terms of performance, with a lot of scope for optimizations. I also extended [Java matrix benchmark](https://code.google.com/p/java-matrix-benchmark/) to run benchmarks for vectorz against the many other libraries like ejml, jama, colt etc. That can be found here: https://github.com/prasant94/JavaMatrixBenchmark-for-Vectorz

<br>

Student: Reid McKenzie  
Project: [Lean Clojure: An agressive compiler for lighter weight Clojure programs](http://www.google-melange.com/gsoc/project/details/google/gsoc2014/arrdem/5676830073815040)

In my work on the Oxcart project, I implemented program loading infrastructure to generate a single datastructure representing an entire program and all loaded libraries. I then build analysis infrastructure for examining how definitions in a program are used if they are used and implemented an emitter which where possible would use static function invocation rather than var indirection. The last item I was working on when GSoC ended was AOT compiling all used clojure.core, library and program code to static classes which do not depend on clojure.lang.Compiler and a fork of the Clojure language which breaks the Clojure bootstrapping infrastructure appart from the datastructure libraries. The hope was that Oxcart would be able not only to statically AOT user programs but that by AOTing the Clojure standard library itself that all use of the standard Clojure compiler to generate dynamically linked non-AOT bytecode could be escaped.

The future of the Oxcart project is uncertain at best, in that I am reluctant to commit to the hard fork of the Clojure language required to support the whole-program AOT work I was contemplating at the end of GSoC. However as whole program compilation of the type that Oxcart was designed for can only be approximated by lazy var loading optimizations and other techniques and as Oxcart demonstrated that speedups of 17-24% are possible using static linking I'm convinced that the Oxcart project itself was a worthwhile experiment forget a facinating summer.

More info: [GitHub repo](https://github.com/oxlang/oxcart), [blog post 1](http://arrdem.com/2014/06/26/oxcart_and_clojure/), [blog post 2](http://arrdem.com/2014/08/05/of_oxen,_carts_and_ordering/).

