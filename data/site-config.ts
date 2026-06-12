export const siteConfig = {
  name: 'NexaPlus',
  url: 'https://nexaplus.app',
  whatsapp: {
    number: '6281573059442',
    defaultMessage: 'Halo NexaPlus, saya tertarik dengan jasa pembuatan website.',
  },
  meta: {
    title: 'Jasa Pembuatan Website Profesional untuk Bisnis | NexaPlus',
    description: 'NexaPlus adalah jasa pembuatan website profesional di Indonesia. Melayani toko online, landing page, company profile, website sekolah, dan organisasi. Mulai dari Rp 500.000, termasuk hosting dan SSL gratis.',
    ogImage: '/images/og-image.jpg',
  },
  address: {
    street: 'Jalan Mayor Hadi No 10',
    city: 'Sumedang',
    region: 'Jawa Barat',
    postalCode: '45381',
    country: 'ID',
  },
  colors: {
    background: '#0A0118',
    primary: '#6366F1',
    secondary: '#EC4899',
    accent: '#06B6D4',
    text: '#FFFFFF',
  },
  fonts: {
    primary: 'Inter',
  },
  contact: {
    phone: '+6281573059442',
    email: 'hello@nexaplus.app',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/nexaplus.app/', icon: 'instagram' },
      { platform: 'Facebook', url: 'https://facebook.com/nexaplus', icon: 'facebook' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/nexaplus', icon: 'linkedin' },
    ],
  },
} as const;
