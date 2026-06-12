"use client";

import { Fingerprint, Database, Search, Coins, Megaphone, Settings } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const benefits = [
  { icon: Fingerprint, title: "Brand Milik Sendiri", desc: "Bangun identitas brand yang kuat tanpa tertutupi nama marketplace." },
  { icon: Database, title: "Data Pelanggan Sendiri", desc: "Miliki database pelanggan untuk remarketing dan loyalitas jangka panjang." },
  { icon: Search, title: "Optimasi Google (SEO)", desc: "Website Anda bisa muncul di halaman pertama Google secara organik." },
  { icon: Coins, title: "Bebas Biaya Komisi", desc: "Tidak ada potongan penjualan. Semua keuntungan 100% milik Anda." },
  { icon: Megaphone, title: "Promosi Tanpa Batas", desc: "Jalankan kampanye marketing tanpa dibatasi algoritma platform." },
  { icon: Settings, title: "Kendali Penuh Bisnis", desc: "Atur tampilan, harga, dan strategi bisnis sesuai keinginan Anda." },
];

export function SolutionSection() {
  return (
    <SectionWrapper id="solusi" className="bg-slate-50">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="font-bold text-slate-900">
            Saatnya Memiliki Aset Digital Sendiri.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Website bukan sekadar tempat menampilkan produk. Website adalah pusat bisnis digital yang memberikan kendali penuh kepada Anda.
          </p>
        </div>

        {/* 6 cards: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group rounded-[8px] border border-[#E4E4E7] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-150 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06)] hover:border-blue-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="card-title mt-3 font-semibold text-slate-900">{b.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{b.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Kendalikan bisnis Anda sendiri tanpa bergantung pada perubahan algoritma atau biaya admin marketplace.
        </p>
      </div>
    </SectionWrapper>
  );
}
