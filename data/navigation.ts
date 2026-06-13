export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blog', href: '/blog' },
];
