---
layout: post
category: Tech
tags: ['JavaScript']
title: Fibonacci（斐波纳契）数列的计算
created: 1302258034
---
斐波纳契数列的计算是一个很老的话题了，出现在各种算法书中。今天写这篇博文的出发点是在网上看了MIT 6.00的公开课，正好把一些思路理清一些，毕竟有些东西，自己实践过后才有深刻的认识。

### 普通的递归计算

这是最简单的算法了，根据斐波纳契数列的定义就可以得出来：`fib(n) = fib(n - 1) + fib(n - 2)`，具体的代码如下。（需要说明的是代码中都省略了对参数的检查，在实际的代码中是需要的）。

{% highlight javascript %}

function fib(n) {
    return (n === 0 || n === 1) ? 1 : fib(n - 1) + fib(n - 2);
}

{% endhighlight %}


### 使用查找表的递归计算

普通的递归计算会执行很多重复计算，通过查找表就可以获取到之前已经计算过的`fib(k)`的值，从而避免重复计算。代码如下：

{% highlight javascript %}

function fib_m(n) {
    var f = arguments.callee, m = f._m || (f._m = {0:1, 1:1});
    return m[n] || (m[n] = f(n-1) + f(n-2));
}

{% endhighlight %}

在这里，把查找表作为JavaScript方法对象的一个属性。

### 迭代计算

更加简单的做法是使用迭代来计算，代码如下：

{% highlight javascript %}

function fib_i(n) {
    if (n === 0 || n === 1) { return 1; }
    var a = 1, b = 1, c;
    for (var i = 2; i &lt;= n; i++) {
        c = a + b;
        b = a;
        a = c;
    }
    return c;
}

{% endhighlight %}

这里用了3个变量，`a`和`b`分别表示`f(n-1)`和`f(n-2)`，`c`表示`f(n)`。
