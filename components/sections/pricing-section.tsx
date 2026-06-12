"use client";

import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { pricingTiers } from "@/data/pricing";
import { buildPricingWhatsAppUrl } from "@/lib/whatsapp";

export function PricingSection() {
  return (
    <SectionWrapper id="harga" className="bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="font-bold text-slate-900">Paket Harga Transparan</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            Tanpa biaya tersembunyi. Semua paket termasuk hosting 1 tahun dan SSL gratis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-start">
          {pricingTiers.map((tier) => {
            const url = buildPricingWhatsAppUrl(tier.name);
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-[12px] border p-6 transition-shadow ${
                  tier.isRecommended
                    ? "border-blue-600 shadow-lg shadow-blue-100/60 ring-1 ring-blue-100"
                    : "border-[#E4E4E7] shadow-sm"
                }`}
              >
                {tier.isRecommended && (
                  <div className="absolute -top-px left-0 right-0 h-1 rounded-t-[12px] bg-gradient-to-r from-blue-600 to-sky-400" />
                )}
                {tier.isRecommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-0.5 text-[11px] font-medium text-white shadow-sm">
                    Paling Populer
                  </span>
                )}

                <div className="mb-5">
                  <h3 className="card-title-lg font-bold text-slate-900">{tier.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{tier.targetAudience}</p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-sm text-slate-500"> /proyek</span>
                </div>

                <ul className="mb-6 flex flex-1 flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                      <span className="text-[13px] text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto flex h-11 w-full items-center justify-center rounded-[6px] text-sm font-medium transition-colors ${
                    tier.isRecommended
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-[#E4E4E7] bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Konsultasi Paket
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Butuh paket custom? Konsultasikan kebutuhan Anda — kami buatkan penawaran sesuai kebutuhan.
        </p>
      </div>
    </SectionWrapper>
  );
}
