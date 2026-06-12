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
    <SectionWrapper id="layanan" className="bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-bold text-slate-900">
          Solusi Website untuk Berbagai Kebutuhan
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            const whatsappUrl = buildServiceWhatsAppUrl(service.title);

            return (
              <AnimatedCard
                key={service.id}
                className="group relative overflow-hidden p-6 transition-all duration-300 hover:border-blue-300"
              >
                <div className="flex flex-col gap-4">
                  {Icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                      <Icon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <h3 className="card-title-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex h-11 w-fit items-center rounded-lg bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-700"
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
