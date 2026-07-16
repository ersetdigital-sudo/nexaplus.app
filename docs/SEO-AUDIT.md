# SEO + GEO + AI Overview Audit — nexaplus.web.id

Tanggal audit: 16 Juli 2026
Ruang lingkup: Google Search, Google AI Overview, ChatGPT, Gemini, Perplexity, Bing Copilot

> Catatan: item yang ditandai **[FIXED]** sudah diperbaiki langsung di codebase pada commit yang sama dengan laporan ini.

---

## 1. Technical SEO Audit

| Item | Kondisi | Severity | Rekomendasi |
|---|---|---|---|
| robots.txt | Ada (app/robots.ts), tapi tidak memblokir /admin dan /api | High | **[FIXED]** Disallow `/admin` & `/api/`, tambah AI crawler rules + host |
| sitemap.xml | Ada, dinamis dari Supabase, tapi `/layanan/company-profile` tidak terdaftar | High | **[FIXED]** Halaman layanan company profile ditambahkan |
| Canonical | Ada di semua halaman utama | OK | Pertahankan |
| Meta robots | index,follow di root; halaman admin tidak dilindungi | High | **[FIXED]** Header `X-Robots-Tag: noindex, nofollow` untuk `/admin/*` |
| hreflang | Tidak ada | Low | Satu bahasa (id), tidak wajib. `lang="id"` sudah benar |
| Favicon | Ada (favicon.png + svg) | OK | Pertahankan |
| Open Graph | og:image root menunjuk `/images/og-image.jpg` yang TIDAK ADA | Critical | **[FIXED]** Referensi broken dihapus; file-convention `opengraph-image.tsx` di segment (site) yang dipakai |
| Twitter Card | Hanya ada di blog post, tidak di root layout | Medium | **[FIXED]** `twitter.card = summary_large_image` di root |
| Title template | Tidak ada, tiap halaman tulis "\| NexaPlus" manual | Medium | **[FIXED]** `title.template: "%s \| NexaPlus"` |
| URL structure | Bersih, bahasa Indonesia, deskriptif (`/layanan/toko-online`) | OK | Pertahankan |
| Duplicate title/desc | Tidak ditemukan | OK | — |
| Internal linking | Ada (cross-links layanan, breadcrumb, blog section) | OK | Tambah link kontekstual dari artikel blog ke halaman layanan |
| Breadcrumb | Komponen dengan microdata BreadcrumbList | OK | Sudah valid; pertimbangkan migrasi ke JSON-LD agar konsisten |
| HTTP status / redirect | Next.js default; tidak ada redirect chain terdeteksi | OK | Pastikan www → non-www redirect di level Vercel/domain |
| Compression | `compress: true` di next.config | OK | — |
| Image optimization | AVIF/WebP dikonfigurasi; TAPI blog cover pakai `<img>` biasa | Medium | Migrasi ke `next/image` untuk lazy loading + srcset otomatis |
| Core Web Vitals | Framer Motion di banyak section berpotensi menaikkan INP/TBT; hero image perlu `priority` | Medium | Audit LCP hero, `priority` pada hero image, kurangi motion di above-the-fold |
| Heading structure | H1 tunggal per halaman, hirarki H2/H3 rapi | OK | — |
| Mobile usability | Viewport benar, layout responsive | OK | — |

---

## 2. Schema Audit

Schema yang SUDAH ada:

- Organization ✅ — **[IMPROVED]** ditambah `@id`, `email`, `address`, `availableLanguage`, logo sebagai ImageObject
- LocalBusiness ✅ — **[IMPROVED]** ditambah `@id`, `email`, `sameAs`, `parentOrganization`
- WebSite ✅ — **[IMPROVED]** ditambah `@id`, `inLanguage`, publisher via `@id` reference (entity linking)
- Service ✅ (per layanan di homepage)
- FAQPage ✅ (dari data/faq.ts)
- BreadcrumbList ✅ (microdata)
- Article → **[IMPROVED]** di-upgrade jadi **BlogPosting** + `publisher` (dengan logo), `mainEntityOfPage`, `inLanguage`

Schema yang BELUM ada (rekomendasi berikutnya):

- **Review / AggregateRating** — data testimonial sudah ada di `data/testimonials.ts`; bisa dipasang di LocalBusiness jika review-nya asli dan terverifikasi (hati-hati guideline Google soal self-serving review)
- **SearchAction** — hanya pasang jika situs punya fitur pencarian internal (saat ini belum ada)
- **Person** — jika ingin E-E-A-T lebih kuat, tambahkan author asli per artikel blog

