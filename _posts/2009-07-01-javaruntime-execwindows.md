---
layout: post
category: Tech
tags : ['Java']
title: 使用Java中的Runtime.exec()执行Windows命令
created: 1246370720
---


<p>&nbsp;写这篇博客的出发点是为了回答JavaEye问答频道上面的一个问题，是问如何用Java来调用Windows上的wmic命令来获取系统中当前的进程信息。我的第一印象是用<a target="_blank" href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runtime.html">Runtime.exec()</a>肯定是可以的，但一写就发现，事情并没有那么的简单。我又找到了<a target="_blank" href="http://www.javaworld.com/javaworld/jw-12-2000/jw-1229-traps.html">一篇比较老的文章</a>，仔细阅读，才明白了其中的细节。下面是一些要点：</p>

<ul>
    <li>等待命令执行结束用waitFor()，其返回值就是命令的返回值。</li>

    <li>如果出现程序执行被挂起，没有任何反应的情况，是由于没有读取命令子进程的正常输出流或错误输出流导致缓冲区被占满，进程被锁住。这个时候需要把输出流中的内容给读出来。最好的做法是使用两个线程，分别同时读取正常输出流和错误输出流。</li>

    <li>执行Windows平台上的命令时使用cmd.exe /C，如cmd.exe /C dir。</li>

    <li>记得关闭命令子进程的输入流，通过Process.getOutputStream().close()，这样不会导致命令子进程被锁住。</li>

</ul>


<p>仿照上面文章中，写了一个简单的例子。</p>

{% highlight java %}

package cmd;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

class StreamDrainer implements Runnable {
	private InputStream ins;

	public StreamDrainer(InputStream ins) {
		this.ins = ins;
	}

	public void run() {
		try {
			BufferedReader reader = new BufferedReader(
					new InputStreamReader(ins));
			String line = null;
			while ((line = reader.readLine()) != null) {
				System.out.println(line);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

public class TestRunCmd {
	public static void main(String[] args) {
		String[] cmd = new String[] { "cmd.exe", "/C", "wmic process get name" };
		try {
			Process process = Runtime.getRuntime().exec(cmd);		
			new Thread(new StreamDrainer(process.getInputStream())).start();
			new Thread(new StreamDrainer(process.getErrorStream())).start();			
			process.getOutputStream().close();
			int exitValue = process.waitFor();
			System.out.println("返回值：" + exitValue);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

{% endhighlight %}