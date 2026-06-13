import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    // Use service-level supabase client (no auth needed for settings read)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Get API key and model from settings
    const { data: settings, error: dbError } = await supabase
      .from("settings")
      .select("key, value")
      .in("key", ["openagentic_api_key", "ai_model"]);

    if (dbError) {
      console.error("DB error:", dbError);
      return NextResponse.json(
        { error: "Gagal membaca settings dari database." },
        { status: 500 }
      );
    }

    const apiKey = settings?.find((s) => s.key === "openagentic_api_key")?.value;
    const model = settings?.find((s) => s.key === "ai_model")?.value || "claude-sonnet-4.5";

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key OpenAgentic belum dikonfigurasi. Silakan isi di halaman Settings." },
        { status: 400 }
      );
    }

    const prompt = `Kamu adalah penulis artikel SEO profesional sekaligus praktisi di bidang jasa pembuatan website dan digital marketing yang telah berkecimpung sejak tahun 2015. Tulis artikel blog tentang "${topic}" dalam bahasa Indonesia.

TUJUAN UTAMA ARTIKEL:
- Membantu pembaca menyelesaikan masalah atau menjawab pertanyaan mereka
- Membangun kepercayaan dan kredibilitas NexaPlus sebagai penyedia jasa website profesional
- Mendatangkan traffic organik dari Google
- Mengarahkan pembaca secara natural ke layanan NexaPlus

PANDUAN PENULISAN:

1. GAYA PENULISAN:
- Bahasa Indonesia natural, santai, profesional, mudah dipahami
- Hindari gaya bahasa terlalu formal atau terasa seperti AI
- Variasikan panjang kalimat dan struktur paragraf
- Gunakan opini dan insight yang masuk akal
- Hindari kalimat klise: "di era digital saat ini", "sangat penting untuk", dan kalimat generik lainnya
- PENTING: Variasikan jenis pembuka artikel. Jangan menggunakan pola pembuka yang sama. Hindari selalu membuka dengan "Banyak pemilik bisnis..." atau "Dalam dunia bisnis online..."

2. PERSPEKTIF PRAKTISI:
- Tulis dari sudut pandang seseorang yang sudah membuat ratusan website untuk klien
- Sisipkan insight secara natural seperti:
  "Dari pengalaman saya membuatkan website untuk klien..."
  "Berdasarkan yang saya amati dari ratusan project..."
  "Banyak UMKM mengira..., padahal..."
  "Dalam praktiknya..."
  "Salah satu kesalahan yang sering saya temui saat klien minta dibuatkan website..."
- BATASAN: Gunakan maksimal 2-4 kali per artikel. Sisanya biarkan natural.

3. STRUKTUR ARTIKEL:
- Pendahuluan yang menarik (langsung ke inti, jangan bertele-tele)
- Subjudul H2 dan H3 yang jelas dan menarik
- Tabel perbandingan jika relevan
- Bullet point untuk mempermudah pembacaan
- FAQ section di akhir (5 pertanyaan)
- Kesimpulan yang kuat dengan CTA

4. SEO OPTIMIZATION:
- Gunakan kata kunci "${topic}" secara natural
- Gunakan variasi keyword dan sinonim
- Letakkan keyword di: judul, paragraf pertama, beberapa heading, kesimpulan
- Hindari keyword stuffing
- Optimalkan untuk search intent

5. HUMAN EXPERIENCE:
- Jangan hanya menjelaskan teori — tambahkan pengalaman lapangan, analisis, kesalahan umum, studi kasus sederhana, opini yang relevan
- Buat pembaca merasa artikel ditulis oleh orang yang benar-benar paham pembuatan website

6. SOFT SELLING (NATURAL):
- Alur: Edukasi → Bangun Trust → Berikan Solusi → Soft Selling
- Sertakan 2-3 internal link ke NexaPlus secara natural di dalam konten
- Contoh: <a href="https://nexaplus.app/layanan/landing-page">jasa landing page NexaPlus</a>
- Contoh: <a href="https://nexaplus.app/layanan/toko-online">jasa toko online</a>
- Sebutkan harga range dalam Rupiah jika relevan
- CTA natural: "Konsultasi gratis di <a href='https://nexaplus.app'>NexaPlus</a>"
- Hindari promosi berulang kali — cukup 2-3x di seluruh artikel

7. INTERNAL LINKING SEO:
- Identifikasi bagian dalam artikel yang berpotensi dihubungkan ke artikel lain
- Sisipkan 2-3 internal link secara natural di dalam konten (anchor text relevan)
- Di akhir artikel (sebelum FAQ), tambahkan section:
  <h2>Artikel Terkait</h2>
  <ul><li><a href="https://nexaplus.app/blog/[slug]">Judul Artikel</a></li>...</ul>
- Contoh pola internal linking:
  Artikel website bisnis → tautkan ke artikel biaya pembuatan website, company profile
  Artikel toko online → tautkan ke artikel marketplace vs website, fitur e-commerce
  Artikel SEO → tautkan ke artikel kecepatan website, optimasi WordPress
  Artikel landing page → tautkan ke artikel konversi, copywriting, digital marketing
- Tujuan: meningkatkan user experience, memperkuat jaring SEO, membantu pengunjung temukan konten lain

8. KUALITAS KONTEN:
- Original — jangan parafrase dekat dari sumber lain
- Jangan mengulang informasi yang sama
- Setiap bagian harus memberikan nilai tambah
- Tambahkan: studi kasus, simulasi perhitungan, insight unik

9. PANJANG: 1.200-2.000 kata

10. FORMAT OUTPUT — HANYA JSON MURNI, tanpa markdown code block, tanpa teks lain:
{
  "title": "judul artikel SEO-friendly, menarik, bikin penasaran",
  "slug": "slug-url-friendly",
  "content": "konten artikel lengkap dalam HTML (h2, h3, p, ul, li, strong, em, a, table). JANGAN pakai h1. Sertakan section Artikel Terkait sebelum FAQ. Sertakan section <h2>FAQ</h2> di akhir dengan format <strong>Pertanyaan?</strong> diikuti <p>Jawaban</p>",
  "excerpt": "Ringkasan artikel 1-2 kalimat (max 200 karakter)",
  "meta_title": "max 60 karakter, SEO friendly",
  "meta_description": "max 155 karakter, bikin orang mau klik di Google"
}

3 hal yang ga boleh hilang:
- Perspektif praktisi pembuat website sejak 2015
- Soft selling natural ke layanan NexaPlus
- Internal linking antar artikel (jaring laba-laba SEO)`;

    const requestBody = {
      model,
      messages: [
        { role: "system", content: "Kamu adalah penulis artikel SEO profesional dan praktisi pembuatan website sejak 2015. Selalu respond dalam format JSON murni tanpa markdown code block." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 8192,
    };

    const response = await fetch("https://aimurah.my.id/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAgentic API error status:", response.status);
      console.error("OpenAgentic API error body:", errorText);
      return NextResponse.json(
        { error: `Gagal generate artikel. Status: ${response.status}. Detail: ${errorText}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    const rawContent = data.choices?.[0]?.message?.content;

    if (!rawContent) {
      console.error("Empty AI response, full data:", JSON.stringify(data));
      return NextResponse.json({ error: "Response kosong dari AI" }, { status: 500 });
    }

    // Parse JSON from response (handle potential markdown code blocks)
    let parsed;
    try {
      const cleaned = rawContent
        .replace(/```json\s*/gi, "")
        .replace(/```\s*/g, "")
        .trim();
      parsed = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse AI response:", rawContent);
      return NextResponse.json(
        { error: "Gagal memproses response dari AI. Coba lagi." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      title: parsed.title,
      slug: parsed.slug,
      content: parsed.content,
      excerpt: parsed.excerpt,
      meta_title: parsed.meta_title,
      meta_description: parsed.meta_description,
    });
  } catch (error) {
    console.error("Generate blog error:", error);
    return NextResponse.json({ error: "Internal server error: " + String(error) }, { status: 500 });
  }
}
