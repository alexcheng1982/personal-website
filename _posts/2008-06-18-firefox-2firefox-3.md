---
layout: post
category: Tech
tags : ['Firefox']
title: 同时使用Firefox 2和Firefox 3
---
Firefox 3已经[正式发布](http://news.zdnet.co.uk/software/0,1000000121,39435431,00.htm)，并开始了要创造24小时内下载次数最多的软件的吉尼斯世界记录的[活动](http://www.spreadfirefox.com/en-US/worldrecord/firefox3)。


如果想同时使用Firefox 2和3的话，首先Firefox 3需要安装在与Firefox 2不同的目录中。然后利用不同的概要文件（profile)来实现。首先用Firefox 2创建新的概要文件，假设你的Firefox 2的安装目录是`C:\Program Files\Mozilla Firefox`，Firefox 3的安装目录是`C:\Program Files\Mozilla Firefox 3`。那么运行`"C:\Program Files\Mozilla Firefox\firefox.exe" -P`这个命令，在弹出的窗口里面新建两个概要文件（profile），比如一个名字叫FF3，另外一个叫FF2。可以修改桌面上的Firefox 3的快捷方式，Firefox 3的快捷方式的目标改成：`"C:\Program Files\Mozilla Firefox 3\firefox.exe"  -P FF3 -no-remote` 这样就可以了。再创建另外一个Firefox 2的快捷方式，目标是`"C:\Program Files\Mozilla Firefox\firefox.exe" -P FF2`。


这样就可以通过两个不同的快捷方式来同时运行Firefox 2和3了。

