---
layout: post
category: Tech
tags: ['Java']
title: 《深入探讨Java类加载器》
created: 1277902756
---
<p class="rteleft">《<a href="http://www.ibm.com/developerworks/cn/java/j-lo-classloader/index.html" target="_blank">深入探讨Java类加载器</a>》是我3月份写的一篇文章，一直没有在这个博客上面介绍一下</p>


<p class="rteleft">Java的类加载器一直是个比较复杂的话题，在Java里面又是比较重要的概念。虽然一般开发中很少遇到，但是如果要开发容器或是OSGi组件的话，有些时候会遇到它。而且一旦出现问题，很难一下子发现问题的所在。这篇文章就是结合了之前自己的一些使用经验，对Java的类加载器做了一些探讨。</p>


<p class="rteleft">文章的摘要如下：</p>

<blockquote class="rteleft">类加载器（class loader）是 Java&trade; 中的一个很重要的概念。类加载器负责加载 Java 类的字节代码到 Java 虚拟机中。本文首先详细介绍了 Java 类加载器的基本概念，包括代理模式、加载类的具体过程和线程上下文类加载器等，接着介绍如何开发自己的类加载器，最后介绍了类加载器在 Web 容器和 OSGi&trade; 中的应用。 </blockquote>


<p class="rteleft"><span style="color: rgb(255, 0, 0);"><strong>注意</strong></span><strong>：developerWorks文章上的示例代码下载链接已经失效，请使用这个</strong><a href="/assets/files/classloader.zip" target="_blank"><strong>链接</strong></a><strong>来下载。</strong></p>

