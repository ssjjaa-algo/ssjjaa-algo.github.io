---
title: Home
---

<section class="hero page">
  <h1>Technical Notes</h1>
  <p class="meta">Concise writeups on debugging, algorithms, tooling, and engineering practice.</p>
</section>

<section>
  <h2>Latest Posts</h2>
  <div class="cards">
    {% for post in site.posts limit: 6 %}
      <article class="card">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="meta">{{ post.date | date: "%Y-%m-%d" }}</p>
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
