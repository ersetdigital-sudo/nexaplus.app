import type { Metadata } from "next";
import { WebsiteSekolahLanding } from "./landing";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Sekolah Profesional",
  description:
    "Jasa pembuatan website sekolah modern: profil sekolah, pengumuman, galeri kegiatan, data guru, dan form PPDB online. Mulai dari Rp 2.000.000 termasuk hosting + SSL.",
  openGraph: {
    title: "Jasa Pembuatan Website Sekolah Profesional | NexaPlus",
    description:
      "Website sekolah modern dengan profil, pengumuman, galeri, dan form PPDB online. Mulai dari Rp 2.000.000.",
    type: "website",
  },
  alternates: {
    canonical: "https://nexaplus.web.id/layanan/website-sekolah",
  },
};

export default function WebsiteSekolahPage() {
  return <WebsiteSekolahLanding />;
}
