---
layout: post
category: Tech
tags : ['JavaScript']
title: 【阅读笔记】JavaScript - Misunderstood
created: 1248457376
---
<p>最近终于有时间看看新的东西了，刚才在Slideshare上面看了一个PPT，关于JavaScript的，有些地方还是值得一看的，把一些之前没有意识到的地方记录下来先。</p>

<ul>

    <li>原作者有个错误，"0"和"0.0"都不是假值，空字符才是假值。</li>

    <li>0.0 + "0" = "00"。这里是做字符串相加，而0.0转换成字符串是"0"。</li>

    <li>下面的代码：</li>

{% highlight javascript %}

var x = 9;
function foo() {
  alert(x);
  var x = 10;
  alert(x);
}

foo();

{% endhighlight %}

</ul>

<p>初一看还以为输出时9和10，其实是undefined和10。这里的关键之处在于理解执行上下文中的激活对象（Activation Object），激活对象是在执行上下文对应的作用域链（scope chain）的第一个对象，它中间除了包含传入的参数的值外，还包含所有的局部变量，并且这些局部变量的值一开始都是undefined。就这个例子来说，在foo被调用的时候，激活对象被创建，x有了值undefined，所以执行第一行的alert的时候，输出undefined；接着x被赋予值10，第二个alert就输出10了。从这点出发，一个好的做法是在使用局部变量前先声明。</p>

<ul>

    <li>对于onload的事件，可以在使用之后就删除掉，以释放内存。&nbsp;</li>

</ul>

<p>这个PPT如下：</p>


<div style="width:425px;text-align:left" id="__ss_1732473"><a style="font:14px Helvetica,Arial,Sans-serif;display:block;margin:12px 0 3px 0;text-decoration:underline;" title="JavaScript Misunderstood" href="http://www.slideshare.net/Bhavsidd/javascript-misunderstood">JavaScript Misunderstood</a><object style="margin:0px" width="425" height="355">

<param name="movie" value="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=javascript-misunderstood-090716190359-phpapp02&amp;stripped_title=javascript-misunderstood" />

<param name="allowFullScreen" value="true" />

<param name="allowScriptAccess" value="always" /><embed src="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=javascript-misunderstood-090716190359-phpapp02&amp;stripped_title=javascript-misunderstood" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="355"></embed></object>

<div style="font-size:11px;font-family:tahoma,arial;height:26px;padding-top:2px;">View more <a style="text-decoration:underline;" href="http://www.slideshare.net/">presentations</a> from <a style="text-decoration:underline;" href="http://www.slideshare.net/Bhavsidd">Bhavya Siddappa</a>.</div>

</div>

