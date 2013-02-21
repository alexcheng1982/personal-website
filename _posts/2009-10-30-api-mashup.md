---
layout: post
category: Tech
tags: ['Web']
title: 使用开放 API 和工具快速开发情景式 mashup 应用
created: 1256825421
---


[使用开放 API 和工具快速开发情景式 mashup 应用](http://www.ibm.com/developerworks/cn/web/0910_chengfu_mashup/)这篇文章终于发表了，等了有差不多一个月了。这篇文章算是我之前一直在做的[甲型H1N1流感最新动态Mashup](http://js-playground.appspot.com/swineflu/static/index.html)的一个总结吧。


关于甲型H1N1流感的mashup，四月份的时候就开始做了。当时是看到大家都比较关注猪流感，各大门户网站也有相关的专题页面。自己就想着利用已有的开放API自己做一个mashup，并在Google App Engine上面快速的实现了。后来又有了一比较大的更新。之后觉得可以把做这个mashup中的一些经验总结出来，于是就有了这篇文章的想法。

为了完成这篇文章，我对mashup的实现做了很多调整。在这篇文章中可以下载的示例代码是修改过的。

* 实现语言从Python换成了Java。主要是考虑到Java语言比较普及，而GAE也有Java的支持了。

* JavaScript库从jQuery换成了Dojo。

* 增加了必应的视频搜索。由于Twitter和饭否不能访问，换成了另外一个微博客服务Identi.ca


下面是该mashup中用到的API和工具的列表：

<table class="table table-bordered">

    <tbody>

        <tr>

            <th>API 和工具</th>

            <th>作用</th>

        </tr>

        <tr>

            <td>Google 地图</td>

            <td>在地图上展示全球各个国家和地区的甲型 H1N1 流感的确认病例和死亡人数。</td>

        </tr>

        <tr>

            <td>屏幕抓取</td>

            <td>从 HTML 页面中抓取数据，提供给 Google 地图使用。</td>

        </tr>

        <tr>

            <td>微软必应</td>

            <td>搜索甲型 H1N1 流感相关的视频。</td>

        </tr>

        <tr>

            <td>雅虎 Pipes</td>

            <td>将甲型 H1N1 流感相关的新闻和博客的多个订阅源进行整合。</td>

        </tr>

        <tr>

            <td>Google AJAX 供稿 API</td>

            <td>将 RSS/Atom 订阅源转换成 JSON 格式。</td>

        </tr>

        <tr>

            <td>Delicious</td>

            <td>搜索甲型 H1N1 流感相关的网址。</td>

        </tr>

        <tr>

            <td>Flickr</td>

            <td>搜索甲型 H1N1 流感相关的图片。</td>

        </tr>

        <tr>

            <td>Identi.ca</td>

            <td>搜索甲型 H1N1 流感相关的微博客内容。</td>

        </tr>

        <tr>

            <td>Google App Engine</td>

            <td>部署示例 mashup 应用。</td>

        </tr>

    </tbody>

</table>

最终的完成版本如下：

<img width="570" height="665" src="http://www.ibm.com/developerworks/cn/web/0910_chengfu_mashup/all.jpg" />

能够最终完成这篇1万1千余字的文章，还是很开心的。

