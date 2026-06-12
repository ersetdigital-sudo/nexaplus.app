"use client";

import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappUrl = getDefaultWhatsAppUrl();

  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper id="beranda" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Jasa Pembuatan Website Profesional untuk{" "}
              <span className="gradient-text">Bisnis Modern</span>
            </h1>

            <p className="mt-4 text-base text-slate-600 sm:text-lg md:mt-6 md:text-xl max-w-2xl">
              Kami membantu UMKM, seller marketplace dan perusahaan memiliki
              website profesional yang cepat, SEO Friendly dan menghasilkan lebih
              banyak pelanggan.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <Button asChild size="lg" variant="default">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi Gratis
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleScrollToPortfolio}
              >
                Lihat Portfolio
              </Button>
            </div>
          </div>

          {/* Mockup — CSS browser illustration, desktop only */}
          <div className="hidden md:block flex-1">
            <div className="relative">
              {/* Glow behind mockup */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-sky-400/20 blur-2xl" />

              {/* Browser window */}
              <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                {/* Browser top bar */}
                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-3 h-5 flex-1 rounded-md bg-slate-200" />
                </div>

                {/* Browser content */}
                <div className="space-y-4 p-6">
                  {/* Hero block */}
                  <div className="h-28 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400" />
                  {/* Text lines */}
                  <div className="h-3 w-3/4 rounded bg-slate-200" />
                  <div className="h-3 w-1/2 rounded bg-slate-100" />
                  {/* Card grid */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="h-20 rounded-lg bg-slate-100" />
                    <div className="h-20 rounded-lg bg-slate-100" />
                    <div className="h-20 rounded-lg bg-slate-100" />
                  </div>
                  {/* Button */}
                  <div className="h-9 w-32 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
