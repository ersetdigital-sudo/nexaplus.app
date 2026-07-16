export interface PricingPackage {
  id: string;
  service: string;
  tier: string;
  price: string;
  priceNumeric: number | null; // null = custom
  duration: string;
  suitedFor: string;
  href: string;
  popular?: boolean;
  features: string[];
  whatsappMessage: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'landing-page',
    service: 'Landing Page',
    tier: 'Basic',
    price: 'Rp 500.000',
    priceNumeric: 500000,
    duration: '3-5 hari kerja',
    suitedFor: 'Promosi produk, event, atau kampanye iklan',
    href: '/layanan/landing-page',
    features: [
      '1 halaman konversi tinggi',
      'Desain responsif mobile-first',
      'Form lead / tombol WhatsApp',
      'Copywriting dasar',
      'Hosting 1 tahun',
      'SSL gratis',
    ],
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan paket Landing Page Basic. Bisa info lebih lanjut?',
  },
  {
    id: 'landing-page-premium',
    service: 'Landing Page',
    tier: 'Premium',
    price: 'Rp 1.500.000',
    priceNumeric: 1500000,
    duration: '5-7 hari kerja',
    suitedFor: 'Bisnis yang serius beriklan dan butuh konversi maksimal',
    href: '/layanan/landing-page',
    features: [
      'Hingga 3 section variant untuk A/B testing',
      'Desain custom sesuai brand',
      'Integrasi pixel iklan (Meta/Google)',
      'Copywriting persuasif lengkap',
      'Domain custom (.com)',
      'Hosting 1 tahun + SSL gratis',
    ],
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan paket Landing Page Premium. Bisa info lebih lanjut?',
  },
  {
    id: 'toko-online-starter',
    service: 'Website Toko Online',
    tier: 'Starter',
    price: 'Rp 1.500.000',
    priceNumeric: 1500000,
    duration: '7-14 hari kerja',
    suitedFor: 'UMKM & bisnis baru yang mulai jualan online',
    href: '/layanan/toko-online',
    features: [
      'Hingga 50 produk',
      'Desain responsif mobile-first',
      'Integrasi 1 payment gateway',
      'Cek ongkir otomatis',
      'Domain custom (.com)',
      'Hosting 1 tahun + SSL gratis',
    ],
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan paket Starter Website Toko Online. Bisa info lebih lanjut?',
  },
  {
    id: 'toko-online-professional',
    service: 'Website Toko Online',
    tier: 'Professional',
    price: 'Rp 3.500.000',
    priceNumeric: 3500000,
    duration: '14-21 hari kerja',
    suitedFor: 'Bisnis yang ingin scale dengan fitur lengkap',
    href: '/layanan/toko-online',
    popular: true,
    features: [
      'Produk unlimited',
      'Multi payment gateway',
      'Dashboard admin lengkap',
      'Cek ongkir 15+ kurir',
      'SEO on-page setup',
      'Free support 30 hari',
    ],
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan paket Professional Website Toko Online. Bisa info lebih lanjut?',
  },
  {
    id: 'company-profile-basic',
    service: 'Company Profile',
    tier: 'Basic',
    price: 'Rp 2.500.000',
    priceNumeric: 2500000,
    duration: '7-14 hari kerja',
    suitedFor: 'Perusahaan yang butuh kehadiran online profesional',
    href: '/layanan/company-profile',
    features: [
      'Hingga 5 halaman',
      'Desain custom sesuai brand',
      'Halaman layanan & portofolio',
      'Form kontak + WhatsApp',
      'SEO-ready',
      'Hosting 1 tahun + SSL gratis',
    ],
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan paket Company Profile Basic. Bisa info lebih lanjut?',
  },
  {
    id: 'company-profile-premium',
    service: 'Company Profile',
    tier: 'Premium',
    price: 'Rp 5.000.000',
    priceNumeric: 5000000,
    duration: '14-21 hari kerja',
    suitedFor: 'Perusahaan yang ingin website korporat lengkap',
    href: '/layanan/company-profile',
    features: [
      'Hingga 12 halaman',
      'Desain premium + animasi',
      'Blog / berita perusahaan',
      'Multi bahasa (opsional)',
      'SEO on-page lengkap',
      'Free support 30 hari',
    ],
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan paket Company Profile Premium. Bisa info lebih lanjut?',
  },
  {
    id: 'website-sekolah',
    service: 'Website Sekolah',
    tier: 'Standar',
    price: 'Rp 2.000.000',
    priceNumeric: 2000000,
    duration: '7-14 hari kerja',
    suitedFor: 'Sekolah & lembaga pendidikan',
    href: '/layanan/website-sekolah',
    features: [
      'Profil sekolah & visi misi',
      'Pengumuman & berita',
      'Galeri kegiatan',
      'Form pendaftaran siswa (PPDB)',
      'Data guru & staf',
      'Hosting 1 tahun + SSL gratis',
    ],
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan paket Website Sekolah Standar. Bisa info lebih lanjut?',
  },
  {
    id: 'custom',
    service: 'Pemerintahan / Organisasi / Sistem Custom',
    tier: 'Custom',
    price: 'Sesuai kebutuhan',
    priceNumeric: null,
    duration: 'Menyesuaikan scope',
    suitedFor: 'Instansi pemerintahan, organisasi, POS kasir, inventory, booking',
    href: '/#layanan',
    features: [
      'Analisis kebutuhan gratis',
      'Fitur custom sesuai workflow',
      'Integrasi sistem eksternal',
      'Training penggunaan',
      'Maintenance opsional',
      'Penawaran transparan di awal',
    ],
    whatsappMessage:
      'Halo NexaPlus, saya butuh website/sistem custom. Bisa konsultasi?',
  },
];

