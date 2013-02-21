---
layout: post
category : Tech
tags : ['JavaScript', 'Web']
title: Web应用中的警告提示与Undo，JavaScript中的binding
created: 1215406700
---

一直很喜欢看<a href="http://www.alistapart.com">Alistapart</a>的文章，里面关于设计，用户体验的文章都很好，而且都配有很有趣的插图。



就拿我最近看的两篇来说吧，一篇说的是Web应用中的Undo，另外一篇说的是JavaScript里面的binding。


#### <a href="http://www.alistapart.com/articles/neveruseawarning">Never Use a Warning When you Mean Undo</a>

一般的Web应用在用户做一些有破坏性的操作，比如删除某个东西的时候，通常都会给出一个提示，让用户来确认。然而问题是，大多数用户在使用Web应用都会养成这样的习惯，那就是对于所有的提示都回答Yes。那么他很可能在无意识的情况下，就在提示是否删除的时候点了Yes，然后他的东西就被删除了。好的Web应用应该尊重用户的习惯。作者给出的方法是实现Undo，而不是给出提示。他给出了Gmail的例子：

<img src="http://www.alistapart.com/d/neveruseawarning/images/gmail_undo.png" />

在Gmail中，删除一封邮件的时候，会有个提示，可以让用户Undo，删掉的邮件也会出现在垃圾箱里面。但是在Google Calendar里面却没有这样做。

<img src="http://www.alistapart.com/d/neveruseawarning/images/google_calendar_warning.png" />

由此可见，不同的人对于用户体验的理解实在千差万别，一些最佳实践未必能得到好的应用。



#### <a href="http://www.alistapart.com/articles/getoutbindingsituations">Getting Out of Binding Situations in JavaScript</a>

这篇文章说的是JavaScript里面的this的问题，包括方法执行的上下文对象等。作者给出了详细的说明和总结。

