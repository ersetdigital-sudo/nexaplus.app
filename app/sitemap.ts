import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { portfolioItems } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexaplus.app';

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedDate,
  }));

  const portfolioUrls = portfolioItems.map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...blogUrls,
    ...portfolioUrls,
  ];
}
