"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { portfolioItems } from "@/data/portfolio";

// Map slug to live URL for screenshot API
const siteUrls: Record<string, string> = {
  'octaf-kreasi': 'https://octafkreasi.com',
  'erset-store': 'https://ersetstore.vercel.app',
  'oos-shop': 'https://oos-shop.com',
};

function getScreenshotUrl(slug: string): string | null {
  const url = siteUrls[slug];
  if (!url) return null;
  // Using microlink screenshot API (free, no key needed)
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

export function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" className="bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-bold text-slate-900">
          Portfolio Kami
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function PortfolioCard({ item }: { item: (typeof portfolioItems)[number] }) {
  const [isHovered, setIsHovered] = useState(false);
  const screenshotUrl = getScreenshotUrl(item.slug);

  return (
    <Link
      href={item.url ? item.url : `/portfolio/${item.slug}`}
      target={item.url ? "_blank" : undefined}
      rel={item.url ? "noopener noreferrer" : undefined}
      className="group relative block overflow-hidden rounded-[8px] border border-[#E4E4E7] bg-white shadow-sm transition-shadow hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Browser mockup frame */}
      <div className="bg-slate-50 p-1.5">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 rounded-t-md bg-slate-100 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <div className="ml-2 h-3 flex-1 rounded bg-slate-200" />
        </div>

        {/* Screenshot area */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-md bg-white">
          {screenshotUrl ? (
            <img
              src={screenshotUrl}
              alt={`Screenshot ${item.name}`}
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-sky-50 transition-transform duration-300 group-hover:scale-105">
              <div className="text-center">
                <span className="block text-3xl font-bold text-blue-600/60">
                  {item.name.charAt(0)}
                </span>
                <span className="mt-1 block text-xs text-slate-400">
                  {item.name}
                </span>
              </div>
            </div>
          )}

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="rounded-[6px] bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm">
              {item.url ? "Kunjungi Website" : "Lihat Detail"}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Info */}
      <div className="px-4 py-3">
        <h3 className="card-title-lg font-semibold text-slate-900">{item.name}</h3>
        <Badge variant="outline" className="mt-1.5">{item.category}</Badge>
      </div>
    </Link>
  );
}
