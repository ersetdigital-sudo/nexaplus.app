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

    const prompt = `Kamu adalah penulis artikel SEO profesional sekaligus praktisi di bidang jasa pembuatan website dan digital marketing. Kamu menulis atas nama tim NexaPlus. Tulis artikel blog tentang "${topic}" dalam bahasa Indonesia.

TUJUAN UTAMA ARTIKEL:
- Membantu pembaca menyelesaikan masalah atau menjawab pertanyaan mereka
- Membangun kepercayaan dan kredibilitas NexaPlus sebagai penyedia jasa website profesional
- Mendatangkan traffic organik dari Google
- Mengarahkan pembaca secara natural ke layanan NexaPlus

KONTEKS NEXAPLUS:
- NexaPlus adalah penyedia jasa pembuatan website profesional berbasis teknologi modern (Next.js, React, Tailwind CSS)
- JANGAN sebut WordPress, WooCommerce, atau CMS lain sebagai solusi — NexaPlus membangun website custom
- Gunakan perspektif "tim NexaPlus" atau "kami", BUKAN "saya" atau "sejak 2015"
- Gunakan frasa seperti "dari berbagai project yang sudah kami kerjakan", "berdasarkan pengalaman tim kami", "yang sering kami temui dari klien"
- Jangan overclaim jumlah project — gunakan "berbagai project" atau "banyak klien", BUKAN "ratusan"

PANDUAN PENULISAN:

1. GAYA PENULISAN:
- Bahasa Indonesia natural, santai, profesional, mudah dipahami
- Hindari gaya bahasa terlalu formal atau terasa seperti AI
- Variasikan panjang kalimat dan struktur paragraf
- Gunakan opini dan insight yang masuk akal
- Hindari kalimat klise: "di era digital saat ini", "sangat penting untuk", dan kalimat generik lainnya
- PENTING: Variasikan jenis pembuka artikel. Jangan menggunakan pola pembuka yang sama. Hindari selalu membuka dengan "Banyak pemilik bisnis..." atau "Dalam dunia bisnis online..."

2. PERSPEKTIF PRAKTISI:
- Tulis dari sudut pandang tim yang sudah berpengalaman membuatkan website untuk klien
- Sisipkan insight secara natural seperti:
  "Dari pengalaman kami membuatkan website untuk klien..."
  "Berdasarkan yang kami amati dari berbagai project..."
  "Banyak UMKM mengira..., padahal..."
  "Dalam praktiknya..."
  "Salah satu kesalahan yang sering kami temui saat klien minta dibuatkan website..."
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
- Buat pembaca merasa artikel ditulis oleh tim yang benar-benar paham pembuatan website

6. SOFT SELLING (NATURAL):
- Alur: Edukasi → Bangun Trust → Berikan Solusi → Soft Selling
- Sertakan 2-3 internal link ke NexaPlus secara natural di dalam konten
- Contoh: <a href="https://nexaplus.app">jasa pembuatan website NexaPlus</a>
- Contoh: <a href="https://nexaplus.app">konsultasi gratis di NexaPlus</a>
- Sebutkan harga range dalam Rupiah jika relevan (mulai dari Rp 500.000 - Rp 4.000.000)
- CTA natural: "Konsultasi gratis di <a href='https://nexaplus.app'>NexaPlus</a>"
- Hindari promosi berulang kali — cukup 2-3x di seluruh artikel

7. INTERNAL LINKING SEO:
- JANGAN buat section "Artikel Terkait" dengan link ke artikel yang belum ada
- Sebagai gantinya, sisipkan 2-3 anchor text internal link di dalam konten secara natural yang mengarah ke https://nexaplus.app saja
- Tujuan: memperkuat otoritas domain tanpa resiko 404

8. KUALITAS KONTEN:
- Original — jangan parafrase dekat dari sumber lain
- Jangan mengulang informasi yang sama
- Setiap bagian harus memberikan nilai tambah
- Tambahkan: studi kasus, simulasi perhitungan, insight unik
- JANGAN menyebut WordPress, WooCommerce, Wix, Squarespace sebagai solusi rekomendasi. Fokus pada website custom/profesional

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
- Perspektif tim NexaPlus yang berpengalaman (bukan personal "saya" atau "sejak 2015")
- Soft selling natural ke layanan NexaPlus
- Internal link ke https://nexaplus.app (jangan link ke artikel yang belum ada)`;

    const requestBody = {
      model,
      messages: [
        { role: "system", content: "Kamu adalah penulis artikel SEO profesional yang menulis atas nama tim NexaPlus (penyedia jasa pembuatan website custom berbasis teknologi modern). Selalu respond dalam format JSON murni tanpa markdown code block. Jangan pernah menyebut WordPress, WooCommerce, atau CMS lain sebagai rekomendasi solusi." },
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
