"use client";

import { Fingerprint, Database, Search, Coins, Megaphone, Settings } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const benefits = [
  { icon: Fingerprint, title: "Brand Lebih Profesional", desc: "Bangun identitas brand yang kuat dan terpercaya di mata pelanggan." },
  { icon: Search, title: "Muncul di Pencarian Google", desc: "Website Anda bisa ditemukan calon pelanggan melalui pencarian organik." },
  { icon: Database, title: "Data Pelanggan Milik Sendiri", desc: "Kumpulkan data pelanggan untuk remarketing dan loyalitas jangka panjang." },
  { icon: Coins, title: "Tanpa Biaya Komisi", desc: "Tidak ada potongan penjualan. Semua keuntungan 100% milik Anda." },
  { icon: Megaphone, title: "Bebas dari Algoritma Platform", desc: "Kembangkan bisnis tanpa bergantung pada perubahan aturan marketplace." },
  { icon: Settings, title: "Kendali Penuh Bisnis", desc: "Atur tampilan, harga, dan strategi bisnis sesuai kebutuhan Anda." },
];

export function SolutionSection() {
  return (
    <SectionWrapper id="solusi" className="bg-slate-50">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="font-bold text-slate-900">
            Solusi yang Lebih Baik
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Website bukan hanya tempat menampilkan produk atau layanan. Website
            adalah pusat bisnis digital yang bekerja 24 jam untuk membantu calon
            pelanggan mengenal, mempercayai, dan menghubungi bisnis Anda.
          </p>
        </div>

        {/* 6 cards: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group rounded-[8px] border border-[#E4E4E7] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-150 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06)] hover:border-orange-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="card-title mt-3 font-semibold text-slate-900">{b.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{b.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Kami membantu mulai dari perencanaan, desain, pengembangan, hingga website siap digunakan.
        </p>
      </div>
    </SectionWrapper>
  );
}
