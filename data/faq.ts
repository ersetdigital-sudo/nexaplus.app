export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa biaya pembuatan website?',
    answer:
      'Biaya menyesuaikan kebutuhan. Paket tersedia mulai Rp1.500.000 untuk landing page, Rp3.500.000 untuk company profile, dan Rp6.000.000 untuk toko online.',
  },
  {
    id: 'faq-2',
    question: 'Berapa lama proses pengerjaan?',
    answer:
      'Rata-rata 7 hingga 21 hari tergantung kompleksitas website yang dibutuhkan.',
  },
  {
    id: 'faq-3',
    question: 'Apakah website sudah SEO Friendly?',
    answer:
      'Ya. Struktur website telah dioptimalkan agar mudah ditemukan mesin pencari seperti Google.',
  },
  {
    id: 'faq-4',
    question: 'Apakah saya mendapatkan domain dan hosting?',
    answer:
      'Ya. Hosting dan SSL sudah termasuk pada semua paket yang tersedia selama 1 tahun pertama.',
  },
  {
    id: 'faq-5',
    question: 'Apakah website bisa dibuka di HP?',
    answer:
      'Tentu. Semua website dirancang responsif dan mobile friendly agar tampil optimal di semua perangkat.',
  },
  {
    id: 'faq-6',
    question: 'Apa manfaat memiliki website dibanding hanya berjualan di marketplace?',
    answer:
      'Website membantu bisnis membangun brand sendiri, memiliki data pelanggan, meningkatkan kredibilitas, dan mengurangi ketergantungan pada platform marketplace.',
  },
];
