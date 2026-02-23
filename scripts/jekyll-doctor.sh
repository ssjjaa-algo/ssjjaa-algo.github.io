#!/usr/bin/env bash
set -euo pipefail

echo "[doctor] Checking Ruby/Bundler..."
ruby -v
bundle -v

echo "[doctor] Checking outbound access to rubygems.org..."
if curl -fsSI --max-time 10 https://rubygems.org >/dev/null; then
  echo "[ok] rubygems.org is reachable."
else
  echo "[error] rubygems.org is not reachable from this environment."
  echo "        Bundler cannot install Jekyll gems, so 'bundle exec jekyll ...' fails."
  echo ""
  echo "Next steps:"
  echo "  1) Run local build on a network that can reach https://rubygems.org"
  echo "  2) Or rely on GitHub Actions Pages build for deployment"
  exit 2
fi

echo "[doctor] Checking installed bundle executables..."
if bundle exec jekyll -v >/dev/null 2>&1; then
  echo "[ok] jekyll executable is available in bundle."
else
  echo "[warn] jekyll executable is missing in bundle. Run: bundle install"
  exit 3
fi

echo "[ok] Environment looks good for local Jekyll runs."
