"use client";

import { MessageSquare, ClipboardList, Palette, Code2, RefreshCw, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { processSteps } from "@/data/process-steps";

const stepIcons = [MessageSquare, ClipboardList, Palette, Code2, RefreshCw, Rocket];
const stepColors = [
  "from-blue-500 to-blue-600",
  "from-sky-500 to-sky-600",
  "from-violet-500 to-violet-600",
  "from-indigo-500 to-indigo-600",
  "from-cyan-500 to-cyan-600",
  "from-emerald-500 to-emerald-600",
];

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
        <div className="mb-12 text-center">
          <h2 className="font-bold text-slate-900">
            Proses Pengerjaan yang Jelas
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            Dari konsultasi hingga launching, setiap tahap transparan dan terstruktur.
          </p>
        </div>

        {/* Steps grid — 2 cols on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            const gradient = stepColors[index];

            return (
              <motion.div
                key={step.number}
                className="relative flex flex-col items-center rounded-[12px] border border-[#E4E4E7] bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md md:p-6"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {/* Step number */}
                <span className="absolute -top-2.5 right-4 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-sm md:h-12 md:w-12`}>
                  <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="card-title mt-3 font-semibold text-slate-900">
                  {step.title}
                </h3>

                {/* Description — hidden on mobile for cleaner look, show on md+ */}
                <p className="mt-1.5 hidden text-xs leading-relaxed text-slate-500 md:block">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </SectionWrapper>
  );
}
