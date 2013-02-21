---
layout: post
category: Non-Tech
title: 在Notepad++中使用Tidy来格式化HTML文档
created: 1252592484
---

Notepad++是一块不错的文本编辑器。在用Notepad++编写HTML文档的时候，经常会需要对文档进行格式化（pretty-print），主要是提供良好的缩进。通过<a href="http://tidy.sourceforge.net/">Tidy</a>插件就可以比较好的完成这个功能。为了Tidy正常的工作，需要在NPPTextFX目录下面（一般在C:\Program Files\Notepad++\plugins\NPPTextFX）新建一个配置文件：HTMLTIDY.CFG，该文件包含Tidy的配置选项，如：>


<p><strong><em>indent: auto&nbsp;</em></strong></p>

<p><strong><em>indent-spaces: 2</em></strong></p>


<p>这样的设置就可以开启自动缩进的功能。更多的配置可以参考<a href="http://tidy.sourceforge.net/docs/quickref.html">这里</a>。</p>