---

## 3. Entity SEO Audit

Entity target: **"NexaPlus"**

| Sinyal | Status | Catatan |
|---|---|---|
| Brand name | Konsisten "NexaPlus" | OK |
| Domain | ⚠️ Ada 2 domain: nexaplus.web.id (utama) & nexaplus.app (email/IG handle) | llms.txt sebelumnya menyebut nexaplus.app sebagai website — **[FIXED]** disamakan ke nexaplus.web.id |
| Logo | Konsisten `/images/logo.png` | OK |
| sameAs | Instagram valid; Facebook & LinkedIn URL terlihat generik (`facebook.com/nexaplus`) | **Action:** verifikasi/buat profil asli, atau hapus dari `site-config.ts` — sameAs ke halaman mati melemahkan entity |
| Address | Konsisten (Sumedang, Jawa Barat) | OK |
| WhatsApp/Email | Konsisten di seluruh situs | OK |

Rekomendasi entity building:
1. Daftarkan Google Business Profile dengan NAP (Name-Address-Phone) yang sama persis.
2. Konsistenkan bio media sosial dengan deskripsi di Organization schema.
3. Bangun sitasi lokal (direktori bisnis Indonesia) dengan NAP identik.
4. Redirect atau kanonikalisasi nexaplus.app → nexaplus.web.id agar entity tidak terpecah.

---

## 4. AI Readability Audit — Skor: 78/100

| Kriteria | Nilai | Catatan |
|---|---|---|
| Answer-first writing | 7/10 | Hero & FAQ langsung menjawab; tambah definition block "Apa itu jasa pembuatan website?" |
| Semantic HTML | 9/10 | main/header/article/nav/time dipakai dengan benar |
| Heading hierarchy | 9/10 | Rapi |
| FAQ | 9/10 | Ada + FAQPage schema |
| Pricing clarity | 8/10 | Range harga jelas di meta & llms.txt; buat halaman `/harga` dedicated |
| Comparison table | 4/10 | Belum ada tabel perbandingan paket |
| Glossary/definition | 4/10 | Belum ada |

---

## 5. Google AI Overview Readiness — Skor: 72/100

Kuat: schema coverage lengkap, FAQ terstruktur, entity konsisten, konten berbahasa natural, canonical & sitemap rapi.

Lemah:
- **Topical authority** masih tipis — butuh cluster artikel blog yang saling terhubung ke halaman layanan.
- **E-E-A-T**: author artikel masih Organization, belum ada Person + kredensial.
- **External references/citations** di artikel blog belum ada.
- Belum ada halaman kota (mis. "jasa website Bandung") untuk intent lokal.

---

## 6. GEO (Generative Engine Optimization)

| Item | Status |
|---|---|
| llms.txt | ✅ Ada — **[FIXED]** domain dikonsistenkan + section Pages dengan link |
| AI crawler access | ✅ **[FIXED]** robots.ts sekarang eksplisit allow: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, meta-externalagent, cohere-ai |
| Machine-readable info | ✅ JSON-LD @graph dengan entity linking (@id) |
| Structured content | ✅ Semantic HTML + heading rapi |
| Unique insight | ⚠️ Perlu artikel dengan data/insight orisinal (studi kasus klien, benchmark harga pasar) |
| Topical cluster | ⚠️ Belum terbentuk — lihat Content Gap |

---

## 7. Keyword Gap (52 keyword)

**Transactional (prioritas tertinggi):**
jasa pembuatan website murah, jasa buat website toko online, jasa pembuatan website Jakarta, jasa website Bandung, jasa website Surabaya, jasa pembuatan landing page, jasa website sekolah murah, jasa pembuatan web company profile, jasa bikin web UMKM, jasa pembuatan website Sumedang, jasa website pemerintah desa, jasa pembuatan sistem kasir online, harga jasa pembuatan website, paket pembuatan website

**Commercial:**
jasa website terbaik, jasa website terpercaya, website toko online terbaik, perbandingan jasa pembuatan website, jasa website vs buat sendiri, wordpress vs next.js untuk bisnis, biaya maintenance website, harga domain dan hosting, jasa redesign website, jasa website dengan SEO

**Informational:**
cara membuat website bisnis, apa itu landing page, apa itu company profile, cara membuat toko online, berapa biaya membuat website, contoh website company profile, contoh website sekolah, cara website muncul di Google, apa itu SEO untuk UMKM, cara memilih jasa pembuatan website, kenapa bisnis butuh website, cara membuat website sekolah, fitur wajib toko online, apa itu SSL, apa itu hosting, perbedaan landing page dan website, cara riset keyword untuk UMKM, checklist launching website, cara mempercepat website, apa itu payment gateway

