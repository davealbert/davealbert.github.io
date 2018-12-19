---
layout: podcast
permalink: /podcast/episode/QT-006
title: "QT: Jupyter notebooks and IJavascript"
subtitle: "Jupyter notebooks aren't just for Machine Learning (ML)/Artificial Intelligence (AI), and using javascript with them"
label: "QT: How I use Jupyter notebooks, and how to use javascript with them -- more about Jupyter here: https://jupyter.org/  and more about IJavascript here: http://n-riesco.github.io/ijavascript/  Email: podcast@dave-albert.com  Twitter: https://twitter.com/dave_albert  Instagram: https://www.instagram.com/dave.albert/  Websites: https://dave-albert.com | https://medit.online"
date: Thu, 15 Nov 2018 04:30:54 GMT
duration: "10:19"
source: https://s3-eu-west-1.amazonaws.com/podcast.dave-albert.com/QT-006-Jupyter-Notebooks-and-ijavascript.mp3
show: false
---



Hey folks this is Dave Albert for a quick take. In this quick take, I'm going to talk to you about Jupyter notebooks. That's J U P Y T E R.

If you're not familiar with them, they're very popular in the machine learning community. So Jupyter notebook is kind of like writing code, but instead of it being basically in a program is kind of like an a markdown wiki almost? I probably should have looked up the definition but I'm sure you're able to do that. So you can write different chunks of code, execute them independently. And by saving that code then it's always available so each different block of code can also reference any variables or functions that you've identified, created in one of the other blocks. And then that allows you did, you know reuse your code, obviously. But instead of having to rerun programs or say you're using some sort of tool to query your database, you can actually keep your little experiments together. And then
say you've got ad-hoc queries or reports that you need to run periodically. You can have them all together, run them very easily get the output directly into a web browser so basically spins up a little web server that you access locally you can also do them within datacenters as your has as your Jupiter or as your notebooks I think is what they call it. But it's I don't think that like VPN access works very well. So for our situation, we use port forwarding with our Kupernetes to connect directly to our database and can run our queries to understand our data by using the notebooks they're available very easily. 



Now, the reason I wanted to bring this up is that I always kind of just associated them in my in my mind to machine learning and never really thought how useful that would be just to have that handy so I was using so we're MongoDB shop and I use Robo3T as a
client to connect Mongo when I'm not using just the typical command line client because Robo three T has multiple tabs and you can, it's easier to copy and paste certain things and it's easier to scroll. Typically I'm a console type of person but sometimes it's easier but what I was doing was I was copying the code that was written in Robo3T and pasting it into Evernote then I'd have to remember to go and grab it from Evernote as opposed to just writing it from scratch each time not that the queries were necessarily that complex, but you know, no need to waste time so then I was just talking with machine learning engineer, and she was talking about her Jupiter notebook. And I thought, you know what, I should probably try using that. And I did and really worked well. The only thing is that I prefer JavaScript, because that's what I write most of my code in over Python. Python is fine. It's it's good language. But sometimes it's just easier to do JavaScript, especially when you're dealing with Mongo, since Mongo basically interprets JavaScript perfectly from the client. So I wondered, is there a way to create JavaScript based Jupiter notebooks and there is it's called a JavaScript so that's it's what do they call it is a JavaScript kernel for the Jupiter notebook.

So if you're familiar with Python, you might have heard of iPython which is a REPL. I don't remember what that stands for. But it's common, you know, you type in some commands and it stores state and then you can execute different things and see what the output is. iPython is more powerful, JavaScript is iPython for JavaScript, and also includes the colonel to allow you to create Jupiter notebooks that interpret JavaScript. So that really gave me a lot of power and made me a lot more productive. I swear I could have saved so much time trying to remember which note I put it in in Evernote and then
ending up putting some of the notes in my kind of daily tracker list and some of them in a separate Mongo note but now I keep them all together as part of the Jupiter notebooks and also use a file sinking program well actually I use several of them I've got Dropbox and OneDrive and Google backup and sync is what they call it now used to be just Google Drive. I think I've got this one in in the Microsoft's One Drive because that has the most space it's the company's account and I don't know that's really the only reason I was just trying to separate my own personal by backups from the company when so that should I ever need to, I can remove the access without having to mess with any of my own personal software packages.

So that means that I've got it on my laptop and my home computer. And if I ever have another device, it would be there as well. So every time I save, it's immediately synced over to the rest of the devices. I mean, yeah, that's how syncing software works. But it's great to have that always available, easy to spin up because we can basically just change that port forward then you can run it against test or production I use environment or not environment but I use a variable define the environment that I'm currently working in. because we use environment within some within our collection names. So it's easy to make, you know, one one change in that will cascade through all the different code blocks. It's it's definitely worth your while to spend maybe an hour learning how to do a Python notebook if that.  So just forget that machine learning AI is where you may have heard of it. First, there's just the bloody useful no matter who you are, what you do if you're writing code and it's not necessarily part of a specific application but more experiments or ad hoc things, you're, you're probably going to save yourself time. And it's, it's nice to use. It's not, you know, it's delightful. 



So, yep, my recommendation. Get yourself a Jupiter notebook. I'll add some links in the description. But again, that's Jupiter, G. Sorry, J, U, P,  Y, T, E, R and the kernel is I JavaScript and that's the letter I. So that's it later!

Until next time, remember, any sufficiently advanced technology is indistinguishable from magic.

