"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Star, ArrowRight, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { LayananCrossLinks } from "@/components/shared/layanan-cross-links";

const whatsappUrl =
  "https://wa.me/6281573059442?text=Halo%20NexaPlus%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20company%20profile.%20Bisa%20konsultasi%3F";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
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

export function CompanyProfileLanding() {
  return (
    <div className="overflow-hidden">

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden" style={{ background: "radial-gradient(120% 120% at 80% 0%, #1a1a1a 0%, #050505 55%)" }}>
        <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #FF7A00, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <div className="mb-8">
            <Breadcrumb variant="dark" items={[{ label: "Home", href: "/" }, { label: "Layanan", href: "/#layanan" }, { label: "Company Profile" }]} />
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                Dipercaya 180+ perusahaan di Indonesia
              </span>
              <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Website Company Profile yang{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">Menjual</span>{" "}
                Bisnis Anda
              </h1>
              <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
                Bukan sekadar website biasa. Kami membangun website company profile dengan desain custom, loading cepat, responsif di semua perangkat, dan SEO-ready — supaya bisnis Anda tampil kredibel dan mudah ditemukan calon klien.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 rounded-xl px-7 py-4 font-semibold text-white bg-orange-500 hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">
                  Mulai Proyek Anda <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#portfolio" className="inline-flex justify-center items-center gap-2 rounded-xl px-7 py-4 font-semibold text-white border border-white/20 hover:bg-white/5 transition">
                  Lihat Portofolio
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/60 text-sm">
                <span className="flex items-center gap-2"><span className="text-orange-400">★★★★★</span> 4.9/5 rating klien</span>
                <span className="flex items-center gap-2">⚡ Online dalam 7–14 hari</span>
                <span className="flex items-center gap-2">🌐 Domain &amp; hosting included</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="relative hidden lg:block">
              <Image src="/images/hero-compro.png" alt="Mockup website company profile profesional di laptop dan smartphone" width={700} height={525} className="w-full rounded-3xl border border-white/10" priority />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-2xl hidden sm:block">
                <div className="text-2xl font-extrabold text-orange-500" style={{ fontFamily: "var(--font-heading)" }}>100%</div>
                <div className="text-xs text-black/60 font-medium">responsif di mobile,<br />tablet &amp; desktop</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE TRUST ===== */}
      <div className="bg-black border-y border-white/10 py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[scroll_26s_linear_infinite]">
          <div className="flex items-center gap-12 px-6 text-white/40 font-semibold text-lg tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            {["Manufaktur", "Properti", "Konstruksi", "Startup Tech", "F&B", "Konsultan", "Logistik"].map((item, i) => (
              <span key={i} className="flex items-center gap-12">{item}<span className="text-orange-500 ml-12">•</span></span>
            ))}
          </div>
          <div className="flex items-center gap-12 px-6 text-white/40 font-semibold text-lg tracking-wide" style={{ fontFamily: "var(--font-heading)" }} aria-hidden="true">
            {["Manufaktur", "Properti", "Konstruksi", "Startup Tech", "F&B", "Konsultan", "Logistik"].map((item, i) => (
              <span key={i} className="flex items-center gap-12">{item}<span className="text-orange-500 ml-12">•</span></span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== PROBLEM / VALUE ===== */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3 text-orange-500">Kenapa ini penting</p>
            <h2 className="font-extrabold text-3xl sm:text-4xl leading-tight text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>Calon klien mengecek website Anda dalam 8 detik pertama</h2>
            <p className="mt-4 text-black/60 text-lg">Website yang lambat dan berantakan membuat Anda kehilangan prospek dan kepercayaan. Website company profile yang dirancang dengan baik membuat Anda terlihat sekelas pemain besar.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { emoji: "🎯", title: "Membangun Kredibilitas", desc: "Website profesional dengan domain sendiri langsung memposisikan brand Anda sebagai bisnis yang serius dan terpercaya." },
              { emoji: "🔍", title: "Ditemukan di Google", desc: "Struktur SEO-ready membuat bisnis Anda muncul saat calon klien mencari layanan Anda di mesin pencari." },
              { emoji: "🤝", title: "Mempercepat Closing", desc: "Halaman yang persuasif dengan tombol kontak & WhatsApp menjawab keraguan prospek dan mempercepat keputusan kerja sama." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-black/10 p-7 bg-[#fafafa] hover:border-orange-300 transition-all hover:-translate-y-1">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== LAYANAN ===== */}
      <Section id="layanan" className="bg-[#050505]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3 text-orange-500">Layanan Kami</p>
            <h2 className="font-extrabold text-white text-3xl sm:text-4xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Satu paket, website siap online</h2>
            <p className="mt-4 text-white/55 text-lg">Dari desain hingga domain, hosting, dan maintenance — kami tangani semuanya.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              { title: "Desain Website Custom", desc: "Tampilan unik sesuai brand Anda — bukan template pasaran. Layout modern, tipografi kuat, dan UX yang nyaman." },
              { title: "Responsif Semua Perangkat", desc: "Tampil sempurna di mobile, tablet, dan desktop. Pengunjung nyaman membuka website dari mana saja." },
              { title: "SEO & Kecepatan", desc: "Optimasi on-page dan loading cepat agar website Anda mudah ditemukan di Google dan tidak membuat pengunjung kabur." },
              { title: "Domain & Hosting", desc: "Setup domain (.com / .co.id) dan hosting cepat & aman, plus SSL. Website langsung online tanpa ribet teknis." },
              { title: "Form & Integrasi Kontak", desc: "Form kontak, tombol WhatsApp, Google Maps, dan media sosial terintegrasi agar prospek mudah menghubungi Anda." },
              { title: "Maintenance & Support", desc: "Dukungan setelah launching: update konten, backup berkala, dan bantuan teknis agar website selalu prima." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-orange-500/50 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl grid place-items-center mb-5 bg-orange-500/15">
                  <span className="text-orange-500 font-bold text-lg">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-bold text-white text-xl mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== PROSES ===== */}
      <Section id="proses" className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3 text-orange-500">Cara Kerja</p>
            <h2 className="font-extrabold text-3xl sm:text-4xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Proses simpel, hasil maksimal</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { step: "01", title: "Konsultasi & Riset", desc: "Kami pahami bisnis, target audiens, dan struktur halaman yang Anda butuhkan." },
              { step: "02", title: "Desain & Mockup", desc: "Penyusunan konten dan desain tampilan website untuk persetujuan Anda sebelum dibangun." },
              { step: "03", title: "Develop & Revisi", desc: "Pembangunan website responsif dan SEO-ready, lengkap dengan revisi sampai Anda puas." },
              { step: "04", title: "Launching & Online", desc: "Website live di domain Anda, siap diakses publik, plus dukungan after-service." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-black/10 p-7 bg-[#fafafa]">
                <div className="font-extrabold text-5xl text-orange-500/20" style={{ fontFamily: "var(--font-heading)" }}>{item.step}</div>
                <h3 className="font-bold text-lg mt-2 mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== PORTFOLIO ===== */}
      <Section id="portfolio" className="bg-[#050505]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="font-semibold text-sm uppercase tracking-widest mb-3 text-orange-500">Portofolio</p>
              <h2 className="font-extrabold text-white text-3xl sm:text-4xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Website yang berbicara sendiri</h2>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm font-semibold inline-flex items-center gap-2">Diskusikan proyek Anda →</a>
          </motion.div>
          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden border border-white/10">
              <Image src="/images/porto-compro-1.png" alt="Desain website company profile perusahaan modern" width={800} height={500} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden border border-white/10">
              <Image src="/images/porto-compro-2.png" alt="Website company profile responsif di laptop, tablet, dan smartphone" width={800} height={500} className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 mt-10 text-center">
            <motion.div variants={fadeUp}><div className="font-extrabold text-4xl sm:text-5xl text-white" style={{ fontFamily: "var(--font-heading)" }}>180+</div><p className="text-white/50 text-sm mt-1">Proyek selesai</p></motion.div>
            <motion.div variants={fadeUp}><div className="font-extrabold text-4xl sm:text-5xl text-orange-500" style={{ fontFamily: "var(--font-heading)" }}>7–14</div><p className="text-white/50 text-sm mt-1">Hari sampai online</p></motion.div>
            <motion.div variants={fadeUp}><div className="font-extrabold text-4xl sm:text-5xl text-white" style={{ fontFamily: "var(--font-heading)" }}>4.9/5</div><p className="text-white/50 text-sm mt-1">Rating kepuasan</p></motion.div>
          </div>
        </div>
      </Section>

      {/* ===== HARGA ===== */}
      <Section id="harga" className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3 text-orange-500">Paket Harga</p>
            <h2 className="font-extrabold text-3xl sm:text-4xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Investasi transparan, tanpa biaya tersembunyi</h2>
            <p className="mt-4 text-black/60 text-lg">Pilih paket yang sesuai skala bisnis Anda. Semua harga sudah termasuk desain, domain &amp; hosting tahun pertama.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid lg:grid-cols-3 gap-6 mt-14 items-stretch">
            {/* Starter */}
            <motion.div variants={fadeUp} className="rounded-3xl border border-black/10 p-8 flex flex-col">
              <h3 className="font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>Starter</h3>
              <p className="text-black/55 text-sm mt-1">UMKM &amp; bisnis baru</p>
              <div className="mt-5 mb-6"><span className="font-extrabold text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Rp2,5jt</span></div>
              <ul className="space-y-3 text-sm text-black/70 flex-1">
                {["Website 1 halaman (landing)", "Desain custom & responsif", "Form kontak & tombol WhatsApp", "Domain & hosting 1 tahun", "2x revisi"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-orange-500">✓</span> {f}</li>
                ))}
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex justify-center rounded-xl px-6 py-3 font-semibold border border-black/15 hover:bg-black/5 transition">Pilih Starter</a>
            </motion.div>
            {/* Business */}
            <motion.div variants={fadeUp} className="rounded-3xl p-8 flex flex-col relative bg-[#050505] shadow-[0_0_0_1px_rgba(255,122,0,.18),0_30px_80px_-30px_rgba(255,122,0,.45)]">
              <span className="absolute top-5 right-5 text-xs font-semibold text-black px-3 py-1 rounded-full bg-orange-500">Terlaris</span>
              <h3 className="font-bold text-xl text-white" style={{ fontFamily: "var(--font-heading)" }}>Business</h3>
              <p className="text-white/55 text-sm mt-1">Perusahaan berkembang</p>
              <div className="mt-5 mb-6"><span className="font-extrabold text-4xl text-white" style={{ fontFamily: "var(--font-heading)" }}>Rp5jt</span></div>
              <ul className="space-y-3 text-sm text-white/75 flex-1">
                {["Website 5–8 halaman", "Desain custom & SEO on-page", "Penulisan konten profesional", "Google Maps & integrasi sosial", "Domain & hosting 1 tahun", "Revisi sampai puas"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-orange-500">✓</span> {f}</li>
                ))}
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex justify-center rounded-xl px-6 py-3 font-semibold text-white bg-orange-500 hover:bg-orange-600 transition">Pilih Business</a>
            </motion.div>
            {/* Premium */}
            <motion.div variants={fadeUp} className="rounded-3xl border border-black/10 p-8 flex flex-col">
              <h3 className="font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>Premium</h3>
              <p className="text-black/55 text-sm mt-1">Korporasi &amp; enterprise</p>
              <div className="mt-5 mb-6"><span className="font-extrabold text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Custom</span></div>
              <ul className="space-y-3 text-sm text-black/70 flex-1">
                {["Halaman tak terbatas", "Website multi-bahasa (ID/EN)", "CMS — update konten sendiri", "Animasi & interaksi premium", "Maintenance & support prioritas"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-orange-500">✓</span> {f}</li>
                ))}
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex justify-center rounded-xl px-6 py-3 font-semibold border border-black/15 hover:bg-black/5 transition">Hubungi Kami</a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ===== TESTIMONI ===== */}
      <Section className="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3 text-orange-500">Testimoni</p>
            <h2 className="font-extrabold text-3xl sm:text-4xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Kata mereka yang sudah bekerja sama</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { quote: "Websitenya bikin perusahaan kami terlihat jauh lebih kredibel. Sejak online, leads dari Google naik signifikan.", name: "Rizky Haryanto", role: "Direktur, PT Karya Konstruksi", initials: "RH" },
              { quote: "Prosesnya cepat dan websitenya ngebut dibuka di HP. Timnya paham banget kebutuhan bisnis kami. Sangat profesional.", name: "Sinta Dewi", role: "Founder, Aruna Living", initials: "SD" },
              { quote: "Investasi terbaik. Sekarang setiap kirim link website ke investor, respon mereka jauh lebih serius.", name: "Andi Baskoro", role: "CEO, Nimbus Tech", initials: "AB" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl bg-white border border-black/10 p-7 hover:-translate-y-1 transition-transform">
                <div className="text-orange-500 mb-3">★★★★★</div>
                <blockquote className="text-black/75 leading-relaxed text-sm">&ldquo;{item.quote}&rdquo;</blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full grid place-items-center font-bold text-black bg-orange-500 text-sm">{item.initials}</span>
                  <div><div className="font-semibold text-sm">{item.name}</div><div className="text-xs text-black/50">{item.role}</div></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section id="faq" className="bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3 text-orange-500">FAQ</p>
            <h2 className="font-extrabold text-3xl sm:text-4xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Pertanyaan yang sering diajukan</h2>
          </motion.div>
          <motion.div variants={stagger} className="space-y-4">
            {[
              { q: "Berapa lama sampai website online?", a: "Rata-rata 7–14 hari kerja sampai website live di domain Anda, tergantung jumlah halaman dan paket. Untuk kebutuhan mendesak, tersedia opsi pengerjaan kilat." },
              { q: "Apakah sudah termasuk domain & hosting?", a: "Ya. Semua paket sudah termasuk domain dan hosting untuk tahun pertama, lengkap dengan SSL. Perpanjangan tahun berikutnya bersifat opsional dan transparan." },
              { q: "Apakah saya bisa update konten sendiri?", a: "Bisa. Pada paket Premium kami siapkan CMS agar Anda mudah mengubah teks dan gambar sendiri. Untuk paket lain, update konten bisa dibantu lewat layanan maintenance kami." },
              { q: "Bagaimana jika saya butuh revisi?", a: "Setiap paket sudah termasuk kuota revisi. Paket Business memberikan revisi sampai Anda puas, sehingga hasil benar-benar sesuai harapan." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-black/10 p-6">
                <h3 className="font-semibold text-lg" style={{ fontFamily: "var(--font-heading)" }}>{item.q}</h3>
                <p className="mt-3 text-black/60 leading-relaxed text-sm">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== LAYANAN LAINNYA ===== */}
      <LayananCrossLinks currentSlug="company-profile" />

      {/* ===== CTA FINAL ===== */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "radial-gradient(120% 120% at 80% 0%, #1a1a1a 0%, #050505 55%)" }}>
        <div className="absolute -bottom-32 -left-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(circle, #FF7A00, transparent 60%)" }} />
        <div className="max-w-3xl mx-auto px-5 sm:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1]" style={{ fontFamily: "var(--font-heading)" }}>Siap tampil lebih meyakinkan?</h2>
            <p className="mt-5 text-white/60 text-lg max-w-md mx-auto">Ceritakan kebutuhan Anda. Kami balas dengan rekomendasi paket dan estimasi — gratis, tanpa komitmen.</p>
            <div className="mt-8 space-y-3 text-white/70 text-sm inline-flex flex-col items-start">
              <span className="flex items-center gap-3">✅ Konsultasi awal gratis</span>
              <span className="flex items-center gap-3">✅ Estimasi &amp; timeline jelas</span>
              <span className="flex items-center gap-3">✅ Respons cepat di jam kerja</span>
            </div>
            <div className="mt-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-7 py-4 font-semibold text-white bg-orange-500 hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
