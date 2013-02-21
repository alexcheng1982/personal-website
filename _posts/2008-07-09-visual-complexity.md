---
layout: post
category: Tech
title: 复杂度展现之美 - Visual Complexity图库
created: 1215602580
---

对于复杂数据的展现从来都是一门艺术，<a href="http://www.visualcomplexity.com/">Visual Complexity</a>这个网站为我们提供了大量精美的艺术作品，让人惊叹。


如果要做一个图库来展现这些图片的话，肯定需要图片的标题，地址，缩略图地址等结构化数据。但是这个网站并没有提供给我这些。当时的第一反应是屏幕抓取，不过那样就太复杂了。后来发现该网站有Feed，通过查看Feed内容，发现里面包含了图片，我就可以提取其中的图片地址了。再通过比对原始大小图片和缩略图的URL，发现了其中的规律，就可以从原始大小图片的URL计算出缩略图的URL。这样所有的数据就齐备了。


我的这个图库是基于Dojo来实现的，用的模块主要是`dojox.image.Gallery`和`dojox.data.GoogleFeedStore`。


实现的思路是通过Google AJAX Feed API获得Visual Complexity网站提供的<a href="http://feeds.feedburner.com/visualcomplexity">Feed</a>（由`dojox.data.GoogleFeedStore`封装内部实现）。然后分析Feed条目中content的内容，用正则表达式提取出来图片的地址并计算其缩略图的地址。上面的逻辑被封装在继承自`dojox.data.GoogleFeedStore`的`VisualComplexityStore`中。然后使用`Gallery`来显示就可以了。

通过自己对Dojo打包来减少库的大小。

下面是一张截图：


<a href="http://www.flickr.com/photos/15592504@N00/2652728382/" title="Visual Complexity图库 by Fu Cheng, on Flickr"><img src="http://farm3.static.flickr.com/2195/2652728382_88aae07096.jpg" width="500" height="342" alt="Visual Complexity图库" /></a>
