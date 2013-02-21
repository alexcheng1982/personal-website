---
layout: post
category: Tech
tags: ['JavaScript']
title: document.write
created: 1272281221
---
<p class="rteleft">有段时间没有写技术相关的东西了，今天就写一写document.write</p>


<p class="rteleft">一般来说，在我们日常的开发中，比较少会和document.write这个方法打交道。不过document.write在引人第三方的脚本库的时候非常常用。比如经常的写法是用一个&lt;script&gt;标签添加一个JavaScript文件，然后就可以生成出来很多内容。这种做法在Google Map等地图类的库上都用到了。在这个JavaScript文件里面就是用的document.write来输出额外的&lt;script&gt;元素、CSS链接和各种DOM元素的。</p>


<p class="rteleft">这里需要注意的是document.write只在页面正在加载中的时候起作用。如果在页面已经加载完成之后，再调用document.write的话，会冲掉当前页面的所有内容。这显然不是一个理想的行为。这就使得延迟加载很多JavaScript库变得复杂起来，不能简单的在页面加载完成之后通过动态创建&lt;script&gt;元素来加载，因为那样会导致页面的内容被冲掉。</p>


<p class="rteleft">如果你只是希望简单的显示一些东西，可以创建一个iframe，在iframe里面来引入JavaScript库。这样的话改变的是iframe里面的内容，对当前页面没有影响。</p>


<p class="rteleft">下面是一些有用的链接：</p>

<ul>

    <li class="rteleft"><a href="https://developer.mozilla.org/en/DOM/document.write">Firefox的document.write</a></li>

    <li class="rteleft"><a href="http://msdn.microsoft.com/en-us/library/ms536782(VS.85).aspx">IE的documet.write</a></li>

</ul>
