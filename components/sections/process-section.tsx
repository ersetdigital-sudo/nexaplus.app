"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { processSteps } from "@/data/process-steps";

export function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Proses Pembuatan Website di NexaPlus",
    "description": "Langkah-langkah pembuatan website profesional bersama NexaPlus dari konsultasi hingga launching.",
    "step": processSteps.map((step) => ({
      "@type": "HowToStep",
      "position": step.number,
      "name": step.title,
      "text": step.description,
    })),
  };

  return (
    <SectionWrapper id="proses" className="bg-white">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Proses
          </span>
          <h2 className="mt-2 font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
            Proses Pengerjaan yang Jelas
          </h2>
        </div>

        {/* Steps grid — 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Number circle */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-base font-bold text-slate-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </SectionWrapper>
  );
}
