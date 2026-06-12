export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa lama proses pembuatan website?',
    answer:
      'Proses pembuatan website memakan waktu 7 hingga 14 hari kerja tergantung kompleksitas proyek. Website sederhana seperti landing page bisa selesai dalam 7 hari, sementara toko online membutuhkan waktu lebih lama untuk integrasi fitur.',
  },
  {
    id: 'faq-2',
    question: 'Apakah website sudah termasuk hosting dan domain?',
    answer:
      'Ya, semua paket sudah termasuk hosting premium selama 1 tahun dan SSL gratis. Untuk domain, kami bantu proses pembelian dan konfigurasi. Perpanjangan hosting dan domain dilakukan setiap tahun dengan biaya terpisah.',
  },
  {
    id: 'faq-3',
    question: 'Apakah website bisa diedit sendiri setelah jadi?',
    answer:
      'Tentu bisa. Kami menyediakan panel admin yang mudah digunakan untuk mengelola konten seperti produk, artikel, dan gambar. Kami juga memberikan panduan lengkap agar Anda bisa mengupdate website secara mandiri.',
  },
  {
    id: 'faq-4',
    question: 'Apakah website sudah SEO friendly?',
    answer:
      'Ya, semua website yang kami buat sudah dioptimasi untuk SEO. Termasuk struktur heading yang benar, meta tag, kecepatan loading optimal, dan mobile friendly. Ini membantu website Anda lebih mudah ditemukan di Google.',
  },
  {
    id: 'faq-5',
    question: 'Bagaimana sistem pembayarannya?',
    answer:
      'Pembayaran dilakukan dalam dua tahap. Tahap pertama sebesar 50% di awal sebagai tanda jadi. Sisanya 50% dibayarkan setelah website selesai dan Anda menyetujui hasilnya. Kami menerima transfer bank dan e-wallet.',
  },
  {
    id: 'faq-6',
    question: 'Apakah ada garansi setelah website selesai?',
    answer:
      'Kami memberikan garansi maintenance selama 30 hari setelah website diluncurkan. Selama periode ini, kami memperbaiki bug dan melakukan penyesuaian minor tanpa biaya tambahan. Support teknis tetap tersedia setelah masa garansi.',
  },
];
