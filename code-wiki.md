# zhimin.blog (zhiminbai.github.io) — Code Wiki

## 1. 项目概览

| 项目 | 信息 |
|------|------|
| **项目名称** | zhimin.blog |
| **作者** | Tw93 (zhimin) |
| **托管地址** | [https://zhiminbai.github.io](https://zhiminbai.github.io) |
| **仓库地址** | [https://github.com/zhiminbai/zhiminbai.github.io](https://github.com/zhiminbai/zhiminbai.github.io) |
| **项目类型** | 基于 Jekyll 的个人博客静态站点 |
| **前端技术栈** | Jekyll + Sass (SCSS) + JavaScript (原生) + Liquid 模板 |
| **部署方式** | GitHub Pages / Docker |
| **许可证** | MIT |

### 核心功能特性

- 中英文双语博客内容展示
- 博客文章列表 + 分页导航
- 文章按分类归档展示
- 基于 giscus 的评论系统
- CDN 图片自动优化 (WebP 格式)
- 支持 reveal.js 演示文稿（PPT 模式）
- 页眉烟花 Canvas 动画效果
- 图片点击放大 (Lightense)
- 二维码分享当前文章
- Google Analytics 统计
- RSS Feed 订阅
- 响应式设计（适配移动端和桌面端）
- 文章懒加载与预加载优化

---

## 2. 项目目录结构

```
/
├── _config.yml              # Jekyll 站点主配置文件
├── Gemfile                  # Ruby 依赖管理（Jekyll 及插件）
├── package.json             # Node.js 依赖管理（前端工具）
├── README.md                # 项目说明文档
│
├── index.html               # 主页（home 布局，YAML front matter）
├── about.md                 # 关于页面
├── categories.html          # 分类归档页面
│
├── _layouts/                # 页面布局模板
│   ├── home.html            # 首页布局（文章列表 + 分页）
│   ├── post.html            # 文章详情布局
│   ├── page.html            # 普通页面布局
│   └── ppt.html             # 演示文稿（PPT）布局
│
├── _includes/               # 可复用组件模板
│   ├── head.html            # HTML <head> 标签（SEO、资源引用）
│   ├── header.html          # 页面顶栏导航（含 SVG 动画标题 + Canvas）
│   ├── footer.html          # 页脚（社交图标、分析脚本、辅助功能）
│   ├── pagination.html      # 分页组件
│   ├── post-item.html       # 单篇文章条目
│   ├── read-more.html       # "阅读更多"下篇文章推荐
│   ├── giscus.html          # giscus 评论系统
│   ├── buy-me-coffee.html   # "请好友喝咖啡" 打赏按钮
│   ├── feed-footer.html     # RSS Feed 底部信息
│   ├── ppt-head.html        # PPT 模式头部（reveal.js 资源）
│   └── ppt-footer.html      # PPT 模式底部（reveal.js 初始化脚本）
│
├── _posts/                  # 博客文章 (Markdown)
│   └── *.md                 # 按日期命名的文章文件
│
├── en/                      # 英文版内容
│   ├── index.html           # 英文首页
│   └── about.md             # 英文关于页面
│
├── _sass/                   # Sass 样式分片
│   ├── _variables.scss      # 变量（字体、颜色、断点）
│   ├── _mixins.scss         # 混合宏（clearfix, grid, 动画等）
│   ├── _reset.scss          # 样式重置（normalize）
│   ├── _site.scss           # 全局样式
│   ├── _typography.scss     # 排版样式
│   ├── _elements.scss       # 元素样式（按钮、图片、媒体容器）
│   ├── _grid.scss           # 网格系统
│   ├── _page.scss           # 页面布局与组件详细样式
│   ├── _rouge.scss          # 代码高亮（Rouge 主题）
│   └── _404.scss            # 404 页面样式（含机器人动画）
│
├── css/
│   └── index.scss           # CSS 入口文件（导入所有 _sass/ 分片）
│
├── js/
│   ├── index.js             # 主 JS 文件（烟花动画、图片缩放、二维码）
│   └── ppt/                 # reveal.js 演示文稿框架
│       ├── dist/            # reveal.js 核心库
│       │   ├── reveal.js
│       │   ├── reveal.css
│       │   ├── reset.css
│       │   └── theme/       # 主题样式
│       └── plugin/          # reveal.js 插件
│           ├── markdown/    # Markdown 插件
│           ├── highlight/   # 代码高亮插件
│           ├── math/        # 数学公式插件
│           ├── notes/       # 演讲者备注插件
│           └── zoom/        # 缩放插件
│
├── _plugins/                # Jekyll 自定义插件
│   └── cdn_image_filter.rb  # CDN 图片自动优化滤镜
│
└── 其他文件
    ├── .htaccess            # Apache 服务器配置
    └── feed.xml             # RSS Feed（由 jekyll-feed 自动生成）
```

---

## 3. 配置层详解

### 3.1 `_config.yml` — Jekyll 站点配置

这是项目的核心配置文件，定义了站点的全部元数据和构建行为。

| 配置项 | 值 | 说明 |
|-------|-----|------|
| `title` | `zhimin's Blog` | 站点标题 |
| `description` | `"一个喜欢开源和折腾的工程师"` | 站点描述 |
| `url` | `https://zhiminbai.github.io` | 站点 URL |
| `lang` | `zh-CN` | 默认语言 |
| `paginate` | `10` | 每页文章数 |
| `markdown` | `kramdown` | Markdown 渲染引擎 |
| `highlighter` | `rouge` | 代码语法高亮 |
| `permalink` | `/:year-:month-:day/:title.html` | URL 格式 |
| `sass.style` | `compressed` | CSS 压缩输出 |

**自定义配置项**：

- `menu`：导航菜单项（Categories 和 About）
- `collections.posts_en`：英文文章集合，独立排序
- `showBuyCoffee`：控制打赏按钮显示
- `assetUrl` / `defaultImage`：图片资源路径配置

**插件列表**：

| 插件 | 用途 |
|------|------|
| `jekyll-paginate` | 文章分页 |
| `jekyll-pdf-embed` | PDF 嵌入支持 |
| `jekyll-sitemap` | 自动生成 sitemap.xml |
| `jekyll-feed` | 自动生成 RSS Feed |

### 3.2 `Gemfile` — Ruby 依赖

```ruby
source "https://rubygems.org"
gem "jekyll"
gem "jekyll-paginate"
gem "jekyll-sitemap"
gem "jekyll-pdf-embed"
gem "jekyll-feed"
```

### 3.3 `package.json` — Node.js 依赖

```json
{
  "name": "zhimin.blog",
  "scripts": {
    "prep": "gem install bundler && bundle install",
    "dev": "bundle exec jekyll serve --watch --trace",
    "build": "bundle exec jekyll build",
    "min": "uglifyjs ./js/index.js -o ./js/index.min.js"
  },
  "devDependencies": {
    "uglify-js": "^2.7.5"
  }
}
```

---

## 4. 模板层 — 布局系统

Jekyll 使用 **Layout 嵌套** 机制：页面 → Layout → Include 组件。

### 4.1 Layout 类型

| Layout | 文件 | 用途 | 关键特性 |
|--------|------|------|---------|
| **home** | `_layouts/home.html` | 博客首页 | 文章列表 + 分页，支持中英文分流 |
| **post** | `_layouts/post.html` | 文章详情页 | 显示标题、日期、分类、评论、相关文章 |
| **page** | `_layouts/page.html` | 静态页面 | 简单的内容展示 + 评论 |
| **ppt** | `_layouts/ppt.html` | 演示文稿 | 基于 reveal.js 渲染 Markdown 为幻灯片 |

#### home 布局逻辑

```html
<!-- 英文：不分页，按日期排序所有英文文章 -->
{% if page.url contains '/en/' %}
  {% assign current_posts = site.posts_en | sort: 'date' | reverse %}
  {% include post-item.html posts=current_posts %}
{% else %}
  <!-- 中文：使用分页器 -->
  {% include post-item.html posts=paginator.posts %}
  {% include pagination.html %}
{% endif %}
```

#### ppt 布局逻辑

将 Markdown 内容中的 `<hr />`（水平线）替换为 `---`，作为 reveal.js 的幻灯片分隔符：

```html
<section data-markdown>
  <script type="text/template">
    {{ content | replace: "<hr />", "---" }}
  </script>
</section>
```

### 4.2 Include 组件

| 组件 | 文件 | 职责 |
|------|------|------|
| **head.html** | `_includes/head.html` | 生成 HTML `<head>`，包含 SEO meta、Open Graph、Twitter Card、样式/脚本资源引用、Favicon |
| **header.html** | `_includes/header.html` | 顶部导航栏：站点标题、中/英语言切换、导航菜单、SVG 动画标题横幅 + Canvas 烟花画布 |
| **footer.html** | `_includes/footer.html` | 页脚：GitHub/Twitter/RSS 社交图标、仓库运行时长、Google Analytics 脚本、Heti 排版优化、链接外链跳转、图片懒加载、页面预加载 |
| **pagination.html** | `_includes/pagination.html` | 分页导航，支持页码截断省略号 |
| **post-item.html** | `_includes/post-item.html` | 单篇文章卡片条目（标题、日期、摘要） |
| **read-more.html** | `_includes/read-more.html` | 下篇文章推荐卡片 |
| **giscus.html** | `_includes/giscus.html` | 基于 GitHub Discussions 的评论系统 |
| **buy-me-coffee.html** | `_includes/buy-me-coffee.html` | 打赏/点赞按钮 |
| **ppt-head.html** | `_includes/ppt-head.html` | PPT 模式的 CSS/JS 资源引用 |
| **ppt-footer.html** | `_includes/ppt-footer.html` | reveal.js 初始化 + 自适应缩放逻辑 |
| **feed-footer.html** | `_includes/feed-footer.html` | RSS Feed 的版权/来源信息 |

---

## 5. 内容层

### 5.1 博客文章 (`_posts/`)

文章使用 Markdown 编写，文件名格式为 `YYYY-MM-DD-title.md`。

**YAML Front Matter 示例**：

```yaml
---
layout: post
title: "文章标题"
date: 2023-01-20
summary: "文章摘要"
categories: technology
hide: false   # 设置为 true 可隐藏文章
---
```

### 5.2 页面

- `index.html`：首页，使用 `home` 布局
- `about.md`：关于页面，使用 `page` 布局
- `categories.html`：分类归档页面，列出所有分类及对应文章
- `en/index.html`：英文版首页
- `en/about.md`：英文版关于页面

### 5.3 分类页面机制

`categories.html` 遍历 `site.categories`，生成分类标签列表和每类下的文章列表：

```liquid
{% capture site_cats %}
  {% for cat in site.categories %}{{ cat | first }}{% unless forloop.last %},{% endunless %}{% endfor %}
{% endcapture %}
{% assign cats_list = site_cats | split:',' | sort %}
```

---

## 6. 样式层 — Sass 架构

### 6.1 CSS 入口

[css/index.scss](file:///workspace/css/index.scss) 作为唯一入口，按顺序导入所有分片：

```scss
@import "variables";
@import "mixins";
@import "reset";
@import "site";
@import "typography";
@import "rouge";
@import "grid";
@import "elements";
@import "page";
@import "404";
```

### 6.2 Sass 分片详解

| 分片 | 文件 | 核心内容 |
|------|------|---------|
| **variables** | `_variables.scss` | 字体栈（楷体优先）、颜色变量（深色主题）、响应式断点 |
| **mixins** | `_mixins.scss` | clearfix、文本溢出、圆角、阴影、渐变、动画等工具混合宏 |
| **reset** | `_reset.scss` | 基于 Normalize.css 的样式重置 |
| **site** | `_site.scss` | 选中态样式、全局类（wrap、inline-list）、过渡动画 |
| **typography** | `_typography.scss` | 正文/标题排版、链接样式、引用、代码样式 |
| **rouge** | `_rouge.scss` | 代码语法高亮配色（Monokai 风格） |
| **grid** | `_grid.scss` | 基于百分比的自定义网格系统（12 列） |
| **elements** | `_elements.scss` | 按钮（5 种变体）、图片/视频容器、SVG |
| **page** | `_page.scss` | **最核心的样式文件**：页面布局、Header/导航栏、文章卡片、分页、Read More、Footer、Coffee 按钮、图片懒加载、响应式适配等 |
| **404** | `_404.scss` | 404 页面的 SVG 机器人动画和错误标题样式 |

### 6.3 响应式断点

在 `_variables.scss` 中定义：

```scss
$small:  "only screen and (min-width: 30em)";    // ≥480px
$medium: "only screen and (min-width: 48em)";    // ≥768px
$large:  "only screen and (min-width: 62.5em)";  // ≥1000px
```

---

## 7. JavaScript 层

### 7.1 主脚本 [js/index.js](file:///workspace/js/index.js)

**功能模块**：

| 功能 | 函数/代码段 | 说明 |
|------|------------|------|
| **图片点击放大** | `Lightense` | 动态加载 `lightense.min.js`，为文章图片添加点击放大效果 |
| **滚动隐藏导航** | `scroll` 事件监听 | 向下滚动时隐藏顶部导航栏（PC 端） |
| **烟花 Canvas 动画** | `drawFirework()` / `Point` 类 | 在页眉 Canvas 上生成随鼠标移动的粒子烟花效果 |
| **二维码分享** | `QRCode` | 动态加载 `qrcode.min.js`，生成当前页面的二维码 |
| **PC 端检测** | `isPC()` | 通过 UserAgent 判断是否为桌面端 |
| **动态加载脚本** | `loadScript(url, callback)` | 按需加载第三方 JS |

**Point 类**：

```javascript
function Point(x, y, speed, width, color) {
  this.x = x; this.y = y;
  this.width = width; this.color = color;
  this.alpha = Math.random() - 0.1;
  this.speed = speed;
  this.active = true;
  this.physx = function() { /* 物理更新：下落 */ };
  this.kill = function() { /* 移除粒子 */ };
  this.draw = function() { /* Canvas 绘制圆形 */ };
}
```

**工具函数**：

- `isPC()` — 检测是否为 PC 端（排除 Android、iPhone 等移动设备）
- `loadScript(url, callback)` — 动态加载外部脚本并执行回调，支持 IE 的 `onreadystatechange`

### 7.2 内联脚本（在 footer.html 中）

| 功能 | 说明 |
|------|------|
| **Heti 排版优化** | 使用 `Heti` 库自动调整文章的中文字间距 |
| **外链跳转** | 遍历所有链接，将外部链接设为 `target="_blank"` |
| **图片懒加载** | 为所有文章图片添加 `loading="lazy"` 和 `decoding="async"` |
| **全屏模式** | PPT 模式下的全屏按钮功能 |
| **页面预加载** | 鼠标悬停在链接上时，通过 `<link rel="prefetch">` 预加载目标页面 |

### 7.3 演示文稿脚本 ([ppt-footer.html](file:///workspace/_includes/ppt-footer.html))

基于 reveal.js 的 PPT 模式，核心逻辑：

- **初始化**：配置 reveal.js（控制、进度条、历史记录、过渡动画、Markdown 插件）
- **自适应缩放**：`changeAspect()` 根据窗口宽高比动态调整幻灯片缩放比例
- **移动端旋转适配**：监听 `orientationchange` 事件刷新页面
- **Section 样式优化**：根据子元素数量和容器高度自动添加 CSS 类

---

## 8. 插件层

### 8.1 [CDN Image Filter](file:///workspace/_plugins/cdn_image_filter.rb)

Jekyll 自定义 Liquid 滤镜插件，用于优化文章中的 CDN 图片。

**功能**：匹配 `cdn.fliggy.com` 和 `gw.alipayobjects.com` 域下的图片，自动追加 OSS 处理参数 `?x-oss-process=image/resize,w_3600/format,webp`，将图片转换为 WebP 格式并限制最大宽度。

**排除规则**：不对 GIF 和 SVG 图片进行转换。

**使用方式**：在模板中通过 `{{ content | cdn_image_filter }}` 调用，参见 [post.html](file:///workspace/_layouts/post.html#L18)。

```ruby
module Jekyll
  module CDNImageFilter
    def cdn_image_filter(input)
      input.gsub(/<img src="(https:\/\/cdn\.fliggy\.com\/.*?|https:\/\/gw\.alipayobjects\.com\/.*?)(\.(jpg|jpeg|png|JPG|JPEG|PNG))"/) do |match|
        # 跳过 GIF/SVG，其余添加 OSS 处理参数
      end
    end
  end
end
Liquid::Template.register_filter(Jekyll::CDNImageFilter)
```

---

## 9. 第三方服务与依赖

| 服务/库 | 用途 | 加载方式 |
|---------|------|---------|
| **Jekyll** | 静态站点生成器 | Ruby Gem |
| **reveal.js** | 演示文稿框架 | 本地文件 (`js/ppt/`) |
| **giscus** | GitHub Discussions 评论系统 | 动态加载 |
| **Lightense** | 图片点击放大 | 动态加载 (`loadScript`) |
| **QRCode.js** | 二维码生成 | 动态加载 |
| **lazysizes** | 图片懒加载 | `<script async>` |
| **Heti** | 中文排版优化 | 动态加载 |
| **Google Analytics** | 站点统计 | 内联脚本 |
| **Rouge** | 代码语法高亮 | Jekyll 插件 |
| **kramdown** | Markdown 渲染 | Jekyll 内置 |

### 第三方 CDN 资源

```
https://gw.alipayobjects.com/   — 阿里云 CDN（主要资源托管）
https://cdn.fliggy.com/         — 飞猪 CDN（图片资源）
https://gw.alicdn.com/          — 阿里 CDN（Favicon 等）
```

---

## 10. 数据流与渲染流程

```
用户请求页面
    │
    ▼
Jekyll 构建
    │
    ├─ 读取 _config.yml 配置
    ├─ 扫描 _posts/ 文章 (Markdown)
    ├─ 扫描 en/ 英文内容集合
    ├─ 选择对应的 Layout (_layouts/)
    │
    ▼
Layout 渲染
    │
    ├─ 嵌入 _includes/ 组件
    ├─ 应用 _plugins/ 滤镜（如图片优化）
    ├─ 注入 Sass 编译的 CSS
    └─ 注入 JavaScript
    │
    ▼
   静态 HTML 输出
    │
    ▼
   GitHub Pages / 服务器部署
```

---

## 11. 项目运行方式

### 11.1 本地开发

```bash
# 1. 安装 Ruby 依赖
npm run prep
# 等价于: gem install bundler && bundle install

# 2. 启动 Jekyll 开发服务器（含实时重载）
npm run dev
# 等价于: bundle exec jekyll serve --watch --trace

# 3. 或直接启动
npm start
```

### 11.2 构建生产版本

```bash
npm run build
# 等价于: bundle exec jekyll build
# 输出目录: ./_site/
```

### 11.3 压缩 JS

```bash
npm run min
# 使用 uglify-js 压缩 js/index.js → js/index.min.js
```

### 11.4 Docker 部署

项目提供 Dockerfile 和 docker-compose.yml（需确认具体内容），可通过 Docker 容器化部署。

### 11.5 GitHub Pages 部署

项目名称 `zhiminbai.github.io` 表明这是一个 **GitHub Pages** 项目，推送到 `main` 分支后，GitHub 会自动构建并部署到 `https://zhiminbai.github.io`。

---

## 12. 关键类与函数索引

### Ruby (Jekyll 插件)

| 模块/方法 | 位置 | 说明 |
|-----------|------|------|
| `CDNImageFilter#cdn_image_filter` | `_plugins/cdn_image_filter.rb` | Liquid 滤镜：自动优化 CDN 图片为 WebP 格式 |

### JavaScript (前端)

| 函数/类 | 位置 | 说明 |
|---------|------|------|
| `isPC()` | [js/index.js#L118-L129](file:///workspace/js/index.js#L118-L129) | 检测是否为桌面端 |
| `loadScript(url, callback)` | [js/index.js#L131-L149](file:///workspace/js/index.js#L131-L149) | 动态加载外部脚本 |
| `Point` 类 | [js/index.js#L41-L72](file:///workspace/js/index.js#L41-L72) | Canvas 烟花粒子（含 draw / physx / kill 方法） |
| `drawFirework()` | [js/index.js#L74-L90](file:///workspace/js/index.js#L74-L90) | 烟花动画主循环（requestAnimationFrame） |
| `changeAspect()` | `_includes/ppt-footer.html` | PPT 自适应缩放计算 |
| `Reveal.initialize()` | `_includes/ppt-footer.html` | reveal.js 初始化配置 |

### Liquid 模板 (关键片段)

| 模板片段 | 位置 | 说明 |
|---------|------|------|
| `post-item.html` | `_includes/post-item.html` | 文章列表卡片渲染 |
| `paginator` 逻辑 | `_includes/pagination.html` | 分页导航（含页码截断） |
| 中英文分流 | `_layouts/home.html#L8-L16` | 根据 URL 判断语言，选择文章集合 |

---

## 13. 依赖关系图

```
┌─────────────────────────────────────────────────────────┐
│                    用户浏览器                             │
├─────────────────────────┬───────────────────────────────┤
│   HTML (Jekyll 生成)    │   JavaScript + CSS             │
│   ├─ Layout → Include   │   ├─ index.js (烟花/二维码)    │
│   ├─ Markdown → 文章    │   ├─ reveal.js (PPT 模式)      │
│   └─ Liquid 数据注入    │   ├─ Lightense (图片缩放)      │
│                         │   ├─ lazysizes (图片懒加载)    │
│                         │   ├─ Heti (排版优化)           │
│                         │   └─ GA (统计分析)             │
├─────────────────────────┴───────────────────────────────┤
│                    Jekyll 构建层                          │
│   ┌──────────────┬──────────────┬──────────────────┐    │
│   │ _config.yml  │  _plugins/   │  _layouts/       │    │
│   │ 站点配置     │  CDN滤镜     │  页面布局        │    │
│   ├──────────────┼──────────────┼──────────────────┤    │
│   │ _posts/      │  _sass/      │  _includes/      │    │
│   │ 文章 (MD)    │  样式分片   │  组件模板        │    │
│   └──────────────┴──────────────┴──────────────────┘    │
├─────────────────────────────────────────────────────────┤
│                 运行时依赖                                │
│   Ruby: Jekyll + kramdown + Rouge                       │
│   Node: uglify-js                                       │
│   第三方: giscus + Google Analytics + 阿里云 CDN        │
└─────────────────────────────────────────────────────────┘
```

---

## 14. 关键设计决策

1. **中英文双语言**：通过 `url contains '/en/'` 判断语言环境，英文文章独立为 `posts_en` 集合
2. **纯静态架构**：无后端服务，依赖 GitHub Pages 和第三方服务（giscus 评论、GA 统计）
3. **性能优化**：CDN 图片自动转 WebP、懒加载、链接预取、CSS 压缩
4. **SEO 完善**：完整 Open Graph / Twitter Card Meta、sitemap、规范 URL
5. **交互体验**：烟花 Canvas 动画、图片缩放、二维码分享、PPT 演示模式

---

*本文档基于对代码仓库的完整分析生成，涵盖项目架构、模块职责、关键实现和运行方式。*