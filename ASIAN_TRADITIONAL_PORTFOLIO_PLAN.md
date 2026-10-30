# ASIAN TRADITIONAL PORTFOLIO — IMPLEMENTATION PLAN

> **Mục đích tài liệu:** Đây là bản đặc tả sản phẩm và kế hoạch triển khai dành cho coding agent. Hãy đọc toàn bộ tài liệu, kiểm tra repository hiện tại, sau đó triển khai website hoạt động được (không chỉ tạo mockup hoặc viết thêm kế hoạch).
>
> **Concept:** Modern Asian Heritage — di sản Á Đông được diễn giải bằng ngôn ngữ giao diện hiện đại.
>
> **Ngôn ngữ mặc định:** Tiếng Việt (`vi`). Nội dung cá nhân chưa được cung cấp phải dùng placeholder có đánh dấu `TODO`, tuyệt đối không tự bịa thông tin cá nhân, kinh nghiệm, dự án, khách hàng hoặc testimonial.

---

## 1. Mục tiêu sản phẩm

Xây dựng portfolio cá nhân có thể deploy miễn phí trên GitHub Pages, thiết kế chỉn chu trên desktop và mobile, có bốn khu vực chính:

1. **Home** — giới thiệu ngắn, định vị cá nhân, điểm nhấn năng lực, dự án chọn lọc và bài viết mới.
2. **About** — câu chuyện cá nhân, định hướng, kỹ năng, hành trình và các mốc kinh nghiệm.
3. **Post** — danh sách bài viết, trang đọc chi tiết, tìm kiếm/lọc và hệ thống xuất bản nội dung.
4. **Contact** — thông tin liên hệ, mạng xã hội và form gửi lời nhắn.

### Kết quả cần đạt

- Giao diện nhận diện được concept Asian Traditional nhưng không cũ kỹ, không lạm dụng họa tiết Á Đông.
- Gradient lấy từ ảnh màu người dùng cung cấp là điểm nhận diện xuyên suốt.
- Hai font hiển thị tiếng Việt đầy đủ, không lỗi dấu kép hoặc dấu dưới.
- Card, button, navigation và các tương tác có trạng thái hover/focus/active rõ ràng.
- Trang bài viết được tạo tự động từ Markdown/MDX content collection.
- Chủ website có thể tạo bài, sửa bài, upload ảnh và xuất bản qua CMS giao diện web.
- Push/commit nội dung lên nhánh deploy sẽ tự động build và cập nhật GitHub Pages.
- Không yêu cầu server backend riêng để website cơ bản hoạt động.
- Đạt chất lượng tốt về accessibility, responsive, SEO và hiệu năng.

## 2. Art direction — Modern Asian Heritage

### 2.1 Từ khóa thị giác

`quiet elegance` · `modern heritage` · `editorial` · `soft geometry` · `ink & paper` · `silk texture` · `calm motion`.

Kết hợp:

- Cảm giác giấy dó/giấy thủ công, nền kem ấm và hạt giấy cực nhẹ.
- Tinh thần tranh thủy mặc, thư pháp và bố cục Á Đông qua khoảng trắng, nét cong, nhịp điệu và sự tiết chế.
- Hình tượng gợi nhắc mây, sóng nước, hoa sen, quạt, con dấu hoặc đường nét kiến trúc truyền thống dưới dạng SVG/line art tối giản.
- Bố cục editorial đương đại: heading lớn, lưới không đối xứng có chủ đích, khoảng trắng rộng, ảnh có crop nghệ thuật.

**Không làm:** không dùng nền đỏ/vàng phủ toàn trang, không ghép nhiều ký tự Hán/Nhật chỉ để trang trí, không dùng họa tiết dày đặc, không làm mọi section thành một chiếc card, không dùng hiệu ứng parallax/3D gây chóng mặt.

### 2.2 Bảng màu — lấy từ ảnh người dùng gửi

Giữ chính xác bốn màu gốc:

| Token | Mã màu | Cách dùng |
|---|---|---|
| `ocean` | `#0081A7` | Màu nhận diện đậm, CTA, link, chữ nhấn |
| `jade` | `#00AFB9` | Gradient, trạng thái tương tác, chi tiết trang trí |
| `parchment` | `#FED9B7` | Nền khối phụ, highlight, chuyển màu ấm |
| `terracotta` | `#F07167` | Điểm nhấn, con dấu, badge hoặc chi tiết nhỏ |

Gradient bắt buộc phải có trong design system:

