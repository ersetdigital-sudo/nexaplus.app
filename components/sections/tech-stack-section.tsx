import { SectionWrapper } from "@/components/shared/section-wrapper";
import { LogoCloud } from "@/components/logo-cloud";

export function TechStackSection() {
  return (
    <SectionWrapper id="teknologi" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-white md:text-3xl">
          Dibangun dengan Teknologi Modern
        </h2>
        <p className="mb-10 text-center text-sm text-text-muted md:text-base">
          Kami menggunakan stack terkini untuk website yang cepat, aman, dan tahan lama.
        </p>
        <LogoCloud />
      </div>
    </SectionWrapper>
  );
}
