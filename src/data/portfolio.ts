/**
 * Portfolio Data Config
 * TODO: Replace all placeholder values with your actual information
 */

export const portfolio = {
  /** TODO: Replace with your full name */
  name: 'TODO: Tên của bạn',

  /** TODO: Replace with your short name or monogram */
  shortName: 'CHA',

  /** TODO: Replace with your professional title */
  role: 'TODO: Vai trò / Chuyên môn của bạn',

  /** TODO: Replace with your intro tagline */
  headline: 'TODO: Slogan hoặc headline ngắn của bạn',

  /** TODO: Replace with your personal intro paragraph */
  intro: 'TODO: Đây là đoạn giới thiệu ngắn về bạn. Hãy viết 2–3 câu mô tả bạn là ai, bạn làm gì và điều gì khiến bạn độc đáo.',

  /** TODO: Replace with your location (optional) */
  location: 'TODO: Thành phố, Quốc gia',

  /** TODO: Replace with your email */
  email: 'hello@example.com',

  /** TODO: Replace with path to your avatar or hero artwork */
  avatar: '/images/avatar-placeholder.svg',

  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/ChuongDHA',
      icon: 'github',
    },
    {
      /** TODO: Replace with your LinkedIn URL */
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/TODO',
      icon: 'linkedin',
    },
    {
      /** TODO: Add or remove social links as needed */
      label: 'Twitter / X',
      href: 'https://x.com/TODO',
      icon: 'twitter',
    },
  ],

  skills: [
    {
      /** TODO: Replace with your actual skill groups */
      group: 'TODO: Nhóm kỹ năng 1',
      items: ['TODO: Kỹ năng A', 'TODO: Kỹ năng B', 'TODO: Kỹ năng C'],
    },
    {
      group: 'TODO: Nhóm kỹ năng 2',
      items: ['TODO: Kỹ năng D', 'TODO: Kỹ năng E', 'TODO: Kỹ năng F'],
    },
    {
      group: 'TODO: Nhóm kỹ năng 3',
      items: ['TODO: Kỹ năng G', 'TODO: Kỹ năng H', 'TODO: Kỹ năng I'],
    },
  ],

  values: [
    {
      /** TODO: Replace with your actual values */
      title: 'TODO: Giá trị cốt lõi 1',
      description: 'TODO: Mô tả ngắn về giá trị này và tại sao nó quan trọng với bạn.',
    },
    {
      title: 'TODO: Giá trị cốt lõi 2',
      description: 'TODO: Mô tả ngắn về giá trị này và tại sao nó quan trọng với bạn.',
    },
    {
      title: 'TODO: Giá trị cốt lõi 3',
      description: 'TODO: Mô tả ngắn về giá trị này và tại sao nó quan trọng với bạn.',
    },
  ],

  selectedProjects: [
    {
      /** TODO: Replace with your actual projects */
      title: 'TODO: Tên dự án 1',
      description: 'TODO: Mô tả ngắn về dự án này. Dự án làm gì, công nghệ gì và kết quả đạt được?',
      tags: ['TODO: Tag A', 'TODO: Tag B'],
      href: '#',
      coverAlt: 'TODO: Mô tả ảnh dự án',
    },
    {
      title: 'TODO: Tên dự án 2',
      description: 'TODO: Mô tả ngắn về dự án này. Dự án làm gì, công nghệ gì và kết quả đạt được?',
      tags: ['TODO: Tag C', 'TODO: Tag D'],
      href: '#',
      coverAlt: 'TODO: Mô tả ảnh dự án',
    },
  ],

  experienceTimeline: [
    {
      /** TODO: Replace with your actual experience */
      year: 'TODO: Năm',
      title: 'TODO: Chức danh / Sự kiện',
      organization: 'TODO: Tổ chức / Trường học',
      description: 'TODO: Mô tả ngắn về vai trò hoặc sự kiện này.',
    },
    {
      year: 'TODO: Năm',
      title: 'TODO: Chức danh / Sự kiện',
      organization: 'TODO: Tổ chức / Trường học',
      description: 'TODO: Mô tả ngắn về vai trò hoặc sự kiện này.',
    },
  ],

  personalStory: 'TODO: Câu chuyện cá nhân của bạn. Đây là nơi để chia sẻ hành trình, điều bạn đam mê và lý do bạn làm những gì đang làm. Hãy viết chân thực và cá nhân.',

  interests: 'TODO: Sở thích và nguồn cảm hứng của bạn bên ngoài công việc.',

  /** Formspree endpoint for contact form — set via env var */
  formEndpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || '',

  seo: {
    /** TODO: Replace with your site description for SEO */
    description: 'TODO: Mô tả ngắn về portfolio của bạn cho SEO và social sharing.',
    /** TODO: Replace with your OG image path */
    ogImage: '/images/og/default.png',
  },
} as const;

export type Portfolio = typeof portfolio;