```css
:root {
  --color-ocean: #0081A7;
  --color-jade: #00AFB9;
  --color-parchment: #FED9B7;
  --color-terracotta: #F07167;

  --gradient-primary: linear-gradient(
    125deg,
    var(--color-ocean) 0%,
    var(--color-jade) 54%,
    var(--color-parchment) 100%
  );

  --gradient-warm: linear-gradient(
    135deg,
    var(--color-terracotta) 0%,
    var(--color-parchment) 58%,
    var(--color-jade) 100%
  );

  --color-paper: #FBF8F2;
  --color-paper-deep: #F3EDE3;
  --color-ink: #20343A;
  --color-ink-soft: #52656A;
  --color-muted: #7D8989;
  --color-border: rgba(32, 52, 58, 0.12);
}
```

Nguyên tắc sử dụng:

- 65–75% diện tích là màu nền trung tính; 15–25% là xanh/gradient; phần còn lại là màu ấm.
- Không đặt đoạn văn dài lên nền gradient.
- Gradient ocean → jade phù hợp cho CTA chính, hero accent và các chi tiết nhận diện.
- Gradient warm phù hợp làm nền artwork, sticker, quote card hoặc một vài card nổi bật.
- Chữ nội dung chính phải dùng `--color-ink`, không dùng màu gradient để thay thế màu chữ.
- Kiểm tra contrast của chữ trên từng gradient; khi không đủ tương phản hãy đặt chữ trong vùng màu đặc hoặc dùng chữ tối.

### 2.3 Typography — hai font chính

**Display / heading: Noto Serif**

- Dùng cho hero title, heading, câu quote, tiêu đề bài viết và một số con số lớn.
- Tạo cảm giác văn chương, cổ điển và editorial.
- Ưu tiên Regular/Medium; Italic chỉ dùng có chọn lọc để tạo nhịp.

**Body / interface: Be Vietnam Pro**

- Dùng cho paragraph, navigation, button, tag, metadata, form label.
- Be Vietnam Pro có thiết kế chữ Việt và hệ dấu được tinh chỉnh cho tiếng Việt.
- Body 400; label/button 500–600.

Yêu cầu kỹ thuật font:

- Kiểm tra hiển thị thực tế với chuỗi: `Tiếng Việt: ă â ê ô ơ ư đ; Ắ Ầ Ệ Ỗ Ợ Ứ`.
- Ưu tiên self-host WOFF2 và chỉ tải các weight thực sự dùng; giữ file license kèm font theo điều khoản OFL.
- Có `font-display: swap`, fallback serif/sans phù hợp.
- Không dùng font display cho đoạn dài.
- Không thêm font thứ ba trừ icon font nếu thật sự cần; ưu tiên SVG icon.

### 2.4 Hình khối và bề mặt

- Border radius card lớn: 24–32px.
- Button: pill hoặc radius 16–20px.
- Input: radius 14–18px.
- Border: mảnh, màu ink opacity 8–14%.
- Shadow: khuếch tán nhẹ, thấp; tránh bóng đen nặng.
- Dùng paper grain/noise ở opacity rất thấp, không gây nhiễu nội dung.
- Card nên có nhiều biến thể: nền giấy, nền xanh đậm, gradient accent và card ảnh.
- Không bo tròn tất cả mọi thứ giống một template SaaS; hãy phối hợp các khối bo mềm với divider, nét cong và typography editorial.

### 2.5 Bố cục

- Content max-width khoảng 1160–1240px.
- Desktop side padding 48–64px; tablet 28–36px; mobile 20–24px.
- Dùng grid 12 cột ở desktop khi phù hợp; mobile chuyển thành một cột.
- Header sticky có nền translucent/blur nhẹ; không che nội dung khi scroll.
- Hero nên giàu khoảng trắng và có focal point rõ ràng.

## 3. Tech stack & kiến trúc

### 3.1 Stack đề xuất

| Lớp | Công nghệ | Mục đích |
|---|---|---|
| Framework | **Astro (latest stable)** | Static-first, file-based routing, content-focused |
| Language | **TypeScript** | Type safety và maintainability |
| Styling | **Tailwind CSS 4 + CSS variables** | Utility styling, design tokens và responsive |
| Motion | **Motion (`motion` package) + CSS transitions** | Scroll reveal và micro-interaction; ưu tiên CSS khi đủ |
| Content | **Astro Content Collections** | Markdown/MDX, schema validation, static routes |
| CMS | **Pages CMS** | Quản lý bài viết và media ngay trên GitHub repository |
| Hosting | **GitHub Pages** | Static hosting |
| CI/CD | **GitHub Actions + Astro official action** | Build/deploy khi push |
| SEO | **@astrojs/sitemap + RSS + JSON-LD** | Sitemap, feed và structured data |

Không thêm React/Vue/Svelte mặc định. Astro component và TypeScript phía client là đủ cho portfolio này. Chỉ dùng framework island nếu xuất hiện một tương tác thực sự cần state phức tạp.

Dùng phiên bản stable tương thích với nhau khi agent triển khai; không tự pin một package version cũ chỉ vì thấy trong tutorial cũ. Commit lockfile.

### 3.2 Vì sao chọn Astro

