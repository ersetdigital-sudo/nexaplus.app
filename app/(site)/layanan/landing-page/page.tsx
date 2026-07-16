import type { Metadata } from "next";
import { LandingPageLanding } from "./landing";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Landing Page Konversi Tinggi",
  description:
    "Jasa pembuatan landing page profesional untuk iklan, promosi, dan lead generation. Desain persuasif, loading cepat, form lead capture. Mulai dari Rp 500.000.",
  openGraph: {
    title: "Jasa Pembuatan Landing Page Konversi Tinggi | NexaPlus",
    description:
      "Jasa pembuatan landing page profesional untuk iklan, promosi, dan lead generation. Mulai dari Rp 500.000.",
    type: "website",
  },
  alternates: {
    canonical: "https://nexaplus.web.id/layanan/landing-page",
  },
};

export default function LandingPagePage() {
  return <LandingPageLanding />;
}
