---
layout: post
category: Tech
tags : ['JavaScript']
title: Unobtrusive JavaScript  - 非侵入式JavaScript
created: 1211892857
---


Unobtrusive JavaScript是目前在Web开发领域推行的一种思想。原来的做法通常是一开始就针对很复杂的平台，然后再考虑对不支持的平台如何来处理。Unobtrusive JavaScript的思想则是一开始就针对受限的平台提供基本的功能；在功能更强大的平台上，有更多的增强。


对JavaScript来说，首先是创建一个不需要JavaScript就能工作的站点，然后再使用JavaScript来增强此站点以提供更好的用户体验。典型的做法是从富含语义的HTML（Plain Old Semantic HTML）出发，在上面添加CSS来改变样式，最后加上JavaScript来添加行为。



有一个不错的幻灯片（[Unobtrusive JavaScript with jQuery](http://www.slideshare.net/simon/unobtrusive-javascript-with-jquery)）对利用jQuery实践这样的思想做了很好的阐述。


下面有两个在我的站点使用的增强功能实践了这一思想：

### 为站点的外部链接添加图标，并强制在新窗口中打开


文章中经常会出现一些外部链接，这个时候可以提示用户这个链接是引用到外部网站。

用jQuery来实现的话，非常简单，只需要找到所有的HTML anchor元素，判断其href属性是否以http://开头并且不包含本站的域名www.cheng-fu.com。如果是的话，则添加一个图标。


{% highlight javascript %}

$("#main a[href^=http://]:not([href*=www.cheng-fu.com])").attr("target", "_blank").css({
  "background" : "transparent url(/images/innewwindow.gif) no-repeat scroll right center",
  "padding-right" : "20px"
});

{% endhighlight %}


### 为一些术语添加Wikipedia的链接


文章中经常会出现一些术语，对于这些术语，一个很好的解释来源就是Wikipedia。为此，只需要找到所有CSS类是`wikipediaTerm`的元素，然后将其改成anchor就可以了。jQuery提供一个方法[`wrapInner`](http://docs.jquery.com/Manipulation/wrapInner#html)可以很容易的实现这一点。


{% highlight javascript %}

$(".wikipediaTerm").each(function() {
  var term = $(this).text();
  $(this).wrapInner("&lt:a target='_blank 'href='http://en.wikipedia.org/wiki/" + encodeURI(term) + "'&gt;&lt;/a&gt;");
  $(this).removeClass("wikipediaTerm");
});

{% endhighlight %}

