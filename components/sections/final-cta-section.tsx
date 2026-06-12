"use client";

import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export function FinalCtaSection() {
  return (
    <SectionWrapper
      id="kontak"
      className="bg-gradient-to-r from-blue-600 to-sky-500"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Bangun Aset Digital yang Benar-Benar Milik Anda.
        </h2>
        <p className="mb-4 text-lg text-white/80">
          Jangan hanya mengandalkan marketplace untuk mengembangkan bisnis.
          Miliki website profesional yang cepat, modern, dan siap membantu
          bisnis tumbuh lebih besar.
        </p>
        <p className="mb-8 text-sm text-white/70">
          Konsultasikan kebutuhan website Anda sekarang.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a
            href={getDefaultWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi Gratis via WhatsApp
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
