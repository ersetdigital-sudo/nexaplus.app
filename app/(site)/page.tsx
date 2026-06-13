import { HeroSection } from '@/components/sections/hero-section';
import { TrustSection } from '@/components/sections/trust-section';
import { ProblemSection } from '@/components/sections/problem-section';
import { SolutionSection } from '@/components/sections/solution-section';
import { LayananSection } from '@/components/sections/layanan-section';
import { BenefitsSection } from '@/components/sections/benefits-section';
import { TechStackSection } from '@/components/sections/tech-stack-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialSection } from '@/components/sections/testimonial-section';
import { FAQSection } from '@/components/sections/faq-section';
import { BlogSection } from '@/components/sections/blog-section';
import { FinalCtaSection } from '@/components/sections/final-cta-section';
import { generateServiceSchemas } from '@/lib/schema-markup';
import { services } from '@/data/services';

export default function Home() {
  const serviceSchemas = generateServiceSchemas(services);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas),
        }}
      />
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <LayananSection />
      <BenefitsSection />
      <TechStackSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialSection />
      <FAQSection />
      <FinalCtaSection />
      <BlogSection />
    </>
  );
}
