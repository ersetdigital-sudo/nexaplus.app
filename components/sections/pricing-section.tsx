"use client";

import { Check } from "lucide-react";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { pricingTiers } from "@/data/pricing";
import { buildPricingWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <SectionWrapper id="harga">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Paket Harga
        </h2>

        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => {
            const whatsappUrl = buildPricingWhatsAppUrl(tier.name);

            return (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col rounded-xl border p-6 backdrop-blur-sm transition-all",
                  tier.isRecommended
                    ? "scale-[1.02] border-blue-500 bg-white/5 shadow-lg shadow-blue-500/10 md:scale-105"
                    : "border-white/8 bg-white/3"
                )}
              >
                {tier.isRecommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                    Populer
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    {tier.targetAudience}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    {tier.price}
                  </span>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-auto inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors",
                    tier.isRecommended
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "border border-white/20 bg-white/5 hover:bg-white/10"
                  )}
                >
                  Pilih Paket
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