Portfolio và blog là website thiên về nội dung, không cần hydrate toàn bộ trang như một SPA. Astro giúp render HTML tĩnh, route theo file và dùng Content Collections để quản lý nội dung có schema. Cách này hợp với GitHub Pages và giúp giảm JavaScript gửi xuống trình duyệt.

### 3.3 Ranh giới static hosting

GitHub Pages không chạy server Node/SSR/API route và không cung cấp database hay xác thực backend cho site này.

Do đó:

- Nội dung bài viết được lưu trong file Markdown/MDX trong repository.
- CMS bên ngoài ghi nội dung vào GitHub thông qua quyền GitHub được cấp.
- Website chỉ build nội dung đã commit và deploy thành file tĩnh.
- Form liên hệ dùng dịch vụ form bên thứ ba (ví dụ Formspree) hoặc fallback `mailto:`; không giả lập submit thành công.
- Không xây dựng dashboard quản trị riêng trong website tĩnh.

Nếu sau này cần tài khoản người đọc, comment, like đồng bộ, user-generated content hoặc dữ liệu realtime thì phải chuyển sang kiến trúc có backend/database (ví dụ Supabase + hosting hỗ trợ server/functions). Đó không thuộc MVP hiện tại.

## 4. Cấu trúc trang & yêu cầu chức năng

### 4.1 Global shell

Tất cả trang dùng chung:

- `SiteHeader`: logo/monogram, nav Home / About / Post / Contact, CTA liên hệ.
- `MobileNavigation`: menu mobile, đóng khi chọn link, hỗ trợ Escape và focus.
- `SiteFooter`: monogram, câu tagline, social links, email, copyright, nút back-to-top nếu hợp lý.
- `BaseLayout`: metadata, font, global styles, skip link, analytics placeholder nếu sau này cần.
- Active navigation state phải phản ánh trang hiện tại.

Header gợi ý:

- Bên trái: monogram hoặc tên cá nhân (không tự tạo logo phức tạp).
- Ở giữa/bên phải: navigation tối giản.
- CTA: `Let's talk` / `Liên hệ` với gradient ocean → jade.
- Mobile: logo + menu button; không để nav bị tràn.

### 4.2 Home — `/`

Mục tiêu: trong 5 giây đầu người xem hiểu bạn là ai, làm gì, có phong cách gì và xem tiếp ở đâu.

Sections theo thứ tự:

1. **Hero:** eyebrow nhỏ, heading Noto Serif lớn, mô tả ngắn, CTA `Khám phá hành trình` và `Liên hệ`; ảnh chân dung hoặc artwork ở khối phụ. Nếu chưa có ảnh thật, dùng abstract artwork SVG/CSS, không tự lấy ảnh người không rõ quyền.
2. **Signature / Introduction:** một đoạn giới thiệu ngắn, có một phrase in italic hoặc quote.
3. **Selected works / What I do:** 2–4 project/service cards, dữ liệu lấy từ file config; không tự dựng dự án thật. Có thể dùng placeholders với nhãn `Thay bằng dự án của bạn`.
4. **About preview:** ảnh/khối hình nghệ thuật, 2–3 câu giới thiệu và link About.
5. **Featured posts:** 2–3 bài mới nhất hoặc bài có `featured: true`.
6. **Closing CTA:** lời mời kết nối với nền gradient hoặc khối warm parchment.

Tương tác:

- Hero visual có ambient gradient chuyển rất chậm, không làm giảm readability.
- CTA hover có translateY nhẹ và gradient shift.
- Project/post cards hover lift nhẹ và ảnh zoom rất nhỏ.
- Reveal animation khi section đi vào viewport.

### 4.3 About — `/about/`

Sections:

1. Page hero: `A little about me` hoặc nội dung tiếng Việt tương đương.
2. Personal story: câu chuyện cá nhân, quan điểm, điều bạn quan tâm.
3. Principles / Values: 3–4 giá trị cốt lõi.
4. Skills / Expertise: nhóm kỹ năng; hiển thị dạng tag hoặc list, không dùng progress bar phần trăm thiếu căn cứ.
5. Journey / Timeline: các mốc học tập, công việc hoặc dự án nếu người dùng cung cấp.
6. Personal interests: sở thích hoặc nguồn cảm hứng nếu có dữ liệu thật.
7. CTA sang Post hoặc Contact.

Không viết tự động tiểu sử dạng “nhiều năm kinh nghiệm”, “đã hợp tác với...” nếu chưa có nguồn dữ liệu.

### 4.4 Post index — `/post/`

Chức năng:

