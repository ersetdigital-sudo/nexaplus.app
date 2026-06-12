"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" className="bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl">
          Portfolio Kami
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={typeof item === "object" ? item : item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function PortfolioCard({ item }: { item: (typeof portfolioItems)[number] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group relative block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {/* Gradient placeholder with initial */}
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/30 via-sky-400/20 to-blue-600/30 transition-transform duration-300 group-hover:scale-105">
          <span className="text-4xl font-bold text-white/90">
            {item.name.charAt(0)}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <span className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white">
            Lihat Detail
          </span>
        </motion.div>
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.name}</h3>
        <Badge variant="outline">{item.category}</Badge>
      </div>
    </Link>
  );
}
