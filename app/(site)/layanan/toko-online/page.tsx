import type { Metadata } from "next";
import { TokoOnlineLanding } from "./landing";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Toko Online Profesional | NexaPlus",
  description:
    "Buat website toko online profesional untuk bisnis Anda. Mobile-first, SEO-ready, integrasi payment gateway & ongkir otomatis. Mulai dari Rp 1.500.000.",
  openGraph: {
    title: "Jasa Pembuatan Website Toko Online Profesional | NexaPlus",
    description:
      "Buat website toko online profesional untuk bisnis Anda. Mobile-first, SEO-ready, integrasi payment gateway & ongkir otomatis.",
    type: "website",
  },
  alternates: {
    canonical: "https://nexaplus.app/layanan/toko-online",
  },
};

export default function TokoOnlinePage() {
  return <TokoOnlineLanding />;
}
