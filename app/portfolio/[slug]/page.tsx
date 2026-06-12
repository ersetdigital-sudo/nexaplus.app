import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);

  if (!item) {
    return { title: 'Portfolio Tidak Ditemukan' };
  }

  return {
    title: `${item.name} - Portfolio | NexaPlus`,
    description: item.description,
    openGraph: {
      title: `${item.name} - Portfolio | NexaPlus`,
      description: item.description,
      images: [{ url: item.screenshot, width: 1200, height: 630, alt: item.name }],
    },
    alternates: {
      canonical: `https://nexaplus.app/portfolio/${item.slug}`,
    },
  };
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={item.screenshot}
          alt={item.name}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
        />
      </div>
      <header className="mb-6">
        <div className="mb-3">
          <Badge variant="secondary">{item.category}</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {item.name}
        </h1>
      </header>
      <p className="mb-8 text-lg text-gray-300">{item.description}</p>
      <Button asChild variant="outline">
        <Link href="/#portfolio">← Kembali ke Portfolio</Link>
      </Button>
    </article>
  );
}
