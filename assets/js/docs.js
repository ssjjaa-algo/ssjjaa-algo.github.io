(() => {
  const techToggle = document.getElementById('sidebar-tech-toggle');
  const techCategories = document.getElementById('sidebar-tech-categories');
  const storageKey = 'sidebar-tech-expanded';

  if (techToggle && techCategories) {
    const applyExpanded = (expanded) => {
      techToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      techCategories.hidden = !expanded;
      localStorage.setItem(storageKey, expanded ? 'true' : 'false');
    };

    const saved = localStorage.getItem(storageKey);
    const defaultExpanded = saved === 'true';
    applyExpanded(defaultExpanded);

    techToggle.addEventListener('click', () => {
      const expanded = techToggle.getAttribute('aria-expanded') === 'true';
      applyExpanded(!expanded);
    });
  }

  const content = document.querySelector('.post-content');
  if (!content) return;

  const slugify = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[\s\u00A0]+/g, '-')
      .replace(/[^\w가-힣-]/g, '')
      .replace(/--+/g, '-');

  const headings = Array.from(content.querySelectorAll('h2, h3'));
  if (!headings.length) return;

  const usedIds = new Set();
  headings.forEach((heading) => {
    let id = heading.id || slugify(heading.textContent || 'section');
    if (!id) id = 'section';
    let candidate = id;
    let index = 2;
    while (usedIds.has(candidate) || document.getElementById(candidate)) {
      candidate = `${id}-${index}`;
      index += 1;
    }
    usedIds.add(candidate);
    heading.id = candidate;

    if (!heading.querySelector('.heading-anchor')) {
      const anchor = document.createElement('a');
      anchor.className = 'heading-anchor';
      anchor.href = `#${candidate}`;
      anchor.textContent = '#';
      anchor.setAttribute('aria-label', `${heading.textContent} 섹션 링크`);
      heading.appendChild(anchor);
    }
  });

  const toc = document.getElementById('post-toc');
  if (!toc) return;

  const title = document.createElement('p');
  title.className = 'toc-title';
  title.textContent = 'On this page';

  const list = document.createElement('ul');
  list.className = 'toc-list';

  headings.forEach((heading) => {
    const item = document.createElement('li');
    item.className = heading.tagName === 'H3' ? 'toc-h3' : 'toc-h2';

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent.replace(/#$/, '').trim();

    item.appendChild(link);
    list.appendChild(item);
  });

  toc.appendChild(title);
  toc.appendChild(list);
})();
