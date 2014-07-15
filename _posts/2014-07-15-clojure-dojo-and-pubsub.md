---
layout: post
title: Clojure Dojo and PubSub
date: "2014-07-15 23:00:00"
---

### Clojure Dojo

This Monday I went to a London Clojure Dojo at uSwitch. Dojos are organized beweekly by some companies like ThoughtWorks or uSwitch. Around 10-15 people gather together, order pizza, propose ideas for coding and then split into teams of 3-5 people to code for ~2 hours. After coding part each team gives 5-minutes presentation of what they have done. Main rule (beside "Have fun") is that each participant must write at least a couple of lines in Clojure during dojo.

People coming to dojos have quite different clojure background. Some have been coding clojure for years and use it at work. Some have started learning clojure last week and have written only basic "Hello, world". Ideas for coding are not very complex, after all you have only 2 hours to code and some people don't have much experience with clojure. For example at the last dojo we got 5 teams. Two of them were teams of beginners, who worked on exercises from [exercism.io](http://exercism.io/). Two teams tried out [Quil on ClojureScript](https://groups.google.com/forum/#!topic/clojure/6vDnBWOgHDc). And finally last team (I was in that team) worked on simple network-level PubSub library.

One of the important issues during the dojo is working environment. A team usually works on a single laptop, because sharing code between several laptops realtime is not an easy task to do. So someone is coding while others discuss and help her/him. One lesson I learned after going to dojos is that editor should be simplest possible. Of course everyone has his/her own favorite setup of emacs/vim/whatever and wants to use it, but it's a bad idea. I've been on some dojos where we were mostly fighting with emacs instead of writing clojure, it was frustrating. Even more, imagine you're a beginner and you came to a dojo, and now you have to write in language you barely know and use some weird editor which doesn't behave as normal editors do, double frustrating. So editor should be simple. I think [LightTable](http://www.lighttable.com/) is the best clojure editor for dojos. It is easy to start, you can write text without twisting your fingers and brain, and finally, it is very easy to execute clojure code, just "Ctrl+Enter".

Now I'd like to describe the project my team worked on at the last dojo: PusSub.

### PubSub

Idea quite simple: write a library which consists of 2 functions: `publish` and `subscribe`. It should satisfy following contract:

* Publishing and subscription are on network level, so each machine gets messages published by other machines on the same network.
* `publish` takes 1 argument - message. Message is an arbitrary clojure object (string, map, vector, etc.)
* `subscribe` takes 1 argument - handler function which processes messages.

As you can see the library should not have concept of addresses, queues or topics. The library should not have concept of a server: clients should be able to communicate to each other without connecting to some kind of server.

For implementation we decided to use [IP multicast](http://en.wikipedia.org/wiki/IP_multicast). We didn't dig deep into specification and technical details, just googled how to do it in java. We found `java.net.MulticastSocket` class which does exactly what we want. Even more, [javadoc](http://docs.oracle.com/javase/7/docs/api/java/net/MulticastSocket.html) for that class contains nice example of how to use it. We translated it into clojure and enhanced a little bit. Here what we got:

```clojure
(ns pubsub.core
  (:import [java.net InetAddress DatagramPacket MulticastSocket]))


; constants specifying multicast address
(def address "228.5.6.7")
(def port 6789)
(def group (InetAddress/getByName address))


; function to create new multicast socket
(defn init-comm []
  (let [s (MulticastSocket. port)]
    (.joinGroup s group)
    s))

; define socket to be used for sending message from current machine
(def socket (init-comm))

(defn get-packet [message group port]
  (DatagramPacket. (.getBytes message) (.length message) group port))

; define 'publish' function. For some reason we named it 'send-it'
(defn send-it [message]
  (.send socket (get-packet (pr-str message) group port)))
```

Now we can publish messages, cool! As you can see we use [EDN](https://github.com/edn-format/edn) as format for sending messages (`pr-str` converts clojure object to EDN string). Now it is time to implement subscription mechanism. We diverted a little bit from initial goal and implemented more complex subscription model. It has 2 features not mentioned in initial design:

* Instead of passing only handler function, we pass 2 functions: predicate and handler. Predicate checks whether message should be processed and if it returns true then handler is invoked.
* Initial design doesn't have a mechanism to unsubscribe handler. We added it. When you subscribe, a promise object is created. The promise is used as finished flag: subscription halts once someone delivered anything into the promise. The promise is returned from `subscribe` function so user can put any value to it to unsubscribe.

Here is the code:

```clojure
; 'process-message' is a recursive function used to process messages
; Parameters
;   socket - socket object to receive message from
;   predicate - user-provided function which decides whether process message or not
;   handler - user-provided function which processes message
;   finished - promise which indicates when to unsubscribe
(defn process-message [socket predicate handler finished]
  (let [size 1000
        packet (DatagramPacket. (byte-array size) size)]
    (when-not (realized? finished)
      (.receive socket packet)
      (let [obj (-> packet .getData (String.) read-string)]
        (when (predicate obj)
          (handler obj))))
      (recur socket predicate handler finished)))

; 'subscribe' function. Again, we named it differently :)
; It has 2 versions, first is classic, takes only handler.
; Second version takes predicate and handler.
(defn subscribe-with
  ([handler]
    (subscribe-with (constantly true) handler))
  ([predicate handler]
    (let [socket (init-comm)
          finished (promise)]
      (future
        (process-message socket predicate handler finished)
        (.leaveGroup socket group))
      finished)))
```

That's all. The library is ready to use. Here is how to use it:

```clojure
(require '[pubsub.core :refer [send-it subscribe-with]])

; subscribe to all messages
(subscribe-with #(println "Simplest subscribe" %))

; send message, we should see it printed in console
(send-it "something")

; subscripe only to messages which are maps and contain topic == :dojo
(subscribe-with #(= (:topic %) :dojo)
                #(println "Dojo message" %))

; subscribe only to messages with topic :work
(subscribe-with #(= (:topic %) :work)
                #(println "Work message" %))

; subscript only to messages with topic :home
(subscribe-with #(= (:topic %) :home)
                #(println "Home message" %))

; send messages with different topics
(send-it {:topic :dojo :message "Hello, clojurians!"})
(send-it {:topic :work :message "You're at work..."})
(send-it {:topic :home :message "You're at home..."})
```

We can built something else on top of the library, for example decentralized chat app or simple multiplayer game. Who knows, it might make a nice project for another dojo.

If you want to play with the code - check project on [GitHub](https://github.com/nbeloglazov/dojo-pubsub).