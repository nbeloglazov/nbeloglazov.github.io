---
layout: post
title: Halfway Through ClojureCup
date: "2014-09-27 00:00:00"
---

### Hatnik

As you might have guessed, this year I'm participating in [ClojureCup](http://clojurecup.com). We ([me](https://github.com/nbeloglazov) and [Maksim](https://github.com/norgat)) are working on a project called Hatnik. It's a web app which aims to help you to track library releases. The idea is pretty simple: setup actions to be performed once some library is released. An action consists of 2 parts: library to watch and an instruction to perform. Example: send email to `me@nbeloglazov.com` when `org.clojure/clojurescript` releases. It is somewhat similar to [IFTTT](https://ifttt.com/) (but more specialized) and pretty similar to [Artifact Listener](https://www.artifact-listener.org/) (but obviously cooler!). We have plans to support following actions: email, github issue, github pull request, change wiki on github. Initially we're going to support only email and add others if we have enough time during the contest.
<br><br>
Organizers provided quite a few additional services like private github repo, a server for hosting app, CI servers, error-tracking utility, team chat and some other stuff. We've been using only few of them: github repo, server for hosting app and Flowdock for communication: it has integration with github and trello so we can see everything that happens in repo or task list in realtime. Though other services looked intersting I felt we'd spent too much time setting them up instead of working on the project.

### Architecture

The app consists of 3 parts:

* Web client - that's what user sees and interacts with.
* Web server - provides API for web client and stores data to DB.
* Worker server - periodically checks versions of all registered libraries and performs actions.

I work on servers while Maksim works on the web client. For the web client we decided to use ClojureScript + Om and Twitter Bootstrap for fancy styling. Server side libraries are pretty standard: ring, compojure, monger and few other libs for emails, github api, and other stuff. You can find more details about the project in [design doc](https://docs.google.com/document/d/1-Ad0h22qkmLARB7T8TfokJYonOlPZzZ-cuDzz6tW7hU/edit?usp=sharing) which we prepared beforehand so we can concentrate on coding!

### What we have so far

I would say we have quite enough:

#### Web client

Client can load and display projects together with actions. You can add new projects. What's left to do: actions adding/modifying, login (everything is ready, only need to add buttons), nice "About" page that describes how to use Hatnik.

#### Web server

Web server is mostly done. REST API is implemented, everything is stored in DB. DB is represented as a protocol that has 2 implementations: in-memory and mongo. It might be overkill but I found it's quite useful to be able to run everything in memory. I even had time to add tests for DB! I used [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en) for testing REST API. It is quite cool as it allows you to save requests and reuse them later. I probably should have added some tests for REST instead but due to the time limit I decided to go with Postman: it is easier to setup and use.

#### Worker server

Currently worker server can only submit emails on user request: when you create an action you have an option to test it, the test request is sent to the worker server to perform the action. What's left to do: add logic for checking versions of all registered libraries and perform actions for updated libraries, invoke this logic periodically.

### Conclusion

I'm having a lot of fun! I don't remember when I wrote so much code last time. Lately I've been coding less at work so ClojureCup came just in time. Especially when you have an excuse to not write tons of tests and just code for the sake of coding. If you're interested in what we have so far - check our [github repo](https://github.com/clojurecup2014/hatnik/). And of course check out our app when the contest is over.
