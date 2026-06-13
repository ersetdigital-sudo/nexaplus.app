import { siteConfig } from '@/data/site-config';

// --- Interfaces ---

export interface SchemaOrganization {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  contactPoint: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: 'customer service';
  };
  sameAs: string[];
}

export interface SchemaLocalBusiness {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    '@type': 'PostalAddress';
    addressCountry: 'ID';
  };
  priceRange: string;
}

export interface SchemaService {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  description: string;
  provider: { '@type': 'Organization'; name: string };
  areaServed: { '@type': 'Country'; name: 'Indonesia' };
}

export interface SchemaFAQPage {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }[];
}

export interface SchemaArticle {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url?: string;
  image?: string;
  author: { '@type': 'Organization'; name: string };
}

// --- Input types ---

export interface ServiceInput {
  title: string;
  description: string;
}

export interface FAQInput {
  question: string;
  answer: string;
}

export interface ArticleInput {
  title: string;
  excerpt: string;
  publishedDate: Date;
  modifiedDate?: Date;
  url?: string;
  image?: string;
}

// --- Validation helpers ---

function validateRequiredString(value: unknown, fieldName: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    console.warn(
      `[Schema Markup] Missing or empty required field: ${fieldName}. Entry will be omitted.`
    );
    return '';
  }
  return value.trim();
}

// --- Generator functions ---

/**
 * Generates Organization schema using site configuration.
 */
export function generateOrganizationSchema() {
  return {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+${siteConfig.whatsapp.number}`,
      contactType: 'customer service',
    },
    sameAs: siteConfig.contact.socialLinks.map((link) => link.url),
  };
}

/**
 * Generates LocalBusiness schema using site configuration.
 */
export function generateLocalBusinessSchema() {
  return {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.meta.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/logo.png`,
    telephone: `+${siteConfig.whatsapp.number}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    priceRange: 'Rp 500.000 - Rp 4.000.000',
  };
}

/**
 * Generates an array of Service schemas from provided service data.
 * Validates that each service has a non-empty title and description.
 * Invalid entries are omitted with a console warning at build time.
 */
export function generateServiceSchemas(services: ServiceInput[]): SchemaService[] {
  const validSchemas: SchemaService[] = [];

  for (const service of services) {
    const title = validateRequiredString(service.title, 'service.title');
    const description = validateRequiredString(service.description, 'service.description');

    if (!title || !description) {
      continue;
    }

    validSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      description,
      provider: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Indonesia',
      },
    });
  }

  return validSchemas;
}

/**
 * Generates FAQPage schema from provided FAQ items.
 * Filters out items with empty question or answer fields with a console warning.
 */
export function generateFAQSchema(items: FAQInput[]): SchemaFAQPage {
  const validEntries = items.filter((item) => {
    const question = validateRequiredString(item.question, 'faq.question');
    const answer = validateRequiredString(item.answer, 'faq.answer');
    return question.length > 0 && answer.length > 0;
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: validEntries.map((item) => ({
      '@type': 'Question' as const,
      name: item.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: item.answer.trim(),
      },
    })),
  };
}

/**
 * Generates Article schema from a blog post object.
 * Warns at build time if required fields (title, excerpt) are missing.
 */
export function generateArticleSchema(post: ArticleInput): SchemaArticle {
  const headline = validateRequiredString(post.title, 'article.title');
  const description = validateRequiredString(post.excerpt, 'article.excerpt');

  const schema: SchemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished: post.publishedDate.toISOString(),
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };

  if (post.modifiedDate) {
    schema.dateModified = post.modifiedDate.toISOString();
  }
  if (post.url) {
    schema.url = post.url;
  }
  if (post.image) {
    schema.image = post.image;
  }

  return schema;
}
