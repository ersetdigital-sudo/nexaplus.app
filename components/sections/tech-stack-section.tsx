import { SectionWrapper } from "@/components/shared/section-wrapper";
import { LogoCloud } from "@/components/logo-cloud";

export function TechStackSection() {
  return (
    <SectionWrapper id="teknologi" className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="text-center font-bold text-slate-900">
          Website Cepat, Modern, dan SEO Friendly
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-600 md:text-base">
          Dibangun menggunakan teknologi web terkini untuk menghadirkan performa
          maksimal, keamanan yang lebih baik, dan pengalaman pengguna yang nyaman
          di semua perangkat.
        </p>
        <div className="mt-10">
          <LogoCloud />
        </div>
      </div>
    </SectionWrapper>
  );
}
