---
layout: page
title: Midgets standing on the toes of others
---
{% include JB/setup %}

## Recent Articles

<ul class="posts index_posts">
  {% for post in site.posts offset: 0 limit: 8 %}
    <li><h3><a class="tit" href="{{ BASE_PATH }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h3> -- <span class="post-sub">{{ post.date | date_to_string }}</span>
        <p class="abstract">{{ post.content | strip_html | truncatewords: 50 }}</p>
        <p class="more"><a href="{{ BASE_PATH }}{{ post.url }}"  target="_blank" title="Read more...">Read more...</a></p>
    </li>
  {% endfor %}
</ul>

## Tag Cloud

<ul class="tag_box inline">
  {% assign tags_list = site.tags %}
  {% include JB/tags_list %}
</ul>



