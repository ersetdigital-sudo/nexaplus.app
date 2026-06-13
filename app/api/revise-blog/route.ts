import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { content, instruction } = await req.json();

    if (!content || !instruction) {
      return NextResponse.json(
        { error: "Content dan instruksi revisi diperlukan" },
        { status: 400 }
      );
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

    const prompt = `Kamu adalah editor artikel profesional. Revisi konten HTML berikut sesuai instruksi yang diberikan.

INSTRUKSI REVISI: ${instruction}

KONTEN HTML SAAT INI:
${content}

ATURAN:
- Kembalikan HANYA konten HTML yang sudah direvisi
- Pertahankan format HTML (h2, h3, p, ul, li, strong, em, dll)
- Jangan tambahkan markdown atau code block
- Jangan tambahkan penjelasan, langsung berikan HTML yang sudah direvisi
- Pastikan tetap SEO-friendly dan dalam bahasa Indonesia`;

    const response = await fetch("https://openagentic.id/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: "Kamu adalah editor profesional. Selalu respond dengan HTML murni tanpa code block atau penjelasan." },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAgentic API error:", errorText);
      return NextResponse.json(
        { error: "Gagal merevisi artikel. Periksa API key dan model." },
        { status: 500 }
      );
    }

    const data = await response.json();
    let revisedContent = data.choices?.[0]?.message?.content;

    if (!revisedContent) {
      return NextResponse.json({ error: "Response kosong dari AI" }, { status: 500 });
    }

    // Clean up potential markdown code blocks
    revisedContent = revisedContent
      .replace(/```html\s*/g, "")
      .replace(/```\s*/g, "")
      .trim();

    return NextResponse.json({ content: revisedContent });
  } catch (error) {
    console.error("Revise blog error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
