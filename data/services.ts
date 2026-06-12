export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    id: 'website-toko-online',
    icon: 'ShoppingCart',
    title: 'Website Toko Online',
    description:
      'Toko online profesional dengan fitur keranjang belanja, payment gateway, dan manajemen produk yang mudah digunakan.',
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan layanan Website Toko Online. Bisa konsultasi?',
  },
  {
    id: 'landing-page',
    icon: 'Layout',
    title: 'Landing Page',
    description:
      'Halaman landing yang dirancang untuk meningkatkan konversi dengan desain menarik dan CTA yang efektif.',
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan layanan Landing Page. Bisa konsultasi?',
  },
  {
    id: 'company-profile',
    icon: 'Building2',
    title: 'Company Profile',
    description:
      'Website company profile elegan yang menampilkan visi, misi, layanan, dan portofolio perusahaan Anda secara profesional.',
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan layanan Company Profile. Bisa konsultasi?',
  },
  {
    id: 'website-sekolah',
    icon: 'GraduationCap',
    title: 'Website Sekolah',
    description:
      'Website sekolah modern dengan fitur informasi akademik, pengumuman, dan portal siswa yang terintegrasi.',
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan layanan Website Sekolah. Bisa konsultasi?',
  },
  {
    id: 'website-pemerintahan',
    icon: 'Landmark',
    title: 'Website Pemerintahan',
    description:
      'Website resmi pemerintahan yang transparan, informatif, dan sesuai standar aksesibilitas publik.',
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan layanan Website Pemerintahan. Bisa konsultasi?',
  },
  {
    id: 'website-organisasi',
    icon: 'Users',
    title: 'Website Organisasi',
    description:
      'Website organisasi yang menampilkan kegiatan, anggota, dan informasi penting untuk komunitas Anda.',
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan layanan Website Organisasi. Bisa konsultasi?',
  },
];
