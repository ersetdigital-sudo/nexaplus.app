"use client";

import { AlertTriangle, TrendingUp, Database, ShieldX, RefreshCw } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedCard } from "@/components/shared/animated-card";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Pelanggan Mengingat Marketplace",
    explanation:
      "Pelanggan lebih mengingat marketplace daripada brand Anda.",
  },
  {
    icon: TrendingUp,
    title: "Biaya Admin Terus Naik",
    explanation:
      "Biaya admin terus bertambah setiap tahun.",
  },
  {
    icon: Database,
    title: "Data Pelanggan Bukan Milik Anda",
    explanation:
      "Data pelanggan tidak sepenuhnya Anda miliki.",
  },
  {
    icon: ShieldX,
    title: "Persaingan Harga Ketat",
    explanation:
      "Persaingan harga semakin ketat.",
  },
  {
    icon: RefreshCw,
    title: "Algoritma Bisa Berubah Kapan Saja",
    explanation:
      "Satu perubahan algoritma bisa langsung memengaruhi penjualan.",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper id="masalah">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center font-bold text-slate-900">
          Marketplace Bagus untuk Memulai. Tapi Tidak Ideal untuk Selamanya.
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-base text-slate-600 md:text-lg">
          Banyak pemilik usaha mengalami hal yang sama. Anda sudah mengeluarkan
          biaya iklan. Anda sudah mengumpulkan banyak pelanggan. Anda sudah
          membangun reputasi toko. Namun pada akhirnya:
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <AnimatedCard key={point.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <Icon className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-slate-900">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-600">{point.explanation}</p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        <p className="mt-10 rounded-xl border border-blue-100 bg-blue-50 px-6 py-5 text-center text-base text-slate-700 md:text-lg">
          Jika bisnis ingin berkembang lebih besar, memiliki website sendiri
          bukan lagi pilihan tambahan. Itu kebutuhan.
        </p>
      </div>
    </SectionWrapper>
  );
}
