"use client";

import { MessageSquare, ClipboardList, Palette, Code2, RefreshCw, Rocket } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { processSteps } from "@/data/process-steps";

const stepIcons = [MessageSquare, ClipboardList, Palette, Code2, RefreshCw, Rocket];

export function ProcessSection() {
  return (
    <SectionWrapper id="proses" className="bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl">
            Proses Pengerjaan yang Jelas
          </h2>
        </div>

        {/* Desktop: card grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200"
              >
                {/* Step number badge */}
                <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                  {step.number}
                </div>

                <div className="mt-3 flex flex-col items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="flex flex-col gap-0 md:hidden">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div key={step.number} className="relative flex gap-4 pb-8 last:pb-0">
                {/* Vertical line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-[22px] top-12 h-[calc(100%-48px)] w-0.5 bg-blue-100" />
                )}

                {/* Icon circle */}
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="pt-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-600">Step {step.number}</span>
                  </div>
                  <h3 className="mt-0.5 text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
