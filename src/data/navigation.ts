export const navigation = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về tôi', href: '/about/' },
  { label: 'Bài viết', href: '/post/' },
  { label: 'Liên hệ', href: '/contact/' },
] as const;

export type NavItem = (typeof navigation)[number];
