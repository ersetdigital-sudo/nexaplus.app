export interface PricingTier {
  id: string;
  name: string;
  targetAudience: string;
  price: string;
  features: string[];
  isRecommended: boolean;
  whatsappMessage: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    targetAudience: 'Landing Page',
    price: 'Rp 1.500.000',
    features: [
      'Desain 1 halaman responsif',
      'Optimasi SEO dasar',
      'Form kontak WhatsApp',
      'Hosting 1 tahun gratis',
      'SSL/HTTPS gratis',
    ],
    isRecommended: false,
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan paket Starter. Bisa info lebih lanjut?',
  },
  {
    id: 'professional',
    name: 'Professional',
    targetAudience: 'Company Profile',
    price: 'Rp 3.500.000',
    features: [
      'Desain hingga 5 halaman',
      'Optimasi SEO lengkap',
      'Integrasi Google Analytics',
      'Form kontak & WhatsApp',
      'Hosting 1 tahun gratis',
      'SSL/HTTPS gratis',
      'Revisi desain 3x',
    ],
    isRecommended: true,
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan paket Professional. Bisa info lebih lanjut?',
  },
  {
    id: 'business',
    name: 'Business',
    targetAudience: 'Website Toko Online',
    price: 'Rp 6.000.000',
    features: [
      'Desain hingga 10 halaman',
      'Sistem keranjang & checkout',
      'Integrasi payment gateway',
      'Dashboard admin produk',
      'Optimasi SEO lengkap',
      'Hosting 1 tahun gratis',
      'SSL/HTTPS gratis',
      'Support prioritas 6 bulan',
    ],
    isRecommended: false,
    whatsappMessage:
      'Halo NexaPlus, saya tertarik dengan paket Business. Bisa info lebih lanjut?',
  },
];
