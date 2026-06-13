import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import { BlogPageClient } from "./blog-page-client";
import { Breadcrumb } from "@/components/shared/breadcrumb";

export const metadata: Metadata = {
  title: "Blog - Artikel SEO, Website & Digital Marketing | NexaPlus",
  description:
    "Baca artikel terbaru seputar pembuatan website, SEO, digital marketing, dan tips bisnis online untuk UMKM Indonesia.",
  openGraph: {
    title: "Blog - Artikel SEO, Website & Digital Marketing | NexaPlus",
    description:
      "Baca artikel terbaru seputar pembuatan website, SEO, digital marketing, dan tips bisnis online untuk UMKM Indonesia.",
    type: "website",
  },
  alternates: {
    canonical: "https://nexaplus.app/blog",
  },
};

export const revalidate = 60;

async function getPosts() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data } = await supabase
    .from("blog_posts")
    .select(
      "id, slug, title, excerpt, category, cover_image, published_at, created_at"
    )
    .eq("published", true)
    .order("published_at", { ascending: false });

  return data || [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 pt-20 md:pt-24">
        <Breadcrumb
          variant="light"
          items={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />
      </div>
      <BlogPageClient posts={posts} />
    </div>
  );
}
