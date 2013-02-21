---
layout: post
category: Non-Tech
title: 简约在线视频播放器成功迁移到本网站内
created: 1273110716
---
<p class="rteleft">在上一篇博文中提到了个人网站的转型，首先第一个尝试就是把之前运行在Google App Engine上的&ldquo;简约在线视频播放器&rdquo;迁移到本网站上来。之前从来没有写过PHP，花了一些时间看了看PHP手册，然后就开始边学边写，终于用差不多一天的时间完成了迁移。除此之外，对原来的应用也做了优化。</p>

<ul>

    <li class="rteleft">移除了一些不常用的功能，如搜索结果显示列表中的无限长滚动条，以及书签和浏览器后退按钮支持。</li>

    <li class="rteleft">在首页的中间区域增加了搜索框。</li>

    <li class="rteleft">在对百度视频的搜索结果进行解析的时候，放弃了之前的DOM解析的做法，改用正则表达式实现，性能应该有所提升。</li>

    <li class="rteleft">提供了单独的帮助页面。</li>

    <li class="rteleft"><strong>支持更多能在当前页面内播放的视频分享网站</strong>，确保可以全屏幕播放。</li>

    <li class="rteleft">迁移之后，可以获得<strong>更快的访问速度</strong>。</li>

</ul>


<p class="rteleft">欢迎大家尝试一下新版的&ldquo;<a target="_blank" href="http://www.cheng-fu.com/vp/">简约在线视频播放器</a>&rdquo;，并提出宝贵意见。帮助页在<a target="_blank" href="http://www.cheng-fu.com/vp/help.php">这里</a>。截图如下：</p>

<p class="rteleft"><img alt="截图" width="600" height="401" src="/assets/files/video-player.png" /></p>
