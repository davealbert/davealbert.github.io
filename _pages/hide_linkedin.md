---
layout: page
title: Hi there LinkedIn Users
permalink: /in/
show: false
---

![LinkedIn davewalbert](/images/contact/in-hi.png){:class="img-responsive"}
I’m happy to see you people of LinkedIn.

Links are in descending chronological order, so if you are looking for something I mentioned in the past, it may be down the list a bit.

&nbsp;
&nbsp;

**Im currently working on:**

[CTO and Co-Founder Podcast](/cto-and-co-founder-talk-with-dave-albert){:target="_blank"}
===
This is my podcast about building a startup from a first time CTO’s perspective

&nbsp;
&nbsp;

[Medit – a Health Care Professional Kowledge Platform](https://medit.online){:target="_blank"}
===

We are building a mobile platform for healthcare professionals to quickly access & discover the best medical content using Machine Learning (ML) and Artificial Intelligence (AI).

&nbsp;
&nbsp;

**13th, February 2017**

If you manage multiple hosts from Ansible, this might help you:

```
ss () {
        PORT=2222
        USER=dave_user
        LIST=$(ack $1 /Users/davealbert/code/_One15Digital/sysAdmin/ansible/hosts|grep -v "^#" |uniq)
        LINES=$(echo ${LIST}|wc -l)
        if [[ $LINES > 1 ]]
        then
                echo $LIST
        else
                ssh ${USER}@$(echo $LIST|cut -d"=" -f 4) -p${PORT}
        fi
}

~$ ss my_host
```

&nbsp;
&nbsp;

**Older**

[I’m starting a new business!]()

[Check out what I’m up to Now]()
