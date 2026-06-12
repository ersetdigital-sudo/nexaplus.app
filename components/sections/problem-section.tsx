"use client";

import { AlertTriangle, TrendingUp, Database, ShieldX } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedCard } from "@/components/shared/animated-card";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Risiko Suspend Akun",
    explanation:
      "Akun marketplace bisa disuspend kapan saja tanpa peringatan yang jelas.",
  },
  {
    icon: TrendingUp,
    title: "Biaya Marketplace Naik",
    explanation:
      "Potongan dan biaya iklan marketplace terus meningkat setiap tahun.",
  },
  {
    icon: Database,
    title: "Sulit Bangun Database",
    explanation:
      "Data pelanggan dimiliki marketplace, bukan Anda sebagai penjual.",
  },
  {
    icon: ShieldX,
    title: "Tidak Punya Aset Digital",
    explanation:
      "Toko di marketplace bukan aset, sewaktu-waktu bisa hilang.",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper id="masalah">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl">
          Masih Bergantung Pada Marketplace?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
          Solusinya? Miliki website sendiri sebagai aset digital jangka panjang
          yang sepenuhnya Anda kendalikan.
        </p>
      </div>
    </SectionWrapper>
  );
}
