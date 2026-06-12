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
    slug: 'tokoku-elektronik',
    name: 'TokoKu Elektronik',
    category: 'Toko Online',
    screenshot: '/images/portfolio/tokoku-elektronik.webp',
    description:
      'Website toko online untuk penjualan produk elektronik dengan fitur keranjang belanja, payment gateway, dan dashboard admin untuk manajemen produk.',
  },
  {
    slug: 'pt-maju-bersama',
    name: 'PT Maju Bersama',
    category: 'Company Profile',
    screenshot: '/images/portfolio/pt-maju-bersama.webp',
    description:
      'Company profile modern untuk perusahaan manufaktur dengan halaman tentang kami, layanan, portfolio proyek, dan formulir kontak terintegrasi WhatsApp.',
  },
  {
    slug: 'skincare-glow',
    name: 'Skincare Glow',
    category: 'Landing Page',
    screenshot: '/images/portfolio/skincare-glow.webp',
    description:
      'Landing page produk skincare dengan desain elegan, testimoni pelanggan, dan CTA pembelian langsung ke WhatsApp untuk meningkatkan konversi.',
  },
  {
    slug: 'sdn-5-jakarta',
    name: 'SD Negeri 5 Jakarta',
    category: 'Website Sekolah',
    screenshot: '/images/portfolio/sdn-5-jakarta.webp',
    description:
      'Website sekolah dengan informasi akademik, pengumuman, profil guru, galeri kegiatan, dan portal informasi untuk orang tua murid.',
  },
  {
    slug: 'dinas-pariwisata-bandung',
    name: 'Dinas Pariwisata Bandung',
    category: 'Website Pemerintahan',
    screenshot: '/images/portfolio/dinas-pariwisata-bandung.webp',
    description:
      'Website resmi dinas pariwisata dengan informasi destinasi wisata, agenda kegiatan, berita terbaru, dan peta lokasi wisata interaktif.',
  },
  {
    slug: 'yayasan-peduli-anak',
    name: 'Yayasan Peduli Anak',
    category: 'Website Organisasi',
    screenshot: '/images/portfolio/yayasan-peduli-anak.webp',
    description:
      'Website organisasi nonprofit dengan halaman program, laporan kegiatan, galeri dokumentasi, dan formulir donasi online yang aman.',
  },
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
