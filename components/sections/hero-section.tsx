"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappUrl = getDefaultWhatsAppUrl();

  const handleScrollToHarga = () => {
    const el = document.getElementById("harga");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="beranda" className="py-20 md:py-28 lg:py-36">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-medium text-blue-700">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Berhenti Bergantung pada Marketplace
        </span>

        {/* Heading */}
        <h1 className="mt-6 font-extrabold leading-tight tracking-tight text-slate-900">
          Miliki Website Toko Online Sendiri yang Cepat, Profesional, dan Mudah Ditemukan di{" "}
          <span className="gradient-text">Google.</span>
        </h1>

        {/* Supporting paragraph */}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:mt-6 md:px-8 lg:text-xl">
          NexaPlus membantu UMKM dan seller marketplace membangun website toko
          online sendiri agar memiliki aset digital yang benar-benar dimiliki,
          lebih profesional, dan siap berkembang dalam jangka panjang.
        </p>

        {/* Price line */}
        <p className="mt-4 text-sm font-medium text-blue-600">
          Mulai dari Rp1.500.000
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4 md:mt-10">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={handleScrollToHarga}
          >
            Lihat Paket Harga
          </Button>
        </div>

        {/* Framed mockup image */}
        <div className="mt-12 w-full px-0 sm:px-0 md:mt-16">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-1.5 shadow-xl sm:rounded-3xl sm:p-3.5 md:p-4">
            {/* Inner "screenshot" area */}
            <div className="overflow-hidden rounded-xl bg-white">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="ml-3 h-4 flex-1 rounded bg-slate-200" />
              </div>

              {/* Mockup content */}
              <div className="space-y-4 p-4 sm:p-6 md:p-8">
                {/* Hero banner */}
                <div className="h-32 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 sm:h-40 md:h-48" />
                {/* Skeleton lines */}
                <div className="h-3 w-3/4 rounded bg-slate-200" />
                <div className="h-3 w-1/2 rounded bg-slate-100" />
                {/* Card grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
                  <div className="h-20 rounded-lg bg-slate-100 sm:h-24" />
                  <div className="h-20 rounded-lg bg-slate-100 sm:h-24" />
                  <div className="hidden h-24 rounded-lg bg-slate-100 sm:block" />
                </div>
                {/* Button skeleton */}
                <div className="h-9 w-36 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
