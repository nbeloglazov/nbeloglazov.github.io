---
layout: post
title: GitHub Actions in Hatnik
date: "2014-11-24 00:00:00"
---

[Hatnik](http://hatnik.com) is a tool that allows you to track library releases: you want to know when new version of ClojureScript released - you go to Hatnik, setup an action and next time ClojureScript released the action will be performed. Initially only email action was supported. Happy to announce that now we support GitHub Issue and Pull Request actions.

### Issue Action

This action is pretty trivial: create an issue in selected repo when library is released. You can customize repo (obviously), issue title and body. Title and body support template variables: for example "\{\{library\}\} \{\{version\}\} released" will be rendered as "org.clojure/clojurescript 0.0-2371 released".

Issue action might be useful, for example, for library maintainers. Usually there are quite a few tasks you need to do when you release new version: update wiki, tutorials, some post-release testing. It is quite easy to forget something so Issue action can help with that: for each task create an issue and then later you or someone else can pick it up and do whatever needed to be done.

### Pull Request Action

Pull Request action modifies public repo and opens pull request. Each modification operation is a find-and-replace operation and consists of 3 fields: file to be modified, regex and replacement. Regex and replacement fields support template variables.

Pull request can be used to keep dependencies of you project up-to-date: just create an action that updates version of dependency X in `project.clj` each time X is released. It is especially cool when you have CI (e.g. [Travis](https://travis-ci.org/)) that runs tests on pull requests: you can immediately see if new version breaks your application and if it doesn't break - simply merge it. To keep your application up-to-date you need just one click! Another use case is for library maintainers: usually library README includes latest version of the library so users can simply copy-paste it to `project.clj` and start using it. But these versions sometime become out-of-date as maintainers forget to update README. Pull Request action can help with that. For example I set up a few actions for Quil that update versions in README, examples and lein templates. Here is an [example](https://github.com/quil/quil-templates/pull/4) of such pull request. Final note about pull requests - if pull request action doesn't change anything in repo (for example file moved or version in README has been already updated) - you'll get an email that describes why Hatnik couldn't open a pull request.

### TODO

* Import build files. Currently Hatnik doesn't provide options to import build files like `project.clj`. So if a project has a lot of dependencies it becomes tiring to create actions for each dependency one by one. Hatnik should support import capabilites.
* Allow to use temporary accounts to create restricted set of actions and decide whether to use Hatnik or not. Currently you have to login via GitHub in order to try it out.
* Support more languages. Currently only maven-compatible libraries are supported (Java, Clojure, Scala, Groovy). We should support more.

### Contributing

Hatnik is an open source project. Take a look at the [repo](https://github.com/nbeloglazov/hatnik). Bug reports and pull requests are very welcome!
