"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { faqItems } from "@/data/faq";
import { generateFAQSchema } from "@/lib/schema-markup";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const faqSchema = generateFAQSchema(faqItems);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper id="faq" className="bg-slate-50">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="font-bold text-slate-900">Pertanyaan Umum</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang layanan kami.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border bg-white transition-all ${
                  isOpen
                    ? "border-l-4 border-l-[#185FA5] border-gray-100 shadow-sm"
                    : "border-gray-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between p-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-gray-900 text-[15px] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-gray-500">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </SectionWrapper>
  );
}
