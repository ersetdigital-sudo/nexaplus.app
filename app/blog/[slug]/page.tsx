import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { generateArticleSchema } from '@/lib/schema-markup';
import { Badge } from '@/components/ui/badge';

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
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
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
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <Badge variant="secondary">{post.category}</Badge>
            <time
              dateTime={post.publishedDate.toISOString()}
              className="text-sm text-muted-foreground"
            >
              {post.publishedDate.toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
        </header>
        <div
          className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
}