export interface ComparisonRow {
  feature: string;
  landingPage: string | boolean;
  tokoOnline: string | boolean;
  companyProfile: string | boolean;
  websiteSekolah: string | boolean;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Harga mulai', landingPage: 'Rp 500rb', tokoOnline: 'Rp 1,5jt', companyProfile: 'Rp 2,5jt', websiteSekolah: 'Rp 2jt' },
  { feature: 'Estimasi pengerjaan', landingPage: '3-5 hari', tokoOnline: '7-14 hari', companyProfile: '7-14 hari', websiteSekolah: '7-14 hari' },
  { feature: 'Jumlah halaman', landingPage: '1 halaman', tokoOnline: 'Sesuai fitur', companyProfile: '5-12 halaman', websiteSekolah: 'Sesuai fitur' },
  { feature: 'Desain responsif mobile', landingPage: true, tokoOnline: true, companyProfile: true, websiteSekolah: true },
  { feature: 'Hosting + SSL 1 tahun', landingPage: true, tokoOnline: true, companyProfile: true, websiteSekolah: true },
  { feature: 'Domain custom (.com)', landingPage: 'Premium', tokoOnline: true, companyProfile: true, websiteSekolah: true },
  { feature: 'Payment gateway', landingPage: false, tokoOnline: true, companyProfile: false, websiteSekolah: false },
  { feature: 'Cek ongkir otomatis', landingPage: false, tokoOnline: true, companyProfile: false, websiteSekolah: false },
  { feature: 'Dashboard admin', landingPage: false, tokoOnline: true, companyProfile: 'Premium', websiteSekolah: true },
  { feature: 'Blog / berita', landingPage: false, tokoOnline: false, companyProfile: 'Premium', websiteSekolah: true },
  { feature: 'Form pendaftaran (PPDB)', landingPage: false, tokoOnline: false, companyProfile: false, websiteSekolah: true },
  { feature: 'SEO on-page setup', landingPage: 'Dasar', tokoOnline: true, companyProfile: true, websiteSekolah: true },
  { feature: 'Free support setelah launch', landingPage: '14 hari', tokoOnline: '30 hari', companyProfile: '30 hari', websiteSekolah: '30 hari' },
];

export const pricingFaq = [
  {
    question: 'Berapa biaya pembuatan website di NexaPlus?',
    answer:
      'Biaya pembuatan website di NexaPlus mulai dari Rp 500.000 untuk landing page, Rp 1.500.000 untuk website toko online, Rp 2.000.000 untuk website sekolah, dan Rp 2.500.000 untuk company profile. Semua paket sudah termasuk hosting dan SSL gratis tahun pertama.',
  },
  {
    question: 'Apakah ada biaya bulanan atau biaya tersembunyi?',
    answer:
      'Tidak ada biaya tersembunyi. Harga paket sudah final dan transparan di awal. Biaya berulang hanya perpanjangan domain dan hosting mulai tahun kedua, serta maintenance bulanan yang sifatnya opsional.',
  },
  {
    question: 'Apa saja yang sudah termasuk dalam harga paket?',
    answer:
      'Semua paket termasuk desain responsif mobile-first, hosting 1 tahun, SSL gratis, dan free support setelah website live. Paket tertentu juga termasuk domain custom, payment gateway, dashboard admin, dan SEO on-page setup.',
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer:
      'Pembayaran dilakukan bertahap: DP 50% di awal untuk memulai pengerjaan, dan pelunasan 50% setelah website selesai dan disetujui sebelum go-live.',
  },
  {
    question: 'Berapa lama proses pembuatan website?',
    answer:
      'Landing page selesai dalam 3-5 hari kerja, website toko online dan company profile 7-14 hari kerja, dan proyek dengan fitur lengkap hingga 21 hari kerja. Timeline disepakati di awal sebelum pengerjaan dimulai.',
  },
];
