export type BlogCategory =
  | 'SEO'
  | 'Website'
  | 'Bisnis Online'
  | 'UMKM'
  | 'Toko Online';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedDate: Date;
  coverImage: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'tips-seo-website-bisnis-2024',
    title: 'Tips SEO Website Bisnis agar Tampil di Halaman Pertama Google',
    excerpt:
      'Pelajari strategi SEO terbaru untuk meningkatkan visibilitas website bisnis Anda di mesin pencari Google secara organik.',
    category: 'SEO',
    publishedDate: new Date('2024-12-15'),
    coverImage: '/images/blog/tips-seo-2024.webp',
    content: `## Tips SEO Website Bisnis agar Tampil di Halaman Pertama Google

Optimasi SEO adalah kunci agar website bisnis Anda mudah ditemukan calon pelanggan melalui Google. Berikut tips yang bisa langsung diterapkan.

### 1. Riset Kata Kunci yang Tepat

Gunakan tools seperti Google Keyword Planner untuk menemukan kata kunci yang banyak dicari oleh target audiens Anda. Fokus pada long-tail keyword yang spesifik dengan kompetisi rendah.

### 2. Optimasi On-Page

Pastikan setiap halaman memiliki meta title dan meta description yang mengandung kata kunci utama. Gunakan heading (H1-H6) secara hierarkis dan sertakan alt text pada semua gambar.

### 3. Kecepatan Loading Website

Google memprioritaskan website yang loading-nya cepat. Kompres gambar, gunakan lazy loading, dan pilih hosting berkualitas untuk memastikan website Anda memuat dalam waktu kurang dari 3 detik.

### 4. Mobile Friendly

Lebih dari 70% pencarian di Indonesia dilakukan melalui smartphone. Pastikan website Anda responsif dan nyaman diakses dari perangkat mobile.

### 5. Konten Berkualitas

Buat konten yang menjawab pertanyaan audiens Anda. Konten yang informatif dan bermanfaat akan mendapatkan ranking lebih baik di Google.`,
  },
  {
    slug: 'pentingnya-website-untuk-umkm',
    title: 'Mengapa UMKM Harus Punya Website di Era Digital',
    excerpt:
      'Website bukan lagi kemewahan bagi UMKM. Simak alasan mengapa bisnis kecil perlu hadir online dengan website profesional.',
    category: 'UMKM',
    publishedDate: new Date('2024-12-10'),
    coverImage: '/images/blog/umkm-website.webp',
    content: `## Mengapa UMKM Harus Punya Website di Era Digital

Di era digital, memiliki website adalah investasi penting bagi UMKM untuk bersaing dan berkembang.

### Kredibilitas Bisnis

Website profesional meningkatkan kepercayaan calon pelanggan terhadap bisnis Anda. Konsumen cenderung lebih percaya pada bisnis yang memiliki website resmi dibanding yang hanya mengandalkan media sosial.

### Jangkauan Lebih Luas

Dengan website, bisnis Anda bisa ditemukan oleh siapa saja di seluruh Indonesia bahkan dunia. Tidak terbatas oleh lokasi geografis seperti toko fisik.

### Aset Digital Milik Sendiri

Berbeda dengan marketplace atau media sosial, website adalah aset digital yang sepenuhnya milik Anda. Tidak ada risiko akun ditutup atau perubahan algoritma yang merugikan.

### Katalog Produk 24 Jam

Website berfungsi sebagai etalase digital yang buka 24 jam. Pelanggan bisa melihat produk dan layanan Anda kapan saja tanpa batasan waktu.

### Investasi Jangka Panjang

Biaya pembuatan website relatif terjangkau dibanding manfaat jangka panjang yang didapatkan. ROI dari website terus meningkat seiring pertumbuhan bisnis Anda.`,
  },
  {
    slug: 'cara-memilih-jasa-pembuatan-website',
    title: 'Cara Memilih Jasa Pembuatan Website yang Tepat',
    excerpt:
      'Jangan asal pilih jasa web developer. Ketahui kriteria penting yang harus diperhatikan sebelum memilih vendor website.',
    category: 'Website',
    publishedDate: new Date('2024-12-05'),
    coverImage: '/images/blog/pilih-jasa-website.webp',
    content: `## Cara Memilih Jasa Pembuatan Website yang Tepat

Memilih jasa pembuatan website yang tepat adalah keputusan penting untuk kesuksesan bisnis online Anda.

### Lihat Portfolio

Periksa hasil kerja sebelumnya. Portfolio menunjukkan kualitas desain, variasi proyek, dan kemampuan teknis developer.

### Perhatikan Teknologi yang Digunakan

Pastikan vendor menggunakan teknologi modern yang menghasilkan website cepat, aman, dan mudah di-maintain. Hindari yang masih menggunakan platform jadul.

### Layanan After-Sales

Tanyakan apakah ada garansi, support teknis, dan maintenance setelah website jadi. Website butuh perawatan rutin untuk keamanan dan performa optimal.

### Transparansi Harga

Vendor terpercaya memberikan rincian harga yang jelas. Waspadai biaya tersembunyi yang baru muncul di tengah proses pengerjaan.

### Komunikasi yang Baik

Pilih vendor yang responsif dan mudah dihubungi. Komunikasi yang baik memastikan proyek berjalan sesuai ekspektasi dan timeline.`,
  },
  {
    slug: 'strategi-jualan-online-tanpa-marketplace',
    title: 'Strategi Jualan Online Tanpa Bergantung Marketplace',
    excerpt:
      'Lepas dari ketergantungan marketplace dengan membangun toko online sendiri. Simak strategi lengkapnya di sini.',
    category: 'Bisnis Online',
    publishedDate: new Date('2024-11-28'),
    coverImage: '/images/blog/jualan-tanpa-marketplace.webp',
    content: `## Strategi Jualan Online Tanpa Bergantung Marketplace

Marketplace memang memudahkan, tapi ketergantungan berlebihan bisa merugikan bisnis Anda dalam jangka panjang.

### Bangun Website Toko Online Sendiri

Investasikan dalam website toko online yang profesional. Anda memiliki kontrol penuh atas branding, data pelanggan, dan margin keuntungan tanpa potongan marketplace.

### Manfaatkan SEO untuk Traffic Organik

Optimasi SEO memungkinkan toko online Anda ditemukan langsung di Google. Traffic organik lebih berkualitas karena pengunjung sudah mencari produk spesifik yang Anda jual.

### Bangun Email List

Kumpulkan email pelanggan untuk komunikasi langsung. Email marketing memiliki ROI tertinggi dibanding channel marketing lainnya.

### Aktif di Media Sosial

Gunakan media sosial untuk mengarahkan traffic ke website Anda. Buat konten yang menarik dan sertakan link ke toko online Anda.

### Kolaborasi dengan Influencer

Bekerja sama dengan micro-influencer di niche Anda untuk meningkatkan brand awareness dan mengarahkan audiens mereka ke website toko online Anda.`,
  },
  {
    slug: 'fitur-wajib-toko-online-2024',
    title: 'Fitur Wajib yang Harus Ada di Toko Online Anda',
    excerpt:
      'Toko online tanpa fitur ini akan kehilangan pelanggan. Pastikan website e-commerce Anda sudah memiliki semuanya.',
    category: 'Toko Online',
    publishedDate: new Date('2024-11-20'),
    coverImage: '/images/blog/fitur-toko-online.webp',
    content: `## Fitur Wajib yang Harus Ada di Toko Online Anda

Toko online yang sukses bukan hanya soal tampilan menarik, tapi juga kelengkapan fitur yang memudahkan pelanggan berbelanja.

### Sistem Keranjang Belanja

Fitur keranjang memungkinkan pelanggan memilih beberapa produk sekaligus sebelum checkout. Pastikan prosesnya intuitif dan mudah dipahami.

### Payment Gateway Terintegrasi

Sediakan berbagai metode pembayaran: transfer bank, e-wallet, kartu kredit, dan virtual account. Semakin banyak opsi, semakin tinggi konversi.

### Pencarian dan Filter Produk

Pelanggan harus bisa menemukan produk dengan cepat melalui fitur search dan filter berdasarkan kategori, harga, atau atribut lainnya.

### Halaman Produk yang Informatif

Setiap produk harus memiliki foto berkualitas, deskripsi lengkap, harga jelas, stok tersedia, dan review dari pembeli sebelumnya.

### Responsive Design

Mayoritas pembeli online menggunakan smartphone. Toko online Anda harus tampil sempurna dan mudah digunakan di semua ukuran layar.

### Tracking Pesanan

Berikan fitur pelacakan pesanan agar pelanggan bisa memantau status pengiriman barang mereka secara real-time.`,
  },
  {
    slug: 'optimasi-kecepatan-website-untuk-seo',
    title: 'Cara Optimasi Kecepatan Website untuk Ranking SEO',
    excerpt:
      'Kecepatan website mempengaruhi ranking di Google. Pelajari teknik optimasi yang efektif untuk performa maksimal.',
    category: 'SEO',
    publishedDate: new Date('2024-11-15'),
    coverImage: '/images/blog/optimasi-kecepatan.webp',
    content: `## Cara Optimasi Kecepatan Website untuk Ranking SEO

Google menjadikan kecepatan website sebagai salah satu faktor penentu ranking. Website yang lambat tidak hanya merugikan SEO tapi juga membuat pengunjung pergi.

### Kompres dan Optimasi Gambar

Gambar adalah penyebab utama website lambat. Gunakan format WebP, kompres tanpa mengurangi kualitas, dan terapkan lazy loading untuk gambar di bawah fold.

### Gunakan CDN

Content Delivery Network menyajikan konten website dari server terdekat dengan pengunjung. Ini secara signifikan mengurangi waktu loading terutama untuk pengunjung dari berbagai lokasi.

### Minifikasi CSS dan JavaScript

Hapus spasi, komentar, dan karakter tidak perlu dari file CSS dan JavaScript. Gunakan tools build modern yang otomatis melakukan minifikasi.

### Pilih Hosting Berkualitas

Hosting murah sering kali lambat dan tidak stabil. Investasikan dalam hosting premium dengan SSD storage dan lokasi server di Indonesia untuk kecepatan optimal.

### Implementasi Caching

Aktifkan browser caching dan server-side caching agar pengunjung yang kembali tidak perlu mengunduh ulang semua resource. Ini meningkatkan kecepatan loading secara drastis.`,
  },
];
