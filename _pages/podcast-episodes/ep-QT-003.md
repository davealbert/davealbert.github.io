---
layout: podcast
permalink: /podcast/episode/QT-003
title: "QT: Why Medit chose Native Mobile Applications over a hybrid like React Native"
subtitle: "We chose native mobile applications at Medit, what would you choose?"
label: "QT: What would you chose native mobile applications or a hybrid app like React Native? We chose native this episode explains my reasoning.  Email: podcast@dave-albert.com  Twitter: https://twitter.com/dave_albert  Instagram: https://www.instagram.com/dave.albert/  Websites: https://dave-albert.com | https://medit.online"
date: Tue, 13 Nov 2018 04:45:54 GMT
duration: "8:16"
source: https://s3-eu-west-1.amazonaws.com/podcast.dave-albert.com/QT-003-Native-Apps.mp3
show: false
---

Hey folks! This is Dave Albert with a quick take. In this quick take I'm going to take you through while met it chose to use native mobile applications as opposed to using a hybrid approach like React Native.


In fact, early on I did try to use React Native and it didn't really seem to be working in the way that I would hope it would like with most frameworks it seemed to get in the way of things that were more than just set this regular simple tasks. So if you wanted to do something slightly out of the ordinary it seemed incredibly hard to make it work. Of course, that could be my lack of experience with React Native but the further I dug into it. We have a large amount of data. And it appeared to me that React Native needed to load the entire data into memory and couldn't really interact with core data. So we built iOS first.


And I'm more of an iOS developer factor, more of a back end node developer, than iOS, but I have decent iOS skills. It's Android, I don't have very much experience at all other than a few test projects. So I don't know the terminology for how data is stored. But there didn't seem to be an interface from React Native to core data, and I knew we were going to have to use Core Data otherwise the network connectivity was going to have to be extremely strong for iOS users all the time and I didn't really want that also wanted at some point I want our app to be extremely useful offline. I know a lot of doctors at least in Europe have poor access to mobile network carriers while they're inside the hospitals, because a number of the hospitals are old and big, thick buildings with weird twists and turns in some locations, and so it's not always condusive to good quality mobile connections so they don't always have an internet connection.


Second, I was concerned again, like I was with playing react with being at the mercy of Facebook. So yeah, if your Facebook and you have an army of engineers, then React Native is going to work for you. Because if you have an issue and you're the one driving the direction of the product, in this case, React Native, you can just send your engineers to go solve the problem. Whereas small, very small startup like us Medit, then if you have an issue, you're basically going to have to fork React Native to try to solve your problem, which also means you're not working on your product because you're busy trying to build a solution within the tool you're using. Then if you do not get your fork merged back in to the main line, then you have to continue to support that which means every time there's an upgrade to React Native, you have to upgrade your fork if you want to, if you want to avoid bugs that are being fixed and all that sort of stuff so basically come a new project and you definitely don't have time for that as a startup. Then there was a colleague in a different startup that was using React Native and they're pretty happy with it but he, he did end up spending a number of days dealing with patches that were not applied to React Native had to follow a number of issues in GitHub make suggestions and and bug reports follow the pull requests as they were coming in, and also try to move his product forward by redesigning the way the application would work and a less optimal format. Because the issues with React Native now, I mean, any open source tool, you have to do that sometimes. But if the core of everything your product does is based on that, that can lead to some really tough times I think so.


And the final reason which I don't know that these are in any order is that I myself can tell usually. I can almost, at least I know it stands out when a hybrid app when I'm using a hybrid app that doesn't feel as responsive, it doesn't get there's just a different feel to a native app, a native app, then a hybrid type, even with react. I mean, you know, Facebook is built on React Native, and it's, it's pretty responsive. But you can still tell there are some things that it does that just don't feel quite right, in my opinion.

So I'm more happy with the way native apps perform for users. I think it's a better experience and that's one thing that we definitely try to keep instilled within ourselves within the team is that the users the users' experiences about most importance
can't say that we're perfect at it. But that's what we do. So that's why we chose native swift and we're going with native Java I can go over why Java over Kotlin. Another quick take, because we're already seven minutes and these are supposed to be between 5 and 10. So there it is. We went with native applications as opposed to a hybrid like react. What would you pick?

Let me know podcast@dave-albert.com or tweet at me @dave_albert.

See ya!

Until next time, remember any sufficiently advanced technology is indistinguishable from magic.
