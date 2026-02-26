# ssjjaa-algo.github.io

Minimal Jekyll blog for technical notes with categories, tags, RSS, dark mode, and client-side search.

## Local development

```bash
./scripts/jekyll-doctor.sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`.

### Troubleshooting

If `bundle exec jekyll ...` fails with `command not found: jekyll`, it usually means the gems were not installed.

In restricted environments where `https://rubygems.org` is blocked (for example proxy returns HTTP 403), `bundle install` cannot download Jekyll gems. In that case use `./scripts/jekyll-doctor.sh` to confirm the network issue, then run local build in a network that can reach RubyGems or rely on the GitHub Pages workflow for deployment.

## File tree

```text
.
├── .github/
│   └── workflows/
│       └── pages.yml
├── _config.yml
├── _includes/
│   ├── footer.html
│   └── header.html
├── _layouts/
│   ├── default.html
│   └── post.html
├── _posts/
│   └── 2026-02-23-first-note.md
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       ├── search.js
│       └── theme.js
├── pages/
│   ├── about.md
│   ├── notes.md
│   ├── posts.md
│   ├── search.md
│   └── tags.md
├── Gemfile
├── index.md
└── search.json
```

## Features

- Top navigation: Home, Notes, Tags, About, Search.
- Notes grouped by category.
- Tags page with linked posts by tag.
- RSS via `jekyll-feed` (`/feed.xml`).
- Syntax highlighting with Rouge and styled code blocks.
- Minimal light/dark mode toggle (`localStorage` persisted).
- Lightweight client-side search using generated `search.json`.
- GitHub Actions workflow for Pages build and deploy.
- `baseurl` is intentionally empty for GitHub user site deployment.
