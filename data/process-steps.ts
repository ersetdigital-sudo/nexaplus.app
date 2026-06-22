export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Konsultasi',
    description: 'Diskusi kebutuhan dan tujuan bisnis Anda secara gratis.',
  },
  {
    number: 2,
    title: 'Penawaran',
    description: 'Rincian fitur, timeline, dan harga yang transparan.',
  },
  {
    number: 3,
    title: 'Desain',
    description: 'Mockup tampilan website disusun sesuai brand Anda.',
  },
  {
    number: 4,
    title: 'Development',
    description: 'Website dibangun dengan teknologi modern dan cepat.',
  },
  {
    number: 5,
    title: 'Revisi',
    description: 'Penyesuaian hingga hasil sesuai dengan harapan Anda.',
  },
  {
    number: 6,
    title: 'Launch',
    description: 'Website online, plus hosting & SSL gratis tahun pertama.',
  },
];
