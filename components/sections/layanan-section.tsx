"use client";

import { useState } from "react";
import { CheckCircle, ShoppingCart, Layout, Building2, GraduationCap, Users, Monitor, Package, CalendarCheck, MessageCircle } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

// ============ DATA ============

const TABS = [
  {
    id: "toko",
    label: "Toko Online",
    icon: ShoppingCart,
    tag: "Paling Banyak Dipesan",
    title: "Website Toko Online",
    desc: "Toko online profesional dengan sistem pembayaran terintegrasi, manajemen produk, dan desain yang menarik pelanggan.",
    features: [
      "Keranjang belanja & checkout",
      "Payment gateway Midtrans/Tripay",
      "Dashboard kelola produk",
      "SEO-ready & mobile friendly",
    ],
    price: "Rp 6.000.000",
    previewUrl: "tokoonline.co.id",
  },
  {
    id: "landing",
    label: "Landing Page",
    icon: Layout,
    tag: "Konversi Tinggi",
    title: "Landing Page",
    desc: "Halaman landing yang dirancang untuk meningkatkan konversi dengan copywriting dan CTA yang efektif.",
    features: [
      "Copywriting & struktur halaman",
      "CTA + form lead capture",
      "Integrasi WhatsApp langsung",
      "Loading super cepat",
    ],
    price: "Rp 1.500.000",
    previewUrl: "landingku.id",
  },
  {
    id: "company",
    label: "Company Profile",
    icon: Building2,
    tag: "Kesan Pertama yang Kuat",
    title: "Website Company Profile",
    desc: "Website company profile elegan yang menampilkan visi, misi, layanan, dan portofolio perusahaan secara profesional.",
    features: [
      "Desain elegan korporat",
      "Halaman layanan & portofolio",
      "Form kontak + Google Maps",
      "Hingga 5 halaman",
    ],
    price: "Rp 3.500.000",
    previewUrl: "companyku.co.id",
  },
  {
    id: "sekolah",
    label: "Website Sekolah",
    icon: GraduationCap,
    tag: "Institusi Pendidikan",
    title: "Website Sekolah",
    desc: "Website sekolah modern dengan informasi akademik, pengumuman, dan portal siswa yang terintegrasi.",
    features: [
      "Profil & visi misi sekolah",
      "Pengumuman & agenda",
      "Galeri foto & berita",
      "Form pendaftaran siswa",
    ],
    price: "Rp 3.500.000",
    previewUrl: "sekolahku.sch.id",
  },
  {
    id: "organisasi",
    label: "Organisasi",
    icon: Users,
    tag: "Komunitas & Nonprofit",
    title: "Website Organisasi / Nonprofit",
    desc: "Website untuk komunitas, yayasan, dan lembaga sosial dengan fitur lengkap.",
    features: [
      "Halaman program & kegiatan",
      "Galeri dokumentasi",
      "Form pendaftaran anggota",
      "Donasi online opsional",
    ],
    price: "Rp 3.500.000",
    previewUrl: "yayasanku.org",
  },
  {
    id: "pos",
    label: "Sistem POS",
    icon: Monitor,
    tag: "Bisnis Offline & Ritel",
    title: "Sistem POS & Kasir",
    desc: "Sistem kasir digital untuk bisnis retail dengan manajemen stok dan laporan penjualan.",
    features: [
      "Transaksi & cetak struk",
      "Manajemen stok produk",
      "Laporan penjualan harian/bulanan",
      "Multi-kasir & multi-outlet",
    ],
    price: "Rp 5.000.000",
    previewUrl: "kasirku.app",
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    tag: "Manajemen Stok",
    title: "Aplikasi Inventory",
    desc: "Sistem manajemen stok untuk bisnis yang butuh kontrol inventaris real-time.",
    features: [
      "Kelola stok masuk/keluar",
      "Barcode scanner support",
      "Laporan & export Excel",
      "Alert stok menipis",
    ],
    price: "Rp 5.000.000",
    previewUrl: "stokku.app",
  },
  {
    id: "booking",
    label: "Booking",
    icon: CalendarCheck,
    tag: "Bisnis Jasa & Hospitality",
    title: "Sistem Booking / Reservasi",
    desc: "Sistem reservasi online untuk bisnis jasa, salon, hotel, dan klinik.",
    features: [
      "Kalender booking realtime",
      "Notifikasi WhatsApp otomatis",
      "Dashboard admin kelola jadwal",
      "E-tiket & QR code",
    ],
    price: "Rp 4.500.000",
    previewUrl: "bookingku.id",
  },
];

