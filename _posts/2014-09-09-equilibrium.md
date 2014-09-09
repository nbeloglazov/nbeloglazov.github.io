---
layout: post
title: Equilibrium
images: /images/equilibrium
date: "2014-09-09 00:00:00"
---

### Let's make chaos
Today I want to show you a neat chaos simulation. Rules:

* n points on a plane.
* Each point randomly selects two other points as its leaders.
* Each points tries to get to a position equidistant from both leaders.

Here is an example for 4 points:

![Simulation screenshot]({{page.images}}/screenshot.png)

Green point has 2 leaders - red points. Red line is equidistance line. Green point's goal is to get and stay on that line. All points have different leaders so movements appear pretty chaotic. Everything stabilizes after a while and we get equilibrium. Now the question: what will happen if you slightly move some point? How long will it take the system to get back into the equilibrium state?

I'm not so profficient in math to describe the system in sophisticated way, but I'm a programmer, so let's write a simulation using Quil! Quil supports ClojureScript now so sketches can be embedded directly into the page. There will be no source code in this post, only playing with ready-to-use sketches. Link to the source code will be provided at the end of the post. Sketches are desktop-oriented so they probably won't work propertly on mobiles.

### First sketch

<canvas id="first_sketch" style="width: 500px; height: 500px;"></canvas>

Hover th mouse over a point to see it leaders. You also can move a point by dragging it using mouse. Supported keybindings:

* space - pause/continue;
* r - regenerate points;
* up and down arrows - increase/decrease number of points and regenerate points;

Don't forget to empirically get answers to the questions posed earlier. Also check how a configuration consisting only of 3 points always converges to a equilater triangle. Quite nice.

### Second sketch
After a while the sketch becomes boring. To make it more dynamic we introduce constant velocity: each point, besides moving towards the equidistance line, also moves constantly in some direction. The direction is chosen randomly and speed is also random. Another change is to make the plane toroidal: if a point goes beyound the left boundary - it will appear on the right, beyound the bottom boundary - will appear on the top. Here is the second sketch that implements all these changes:

<canvas id="second_sketch" style="width: 500px; height: 500px;"></canvas>

Now we see eternal chaos: points moving around in futile attempt to achieve equilibrium.

### Third sketch

Up to to now we've seen only points, dull black circles. How about adding tales for points? A tail is a k last positions of a point. And let's make them colourful because black worms crowling chaotically around the screen is a depressing view. It is worms time:

<canvas id="third_sketch" style="width: 500px; height: 500px;"></canvas>

Use left and right arrows to change k - the number of points in tails. These keys work in previous skethes too, so you can turn points into worms there.

### Where did the simulation come from?
I saw this simulation on a lecture about artificial intelligence. The simulation was performed on the audience: n people gathered in the center of the room, choosed leaders and started moving. After few minutes everyone finally stopped. Then the lecturer moved one person and everyone had to readjust their positions. It took another few minutes. The lecturer wanted to demonstrate that environment behaves in the same way: if you disbalance some part of it - the whole system will turn into unpredictable chaos. But our simulation shows the opposite: if you try to move a point - it comes back to original position pretty fast while all other points don’t move much. So in ideal conditions the equilibrium is pretty stable.

### Implementation details
The implementation uses functional-mode middleware and all state updates are handled by Quil (look mom, no atoms!) Another nice thing is that the sketch is fully Clojure and ClojureScript compatible: if you name file equilibrium.clj - you can run in Clojure, rename to equilibrium.cljs, compile and it runs in browser, no change needed! But it's not ideal. I like to work on a sketch in clojure, which supports live reloading and allows you to change parts of sketch without closing it, but in the end I target ClojureScript (so I can share it in post). It becomes tedious to constantly copy clj to cljs when you change anything and want to check it in browser. I ended up having weird combination of linux `watch` command that copies clj to cljs every second and cljsbuild that autocompiles cljs to js. It works but looks ugly and scary. I wonder if it is possible to have a single file which is recognized by Clojure and ClojureScript. I know that I could use cljx for that, but seems quite heavy for such simple task. Or may be I just need to properly setup emacs/cider + cljx integration.

Source code is available on [GitHub](https://github.com/nbeloglazov/blog-projects/tree/master/equilibrium).

<script src="/scripts/equilibrium.js"></script>
<script>
    equilibrium.sketch({"host": "first_sketch", "tail-size": 0});
    equilibrium.sketch({"host": "second_sketch", "tail-size": 0, "constant-velocity?": true, "toroidal-board?": true});
    equilibrium.sketch({"host": "third_sketch", "tail-size": 15, "colourful?": true});
</script>