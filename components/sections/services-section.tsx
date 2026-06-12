"use client";

import {
  ShoppingCart,
  Layout,
  Building2,
  GraduationCap,
  Landmark,
  Users,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedCard } from "@/components/shared/animated-card";
import { services } from "@/data/services";
import { buildServiceWhatsAppUrl } from "@/lib/whatsapp";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingCart,
  Layout,
  Building2,
  GraduationCap,
  Landmark,
  Users,
};

export function ServicesSection() {
  return (
    <SectionWrapper id="layanan">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Layanan Pembuatan Website
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            const whatsappUrl = buildServiceWhatsAppUrl(service.title);

            return (
              <AnimatedCard
                key={service.id}
                className="group relative overflow-hidden p-6 transition-all duration-300 hover:border-indigo-500/50"
              >
                <div className="flex flex-col gap-4">
                  {Icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
                      <Icon
                        className="h-6 w-6 text-indigo-400"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex h-11 w-fit items-center rounded-lg bg-indigo-500 px-6 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
                  >
                    Konsultasi Gratis
                  </a>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
