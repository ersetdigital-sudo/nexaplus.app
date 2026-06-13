import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { generateArticleSchema } from '@/lib/schema-markup';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

async function getPost(slug: string) {
  const supabase = getSupabase();
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();
  return data;
}

export async function generateStaticParams() {
  const supabase = getSupabase();
  const { data } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('published', true);
  return (data || []).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: 'Post Tidak Ditemukan' };
  }

  const metaTitle = post.meta_title || post.title;
  const metaDescription = post.meta_description || post.excerpt;

  return {
    title: `${metaTitle} | NexaPlus Blog`,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      publishedTime: post.published_at || post.created_at,
      images: post.cover_image ? [{ url: post.cover_image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
    alternates: {
      canonical: `https://nexaplus.app/blog/${post.slug}`,
    },
  };
}

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = new Date(post.published_at || post.created_at);

  const articleSchema = generateArticleSchema({
    title: post.meta_title || post.title,
    excerpt: post.meta_description || post.excerpt,
    publishedDate,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="py-16 md:py-24">
        {/* Hero header */}
        <header className="mx-auto max-w-3xl px-5 sm:px-6">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {post.category}
            </span>
            <time
              dateTime={publishedDate.toISOString()}
              className="text-sm text-slate-500"
            >
              {publishedDate.toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-[1.15]">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {post.excerpt}
          </p>

          {/* Cover Image */}
          {post.cover_image && (
            <div className="mt-8 rounded-xl overflow-hidden border border-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Divider */}
          <div className="mt-10 border-t border-slate-200" />
        </header>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-5 sm:px-6 mt-10">
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5
              prose-li:text-slate-600 prose-li:leading-relaxed
              prose-strong:text-slate-900
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto max-w-3xl px-5 sm:px-6 mt-16">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="text-lg font-semibold text-slate-900">
              Butuh website profesional untuk bisnis Anda?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Konsultasikan kebutuhan Anda dan dapatkan penawaran terbaik.
            </p>
            <a
              href="https://wa.me/6281573059442?text=Halo%20NexaPlus%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 items-center rounded-[6px] bg-blue-600 px-5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
