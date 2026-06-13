import type { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nexaplus.app';

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Fetch published blog posts
  const { data: blogPosts } = await supabase
    .from('blog_posts')
    .select('slug, updated_at, published_at')
    .eq('published', true)
    .order('published_at', { ascending: false });

  const blogUrls = (blogPosts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at || post.published_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Fetch portfolio items
  const { data: portfolioItems } = await supabase
    .from('portfolio_items')
    .select('slug, updated_at')
    .eq('published', true);

  const portfolioUrls = (portfolioItems || []).map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: new Date(item.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/layanan/toko-online`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tentang-kami`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...blogUrls,
    ...portfolioUrls,
  ];
}
