---
title: 태그
permalink: /pages/tags.html
---

<div class="page">
  <h1>태그</h1>
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
    <section>
      <h2 id="{{ tag[0] | slugify }}">#{{ tag[0] }}</h2>
      <ul>
        {% for post in tag[1] %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="meta">({{ post.date | date: "%Y.%m.%d" }})</span>
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</div>
