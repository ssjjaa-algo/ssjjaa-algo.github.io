# ssjjaa-algo.github.io

<<<<<<< codex/modify-blog-based-on-jekyll-chirpy-theme
Jekyll 블로그를 **Chirpy(remote_theme) 기반**으로 운영하는 저장소입니다.
=======
Jekyll 블로그를 **Chirpy 테마 기반**으로 운영하는 저장소입니다.
>>>>>>> main

## Local development

```bash
./scripts/jekyll-doctor.sh
bundle install
bundle exec jekyll serve
```

브라우저에서 `http://127.0.0.1:4000`를 열면 확인할 수 있습니다.

## 구조

- `_posts/`: 블로그 글
- `_tabs/`: Chirpy 상단 메뉴(Archives, Categories, Tags, About, Search)
- `_config.yml`: 사이트 및 테마 설정
<<<<<<< codex/modify-blog-based-on-jekyll-chirpy-theme
- `Gemfile`: Jekyll/remote-theme 의존성
=======
- `Gemfile`: Jekyll/Chirpy 의존성
>>>>>>> main

## 참고

Chirpy의 기본 레이아웃/컴포넌트를 사용하므로, 기존 커스텀 `_layouts`, `_includes`, `assets` 파일은 필요 시에만 오버라이드 용도로 수정하세요.
