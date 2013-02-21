---
layout: post
category: Tech
title: 使用Fiddler来查看JVM发出的HTTP请求
created: 1255968652
---

在服务端代码中，我们经常会用Apache HttpClient或是JVM自带的HttpURLConnection来发出HTTP请求，如何查看这些请求的内容，我之前一直没有搞清楚。我试过一些监测工具，总是捕捉不到，前几天才知道应该这么去做。


用我们在IE上调试时常用的<a href="http://www.fiddler2.com/fiddler2/">Fiddler</a>就可以。Fiddler默认是作为系统的代理服务器的，所有通过Fiddler代理的请求，自然会被Fiddler来捕获。Fiddler的默认代理端口是8888. 只需要在启动JVM的时候加上参数<strong>-DproxyHost=localhost -DproxyPort=8888</strong>就可以了。

<img alt="" src="https://38noea.blu.livefilestore.com/y1mTnaqrR3xRtPc1dbBV78THzMXMl0BAdKOH_wAmXPOhXURIjm_xaWoum5YR-D4uDfyOzuDtfjoU2kPTfy87antV0npTOZ25gsMMRgSs1C1JiobZEXrnm7BH-stJjePg6EJLgsNL0XEFimuF64Id6o3sg/fiddler-options.png" />


顺便写了一篇同样内容的<a href="http://alexcheng1982.spaces.live.com/blog/cns!E6D2EBA4032A9101!128.entry">英文博客</a>。
