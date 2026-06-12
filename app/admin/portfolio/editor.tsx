"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

interface PortfolioItem {
  id?: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  url: string;
  screenshot: string;
  published: boolean;
}

const categories = [
  "Toko Online",
  "Landing Page",
  "Company Profile",
  "Website Sekolah",
  "Website Pemerintahan",
  "Website Organisasi",
  "Tour & Travel",
  "Sistem POS",
  "Inventory",
  "Booking",
];

export function PortfolioEditor({ item }: { item?: PortfolioItem }) {
  const isEditing = !!item;
  const router = useRouter();
  const supabase = createClient();

  const [name, setName] = useState(item?.name || "");
  const [slug, setSlug] = useState(item?.slug || "");
  const [category, setCategory] = useState(item?.category || categories[0]);
  const [description, setDescription] = useState(item?.description || "");
  const [url, setUrl] = useState(item?.url || "");
  const [screenshot, setScreenshot] = useState(item?.screenshot || "");
  const [published, setPublished] = useState(item?.published ?? true);
  const [saving, setSaving] = useState(false);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleNameChange = (value: string) => {
    setName(value);
    if (!isEditing) {
      setSlug(generateSlug(value));
    }
  };

  const handleSave = async () => {
    setSaving(true);

    const data = {
      name,
      slug,
      category,
      description,
      url: url || null,
      screenshot: screenshot || null,
      published,
    };

    if (isEditing) {
      await supabase.from("portfolio_items").update(data).eq("id", item.id);
    } else {
      await supabase.from("portfolio_items").insert(data);
    }

    setSaving(false);
    router.push("/admin/portfolio");
    router.refresh();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/portfolio"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold text-slate-900">
            {isEditing ? "Edit Portfolio" : "Tambah Portfolio"}
          </h1>
        </div>
        <button
          onClick={handleSave}
          disabled={saving || !name || !description}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          <Save className="h-4 w-4" />
          {saving ? "Menyimpan..." : "Simpan"}
        </button>
      </div>

      <div className="max-w-2xl rounded-xl border border-slate-200 bg-white p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nama Project</label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
            placeholder="Nama website/project"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
            placeholder="nama-project"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Kategori</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none resize-none"
            placeholder="Deskripsi singkat tentang project ini..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">URL Website (opsional)</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Screenshot URL (opsional)</label>
          <input
            type="text"
            value={screenshot}
            onChange={(e) => setScreenshot(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
            placeholder="/images/portfolio/screenshot.webp"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="published" className="text-sm text-slate-700">Tampilkan di website (Published)</label>
        </div>
      </div>
    </div>
  );
}
