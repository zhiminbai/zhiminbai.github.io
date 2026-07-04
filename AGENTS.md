# AGENTS.md — zhiminbai.github.io

## Commands

| Action | Command |
|--------|---------|
| Dev server | `npm run dev` (serves at `http://localhost:4000`) |
| Build | `npm run build` |
| Setup | `npm run prep` (runs `gem install bundler && bundle install`) |
| Minify JS | `npm run min` (uglifies `js/index.js` → `js/index.min.js`) |

## Repo structure

- **`_posts/`** — Chinese posts
- **`_posts_en/`** — English posts (collection `posts_en`, permalink under `/en/`)
- **`en/`** — English pages (index, about) with `lang: en-US` in front matter
- **`_layouts/`** — `home.html`, `post.html`, `page.html`, `ppt.html` (reveal.js slides)
- **`_includes/`** — head, header, footer, giscus (comments), pagination, read-more, post-item
- **`_sass/`** — 10 partials imported via `css/index.scss` (has `sitemap: false` in front matter so it's excluded from sitemap)
- **`js/index.js`** — must edit this, then run `npm run min` to regenerate `js/index.min.js`
- **`.github/workflows/jekyll.yml`** — deploys to GitHub Pages via GitHub Actions on push to `main`
- **`Gemfile`** — `sass-embedded ~> 1.69.0` is locked to avoid deprecation warnings; don't bump without testing

## Conventions

- **Front matter required**: `layout: post`, `title`, `date`, `summary`, `categories`
- **Hide a post**: add `hide: true` to front matter
- **Bilingual posts**: create matching files in both `_posts/` (Chinese) and `_posts_en/` (English) with the same slug
- **Comments**: controlled by `page.comments` (defaults to true); uses Giscus (GitHub Discussions)
- **Permalink format**: `/:year-:month-:day/:title.html` (trailing `.html`)
- **Theme**: originally forked from Tw93; OG images and `assetUrl` in `_config.yml` still reference `tw93.fun` — match existing style rather than changing brand references
- **Font**: `TsangerJinKai02` (Chinese serif) via Alipay CDN
- **Analytics**: Google Analytics `G-P7ERMJF8G7` in `_config.yml`
- **Image zoom**: Lightense (loaded dynamically from CDN on post pages)
- **JS conventions**: external scripts loaded via custom `loadScript()` helper; prefetch on hover for navigation links; external links auto-open in new tab (handled in footer JS)

## Gotchas

- Sass is compiled by Jekyll's built-in sass-converter (not a separate watcher)
- `_config.yml` `showBuyCoffee` is `false` — toggling this on shows "buy me coffee" links at end of posts
- `_config.yml:assetUrl` points to `//tw93.fun/images/` (external) — don't rely on local image assets
- The `sitemap: false` in `css/index.scss` front matter prevents the SCSS file from appearing in the sitemap
- `jekyll-paginate` is used for Chinese post pagination; English posts are listed without pagination
- Slide deck layout: `ppt.html` uses Reveal.js (vendored in `js/ppt/`)
- `.editorconfig`: 2-space indent, UTF-8, LF, trailing whitespace trimmed (except `.md`)
