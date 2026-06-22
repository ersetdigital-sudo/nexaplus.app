"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappUrl = getDefaultWhatsAppUrl();

  const handleScrollToLayanan = () => {
    const el = document.getElementById("layanan");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="beranda" className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — Text content */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-700">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
            Dipercaya 80+ Bisnis
          </span>

          {/* Heading */}
          <h1 className="mt-6 font-extrabold leading-[1.1] tracking-tight text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
            Website Profesional yang Bekerja{" "}
            <span className="text-orange-500">24 Jam</span> untuk Anda.
          </h1>

          {/* Supporting paragraph */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
            Tampil lebih terpercaya, ditemukan di Google, dan layani pelanggan tanpa henti. Dibangun cepat, modern, dan SEO friendly.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              onClick={handleScrollToLayanan}
            >
              Lihat Layanan
            </Button>
          </div>
        </div>

        {/* Right — Hero mockup image */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/images/hero-mockup.png"
            alt="Contoh website profesional yang dibuat oleh NexaPlus"
            width={700}
            height={500}
            className="w-full h-auto rounded-xl"
            priority
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-12 mx-auto max-w-4xl rounded-2xl bg-slate-900 px-6 py-5 md:mt-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-slate-700">
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl font-bold text-white md:text-3xl">80+</span>
            <span className="mt-1 text-xs text-slate-400 md:text-sm">Bisnis Terbantu</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl font-bold text-white md:text-3xl">7-21</span>
            <span className="mt-1 text-xs text-slate-400 md:text-sm">Hari Pengerjaan</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl font-bold text-orange-400 md:text-3xl">1 Tahun</span>
            <span className="mt-1 text-xs text-slate-400 md:text-sm">Hosting + SSL Gratis</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl font-bold text-white md:text-3xl">24/7</span>
            <span className="mt-1 text-xs text-slate-400 md:text-sm">Online Tanpa Henti</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
