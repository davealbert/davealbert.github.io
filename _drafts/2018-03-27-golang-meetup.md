---
layout: post
title:  "Golang meetup"
date:   2018-03-27 03:59:49 +0000
categories: golang meetup
---


<h1>Scaling real-time messaging systems with Go and Redis</h1>
By *William Tabi*, https://www.linkedin.com/in/williamtabi | @_william_101

> How we improved scalability and reliability of Intercom's real-time messaging system while reducing costs.


<h2>Older Java service</h2>

- Redis Pub/Sub
- Java service
- Ship to rails app
- > 60k connections caused issues
- Expensive > 300 instances


<h2>New Golang Service</h2>

- Easy to learn go
- Good docs
- Required
    - http server
    - websockets (upgrade connection)
    - redis pub/sub
    - global in memory store to keep track of connections (Map)
- maps are not thread safe
- issues 
    - Maps: Ended up needing to shard the maps
    - Channel deadlocks
        - go run foo -race --> helps you find these issues
- optimisations 
    - switched from strings to byte buffer
    - buffer pools
    - json iterator for serialisation

    - now can handle > 300k connections
    - using 50 instances



---


<h1> Building a Slack App in Go </h1>
By *Tarek Khalil*, https://www.linkedin.com/in/tarek-khalil-2261bb22)

>Choosing a language to build a prototype to show value and impact is tricky. You need to be fast, flexible, write less code, and hack your way for the ultimate goal of showing value. We are going to talk about the lessons learnt building a Slack integration prototype in Go.



- Language predicament
    - Learn
    - Experiment
    - Change quickly
    - Code that shows value



- Built the bot to interact with Intercom client's users via Slack
    - ChatOps for customer support


Event handler -> Event processor(s) -> Intercom
























---

~ Dave

