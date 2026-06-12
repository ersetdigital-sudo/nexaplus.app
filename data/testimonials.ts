export interface Testimonial {
  id: string;
  name: string;
  position: string;
  photo: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Ahmad Fauzi',
    position: 'Owner Toko Elektronik Online',
    photo: '/images/testimonials/ahmad-fauzi.webp',
    review:
      'Website toko online dari NexaPlus sangat profesional dan cepat. Penjualan saya meningkat 40% sejak punya website sendiri. Tim support juga responsif.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Siti Rahayu',
    position: 'Marketing Manager PT Maju Bersama',
    photo: '/images/testimonials/siti-rahayu.webp',
    review:
      'Company profile yang dibuat NexaPlus benar-benar merepresentasikan brand kami. Desainnya modern dan loading-nya sangat cepat. Klien kami terkesan.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Budi Santoso',
    position: 'Pemilik UMKM Kerajinan Tangan',
    photo: '/images/testimonials/budi-santoso.webp',
    review:
      'Awalnya ragu karena budget terbatas, tapi hasilnya luar biasa. Landing page saya terlihat mahal dan profesional. Proses konsultasi juga sangat membantu.',
    rating: 4,
  },
  {
    id: 'testimonial-4',
    name: 'Diana Putri',
    position: 'Kepala Humas SD Negeri 5',
    photo: '/images/testimonials/diana-putri.webp',
    review:
      'Website sekolah kami jadi lebih informatif dan mudah diakses oleh orang tua murid. NexaPlus memahami kebutuhan institusi pendidikan dengan baik.',
    rating: 5,
  },
  {
    id: 'testimonial-5',
    name: 'Rina Maharani',
    position: 'Owner Skincare Brand',
    photo: '/images/testimonials/rina-maharani.webp',
    review:
      'Landing page dari NexaPlus berhasil meningkatkan konversi penjualan kami hingga 3x lipat. Desainnya menarik dan loading-nya sangat cepat.',
    rating: 5,
  },
  {
    id: 'testimonial-6',
    name: 'Hendra Wijaya',
    position: 'CEO Startup Logistik',
    photo: '/images/testimonials/hendra-wijaya.webp',
    review:
      'Tim NexaPlus sangat profesional dan komunikatif. Website company profile kami jadi terlihat premium dan kredibel di mata investor.',
    rating: 5,
  },
];
