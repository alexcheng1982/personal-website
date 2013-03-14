---
layout: post
category: Non-Tech
tags: ['Jekyll']
title: 从Drupal迁移到Jekyll
created: 1362855782
---

前段时间把个人博客从Drupal迁移到了基于[Jekyll](https://github.com/mojombo/jekyll)的静态网站。个人觉得Jekyll对于程序员来说是更加合适的，因为它把网站的内容以一种程序员可控的方式管理起来。Markdown的语法也很适合程序员来使用。纯静态的网页很适合找到便宜又合适的主机来存放，因此对程序员来说，Jekyll是一个还不错的选择。

### 安装Jekyll

Jekyll的安装并不复杂，从官方网站上就可以找到详细的安装文档。从百度也可以搜索到很多中文版的安装指南。基本上只需要安装Ruby和一些Ruby gems就可以了。不过使用Jekyll编写中文的内容的时候，可能会出现非常多不一样的乱码的问题，[这篇文章](http://chxt6896.github.com/blog/2012/02/13/blog-jekyll-native.html)可以很好地解决遇到的各种问题。

#### Jekyll-Bootstrap

安装了Jekyll之后，在开始创建自己的网站之前，一般是需要一个基本的模板。可以从GitHub上面找到很多别人的网站使用的基本模板。我比较懒，就找了一个使用Twitter Bootstrap的模板。从[项目的网站](http://jekyllbootstrap.com/)上面下载代码之后，用Jekyll运行，就可以有一个网站的基本模板了。

### 数据迁移

对于已经有博客的人来说，迁移到Jekyll最大的问题就是原有的内容怎么迁移。Jekyll提供了对Drupal和Wordpress等的迁移支持，不过目前这些迁移能力还是相对不太完善的。Jekyll网站上面有关于如何从Drupal迁移的[文档](https://github.com/mojombo/jekyll/wiki/blog-migrations)，不过不太完备。

#### 数据源

Jekyll的迁移程序在运行时，需要指定数据库的连接字符串。我的主机提供的Mysql数据不能从外面访问的。我的做法是通过备份功能把数据从Mysql数据库导出来，再导入到本地的一个Mysql数据库，最后再运行迁移程序。再导出数据库的时候，只需要导出`node`，`node_revisions`和`url_alias`这3个表就可以了。如果数据库表包含前缀，在导出的sql文件中需要去掉前缀。再运行下面的命令就可以生成转换之后的Markdown文件。

{% highlight ruby %}
 ruby -rubygems -e 'require "jekyll/migrators/drupal"; Jekyll::Drupal.process("database", "user", "pass")'
{% endhighlight %}

### 编辑

生成出来的Markdown文件存放在`_posts`目录中。生成的Markdown文件的内容需要进行进一步的编辑，比如`title`字段可能是乱码，内容中可能包含HTML代码，应该把这些替换成Markdown语法。

### Tips

#### 分页
为了启用Jekyll的分页支持，必须使用`index.html`还不能是`index.md`。






