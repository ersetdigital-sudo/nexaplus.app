"use client";

import { Sparkles } from "lucide-react";
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
    <SectionWrapper id="beranda" className="py-20 md:py-28 lg:py-36">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-medium text-orange-700">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Dipercaya 80+ Bisnis di Indonesia
        </span>

        {/* Heading */}
        <h1 className="mt-6 font-extrabold leading-tight tracking-tight text-slate-900">
          Bisnis Anda Layak Punya Website Profesional yang Bekerja{" "}
          <span className="gradient-text">24 Jam.</span>
        </h1>

        {/* Supporting paragraph */}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:mt-6 md:px-8 lg:text-xl">
          NexaPlus adalah jasa pembuatan website profesional yang membantu bisnis
          tampil lebih terpercaya, mudah ditemukan di Google, dan siap menerima
          pelanggan kapan saja. Kami urus semuanya dari awal sampai online,
          sehingga Anda bisa fokus mengembangkan bisnis.
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
            onClick={handleScrollToLayanan}
          >
            Lihat Layanan
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