- Lấy toàn bộ post từ Astro content collection.
- Chỉ hiển thị bài `draft: false`.
- Sắp xếp `pubDate` giảm dần.
- Featured post có layout nổi bật ở đầu danh sách nếu có.
- Grid card responsive (3 cột desktop, 2 cột tablet, 1 cột mobile).
- Mỗi card hiển thị cover, category, title, excerpt, date và estimated reading time.
- Lọc theo category/tag.
- Tìm kiếm client-side theo title, description và tags; có trạng thái empty state thân thiện.
- Nếu số bài tăng cao, bổ sung pagination hoặc load-more có accessible button; MVP không cần dựng API.

Post card cần có:

- Ảnh cover theo tỉ lệ thống nhất (khuyến nghị 4:3 hoặc 16:10).
- `alt` mô tả có ý nghĩa.
- Tag nhỏ, không biến toàn bộ card thành badge.
- Hover: image scale tối đa 1.03, card translateY khoảng -4px, shadow tăng nhẹ.
- Focus bằng bàn phím phải có hiệu ứng tương đương hover.

### 4.5 Post detail — `/post/[slug]/`

- Generate static route cho từng post đã publish.
- Title, description, date, updated date nếu có, category, tags, cover và author.
- Reading time được tính tự động từ body Markdown.
- Nội dung có typography tối ưu cho đọc: max-width khoảng 720–780px, line-height thoáng.
- Hỗ trợ heading, paragraph, blockquote, ordered/unordered lists, inline code, code block, table, link và image.
- Có mục lục tự động cho bài dài nếu không làm nặng trang.
- Có link quay lại `/post/`, bài liên quan hoặc bài tiếp theo.
- Có nút chia sẻ/copy URL; nếu clipboard API không khả dụng, fallback chọn/copy URL hoặc mở share URL phù hợp.
- Ảnh phải responsive, không tràn viewport; hỗ trợ caption nếu CMS/content format có.
- Thiết lập Article metadata / Open Graph.

### 4.6 Contact — `/contact/`

- Hero ngắn, rõ lời mời liên hệ.
- Email click-to-copy và mailto.
- Social link mở tab mới với `rel="noopener noreferrer"`.
- Contact form gồm name, email, subject (optional), message và consent/notice nếu cần.
- Validate required fields, email và thông báo lỗi bằng accessible inline message.
- Tích hợp Formspree hoặc một form service static-compatible khác qua biến cấu hình `PUBLIC_FORMSPREE_ENDPOINT`.
- Không có endpoint thì hiển thị fallback mailto với nội dung được encode; không giả vờ form đã gửi.
- Có trạng thái submitting, success và error thực tế.
- Endpoint form là public endpoint, không phải private secret. Không đưa API secret vào frontend hay repository.

### 4.7 404

Tạo trang 404 đồng bộ design system, có CTA về Home và Post.

## 5. Hệ thống CMS — bắt buộc hoạt động

### 5.1 Quyết định kiến trúc

Dùng **Pages CMS** (hosted tại `https://app.pagescms.org`) để quản lý bài viết trong GitHub repository.

Luồng xuất bản:

```text
Chủ website
   ↓ đăng nhập Pages CMS bằng GitHub
Pages CMS editor
   ↓ tạo/sửa bài + upload cover/body images
Commit Markdown và media vào repository
   ↓ push vào nhánh main
GitHub Actions
   ↓ cài dependencies + build Astro
GitHub Pages
   ↓ xuất bản bản build mới
Người đọc truy cập website
```

CMS hosted là giao diện quản trị riêng. Không nhúng secret token vào website. Không tạo login page giả trong Astro.

### 5.2 Cấu trúc content

Đề xuất:

```text
src/
  content/
    posts/
      welcome-to-my-journal.md
      design-and-culture.md
  content.config.ts
public/
  images/
    posts/
      ...
```

Mỗi bài là một file `.md`, filename là slug lowercase-kebab-case không dấu. Bài viết chỉ được public khi `draft: false`.

Schema định hướng:

```ts
{
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  cover?: string;
  coverAlt?: string;
  category?: string;
  tags: string[];
  draft: boolean;
  featured: boolean;
  // Body là Markdown body, không nhất thiết là frontmatter property.
}
```

Dùng `src/content.config.ts` và API Content Collections hiện hành của Astro (loader `glob`, schema Zod hoặc API stable tương đương). Schema phải khớp dữ liệu CMS, tránh field mismatch làm fail build.

### 5.3 Cấu hình Pages CMS

Tạo `.pages.yml` ở root repository. Tối thiểu phải khai báo:

- Một collection `posts` trỏ tới `src/content/posts`.
- Fields: `title`, `description`, `pubDate`, `updatedDate`, `cover`, `coverAlt`, `category`, `tags`, `draft`, `featured`, `body`.
- `body` dùng rich-text với `format: markdown`.
- Ảnh được upload vào `public/images/posts` và URL được lưu theo public path `/images/posts/...`.
- Hỗ trợ JPG/JPEG/PNG/WebP/AVIF; khuyến khích WebP/AVIF cho ảnh web.
- Filename an toàn, dễ đọc; tránh trùng tên gây ghi đè ảnh.

