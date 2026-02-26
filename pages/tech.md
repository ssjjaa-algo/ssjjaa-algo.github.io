---
title: Tech
permalink: /pages/tech.html
---

<div class="page">
  <h1>Tech</h1>
  <p class="meta">카테고리를 선택해 관련 글을 확인하세요.</p>

  {% assign tech_categories = "DB|db,AI|ai,Algorithm|algorithm" | split: "," %}
  <ul class="sidebar-links">
    {% for item in tech_categories %}
      {% assign pair = item | split: "|" %}
      <li><a href="#{{ pair[1] }}">{{ pair[0] }}</a></li>
    {% endfor %}
  </ul>

  {% for item in tech_categories %}
    {% assign pair = item | split: "|" %}
    {% assign category_name = pair[0] %}
    {% assign category_slug = pair[1] %}

    {% assign posts_in_category = site.categories[category_name] %}
    {% if category_name == "Algorithm" %}
      {% assign legacy_posts = site.categories["알고리즘"] %}
      {% if legacy_posts %}
        {% assign posts_in_category = posts_in_category | concat: legacy_posts %}
      {% endif %}
    {% endif %}

    <section>
      <h2 id="{{ category_slug }}">{{ category_name }}</h2>
      {% if posts_in_category and posts_in_category.size > 0 %}
        <div class="cards">
          {% for post in posts_in_category %}
            <article class="card">
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              <p class="meta">{{ post.date | date: "%Y.%m.%d" }}</p>
              <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
            </article>
          {% endfor %}
        </div>
      {% else %}
        <p>아직 등록된 글이 없습니다.</p>
      {% endif %}
    </section>
  {% endfor %}
</div>
