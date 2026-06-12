"use client";

import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export function FinalCtaSection() {
  return (
    <SectionWrapper id="kontak" className="bg-slate-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-bold text-white">
          Bangun Aset Digital yang Benar-Benar Milik Anda.
        </h2>
        <p className="mt-5 text-base text-slate-300 md:text-lg">
          Jangan hanya mengandalkan marketplace untuk mengembangkan bisnis.
          Miliki website profesional yang cepat, modern, dan siap membantu
          bisnis tumbuh lebih besar.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Konsultasikan kebutuhan website Anda sekarang.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a
              href={getDefaultWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi Gratis via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
