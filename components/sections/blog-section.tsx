"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";

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

const categories = ["All", "SEO", "Website", "Bisnis Online", "UMKM", "Toko Online"];

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, category, cover_image, published_at, created_at")
        .eq("published", true)
        .order("published_at", { ascending: false })
        .limit(12);
      setPosts(data || []);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const filteredPosts =
    activeCategory === "All"
      ? posts.slice(0, 6)
      : posts.filter((p) => p.category === activeCategory).slice(0, 6);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <SectionWrapper id="blog" className="bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center font-bold text-slate-900">
          Artikel Terbaru
        </h2>

        {/* Category filter buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog posts grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-orange-600 border-t-transparent" />
          </div>
        ) : filteredPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-orange-500/30 via-sky-400/20 to-orange-600/30">
                    {post.cover_image ? (
                      <Image
                        src={post.cover_image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center transition-transform group-hover:scale-105">
                        <span className="px-4 text-center text-lg font-bold text-white/90">
                          {post.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-slate-500">
                        {formatDate(post.published_at || post.created_at)}
                      </span>
                    </div>
                    <h3 className="card-title mb-2 font-semibold text-slate-900">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                Lihat Semua Artikel →
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-slate-600">
            Belum ada artikel untuk kategori ini
          </p>
        )}
      </div>
    </SectionWrapper>
  );
}
