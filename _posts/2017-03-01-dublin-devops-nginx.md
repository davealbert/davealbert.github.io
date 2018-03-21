---
layout: post
title:  "Dublin DevOps meetup – Nginx (1 March 2017)"
date:   2017-03-01 23:59:49 +0000
categories: nginx meetup
permalink: /:title
---


![Dublin Nginx meetup](/images/posts/2017-03-01-dublin-devops-nginx.jpg){:class="img-max400"}

On the evening of March 1st 2017 there was a great meetup event sponsored by Zendesk and Nginx (the company). The meet up was not surprisingly about the Nginx web server software. I wanted to relay some of the useful takeaways I got from the event. But before that I thought I’d give a very brief overview of Nginx and why I use it.

<h2>What is Nginx</h2>
For those of you unsure of what Nginx is (what are you reading this for then ?) or what makes it a compelling solution it is a highly performant web server.  Nginx is similar to the Apache web server, but with a few main high level differences.  I’m not going to dig in too deeply you can read more about that on this article from [Digital Ocean](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations){:target="_blank"} or on this [Quora Q&A](https://www.quora.com/What-is-the-difference-between-an-Apache-nginx-server-and-Node-js-one){:target="_blank"}.
 

 For the record I use both Apache and Nginx, in fact if you are reading this the content has been served by both servers.  Apache serves as a good web server for the WordPress blog, and Nginx is used for cacheing static content as well as a proxy/load-balancer.
 Here are the main points about each of the two different options from my point of view:

 <h3>Apache Points</h3>
* Good as a web server
* Very simple to use as a php server
* Slower serving static assets
* Uses more resources (it has to load every module for every connection, so multiple site requirements can be very inefficient)
* Can be used as a proxy, but depending on the setup as mentioned may be inefficient

<h3>Nginx Points</h3>
* Can functions as a Load balancer, Proxy, Cache, and Webserver
* Very fast, and can serve move simultaneous visitor on a single instance
* Typically uses less resources to serve sites
* For PHP additional services are required like ([php-fpm](https://php-fpm.org/){:target="_blank"})
* If you are using a NodeJS server Nginx as a proxy in front of Node is a great solution

If you need more information on this feel free to [ask me](/contact), and now on to the my key takeaways of the talks.

---

<h2>Improving API reliability with Nginx</h2>
by: *Daniel Carmine*<br/>
of: *Zendesk*

* His talk was about how they improved the performance of their voice service accessing a third party providers service using Nginx.
* oThe were operating a mixed voice and data service with a single set of Nginx proxies
* They were dropping calls when Nginx was at a high load, regardless of the load on the voice service
* They offered a service for their clients (many thousands of clients) that required uploading SSL/TLS certificates that would cause a reloading of Nginx services
* Looking through their logs and analytics they realised reloading  Nginx was causing the load on Nginx which in turn caused calls to drop
* Once voice and data traffic were separated into different segments they found:
    * Better voice metrics
    * Better data metrics
    * Better performance for voice
    * Also better performance for data

* Better to keep different types of traffic separate so it can be tuned for use
 This can seem obvious when laid out like this, but remember it’s quite compelling to use one solution to server both to save on resources and time.

---

<h2>Monitoring Nginx ingress controller on Kubernetes with Nginx Amplify</h2>
by: [Michael Pleahakov](https://www.nginx.com/blog/author/mpleshakov/){:target="_blank"}<br/>
of: [Nginx, Inc.](http://nginx.com/){:target="_blank"}

His talk was about using [Kubernetes](https://kubernetes.io/){:target="_blank"} to manage a web stack that also managed the Nginx proxy container used for load balancing,
* Kubernetes is for deploying and managing containers
* Load balancing can be done with Kube Proxy for TCP connections
* [Kubernetes Ingres](https://github.com/nginxinc/kubernetes-ingress){:target="_blank"} is for HTTP connections
* Nginx allows for no downtime configuration refresh, which allows for better user experiance
* He then performed a demo
    * Showing how to use kubectl the Kubernetes command line tool
    * Scaling is automated through ingress to Nginx
    * It was a very nice demo, and if you are using Docker containers, I would recommend looking in to Kubernetes and Ingress
* [Ingress](https://github.com/nginxinc/kubernetes-ingress){:target="_blank"} is an Nginx extension available on GitHub and also as a container on the DockerHub

After the Ingress portion of the talk we were given a brief overview of [Nginx Amplify](https://www.nginx.com/amplify/){:target="_blank"} Nginx, Inc’s premium offering of a monitoring solution.  Which I believe to be in a free beta period at this time (March 2017), so you can get a premium offering at no cost.

* Amplify is a monitoring solution for the Nginx server by the Nginx company
* A SaaS solution available from Nginx now in public beta
* Demo
    * Showing a nice looking dashboard with metrics of Nginx nodes
    * It is available for Nginx and Nginx plus (the premium solution for Nginx)
    * The analyser section of amplify shows an analysis of the current state and a static analysis of configuration settings
    * There is also alerting available within Amplify
    * I don’t know if I would consider sending my data out to a third party vendor, but it’s definitely something to keep an eye on.

You can find more from the company on [Nginx.com/blog](http://nginx.com/blog){:target="_blank"}.

---

<h2>Advanced caching using Nginx and Lua</h2>

by: *[Cassiano Aquino](http://syshero.org/){:target="_blank"}*<br/>
of: *[Zendesk](https://www.zendesk.com/){:target="_blank"}*

This presentation was about using Nnginx and the Lua programming language to imrpove a sites caching

* [Syshero.org](http://syshero.org/){:target="_blank"}
* These slides should be in  his [GitHub /caquino](https://github.com/caquino){:target="_blank"}.
* Lua extensions can be compiled into Nginx
* Lua (Portuguese for moon) programming language is embedded in many applications and tools
* If you use Nginx with Lua you need to use the libraries designed to work with Lua to ensure the most efficient methods and they need to be synchronous
* You can use Lua or luajit (Lua just in time compiler)
    * Jit is more performant but has trade offs in stability and development speed
* Basic caching is when you deliver assets (pages, images, css, js) from disk as quickly as possible as opposed to building and serving them through a CPU intensive server application
    * Typically a cache is time based so that an asset is valid in the cache for 10 minute/hours/days/etc
    * This is great when you either have a set schedule for deployments, minimal changes that get deployed, or have static content
    * This is not so good when you have lots of changes, or constantly changing data
*  Header_filter_by_lua
    *  This is used to invalidate the cache on a POST so that the next GET will retrieve new content
*  The purpose of using Lua here is that the application doesn’t need to adjust headers or try to manage cache

---
<h2>Introducing Nginx plus</h2>
by: [Owen Garrett](https://uk.linkedin.com/in/owengarrett){:target="_blank"}<br/>
of: [Nginx, Inc.](http://nginx.com/){:target="_blank"}

* Nginx was initially develop by a single Russian developer trying to have a single server deliver 10,000 concurrent connections about 15 years ago
* Non blocking event driven architecture
* Nginx creates more consistency and efficiency
* Nginx the company was started in 2011
* Offices in San Francisco, Cork, Cambridge UK, and Moscow
* Nginx surpassed usage of apache in January 2016
* Nginx plus is the premium solution which adds value to the open source offering
* The goal of plus is to respect the open source community by including additional features such as WAF, advanced load balancing, and enterprise features and development release as stable but released more frequently than the stable open source line as well as support
* 75% of the code pushed by Nginx, Inc engineers was pushed directly to the open source project not the plus offering
 
 ---
 
This was a good meetup, and I am definitely going to consider using the LUA option for cache invalidation for at least one of the projects we have going on at the moment.  I’m not sure if Nginx Plus makes sense for me at the minute, but if I ever get to the point where full support for Nginx makes sense, I’d feel very good about having the engineers who are building it answer my calls?


 ~ Dave
