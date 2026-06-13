import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Get API key from settings
    const { data: settings } = await supabase
      .from("settings")
      .select("key, value")
      .eq("key", "openagentic_api_key")
      .single();

    const apiKey = settings?.value;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key belum dikonfigurasi." },
        { status: 400 }
      );
    }

    // Fetch models from OpenAgentic API
    const response = await fetch("https://aimurah.my.id/api/v1/models", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to fetch models:", response.status, errorText);
      return NextResponse.json(
        { error: "Gagal mengambil daftar model." },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Models API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
