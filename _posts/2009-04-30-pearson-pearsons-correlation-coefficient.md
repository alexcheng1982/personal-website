---
layout: post
category: Tech
title: Pearson相关系数与推荐系统 - Pearson''s Correlation Coefficient
created: 1241049526
---
<p>&nbsp;这也是我原来的博客上面的一篇<a href="http://woodstudio.javaeye.com/blog/141005">文章</a>，现在把它转帖过来并进行一些更新。</p>

<p>Pearson相关系数用来衡量两个数据集合之间的相似性。比如在一个关于电影的资料网站中，很多用户都可能对其中的电影进行打分。Pearson相关系数可以用来帮助更好的找到兴趣相似的用户，从而进行相关的推荐。这种推荐的基本思路是如果A和B兴趣相似，那么A喜欢看的，B就有很大可能会喜欢看，就可以把A的喜欢看的推荐给B。</p>

<p>假设电影库中5部电影，A和B都对其中的部分进行了打分（5分为满分），A的分数是[3, 2, -, 1, 4]，B的分数是[5, 3, 3, -, 5]，其中&ldquo;-&rdquo;表示未打分。那么A和B的Pearson相关系数是0.866，说明两个人的兴趣是比较相似的。</p>

<p>Pearson相关系数的一个优点是可以避免评分等级膨胀（grade inflation）的问题，也就是说有的用户可能倾向于对所有的电影都给比较高的分数，而有的用户则会比较苛刻，给分都比较低。对于这种情况，Pearson相关系数可以处理。</p>

<p>Pearson相关系数的具体计算公式为：</p>

<p><img alt="" src="http://davidmlane.com/hyperstat/pictures/pearson6.GIF" /></p>

<p>一个简单的例子：</p>

<p>X是[1, 2, 3]，Y是[2, 5, 6]，结果是0.9608。</p>

<p><img alt="" src="http://davidmlane.com/hyperstat/pictures/corr_ex.gif" /></p>

<p>我用JavaScript写了一个简单的计算方法，仅为示意。</p>

{% highlight javascript %}

var d1 = [3, 2, -1, 1, 4], d2 = [5, 3, 3, -1, 5];
function pearson(d1, d2) {
  var commonItems = {}, num = 0;
  for (var i = 0; i < d1.length && i < d2.length; i++) {
	if (d1[i] !== -1 && d2[i] !== -1) {
	    commonItems[i] = true;
		num++;
	}
  }
  if (num == 0) {
    return 0;
  }
 
  function sum(array, indexFilter, operator) {
    var s = 0;
	for (var i = 0; i < array.length; i++) {
	  if (indexFilter[i]) {
	    s += (operator && operator(array[i])) || array[i];
	  }
	}
	return s;
  }

  var sum1 = sum(d1, commonItems);
  var sum2 = sum(d2, commonItems);
  var square = function(i) {
    return i * i;
  };
  var sum1Square = sum(d1, commonItems, square);
  var sum2Square = sum(d2, commonItems, square);
  var sumProduct = 0;
  for (i in commonItems) {
	sumProduct += d1[i] * d2[i];
  }

  var top = sumProduct - (sum1 * sum2 / num);
  var bottom = Math.sqrt((sum1Square - square(sum1) / num)*(sum2Square - square(sum2) / num));
  return bottom == 0 ? 0 : top / bottom;
}
pearson(d1, d2);

{% endhighlight %}

