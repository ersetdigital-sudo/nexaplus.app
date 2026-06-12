"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { generateFAQSchema } from "@/lib/schema-markup";

export function FAQSection() {
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <SectionWrapper id="faq" className="bg-slate-50">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center font-bold text-slate-900">
          Pertanyaan Umum
        </h2>

        {/* Accordion wrapper with shared border + radius */}
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Accordion type="single" collapsible>
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </SectionWrapper>
  );
}
