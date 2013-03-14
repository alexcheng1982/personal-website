---
layout: post
category: Tech
tags: ['JBoss', 'English']
title: Solve JBoss classloading issues with web applications
created: 1323264582
---

When deploying web applications to JBoss server, sometimes you may have classloading issues, like `ClassNotFoundException` or `ClassCastException`. These issues may be caused by JBoss uses parent-first strategy to load your application. When parent-first strategy is used, classes loaded by JBoss itself will be used and these classes may have conflicts with libraries inside of your application.

To solve this issue, add a `jboss-classloading.xml` in your web application's `WEB-INF` folder with following content:

 
{% highlight xml %}
<classloading xmlns="urn:jboss:classloading:1.0"
    domain="you_app.war"
    parent-domain="DefaultDomain"
    export-all="NON_EMPTY"
    import-all="true"
    parent-first="false">
</classloading>
{% endhighlight %}

By using parent-last strategy, the classes of your application's libraries will be loaded first and will not conflict with JBoss's own libraries.

A excellent explanation can be found at [here](http://java.dzone.com/articles/jboss-microcontainer-classloading).