---
layout: post
category : Tech
tags : ['JavaScript', 'Firebug']
title: 使用Firebug和Greasemonkey查看网站
created: 1213691033
---


Firebug和Greasemonkey都是Firefox上非常流行的扩展，使用她们可以很方便的对一个网站的HTML页面进行查看和修改，对于Ajax应用的调试也是有帮助的。


Firebug的一个窗口允许直接输入Javascript代码并运行，非常方便对于某个页面的DOM进行查看和调试。比如可以动态的给某个DOM元素添加事件，删除事件等等。


用到Greasemonkey的地方也很简单。原因是我习惯于使用jQuery来对页面的DOM元素进行操作，但是很多站点都没有采用jQuery，这个时候可以通过Greasemonkey把jQuery的库动态添加进去，只需要创建一个新的User script就可以了。该script的内容如下：


{% highlight javascript %}

(function() {
  var head = document.getElementsByTagName("head")[0];
  var scriptElem = document.createElement("script");
  scriptElem.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js";
  head.appendChild(scriptElem);
})();

{% endhighlight %}
