# Asian Traditional Portfolio — ChuongDHA.github.io

Portfolio cá nhân được xây dựng bằng **Astro**, thiết kế theo concept **Modern Asian Heritage**.

## ✨ Tech Stack

| Lớp | Công nghệ |
|-----|-----------|
| Framework | Astro (Static) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 + CSS Variables |
| Content | Astro Content Collections (Markdown/MDX) |
| CMS | Pages CMS |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

## 🚀 Chạy local

```bash
# Cài dependencies
npm install

# Chạy dev server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

Truy cập `http://localhost:4321` sau khi chạy `npm run dev`.

## 📝 Cấu hình thông tin cá nhân

Mở file [`src/data/portfolio.ts`](src/data/portfolio.ts) và thay thế **tất cả giá trị có nhãn `TODO`**:

- `name` — Tên đầy đủ của bạn
- `shortName` — Monogram hoặc tên ngắn (dùng cho logo)
- `role` — Chức danh / Chuyên môn
- `headline` — Tagline ngắn
- `intro` — Đoạn giới thiệu
- `email` — Email liên hệ
- `socialLinks` — Các liên kết mạng xã hội
- `skills` — Nhóm kỹ năng
- `values` — Giá trị cốt lõi
- `selectedProjects` — Dự án tiêu biểu
- `experienceTimeline` — Hành trình / Mốc kinh nghiệm
- `personalStory` — Câu chuyện cá nhân
- `interests` — Sở thích và nguồn cảm hứng

## 📸 Hình ảnh

- **Avatar / Hero artwork:** Đặt tại `public/images/` và cập nhật `portfolio.avatar`
- **Ảnh bài viết:** Upload qua Pages CMS vào `public/images/posts/`
- **OG image:** Tạo ảnh 1200×630px, đặt tại `public/images/og/default.png`

## ✍️ Quản lý nội dung với Pages CMS

### Thiết lập lần đầu

1. Push repository lên GitHub
2. Vào **Repository Settings → Pages → Source → GitHub Actions**
3. Truy cập [app.pagescms.org](https://app.pagescms.org)
4. Đăng nhập bằng tài khoản GitHub
5. Kết nối với repository này
6. Pages CMS sẽ đọc file `.pages.yml` và hiển thị giao diện quản trị

### Quy trình đăng bài

1. Vào Pages CMS → Bài viết → Tạo mới
2. Điền đầy đủ tiêu đề, mô tả, ngày đăng, chuyên mục, tags
3. Upload ảnh đại diện
4. Soạn nội dung (Markdown)
5. Tắt **Bản nháp** khi sẵn sàng publish
6. **Save** — Pages CMS tạo commit lên nhánh `main`
7. GitHub Actions tự động build và deploy
8. Bài xuất hiện trên website sau ~2 phút

### Cấu trúc bài viết (Markdown frontmatter)

```yaml
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn"
pubDate: 2026-01-01
cover: /images/posts/ten-anh.jpg
coverAlt: "Mô tả ảnh"
category: "Chuyên mục"
tags: ["tag1", "tag2"]
draft: false
featured: false
---

Nội dung bài viết ở đây...
```

## 🌐 Deploy lên GitHub Pages

### Lần đầu

1. Vào GitHub → Repository → **Settings → Pages**
2. Source: chọn **GitHub Actions**
3. Commit và push lên nhánh `main`
4. Theo dõi tại tab **Actions**
5. Website sẽ live tại `https://ChuongDHA.github.io`

### Sau đó

Mỗi khi push lên `main` (kể cả commit từ Pages CMS), GitHub Actions sẽ tự động build và deploy.

## 📬 Form liên hệ (Formspree)

1. Đăng ký tại [formspree.io](https://formspree.io) → tạo form mới
2. Copy endpoint URL (dạng `https://formspree.io/f/xxxxxxxx`)
3. Tạo file `.env` ở root (KHÔNG commit file này):
   ```
   PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```
4. Trên GitHub: **Settings → Secrets and variables → Actions → Variables** → Thêm `PUBLIC_FORMSPREE_ENDPOINT`
5. Cập nhật `.github/workflows/deploy.yml` để truyền biến khi build (nếu cần)

> **Lưu ý:** Khi chưa cấu hình endpoint, form sẽ fallback sang `mailto:` — không giả báo đã gửi.

## 🎨 Bảng màu

| Token | Màu | Dùng cho |
|-------|-----|----------|
| `ocean` | `#0081A7` | CTA, link, nhận diện chính |
| `jade` | `#00AFB9` | Gradient, tương tác |
| `parchment` | `#FED9B7` | Nền phụ, highlight ấm |
| `terracotta` | `#F07167` | Điểm nhấn, badge |

## 📁 Cấu trúc project

```
.
├── .github/workflows/deploy.yml    # GitHub Actions CI/CD
├── .pages.yml                      # Cấu hình Pages CMS
├── public/
│   ├── favicon.svg
│   ├── images/posts/               # Ảnh bài viết (do CMS upload)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/                 # Header, Footer
│   │   └── ui/                     # Button, PostCard, ProjectCard, ...
│   ├── content/posts/              # File Markdown bài viết
│   ├── data/
│   │   ├── portfolio.ts            # ← THAY THÔNG TIN CÁ NHÂN Ở ĐÂY
│   │   └── navigation.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro             # Trang chủ
│   │   ├── about.astro             # Về tôi
│   │   ├── contact.astro           # Liên hệ
│   │   ├── post/index.astro        # Danh sách bài viết
│   │   ├── post/[slug].astro       # Chi tiết bài viết
│   │   ├── rss.xml.ts              # RSS feed
│   │   └── 404.astro               # Trang lỗi
│   ├── styles/global.css           # Design system
│   └── content.config.ts           # Schema Content Collections
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## ✅ Checklist sau khi nhận bàn giao

- [ ] Thay thế tất cả `TODO` trong `src/data/portfolio.ts`
- [ ] Upload ảnh avatar/hero vào `public/images/`
- [ ] Tạo ảnh OG thật (1200×630) tại `public/images/og/default.png`
- [ ] Cấu hình email thật trong `portfolio.email`
- [ ] Cập nhật social links
- [ ] Thiết lập Formspree endpoint
- [ ] Push lên GitHub và bật GitHub Pages
- [ ] Kết nối Pages CMS
- [ ] Xóa bài viết demo và tạo bài viết thật

---

*Được xây dựng với ❤️ theo concept Modern Asian Heritage*
