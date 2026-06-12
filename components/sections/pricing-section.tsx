"use client";

import { Check } from "lucide-react";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { pricingTiers } from "@/data/pricing";
import { buildPricingWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <SectionWrapper id="harga" className="bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center font-bold text-slate-900">
          Paket Harga Transparan, Tanpa Biaya Tersembunyi
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base text-slate-600">
          Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda. Semua
          paket sudah termasuk hosting 1 tahun dan SSL gratis.
        </p>

        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => {
            const whatsappUrl = buildPricingWhatsAppUrl(tier.name);

            return (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col rounded-xl border p-6 transition-all",
                  tier.isRecommended
                    ? "border-blue-600 bg-white shadow-lg shadow-blue-200/60 ring-2 ring-blue-100 md:scale-105"
                    : "border-slate-200 bg-white shadow-sm"
                )}
              >
                {tier.isRecommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                    Populer
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {tier.targetAudience}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-slate-900">
                    {tier.price}
                  </span>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-auto inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    tier.isRecommended
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  )}
                >
                  Pilih Paket
                </a>
              </div>
            );
          })}
        </div>

        {/* Custom note */}
        <p className="mt-10 text-center text-sm text-slate-600">
          Butuh paket custom atau kebutuhan khusus (sekolah, pemerintahan,
          organisasi)? Konsultasikan dulu — kami buatkan penawaran sesuai
          kebutuhan Anda.
        </p>
      </div>
    </SectionWrapper>
  );
}
