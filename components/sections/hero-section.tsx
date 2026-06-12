"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappUrl = getDefaultWhatsAppUrl();

  const handleScrollToHarga = () => {
    const el = document.getElementById("harga");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="beranda" className="py-20 md:py-28 lg:py-36">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-medium text-blue-700">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Berhenti Bergantung pada Marketplace
        </span>

        {/* Heading */}
        <h1 className="mt-6 font-extrabold leading-tight tracking-tight text-slate-900">
          Miliki Website Toko Online Sendiri yang Cepat, Profesional, dan Mudah Ditemukan di{" "}
          <span className="gradient-text">Google.</span>
        </h1>

        {/* Supporting paragraph */}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:mt-6 md:px-8 lg:text-xl">
          NexaPlus membantu UMKM dan seller marketplace membangun website toko
          online sendiri agar memiliki aset digital yang benar-benar dimiliki,
          lebih profesional, dan siap berkembang dalam jangka panjang.
        </p>

        {/* Price line */}
        <p className="mt-4 text-sm font-medium text-blue-600">
          Mulai dari Rp1.500.000
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4 md:mt-10">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={handleScrollToHarga}
          >
            Lihat Paket Harga
          </Button>
        </div>

        {/* Framed mockup image */}
        <div className="mt-12 w-full px-0 sm:px-0 md:mt-16">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-1.5 shadow-xl sm:rounded-3xl sm:p-3.5 md:p-4">
            {/* Inner "screenshot" area */}
            <div className="overflow-hidden rounded-xl bg-white">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="ml-3 flex h-5 flex-1 items-center rounded-md bg-white px-3 border border-slate-200">
                  <svg className="h-3 w-3 text-green-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 00-6 0V9h6z" clipRule="evenodd"/></svg>
                  <span className="text-[11px] text-slate-400">tokoonline.co.id</span>
                </div>
              </div>

              {/* Mockup content - realistic website */}
              <div className="p-0">
                {/* Mini navbar */}
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5 sm:px-6">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white">S</span>
                    </div>
                    <span className="text-xs font-bold text-slate-900">ShopNesia</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4">
                    <span className="text-[11px] text-slate-500">Kategori</span>
                    <span className="text-[11px] text-slate-500">Promo</span>
                    <span className="text-[11px] text-slate-500">Tentang</span>
                    <div className="flex h-5 w-32 items-center rounded-full bg-slate-100 px-2">
                      <span className="text-[10px] text-slate-400">🔍 Cari produk...</span>
                    </div>
                    <span className="text-[11px] text-slate-600">🛒</span>
                  </div>
                </div>

                {/* Hero banner */}
                <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 px-5 py-6 sm:px-8 sm:py-10 md:py-12">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 sm:h-40 sm:w-40" />
                  <div className="absolute right-12 bottom-0 h-20 w-20 rounded-full bg-white/5 sm:h-28 sm:w-28" />
                  <div className="relative max-w-md">
                    <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm sm:text-xs">⚡ Flash Sale - Diskon s/d 70%</span>
                    <p className="mt-2 text-sm font-extrabold text-white leading-tight sm:text-lg md:text-xl">Belanja Mudah,<br/>Harga Paling Hemat!</p>
                    <p className="mt-1.5 text-[10px] text-blue-100 sm:text-xs">Gratis ongkir seluruh Indonesia. Bayar di tempat tersedia.</p>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-md bg-white px-3 py-1 text-[10px] font-bold text-blue-600 shadow-sm sm:text-xs">Belanja Sekarang</span>
                      <span className="rounded-md border border-white/40 px-3 py-1 text-[10px] font-medium text-white sm:text-xs">Lihat Promo</span>
                    </div>
                  </div>
                </div>

                {/* Product section */}
                <div className="px-4 py-4 sm:px-6 sm:py-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-900 sm:text-sm">🔥 Produk Terlaris</span>
                    <span className="text-[10px] text-blue-600 font-medium sm:text-xs">Lihat Semua →</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
                    {[
                      { color: "from-sky-100 to-blue-50", name: "Wireless Earbuds", price: "Rp 285.000", disc: "-37%" },
                      { color: "from-purple-100 to-violet-50", name: "Smart Watch Pro", price: "Rp 425.000", disc: "-35%" },
                      { color: "from-rose-100 to-pink-50", name: "Power Bank 20K", price: "Rp 189.000", disc: "-40%" },
                      { color: "from-amber-100 to-yellow-50", name: "LED Ring Light", price: "Rp 145.000", disc: "-28%" },
                    ].map((item) => (
                      <div key={item.name} className="rounded-xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                        <div className={`relative h-14 bg-gradient-to-br ${item.color} flex items-center justify-center sm:h-20`}>
                          <div className="h-8 w-8 rounded-lg bg-white/50 sm:h-12 sm:w-12" />
                          <span className="absolute left-1 top-1 rounded bg-red-500 px-1 py-0.5 text-[7px] font-bold text-white sm:text-[8px]">{item.disc}</span>
                        </div>
                        <div className="p-2 sm:p-2.5">
                          <p className="text-[9px] font-medium text-slate-800 truncate sm:text-[11px]">{item.name}</p>
                          <p className="mt-0.5 text-[10px] font-bold text-red-600 sm:text-xs">{item.price}</p>
                          <div className="mt-1 flex items-center gap-0.5">
                            <span className="text-[8px] text-amber-400 sm:text-[10px]">★★★★★</span>
                            <span className="text-[7px] text-slate-400 sm:text-[9px]">4.9</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
