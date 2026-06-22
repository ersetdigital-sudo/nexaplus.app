"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Smartphone,
  Zap,
  Shield,
  LayoutDashboard,
  Truck,
  Headphones,
  CheckCircle,
  Star,
  ArrowRight,
  MessageCircle,
  Clock,
  Wallet,
  Search,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { LayananCrossLinks } from "@/components/shared/layanan-cross-links";

const whatsappUrl =
  "https://wa.me/6281573059442?text=Halo%20NexaPlus%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20toko%20online.%20Bisa%20konsultasi%3F";

// Animation variants
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

export function TokoOnlineLanding() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-24">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Layanan", href: "/#layanan" },
                { label: "Website Toko Online" },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 mb-6"
              >
                <ShoppingCart className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-orange-700">
                  Jasa Pembuatan Website Toko Online
                </span>
              </motion.div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-[1.1]" style={{ fontFamily: "var(--font-heading)" }}>
                Wujudkan Toko Online{" "}
                <span className="text-orange-500 italic">Profesional</span>{" "}
                Anda Tanpa Ribet
              </h1>

              <p className="mt-6 text-base text-slate-600 leading-relaxed max-w-lg">
                NexaPlus hadir untuk pemilik usaha yang ingin jualan online dengan website sendiri yang cepat, cantik, dan siap terima pesanan — tanpa perlu paham teknologi.
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

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500"
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-lg font-bold text-slate-900">50+</span>
                  <span className="text-xs text-slate-500">Toko Online Diluncurkan</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-lg font-bold text-slate-900">3 Thn</span>
                  <span className="text-xs text-slate-500">Pengalaman</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-lg font-bold text-slate-900">4.9</span>
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-slate-500">Rating dari Klien</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Hero image placeholder - right side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square bg-slate-100 rounded-3xl flex items-center justify-center">
                <ShoppingCart className="h-24 w-24 text-slate-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <Section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              Masih Jualan Cuma di{" "}
              <span className="text-orange-400 italic">WhatsApp & Instagram?</span>
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Banyak pemilik UMKM menghadapi masalah yang sama setiap hari.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Pesanan berantakan, susah dilacak satu per satu.",
              "Calon pembeli kabur karena tak ada tampilan toko yang profesional.",
              "Potongan marketplace makin mahal, untung makin tipis.",
              "Tidak punya \"rumah digital\" sendiri yang bisa dikontrol penuh.",
              "Susah dipercaya pembeli baru karena tak punya website resmi.",
              "Capek balas chat satu per satu padahal produk & harga sama.",
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

          <motion.p variants={fadeUp} className="mt-10 text-center text-base text-slate-400">
            Kalau kamu mengalami salah satu di atas —{" "}
            <span className="font-semibold text-white">sudah saatnya punya toko online sendiri.</span>
          </motion.p>
        </div>
      </Section>

      {/* ===== BENEFIT ===== */}
      <Section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Bisnis Kamu Naik Level dengan Website Toko Online
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Star, title: "Tampil Lebih Profesional", desc: "Pembeli langsung percaya saat melihat toko online kamu yang rapi dan branded." },
              { icon: Clock, title: "Terima Pesanan 24 Jam", desc: "Website kamu bekerja bahkan saat kamu tidur. Otomatis terima order kapan saja." },
              { icon: Wallet, title: "Bebas Potongan Marketplace", desc: "Keuntungan penuh masuk ke kantong kamu. Tanpa komisi 10-20% per transaksi." },
              { icon: Smartphone, title: "Mudah Dikelola Sendiri", desc: "Tidak perlu jago teknologi. Cukup smartphone dan internet untuk kelola toko." },
              { icon: Search, title: "Tampil di Google", desc: "Toko kamu bisa ditemukan calon pembeli yang sedang mencari produkmu di Google." },
              { icon: Shield, title: "Aset Digital Milik Sendiri", desc: "Tidak bergantung pada platform lain. Website adalah aset bisnis jangka panjang." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors">
                  <item.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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
              Semua yang Toko Online Kamu Butuhkan
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Fitur lengkap yang bikin bisnis kamu standout dari kompetitor.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: "Mobile-First Design", desc: "Tampilan super responsif, terasa seperti native app di semua device." },
              { icon: Zap, title: "Performa Cepat", desc: "Loading di bawah 2 detik. Pengunjung tidak kabur sebelum melihat produk Anda." },
              { icon: Shield, title: "Pembayaran Aman", desc: "Integrasi multi payment gateway dengan enkripsi SSL 256-bit." },
              { icon: LayoutDashboard, title: "Dashboard Admin", desc: "Kelola produk, pesanan, pelanggan, dan pengaturan toko secara real-time." },
              { icon: Truck, title: "Cek Ongkir Otomatis", desc: "Ongkos kirim dihitung real-time dengan 15+ kurir (JNE, J&T, SiCepat, dll)." },
              { icon: Headphones, title: "Support & Maintenance", desc: "Free support 30 hari setelah launch + maintenance bulanan opsional." },
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

      {/* ===== KENAPA KAMI ===== */}
      <Section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kenapa Pemilik Usaha Percayakan Toko Online Mereka ke NexaPlus?
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Proses Cepat", desc: "Website siap dalam 7–14 hari kerja, bukan berbulan-bulan." },
              { title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi, semua sudah jelas di awal." },
              { title: "Support Aktif", desc: "Tim kami siap bantu via WhatsApp setelah website live." },
              { title: "Desain Sesuai Brand", desc: "Bukan template asal jadi, tapi disesuaikan dengan identitas bisnis kamu." },
              { title: "Berpengalaman di Pasar Indonesia", desc: "Kami paham kebutuhan UMKM lokal dan perilaku pembeli Indonesia." },
              { title: "Website Super Cepat & Modern", desc: "Dibangun dengan teknologi terkini untuk memberikan performa tinggi, pengalaman pengguna yang nyaman, dan dukungan SEO yang lebih optimal." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm p-6 hover:border-orange-500/30 hover:bg-slate-800 transition-all"
              >
                <CheckCircle className="h-6 w-6 text-orange-400 mb-3" />
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== PROSES ===== */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Dari Obrolan ke Website Siap Jual — Hanya 4 Langkah
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Konsultasi Gratis", desc: "Ceritakan bisnis kamu, kami dengarkan dan kasih rekomendasi terbaik." },
              { step: "02", title: "Desain & Persetujuan", desc: "Kami buatkan tampilan toko, kamu setujui sebelum lanjut ke development." },
              { step: "03", title: "Pengembangan", desc: "Tim kami kerjakan website sesuai kebutuhan dan brand kamu." },
              { step: "04", title: "Launch & Serah Terima", desc: "Website live, kamu langsung bisa mulai terima pesanan!" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative text-center"
              >
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
      <Section id="harga" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
              Harga
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              Investasi untuk Bisnis Kamu
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Pilih paket yang sesuai kebutuhan & budget.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
            {/* Starter */}
            <motion.div variants={fadeUp} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-bold text-slate-900">Starter</h3>
              <p className="mt-1 text-sm text-slate-500">Cocok untuk UMKM & bisnis baru</p>
              <div className="mt-5">
                <span className="text-3xl font-extrabold text-slate-900">Rp 1.500.000</span>
                <span className="text-sm text-slate-500"> /proyek</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {["Hingga 50 produk", "Desain responsif mobile-first", "Integrasi 1 payment gateway", "Cek ongkir otomatis", "Domain custom (.com)", "Hosting 1 tahun", "SSL gratis"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6281573059442?text=Halo%20NexaPlus%2C%20saya%20tertarik%20dengan%20paket%20Starter%20Website%20Toko%20Online.%20Bisa%20info%20lebih%20lanjut%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex h-12 w-full items-center justify-center rounded-full border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Konsultasi Paket Starter
              </a>
            </motion.div>

            {/* Professional — Dark card */}
            <motion.div variants={fadeUp} className="relative flex flex-col rounded-2xl bg-slate-900 p-8 shadow-2xl md:-my-4">
              <div className="absolute top-5 right-5 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                Paling Populer
              </div>
              <h3 className="text-lg font-bold text-white">Professional</h3>
              <p className="mt-1 text-sm text-slate-400">Untuk bisnis yang ingin scale</p>
              <div className="mt-5">
                <span className="text-3xl font-extrabold text-orange-400">Rp 3.500.000</span>
                <span className="text-sm text-slate-400"> /proyek</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {["Produk unlimited", "Desain premium custom", "Multi payment gateway", "Dashboard admin lengkap", "Integrasi ongkir 15+ kurir", "Wishlist & lacak pesanan", "SEO optimized", "Support 30 hari"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-orange-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6281573059442?text=Halo%20NexaPlus%2C%20saya%20tertarik%20dengan%20paket%20Professional%20Website%20Toko%20Online.%20Bisa%20info%20lebih%20lanjut%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex h-12 w-full items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                Konsultasi Paket Professional
              </a>
            </motion.div>

            {/* Enterprise */}
            <motion.div variants={fadeUp} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-bold text-slate-900">Enterprise</h3>
              <p className="mt-1 text-sm text-slate-500">Full custom sesuai kebutuhan</p>
              <div className="mt-5">
                <span className="text-3xl font-extrabold text-slate-900">Custom</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {["Semua fitur Professional", "Desain 100% custom", "Integrasi API kustom", "Multi-admin & role", "Analytics dashboard", "Priority support", "Maintenance bulanan", "Konsultasi arsitektur"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6281573059442?text=Halo%20NexaPlus%2C%20saya%20tertarik%20dengan%20paket%20Enterprise%20Website%20Toko%20Online.%20Bisa%20diskusi%20kebutuhan%20custom%20saya%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex h-12 w-full items-center justify-center rounded-full border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Hubungi Kami
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ===== TESTIMONI ===== */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Kata Mereka yang Sudah Go Online Bersama NexaPlus
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Sebelumnya saya jualan cuma lewat WA, sering kewalahan catat pesanan. Sekarang semua rapi, pembeli bisa order sendiri kapan saja. Omzet naik hampir 40% dalam 2 bulan!",
                name: "Sari",
                role: "Pemilik Toko Kue Rumahan, Bandung",
              },
              {
                quote: "Prosesnya cepat dan tim NexaPlus sabar banget ngajarin saya cara kelola websitenya. Recommended banget buat yang awam teknologi!",
                name: "Budi",
                role: "Pemilik Toko Pakaian, Surabaya",
              },
              {
                quote: "Harganya masuk akal, hasilnya melebihi ekspektasi. Toko online saya sekarang udah muncul di Google juga!",
                name: "Rina",
                role: "Pemilik Produk Skincare UMKM, Jakarta",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="space-y-4">
            {[
              { q: "Apakah saya harus paham teknologi?", a: "Tidak sama sekali. Kami handle semua hal teknis dari awal sampai website live. Kami juga ajari cara kelola toko online kamu dengan mudah." },
              { q: "Berapa lama website selesai dibuat?", a: "Rata-rata 7–14 hari kerja setelah semua materi (foto produk, informasi toko) kami terima dari kamu." },
              { q: "Apakah domain dan hosting sudah termasuk?", a: "Ya, sudah termasuk untuk tahun pertama di semua paket." },
              { q: "Bisa request desain sesuai keinginan?", a: "Tentu. Kami akan menyesuaikan tampilan dengan brand dan selera kamu sebelum masuk tahap pengembangan." },
              { q: "Bagaimana jika ada masalah setelah website live?", a: "Kami menyediakan support aktif via WhatsApp sesuai paket yang kamu pilih. Kamu tidak akan ditinggal sendirian." },
              { q: "Apakah bisa dicicil?", a: "Untuk beberapa paket tersedia opsi pembayaran bertahap. Hubungi kami untuk info lebih lanjut." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== LAYANAN LAINNYA ===== */}
      <LayananCrossLinks currentSlug="toko-online" />

      {/* ===== CTA FINAL ===== */}
      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 sm:px-12 sm:py-20 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              Siap Punya Toko Online Sendiri?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-slate-400">
              Jangan tunda lagi. Setiap hari tanpa website adalah hari yang kamu biarkan calon pembeli pergi ke kompetitor. Konsultasi pertama gratis. Tanpa komitmen, tanpa tekanan.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp Sekarang
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
