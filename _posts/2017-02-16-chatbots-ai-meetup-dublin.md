---
layout: post
title:  "Chatbots/AI meetup in Dublin"
date:   2017-02-16 23:59:49 +0000
categories: chatbots ai meetup
---

<h2>CHAI Dublin meetup on 16-February-2017</h2>

![CHAI Dublin chatbots and AI meetup](/images/posts/chatbots-ai-meetup-dublin.jpg){:class="img-max400"}

This was about the second meetup of CHAI Dublin, and my first visit. It is a meetup about bringing product, UX, development and AI communities in Dublin closer together.  I love bots, and want to see them grow in usage. They don’t solve all the problems out there, but they can solve many of them. Here are the points I took away from the meetup.

<h2>Building a Chatbot from Scratch</h2>
*by Philip Kinlen*

Philip was using IBM Watson Conversations tool to build his bot. The first 1000 API calls per month are free and $1 for each additional 400 API calls.

> Intent -> Entity -> Dialog

**which means:**

What are you trying to respond for -> value that they supply -> information for the value

**A simple example:**

> Hi -> where do you live? -> Dublin -> here’s the info for Dublin


For a simple yes no question you need to account for all of the following answer type:

* Allow bail out
* Unintelligible answers
* Yes
* No

A context would be something like someone’s name related to he or she in the chat.

It is very simple to get started and create a simple chatbot.  They technology isn’t the hard part to getting started, it’s understanding your use case.

---


<h2>7 Things We Learned Developing HomeHero</h2>
*Colm Moriarty*

Building a tool to help people use energy more efficiently using image recognition.

1. “It is as easy and as hard as writing a book.”  ->  (It is relatively easy to build a bot, but is it any good?)
2. “Discovery is a challenge.” -> (How do people know they need it? How are they going to find it?)
3. “User expectations can be a problem.” -> (You are probably not as good as Alexa …yet, you need to manage their expectations.)
4. “You will be judged by the quality of your fallback.” -> (‘I don’t know what that means.’ That will irritate people, try to bring value even when the bot doesn’t understand what the user wants.)
5. “Even without bots, messaging is the future of customer service.” ->  (Real time feedback matters!!!)
6. “Bots need hooks.” -> (Why are users going to continue using your bot?)
7. “We are still discovering what mobile devices are for.” -> (Are they even really phones any more? What are they really? What will they be?)

With bots, experiment and be bold!

---


<h2>Chatbot App Architect Overview</h2>
*Foran Pavlovic* 

* We already know what people expect from a web site, not exactly so from a bot.
* Chatbots are a single entrance, but they can be messy since everyone interacts with them somewhat differently.
* Bots don’t have the save level of understanding from a security perspective. We know how to prevent XSS/SQLi/etc, we don’t know all the new exposure point for bots.
* Bots don’t always have the added context of imagery a website has, only text. That means language is an even more important consideration.
* People will want bots, but we need to do a better job of UX when UI isn’t a factor.
* Bots makes an asynchronous system much easier to use, making micro services even more compelling.
* Messaging is still just an interface to our application.
* Separating signal from noise is the hardest part.
* We NEED a way to deal with angry/frustrated customers. Transfer to a live person as quickly as possible.
* A bot should make your service better not worse.
* Remember to include a menu/help/suggestions/etc.
* Don’t make them think, instead let them choose.
* Keep track of conversations, this will let you improve and help deal with concerns.
* Be extremely careful with ambiguous questions, don’t try to play smart, instead be absolutely sure you’re doing what they want.

<h2>Conclusion</h2>
This was a **GREAT** meetup and will definitely be going again. If you are in Dublin and are interested in bots or AI I would highly recommend going to this groups events. If you want to talk about bots feel free to contact me.

~ Dave
