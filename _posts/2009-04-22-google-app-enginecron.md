---
layout: post
category: Tech
title: 启用Google App Engine的定时服务Cron
created: 1240356051
---
<p><a href="http://code.google.com/appengine/docs/python/config/cron.html">&nbsp;Google App Engine的定时服务</a>终于出来了。当时在做水木社区图片库的时候就非常需要这样一个功能，不过当时<a href="http://code.google.com/p/googleappengine/issues/detail?id=6">没有这样的能力</a>，所以尝试了替代的实现，比如<a href="http://code.google.com/p/gaeutilities/wiki/Cron">gaeutilities</a>和<a href="http://schedulerservice.appspot.com/">schedulerservice</a>，都不是特别好使。有了这个服务之后，不用担心新出来的数据没有被抓取下来了。</p>


<p>要使用这个定时服务也比较简单，首先可能要做的是暴露出来一个供Cron服务访问的URL，这里需要是GET请求来触发的。接着在应用的根目录添加一个cron.yaml文件，内容大概如下，其中url表示的是由Cron服务访问的地址，schedule是定时的间隔。</p>


{% highlight yaml %}
cron:

- description: daily summary job

  url: /tasks/summary

  schedule: every 24 hours

- description: monday morning mailout

  url: /mail/weekly

  schedule: every monday of month 09:00

{% endhighlight %}