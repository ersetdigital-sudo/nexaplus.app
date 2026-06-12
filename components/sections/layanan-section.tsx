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
    <div className="h-full bg-white">
      {/* Top navbar */}
      <div className="flex items-center justify-between bg-blue-600 px-3 py-1.5">
        <span className="text-[9px] font-bold text-white">🛒 TokoKu</span>
        <div className="flex items-center gap-2">
          <span className="text-[7px] text-blue-100">Kategori</span>
          <span className="text-[7px] text-blue-100">Promo</span>
          <span className="text-[7px] text-blue-100">Akun</span>
          <div className="relative">
            <span className="text-[8px] text-white">🛒</span>
            <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-500 text-[5px] font-bold text-white">3</span>
          </div>
        </div>
      </div>
      {/* Search bar */}
      <div className="border-b border-slate-100 bg-blue-600 px-3 pb-2">
        <div className="flex h-5 items-center rounded bg-white px-2">
          <span className="text-[7px] text-slate-400">🔍 Cari produk, brand, atau kategori...</span>
        </div>
      </div>
      {/* Flash sale banner */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-400 px-3 py-1.5">
        <span className="text-[8px] font-bold text-white">⚡ FLASH SALE</span>
        <span className="rounded bg-white/20 px-1 py-0.5 text-[7px] font-bold text-white">02:14:33</span>
        <span className="ml-auto text-[7px] text-white/80">Lihat Semua →</span>
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-3 gap-1.5 p-2">
        {[
          { name: "TWS Earbuds Pro", price: "Rp 285.000", orig: "Rp 450.000", rating: "4.8", sold: "2.1rb", discount: "-37%" },
          { name: "Smartwatch X2", price: "Rp 425.000", orig: "Rp 650.000", rating: "4.9", sold: "980", discount: "-35%" },
          { name: "Fast Charger 65W", price: "Rp 165.000", orig: "Rp 250.000", rating: "4.7", sold: "5.3rb", discount: "-34%" },
        ].map((item) => (
          <div key={item.name} className="rounded border border-slate-100 bg-white shadow-sm overflow-hidden">
            <div className="relative h-12 bg-slate-100 flex items-center justify-center">
              <div className="h-8 w-8 rounded bg-slate-200" />
              <span className="absolute left-0.5 top-0.5 rounded-sm bg-red-500 px-1 py-0.5 text-[5px] font-bold text-white">{item.discount}</span>
            </div>
            <div className="p-1">
              <p className="text-[7px] font-medium text-slate-800 leading-tight truncate">{item.name}</p>
              <p className="text-[8px] font-bold text-red-600 mt-0.5">{item.price}</p>
              <p className="text-[6px] text-slate-400 line-through">{item.orig}</p>
              <div className="mt-0.5 flex items-center gap-0.5">
                <span className="text-[6px] text-yellow-500">★</span>
                <span className="text-[6px] text-slate-500">{item.rating}</span>
                <span className="text-[6px] text-slate-400">| {item.sold} terjual</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom categories */}
      <div className="flex justify-around border-t border-slate-100 px-2 py-1.5">
        {["🏠 Home", "📦 Pesanan", "💬 Chat", "👤 Akun"].map((c) => (
          <span key={c} className="text-[6px] text-slate-500">{c}</span>
        ))}
      </div>
    </div>
  );
}

function PreviewLanding() {
  return (
    <div className="h-full bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-white px-3 py-2 border-b border-slate-100">
        <span className="text-[9px] font-bold text-slate-800">✨ GlowUp</span>
        <div className="flex items-center gap-2">
          <span className="text-[7px] text-slate-500">Manfaat</span>
          <span className="text-[7px] text-slate-500">Testimoni</span>
          <span className="text-[7px] text-slate-500">FAQ</span>
          <span className="rounded-full bg-rose-500 px-2 py-0.5 text-[7px] font-medium text-white">Order</span>
        </div>
      </div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 px-4 py-4 text-center">
        <p className="text-[7px] font-medium text-rose-200 uppercase tracking-wider">Skincare #1 Indonesia</p>
        <p className="mt-1 text-[11px] font-bold text-white leading-tight">Wajah Glowing dalam<br/>14 Hari, Tanpa Efek Samping</p>
        <p className="mt-1 text-[7px] text-rose-100">Sudah dipercaya 25.000+ wanita Indonesia</p>
        <div className="mx-auto mt-2 flex justify-center gap-1.5">
          <span className="rounded-full bg-white px-3 py-1 text-[8px] font-bold text-rose-600 shadow">Pesan via WhatsApp</span>
          <span className="rounded-full border border-white/40 px-2 py-1 text-[8px] text-white">Lihat Review</span>
        </div>
        <div className="mt-2 flex justify-center gap-1">
          <span className="text-[7px] text-yellow-300">★★★★★</span>
          <span className="text-[7px] text-rose-100">4.9/5 (2.380 ulasan)</span>
        </div>
      </div>
      {/* Trust badges */}
      <div className="flex items-center justify-center gap-3 py-2 border-b border-slate-50">
        {["✅ BPOM Certified", "🚚 Free Ongkir", "💯 Garansi 100%", "🔒 Pembayaran Aman"].map((v) => (
          <span key={v} className="text-[6px] text-slate-600">{v}</span>
        ))}
      </div>
      {/* Benefits */}
      <div className="grid grid-cols-3 gap-2 p-2.5">
        {[
          { icon: "🌿", title: "Natural", desc: "100% bahan alami" },
          { icon: "⚡", title: "Cepat", desc: "Hasil 14 hari" },
          { icon: "🛡️", title: "Aman", desc: "Tanpa mercury" },
        ].map((b) => (
          <div key={b.title} className="text-center rounded-lg bg-rose-50 p-1.5">
            <span className="text-[10px]">{b.icon}</span>
            <p className="text-[7px] font-bold text-slate-800">{b.title}</p>
            <p className="text-[6px] text-slate-500">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewCompany() {
  return (
    <div className="h-full bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-slate-900 px-3 py-2">
        <span className="text-[9px] font-bold text-white">◆ NEXACORP</span>
        <div className="flex items-center gap-2">
          <span className="text-[7px] text-slate-300">Beranda</span>
          <span className="text-[7px] text-slate-300">Tentang</span>
          <span className="text-[7px] text-slate-300">Layanan</span>
          <span className="text-[7px] text-slate-300">Portofolio</span>
          <span className="rounded bg-blue-500 px-1.5 py-0.5 text-[7px] text-white">Kontak</span>
        </div>
      </div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 px-4 py-5">
        <p className="text-[7px] font-medium text-blue-300 uppercase tracking-wider">Sejak 2010 — Terpercaya</p>
        <p className="mt-1 text-[11px] font-bold text-white leading-tight">Membangun Solusi Digital<br/>untuk Masa Depan Bisnis Anda</p>
        <p className="mt-1 text-[7px] text-slate-400">Konsultan IT & Pengembangan Software Enterprise</p>
        <div className="mt-2 flex gap-1.5">
          <span className="rounded bg-blue-500 px-2 py-0.5 text-[7px] font-medium text-white">Hubungi Kami</span>
          <span className="rounded border border-slate-500 px-2 py-0.5 text-[7px] text-slate-300">Lihat Layanan</span>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-4 gap-1 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
        {[
          { n: "150+", l: "Proyek Selesai" },
          { n: "80+", l: "Klien Aktif" },
          { n: "12", l: "Tahun Pengalaman" },
          { n: "99%", l: "Kepuasan Klien" },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <p className="text-[10px] font-bold text-blue-600">{s.n}</p>
            <p className="text-[6px] text-slate-500">{s.l}</p>
          </div>
        ))}
      </div>
      {/* Services preview */}
      <div className="px-3 py-2">
        <p className="text-[7px] font-bold text-slate-800 mb-1.5">Layanan Kami</p>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { icon: "🖥️", title: "Web Dev" },
            { icon: "📱", title: "Mobile App" },
            { icon: "☁️", title: "Cloud" },
          ].map((s) => (
            <div key={s.title} className="rounded border border-slate-100 bg-white p-1.5 text-center shadow-sm">
              <span className="text-[9px]">{s.icon}</span>
              <p className="text-[6px] font-medium text-slate-700 mt-0.5">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewSekolah() {
  return (
    <div className="h-full bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-green-700 px-3 py-2">
        <div className="flex items-center gap-1">
          <span className="text-[8px]">🏫</span>
          <span className="text-[9px] font-bold text-white">SDN 1 Cendekia</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[7px] text-green-200">Profil</span>
          <span className="text-[7px] text-green-200">Akademik</span>
          <span className="text-[7px] text-green-200">Berita</span>
          <span className="text-[7px] text-green-200">PPDB</span>
          <span className="text-[7px] text-green-200">Kontak</span>
        </div>
      </div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-3 py-3">
        <p className="text-[7px] text-green-200 uppercase tracking-wider">Tahun Ajaran 2025/2026</p>
        <p className="text-[10px] font-bold text-white mt-0.5">Selamat Datang di SDN 1 Cendekia</p>
        <p className="text-[7px] text-green-100 mt-0.5">Mendidik generasi unggul, berkarakter, dan berprestasi</p>
        <div className="mt-1.5 flex gap-1.5">
          <span className="rounded bg-white px-2 py-0.5 text-[7px] font-bold text-green-700">Daftar PPDB</span>
          <span className="rounded border border-white/40 px-2 py-0.5 text-[7px] text-white">Virtual Tour</span>
        </div>
      </div>
      {/* Quick info cards */}
      <div className="grid grid-cols-3 gap-1.5 px-2.5 py-2">
        {[
          { icon: "👨‍🏫", val: "32", label: "Guru" },
          { icon: "👨‍🎓", val: "480", label: "Siswa" },
          { icon: "🏆", val: "25+", label: "Prestasi" },
        ].map((i) => (
          <div key={i.label} className="rounded bg-green-50 p-1.5 text-center">
            <span className="text-[9px]">{i.icon}</span>
            <p className="text-[9px] font-bold text-green-700">{i.val}</p>
            <p className="text-[6px] text-slate-500">{i.label}</p>
          </div>
        ))}
      </div>
      {/* Announcements */}
      <div className="px-2.5 pb-2">
        <p className="text-[7px] font-bold text-slate-800 mb-1">📢 Pengumuman Terbaru</p>
        <div className="space-y-1">
          {[
            { date: "10 Jun", text: "Pendaftaran siswa baru gelombang 2 dibuka" },
            { date: "08 Jun", text: "Jadwal UAS semester genap 2025" },
            { date: "05 Jun", text: "Juara 1 Olimpiade Sains tingkat kota" },
          ].map((a) => (
            <div key={a.text} className="flex items-start gap-1.5 rounded bg-slate-50 px-1.5 py-1">
              <span className="rounded bg-green-100 px-1 py-0.5 text-[5px] font-medium text-green-700 whitespace-nowrap">{a.date}</span>
              <span className="text-[7px] text-slate-700 leading-tight">{a.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewOrganisasi() {
  return (
    <div className="h-full bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-violet-700 px-3 py-2">
        <span className="text-[9px] font-bold text-white">💜 Yayasan Kasih Bangsa</span>
        <div className="flex items-center gap-2">
          <span className="text-[7px] text-violet-200">Beranda</span>
          <span className="text-[7px] text-violet-200">Program</span>
          <span className="text-[7px] text-violet-200">Tentang</span>
          <span className="rounded bg-yellow-400 px-1.5 py-0.5 text-[7px] font-bold text-violet-900">Donasi</span>
        </div>
      </div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-4 py-4 text-center">
        <p className="text-[7px] text-violet-200 uppercase tracking-wider">Berbagi Kebaikan Sejak 2015</p>
        <p className="text-[11px] font-bold text-white mt-0.5 leading-tight">Bersama Kita Bisa<br/>Wujudkan Mimpi Mereka</p>
        <p className="text-[7px] text-violet-200 mt-1">Bantu anak-anak Indonesia raih pendidikan layak</p>
        <div className="mt-2 flex justify-center gap-1.5">
          <span className="rounded-full bg-yellow-400 px-2.5 py-0.5 text-[7px] font-bold text-violet-900">Donasi Sekarang</span>
          <span className="rounded-full border border-white/40 px-2 py-0.5 text-[7px] text-white">Jadi Relawan</span>
        </div>
      </div>
      {/* Impact stats */}
      <div className="grid grid-cols-4 gap-1 bg-violet-50 px-3 py-2">
        {[
          { n: "5.200+", l: "Anak Dibantu" },
          { n: "250+", l: "Relawan" },
          { n: "18", l: "Kota" },
          { n: "Rp 2.1M", l: "Dana Tersalurkan" },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <p className="text-[9px] font-bold text-violet-700">{s.n}</p>
            <p className="text-[5px] text-slate-500">{s.l}</p>
          </div>
        ))}
      </div>
      {/* Programs */}
      <div className="px-2.5 py-2">
        <p className="text-[7px] font-bold text-slate-800 mb-1.5">Program Kami</p>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { icon: "📚", title: "Beasiswa", desc: "Pendidikan gratis" },
            { icon: "🍚", title: "Pangan", desc: "1000 paket/bulan" },
            { icon: "🏥", title: "Kesehatan", desc: "Layanan medis" },
          ].map((p) => (
            <div key={p.title} className="rounded border border-violet-100 bg-white p-1.5 text-center">
              <span className="text-[9px]">{p.icon}</span>
              <p className="text-[7px] font-medium text-slate-800">{p.title}</p>
              <p className="text-[5px] text-slate-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewPOS() {
  return (
    <div className="h-full bg-slate-100">
      {/* Top bar */}
      <div className="flex items-center justify-between bg-slate-800 px-3 py-1.5">
        <span className="text-[9px] font-bold text-white">💳 KasirPro</span>
        <div className="flex items-center gap-2">
          <span className="text-[7px] text-slate-400">Kasir: Ahmad</span>
          <span className="text-[7px] text-slate-400">|</span>
          <span className="text-[7px] text-green-400">● Online</span>
        </div>
      </div>
      {/* Main layout */}
      <div className="flex h-[calc(100%-28px)]">
        {/* Left - product grid */}
        <div className="flex-1 p-2 overflow-hidden">
          {/* Search */}
          <div className="flex items-center gap-1 mb-1.5">
            <div className="flex h-4 flex-1 items-center rounded bg-white px-1.5 border border-slate-200">
              <span className="text-[6px] text-slate-400">🔍 Cari produk atau scan barcode...</span>
            </div>
            <span className="rounded bg-blue-500 px-1.5 py-0.5 text-[6px] text-white">+ Manual</span>
          </div>
          {/* Category tabs */}
          <div className="flex gap-1 mb-1.5">
            {["Semua", "Minuman", "Makanan", "Snack"].map((c, i) => (
              <span key={c} className={`rounded px-1.5 py-0.5 text-[6px] ${i === 1 ? "bg-blue-500 text-white" : "bg-white text-slate-600 border border-slate-200"}`}>{c}</span>
            ))}
          </div>
          {/* Products */}
          <div className="grid grid-cols-3 gap-1">
            {[
              { n: "Kopi Latte", p: "28K" },
              { n: "Americano", p: "22K" },
              { n: "Cappuccino", p: "30K" },
              { n: "Matcha Latte", p: "32K" },
              { n: "Es Teh", p: "10K" },
              { n: "Air Mineral", p: "5K" },
            ].map((item) => (
              <div key={item.n} className="rounded bg-white border border-slate-200 p-1 text-center cursor-pointer hover:border-blue-300">
                <div className="h-5 w-full rounded bg-slate-100 mb-0.5" />
                <p className="text-[6px] text-slate-700 truncate">{item.n}</p>
                <p className="text-[7px] font-bold text-slate-900">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right - cart */}
        <div className="w-[42%] border-l border-slate-200 bg-white p-2 flex flex-col">
          <p className="text-[7px] font-bold text-slate-800 mb-1">🧾 Pesanan #047</p>
          <div className="flex-1 space-y-1 overflow-hidden">
            {[
              { n: "Kopi Latte", q: "2x", p: "56.000" },
              { n: "Croissant", q: "1x", p: "22.000" },
              { n: "Air Mineral", q: "1x", p: "5.000" },
            ].map((i) => (
              <div key={i.n} className="flex items-center justify-between border-b border-dashed border-slate-100 pb-0.5">
                <div>
                  <span className="text-[7px] text-slate-700">{i.n}</span>
                  <span className="ml-1 text-[6px] text-slate-400">{i.q}</span>
                </div>
                <span className="text-[7px] text-slate-900">{i.p}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200 pt-1 mt-1">
            <div className="flex justify-between text-[6px] text-slate-500">
              <span>Subtotal</span><span>83.000</span>
            </div>
            <div className="flex justify-between text-[6px] text-slate-500">
              <span>Pajak (11%)</span><span>9.130</span>
            </div>
            <div className="flex justify-between mt-0.5">
              <span className="text-[8px] font-bold text-slate-900">TOTAL</span>
              <span className="text-[8px] font-bold text-slate-900">Rp 92.130</span>
            </div>
          </div>
          <div className="mt-1.5 grid grid-cols-2 gap-1">
            <span className="rounded bg-slate-100 py-0.5 text-center text-[6px] font-medium text-slate-700 border border-slate-200">💵 Tunai</span>
            <span className="rounded bg-green-600 py-0.5 text-center text-[6px] font-bold text-white">BAYAR →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewInventory() {
  return (
    <div className="h-full bg-slate-50">
      {/* Sidebar + content layout */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-[22%] bg-slate-900 p-2 space-y-1.5">
          <p className="text-[8px] font-bold text-white mb-2">📦 StokKu</p>
          {[
            { icon: "📊", label: "Dashboard", active: false },
            { icon: "📦", label: "Produk", active: true },
            { icon: "📥", label: "Stok Masuk", active: false },
            { icon: "📤", label: "Stok Keluar", active: false },
            { icon: "📋", label: "Laporan", active: false },
            { icon: "⚙️", label: "Pengaturan", active: false },
          ].map((m) => (
            <div key={m.label} className={`flex items-center gap-1 rounded px-1 py-0.5 ${m.active ? "bg-blue-600" : ""}`}>
              <span className="text-[6px]">{m.icon}</span>
              <span className={`text-[6px] ${m.active ? "text-white font-medium" : "text-slate-400"}`}>{m.label}</span>
            </div>
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 p-2 overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-[8px] font-bold text-slate-800">Manajemen Produk</p>
            <div className="flex gap-1">
              <span className="rounded bg-white border border-slate-200 px-1.5 py-0.5 text-[6px] text-slate-500">🔍 Cari produk...</span>
              <span className="rounded bg-blue-600 px-1.5 py-0.5 text-[6px] font-medium text-white">+ Tambah</span>
            </div>
          </div>
          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-1 mb-2">
            {[
              { label: "Total Produk", val: "348", color: "text-blue-600" },
              { label: "Stok Menipis", val: "12", color: "text-yellow-600" },
              { label: "Stok Habis", val: "3", color: "text-red-600" },
            ].map((c) => (
              <div key={c.label} className="rounded bg-white border border-slate-100 p-1.5">
                <p className="text-[5px] text-slate-500">{c.label}</p>
                <p className={`text-[10px] font-bold ${c.color}`}>{c.val}</p>
              </div>
            ))}
          </div>
          {/* Table */}
          <div className="rounded bg-white border border-slate-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-1 px-1.5 text-left text-[6px] font-medium text-slate-500">SKU</th>
                  <th className="py-1 px-1.5 text-left text-[6px] font-medium text-slate-500">Produk</th>
                  <th className="py-1 px-1.5 text-right text-[6px] font-medium text-slate-500">Stok</th>
                  <th className="py-1 px-1.5 text-right text-[6px] font-medium text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sku: "KS-001", n: "Kaos Polos Hitam", s: "245", st: "Aman", c: "bg-green-100 text-green-700" },
                  { sku: "TP-012", n: "Topi Baseball", s: "12", st: "Menipis", c: "bg-yellow-100 text-yellow-700" },
                  { sku: "TK-003", n: "Tas Kanvas Besar", s: "0", st: "Habis", c: "bg-red-100 text-red-700" },
                  { sku: "JK-007", n: "Jaket Denim", s: "89", st: "Aman", c: "bg-green-100 text-green-700" },
                  { sku: "SP-021", n: "Sepatu Sneaker", s: "8", st: "Menipis", c: "bg-yellow-100 text-yellow-700" },
                ].map((r) => (
                  <tr key={r.sku} className="border-b border-slate-50">
                    <td className="py-0.5 px-1.5 text-[6px] text-slate-400 font-mono">{r.sku}</td>
                    <td className="py-0.5 px-1.5 text-[7px] text-slate-700">{r.n}</td>
                    <td className="py-0.5 px-1.5 text-right text-[7px] font-medium text-slate-900">{r.s}</td>
                    <td className="py-0.5 px-1.5 text-right"><span className={`rounded-full px-1 py-0.5 text-[5px] font-medium ${r.c}`}>{r.st}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewBooking() {
  return (
    <div className="h-full bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-teal-700 px-3 py-2">
        <span className="text-[9px] font-bold text-white">📅 BookKu</span>
        <div className="flex items-center gap-2">
          <span className="text-[7px] text-teal-200">Beranda</span>
          <span className="text-[7px] text-teal-200">Layanan</span>
          <span className="text-[7px] text-teal-200">Jadwal</span>
          <span className="rounded bg-white px-1.5 py-0.5 text-[7px] font-medium text-teal-700">Booking</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex h-[calc(100%-32px)]">
        {/* Left - calendar */}
        <div className="flex-1 p-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[8px] font-bold text-slate-800">Juni 2025</p>
            <div className="flex gap-1">
              <span className="rounded bg-slate-100 px-1 py-0.5 text-[7px] text-slate-600">‹</span>
              <span className="rounded bg-slate-100 px-1 py-0.5 text-[7px] text-slate-600">›</span>
            </div>
          </div>
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-0.5">
            {["Sen","Sel","Rab","Kam","Jum","Sab","Min"].map((d) => (
              <div key={d} className="text-center text-[5px] font-medium text-slate-400 pb-0.5">{d}</div>
            ))}
            {/* Empty cells for alignment */}
            {[null, null, null, null, null, null].map((_, i) => (
              <div key={`e${i}`} />
            ))}
            {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
              <div key={d} className={`flex h-4 items-center justify-center rounded text-[6px] ${
                [5, 12, 19].includes(d) ? "bg-teal-500 text-white font-bold" :
                [6, 7, 13, 20, 21].includes(d) ? "bg-teal-100 text-teal-700" :
                d === 15 ? "ring-1 ring-teal-400 text-teal-700 font-bold" :
                [14, 27, 28].includes(d) ? "bg-red-100 text-red-400 line-through" :
                "text-slate-600 hover:bg-slate-50"
              }`}>
                {d}
              </div>
            ))}
          </div>
          {/* Legend */}
          <div className="mt-1.5 flex gap-2">
            <span className="flex items-center gap-0.5 text-[5px] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Penuh</span>
            <span className="flex items-center gap-0.5 text-[5px] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-teal-100" /> Sebagian</span>
            <span className="flex items-center gap-0.5 text-[5px] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-red-100" /> Libur</span>
            <span className="flex items-center gap-0.5 text-[5px] text-slate-500"><span className="h-1.5 w-1.5 ring-1 ring-teal-400 rounded-full" /> Hari Ini</span>
          </div>
        </div>
        {/* Right - time slots */}
        <div className="w-[38%] border-l border-slate-100 p-2 bg-slate-50">
          <p className="text-[7px] font-bold text-slate-800 mb-0.5">15 Juni 2025</p>
          <p className="text-[6px] text-slate-500 mb-1.5">Pilih waktu tersedia:</p>
          <div className="space-y-1">
            {[
              { time: "09:00", status: "available" },
              { time: "10:00", status: "booked" },
              { time: "11:00", status: "available" },
              { time: "13:00", status: "booked" },
              { time: "14:00", status: "available" },
              { time: "15:00", status: "available" },
              { time: "16:00", status: "booked" },
            ].map((slot) => (
              <div key={slot.time} className={`flex items-center justify-between rounded px-1.5 py-0.5 ${
                slot.status === "booked" ? "bg-slate-200" : "bg-white border border-teal-200"
              }`}>
                <span className={`text-[7px] ${slot.status === "booked" ? "text-slate-400" : "text-slate-700 font-medium"}`}>{slot.time}</span>
                {slot.status === "booked" ? (
                  <span className="text-[5px] text-slate-400">Terisi</span>
                ) : (
                  <span className="text-[5px] text-teal-600 font-medium">Pilih</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 rounded bg-teal-600 py-1 text-center text-[7px] font-bold text-white">Konfirmasi Booking</div>
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