// ============ BROWSER FRAME ============

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[8px] border border-[#E4E4E7] bg-white shadow-md">
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <div className="ml-2 flex h-5 flex-1 items-center gap-1 rounded bg-white px-2 border border-slate-200">
          <svg className="h-2.5 w-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 00-6 0V9h6z" clipRule="evenodd"/></svg>
          <span className="text-[8px] text-slate-400 truncate">{url}</span>
        </div>
      </div>
      {/* Content */}
      <div className="h-[220px] overflow-hidden md:h-[280px]">
        {children}
      </div>
    </div>
  );
}

// ============ PREVIEW COMPONENTS ============

function PreviewToko() {
  return (
    <div className="h-full bg-[#f5f5f5] flex flex-col">
      {/* Top navbar with gradient */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-500 px-2.5 py-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
              <span className="text-[7px]">🛒</span>
            </div>
            <span className="text-[9px] font-bold text-white tracking-tight">ShopNesia</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[7px] text-blue-100">Kategori</span>
            <span className="text-[7px] text-blue-100">Promo</span>
            <div className="relative">
              <span className="text-[9px] text-white">♡</span>
            </div>
            <div className="relative">
              <span className="text-[9px] text-white">🛒</span>
              <span className="absolute -right-1.5 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[5px] font-bold text-white shadow-sm">3</span>
            </div>
          </div>
        </div>
        {/* Search bar */}
        <div className="mt-1.5 flex h-[18px] items-center rounded-full bg-white px-2.5 shadow-sm">
          <svg className="h-2.5 w-2.5 text-slate-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span className="text-[7px] text-slate-400">Cari produk, brand, atau kategori...</span>
        </div>
      </div>
      {/* Flash sale banner */}
      <div className="flex items-center gap-1.5 bg-gradient-to-r from-red-600 via-red-500 to-orange-400 px-2.5 py-1">
        <span className="text-[7px] text-yellow-300">⚡</span>
        <span className="text-[8px] font-extrabold text-white tracking-tight">FLASH SALE</span>
        <div className="flex gap-0.5">
          {["02","14","33"].map((t, i) => (
            <span key={i} className="rounded bg-slate-900 px-1 py-0.5 text-[7px] font-bold text-white font-mono">{t}</span>
          ))}
        </div>
        <span className="ml-auto text-[6px] text-white/80 font-medium">Lihat Semua ›</span>
      </div>
      {/* Category pills */}
      <div className="flex gap-1 px-2.5 py-1.5 overflow-hidden">
        {["🔥 Terlaris","📱 Elektronik","👕 Fashion","🏠 Rumah","🎮 Gaming"].map((c, i) => (
          <span key={c} className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[6px] font-medium ${i===0 ? "bg-blue-600 text-white" : "bg-white text-slate-600 border border-slate-200"}`}>{c}</span>
        ))}
      </div>
      {/* Product grid */}
      <div className="flex-1 grid grid-cols-3 gap-1.5 px-2.5 pb-2 overflow-hidden">
        {[
          { name: "TWS Earbuds Pro Max", price: "285.000", orig: "450.000", rating: "4.8", sold: "2.1rb", disc: "37%", color: "from-blue-100 to-blue-50", emoji: "🎧" },
          { name: "Smart Watch Ultra X2", price: "425.000", orig: "650.000", rating: "4.9", sold: "980", disc: "35%", color: "from-purple-100 to-purple-50", emoji: "⌚" },
          { name: "GaN Charger 65W", price: "165.000", orig: "250.000", rating: "4.7", sold: "5.3rb", disc: "34%", color: "from-green-100 to-green-50", emoji: "🔌" },
        ].map((item) => (
          <div key={item.name} className="rounded-lg bg-white shadow-sm overflow-hidden border border-slate-100/80">
            <div className={`relative h-14 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
              <span className="text-[18px] drop-shadow-sm">{item.emoji}</span>
              <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-1 py-0.5 text-[5px] font-bold text-white shadow-sm">-{item.disc}</span>
              <span className="absolute right-0.5 top-0.5 text-[8px] text-slate-400">♡</span>
            </div>
            <div className="p-1.5">
              <p className="text-[6.5px] font-medium text-slate-800 leading-tight line-clamp-2">{item.name}</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-[8px] font-bold text-red-600">Rp{item.price}</span>
              </div>
              <p className="text-[6px] text-slate-400 line-through">Rp{item.orig}</p>
              <div className="mt-0.5 flex items-center gap-0.5">
                <span className="text-[6px] text-amber-400">★★★★★</span>
                <span className="text-[5.5px] text-slate-400">{item.sold} terjual</span>
              </div>
              <div className="mt-1 h-1 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400" style={{ width: "72%" }} />
              </div>
              <p className="text-[5px] text-red-500 font-medium mt-0.5">Segera habis!</p>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom nav */}
      <div className="flex justify-around border-t border-slate-200 bg-white px-2 py-1.5">
        {[
          { icon: "🏠", label: "Home", active: true },
          { icon: "🔍", label: "Explore", active: false },
          { icon: "📦", label: "Pesanan", active: false },
          { icon: "💬", label: "Chat", active: false },
          { icon: "👤", label: "Akun", active: false },
        ].map((n) => (
          <div key={n.label} className="flex flex-col items-center gap-0.5">
            <span className="text-[8px]">{n.icon}</span>
            <span className={`text-[5px] font-medium ${n.active ? "text-blue-600" : "text-slate-400"}`}>{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewLanding() {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Sticky navbar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center gap-1">
          <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-rose-500 to-pink-600" />
          <span className="text-[9px] font-bold text-slate-900 tracking-tight">GlowSkin</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[7px] text-slate-500 font-medium">Manfaat</span>
          <span className="text-[7px] text-slate-500 font-medium">Testimoni</span>
          <span className="text-[7px] text-slate-500 font-medium">FAQ</span>
          <span className="rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-2.5 py-0.5 text-[7px] font-bold text-white shadow-sm">Pesan Sekarang</span>
        </div>
      </div>
      {/* Hero with overlay visual */}
      <div className="relative bg-gradient-to-br from-rose-500 via-pink-500 to-purple-700 px-4 py-5 text-center overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/10" />
        <div className="absolute -left-3 bottom-0 h-12 w-12 rounded-full bg-white/5" />
        <div className="relative">
          <span className="inline-block rounded-full bg-white/20 px-2 py-0.5 text-[6px] font-bold text-white uppercase tracking-widest backdrop-blur-sm">✨ Skincare #1 Indonesia</span>
          <p className="mt-2 text-[12px] font-extrabold text-white leading-[1.2] tracking-tight">Wajah Glowing Dalam<br/>14 Hari Terbukti Klinis</p>
          <p className="mt-1 text-[7px] text-rose-100/90 leading-relaxed">Formula dermatologis dengan Niacinamide 10% + Hyaluronic Acid.<br/>Dipercaya 25.000+ wanita Indonesia.</p>
          <div className="mt-2.5 flex justify-center gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-[8px] font-bold text-rose-600 shadow-lg shadow-rose-900/20">💬 Pesan via WhatsApp</span>
            <span className="rounded-full border-2 border-white/50 px-2.5 py-1 text-[8px] font-medium text-white backdrop-blur-sm">Lihat Review</span>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="text-[8px] text-yellow-300">★★★★★</span>
            <span className="text-[7px] text-white/80 font-medium">4.9/5</span>
            <span className="text-[6px] text-rose-200">(2.380 ulasan terverifikasi)</span>
          </div>
        </div>
      </div>
      {/* Social proof bar */}
      <div className="flex items-center justify-center gap-4 bg-slate-50 py-2 border-b border-slate-100">
        {[
          { icon: "🏆", text: "BPOM Certified" },
          { icon: "🚚", text: "Free Ongkir" },
          { icon: "�", text: "Garansi 100%" },
          { icon: "⭐", text: "Best Seller" },
        ].map((v) => (
          <div key={v.text} className="flex items-center gap-0.5">
            <span className="text-[7px]">{v.icon}</span>
            <span className="text-[6px] font-medium text-slate-600">{v.text}</span>
          </div>
        ))}
      </div>
      {/* Benefit cards */}
      <div className="grid grid-cols-3 gap-2 p-2.5 flex-1">
        {[
          { icon: "🌿", title: "100% Natural", desc: "Tanpa bahan kimia berbahaya", color: "from-green-50 to-emerald-50 border-green-100" },
          { icon: "⚡", title: "Hasil 14 Hari", desc: "Terlihat cerah & glowing", color: "from-amber-50 to-yellow-50 border-amber-100" },
          { icon: "🛡️", title: "Tanpa Efek Samping", desc: "Aman untuk kulit sensitif", color: "from-blue-50 to-sky-50 border-blue-100" },
        ].map((b) => (
          <div key={b.title} className={`text-center rounded-xl bg-gradient-to-br ${b.color} border p-2`}>
            <span className="text-[12px]">{b.icon}</span>
            <p className="text-[7px] font-bold text-slate-800 mt-0.5">{b.title}</p>
            <p className="text-[5.5px] text-slate-500 mt-0.5 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewCompany() {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Premium navbar */}
      <div className="flex items-center justify-between bg-slate-950 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <div className="h-3.5 w-3.5 rounded bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-[6px] font-bold text-white">N</span>
          </div>
          <span className="text-[9px] font-bold text-white tracking-tight">NEXACORP</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[7px] text-slate-400 font-medium">Beranda</span>
          <span className="text-[7px] text-slate-400 font-medium">Tentang</span>
          <span className="text-[7px] text-slate-400 font-medium">Layanan</span>
          <span className="text-[7px] text-slate-400 font-medium">Portfolio</span>
          <span className="rounded-md bg-blue-500 px-2 py-0.5 text-[7px] font-medium text-white">Hubungi Kami</span>
        </div>
      </div>
      {/* Hero section with depth */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 px-4 py-6 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
        {/* Glowing orb */}
        <div className="absolute right-4 top-2 h-16 w-16 rounded-full bg-blue-500/20 blur-xl" />
        <div className="relative">
          <span className="inline-block rounded-full bg-blue-500/20 px-2 py-0.5 text-[6px] font-bold text-blue-300 uppercase tracking-widest border border-blue-500/30">Sejak 2010 — Trusted Partner</span>
          <p className="mt-2 text-[12px] font-extrabold text-white leading-[1.15] tracking-tight">Transformasi Digital<br/>untuk Bisnis Masa Depan</p>
          <p className="mt-1.5 text-[7px] text-slate-400 leading-relaxed max-w-[70%]">End-to-end technology solutions. Dari konsep hingga deployment, kami percepat pertumbuhan bisnis Anda.</p>
          <div className="mt-2.5 flex gap-2">
            <span className="rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-2.5 py-1 text-[7px] font-bold text-white shadow-lg shadow-blue-500/30">Konsultasi Gratis →</span>
            <span className="rounded-md border border-slate-600 px-2.5 py-1 text-[7px] font-medium text-slate-300">Lihat Portfolio</span>
          </div>
        </div>
      </div>
      {/* Stats bar */}
      <div className="grid grid-cols-4 divide-x divide-slate-100 bg-white border-b border-slate-100">
        {[
          { n: "150+", l: "Proyek", icon: "📊" },
          { n: "80+", l: "Klien", icon: "🤝" },
          { n: "12th", l: "Pengalaman", icon: "🏆" },
          { n: "99%", l: "Kepuasan", icon: "⭐" },
        ].map((s) => (
          <div key={s.l} className="py-2 text-center">
            <p className="text-[10px] font-extrabold text-slate-900">{s.n}</p>
            <p className="text-[5.5px] text-slate-500 font-medium">{s.l}</p>
          </div>
        ))}
      </div>
      {/* Services */}
      <div className="flex-1 px-3 py-2">
        <p className="text-[7px] font-bold text-slate-800 mb-1.5">Layanan Unggulan</p>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { icon: "🖥️", title: "Web App", color: "from-blue-50 to-sky-50" },
            { icon: "📱", title: "Mobile", color: "from-purple-50 to-violet-50" },
            { icon: "☁️", title: "Cloud", color: "from-cyan-50 to-teal-50" },
            { icon: "🤖", title: "AI/ML", color: "from-amber-50 to-orange-50" },
          ].map((s) => (
            <div key={s.title} className={`rounded-lg bg-gradient-to-br ${s.color} p-2 text-center border border-slate-100`}>
              <span className="text-[11px]">{s.icon}</span>
              <p className="text-[6px] font-bold text-slate-700 mt-0.5">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewSekolah() {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/WebSekolah.webp"
        alt="Preview Website Sekolah"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}

function PreviewOrganisasi() {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/yayasan.webp"
        alt="Preview Website Organisasi"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}

function PreviewPOS() {
  return (
    <div className="h-full bg-[#1e293b] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between bg-slate-900 px-2.5 py-1.5 border-b border-slate-700">
        <div className="flex items-center gap-1.5">
          <div className="h-3.5 w-3.5 rounded bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
            <span className="text-[5px] font-bold text-white">K</span>
          </div>
          <span className="text-[8px] font-bold text-white">KasirPro</span>
          <span className="rounded bg-emerald-500/20 px-1 py-0.5 text-[5px] font-bold text-emerald-400">PRO</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[6px] text-slate-400">👤 Ahmad (Kasir 1)</span>
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[6px] text-green-400">Online</span>
        </div>
      </div>
      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left - product area */}
        <div className="flex-1 flex flex-col p-2 overflow-hidden">
          {/* Search + actions */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex h-5 flex-1 items-center rounded-md bg-slate-800 px-2 border border-slate-600">
              <svg className="h-2 w-2 text-slate-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-[6px] text-slate-500">Scan barcode atau ketik nama...</span>
            </div>
            <span className="rounded-md bg-blue-600 px-1.5 py-1 text-[6px] font-medium text-white">📷 Scan</span>
          </div>
          {/* Category tabs */}
          <div className="flex gap-1 mb-2">
            {["☕ Minuman", "🍞 Makanan", "🍪 Snack", "🧊 Dingin"].map((c, i) => (
              <span key={c} className={`rounded-md px-1.5 py-0.5 text-[6px] font-medium ${i === 0 ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 border border-slate-700"}`}>{c}</span>
            ))}
          </div>
          {/* Product grid */}
          <div className="grid grid-cols-4 gap-1.5 flex-1 overflow-hidden">
            {[
              { n: "Kopi Latte", p: "28K", emoji: "☕" },
              { n: "Americano", p: "22K", emoji: "☕" },
              { n: "Cappuccino", p: "30K", emoji: "☕" },
              { n: "Matcha", p: "32K", emoji: "🍵" },
              { n: "Es Teh", p: "10K", emoji: "🧊" },
              { n: "Croissant", p: "22K", emoji: "🥐" },
              { n: "Roti Bakar", p: "18K", emoji: "🍞" },
              { n: "Mineral", p: "5K", emoji: "💧" },
            ].map((item) => (
              <div key={item.n} className="rounded-lg bg-slate-800 border border-slate-700 p-1.5 text-center hover:border-blue-500 transition-colors cursor-pointer flex flex-col items-center justify-center">
                <span className="text-[12px] mb-0.5">{item.emoji}</span>
                <p className="text-[5.5px] text-slate-300 truncate w-full">{item.n}</p>
                <p className="text-[7px] font-bold text-white mt-0.5">Rp{item.p}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right - order panel */}
        <div className="w-[38%] bg-slate-900 border-l border-slate-700 flex flex-col">
          {/* Order header */}
          <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-700">
            <span className="text-[7px] font-bold text-white">🧾 Order #047</span>
            <span className="text-[5px] text-slate-500">Meja 5</span>
          </div>
          {/* Items */}
          <div className="flex-1 px-2 py-1.5 space-y-1 overflow-hidden">
            {[
              { n: "Kopi Latte", q: 2, p: "56.000" },
              { n: "Croissant", q: 1, p: "22.000" },
              { n: "Matcha Latte", q: 1, p: "32.000" },
              { n: "Air Mineral", q: 2, p: "10.000" },
            ].map((i) => (
              <div key={i.n} className="flex items-center justify-between py-0.5 border-b border-slate-800">
                <div className="flex-1 min-w-0">
                  <span className="text-[6.5px] text-slate-300 block truncate">{i.n}</span>
                  <span className="text-[5.5px] text-slate-500">{i.q}x</span>
                </div>
                <span className="text-[7px] font-medium text-white">{i.p}</span>
              </div>
            ))}
          </div>
          {/* Totals */}
          <div className="px-2 py-1.5 border-t border-slate-700 space-y-0.5">
            <div className="flex justify-between">
              <span className="text-[6px] text-slate-500">Subtotal</span>
              <span className="text-[6px] text-slate-400">120.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[6px] text-slate-500">PPN (11%)</span>
              <span className="text-[6px] text-slate-400">13.200</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-slate-700">
              <span className="text-[8px] font-bold text-white">TOTAL</span>
              <span className="text-[8px] font-bold text-emerald-400">Rp 133.200</span>
            </div>
          </div>
          {/* Payment buttons */}
          <div className="px-2 pb-2 grid grid-cols-2 gap-1">
            <span className="rounded-md bg-slate-800 border border-slate-700 py-1 text-center text-[6px] font-medium text-slate-300">💵 Cash</span>
            <span className="rounded-md bg-gradient-to-r from-emerald-500 to-green-500 py-1 text-center text-[6px] font-bold text-white shadow-sm">✓ BAYAR</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewInventory() {
  return (
    <div className="h-full bg-[#f1f5f9] flex">
      {/* Sidebar */}
      <div className="w-[20%] bg-slate-900 flex flex-col">
        <div className="px-2 py-2 border-b border-slate-800">
          <div className="flex items-center gap-1">
            <div className="h-3.5 w-3.5 rounded bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <span className="text-[5px] font-bold text-white">S</span>
            </div>
            <span className="text-[7px] font-bold text-white">StokKu</span>
          </div>
        </div>
        <div className="px-1.5 py-2 space-y-0.5 flex-1">
          {[
            { icon: "📊", label: "Dashboard", active: false },
            { icon: "📦", label: "Produk", active: true },
            { icon: "📥", label: "Stok Masuk", active: false },
            { icon: "📤", label: "Stok Keluar", active: false },
            { icon: "🏷️", label: "Kategori", active: false },
            { icon: "📋", label: "Laporan", active: false },
            { icon: "👥", label: "Supplier", active: false },
          ].map((m) => (
            <div key={m.label} className={`flex items-center gap-1 rounded-md px-1.5 py-1 ${m.active ? "bg-blue-600 shadow-sm shadow-blue-500/30" : "hover:bg-slate-800"}`}>
              <span className="text-[6px]">{m.icon}</span>
              <span className={`text-[5.5px] ${m.active ? "text-white font-bold" : "text-slate-400 font-medium"}`}>{m.label}</span>
            </div>
          ))}
        </div>
        <div className="px-2 pb-2">
          <div className="rounded-md bg-slate-800 p-1.5">
            <p className="text-[5px] text-slate-500">Storage</p>
            <div className="h-1 w-full rounded-full bg-slate-700 mt-0.5">
              <div className="h-full rounded-full bg-blue-500" style={{ width: "65%" }} />
            </div>
            <p className="text-[5px] text-slate-500 mt-0.5">65% used</p>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between bg-white px-3 py-1.5 border-b border-slate-200">
          <div>
            <p className="text-[8px] font-bold text-slate-900">Manajemen Produk</p>
            <p className="text-[5.5px] text-slate-500">348 produk terdaftar</p>
          </div>
          <div className="flex gap-1.5">
            <div className="flex h-4 items-center rounded-md bg-slate-100 px-2 border border-slate-200">
              <span className="text-[5.5px] text-slate-500">🔍 Cari SKU atau nama...</span>
            </div>
            <span className="rounded-md bg-blue-600 px-2 py-0.5 text-[6px] font-bold text-white shadow-sm">+ Tambah Produk</span>
          </div>
        </div>
        {/* Alert banner */}
        <div className="mx-3 mt-1.5 flex items-center gap-1.5 rounded-md bg-amber-50 border border-amber-200 px-2 py-1">
          <span className="text-[7px]">⚠️</span>
          <span className="text-[6px] text-amber-700 font-medium">12 produk stok menipis & 3 produk sudah habis. Segera lakukan restok!</span>
          <span className="ml-auto text-[5.5px] text-amber-600 font-bold underline">Lihat Detail</span>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 px-3 py-2">
          {[
            { label: "Total SKU", val: "348", change: "+12", up: true, color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
            { label: "Stok Masuk", val: "1.250", change: "+180", up: true, color: "text-green-600", bg: "bg-green-50 border-green-100" },
            { label: "Stok Menipis", val: "12", change: "+3", up: false, color: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
            { label: "Stok Habis", val: "3", change: "+1", up: false, color: "text-red-600", bg: "bg-red-50 border-red-100" },
          ].map((c) => (
            <div key={c.label} className={`rounded-lg ${c.bg} border p-1.5`}>
              <p className="text-[5px] text-slate-500 font-medium">{c.label}</p>
              <div className="flex items-baseline gap-1">
                <p className={`text-[10px] font-extrabold ${c.color}`}>{c.val}</p>
                <span className={`text-[5px] font-bold ${c.up ? "text-green-500" : "text-red-500"}`}>{c.change}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div className="flex-1 mx-3 mb-2 rounded-lg bg-white border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-1 px-2 text-left text-[5.5px] font-bold text-slate-500 uppercase tracking-wider">SKU</th>
                <th className="py-1 px-2 text-left text-[5.5px] font-bold text-slate-500 uppercase tracking-wider">Produk</th>
                <th className="py-1 px-2 text-right text-[5.5px] font-bold text-slate-500 uppercase tracking-wider">Stok</th>
                <th className="py-1 px-2 text-right text-[5.5px] font-bold text-slate-500 uppercase tracking-wider">Harga</th>
                <th className="py-1 px-2 text-center text-[5.5px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { sku: "KS-001", n: "Kaos Polos Hitam", s: "245", price: "89.000", st: "Aman", c: "bg-green-100 text-green-700 border-green-200" },
                { sku: "TP-012", n: "Topi Baseball Premium", s: "12", price: "125.000", st: "Menipis", c: "bg-amber-100 text-amber-700 border-amber-200" },
                { sku: "TK-003", n: "Tas Kanvas Large", s: "0", price: "175.000", st: "Habis", c: "bg-red-100 text-red-700 border-red-200" },
                { sku: "JK-007", n: "Jaket Denim Wash", s: "89", price: "285.000", st: "Aman", c: "bg-green-100 text-green-700 border-green-200" },
                { sku: "SP-021", n: "Sneakers Canvas", s: "8", price: "245.000", st: "Menipis", c: "bg-amber-100 text-amber-700 border-amber-200" },
              ].map((r) => (
                <tr key={r.sku} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="py-1 px-2 text-[5.5px] text-blue-600 font-mono font-medium">{r.sku}</td>
                  <td className="py-1 px-2 text-[6px] text-slate-800 font-medium">{r.n}</td>
                  <td className="py-1 px-2 text-right text-[6.5px] font-bold text-slate-900">{r.s}</td>
                  <td className="py-1 px-2 text-right text-[6px] text-slate-600">Rp{r.price}</td>
                  <td className="py-1 px-2 text-center"><span className={`rounded-full border px-1.5 py-0.5 text-[5px] font-bold ${r.c}`}>{r.st}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PreviewBooking() {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-gradient-to-r from-teal-700 to-cyan-600 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
            <span className="text-[7px]">📅</span>
          </div>
          <span className="text-[9px] font-bold text-white tracking-tight">BookingKu</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[6.5px] text-teal-100 font-medium">Beranda</span>
          <span className="text-[6.5px] text-teal-100 font-medium">Layanan</span>
          <span className="text-[6.5px] text-teal-100 font-medium">Jadwal</span>
          <span className="rounded-md bg-white px-2 py-0.5 text-[6.5px] font-bold text-teal-700 shadow-sm">+ Booking</span>
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left - calendar & service */}
        <div className="flex-1 p-2.5 flex flex-col overflow-hidden">
          {/* Service selector */}
          <div className="flex gap-1 mb-2">
            {["💇 Potong Rambut", "💆 Creambath", "💅 Manicure", "🧖 Spa"].map((s, i) => (
              <span key={s} className={`rounded-full px-2 py-0.5 text-[5.5px] font-medium whitespace-nowrap ${i === 0 ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-600 border border-slate-200"}`}>{s}</span>
            ))}
          </div>
          {/* Calendar */}
          <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[8px] font-bold text-slate-900">Juni 2025</p>
              <div className="flex gap-1">
                <span className="flex h-4 w-4 items-center justify-center rounded-md bg-slate-100 text-[7px] text-slate-600 cursor-pointer">‹</span>
                <span className="flex h-4 w-4 items-center justify-center rounded-md bg-slate-100 text-[7px] text-slate-600 cursor-pointer">›</span>
              </div>
            </div>
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-0.5">
              {["Sen","Sel","Rab","Kam","Jum","Sab","Min"].map((d) => (
                <div key={d} className="text-center text-[5px] font-bold text-slate-400 pb-1 uppercase">{d}</div>
              ))}
              {/* Offset for June 2025 starts on Sunday */}
              {[null, null, null, null, null, null].map((_, i) => (
                <div key={`e${i}`} />
              ))}
              {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
                <div key={d} className={`flex h-[14px] items-center justify-center rounded-md text-[6px] transition-all ${
                  d === 15 ? "bg-teal-600 text-white font-bold shadow-sm shadow-teal-300/50 ring-2 ring-teal-300" :
                  [5, 12, 19, 26].includes(d) ? "bg-teal-500 text-white font-bold" :
                  [6, 7, 13, 14, 20, 21, 27].includes(d) ? "bg-teal-100 text-teal-700 font-medium" :
                  [3, 10, 17, 24].includes(d) ? "bg-red-50 text-red-400 line-through" :
                  "text-slate-600 hover:bg-slate-50"
                }`}>
                  {d}
                </div>
              ))}
            </div>
          </div>
          {/* Legend */}
          <div className="mt-1.5 flex gap-2.5">
            <span className="flex items-center gap-0.5 text-[5px] text-slate-500 font-medium"><span className="h-2 w-2 rounded-sm bg-teal-500" />Penuh</span>
            <span className="flex items-center gap-0.5 text-[5px] text-slate-500 font-medium"><span className="h-2 w-2 rounded-sm bg-teal-100" />Tersedia</span>
            <span className="flex items-center gap-0.5 text-[5px] text-slate-500 font-medium"><span className="h-2 w-2 rounded-sm bg-red-50 border border-red-200" />Libur</span>
            <span className="flex items-center gap-0.5 text-[5px] text-slate-500 font-medium"><span className="h-2 w-2 rounded-sm ring-2 ring-teal-400 bg-teal-600" />Hari Ini</span>
          </div>
        </div>
        {/* Right - time slots & booking */}
        <div className="w-[36%] border-l border-slate-200 bg-slate-50 flex flex-col overflow-hidden">
          <div className="px-2 py-2 border-b border-slate-200 bg-white">
            <p className="text-[7px] font-bold text-slate-900">Minggu, 15 Juni 2025</p>
            <p className="text-[5.5px] text-teal-600 font-medium">💇 Potong Rambut — 30 menit</p>
          </div>
          <div className="flex-1 px-2 py-1.5 space-y-1 overflow-hidden">
            <p className="text-[5.5px] text-slate-500 font-bold uppercase tracking-wider mb-1">Pilih Waktu</p>
            {[
              { time: "09:00", status: "available" },
              { time: "09:30", status: "available" },
              { time: "10:00", status: "booked", who: "Andi S." },
              { time: "10:30", status: "booked", who: "Budi R." },
              { time: "11:00", status: "available" },
              { time: "13:00", status: "booked", who: "Clara N." },
              { time: "13:30", status: "available" },
              { time: "14:00", status: "available" },
            ].map((slot) => (
              <div key={slot.time} className={`flex items-center justify-between rounded-md px-2 py-1 ${
                slot.status === "booked" ? "bg-slate-100 border border-slate-200" : "bg-white border border-teal-200 shadow-sm"
              }`}>
                <div className="flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${slot.status === "booked" ? "bg-slate-300" : "bg-teal-400"}`} />
                  <span className={`text-[6.5px] font-mono ${slot.status === "booked" ? "text-slate-400" : "text-slate-800 font-bold"}`}>{slot.time}</span>
                </div>
                {slot.status === "booked" ? (
                  <span className="text-[5px] text-slate-400 italic">{slot.who}</span>
                ) : (
                  <span className="text-[5.5px] text-teal-600 font-bold">Pilih →</span>
                )}
              </div>
            ))}
          </div>
          <div className="px-2 pb-2">
            <div className="rounded-md bg-gradient-to-r from-teal-600 to-cyan-600 py-1.5 text-center text-[7px] font-bold text-white shadow-sm shadow-teal-500/30">Konfirmasi Booking →</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PREVIEW_MAP: Record<string, React.FC> = {
  toko: PreviewToko,
  landing: PreviewLanding,
  company: PreviewCompany,
  sekolah: PreviewSekolah,
  organisasi: PreviewOrganisasi,
  pos: PreviewPOS,
  inventory: PreviewInventory,
  booking: PreviewBooking,
};

// ============ MAIN COMPONENT ============

export function LayananSection() {
  const [activeTab, setActiveTab] = useState("toko");
  const whatsappUrl = getDefaultWhatsAppUrl();

  const active = TABS.find((t) => t.id === activeTab) || TABS[0];
  const PreviewComponent = PREVIEW_MAP[active.id];

  return (
    <SectionWrapper id="layanan" className="bg-slate-50">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="section-label">LAYANAN KAMI</span>
          <h2 className="font-bold text-slate-900">
            Satu Partner, Semua Kebutuhan Digital
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            Pilih layanan yang sesuai — kami kerjakan dari nol sampai online.
          </p>
        </div>

        {/* Tab pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-[#E4E4E7] bg-white text-slate-500 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content: 2 columns */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          {/* Left — Info */}
          <div>
            {/* Tag */}
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <active.icon className="h-3 w-3" />
              {active.tag}
            </span>

            <h3 className="card-title-lg mt-4 font-bold text-slate-900">{active.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{active.desc}</p>

            {/* Features */}
            <ul className="mt-5 space-y-2.5">
              {active.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="text-sm text-slate-700">{f}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-6">
              <span className="text-xs text-slate-500">Mulai dari</span>
              <p className="text-2xl font-bold text-slate-900">{active.price}</p>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-[6px] bg-blue-600 px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                <MessageCircle className="h-4 w-4" />
                Konsultasi Gratis
              </a>
              <button
                type="button"
                className="inline-flex h-10 items-center rounded-[6px] border border-[#E4E4E7] bg-white px-5 text-sm font-medium text-slate-700 shadow-xs transition-colors hover:bg-slate-50"
              >
                Lihat Contoh →
              </button>
            </div>
          </div>

          {/* Right — Preview */}
          <div>
            <BrowserFrame url={active.previewUrl}>
              {PreviewComponent && <PreviewComponent />}
            </BrowserFrame>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
