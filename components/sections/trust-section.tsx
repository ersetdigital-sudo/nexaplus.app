"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";

const clientLogos = [
  "Client 1",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5",
  "Client 6",
];

const trustBadges = [
  "Website Cepat",
  "Mobile Friendly",
  "SEO Friendly",
  "Hosting & SSL Gratis Tahun Pertama",
  "Support WhatsApp",
];

export function TrustSection() {
  return (
    <SectionWrapper id="trust" className="bg-slate-50 py-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-sm text-slate-600 md:text-base">
          Dipercaya oleh berbagai UMKM, organisasi, sekolah, dan bisnis yang
          ingin tampil lebih profesional di era digital.
        </p>
        <div className="flex items-center gap-6 overflow-x-auto px-4 md:justify-center md:overflow-x-visible md:px-0">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="flex h-12 w-28 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-100"
              role="img"
              aria-label={`Logo ${name}`}
            >
              <span className="text-xs text-slate-400">{name}</span>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
