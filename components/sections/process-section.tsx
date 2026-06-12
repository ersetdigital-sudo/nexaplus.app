"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { processSteps } from "@/data/process-steps";

export function ProcessSection() {
  return (
    <SectionWrapper id="proses" className="bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl">
          Proses Kerja Kami
        </h2>

        {/* Mobile: vertical timeline */}
        <div className="flex flex-col gap-8 md:hidden">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative flex gap-4">
              {/* Connecting line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-5 top-12 h-full w-px bg-blue-200" />
              )}

              {/* Numbered circle */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {step.number}
              </div>

              <div className="pb-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute left-[calc(8.33%+20px)] right-[calc(8.33%+20px)] top-5 h-px bg-blue-200" />

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative flex w-1/6 flex-col items-center text-center"
              >
                {/* Numbered circle */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-slate-900 lg:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 lg:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
