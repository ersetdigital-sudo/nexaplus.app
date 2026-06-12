export interface Benefit {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    id: 'desain-profesional',
    icon: 'Palette',
    title: 'Desain Profesional',
    description: 'Tampilan modern dan elegan yang mencerminkan kredibilitas bisnis Anda.',
  },
  {
    id: 'mobile-friendly',
    icon: 'Smartphone',
    title: 'Mobile Friendly',
    description: 'Tampil sempurna di semua perangkat mobile dengan navigasi yang nyaman.',
  },
  {
    id: 'seo-friendly',
    icon: 'Search',
    title: 'SEO Friendly',
    description: 'Dioptimasi untuk mesin pencari agar bisnis Anda mudah ditemukan online.',
  },
  {
    id: 'fast-loading',
    icon: 'Zap',
    title: 'Fast Loading',
    description: 'Kecepatan loading optimal untuk pengalaman pengguna terbaik.',
  },
  {
    id: 'keamanan-tinggi',
    icon: 'Shield',
    title: 'Keamanan Tinggi',
    description: 'Perlindungan SSL dan keamanan berlapis untuk data website Anda.',
  },
  {
    id: 'support-whatsapp',
    icon: 'MessageCircle',
    title: 'Support WhatsApp',
    description: 'Integrasi WhatsApp untuk komunikasi langsung dengan pelanggan.',
  },
  {
    id: 'gratis-konsultasi',
    icon: 'Headphones',
    title: 'Gratis Konsultasi',
    description: 'Konsultasi gratis untuk memahami kebutuhan website bisnis Anda.',
  },
  {
    id: 'responsive-semua-device',
    icon: 'Monitor',
    title: 'Responsive di Semua Device',
    description: 'Menyesuaikan tampilan di desktop, tablet, dan smartphone secara otomatis.',
  },
];
