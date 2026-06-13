"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Save, Eye, EyeOff, Loader2, RefreshCw } from "lucide-react";

interface Setting {
  id: string;
  key: string;
  value: string;
}

interface AIModel {
  id: string;
  object?: string;
  owned_by?: string;
}

export default function AdminSettingsPage() {
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("claude-sonnet-4.5");
  const [models, setModels] = useState<AIModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loadingModels, setLoadingModels] = useState(false);

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

  // Fetch models once API key is available
  useEffect(() => {
    if (apiKey) {
      fetchModels();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey]);

  const fetchModels = async () => {
    setLoadingModels(true);
    try {
      const res = await fetch("/api/models");
      if (res.ok) {
        const data = await res.json();
        // OpenAI-compatible format returns { data: [...] }
        const modelList = data.data || data;
        if (Array.isArray(modelList)) {
          setModels(modelList);
        }
      }
    } catch (err) {
      console.error("Failed to fetch models:", err);
    } finally {
      setLoadingModels(false);
    }
  };

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
              <div className="flex items-center gap-2">
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  {models.length > 0 ? (
                    (() => {
                      // Group models by owned_by/provider
                      const grouped: Record<string, AIModel[]> = {};
                      models.forEach((m) => {
                        const provider = m.owned_by || "Lainnya";
                        if (!grouped[provider]) grouped[provider] = [];
                        grouped[provider].push(m);
                      });

                      // Sort groups
                      const sortedGroups = Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b));

                      return sortedGroups.map(([provider, groupModels]) => (
                        <optgroup key={provider} label={provider}>
                          {groupModels.map((m) => (
                            <option key={m.id} value={m.id}>
                              {m.id}
                            </option>
                          ))}
                        </optgroup>
                      ));
                    })()
                  ) : (
                    <option value={model}>{model}</option>
                  )}
                </select>
                <button
                  type="button"
                  onClick={fetchModels}
                  disabled={loadingModels || !apiKey}
                  title="Refresh daftar model"
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50 transition-colors"
                >
                  <RefreshCw className={`h-4 w-4 ${loadingModels ? "animate-spin" : ""}`} />
                </button>
              </div>
              <p className="mt-1.5 text-xs text-slate-400">
                {loadingModels
                  ? "Memuat daftar model..."
                  : models.length > 0
                  ? `${models.length} model tersedia dari OpenAgentic`
                  : "Simpan API key lalu klik refresh untuk memuat daftar model."}
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
