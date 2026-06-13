import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();

    // Get API key and model from settings
    const { data: settings } = await supabase
      .from("settings")
      .select("key, value")
      .in("key", ["openagentic_api_key", "ai_model"]);

    const apiKey = settings?.find((s) => s.key === "openagentic_api_key")?.value;
    const model = settings?.find((s) => s.key === "ai_model")?.value || "google/gemini-2.0-flash";

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key OpenAgentic belum dikonfigurasi. Silakan isi di halaman Settings." },
        { status: 400 }
      );
    }

    const prompt = `Kamu adalah penulis artikel blog profesional. Buatkan artikel blog yang SEO-friendly dalam bahasa Indonesia tentang topik: "${topic}".

Hasilkan response dalam format JSON MURNI (tanpa markdown code block) dengan struktur berikut:
{
  "title": "Judul artikel yang menarik dan mengandung keyword",
  "slug": "slug-url-friendly-dari-judul",
  "content": "<h2>...</h2><p>...</p><h3>...</h3><ul><li>...</li></ul>... (HTML lengkap dengan h2, h3, p, ul, li, strong, em)",
  "excerpt": "Ringkasan artikel dalam 1-2 kalimat (max 200 karakter)",
  "meta_title": "Meta title untuk SEO (max 60 karakter)",
  "meta_description": "Meta description untuk SEO (max 155 karakter)"
}

Panduan penulisan:
- Artikel minimal 800 kata
- Gunakan heading h2 dan h3 untuk struktur
- Sertakan bullet points (ul/li) untuk list
- Tulis dalam gaya informatif dan profesional
- Optimalkan untuk SEO dengan keyword yang relevan
- Jangan gunakan markdown, gunakan HTML tags
- Response HANYA berupa JSON, tanpa teks lain`;

    const response = await fetch("https://aimurah.my.id/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: "Kamu adalah AI penulis artikel blog profesional. Selalu respond dalam format JSON murni." },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAgentic API error:", errorText);
      return NextResponse.json(
        { error: "Gagal generate artikel. Periksa API key dan model." },
        { status: 500 }
      );
    }

    const data = await response.json();
    const rawContent = data.choices?.[0]?.message?.content;

    if (!rawContent) {
      return NextResponse.json({ error: "Response kosong dari AI" }, { status: 500 });
    }

    // Parse JSON from response (handle potential markdown code blocks)
    let parsed;
    try {
      const cleaned = rawContent
        .replace(/```json\s*/g, "")
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
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
