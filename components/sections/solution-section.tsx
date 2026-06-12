"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";

const benefits = [
  "Brand",
  "Produk",
  "Data pelanggan",
  "Strategi pemasaran",
  "Optimasi Google",
];

export function SolutionSection() {
  return (
    <SectionWrapper id="solusi" className="bg-slate-50">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-center font-bold text-slate-900">
          Saatnya Memiliki Aset Digital Sendiri.
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-base text-slate-600 md:text-lg">
          Website bukan sekadar tempat menampilkan produk. Website adalah pusat
          bisnis digital Anda.
        </p>

        {/* Benefits grid */}
        <div className="mx-auto mb-6 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="mb-8 text-sm text-slate-500">
          Tanpa bergantung pada algoritma marketplace.
        </p>

        <p className="mx-auto max-w-2xl text-base text-slate-700 md:text-lg">
          Dengan website yang tepat, bisnis terlihat lebih profesional, lebih
          dipercaya, dan lebih mudah ditemukan calon pelanggan.
        </p>
      </div>
    </SectionWrapper>
  );
}
