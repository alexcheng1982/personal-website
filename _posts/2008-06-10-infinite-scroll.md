---
layout: post
category : Tech
tags : ['JavaScript']
title: 无限长滚动条
created: 1213075612
---

这是看到Ajaxian上面的一篇文章[Implementing infinite scrolling with jQuery](http://ajaxian.com/archives/implementing-infinite-scrolling-with-jquery)之后，觉得挺实用的，就自己试验了一下。



这种无限长滚动条的模式在[Google Reader](http://reader.google.com)和[Wikia搜索引擎](http://re.search.wikia.com/)上都有用到。



我用了我自己在[Google Reader上共享的条目](http://www.google.com/reader/public/atom/user/07430005911922655445/state/com.google/broadcast)作为数据的来源。运行起来的效果是一开始只是显示了前面5个条目，当滚动条下移的时候，会逐步把下面的条目显示出来。

核心的代码在下面：

{% highlight javascript %}

(function(){
  var entries = null;
  function loadNewEntry() {
    var id = parseInt($("#entries &gt; li:last").attr("id").replace(/^entry/, ""));
    if (id &gt;= entries.length - 1) {
      return;
    }
    displayEntry(entries[id + 1], id + 1);
  }			

  function displayEntry(entry, i) {
    var title = $(entry).find("&gt; title").text();
    var content = $(entry).find("&gt; content").text();
    $("#entries").append($("&lt;li/&gt;").attr("id", "entry" + i).append($("&lt;h2/&gt;").html(title)).append($("&lt;p/&gt;").html(content)));
  }			

  var url = "http://www.google.com/reader/public/atom/user/07430005911922655445/state/com.google/broadcast";

  $.get("/proxy.php?url=" + encodeURIComponent(url), function(data) {
    $("#entries").empty();
    entries = $(data).find("entry") || [];
    entries.each(function(i) {
      displayEntry(this, i);
      return i < 4;
    });
					
    $(window).scroll(function(){
      if ($(window).scrollTop() == $(document).height() - $(window).height()){
        loadNewEntry();
      }
    });
  });
})();

{% endhighlight %}