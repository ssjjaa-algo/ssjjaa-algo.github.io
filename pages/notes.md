---
title: 기술노트
permalink: /pages/notes.html
---

<div class="page">
  <h1>카테고리별 기술노트</h1>
  {% assign sorted_categories = site.categories | sort %}
  {% for category in sorted_categories %}
    <section>
      <h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
      <div class="cards">
        {% for post in category[1] %}
          <article class="card">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p class="meta">{{ post.date | date: "%Y.%m.%d" }}</p>
            <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
          </article>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>