Ví dụ khung cấu hình để coding agent hoàn thiện theo schema Pages CMS hiện hành:

```yaml
media:
  input: public/images/posts
  output: /images/posts
  rename: safe
  categories: [image]
  extensions: [jpg, jpeg, png, webp, avif]

content:
  - name: posts
    label: Bài viết
    type: collection
    path: src/content/posts
    fields:
      - name: title
        label: Tiêu đề
        type: string
        required: true
      - name: description
        label: Mô tả ngắn
        type: text
        required: true
      - name: pubDate
        label: Ngày đăng
        type: date
        required: true
        options:
          format: yyyy-MM-dd
      - name: updatedDate
        label: Ngày cập nhật
        type: date
        options:
          format: yyyy-MM-dd
      - name: cover
        label: Ảnh đại diện
        type: image
        required: true
      - name: coverAlt
        label: Mô tả ảnh
        type: string
      - name: category
        label: Chuyên mục
        type: string
      - name: tags
        label: Tags
        type: string
      - name: draft
        label: Bản nháp
        type: boolean
      - name: featured
        label: Bài nổi bật
        type: boolean
      - name: body
        label: Nội dung
        type: rich-text
        options:
          format: markdown
          path: public/images/posts
          rename: safe
          switcher: true
```

**Lưu ý cho agent:** rà lại cấu hình Pages CMS theo docs hiện hành trước khi hoàn thiện. Nếu cần danh sách tags dạng array, hãy dùng field/list cấu trúc được Pages CMS hỗ trợ tại thời điểm code và bảo đảm schema Astro cùng kiểu. Không được để field `tags` thành chuỗi trong CMS nhưng schema lại đòi array nếu chưa có bước normalize. `body` phải được ghi thành Markdown body tương thích với Astro, không để toàn bộ bài bị serialize thành một frontmatter string.

### 5.4 Quy tắc publish và draft

- `draft: true`: không hiển thị ở Home, Post index, related posts, RSS, sitemap hoặc trang chi tiết public.
- `draft: false`: được đưa vào build public.
- Nội dung mới từ CMS tạo commit → GitHub Actions build.
- Không cam kết lịch xuất bản tự động chỉ bằng `pubDate`; GitHub Pages build tĩnh không tự thức dậy khi đến ngày. Nếu muốn scheduled publishing, phải bổ sung GitHub Actions schedule hoặc workflow riêng.
- Nếu muốn preview trước khi public, dùng branch/PR hoặc giữ `draft: true`.

### 5.5 Hướng dẫn vận hành cần ghi trong README

1. Push repository lên GitHub và bật Pages bằng GitHub Actions.
2. Mở Pages CMS, đăng nhập bằng GitHub và cấp quyền đúng repository.
3. Pages CMS đọc `.pages.yml` từ branch đang kết nối.
4. Tạo bài mới, nhập metadata, upload cover, soạn nội dung và để `draft` phù hợp.
5. Save/commit; theo dõi GitHub Actions.
6. Khi workflow thành công, bài viết xuất hiện trên website.

## 6. Animation & micro-interaction

Mục tiêu: chuyển động mềm, tinh tế, có lý do. Không biến portfolio thành demo animation.

### 6.1 Motion principles

- Ưu tiên opacity + transform; hạn chế animate layout properties gây layout shift.
- Timing ngắn cho UI control (140–220ms), card/section (300–650ms), ambient background chậm và gần như không gây chú ý.
- Easing mềm, tránh bounce mạnh.
- Chỉ một vài điểm chuyển động lớn trên mỗi viewport.
- Không chạy animation nặng liên tục khi tab không active.

### 6.2 Animation checklist

| Thành phần | Hover / focus | Click / scroll |
|---|---|---|
| Primary button | Gradient shift, translateY(-2px), shadow nhẹ | Scale khoảng 0.98 khi active |
| Secondary button | Border/ink đổi nhẹ | State pressed rõ ràng |
| Post card | Lift -3/-4px, cover scale 1.02–1.03 | Không chặn navigation mặc định |
| Project card | Một lớp artwork/line accent hiện nhẹ | Không dùng hiệu ứng 3D mạnh |
| Navigation link | Underline/indicator reveal | Active state theo route |
| Image | Zoom rất nhẹ trong overflow hidden | Không cần animation click riêng |
| Section | Không nhất thiết hover | Reveal opacity + translateY khi in-view |
| Hero decoration | Gradient drift cực chậm | Tắt trên mobile yếu hoặc reduced-motion |
| Form input | Border + focus ring | Error/success transition rõ, không rung mạnh |

### 6.3 Kỹ thuật triển khai

