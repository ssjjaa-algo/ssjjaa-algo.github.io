---
title: 홈
---

<section class="hero page">
  <h1>기술 노트</h1>
  <p class="meta">디버깅, 알고리즘, 도구 활용, 개발 실무에 대한 짧고 선명한 기록.</p>
</section>

<section>
  <h2>최신 글</h2>
  <div class="cards">
    {% for post in site.posts limit: 6 %}
      <article class="card">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="meta">{{ post.date | date: "%Y.%m.%d" }}</p>
        {% if post.tags %}
          <p>
            {% for tag in post.tags %}<span class="tag">#{{ tag }}</span>{% endfor %}
          </p>
        {% endif %}
        <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
      </article>
    {% endfor %}
  </div>
</section>
