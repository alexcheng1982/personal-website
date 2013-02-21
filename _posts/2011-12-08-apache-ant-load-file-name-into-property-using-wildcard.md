---
layout: post
category: Tech
tags: ['Ant']
title: Load file name into property using wildcard
created: 1323264582
---

I need to use Apache Ant to launch Eclipse using Eclipse's`org.eclipse.equinox.launcher`bundle, but the version may be different, e.g.`org.eclipse.equinox.launcher_1.2.0.v20110502.jar`. To launch the jar using`java`task, the exact jar file name must be known. Following Ant script demonstrates how to do that.

 
{% highlight xml %}
<path id="eclipse.launcher.jar.id">
	<fileset dir="${eclipse.executable.dir}/plugins">
		<include name="org.eclipse.equinox.launcher_*.jar" />
	</fileset>
</path>

<property name="eclipse.launcher.jar" refid="eclipse.launcher.jar.id" />

<java jar="${eclipse.launcher.jar}" fork="true" failonerror="true">
</java>
{% endhighlight %}
