"use client";

import {
  Zap,
  Palette,
  Search,
  Smartphone,
  MessageCircle,
  CreditCard,
  Headphones,
  Phone,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedCard } from "@/components/shared/animated-card";
import { benefits } from "@/data/benefits";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Palette,
  Search,
  Smartphone,
  MessageCircle,
  CreditCard,
  Headphones,
  Phone,
};

export function BenefitsSection() {
  return (
    <SectionWrapper id="keunggulan">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-bold text-slate-900">
          Mengapa Memilih NexaPlus?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];

            return (
              <AnimatedCard
                key={benefit.id}
                className="p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-orange-200/50"
                hoverScale={1.05}
              >
                <div className="flex flex-col gap-3">
                  {Icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                      <Icon
                        className="h-5 w-5 text-orange-600"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <h3 className="card-title font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
