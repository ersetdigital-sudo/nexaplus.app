"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { StarRating } from "@/components/shared/star-rating";
import { testimonials } from "@/data/testimonials";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return (parts[0]?.[0] ?? "").toUpperCase();
}

function TestimonialPhoto({ name, photo }: { name: string; photo: string }) {
  const [hasError, setHasError] = useState(false);
  const initials = getInitials(name);

  if (hasError) {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-sky-400 text-sm font-bold text-white">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={photo}
      alt={`Foto ${name}`}
      width={44}
      height={44}
      className="h-11 w-11 rounded-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}

export function TestimonialSection() {
  return (
    <SectionWrapper id="testimoni" className="bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-bold text-slate-900">Apa Kata Klien Kami</h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Ratusan klien sudah mempercayakan pembuatan website mereka kepada NexaPlus.
          </p>
        </div>

        {/* Mobile: horizontal scroll snap */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:hidden">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="min-w-[280px] max-w-[300px] snap-start rounded-[8px] border border-[#E4E4E7] bg-white p-5 shadow-sm flex-shrink-0"
            >
              <Quote className="h-6 w-6 text-orange-100 mb-3" aria-hidden="true" />
              <StarRating rating={t.rating} className="mb-3" />
              <p className="text-[13px] leading-relaxed text-slate-700 mb-4">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 border-t border-slate-100 pt-3">
                <TestimonialPhoto name={t.name} photo={t.photo} />
                <div>
                  <p className="!text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-[8px] border border-[#E4E4E7] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="h-6 w-6 text-orange-100 mb-3" aria-hidden="true" />
              <StarRating rating={t.rating} className="mb-3" />
              <p className="text-[13px] leading-relaxed text-slate-700 mb-4">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 border-t border-slate-100 pt-3">
                <TestimonialPhoto name={t.name} photo={t.photo} />
                <div>
                  <p className="!text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
