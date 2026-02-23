---
title: All Posts
permalink: /pages/posts.html
---

<div class="page">
  <h1>All Posts</h1>
  <div class="cards">
    {% for post in site.posts %}
      <article class="card">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="meta">{{ post.date | date: "%Y-%m-%d" }}</p>
        <p>
          {% for tag in post.tags %}
            <span class="tag">#{{ tag }}</span>
          {% endfor %}
        </p>
        <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
      </article>
    {% endfor %}
  </div>
</div>
