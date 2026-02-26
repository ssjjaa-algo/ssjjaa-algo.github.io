(async () => {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  if (!input || !results) return;

  const baseUrl = document.documentElement.dataset.baseurl || "";
  const response = await fetch(`${baseUrl}/search.json`);
  const posts = await response.json();

  const render = (items) => {
    if (!items.length) {
      results.innerHTML = "<p>No matching posts.</p>";
      return;
    }
    results.innerHTML = items.map((post) => `
      <article class="card">
        <h3><a href="${post.url}">${post.title}</a></h3>
        <p class="meta">${post.date} · ${(post.tags || []).join(", ")}</p>
        <p>${post.excerpt}</p>
      </article>
    `).join("");
  };

  render(posts);
  input.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) return render(posts);
    render(posts.filter((post) => [post.title, post.content, ...(post.tags || []), ...(post.categories || [])].join(" ").toLowerCase().includes(q)));
  });
})();
