---
layout: post
category: Tech
title: 使用Flex SDK的mxmlc在IBM JDK上抛出java.lang.IllegalAccessError
created: 1225679212
---

【2009/05/05更新】：我今天试验了一下，使用IBM JDK 6.0的话，就算添加这样的设置，还是会出错。所以最好的办法还是使用Sun的JDK，通过在`jvm.config`里面修改`java.home`变量就可以了。

使用Flex SDK来中的mxmlc来编译mxml文件的时候，如果是使用IBM的JDK，会抛出`java.lang.IllegalAccessError`导致编译失败。这是一个已知的<a href="http://bugs.adobe.com/jira/browse/SDK-9313">问题</a>，解决办法是在与`mxmlc.exe`同目录的`jvm.config`文件中在`java.args`参数后面加上`-Xbootclasspath/a:c:/{Flex SDK目录}/lib/xercesImpl.jar`，其中的路径指向Flex SDK中`xercesImpl.jar`文件所在的目录。
