---
layout: post
category: Tech
tags : ['JavaScript']
title: 延迟加载Yahoo! Map (Yahoo! Map lazy loading)
created: 1241016007
---


<p>&nbsp;这是我很早之前写的一篇<a href="http://woodstudio.javaeye.com/blog/135069">文章</a>，贴在原来的博客上面，现在把它转帖过来，顺便测试一下FCKeditor的语法高亮插件。</p>

<p>通常使用Yahoo! Map的时候，是采用其网站提供的方法：</p>

{% highlight html %}

<script type="text/javascript"
src="http://api.maps.yahoo.com/ajaxymap?v=3.7&amp;appid=YahooDemo">
</script>

{% endhighlight %}

<p>&nbsp;这种做法的缺点是在页面加载的时候就会去加载Yahoo! Map的javascript文件，这会造成页面加载速度变慢。因为它的javascript是采用document.write的方法来输出其需要包含的其他javascript文件的，因为不能直接采用动态创建script元素的方式来延迟加载。</p>

<p>&nbsp;</p>

<p>我的做法是把Yahoo! Map的加载的javascript文件的内容提取出来，把其中的document.write改成动态的构建script元素的方式来加载。</p>

{% highlight html %}
<html>     
<head>     
<style type="text/css">    
#map{     
height: 75%;     
width: 100%;     
}     
</style>     

<script type="text/javascript">     
    var YAHOO=window.YAHOO||{};      
        YAHOO.namespace=function(_1){ if(!_1||!_1.length){ return null; }      
        var _2=_1.split(".");      
        var _3=YAHOO;      
        for(var i=(_2[0]=="YAHOO")?1:0;i<_2.length;++i){ _3[_2[i]]=_3[_2[i]]||{}; _3_3=_3[_2[i]]; } return _3; };      
        YAHOO.namespace("util");      
        YAHOO.namespace("widget");      
        YAHOO.namespace("example");      
        var YMAPPID = "YahooDemo";      
</script>     
</head>     

<body id="body">     
<div id="map"></div>     

<script type="text/javascript">     
    function loadYMap() {     
        loadByScript('http://us.js2.yimg.com/us.js.yimg.com/lib/common/utils/2/dom_2.0.1-b2.js');     
        loadByScript('http://us.js2.yimg.com/us.js.yimg.com/lib/common/utils/2/event_2.0.0-b2.js');     
        loadByScript('http://us.js2.yimg.com/us.js.yimg.com/lib/common/utils/2/dragdrop_2.0.1-b4.js');     
        loadByScript('http://us.js2.yimg.com/us.js.yimg.com/lib/common/utils/2/animation_2.0.1-b2.js');     
        loadByScript('http://us.js2.yimg.com/us.js.yimg.com/lib/map/js/api/ymapapi_3_7_1_11.js');
        displayMap();     
    }            

    function displayMap() {     
        if (window.YMap) {     
            // Create a map object     
    var map = new YMap(document.getElementById('map'));         
    // Add map type control     
    map.addTypeControl();         
    // Set map type to either of: YAHOO_MAP_SAT, YAHOO_MAP_HYB, YAHOO_MAP_REG     
    map.setMapType(YAHOO_MAP_SAT);        
    // Display the map centered on a geocoded location     
    map.drawZoomAndCenter("San Francisco", 3);     
        }     
        else {     
            setTimeout(displayMap, 200);     
        }     
    }     
   
    function loadByScript(url) {     
        var script = document.createElement("script");     
        script.setAttribute("type", "text/javascript");     
        script.src = url;     
        var body = document.getElementById("body");     
        body.appendChild(script);     
    }     
</script>     

<p>     
<input type="button" value="Load..." onclick="loadYMap();"></input>     
</p>     
</body>     
</html> 

{% endhighlight %}

<p>上面的页面只有在点击了Load...按钮的时候才会去加载Yahoo! Map的javascript文件，并把地图显示出来。</p>


