"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, Save, Send } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: string;
  cover_image: string;
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
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);

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
  };

  const handleSave = async (publish: boolean) => {
    setSaving(true);

    const data = {
      title,
      slug,
      excerpt,
      category,
      content,
      cover_image: coverImage || null,
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
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              {isEditing ? "Edit Artikel" : "Tulis Artikel Baru"}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              showPreview
                ? "bg-blue-50 text-blue-700"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Eye className="h-4 w-4" />
            Preview
          </button>
          <button
            onClick={() => handleSave(false)}
            disabled={saving || !title || !content}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors"
          >
            <Save className="h-4 w-4" />
            Simpan Draft
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving || !title || !content || !excerpt}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            <Send className="h-4 w-4" />
            Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Editor */}
        <div className={`${showPreview ? "lg:col-span-2" : "lg:col-span-2"} space-y-5`}>
          {/* Title */}
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Judul artikel..."
              className="w-full text-2xl font-bold text-slate-900 placeholder:text-slate-300 border-0 focus:outline-none focus:ring-0 bg-transparent"
            />
          </div>

          {/* Content editor */}
          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
            <div className="border-b border-slate-100 px-4 py-2 bg-slate-50">
              <span className="text-xs text-slate-500">Markdown supported • Gunakan ## untuk heading, **bold**, *italic*</span>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tulis konten artikel di sini...

## Sub Judul

Paragraf pertama...

### Tips 1

Penjelasan tips..."
              className="w-full min-h-[500px] resize-y px-5 py-4 text-sm text-slate-800 leading-relaxed placeholder:text-slate-300 border-0 focus:outline-none focus:ring-0 font-mono"
            />
          </div>
        </div>

        {/* Sidebar / Preview */}
        <div className="space-y-5">
          {showPreview ? (
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Preview</h3>
              <div className="prose prose-sm prose-slate max-w-none">
                <h1>{title || "Judul Artikel"}</h1>
                <p className="text-slate-500">{excerpt || "Excerpt akan muncul di sini..."}</p>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br/>") }} />
              </div>
            </div>
          ) : (
            <>
              {/* Metadata */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4">
                <h3 className="text-sm font-semibold text-slate-900">Pengaturan</h3>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Slug (URL)</label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                    placeholder="judul-artikel"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Kategori</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Excerpt (ringkasan)</label>
                  <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    rows={3}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none resize-none"
                    placeholder="Ringkasan singkat artikel untuk SEO dan preview..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Cover Image URL</label>
                  <input
                    type="text"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                    placeholder="/images/blog/cover.webp"
                  />
                </div>
              </div>

              {/* Status info */}
              {isEditing && (
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">Status</h3>
                  <div className="space-y-2 text-xs text-slate-500">
                    <p>Status: <span className={`font-medium ${post.published ? "text-green-600" : "text-slate-700"}`}>{post.published ? "Published" : "Draft"}</span></p>
                    {post.published_at && (
                      <p>Published: {new Date(post.published_at).toLocaleDateString("id-ID")}</p>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
