export interface Benefit {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    id: 'website-cepat-modern',
    icon: 'Zap',
    title: 'Website Cepat dan Modern',
    description: 'Dibangun menggunakan teknologi modern yang menghasilkan performa lebih cepat dan pengalaman pengguna lebih baik.',
  },
  {
    id: 'desain-profesional',
    icon: 'Palette',
    title: 'Desain Profesional',
    description: 'Tampilan dirancang untuk meningkatkan kepercayaan pelanggan dan memperkuat citra bisnis.',
  },
  {
    id: 'seo-friendly',
    icon: 'Search',
    title: 'SEO Friendly',
    description: 'Struktur website dioptimalkan agar lebih mudah ditemukan melalui Google.',
  },
  {
    id: 'mobile-friendly',
    icon: 'Smartphone',
    title: 'Mobile Friendly',
    description: 'Website Anda akan tampil optimal di semua perangkat termasuk smartphone.',
  },
  {
    id: 'integrasi-whatsapp',
    icon: 'MessageCircle',
    title: 'Integrasi WhatsApp',
    description: 'Pelanggan dapat menghubungi bisnis Anda langsung dari website.',
  },
  {
    id: 'harga-transparan',
    icon: 'CreditCard',
    title: 'Harga Transparan',
    description: 'Tidak ada biaya tersembunyi. Semua paket dijelaskan dengan jelas sejak awal.',
  },
  {
    id: 'support-setelah-jadi',
    icon: 'Headphones',
    title: 'Support Setelah Website Jadi',
    description: 'Kami tetap membantu ketika Anda membutuhkan dukungan setelah website online.',
  },
  {
    id: 'konsultasi-gratis',
    icon: 'Phone',
    title: 'Konsultasi Gratis',
    description: 'Belum yakin website seperti apa yang dibutuhkan? Diskusikan terlebih dahulu tanpa biaya.',
  },
];
