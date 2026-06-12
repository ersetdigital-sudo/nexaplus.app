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
      <div className="flex items-center justify-between bg-blue-600 px-3 py-1.5">
        <span className="text-[8px] font-bold text-white">🛒 TokoKu</span>
        <div className="flex gap-1">
          <span className="text-[7px] text-blue-100">Produk</span>
          <span className="text-[7px] text-blue-100">Promo</span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-sky-400 px-3 py-3">
        <span className="inline-block rounded-full bg-red-500 px-1.5 py-0.5 text-[7px] font-bold text-white">FLASH SALE</span>
        <p className="mt-1 text-[9px] font-bold text-white">Diskon s/d 50%</p>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {["🎧 Earbuds\nRp 285K", "⌚ Smartwatch\nRp 425K", "🔌 Charger\nRp 165K"].map((item) => (
          <div key={item} className="rounded border border-slate-100 bg-slate-50 p-1.5 text-center">
            <p className="whitespace-pre-line text-[8px] text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewLanding() {
  return (
    <div className="h-full bg-white">
      <div className="flex items-center justify-between bg-white px-3 py-1.5 border-b border-slate-100">
        <span className="text-[8px] font-bold text-slate-800">✨ Brand</span>
        <span className="rounded-full bg-rose-500 px-1.5 py-0.5 text-[7px] text-white">Pesan</span>
      </div>
      <div className="bg-gradient-to-br from-rose-500 to-pink-600 px-4 py-5 text-center">
        <p className="text-[10px] font-bold text-white">Produk #1 Terlaris</p>
        <p className="mt-0.5 text-[7px] text-rose-100">Sudah dipakai 10.000+ orang</p>
        <div className="mx-auto mt-2 w-fit rounded-full bg-white px-3 py-1 text-[8px] font-bold text-rose-600">Beli Sekarang</div>
        <p className="mt-2 text-[7px] text-rose-200">⭐⭐⭐⭐⭐ 4.9 (2.380 ulasan)</p>
      </div>
      <div className="flex gap-2 p-3">
        {["🚀 Cepat", "✅ Aman", "💯 Original"].map((v) => (
          <span key={v} className="rounded bg-rose-50 px-1.5 py-0.5 text-[7px] text-rose-700">{v}</span>
        ))}
      </div>
    </div>
  );
}

function PreviewCompany() {
  return (
    <div className="h-full bg-white">
      <div className="flex items-center justify-between bg-slate-900 px-3 py-1.5">
        <span className="text-[8px] font-bold text-white">Corp.</span>
        <div className="flex gap-2">
          <span className="text-[7px] text-slate-300">About</span>
          <span className="text-[7px] text-slate-300">Services</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-4 py-5 text-center">
        <p className="text-[10px] font-bold text-white">Membangun Masa Depan</p>
        <p className="mt-0.5 text-[7px] text-slate-300">Solusi terpercaya untuk industri Anda</p>
      </div>
      <div className="flex justify-center gap-4 p-3">
        {[{ n: "150+", l: "Proyek" }, { n: "80+", l: "Klien" }, { n: "12", l: "Tahun" }].map((s) => (
          <div key={s.l} className="text-center">
            <p className="text-[11px] font-bold text-slate-900">{s.n}</p>
            <p className="text-[7px] text-slate-500">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewSekolah() {
  return (
    <div className="h-full bg-white">
      <div className="flex items-center justify-between bg-green-700 px-3 py-1.5">
        <span className="text-[8px] font-bold text-white">🏫 SDN 1</span>
        <span className="text-[7px] text-green-200">Profil</span>
      </div>
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-3 py-3">
        <p className="text-[9px] font-bold text-white">Selamat Datang!</p>
        <p className="text-[7px] text-green-100">Mendidik generasi unggul</p>
      </div>
      <div className="space-y-1.5 p-3">
        <div className="flex items-center gap-1 rounded bg-green-50 p-1.5">
          <span className="text-[8px]">🔔</span>
          <span className="text-[7px] text-slate-700">Pendaftaran siswa baru dibuka</span>
        </div>
        <div className="flex items-center gap-1 rounded bg-green-50 p-1.5">
          <span className="text-[8px]">📅</span>
          <span className="text-[7px] text-slate-700">Ujian semester 15 Juni 2025</span>
        </div>
      </div>
    </div>
  );
}

function PreviewOrganisasi() {
  return (
    <div className="h-full bg-white">
      <div className="flex items-center justify-between bg-violet-700 px-3 py-1.5">
        <span className="text-[8px] font-bold text-white">💜 Yayasan</span>
        <span className="text-[7px] text-violet-200">Program</span>
      </div>
      <div className="bg-gradient-to-r from-violet-600 to-purple-500 px-3 py-3 text-center">
        <p className="text-[9px] font-bold text-white">Bersama Kita Bisa</p>
        <p className="text-[7px] text-violet-100">Membantu sesama sejak 2015</p>
      </div>
      <div className="flex justify-center gap-3 p-3">
        {[{ n: "5.000+", l: "Anak Dibantu" }, { n: "200+", l: "Relawan" }, { n: "9", l: "Tahun" }].map((s) => (
          <div key={s.l} className="text-center">
            <p className="text-[10px] font-bold text-violet-700">{s.n}</p>
            <p className="text-[7px] text-slate-500">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="px-3">
        <div className="rounded bg-violet-50 py-1 text-center text-[8px] font-medium text-violet-700">Donasi Sekarang</div>
      </div>
    </div>
  );
}

function PreviewPOS() {
  return (
    <div className="h-full bg-white">
      <div className="flex items-center justify-between bg-slate-800 px-3 py-1.5">
        <span className="text-[8px] font-bold text-white">💳 KasirPro</span>
        <span className="text-[7px] text-slate-300">Transaksi Baru</span>
      </div>
      <div className="p-3">
        <div className="space-y-1">
          {[{ n: "Kopi Latte", p: "28.000" }, { n: "Croissant", p: "22.000" }, { n: "Air Mineral", p: "5.000" }].map((i) => (
            <div key={i.n} className="flex justify-between border-b border-dashed border-slate-200 pb-1">
              <span className="text-[8px] text-slate-700">{i.n}</span>
              <span className="text-[8px] text-slate-900">Rp {i.p}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between border-t border-slate-300 pt-2">
          <span className="text-[9px] font-bold text-slate-900">TOTAL</span>
          <span className="text-[9px] font-bold text-slate-900">Rp 55.000</span>
        </div>
        <div className="mt-2 rounded bg-green-600 py-1 text-center text-[8px] font-bold text-white">BAYAR</div>
      </div>
    </div>
  );
}

function PreviewInventory() {
  return (
    <div className="h-full bg-white">
      <div className="flex items-center justify-between bg-slate-900 px-3 py-1.5">
        <span className="text-[8px] font-bold text-white">📦 StokKu</span>
        <span className="text-[7px] text-slate-300">Dashboard</span>
      </div>
      <div className="p-3">
        <p className="mb-2 text-[8px] font-semibold text-slate-700">Stok Produk</p>
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-0.5 text-left text-[7px] text-slate-500">Produk</th>
              <th className="py-0.5 text-right text-[7px] text-slate-500">Stok</th>
              <th className="py-0.5 text-right text-[7px] text-slate-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {[{ n: "Kaos Polos", s: "245", st: "Aman", c: "bg-green-100 text-green-700" }, { n: "Topi Baseball", s: "12", st: "Menipis", c: "bg-yellow-100 text-yellow-700" }, { n: "Tas Kanvas", s: "0", st: "Habis", c: "bg-red-100 text-red-700" }].map((r) => (
              <tr key={r.n} className="border-b border-slate-100">
                <td className="py-1 text-[8px] text-slate-700">{r.n}</td>
                <td className="py-1 text-right text-[8px] text-slate-900">{r.s}</td>
                <td className="py-1 text-right"><span className={`rounded-full px-1 py-0.5 text-[6px] font-medium ${r.c}`}>{r.st}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PreviewBooking() {
  return (
    <div className="h-full bg-white">
      <div className="flex items-center justify-between bg-teal-700 px-3 py-1.5">
        <span className="text-[8px] font-bold text-white">📅 BookKu</span>
        <span className="text-[7px] text-teal-200">Jadwal</span>
      </div>
      <div className="p-3">
        <p className="mb-2 text-[8px] font-semibold text-slate-700">Juni 2025</p>
        <div className="grid grid-cols-7 gap-1">
          {["S","S","R","K","J","S","M"].map((d) => (
            <div key={d} className="text-center text-[6px] font-medium text-slate-400">{d}</div>
          ))}
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((d) => (
            <div key={d} className={`flex h-5 items-center justify-center rounded text-[7px] ${[3,7,10].includes(d) ? "bg-blue-500 text-white font-bold" : [5,12].includes(d) ? "bg-blue-100 text-blue-700" : "text-slate-600"}`}>
              {d}
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-2">
          <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[7px] text-blue-700">● Booked</span>
          <span className="rounded bg-slate-50 px-1.5 py-0.5 text-[7px] text-slate-500">○ Available</span>
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