- CSS transition là mặc định cho hover/focus/active.
- Dùng Motion package cho scroll reveal, stagger hoặc tương tác cần orchestration.
- Dùng IntersectionObserver hoặc Motion in-view; chỉ khởi tạo ở client.
- Tránh khởi tạo một animation instance cho mọi paragraph nếu không mang lại giá trị.
- Không animate mọi ký tự của mọi heading; chỉ stagger một hero heading khi có lợi cho trải nghiệm.
- `prefers-reduced-motion: reduce` phải tắt/giảm chuyển động không thiết yếu.
- Không phụ thuộc hover để người dùng mobile truy cập nội dung.
- Không thêm cursor custom bắt buộc; nếu có, phải vô hiệu trên touch/coarse pointer và không cản trở click.

### 6.4 Accessibility

- Mọi link/button sử dụng semantic HTML phù hợp.
- Focus-visible ring phải rõ ràng.
- Menu mobile hoạt động bằng bàn phím, có `aria-expanded` và Escape.
- Animation không làm mất nội dung khi JS tắt; content mặc định vẫn hiển thị.
- Tôn trọng reduced motion.

## 7. Responsive specification

Kiểm thử tối thiểu ở các viewport:

- Mobile nhỏ: 360 × 800.
- Mobile phổ biến: 390 × 844.
- Tablet: 768 × 1024.
- Laptop: 1366 × 768.
- Desktop lớn: 1440 × 900.

Checklist:

- Không xuất hiện horizontal overflow.
- Heading không vỡ dòng xấu hoặc che artwork.
- Hero xếp dọc trên mobile; CTA đủ cao và dễ bấm.
- Grid card chuyển 3 → 2 → 1 cột hợp lý.
- Menu mobile hoạt động và đóng sau khi chọn route.
- Article typography dễ đọc trên màn nhỏ.
- Ảnh crop không làm mất chủ thể quan trọng.
- Form fields đủ chiều rộng; error message không làm vỡ layout.

## 8. Performance, SEO & quality

### Performance

- SSG/static output, không hydrate toàn site.
- Dùng ảnh tối ưu và đúng kích thước; lazy-load ảnh dưới fold.
- Hero/LCP image không lazy-load nếu là ảnh chính; ưu tiên preload khi có căn cứ.
- Ưu tiên AVIF/WebP; có fallback phù hợp.
- Chỉ import font weights cần thiết và self-host.
- JS client chỉ thêm cho search/filter/form/menu/animation.
- Không tải thư viện animation lớn nếu CSS thực hiện được hiệu ứng.
- Tránh video background tự chạy.

### SEO

- Mỗi route có title, description, canonical.
- Open Graph/Twitter card cho Home, Post index và từng Post detail.
- `og:image` fallback hợp lệ.
- Semantic heading hierarchy (một H1 chính mỗi page).
- `@astrojs/sitemap` và `robots.txt`.
- RSS feed tại `/rss.xml` hoặc route tương đương.
- JSON-LD `Person` cho portfolio và `BlogPosting` cho từng bài; chỉ dùng dữ liệu có thật.
- Slug ngắn, ổn định, lowercase-kebab-case.
- Không index draft.
- Internal links dùng base-aware helper để chạy đúng cả project page và user page.

### Accessibility

- Contrast tối thiểu WCAG AA cho text thường khi có thể; gradient text phải được kiểm tra kỹ.
- Alt text có ý nghĩa; ảnh trang trí dùng alt rỗng.
- Có skip-to-content link.
- Form label không thay bằng placeholder.
- Tất cả interactive controls có keyboard state.
- Không truyền đạt trạng thái chỉ bằng màu sắc.

## 9. GitHub Pages & CI/CD

### 9.1 Astro configuration

- `output: "static"`.
- `site` là canonical production URL.
- `base` phải đúng môi trường:
  - Project Pages: `/<repository-name>`.
  - User/Organization Pages dạng `<owner>.github.io`: `/`.
  - Custom domain: `/`.
- Các internal link, asset, image, sitemap/RSS link phải base-aware.
- Không dùng đường dẫn tuyệt đối `/images/...` trực tiếp trong component nếu nó làm hỏng project Pages; xây helper dùng `import.meta.env.BASE_URL` hoặc giải pháp base-path tương đương.

### 9.2 GitHub Actions

Tạo `.github/workflows/deploy.yml`:

- Trigger khi push lên branch chính (`main`) và có `workflow_dispatch`.
- Checkout source.
- Dùng Astro official GitHub Action/flow theo tài liệu Astro hiện hành.
- Build và deploy artifact lên GitHub Pages.
- Chỉ cấp quyền cần thiết (`contents: read`, `pages: write`, `id-token: write` theo workflow chính thức).
- Thiết lập concurrency để tránh deploy chồng.
- Commit lockfile để package manager được nhận diện ổn định.
- Build failure phải làm workflow fail, không upload site lỗi.

