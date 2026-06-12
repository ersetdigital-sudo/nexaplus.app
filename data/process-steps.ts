export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Konsultasi Kebutuhan',
    description: 'Kami memahami tujuan dan kebutuhan bisnis Anda.',
  },
  {
    number: 2,
    title: 'Perencanaan',
    description: 'Menentukan struktur, fitur, dan tampilan website.',
  },
  {
    number: 3,
    title: 'Desain',
    description: 'Membuat tampilan yang sesuai dengan identitas bisnis.',
  },
  {
    number: 4,
    title: 'Pengembangan',
    description: 'Website dibangun dan dioptimalkan.',
  },
  {
    number: 5,
    title: 'Revisi',
    description: 'Penyempurnaan berdasarkan masukan Anda.',
  },
  {
    number: 6,
    title: 'Launching',
    description: 'Website siap digunakan dan dapat diakses publik.',
  },
];
