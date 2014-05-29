---
layout: post
title: Quil Intro
images: /images/quil-intro
---

This is an introductory post about nice clojure library called Quil. Quil is an interactive animation library for clojure. Basically it allows you to draw on a rectangular window. Quil provides tons of useful functions for drawing in 2D and 3D. In this post I will show how to create and run Quil sketch. Let's start with something simple: with trigonometry... Everyone loves trigonometry: sine, cosine, tangent, what can be better? Our first sketch will draw a spiral using sin and cos functions:

```clojure
(ns quil-intro
  (:require [quil.core :refer :all]))

; define function which draws spiral
(defn draw []
  ; make background white
  (background 255)

  ; move origin point to center of the sketch
  ; by default origin is in the left top corner
  (with-translation [(/ (width) 2) (/ (height) 2)]
   ; parameter t goes 0, 0.01, 0.02, ..., 99.99, 100
   (doseq [t (range 0 100 0.01)]
     ; draw a point with x = t * sin(t) and y = t * cos(t)
     (point (* t (sin t))
            (* t (cos t))))))

; run sketch
(defsketch trigonometry
  :size [300 300]
  :draw draw)
```

As you can see for basic sketch we need to define a `draw` function which, well, draws something. Then we call `defsketch` passing `draw` function to it. Here is the image drawn by our code:

![Plot of spiral]({{page.images}}/spiral.png)

Beatiful, isn't it?

Now let's refactor `draw` function making plotting functions easier. To achieve this we'll define `draw-plot` function which takes a parametric function *f(t) = (x, y)* , ranges for parameter *t* and plots given function over given range. Here is refactored code:

```clojure
; define f
(defn f [t]
  [(* t (sin t))
   (* t (cos t))])

(defn draw-plot [f from to step]
  (doseq [two-points (->> (range from to step)
                          (map f)
                          (partition 2 1))]
    ; we could use 'point' function to draw a point
    ; but let's rather draw line connecting 2 point of the plot
    (apply line two-points)))

; and finally updated draw function
(defn draw []
  (background 255)
  (with-translation [(/ (width) 2) (/ (height) 2)]
   (draw-plot f 0 100 0.01)))
```

Cool, now we can experiment with `f` by changing it in any way we'd like. And here comes real beaty of Quil: live reloading.

#### Live Reloading.
After we changed code we don't need to close sketch, recompile everything and start sketch again as we would do in most other languages. We can update all functions on the fly see results immediately. In fact we can program whole sketch from the beginning to the end without ever closing it. Of course there are some things we can't do on the fly. We can't add mouse and keyboard listeners on the fly, but you still can update existing. Now let's get back to work and update `f` function:

```clojure
; you can get awesome plots using random combinations of trigonometric functions
; here f which plots a flower
(defn f [t]
  (let [r (* 200 (sin t) (cos t))]
    [(* r (sin (* t 0.2)))
     (* r (cos (* t 0.2)))]))
```

Standard clojure techniques can be used to reload the function `f`:

* Emacs: `C-x C-e` to reload `f`.
* LightTable: `Ctrl+Enter` to reload `f`.
* REPL: redefine `f` function.

And here is the flower (together with some other plots of random functions):

![Plot of spiral]({{page.images}}/flower.png)
![Plot of water drop]({{page.images}}/water-drop.png)  
![Plot of leaf]({{page.images}}/leaf.png)
![Plot of crazy lines]({{page.images}}/crazy-lines.png)


#### Animation

Now we'll look at another quil feature. Up to this point we drew static images which weren't changing over time. But in fact `draw` function is called repeatedly in short intervals. That means we can draw moving objects and do real animation! Let's modify our sketch so on each iteration only a part of a plot is drawn: line from *f(t)* to *f(t+1)*. For value *t* we'll use [`frame-count`](http://quil.info/environment.html#frame-count) which return number of current iteration. Here is implementation:

```clojure
; 'setup' is a cousin of 'draw' function
; setup initializes sketch and  called only once
; before draw is called for the first time
(defn setup []
  ; draw will be called 60 times per second
  (frame-rate 60)
  ; set background to white color only in the setup
  ; otherwise each invocation of 'draw' would clear sketch completely
  (background 255))

(defn draw []
  (with-translation [(/ (width) 2) (/ (height) 2)]
    ; note that we don't use draw-plot here as we need
    ; to draw only small part of a plot on each iteration
    (let [t (/ (frame-count) 10)]
      (line (f t)
            (f (+ t 0.1))))))

(defsketch trigonometry
  :size [300 300]
  :setup setup
  :draw draw)
```
Time for animation!

![Animation of leaf plot]({{page.images}}/animation.gif)

Add some color! I'll leave it as exercise to reader to figure out how to add colors, or, if you're too lazy, you can simply check GItHub repo in the end of this post. Here what we got:

![Colorful animation of flower plot]({{page.images}}/animation-color.gif)

That's it for today. Quil is based on Processing programming language. Here is some useful links:

  * Code from this post is available on [GitHub](https://github.com/nbeloglazov/blog-projects/tree/master/quil-intro).
  * Official Quil [repo](https://github.com/quil/quil).
  * Quil API [docs](http://quil.info).
  * Processing [website](http://processing.org).

Any comments are welcome!

