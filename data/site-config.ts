export const siteConfig = {
  name: 'NexaPlus',
  url: 'https://nexaplus.app',
  whatsapp: {
    number: '6281234567890',
    defaultMessage: 'Halo NexaPlus, saya tertarik dengan jasa pembuatan website.',
  },
  meta: {
    title: 'Jasa Pembuatan Website Profesional | NexaPlus',
    description: 'Jasa pembuatan website profesional untuk UMKM, perusahaan, toko online, landing page dan company profile. SEO Friendly, cepat dan mobile friendly.',
    ogImage: '/images/og-image.jpg',
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
    email: 'hello@nexaplus.app',
    socialLinks: [
      { platform: 'Instagram', url: 'https://instagram.com/nexaplus.app', icon: 'instagram' },
      { platform: 'Facebook', url: 'https://facebook.com/nexaplus', icon: 'facebook' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/nexaplus', icon: 'linkedin' },
    ],
  },
} as const;
