"use client";

import { useState } from "react";
import Image from "next/image";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedCard } from "@/components/shared/animated-card";
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
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={photo}
      alt={`Foto ${name}`}
      width={56}
      height={56}
      className="rounded-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}

export function TestimonialSection() {
  return (
    <SectionWrapper id="testimoni">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Apa Kata Klien Kami
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <AnimatedCard key={testimonial.id} className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <TestimonialPhoto
                    name={testimonial.name}
                    photo={testimonial.photo}
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-white/60">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <StarRating rating={testimonial.rating} />

                <p className="text-sm leading-relaxed text-white/70">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
