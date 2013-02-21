---
layout: post
category: Tech
tags : ['Java']
title: Java中的伪typedef反模式（pseudo-typedef antipattern）
created: 1226923623
---
这篇博客是看到了developerWorks上面的一篇<a href="http://www-128.ibm.com/developerworks/java/library/j-jtp02216.html">The pseudo-typedef antipattern</a>而写的，算是简单的注记。


那篇文章说的是JDK 5.0中引入了泛型之后，声明类型的语句变得比较冗长。比如原来是简单的`Map socketOwner = new HashMap();`，现在就变成`Map<Socket, Future<String>> socketOwner = new HashMap<Socket, Future<String>>();` 。


为了解决这个问题，有的程序员会使用伪typedef来做，比如：

{% highlight java %}

public class SocketUserMap extends HashMap<Socket, Future<String>> { }
SocketUserMap socketOwner = new SocketUserMap();

{% endhighlight %}

在以后的代码中就可以使用`SocketUserMap`来代替冗长的类型声明了。


不过这种做法有自己的问题，主要是引入了新的子类，在使用或是与第三方库集成的时候会遇到一些问题。比如`UsernameList`和`ProductList`都是继承自`List<String>`，但是由于是不同的类型，有些对`List<String>`进行的操作是不能共用的。

作者给出了一种写法是：

{% highlight java %}
public static <K,V> Map<K,V> newHashMap() {
  return new HashMap<K,V>(); 
}
Map<Socket, Future<String>> socketOwner = Util.newHashMap();
{% endhighlight %}

这种写法中，编译器会自动的进行类型匹配。









