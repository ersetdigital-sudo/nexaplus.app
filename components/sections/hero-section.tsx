"use client";

import Image from "next/image";
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

            <p className="mt-4 text-base text-text-muted sm:text-lg md:mt-6 md:text-xl max-w-2xl">
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

          {/* Mockup Image — desktop only */}
          <div className="hidden md:block flex-1">
            <Image
              src="/images/hero-mockup.webp"
              alt="Contoh website profesional buatan NexaPlus"
              width={600}
              height={450}
              priority
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
