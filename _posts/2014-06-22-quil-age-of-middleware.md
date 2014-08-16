---
layout: post
title: "Quil: Age of Middleware"
images: /images/quil-middleware
date: "2014-06-22 23:00:00"
---

Quil 2.1.0 introduced new feature: middleware. Middleware is a way to augment a sketch without blowing up your code, you can think of it as a way to create "libraries" for Quil. Idea is similar to the ring middleware: Quil middleware is a regular clojure function which takes map of sketch options and returns updated map, that's all. What can we do in a middleware? Well, a lot of things, middleware has full power over options so we can wrap functions like `draw`, `setup` and others user-provided functions anyway we want. As an example let's create a middleware which rotates sketch on each frame.

### Rotating middleware

The rotating middleware's job is pretty simple: replace user-provided `draw` function with it own special version of `draw`. This special `draw` function does two things: first, it rotates sketch some angle, and second, calls original `draw`. But code is worth a thousand words, so here it is:

```clojure
; rotated-draw is the special draw function,
; which rotates sketch some angle depending on current frame number,
; and then calls original user-provided 'draw' function.
; period is a number of frames to rotate sketch a full 360 degrees
(defn rotating-draw [period orig-draw]
  (let [; calculate angle to rotate using handy map-range function
        angle (q/map-range (mod (q/frame-count) period)
                           0 period
                           0 q/TWO-PI)
        center-x (/ (q/width) 2)
        center-h (/ (q/height) 2)]
    ; we want to rotate sketch relative to the center of screen
    ; so we need to move the origin point first and only then rotate
    (q/with-translation [center-x center-y]
      ; rotate screen given angle
      (q/with-rotation [angle]
        ; move origin back to the left top corner (default position)
        ; our middleware should be transparent to the user so we don't
        ; want to change any default settings
        (q/with-translation [(- center-x) (- center-y)]
          ; call user-provided 'draw' function
          (orig-draw))))))

; the middleware function
; it is a regular clojure function
(defn rotate-me [options]
  (let [; user-provided 'draw' or empty function if it's not present
        draw (:draw options (fn []))
        period 200]
    ; replace user-provided draw with
    ; our custom rotating 'draw'
    (assoc options
      :draw (partial rotating-draw period draw))))

; and here how we use it
(q/defsketch my-sketch
  :draw draw
  :size [500 500]
  :middleware [rotate-me])
```
Let's check now if it works. Here is a boring static image of nested squares:

![Static squares]({{page.images}}/rect-static.gif)

It starts rotating after applying `rotate-me` middleware:

![Static squares]({{page.images}}/rect-rotating.gif)

Let's say we want to change rotation period now. We can always modify `rotate-me` function and change period there. But that's not very customizable, what if user wants to change it? We don't want user to dive into middleware and modify it. Even more, middleware may be shipped as a library and modifying a third-party library is not an easy task. Fortunately our problem is easy to solve: let's read rotation period from `options` map:

```clojure
(defn rotate-me [options]
  (let [draw (:draw options (fn []))
        ; read period as :rotate-period value
        ; or fallback to 200 if not provided
        period (:rotate-period options 200)]
    (assoc options
      :draw (partial rotated-draw period draw))))

; customize period in defsketch
(q/defsketch my-sketch
  :draw draw
  :size [200 200]
  :middleware [rotate-me]
  :rotate-period 100)
```

I won't show rotating squares gif here again, it is just rotating twice as fast as original, so there is no point of repeating it. Instead let's rotate animation of bouncing ball. Before:

![Static ball]({{page.images}}/ball-static.gif)

After:

![Static rotating]({{page.images}}/ball-rotating.gif)

### Conclusion

With middleware it becomes easier to write pluggable extensions for Quil. It's easy to share middleware with other users - you need to provide a single function which everyone can add to their `:middleware` option and it works!

Quil already uses middleware internally: there is a `safe-fn` middleware which wraps all user-provided handlers, so exceptions thrown inside them are not propagated outside. It allows user to fix broken handler on fly without need to restart the sketch. The other middleware is `deprecated-options` which checks if some of the options are deprecated and prints info to console. Along with middleware, Quil 2.1.0 introduced [functional mode](https://github.com/quil/quil/wiki/Functional-mode-%28fun-mode%29), which itself is a middleware.

Some links:

* Quil middleware Wiki [article](https://github.com/quil/quil/wiki/Middleware).
* Code from this post is available on [GitHub](https://github.com/nbeloglazov/blog-projects/tree/master/quil-age-of-middleware).

If you want to play with middleware but don't have ideas of what to implement - check wiki article above. It contains some ideas for middleware, feel free to work on them.