Tham khảo workflow chính thức tại: https://docs.astro.build/en/guides/deploy/github/

### 9.3 Cấu hình thủ công của repository owner

- GitHub Repository → Settings → Pages → Source: **GitHub Actions**.
- Điền đúng `site` và `base` trong Astro config.
- Nếu có custom domain, cấu hình domain/DNS và CNAME theo hướng dẫn GitHub Pages.
- CMS cần kết nối đúng repository và branch deploy.

## 10. Đề xuất project structure

Agent có thể điều chỉnh cấu trúc khi cần, nhưng phải giữ ranh giới rõ ràng:

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── posts/
│   │   └── og/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.astro
│   │   │   ├── MobileNavigation.astro
│   │   │   └── SiteFooter.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── SectionHeading.astro
│   │   │   ├── PostCard.astro
│   │   │   ├── ProjectCard.astro
│   │   │   └── SocialLinks.astro
│   │   └── effects/
│   │       └── Reveal.astro
│   ├── content/
│   │   └── posts/
│   │       └── welcome-to-my-journal.md
│   ├── data/
│   │   ├── portfolio.ts
│   │   └── navigation.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── post/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── rss.xml.ts
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── .pages.yml
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

Không bắt buộc phải tạo một component riêng cho mọi chi tiết nhỏ. Chỉ tách component khi có tái sử dụng hoặc giúp layout rõ ràng.

## 11. Dữ liệu cá nhân & nội dung mẫu

Tạo một config data tập trung (ví dụ `src/data/portfolio.ts`) để người dùng thay đổi mà không phải sửa nhiều page:

- `name`
- `shortName` / monogram
- `role` / headline
- `intro`
- `location` (optional)
- `email`
- `avatar` hoặc `heroArtwork`
- `socialLinks`
- `skills`
- `experienceTimeline`
- `selectedProjects`
- `values`

Tất cả giá trị chưa biết phải để rõ `TODO: replace with your information` hoặc chuỗi placeholder tương đương.

Không dựng sẵn testimonial giả, logo công ty giả, số liệu thành tích giả hoặc ảnh chân dung stock làm như ảnh của chủ website.

Cần có tối thiểu một post mẫu để xác nhận end-to-end content pipeline. Post mẫu phải được đánh dấu là demo hoặc dễ thay thế, nội dung không giả làm bài viết thật của người dùng.

## 12. Thứ tự triển khai — milestones

### Phase 0 — Repository & technical foundation

- Kiểm tra repository và package manager hiện có.
- Khởi tạo Astro + TypeScript nếu repository trống.
- Cấu hình static output, Tailwind CSS 4, CSS variables và font.
- Tạo BaseLayout, global reset, favicon và base-path helper.
- Chạy dev/build để xác nhận nền tảng hoạt động.

**Done khi:** project cài được dependency, `npm run build` thành công và deploy config không hardcode sai repository path.

### Phase 1 — Visual system & global components

- Khai báo color tokens, typography, spacing, shadows, radius.
- Header, mobile navigation, footer, button, section heading, card.
- Background texture và SVG motifs tối giản.
- States hover/focus/active/reduced-motion.

**Done khi:** các component đồng nhất giữa desktop/mobile; không có lỗi contrast hoặc overflow cơ bản.

### Phase 2 — Four pages

- Hoàn thành Home.
- Hoàn thành About với data config và placeholders.
- Hoàn thành Contact form + validation + fallback.
- Hoàn thành Post index, detail, search/filter, reading time.
- Thêm 404.

**Done khi:** mọi route hoạt động, nav active đúng, dữ liệu demo không bị trình bày như thông tin cá nhân có thật.

### Phase 3 — CMS & content pipeline

- Tạo Astro content collection schema.
- Tạo `.pages.yml` và media upload path.
- Test bài Markdown mẫu, cover image, tags, draft/publish.
- Xác minh tạo/sửa bài trên Pages CMS commit đúng định dạng Astro đọc được.
- Đảm bảo draft bị ẩn ở tất cả bề mặt public.

**Done khi:** tạo một bài mới trong CMS → commit GitHub → build thành công → bài hiển thị ở Post index và trang chi tiết.

### Phase 4 — Motion polish

- Thêm reveal/stagger phù hợp.
- Hoàn thiện card/button micro-interactions.
- Thêm gradient hover và ambient hero visual.
- Kiểm tra `prefers-reduced-motion`, touch device và JS fallback.

**Done khi:** animation mượt, không cản trở điều hướng, không gây layout shift đáng kể.

### Phase 5 — SEO, accessibility, QA, deployment

- Meta, OG, canonical, sitemap, RSS, JSON-LD.
- Kiểm thử responsive theo các viewport ở mục 7.
- Kiểm tra keyboard navigation, form states, alt text, reduced motion.
- Kiểm tra đường dẫn khi dùng `base` của project Pages.
- GitHub Actions deploy và verify URL thực tế.
- Hoàn thiện README hướng dẫn setup, CMS và deploy.

