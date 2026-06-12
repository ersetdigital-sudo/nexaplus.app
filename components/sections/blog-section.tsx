"use client";

import { useState } from "react";
import Link from "next/link";

import { blogPosts, type BlogCategory } from "@/data/blog-posts";
import { filterBlogPosts, formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const categories: (BlogCategory | "All")[] = [
  "All",
  "SEO",
  "Website",
  "Bisnis Online",
  "UMKM",
  "Toko Online",
];

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">(
    "All"
  );

  const filteredPosts = filterBlogPosts(blogPosts, activeCategory).slice(0, 6);

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
              {category === "All" ? "All" : category}
            </Button>
          ))}
        </div>

        {/* Blog posts grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-500/30 via-sky-400/20 to-blue-600/30">
                  <div className="flex h-full w-full items-center justify-center transition-transform group-hover:scale-105">
                    <span className="px-4 text-center text-lg font-bold text-white/90">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-slate-500">
                      {formatDate(post.publishedDate)}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold leading-tight text-slate-900">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-600">
            Belum ada artikel untuk kategori ini
          </p>
        )}
      </div>
    </SectionWrapper>
  );
}
