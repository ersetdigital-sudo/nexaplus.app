import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import { generateArticleSchema } from '@/lib/schema-markup';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post Tidak Ditemukan' };
  }

  return {
    title: `${post.title} | NexaPlus Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate.toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://nexaplus.app/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    excerpt: post.excerpt,
    publishedDate: post.publishedDate,
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
              dateTime={post.publishedDate.toISOString()}
              className="text-sm text-slate-500"
            >
              {post.publishedDate.toLocaleDateString('id-ID', {
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
