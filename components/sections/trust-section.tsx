"use client";

import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const trustPoints = [
  "Website Cepat",
  "Mobile Friendly",
  "SEO Friendly",
  "Hosting & SSL Gratis Tahun Pertama",
  "Support WhatsApp",
];

export function TrustSection() {
  return (
    <SectionWrapper id="trust" className="bg-slate-50 py-10 lg:py-14">
      <div className="mx-auto max-w-4xl">
        <p className="mb-6 text-center text-sm text-slate-500 md:text-base">
          Dipercaya oleh berbagai UMKM, organisasi, sekolah, dan bisnis yang
          ingin tampil lebih profesional di era digital.
        </p>

        {/* Trust points — wrapping badges, no horizontal scroll */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          {trustPoints.map((point) => (
            <span
              key={point}
              className="inline-flex items-center gap-1.5 text-sm text-slate-700"
            >
              <Check className="h-4 w-4 text-blue-600" aria-hidden="true" />
              {point}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
