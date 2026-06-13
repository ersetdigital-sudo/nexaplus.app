import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/breadcrumb";

export const metadata: Metadata = {
  title: "Tentang Kami — NexaPlus | Jasa Pembuatan Website Profesional",
  description:
    "NexaPlus adalah jasa pembuatan website profesional yang membantu UMKM, organisasi, sekolah, dan berbagai jenis bisnis memiliki website modern, cepat, dan SEO friendly.",
  alternates: {
    canonical: "https://nexaplus.app/tentang-kami",
  },
  openGraph: {
    title: "Tentang Kami — NexaPlus",
    description:
      "Jasa pembuatan website profesional untuk UMKM, organisasi, dan bisnis di Indonesia. Partner digital terpercaya sejak hari pertama.",
    url: "https://nexaplus.app/tentang-kami",
  },
};

const misi = [
  "Membantu bisnis memiliki website yang profesional dan mudah digunakan.",
  "Menghadirkan solusi digital yang cepat, modern, dan SEO Friendly.",
  "Memberikan layanan yang transparan, responsif, dan berorientasi pada hasil.",
  "Mendukung pertumbuhan UMKM dan organisasi melalui teknologi yang tepat guna.",
];

export default function TentangKamiPage() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Breadcrumb
            variant="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Tentang Kami" },
            ]}
          />
        </div>
        {/* Heading */}
        <h1 className="font-extrabold tracking-tight text-slate-900 text-3xl md:text-4xl">
          Tentang NexaPlus
        </h1>

        {/* Body */}
        <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
          <p>
            NexaPlus adalah jasa pembuatan website profesional yang membantu
            UMKM, organisasi, sekolah, dan berbagai jenis bisnis memiliki
            website yang modern, cepat, dan mudah ditemukan di Google.
          </p>
          <p>
            Kami percaya bahwa setiap bisnis layak memiliki aset digital
            sendiri. Website bukan hanya sekadar media informasi, tetapi juga
            menjadi pusat bisnis digital yang membantu membangun kepercayaan
            pelanggan, memperkuat brand, dan membuka peluang pertumbuhan jangka
            panjang.
          </p>
          <p>
            Dengan memadukan desain profesional, teknologi modern, dan
            pendekatan yang berfokus pada kebutuhan bisnis, kami membantu klien
            membangun website yang tidak hanya terlihat menarik, tetapi juga
            memberikan manfaat nyata.
          </p>
          <p>
            Mulai dari landing page, company profile, toko online, website
            sekolah, hingga sistem bisnis yang lebih kompleks, setiap proyek
            dikerjakan dengan perhatian terhadap kualitas, performa, dan
            pengalaman pengguna.
          </p>
          <p className="font-medium text-slate-800">
            Di NexaPlus, kami tidak hanya membuat website. Kami membantu bisnis
            tampil lebih profesional, lebih dipercaya, dan lebih siap berkembang
            di era digital.
          </p>
        </div>

        {/* Visi */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">Visi</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
            Menjadi partner digital terpercaya bagi bisnis dan organisasi di
            Indonesia dalam membangun kehadiran online yang profesional dan
            berkelanjutan.
          </p>
        </div>

        {/* Misi */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">Misi</h2>
          <ul className="mt-4 space-y-3">
            {misi.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-base text-slate-600 md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-xl border border-blue-100 bg-blue-50 px-6 py-6 text-center">
          <p className="text-base font-medium text-slate-800 md:text-lg">
            Siap membangun website untuk bisnis Anda?
          </p>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/6281573059442?text=Halo%20NexaPlus%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-[6px] bg-blue-600 px-5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Konsultasi Gratis
            </a>
            <Link
              href="/#layanan"
              className="inline-flex h-10 items-center rounded-[6px] border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-50 transition-colors"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
