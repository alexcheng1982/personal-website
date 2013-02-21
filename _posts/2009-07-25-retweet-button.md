---
layout: post
category: Tech
tags : ['JavaScript']
title: 学习一下Retweet Button的代码
created: 1248516427
---
<p><a target="_blank" href="http://ejohn.org/blog/retweet/">Retweet Button</a>是John Resig写的一个简单的JS，用来把某个URL通过bit.ly的服务变短之后，发送到Twitter上去。 这个东西本来是比较简单的，<a target="_blank" href="http://ejohn.org/files/retweet.js">代码</a>也比较少，不过从中还是可以学到一些比较好的做法。</p>

<ul>

    <li>(function(){})()，创建一个匿名方法并马上执行，用来解决命名冲突的典型做法了。window.RetweetJS暴露一个惟一的全局变量作为入口点。</li>

    <li>通过&lt;script&gt;标签动态加载JavaScript文件。</li>

{% highlight javascript %}

var head = document.getElementsByTagName("head")[0] ||
		document.documentElement;
var script = document.createElement("script");
	script.src = "http://bit.ly/javascript-api.js?version=latest&amp;login=" +
		RetweetJS.bitly_user + "&amp;apiKey=" + RetweetJS.bitly_key;
	script.charSet = "utf-8";
	head.appendChild( script );

{% endhighlight %}

</ul>

<p>这种做法也非常常见了，与我之前的做法不同的是，如果没有head元素的话，就使用文档的根元素。</p>

<ul>

    <li>对于onload的处理，自己习惯了dojo.addOnLoad，已经不记得背后的细节了。</li>

{% highlight javascript %}

if ( document.addEventListener ) {
	document.addEventListener("DOMContentLoaded", loaded, false);
} else if ( window.attachEvent ) {
	window.attachEvent("onload", loaded);
}

{% endhighlight %}


<li>insertBefore，从来没用过这个DOM方法。var insertedElement = parentElement.insertBefore(newElement, referenceElement)</li>

    <li>getElementsByClassName，如果有这个方法的话，就用之；没有的话，就取到元素列表，用正则表达式过滤元素的className。</li>

    <li>动态添加CSS样式。</li>

{% highlight javascript %}

var style = document.createElement("style");
style.type = "text/css";
try {
    style.appendChild( document.createTextNode( RetweetJS.styling ) );
} catch (e) {
    if ( style.styleSheet ) {
        style.styleSheet.cssText = RetweetJS.styling;
    }
}
document.body.appendChild( style );

{% endhighlight %}

</ul>

