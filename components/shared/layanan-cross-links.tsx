"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Layout, Building2, GraduationCap, Landmark, Users, ArrowRight } from "lucide-react";

const allLayanan = [
  { slug: "toko-online", title: "Website Toko Online", desc: "E-commerce profesional", icon: ShoppingCart },
  { slug: "landing-page", title: "Landing Page", desc: "Halaman konversi tinggi", icon: Layout },
  { slug: "company-profile", title: "Company Profile", desc: "Website perusahaan", icon: Building2 },
  { slug: "website-sekolah", title: "Website Sekolah", desc: "Portal akademik", icon: GraduationCap },
  { slug: "website-pemerintahan", title: "Website Pemerintahan", desc: "Website instansi", icon: Landmark },
  { slug: "website-organisasi", title: "Website Organisasi", desc: "Website komunitas", icon: Users },
];

interface LayananCrossLinksProps {
  currentSlug: string;
}

export function LayananCrossLinks({ currentSlug }: LayananCrossLinksProps) {
  const otherLayanan = allLayanan.filter((l) => l.slug !== currentSlug);

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Layanan Lainnya
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Lihat juga layanan lain yang kami tawarkan untuk kebutuhan digital bisnis Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherLayanan.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/layanan/${item.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-orange-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 group-hover:bg-orange-100 transition-colors">
                  <item.icon className="h-5 w-5 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
