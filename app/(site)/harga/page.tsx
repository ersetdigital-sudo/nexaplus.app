import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { LayananCrossLinks } from "@/components/shared/layanan-cross-links";
import { pricingPackages, comparisonRows, pricingFaq } from "@/data/pricing";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Harga Jasa Pembuatan Website — Paket & Perbandingan",
  description:
    "Harga jasa pembuatan website NexaPlus: landing page mulai Rp 500rb, toko online mulai Rp 1,5jt, company profile mulai Rp 2,5jt. Transparan, termasuk hosting + SSL gratis 1 tahun.",
  openGraph: {
    title: "Harga Jasa Pembuatan Website — Paket & Perbandingan | NexaPlus",
    description:
      "Harga jasa pembuatan website transparan: landing page mulai Rp 500rb, toko online mulai Rp 1,5jt. Termasuk hosting + SSL gratis 1 tahun.",
    type: "website",
  },
  alternates: {
    canonical: "https://nexaplus.web.id/harga",
  },
};

function waLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <CheckCircle className="mx-auto h-5 w-5 text-orange-500" aria-label="Termasuk" />;
  }
  if (value === false) {
    return <XCircle className="mx-auto h-5 w-5 text-slate-300" aria-label="Tidak termasuk" />;
  }
  return <span className="text-sm text-slate-700">{value}</span>;
}

export default function HargaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "OfferCatalog",
        name: "Paket Jasa Pembuatan Website NexaPlus",
        url: `${siteConfig.url}/harga`,
        provider: { "@id": `${siteConfig.url}/#organization` },
        itemListElement: pricingPackages
          .filter((p) => p.priceNumeric !== null)
          .map((p) => ({
            "@type": "Offer",
            name: `${p.service} — ${p.tier}`,
            price: p.priceNumeric,
            priceCurrency: "IDR",
            url: `${siteConfig.url}${p.href}`,
            description: p.suitedFor,
          })),
      },
      {
        "@type": "FAQPage",
        mainEntity: pricingFaq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="mb-8">
            <Breadcrumb
              variant="light"
              items={[{ label: "Home", href: "/" }, { label: "Harga" }]}
            />
          </div>

          <div className="max-w-3xl">
            <h1
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-[1.1] text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Harga Jasa Pembuatan Website yang{" "}
              <span className="text-orange-500 italic">Transparan</span>
            </h1>
            <p className="mt-6 text-base text-slate-600 leading-relaxed max-w-2xl">
              Biaya pembuatan website di NexaPlus mulai dari{" "}
              <strong className="text-slate-900">Rp 500.000</strong> untuk landing page hingga{" "}
              <strong className="text-slate-900">Rp 5.000.000</strong> untuk company profile
              premium. Semua paket sudah termasuk hosting dan SSL gratis tahun pertama — tanpa
              biaya tersembunyi.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PACKAGE CARDS ===== */}
      <section className="bg-slate-50 py-16 md:py-20" aria-labelledby="paket-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2
            id="paket-heading"
            className="text-3xl font-bold text-slate-900 sm:text-4xl text-center mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pilih Paket Sesuai Kebutuhan
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-2xl p-6 ${
                  pkg.popular
                    ? "bg-slate-900 shadow-2xl"
                    : "border border-slate-200 bg-white"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                    Paling Populer
                  </div>
                )}
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    pkg.popular ? "text-orange-400" : "text-orange-500"
                  }`}
                >
                  {pkg.service}
                </p>
                <h3
                  className={`mt-1 text-lg font-bold ${
                    pkg.popular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {pkg.tier}
                </h3>
                <div className="mt-4">
                  <span
                    className={`text-2xl font-extrabold ${
                      pkg.popular ? "text-orange-400" : "text-slate-900"
                    }`}
                  >
                    {pkg.price}
                  </span>
                </div>
                <p
                  className={`mt-2 text-xs leading-relaxed ${
                    pkg.popular ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {pkg.suitedFor} · {pkg.duration}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${
                        pkg.popular ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      <CheckCircle
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          pkg.popular ? "text-orange-400" : "text-orange-500"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(pkg.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Konsultasi Gratis
                </a>
                {pkg.href !== "/#layanan" && (
                  <Link
                    href={pkg.href}
                    className={`mt-3 flex items-center justify-center gap-1 text-xs font-medium transition-colors ${
                      pkg.popular
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-500 hover:text-orange-600"
                    }`}
                  >
                    Detail layanan
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="perbandingan-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              id="perbandingan-heading"
              className="text-3xl font-bold text-slate-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Perbandingan Paket Website
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Bandingkan fitur setiap jenis website untuk menemukan yang paling sesuai dengan
              kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">
                Perbandingan fitur paket landing page, toko online, company profile, dan website
                sekolah
              </caption>
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th scope="col" className="px-5 py-4 text-sm font-semibold">
                    Fitur
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-center">
                    Landing Page
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-center">
                    Toko Online
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-center">
                    Company Profile
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-center">
                    Website Sekolah
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <th
                      scope="row"
                      className="px-5 py-3.5 text-sm font-medium text-slate-900"
                    >
                      {row.feature}
                    </th>
                    <td className="px-5 py-3.5 text-center">
                      <CellValue value={row.landingPage} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <CellValue value={row.tokoOnline} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <CellValue value={row.companyProfile} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <CellValue value={row.websiteSekolah} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-slate-50 py-16 md:py-20" aria-labelledby="faq-harga-heading">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h2
            id="faq-harga-heading"
            className="text-3xl font-bold text-slate-900 sm:text-4xl text-center mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pertanyaan Seputar Harga
          </h2>
          <div className="space-y-4">
            {pricingFaq.map((f) => (
              <details
                key={f.question}
                className="group rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 list-none">
                  {f.question}
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white sm:text-4xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Masih Bingung Pilih Paket?
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Ceritakan kebutuhan bisnis Anda, kami bantu rekomendasikan paket yang paling sesuai —
            gratis, tanpa komitmen.
          </p>
          <a
            href={waLink(siteConfig.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </section>

      <LayananCrossLinks currentSlug="" />
    </div>
  );
}
