---
layout: post
category: Tech
tags: ['.NET']
title: 与.Net Framework补丁做斗争
created: 1269953831
---
<p>公司出了新的政策，电脑上面必须装上所有需要打的系统补丁。我的问题是.Net Framework有几个补丁一直打不上去，安装就直接失败了。其根本原因在于我之前错误的把Windows Installer的安装缓存文件给删除了。安装更新补丁的时候一般需要卸载再重装，而缺少这些缓存文件就导致卸载失败，从而无法安装更新。</p>


我的做法是卸载之后重新安装，首先需要用注册表编辑器把与.Net Framework相关的内容删掉。在`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework`下面可以找到各种版本的.Net Framework的信息，把它们删除。然后就可以重新进行安装了。

<p>在安装之前，可能需要把Windows Installer升级到最新的<a href="http://www.microsoft.com/downloadS/details.aspx?familyid=5A58B56F-60B6-4412-95B9-54D056D6F9F4&amp;displaylang=en">4.5</a>版本，不然可能会出现错误。</p>
