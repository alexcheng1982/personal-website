---
layout: post
category: Tech
title: “简约在线视频播放器”更新
created: 1259925814
---

昨天回去之后把之前做的一个古老的Google App Engine的应用&ldquo;<a target="_blank" href="http://online-video-player.appspot.com">简约在线视频播放器</a>&rdquo;做了一下更新，目前版本是3.0. 主要的更新如下：

<ul>

    <li class="rteleft">修正了热门搜索关键词无法显示的问题。百度修改了其视频搜索的页面，我做了对应的调整。用YQL取代了以往的用Python解析的方式。</li>

    <li class="rteleft">添加了HTML meta标签。</li>

    <li class="rteleft">添加了2个广告。（好吧，我承认我是想钱想疯了。。。）</li>

</ul>


<p>下面应该考虑对另外一个古老的应用&ldquo;<a target="_blank" href="http://smth-bbs-gallery.appspot.com/">水木社区图片库</a>&rdquo;进行升级了。由于水木社区对图片启用了HTTP referrer头的检查来防止盗链，目前无法在当前页面上直接查看图片了。目前想到的只有用服务端代理的方式。</p>