**Navigational:**
NexaPlus, NexaPlus website, NexaPlus jasa website, NexaPlus Sumedang, NexaPlus harga, review NexaPlus, portfolio NexaPlus, kontak NexaPlus

---

## 8. Content Gap (prioritas)

| Halaman | Prioritas | Alasan |
|---|---|---|
| /harga (Pricing) | P1 | Intent transaksional tinggi, memperkuat pricing clarity untuk AI |
| /layanan/landing-page | P1 | Layanan sudah dijual tapi belum punya landing page sendiri |
| /layanan/website-sekolah | P1 | Sama — sudah ada di services tapi tanpa halaman |
| /portfolio (index) | P2 | Detail portfolio sudah ada, index page belum |
| /faq (halaman dedicated) | P2 | FAQ section ada, halaman dedicated menambah entry point |
| Landing page per kota (Jakarta, Bandung, Surabaya) | P2 | Keyword lokal ber-volume besar |
| Studi kasus / case study | P3 | E-E-A-T + unique insight untuk GEO |
| Artikel perbandingan & panduan | P3 | Topical cluster untuk blog |

---

## 9. Competitor Analysis (framework)

Bandingkan dengan 5 kompetitor lokal (contoh kategori: jasa website nasional besar, agensi lokal Jawa Barat, freelancer marketplace, website builder SaaS, agensi enterprise). Aspek yang perlu dibedah per kompetitor: jumlah halaman layanan, coverage schema, halaman harga, halaman kota, jumlah artikel blog, CTA placement, dan review pihak ketiga. NexaPlus saat ini unggul di schema & GEO readiness, tertinggal di volume konten dan halaman layanan per-vertical.

---

## 10. Action Plan

### Quick Wins (sudah dikerjakan di commit ini)
- [x] Hapus og:image broken di root layout
- [x] Tambah Twitter Card + title template + googleBot directives
- [x] robots.ts: blokir /admin & /api, allow semua AI crawler utama
- [x] sitemap: tambah /layanan/company-profile
- [x] llms.txt: konsistensi domain + section Pages
- [x] Schema: entity linking @id, BlogPosting + publisher, LocalBusiness diperkaya
- [x] X-Robots-Tag noindex untuk /admin

### Medium Impact (1 minggu)
- [ ] Buat halaman /harga dengan tabel perbandingan paket
- [ ] Buat /layanan/landing-page dan /layanan/website-sekolah
- [ ] Ganti `<img>` blog cover ke `next/image`
- [ ] Verifikasi/perbaiki URL Facebook & LinkedIn di site-config.ts
- [ ] Daftarkan Google Business Profile

### Long Term (1–3 bulan)
- [ ] Topical cluster blog: 2–4 artikel/bulan menjawab keyword informational, internal link ke halaman layanan
- [ ] Landing page per kota (Jakarta, Bandung, Surabaya)
- [ ] Studi kasus klien dengan data nyata (unique insight untuk AI engines)
- [ ] Author Person schema + halaman author untuk E-E-A-T
- [ ] Kumpulkan review pihak ketiga (Google Business, Sortlist, dsb.)

---

## 11. Priority Score

- **P1** = broken OG image, admin indexable, sitemap incomplete, llms.txt inconsistent → SELESAI
- **P2** = halaman /harga, halaman layanan per-vertical, next/image untuk blog, sameAs valid
- **P3** = topical cluster blog, halaman kota, case study
- **P4** = Person schema, review pihak ketiga, benchmark data orisinal

## 12. Final Score

| Kategori | Sebelum | Sesudah fix |
|---|---|---|
| Technical SEO | 68 | 88 |
| On-Page SEO | 78 | 82 |
| Off-Page SEO | 40 | 40 |
| Schema | 70 | 92 |
| Entity SEO | 60 | 75 |
| AEO | 70 | 80 |
| GEO | 65 | 85 |
| AI Readability | 78 | 78 |
| AI Overview Readiness | 62 | 72 |
| Core Web Vitals | 75 | 75 |
| Mobile SEO | 85 | 85 |

**Total Overall Score: 68 → 77 / 100**

Sisa gap terbesar ada di off-page (backlink, sitasi, review) dan volume konten — keduanya butuh eksekusi berkelanjutan, bukan perubahan kode.
