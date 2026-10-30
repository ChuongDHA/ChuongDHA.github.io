/**
 * Portfolio Data — Dương Hoàng Anh Chương (CHA)
 * Profile data strictly adhering to PROFILE_FOR_PORTFOLIO_AGENT.md
 */

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

export interface AcademicField {
  label: string;
  value: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  href: string;
  coverAlt?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export const portfolio = {
  /** Họ và tên đầy đủ */
  name: 'Dương Hoàng Anh Chương',

  /** Monogram / Tên viết tắt */
  shortName: 'CHA',

  /** Tên hiển thị thân mật */
  displayName: 'Anh Chương',

  /** Vai trò hiện tại */
  role: 'Sinh viên Công nghệ thông tin',

  /** Đơn vị / Trường đào tạo */
  institution: 'Phân hiệu Cà Mau',

  /** Mã lớp học */
  classId: '242101TH001',

  /** Ngành học */
  major: 'Công nghệ thông tin',

  /** Hệ đào tạo */
  degreeType: 'Đại học chính quy',

  /** Niên khóa */
  academicYears: '2024–2028',

  /** Trạng thái đào tạo */
  status: 'Đang học',

  /** Headline / Tagline ngắn */
  headline: 'Sinh viên Công nghệ thông tin — Phân hiệu Cà Mau (2024–2028)',

  /** Đoạn giới thiệu Hero (Bản ngắn chuẩn hóa từ PROFILE_FOR_PORTFOLIO_AGENT.md) */
  intro: 'Xin chào, mình là Dương Hoàng Anh Chương (CHA), sinh viên ngành Công nghệ thông tin tại Phân hiệu Cà Mau, niên khóa 2024–2028. Đây là không gian cá nhân, nơi mình lưu giữ hành trình học tập, chia sẻ những điều đang tìm hiểu và giới thiệu các sản phẩm mình thực hiện.',

  /** Quê quán / Nơi sinh hoạt học tập */
  location: 'Cà Mau, Việt Nam',

  /** Email liên hệ chính thức */
  email: 'anhchuongcm@gmail.com',

  /** Avatar placeholder */
  avatar: '/images/avatar-placeholder.svg',

  /** Mạng xã hội / Kênh kết nối công khai */
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/ChuongDHA',
      icon: 'github',
    },
  ] as SocialLink[],

  /** Bảng thông tin học tập chi tiết */
  academicInfo: [
    { label: 'Ngành học', value: 'Công nghệ thông tin' },
    { label: 'Đơn vị', value: 'Phân hiệu Cà Mau' },
    { label: 'Lớp', value: '242101TH001' },
    { label: 'Hệ đào tạo', value: 'Đại học chính quy' },
    { label: 'Niên khóa', value: '2024–2028' },
    { label: 'Trạng thái', value: 'Đang học' },
    { label: 'Quê quán', value: 'Cà Mau, Việt Nam' },
  ] as AcademicField[],

  /** Kỹ năng: chưa cung cấp dữ liệu thực tế -> để mảng rỗng, không tự bịa */
  skills: [] as SkillGroup[],

  /** Giá trị định hướng học tập & cầu tiến */
  values: [
    {
      title: 'Học hỏi bền bỉ',
      description: 'Từng bước xây dựng nền tảng tư duy lập trình vững vàng qua từng học phần và bài tập thực hành.',
    },
    {
      title: 'Chân thực & Cầu tiến',
      description: 'Ghi nhận đúng năng lực hiện tại, không tự tô vẽ, luôn lắng nghe và nỗ lực nâng cao tay nghề.',
    },
    {
      title: 'Ứng dụng thực tế',
      description: 'Chuyển hóa kiến thức lý thuyết thành những sản phẩm và giải pháp số hữu ích phục vụ học tập.',
    },
  ] as ValueItem[],

  /** Dự án: chưa có dữ liệu thực tế -> để mảng rỗng, hiển thị placeholder biên tập trang nhã */
  selectedProjects: [] as ProjectItem[],

  /** Hành trình học tập: chỉ thể hiện mốc niên khóa 2024–2028 theo chỉ dẫn */
  experienceTimeline: [
    {
      year: '2024 – 2028',
      title: 'Đại học chính quy — Ngành Công nghệ thông tin',
      organization: 'Phân hiệu Cà Mau (Lớp 242101TH001)',
      description: 'Theo học chương trình cử nhân Công nghệ thông tin; tiếp cận kiến thức nền tảng về cấu trúc dữ liệu, giải thuật, lập trình và xây dựng sản phẩm phần mềm.',
    },
  ] as TimelineItem[],

  /** Câu chuyện cá nhân About */
  personalStory: 'Mình là Dương Hoàng Anh Chương, hiện đang theo học ngành Công nghệ thông tin tại Phân hiệu Cà Mau, lớp 242101TH001, niên khóa 2024–2028. Portfolio này được xây dựng như một cuốn sổ cá nhân trên không gian số — ghi lại quá trình học tập, những kiến thức mình khám phá, các dự án thực hành và những bài viết mình muốn chia sẻ.',

  /** Định hướng & Sở thích */
  interests: 'Mình mong muốn từng bước phát triển nền tảng kiến thức, tư duy giải quyết vấn đề và kỹ năng xây dựng sản phẩm công nghệ. Nội dung về kỹ năng, công nghệ đang sử dụng, sở thích chuyên môn, dự án và mục tiêu nghề nghiệp sẽ được bổ sung khi có thông tin thực tế; không tự suy đoán hoặc tự tạo thành tích.',

  /** Formspree endpoint */
  formEndpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || '',

  /** SEO & Metadata */
  seo: {
    description: 'Portfolio của Dương Hoàng Anh Chương (CHA) — Sinh viên ngành Công nghệ thông tin tại Phân hiệu Cà Mau (niên khóa 2024–2028).',
    ogImage: '/images/og/default.png',
  },
} as const;

export type Portfolio = typeof portfolio;
