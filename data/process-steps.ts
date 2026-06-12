export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Konsultasi',
    description: 'Diskusi kebutuhan dan tujuan website Anda bersama tim ahli kami.',
  },
  {
    number: 2,
    title: 'Perencanaan',
    description: 'Menyusun struktur, fitur, dan timeline pengerjaan website.',
  },
  {
    number: 3,
    title: 'Desain',
    description: 'Membuat desain UI/UX yang menarik sesuai identitas brand Anda.',
  },
  {
    number: 4,
    title: 'Development',
    description: 'Pengembangan website dengan teknologi modern dan performa tinggi.',
  },
  {
    number: 5,
    title: 'Revisi',
    description: 'Penyesuaian berdasarkan feedback hingga sesuai harapan Anda.',
  },
  {
    number: 6,
    title: 'Launching',
    description: 'Website siap online dengan domain, hosting, dan dukungan teknis.',
  },
];
