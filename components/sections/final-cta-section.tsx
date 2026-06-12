"use client";

import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export function FinalCtaSection() {
  return (
    <SectionWrapper
      id="kontak"
      className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Siap Memiliki Website Profesional?
        </h2>
        <p className="mb-8 text-lg text-white/80">
          Konsultasikan kebutuhan website Anda sekarang dan dapatkan penawaran
          terbaik.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a
            href={getDefaultWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat WhatsApp Sekarang
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
