import type { Metadata } from "next";
import { CompanyProfileLanding } from "./landing";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Company Profile Profesional | NexaPlus",
  description:
    "Jasa pembuatan website company profile profesional & modern. Desain custom, responsif di semua perangkat, SEO-ready, plus domain & hosting. Pengerjaan cepat, harga transparan. Konsultasi gratis.",
  keywords: [
    "jasa pembuatan website company profile",
    "jasa pembuatan website perusahaan",
    "website company profile",
    "jasa website profil perusahaan",
    "web design company profile",
    "jasa bikin website bisnis",
  ],
  openGraph: {
    title: "Jasa Pembuatan Website Company Profile Profesional | NexaPlus",
    description:
      "Website company profile modern yang menjual: desain custom, responsif, cepat, & SEO-ready. Plus domain, hosting, dan maintenance. Konsultasi gratis.",
    type: "website",
  },
  alternates: {
    canonical: "https://nexaplus.app/layanan/company-profile",
  },
};

export default function CompanyProfilePage() {
  return <CompanyProfileLanding />;
}
