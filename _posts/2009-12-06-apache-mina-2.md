---
layout: post
category: Tech
tags: ['Java']
title: 《使用Apache MINA 2开发网络应用》
created: 1260064383
---
<p class="rteleft">这是最近写的一篇关于<a href="http://mina.apache.org/" target="_blank">Apache MINA 2</a>的文章，主要介绍了Apache MINA 2的技术细节，对于想用它开发网络应用的人来说，可以作为一个参考。这篇文章的写作花费了我很长的时间，主要是其中示例应用的开发时间很长。为了做那个联机的俄罗斯方块，我花费了很长的时间把Spring Rich Client, Apache MINA和Spring整合起来，涉及到UI的开发就会比较复杂一些。最后做出来的效果还不错吧，虽然代码仍然有些粗糙。目前的想法是重构整理之后再发布出来。</p>

<p class="rteleft">点击<a href="http://www.ibm.com/developerworks/cn/java/j-lo-mina2/" target="_blank">这里</a>访问这篇文章。文章的简介如下：</p>

<blockquote>Apache MINA 2 是一个开发高性能和高可伸缩性网络应用程序的网络应用框架。它提供了一个抽象的事件驱动的异步 API，可以使用 TCP/IP、UDP/IP、串口和虚拟机内部的管道等传输方式。Apache MINA 2 可以作为开发网络应用程序的一个良好基础。本文将介绍 Apache MINA 2 的基本概念和 API，包括 I/O 服务、I/O 会话、I/O 过滤器和 I/O 处理器。另外还将介绍如何使用状态机。本文包含简单的计算器服务和复杂的联机游戏两个示例应用。</blockquote>

__重要更新__

<p class="rteleft">源代码已经发布，地址是：<a href="http://code.google.com/p/tetris-mina/">http://code.google.com/p/tetris-mina/</a>。</p>
