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

export function TrustSection() {
  return (
    <SectionWrapper id="trust" className="py-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-sm text-white/60 md:text-base">
          Dipercaya oleh berbagai bisnis dan organisasi
        </p>
        <div className="flex items-center gap-6 overflow-x-auto px-4 md:justify-center md:overflow-x-visible md:px-0">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="flex h-12 w-28 shrink-0 items-center justify-center rounded-lg bg-white/5 opacity-60"
              role="img"
              aria-label={`Logo ${name}`}
            >
              <span className="text-xs text-white/50">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
