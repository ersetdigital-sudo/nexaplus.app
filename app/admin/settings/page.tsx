"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Save, Eye, EyeOff, Loader2 } from "lucide-react";

interface Setting {
  id: string;
  key: string;
  value: string;
}

const availableModels = [
  { value: "claude-sonnet-4.5", label: "Claude Sonnet 4.5 (FREE)" },
  { value: "claude-haiku-4.5", label: "Claude Haiku 4.5 (FREE)" },
  { value: "deepseek-3.2", label: "DeepSeek 3.2 (FREE)" },
  { value: "minimax-m2.5", label: "MiniMax M2.5 (FREE)" },
  { value: "minimax-m2.1", label: "MiniMax M2.1 (FREE)" },
  { value: "gemini-2.5-flash", label: "Gemini 2.5 Flash (PRO+)" },
  { value: "gemini-2.5-pro", label: "Gemini 2.5 Pro (PRO+)" },
  { value: "gpt-4.1", label: "GPT 4.1 (PRO+)" },
  { value: "claude-opus-4.6", label: "Claude Opus 4.6 (PRO+)" },
];

export default function AdminSettingsPage() {
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("claude-sonnet-4.5");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("settings")
        .select("*")
        .in("key", ["openagentic_api_key", "ai_model"]);

      if (data) {
        const keySetting = data.find((s: Setting) => s.key === "openagentic_api_key");
        const modelSetting = data.find((s: Setting) => s.key === "ai_model");
        if (keySetting) setApiKey(keySetting.value);
        if (modelSetting) setModel(modelSetting.value);
      }
      setLoading(false);
    };

    fetchSettings();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const supabase = createClient();

    await supabase
      .from("settings")
      .update({ value: apiKey, updated_at: new Date().toISOString() })
      .eq("key", "openagentic_api_key");

    await supabase
      .from("settings")
      .update({ value: model, updated_at: new Date().toISOString() })
      .eq("key", "ai_model");

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">Konfigurasi API dan integrasi AI</p>
      </div>

      <div className="mt-8 max-w-2xl space-y-6">
        {/* AI Configuration */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-1">🤖 AI Configuration</h2>
          <p className="text-sm text-slate-500 mb-6">
            Konfigurasi API key dan model untuk fitur AI (generate & revisi artikel).
            Dapatkan API key di{" "}
            <a
              href="https://openagentic.id/api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              openagentic.id/api-keys
            </a>
          </p>

          <div className="space-y-5">
            {/* API Key */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                API Key (OpenAgentic / AIMurah)
              </label>
              <div className="relative">
                <input
                  type={showKey ? "text" : "password"}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Masukkan API key Anda"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="mt-1.5 text-xs text-slate-400">
                Base URL: https://aimurah.my.id/api/v1
              </p>
            </div>

            {/* Model Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Model AI
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                {availableModels.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
              <p className="mt-1.5 text-xs text-slate-400">
                Model FREE bisa digunakan tanpa biaya. Model PRO+ memerlukan subscription.
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            {saving ? "Menyimpan..." : "Simpan Settings"}
          </button>
          {saved && (
            <span className="text-sm text-green-600 font-medium">✓ Tersimpan!</span>
          )}
        </div>
      </div>
    </div>
  );
}
