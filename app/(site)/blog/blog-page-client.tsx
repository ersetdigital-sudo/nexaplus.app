"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cover_image: string | null;
  published_at: string | null;
  created_at: string;
}

const categories = ["Semua", "SEO", "Website", "Bisnis Online", "UMKM", "Toko Online"];

export function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "Semua" || post.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Tips, insight, dan panduan seputar pembuatan website, SEO, dan digital marketing untuk bisnis Anda.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari artikel..."
              className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-slate-500">
          {filteredPosts.length} artikel ditemukan
        </p>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[1200/630] w-full overflow-hidden bg-gradient-to-br from-blue-600/20 via-sky-500/10 to-indigo-600/20">
                  {post.cover_image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-2xl font-bold text-white/60">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {formatDate(post.published_at || post.created_at)}
                    </span>
                  </div>

                  <h2 className="mb-2 text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="flex-1 text-sm text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <span className="mt-4 text-sm font-medium text-blue-600 group-hover:underline">
                    Baca selengkapnya →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-slate-500">
              {searchQuery
                ? `Tidak ada artikel yang cocok dengan "${searchQuery}"`
                : "Belum ada artikel untuk kategori ini."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
