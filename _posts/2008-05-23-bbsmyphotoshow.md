---
layout: post
title: 换种方式来看水木清华BBS的MyPhoto（个人Show）版
created: 1211472097
---


常上[水木清华BBS](http://www.newsmth.net)的人自然都少不了关注[MyPhoto（个人Show）](http://www.newsmth.net/bbsdoc.php?board=MyPhoto&ftype=6)和[PieLove](http://www.newsmth.net/bbsdoc.php?board=PieLove&ftype=6)版，因为上面总有帅哥美女们的照片。很多时候我们都只是看发帖者发布的照片而已，对于其他人的回帖并不是很感兴趣。显然，逐一的点开每篇帖子去看很麻烦，会产生很多不必要的点击。


我很早以前写过一个Python的脚本，用来抓取水木清华BBS上的帖子的发布者的附件，并生成一个单一的HTML页面，使得浏览起来更加方便。写得比较简单，必须在代码里面手工写入版面的地址，而且一次只能抓取一个页面，不支持翻页。


如果机器上装了Python，只需要复制下面的代码并保存为Python文件后运行，就会在当前目录下生成一个HTML页面，打开此页面，就可以看到所有的图片附件了。

{% highlight python %}
# -*- coding: gb2312 -*-
import urllib2, re, os, time

pie_url = 'http://www.newsmth.org/bbsdoc.php?board=MyPhoto&ftype=6'
c = urllib2.urlopen(pie_url)
html = c.read()
p = re.compile("c\.o\((.*?),(.*?),'(.*?)','(.*?)',.*?,'(.*?)',.*?\);")
topics =  re.findall(p, html)

def get_attach_url(att, attach) :
  name = attach[0]
  ext = None
  try :
    ext = os.path.splitext(name)[1].strip()[1:]
  except :
    pass    

  url = 'http://www.newsmth.org/att.php?'
  if att[4] == 1 :
    url += 'n'
  elif attach[1] > 51200 :
    url += 'p'
  else :
    url += 's'
  url += "." + str(att[0]) + "." + str(att[1])

  if att[2] == 1 :
    url += "." + str(att[2]) + "." + str(att[3])
  url += "." + str(attach[2])

  if ext : 
    url += '.' + ext
  return url  

page_head = """
    &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;SMTH Pie&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
"""

page_tail = """
    &lt;/body&gt;
  &lt;/html&gt;  
"""

gen_total_html = page_head

for topic in topics :
  mark = topic[3]
  if mark.find('@') != -1 :
    url = "http://www.newsmth.org/bbscon.php?bid=874&id=%s" % topic[0]
    html2 = ''
    try :
      c = urllib2.urlopen(url)
      html2 = c.read()
    except :
      continue      

    attp = re.compile("attWriter\((.*?),(.*?),(.*?),(.*?),(.*?)\);")
    atts = re.findall(attp, html2)
    att = None
    attach = None

    try :
      att = atts[0]
    except :
      pass

    attachp = re.compile("attach\('(.*?)',(.*?),(.*?)\)")
    attachs = re.findall(attachp, html2)
    gen_total_html += ("<p><span>%s</span><br />" % topic[4])
    for attach in attachs :
      if att and attach :
        attl = []
        attachl = []    
        for item in att :
          attl.append(int(item.strip()))
        attachl.append(attach[0])
        attachl.append(int(attach[1].strip()))
        attachl.append(int(attach[2].strip()))     
        img_url = get_attach_url(attl, attachl)
        gen_html = "<img src='%s' />" % img_url
        gen_total_html += gen_html      
    gen_total_html += '</p>'    

gen_total_html += page_tail

file_name = "smth_pie_%s.html" % time.time()
file = open(file_name, 'w')
file.write(gen_total_html)
file.close()

{% endhighlight %}
