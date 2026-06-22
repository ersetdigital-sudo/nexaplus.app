"use client";

import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section id="kontak" className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-xl" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-400/15 blur-lg" />
        <div className="pointer-events-none absolute right-20 top-8 h-32 w-32 rounded-full bg-orange-300/10" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
            Siap Punya Website yang Bekerja{" "}
            <span className="text-orange-400">24 Jam</span> untuk Anda?
          </h2>
          <p className="mt-5 text-base text-slate-400 sm:text-lg">
            Konsultasi gratis, tanpa komitmen. Mari wujudkan website impian bisnis Anda.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="rounded-full bg-orange-500 hover:bg-orange-600 text-white">
              <a
                href={getDefaultWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi Gratis via WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            nexaplus.com · Dibuat dengan teknologi modern
          </p>
        </div>
      </div>
    </section>
  );
}
