---
published: true
layout: post
type: post
title: "When Should I Mock in My Unit Tests?"
---

## When Should I Mock in My Unit Tests?

A conversation about how to, and when to mock came up today and I shared my thoughts with [Headspring](http://www.headspring.com) in our HipChat room. It was shared on Twitter by [Sharon](http://twitter.com/scichelli) and my friend [Ryan](http://twitter.com/rauhryan) asked for the link to that list. It turns out there was no link, but I'm going to fix that now.

When do I feel like I should use a mock? Glad you asked!

1. When a dependency is slow (database, api call, etc)
1. If the code isn't yours (a third party library for instance)
1. Calling the code costs money (credit card transactions, api usage)
1. When the code can cause side effects (sending email, triggering jobs, writing to disk)

By no means is this a complete list, but I try to keep things like this in mind when I'm testing my code. If there's something more to the code than meets the eye, I consider a mock.

Also to note: I have tried my best (and have been doing a good job lately) of avoiding mocking frameworks. If I can get by with writing my own mocks occasionally, or just using real code, I'll do that. I'll pull in a mocking framework like [NSubstitute](http://nsubstitute.github.io/) if the pain is too much.

What are some other good reasons to mock your dependencies when you want to test?
