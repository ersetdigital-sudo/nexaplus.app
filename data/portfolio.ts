export type ServiceCategory =
  | 'Toko Online'
  | 'Landing Page'
  | 'Company Profile'
  | 'Website Sekolah'
  | 'Website Pemerintahan'
  | 'Website Organisasi'
  | 'Tour & Travel';

export interface PortfolioItem {
  slug: string;
  name: string;
  category: ServiceCategory;
  screenshot: string;
  description: string;
  url?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'octaf-kreasi',
    name: 'Octaf Kreasi',
    category: 'Tour & Travel',
    screenshot: '/images/portfolio/octaf-kreasi.webp',
    description:
      'Platform tour & travel Indonesia dengan fitur pencarian destinasi, booking online, wishlist, review traveler, dan lebih dari 500 destinasi wisata dari Raja Ampat hingga Labuan Bajo.',
    url: 'https://octafkreasi.com',
  },
  {
    slug: 'erset-store',
    name: 'Erset Store',
    category: 'Toko Online',
    screenshot: '/images/portfolio/erset-store.webp',
    description:
      'Toko online produk import dengan fitur flash sale, wishlist, keranjang belanja, dan lebih dari 10.000 produk gadget, audio, homeware, dan tools.',
    url: 'https://ersetstore.vercel.app',
  },
  {
    slug: 'oos-shop',
    name: 'OOS Shop',
    category: 'Toko Online',
    screenshot: '/images/portfolio/oos-shop.webp',
    description:
      'Website toko online dengan katalog produk lengkap, sistem checkout terintegrasi, dan desain modern untuk pengalaman belanja yang optimal.',
    url: 'https://oos-shop.com',
  },
];
