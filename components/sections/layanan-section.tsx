"use client";

import { useState } from "react";
import { CheckCircle, ShoppingCart, Layout, Building2, GraduationCap, Users, Monitor, Package, CalendarCheck, MessageCircle, Landmark } from "lucide-react";
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
  {
    id: "pemerintah",
    label: "Pemerintahan",
    icon: Landmark,
    tag: "Instansi Pemerintah",
    title: "Website Pemerintahan",
    desc: "Website resmi instansi pemerintah dengan fitur informasi publik, transparansi, dan pelayanan online.",
    features: [
      "Portal berita & pengumuman",
      "Profil pejabat & struktur organisasi",
      "Layanan publik online",
      "Transparansi anggaran & PPID",
    ],
    price: "Rp 5.000.000",
    previewUrl: "desaku.go.id",
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
    <div className="h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/toko online.webp" alt="Preview Toko Online" className="h-full w-full object-cover object-top" />
    </div>
  );
}

function PreviewLanding() {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/landingpage.webp" alt="Preview Landing Page" className="h-full w-full object-cover object-top" />
    </div>
  );
}

function PreviewCompany() {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/company profile.webp" alt="Preview Company Profile" className="h-full w-full object-cover object-top" />
    </div>
  );
}

function PreviewSekolah() {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/WebSekolah.webp" alt="Preview Website Sekolah" className="h-full w-full object-cover object-top" />
    </div>
  );
}

function PreviewOrganisasi() {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/yayasan.webp" alt="Preview Website Organisasi" className="h-full w-full object-cover object-top" />
    </div>
  );
}

function PreviewPOS() {
  return (
    <div className="h-full bg-[#1e293b] flex flex-col">
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
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col p-2 overflow-hidden">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex h-5 flex-1 items-center rounded-md bg-slate-800 px-2 border border-slate-600">
              <span className="text-[6px] text-slate-500">🔍 Scan barcode atau ketik nama...</span>
            </div>
            <span className="rounded-md bg-blue-600 px-1.5 py-1 text-[6px] font-medium text-white">📷 Scan</span>
          </div>
          <div className="flex gap-1 mb-2">
            {["☕ Minuman", "🍞 Makanan", "🍪 Snack", "🧊 Dingin"].map((c, i) => (
              <span key={c} className={`rounded-md px-1.5 py-0.5 text-[6px] font-medium ${i === 0 ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 border border-slate-700"}`}>{c}</span>
            ))}
          </div>
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
        <div className="w-[38%] bg-slate-900 border-l border-slate-700 flex flex-col">
          <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-700">
            <span className="text-[7px] font-bold text-white">🧾 Order #047</span>
            <span className="text-[5px] text-slate-500">Meja 5</span>
          </div>
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
          <div className="px-2 py-1.5 border-t border-slate-700 space-y-0.5">
            <div className="flex justify-between"><span className="text-[6px] text-slate-500">Subtotal</span><span className="text-[6px] text-slate-400">120.000</span></div>
            <div className="flex justify-between"><span className="text-[6px] text-slate-500">PPN (11%)</span><span className="text-[6px] text-slate-400">13.200</span></div>
            <div className="flex justify-between pt-1 border-t border-slate-700">
              <span className="text-[8px] font-bold text-white">TOTAL</span>
              <span className="text-[8px] font-bold text-emerald-400">Rp 133.200</span>
            </div>
          </div>
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
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
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
        <div className="mx-3 mt-1.5 flex items-center gap-1.5 rounded-md bg-amber-50 border border-amber-200 px-2 py-1">
          <span className="text-[7px]">⚠️</span>
          <span className="text-[6px] text-amber-700 font-medium">12 produk stok menipis & 3 produk sudah habis.</span>
        </div>
        <div className="grid grid-cols-4 gap-2 px-3 py-2">
          {[
            { label: "Total SKU", val: "348", color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
            { label: "Stok Masuk", val: "1.250", color: "text-green-600", bg: "bg-green-50 border-green-100" },
            { label: "Stok Menipis", val: "12", color: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
            { label: "Stok Habis", val: "3", color: "text-red-600", bg: "bg-red-50 border-red-100" },
          ].map((c) => (
            <div key={c.label} className={`rounded-lg ${c.bg} border p-1.5`}>
              <p className="text-[5px] text-slate-500 font-medium">{c.label}</p>
              <p className={`text-[10px] font-extrabold ${c.color}`}>{c.val}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 mx-3 mb-2 rounded-lg bg-white border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-1 px-2 text-left text-[5.5px] font-bold text-slate-500 uppercase">SKU</th>
                <th className="py-1 px-2 text-left text-[5.5px] font-bold text-slate-500 uppercase">Produk</th>
                <th className="py-1 px-2 text-right text-[5.5px] font-bold text-slate-500 uppercase">Stok</th>
                <th className="py-1 px-2 text-center text-[5.5px] font-bold text-slate-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { sku: "KS-001", n: "Kaos Polos Hitam", s: "245", st: "Aman", c: "bg-green-100 text-green-700" },
                { sku: "TP-012", n: "Topi Baseball", s: "12", st: "Menipis", c: "bg-amber-100 text-amber-700" },
                { sku: "TK-003", n: "Tas Kanvas", s: "0", st: "Habis", c: "bg-red-100 text-red-700" },
                { sku: "JK-007", n: "Jaket Denim", s: "89", st: "Aman", c: "bg-green-100 text-green-700" },
                { sku: "SP-021", n: "Sneakers Canvas", s: "8", st: "Menipis", c: "bg-amber-100 text-amber-700" },
              ].map((r) => (
                <tr key={r.sku} className="border-b border-slate-50">
                  <td className="py-1 px-2 text-[5.5px] text-blue-600 font-mono">{r.sku}</td>
                  <td className="py-1 px-2 text-[6px] text-slate-800">{r.n}</td>
                  <td className="py-1 px-2 text-right text-[6.5px] font-bold text-slate-900">{r.s}</td>
                  <td className="py-1 px-2 text-center"><span className={`rounded-full px-1.5 py-0.5 text-[5px] font-bold ${r.c}`}>{r.st}</span></td>
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
    <div className="h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/booking.webp" alt="Preview Sistem Booking" className="h-full w-full object-cover object-top" />
    </div>
  );
}

function PreviewPemerintah() {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/pemerintah.webp" alt="Preview Website Pemerintahan" className="h-full w-full object-cover object-top" />
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
  pemerintah: PreviewPemerintah,
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
