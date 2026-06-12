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
        <h2 className="mb-12 text-center text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl">
          Pertanyaan Umum
        </h2>

        <Accordion type="single" collapsible>
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left text-slate-900">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </SectionWrapper>
  );
}
