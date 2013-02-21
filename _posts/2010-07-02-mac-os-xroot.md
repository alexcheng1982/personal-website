---
layout: post
category: Non-Tech
title: 找回Mac OS X的root密码
created: 1278050504
---
如果Mac OS X的root密码遗忘的话，可以通过下面的方式重新设置一个新的密码。该重设方式来源自<a target="_blank" href="http://www.macosxhints.com/article.php?story=20001217230925152">这篇文章</a>，我简单翻译了一下，并且测试可行。


步骤如下：

1）重新启动Mac OS X，在电脑重新启动的过程中，一直按着Command键和S键，直到进入文本界面。

2）输入下面两条命令：

`/sbin/mount -uw /`

`/sbin/SystemStarter`

3）上面两条命令执行结束之后，运行`passwd root`，会提示你重新输入新的密码。

4）输入`reboot`重启电脑，完成修改。

