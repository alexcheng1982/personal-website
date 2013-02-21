---
layout: post
category : Tech
title: Yahoo! SearchMonkey - 增强搜索引擎的返回结果
created: 1214994575
---

看到Yahoo!的<a href="http://developer.yahoo.com/searchmonkey/">SearchMonkey</a>，最好玩的是它的Logo，那个猴子很可爱。

<img src="http://developer.search.yahoo.com/images/searchmonkeyLogo147x150.gif" />

SearchMonkey可以让开发人员对Yahoo!提供的搜索结果进行增强显示。它的基本运行方式是：当Yahoo!的搜索引擎返回的结果里面的URL满足你的应用定义的模式的时候，你的应用就会被运行，就能提供更好的方式来展现结果。



假设用户添加了Yelp.com的应用，当搜索结果里面的URL是在yelp.com内的话，这个应用就会被调用。比如搜索一个饭店的名字，出现了Yelp.com的结果，就会显示饭店的图片，地址，电话之类的。如下图所示：


<img src="http://developer.yahoo.com/searchmonkey/smguide/images/sm_before_after.png" />



Google现在也提供类似的能力，如下面两个例子：

第一个是搜索“MSFT”。MSFT是微软的股票代码，Google给出的结果的第一条是该股票的走势情况，在上面多出来两个tab：Finance和News。

<a href="http://www.flickr.com/photos/15592504@N00/2630243533/" title="Google搜索MSFT的结果 by Fu Cheng, on Flickr"><img src="http://farm4.static.flickr.com/3075/2630243533_c76acb2dca_o.png" width="640" height="304" alt="Google搜索MSFT的结果" /></a>



第二个是搜索“Mountain View”。这是一个地名，Google给出的结果第一条是个地图，在上面多出来两个tab：Maps和News。



<a href="http://www.flickr.com/photos/15592504@N00/2630253505/" title="Google搜索Mountain View by Fu Cheng, on Flickr"><img src="http://farm4.static.flickr.com/3159/2630253505_8c8f4c0818_o.png" width="644" height="304" alt="Google搜索Mountain View" /></a>



Google的搜索结果整合了它自己提供的财经和地图服务，使得搜索结果更加丰富。Yahoo!通过把自己的搜索结果开放出来让网站和开发人员进行定制，显然是想利用集体的智慧让搜索结果更加丰富。



不过现在SearchMonkey只有用户登录了之后才能使用，需要用户选择应用。这点目前还不是很方便。不排除今后Yahoo!将对一些常用网站的增强添加到通用的搜索结果中，让人不需要登录就能看到。
