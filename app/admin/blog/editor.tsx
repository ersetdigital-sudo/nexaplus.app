"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, Sparkles, Loader2 } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(
  () => import("@/components/admin/rich-text-editor"),
  { ssr: false, loading: () => <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-400">Loading editor...</div> }
);

interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: string;
  cover_image: string;
  meta_title?: string;
  meta_description?: string;
  published: boolean;
  published_at: string | null;
}

const categories = ["SEO", "Website", "Bisnis Online", "UMKM", "Toko Online"];

export function BlogEditor({ post }: { post?: BlogPost }) {
  const isEditing = !!post;
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [category, setCategory] = useState(post?.category || categories[0]);
  const [content, setContent] = useState(post?.content || "");
  const [coverImage, setCoverImage] = useState(post?.cover_image || "");
  const [metaTitle, setMetaTitle] = useState(post?.meta_title || "");
  const [metaDesc, setMetaDesc] = useState(post?.meta_description || "");
  const [status, setStatus] = useState<"draft" | "published">(post?.published ? "published" : "draft");
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);

  // AI states
  const [generating, setGenerating] = useState(false);
  const [revising, setRevising] = useState(false);
  const [showReviseModal, setShowReviseModal] = useState(false);
  const [reviseInstruction, setReviseInstruction] = useState("");

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!isEditing) {
      setSlug(generateSlug(value));
    }
    if (!metaTitle) {
      setMetaTitle(value.slice(0, 60));
    }
  };

  const handleContentChange = (html: string) => {
    setContent(html);
    const text = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    if (!excerpt) {
      setExcerpt(text.slice(0, 200));
    }
    if (!metaDesc) {
      setMetaDesc(text.slice(0, 155));
    }
  };

  const handleGenerateAI = async () => {
    if (!title.trim()) {
      alert("Masukkan judul/topik artikel terlebih dahulu.");
      return;
    }

    setGenerating(true);
    try {
      const res = await fetch("/api/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: title }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Gagal generate artikel.");
        return;
      }

      // Auto-fill fields from AI response
      if (data.content) setContent(data.content);
      if (data.excerpt) setExcerpt(data.excerpt);
      if (data.meta_title) setMetaTitle(data.meta_title);
      if (data.meta_description) setMetaDesc(data.meta_description);
      if (data.slug && !isEditing) setSlug(data.slug);
      if (data.title) setTitle(data.title);
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat generate artikel.");
    } finally {
      setGenerating(false);
    }
  };

  const handleReviseAI = async () => {
    if (!reviseInstruction.trim()) {
      alert("Masukkan instruksi revisi.");
      return;
    }

    setRevising(true);
    setShowReviseModal(false);

    try {
      const res = await fetch("/api/revise-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, instruction: reviseInstruction }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Gagal merevisi artikel.");
        return;
      }

      if (data.content) {
        setContent(data.content);
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat merevisi artikel.");
    } finally {
      setRevising(false);
      setReviseInstruction("");
    }
  };

  const handleSave = async () => {
    setSaving(true);
    const publish = status === "published";

    const data = {
      title,
      slug,
      excerpt: excerpt || metaDesc || title,
      category,
      content,
      cover_image: coverImage || null,
      meta_title: metaTitle || null,
      meta_description: metaDesc || null,
      published: publish,
      published_at: publish ? new Date().toISOString() : post?.published_at || null,
    };

    if (isEditing) {
      await supabase.from("blog_posts").update(data).eq("id", post.id);
    } else {
      await supabase.from("blog_posts").insert(data);
    }

    setSaving(false);
    router.push("/admin/blog");
    router.refresh();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold text-slate-900">
            {isEditing ? "Edit Artikel" : "Tulis Artikel Baru"}
          </h1>
        </div>
        <button
          onClick={() => setShowPreview(!showPreview)}
          className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            showPreview ? "bg-orange-50 text-orange-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          <Eye className="h-4 w-4" />
          Preview
        </button>
      </div>

      {showPreview ? (
        /* Preview Mode */
        <div className="rounded-xl border border-slate-200 bg-white p-8">
          <span className="inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 mb-4">{category}</span>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{title || "Judul Artikel"}</h1>
          <p className="text-slate-500 mb-6">{excerpt || "Excerpt artikel..."}</p>
          <hr className="mb-6" />
          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: content || "<p>Konten artikel akan muncul di sini...</p>" }}
          />
        </div>
      ) : (
        /* Editor Mode */
        <div className="space-y-6">
          {/* Judul */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Judul Artikel <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Masukkan judul atau topik artikel"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* AI Generate Button */}
          <button
            type="button"
            onClick={handleGenerateAI}
            disabled={generating || !title.trim()}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-purple-200 bg-purple-50/50 px-4 py-3 text-sm font-medium text-purple-700 hover:bg-purple-50 hover:border-purple-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {generating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating artikel dengan AI...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                ✨ Generate Artikel dengan AI
              </>
            )}
          </button>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Slug (URL)</label>
            <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
              <span className="px-3 text-sm text-slate-400 bg-slate-100 py-3 border-r border-slate-200">/blog/</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="slug-artikel"
                className="flex-1 bg-transparent px-3 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Thumbnail URL</label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <p className="mt-1.5 text-xs text-slate-400">Ukuran ideal: 1200 x 630 px (rasio 1.91:1)</p>
            {coverImage && (
              <div className="mt-2 w-48 aspect-[1200/630] rounded-lg overflow-hidden border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={coverImage} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Kategori</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Konten Artikel */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Konten Artikel</label>
            <RichTextEditor
              content={content}
              onChange={handleContentChange}
              placeholder="Tulis konten artikel di sini..."
              onRevise={() => setShowReviseModal(true)}
              isRevising={revising}
            />
          </div>

          {/* SEO Meta */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
              🔍 SEO Meta
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Meta Title{" "}
                  <span className={`${metaTitle.length > 60 ? "text-red-500" : "text-slate-400"}`}>
                    ({metaTitle.length}/60)
                  </span>
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  maxLength={60}
                  placeholder="Judul untuk mesin pencari (ideal max 60 karakter)"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Meta Description{" "}
                  <span className={`${metaDesc.length > 160 ? "text-red-500" : "text-slate-400"}`}>
                    ({metaDesc.length}/160)
                  </span>
                </label>
                <textarea
                  value={metaDesc}
                  onChange={(e) => setMetaDesc(e.target.value)}
                  maxLength={160}
                  rows={3}
                  placeholder="Deskripsi untuk mesin pencari (ideal max 160 karakter)"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Excerpt (ringkasan)</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={2}
                  placeholder="Ringkasan singkat artikel untuk preview di homepage"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">Status:</span>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as "draft" | "published")}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 focus:border-orange-500 focus:outline-none"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/admin/blog"
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Batal
              </Link>
              <button
                onClick={handleSave}
                disabled={saving || !title || !content}
                className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-700 disabled:opacity-50 transition-colors"
              >
                {saving ? "Menyimpan..." : "Simpan Artikel"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Revise Modal */}
      {showReviseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              ✏️ Revisi dengan AI
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Berikan instruksi bagaimana Anda ingin artikel direvisi.
            </p>
            <textarea
              value={reviseInstruction}
              onChange={(e) => setReviseInstruction(e.target.value)}
              rows={4}
              placeholder="Contoh: Buat lebih singkat, tambahkan contoh, ubah tone menjadi lebih formal..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
              autoFocus
            />
            <div className="mt-4 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setShowReviseModal(false);
                  setReviseInstruction("");
                }}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleReviseAI}
                disabled={!reviseInstruction.trim()}
                className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 disabled:opacity-50 transition-colors"
              >
                <Sparkles className="h-4 w-4" />
                Revisi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
