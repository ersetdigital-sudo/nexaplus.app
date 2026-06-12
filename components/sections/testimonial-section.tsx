"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { StarRating } from "@/components/shared/star-rating";
import { testimonials } from "@/data/testimonials";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return (parts[0]?.[0] ?? "").toUpperCase();
}

function TestimonialPhoto({ name, photo }: { name: string; photo: string }) {
  const [hasError, setHasError] = useState(false);
  const initials = getInitials(name);

  if (hasError) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-400 text-sm font-bold text-white ring-2 ring-white">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={photo}
      alt={`Foto ${name}`}
      width={48}
      height={48}
      className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
      onError={() => setHasError(true)}
    />
  );
}

export function TestimonialSection() {
  return (
    <SectionWrapper id="testimoni" className="bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-bold text-slate-900">
            Apa Kata Klien Kami
          </h2>
          <p className="mt-3 text-slate-600">
            Ratusan klien sudah mempercayakan pembuatan website mereka kepada NexaPlus.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Quote icon */}
              <Quote className="absolute right-5 top-5 h-8 w-8 text-blue-100" aria-hidden="true" />

              {/* Stars */}
              <StarRating rating={testimonial.rating} className="mb-4" />

              {/* Review text */}
              <p className="mb-6 text-sm leading-relaxed text-slate-700">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <TestimonialPhoto
                  name={testimonial.name}
                  photo={testimonial.photo}
                />
                <div>
                  <h3 className="!text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
