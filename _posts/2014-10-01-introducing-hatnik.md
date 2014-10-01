---
layout: post
title: Introducing Hatnik
images: /images/hatnik
date: "2014-10-01 00:00:00"
---

Yet another blog post about a ClojureCup 2014 project. But this time from me. About Hatnik!

### Don't miss a release

Hatnik is a web app we created during ClojureCup weekend. It can notify you about new library releases (currently via email only). It supports Clojure/Maven libraries which are hosted on Clojars or Maven Central. How to use it: sign in, create an action in which you specify which library you want to watch and template for the email and that's all. Next the library is released we'll send you an email. Try it out: [hatnik.clojurecup.com](http://hatnik.clojurecup.com). If you don't like signing in unfamiliar websites which you might never visit again, here is a screenshots-demonstration:

<br>
Initial page after you logged in

![Initial page]({{page.images}}/hatnik_0.png)

<br>
<br>
Create new action

![Create new action]({{page.images}}/hatnik_1.png)

<br>
<br>
Action created

![The action created]({{page.images}}/hatnik_2.png)

<br>
<br>
Libraries used by Hatnik

![All libraries]({{page.images}}/hatnik_3.png)

You can also group actions to projects. Projects is just a named group of actions. Each user by default has "Default" project (see screenshots) so you might ignore it.

### Future plans

We did the project over 2 days so obviously there are a lot of things to improve.

#### More actions

Currently Hatnik supports only email notifications. We're planning to add more. Here is the initial list:

* Noop - does nothing. Might be useful for creating dashboard-like project that simply displays latest versions.
* GitHub Issue - creates an issue on GitHub repo.
* GitHub Wiki Page - changes GitHub wiki page using simple find-and-replace mechanism.
* GitHub Pull Request - creates pull request that modifies some files using find-and-replace mechanism.

#### Cleanup

We developed Hatnik in hurry so there is some technical debt.

* Improve web client. We used Om for the web client but we didn't know it good enough so in some places code is not Om-like at all. For example we spend few hours at the end of the contest trying to fix a bug, which made library textfield read-only. Looks like the bug is described in [tutorial](https://github.com/swannodette/om/wiki/Basic-Tutorial#dealing-with-text-input-fields), but even using the tutorial we couldn't make it work. So we ended up with horrible hack that sets value to textfield using `setTimeout`.
* Add more validation. Currently REST API is not strict, it does very little validation. It should do more. We're looking at Prismatic [schema](https://github.com/Prismatic/schema) for that.
* Add core.typed. At work I'm using Google Closure Compiler quite heaviliy. Among other features it introduces type system to JavaScript. It makes much easier to write correct code. So I'd like to try core.typed for same reasons and see whether it helps or not me.
* Add tests. Currently we have some DB tests. We should add integration-like tests for API and ideally sending emails, creating github issues. Tests for client side would be nice, may be something WebDriver-based.

#### Other plans

Hatnik currently supports only maven-compatible libraries. Nothing stops it from supporting libraries from other languages/platforms, like Ruby, JavaScript, Python. I think most tools in other languages also use HTTP for downloading libraries from central repository, so it should be pretty easy to implement in Clojure.

Currently all actions have to be created manually one by one. It would be cool to be able to provide a link to `project.clj` and it will be parsed automatically. Again, nothing prevents us from supporting other projects files like `pom.xml`, `build.sbt`, `Gemfile`. Some of them just harder to parse as they're written in DSL, but still, should be fun task to do.

### Afterwords

Few words about the project name. Hatnik is a house spirit in Slavic folklore. There are different versions of what he does and whether he good or not, but in my environment Hatnik is a good grandpa-looking-like spirit which helps with household. So we wanted the app to do the same - help with some simple tasks which help to keep project dependencies or documentation in order. I hope it will be useful for you. If you liked Hatnik you can [vote for us](https://clojurecup.com/#/apps/hatnik). Also have a look at [other projects](https://clojurecup.com/#/apps), they're pretty interesting. And they also needs votes ;)

Hatnik is open-sourced and here is [GitHub Repo](https://github.com/nbeloglazov/hatnik).