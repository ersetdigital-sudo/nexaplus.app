"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Layout,
  Zap,
  Target,
  MousePointerClick,
  Smartphone,
  BarChart3,
  PenTool,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { LayananCrossLinks } from "@/components/shared/layanan-cross-links";

const whatsappUrl =
  "https://wa.me/6281573059442?text=Halo%20NexaPlus%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20landing%20page.%20Bisa%20konsultasi%3F";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className={`py-20 md:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function LandingPageLanding() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-24">
          <div className="mb-8">
            <Breadcrumb
              variant="light"
              items={[
                { label: "Home", href: "/" },
                { label: "Layanan", href: "/#layanan" },
                { label: "Landing Page" },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 mb-6">
                <Layout className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-orange-700">
                  Jasa Pembuatan Landing Page
                </span>
              </div>

              <h1
                className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-[1.1] text-balance"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ubah Pengunjung Iklan Jadi{" "}
                <span className="text-orange-500 italic">Pembeli</span>
              </h1>

              <p className="mt-6 text-base text-slate-600 leading-relaxed max-w-lg">
                Landing page adalah halaman tunggal yang dirancang khusus untuk satu tujuan:
                konversi. Kami buatkan landing page yang cepat, persuasif, dan siap dipakai untuk
                iklan Meta, Google, maupun TikTok — mulai dari Rp 500.000.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white hover:bg-orange-600 transition-all"
                >
                  Konsultasi Gratis Sekarang
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#harga"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all"
                >
                  Lihat Paket Harga
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
                <Image
                  src="/images/landingpage.webp"
                  alt="Contoh landing page konversi tinggi buatan NexaPlus"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== DEFINISI (answer-first untuk AI) ===== */}
      <Section className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp}>
            <h2
              className="text-3xl font-bold text-slate-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Apa itu Landing Page?
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Landing page adalah halaman website tunggal yang dibuat untuk satu tujuan spesifik —
              biasanya mengubah pengunjung menjadi pembeli atau prospek. Berbeda dengan website
              biasa yang punya banyak halaman dan menu, landing page fokus pada satu penawaran
              dengan satu call-to-action, sehingga tingkat konversinya jauh lebih tinggi untuk
              kampanye iklan dan promosi.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ===== PROBLEM ===== */}
      <Section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="max-w-2xl mb-12">
            <h2
              className="text-3xl font-bold text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Sudah Bakar Budget Iklan tapi{" "}
              <span className="text-orange-400 italic">Nggak Ada yang Beli?</span>
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Masalahnya sering bukan di iklannya — tapi di halaman tujuannya.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Iklan diklik banyak orang, tapi tidak ada yang checkout atau chat.",
              "Mengarahkan iklan ke profil Instagram — pengunjung bingung mau ngapain.",
              "Halaman lambat dibuka, calon pembeli keburu kabur.",
              "Informasi produk berantakan, tidak meyakinkan.",
              "Tidak ada form atau tombol jelas untuk menghubungi.",
              "Tidak bisa tracking hasil iklan karena tak ada pixel terpasang.",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-5"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/20 mt-0.5">
                  <svg className="h-3 w-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== FITUR ===== */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Landing Page yang Dirancang untuk Konversi
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Setiap elemen dibuat dengan satu tujuan: membuat pengunjung mengambil aksi.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Loading Super Cepat", desc: "Halaman terbuka di bawah 2 detik. Setiap detik keterlambatan menurunkan konversi hingga 7%." },
              { icon: PenTool, title: "Copywriting Persuasif", desc: "Struktur AIDA yang terbukti: menarik perhatian, membangun keinginan, mendorong aksi." },
              { icon: MousePointerClick, title: "CTA yang Jelas", desc: "Tombol WhatsApp, form lead, atau checkout — satu aksi utama tanpa distraksi." },
              { icon: Smartphone, title: "Mobile-First Design", desc: "90% trafik iklan datang dari HP. Landing page kami dioptimalkan untuk layar kecil." },
              { icon: BarChart3, title: "Integrasi Pixel Iklan", desc: "Meta Pixel & Google Tag terpasang, siap tracking konversi dan retargeting." },
              { icon: Target, title: "Fokus Satu Penawaran", desc: "Tanpa menu dan link keluar yang mengalihkan perhatian dari penawaran utama." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200 p-8 hover:from-orange-50/50 hover:to-indigo-50/30 hover:border-orange-200 transition-all duration-500"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200">
                  <item.icon className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== PROSES ===== */}
      <Section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Landing Page Siap dalam Hitungan Hari
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Konsultasi Gratis", desc: "Ceritakan produk dan target market kamu, kami rancang strateginya." },
              { step: "02", title: "Draft & Copywriting", desc: "Kami susun struktur halaman dan tulis copy yang menjual." },
              { step: "03", title: "Desain & Development", desc: "Landing page dibangun cepat, responsif, dan sesuai brand." },
              { step: "04", title: "Launch & Pixel Setup", desc: "Halaman live, pixel terpasang, siap menerima trafik iklan." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="relative text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-600 text-white text-xl font-bold shadow-lg shadow-orange-600/20 mb-5">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 text-slate-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== PRICING ===== */}
      <Section id="harga" className="bg-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
              Harga
            </span>
            <h2
              className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Investasi Kecil, Dampak Besar
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Basic */}
            <motion.div variants={fadeUp} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-bold text-slate-900">Basic</h3>
              <p className="mt-1 text-sm text-slate-500">Untuk promosi & kampanye sederhana</p>
              <div className="mt-5">
                <span className="text-3xl font-extrabold text-slate-900">Rp 500.000</span>
                <span className="text-sm text-slate-500"> /proyek</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {[
                  "1 halaman konversi tinggi",
                  "Desain responsif mobile-first",
                  "Form lead / tombol WhatsApp",
                  "Copywriting dasar",
                  "Hosting 1 tahun + SSL gratis",
                  "Selesai 3-5 hari kerja",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6281573059442?text=Halo%20NexaPlus%2C%20saya%20tertarik%20dengan%20paket%20Landing%20Page%20Basic.%20Bisa%20info%20lebih%20lanjut%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex h-12 w-full items-center justify-center rounded-full border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Konsultasi Paket Basic
              </a>
            </motion.div>

            {/* Premium */}
            <motion.div variants={fadeUp} className="relative flex flex-col rounded-2xl bg-slate-900 p-8 shadow-2xl">
              <div className="absolute top-5 right-5 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                Terbaik untuk Iklan
              </div>
              <h3 className="text-lg font-bold text-white">Premium</h3>
              <p className="mt-1 text-sm text-slate-400">Untuk bisnis yang serius beriklan</p>
              <div className="mt-5">
                <span className="text-3xl font-extrabold text-orange-400">Rp 1.500.000</span>
                <span className="text-sm text-slate-400"> /proyek</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {[
                  "Desain custom sesuai brand",
                  "Copywriting persuasif lengkap",
                  "Integrasi pixel iklan (Meta/Google)",
                  "Hingga 3 section variant untuk A/B testing",
                  "Domain custom (.com)",
                  "Hosting 1 tahun + SSL gratis",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-orange-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6281573059442?text=Halo%20NexaPlus%2C%20saya%20tertarik%20dengan%20paket%20Landing%20Page%20Premium.%20Bisa%20info%20lebih%20lanjut%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex h-12 w-full items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                Konsultasi Paket Premium
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section className="bg-slate-900">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp}>
            <h2
              className="text-3xl font-bold text-white sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Siap Bikin Iklan Kamu Menghasilkan?
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              Konsultasikan kebutuhan landing page kamu — gratis, tanpa komitmen.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasi Gratis via WhatsApp
            </a>
          </motion.div>
        </div>
      </Section>

      <LayananCrossLinks currentSlug="landing-page" />
    </div>
  );
}
