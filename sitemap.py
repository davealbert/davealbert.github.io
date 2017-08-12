#!/usr/bin/env python

from os import listdir, stat, walk
from time import localtime

BASEURL = "https://davealbert.github.io"

now = localtime()
nowstring = "{}-{}-{}T{}:{}:{}+00:00".format(now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec)


print '''<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
  <loc>https://davealbert.github.io/</loc>
  <lastmod>{}</lastmod>
</url>
<url>
  <loc>https://davealbert.github.io/textfiles/</loc>
  <lastmod>{}</lastmod>
</url>'''.format(nowstring, nowstring)

for root, dirs, files in walk(".", topdown=False):
    for name in files:
        if name != "googlef48735c95ae21f14.html" and (name.find(".txt") >=0 or name.find(".html") >= 0):
            string = "{}/{}/{}".format(BASEURL, root, name)
            t = localtime(stat(root + "/" + name).st_mtime)
            date = "{:02d}-{:02d}-{:02d}T{:02d}:{:02d}:{:02d}+00:00".format(t.tm_year, t.tm_mon, t.tm_mday, t.tm_hour, t.tm_min, t.tm_sec)

            print "<url>"
            print "  <loc>{}</loc>".format(string.replace("./", ""))
            print "  <lastmod>{}</lastmod>".format(date)
            print "</url>"

print "</urlset>"