**Done khi:** build/deploy thành công, link/asset không 404, draft không public và người dùng có thể vận hành quy trình đăng bài mà không sửa source code.

## 13. Acceptance criteria — checklist nghiệm thu

### Visual

- [ ] Đúng bốn màu gốc `#0081A7`, `#00AFB9`, `#FED9B7`, `#F07167`.
- [ ] Có hai font Noto Serif + Be Vietnam Pro, dấu tiếng Việt hiển thị chuẩn.
- [ ] Asian Traditional là cảm hứng tinh tế, không dùng cliché hoặc họa tiết lạm dụng.
- [ ] Card/button mềm mại, border/shadow tinh tế, hover/focus/active đầy đủ.
- [ ] Gradient có chủ đích, không làm giảm khả năng đọc.

### Pages & features

- [ ] Home, About, Post index, Post detail, Contact và 404 hoàn chỉnh.
- [ ] Post index có search/filter và empty state.
- [ ] Bài viết được generate từ collection, không hardcode card.
- [ ] Contact có validation, success/error/fallback thật.
- [ ] Navigation desktop/mobile hoạt động.

### CMS

- [ ] Có `.pages.yml`.
- [ ] Pages CMS quản lý được Markdown posts.
- [ ] Upload cover/body image lưu đúng trong repository.
- [ ] Draft bị ẩn khỏi trang, related content, RSS và sitemap.
- [ ] Publish tạo commit và kích hoạt GitHub Actions.
- [ ] Bài viết mới hiện ra sau deploy mà không cần sửa code.

### Engineering

- [ ] TypeScript không có lỗi nghiêm trọng.
- [ ] Build thành công.
- [ ] Không có console error không xử lý.
- [ ] Không có internal link/asset 404 khi chạy trên GitHub Pages project path.
- [ ] Responsive không horizontal overflow.
- [ ] Reduced motion và keyboard navigation hoạt động.
- [ ] SEO metadata, sitemap và RSS có.
- [ ] README hướng dẫn đầy đủ setup/CMS/deploy.

## 14. Quy tắc làm việc cho coding agent

1. Đọc repository trước khi sửa; giữ lại code/config hữu ích nếu đã có.
2. Triển khai theo milestones nhưng không dừng ở scaffold hoặc mockup.
3. Ưu tiên phiên bản stable, tương thích và tài liệu chính thức mới nhất.
4. Không tự thay đổi concept, palette, font hoặc kiến trúc CMS nếu chưa có lý do kỹ thuật rõ ràng.
5. Không tự tạo backend/serverless function vì GitHub Pages không chạy chúng.
6. Không để frontend giả báo “đã gửi” khi form thực tế chưa gửi được.
7. Không đưa private credentials vào source code, `.env` đã commit hoặc browser bundle.
8. Dữ liệu profile chưa có phải để placeholder có chủ đích; không tự bịa.
9. Sau mỗi milestone chạy lint/typecheck/build phù hợp; sửa lỗi trước khi chuyển tiếp.
10. Cuối cùng trả lại summary về file đã tạo, lệnh chạy local, cách kết nối Pages CMS, cách cấu hình GitHub Pages, biến môi trường form và các TODO người dùng cần thay.

## 15. Tài liệu tham khảo chính thức

- Astro — Deploy to GitHub Pages: https://docs.astro.build/en/guides/deploy/github/
- Astro — Content Collections: https://docs.astro.build/en/guides/content-collections/
- Astro — Pages and routing: https://docs.astro.build/en/basics/astro-pages/
- Astro — Pages CMS integration: https://docs.astro.build/en/guides/cms/pages-cms/
- Pages CMS — Introduction: https://pagescms.org/docs/
- Pages CMS — `.pages.yml` configuration: https://pagescms.org/docs/configuration/
- Pages CMS — Media uploads: https://pagescms.org/docs/configuration/media/
- Pages CMS — Rich text field: https://pagescms.org/docs/configuration/fields/rich-text/
- Be Vietnam Pro — Font project: https://github.com/bettergui/BeVietnamPro
- Noto Serif — Google Fonts: https://fonts.google.com/specimen/Noto+Serif
- Be Vietnam Pro — Google Fonts: https://fonts.google.com/specimen/Be+Vietnam+Pro

---

## Final directive

Hãy xây dựng một portfolio **thực sự có thể sử dụng và deploy**, không chỉ là landing page minh họa. Ưu tiên chất lượng typography, khoảng trắng, bảng màu gradient, chi tiết Á Đông tinh tế, trải nghiệm đọc bài viết và quy trình CMS hoạt động end-to-end. Giữ cho website nhẹ, nhanh, dễ bảo trì và để chủ website có thể tự đăng bài sau khi bàn giao.
