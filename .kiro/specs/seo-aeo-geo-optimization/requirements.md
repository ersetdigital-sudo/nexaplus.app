# Requirements Document

## Introduction

NexaPlus (nexaplus.app) adalah website jasa pembuatan website profesional yang dibangun dengan Next.js 16 App Router, TypeScript, dan Tailwind CSS v4 yang di-deploy di Vercel. Website ini perlu dioptimalkan secara menyeluruh untuk SEO (Search Engine Optimization), AEO (Answer Engine Optimization), dan GEO (Generative Engine Optimization) agar mendapatkan ranking tinggi di Google, muncul di AI Search (ChatGPT, Gemini, Claude, Perplexity), dan menghasilkan lead organik. Optimasi mencakup aspek teknis, on-page, konten terstruktur untuk AI, serta penambahan halaman layanan baru dan strategi konten 12 bulan.

## Glossary

- **NexaPlus_Website**: Website nexaplus.app yang dibangun dengan Next.js 16 App Router
- **SEO_System**: Komponen-komponen teknis dan on-page yang mengoptimalkan visibilitas di mesin pencari Google
- **AEO_System**: Komponen-komponen konten dan struktur yang mengoptimalkan kemunculan di Answer Engine seperti Google Featured Snippets
- **GEO_System**: Komponen-komponen konten dan schema yang mengoptimalkan pemahaman AI generatif (ChatGPT, Gemini, Claude, Perplexity) terhadap informasi website
- **Schema_Markup_Engine**: Modul yang menghasilkan JSON-LD structured data sesuai spesifikasi Schema.org
- **Metadata_Engine**: Modul yang menghasilkan metadata dinamis (title, description, OG, Twitter Card, canonical) per halaman
- **Content_Structure_System**: Sistem organisasi konten dengan heading hierarchy, keyword placement, dan internal linking
- **Service_Page**: Halaman layanan individual yang menargetkan keyword spesifik
- **Blog_System**: Sistem blog dengan listing page dan detail page untuk konten informatif
- **FAQ_Module**: Modul tanya-jawab terstruktur yang dioptimalkan untuk Featured Snippets dan AI Search
- **Core_Web_Vitals**: Metrik performa website Google (LCP, FID/INP, CLS)
- **Lighthouse_Score**: Skor audit performa, aksesibilitas, SEO, dan best practices dari Google Lighthouse
- **Target_Keywords**: Keyword utama yang ditargetkan: "jasa pembuatan website", "jasa website profesional", "jasa pembuatan toko online", "jasa landing page", "website company profile", "website UMKM", "website SEO friendly"
- **Breadcrumb_Navigation**: Navigasi hierarkis yang menunjukkan posisi halaman dalam struktur website
- **Internal_Linking_System**: Sistem tautan antar halaman internal untuk distribusi link equity dan navigasi
- **Content_Strategy**: Rencana publikasi konten 12 bulan untuk meningkatkan topical authority

## Requirements

### Requirement 1: Dynamic Metadata Generation

**User Story:** As a website owner, I want every page to have unique and optimized metadata, so that search engines and social media platforms display relevant information for each page.

#### Acceptance Criteria

1. WHEN a page is rendered, THE Metadata_Engine SHALL generate a unique title tag containing the primary Target_Keywords for that page with a maximum length of 60 characters
2. WHEN a page is rendered, THE Metadata_Engine SHALL generate a unique meta description containing Target_Keywords for that page with a length between 120 and 160 characters
3. WHEN a page is rendered, THE Metadata_Engine SHALL generate Open Graph tags including og:title, og:description, og:image, og:url, og:type, and og:locale
4. WHEN a page is rendered, THE Metadata_Engine SHALL generate Twitter Card tags including twitter:card, twitter:title, twitter:description, and twitter:image
5. WHEN a page is rendered, THE Metadata_Engine SHALL generate a canonical URL pointing to the absolute URL of the current page
6. THE Metadata_Engine SHALL ensure each page title follows the format "[Page Title] | NexaPlus" for subpages and "Jasa Pembuatan Website Profesional | NexaPlus" for the homepage

### Requirement 2: Schema Markup Implementation

**User Story:** As a website owner, I want comprehensive structured data on all pages, so that search engines understand the content semantics and display rich results.

#### Acceptance Criteria

1. THE Schema_Markup_Engine SHALL output valid JSON-LD for Organization schema on every page
2. THE Schema_Markup_Engine SHALL output valid JSON-LD for LocalBusiness schema on every page including address, telephone, priceRange, and openingHours
3. WHEN a Service_Page is rendered, THE Schema_Markup_Engine SHALL output Service schema with name, description, provider, and areaServed
4. WHEN a page containing FAQ content is rendered, THE Schema_Markup_Engine SHALL output FAQPage schema with all questions and answers
5. WHEN a blog article page is rendered, THE Schema_Markup_Engine SHALL output Article schema with headline, description, datePublished, dateModified, author, and publisher
6. THE Schema_Markup_Engine SHALL output BreadcrumbList schema on every page except the homepage, reflecting the current page hierarchy
7. WHEN a page containing a price list is rendered, THE Schema_Markup_Engine SHALL output Offer schema with price, priceCurrency set to IDR, and availability

### Requirement 3: Breadcrumb Navigation and Schema

**User Story:** As a website visitor, I want to see breadcrumb navigation on subpages, so that I can understand my location in the site hierarchy and navigate easily.

#### Acceptance Criteria

1. WHEN a subpage is rendered, THE NexaPlus_Website SHALL display a visible breadcrumb navigation showing the page hierarchy from Home to current page
2. WHEN a subpage is rendered, THE Schema_Markup_Engine SHALL output BreadcrumbList structured data with correct itemListElement positions
3. THE Breadcrumb_Navigation SHALL use descriptive text labels containing relevant keywords for each breadcrumb item
4. WHEN a breadcrumb item is clicked, THE NexaPlus_Website SHALL navigate to the corresponding page

### Requirement 4: Heading Hierarchy and Keyword Optimization

**User Story:** As a website owner, I want properly structured headings with strategic keyword placement, so that search engines understand the content structure and topical relevance.

#### Acceptance Criteria

1. THE Content_Structure_System SHALL ensure each page has exactly one H1 tag containing the primary Target_Keywords for that page
2. THE Content_Structure_System SHALL organize content with H2-H6 headings in a strictly descending hierarchical order without skipping levels
3. THE Content_Structure_System SHALL place primary Target_Keywords within the first 100 words of each Service_Page body content
4. THE Content_Structure_System SHALL include Target_Keywords in at least one H2 heading per page
5. THE Content_Structure_System SHALL ensure every image element has a descriptive alt attribute containing relevant keywords or a meaningful description

### Requirement 5: Internal Linking System

**User Story:** As a website owner, I want a strategic internal linking structure, so that search engines can crawl all pages effectively and link equity is distributed across the site.

#### Acceptance Criteria

1. THE Internal_Linking_System SHALL include contextual text links between related Service_Pages with descriptive anchor text
2. THE Internal_Linking_System SHALL link from blog articles to relevant Service_Pages using keyword-rich anchor text
3. THE Internal_Linking_System SHALL ensure every page on the website is reachable within 3 clicks from the homepage
4. THE Internal_Linking_System SHALL include a related content section on blog article pages linking to 2 to 4 related articles
5. THE Internal_Linking_System SHALL include links to Service_Pages in the website footer navigation

### Requirement 6: Core Web Vitals and Performance

**User Story:** As a website owner, I want the website to achieve excellent Core Web Vitals scores, so that Google ranks the website higher and visitors have a fast experience.

#### Acceptance Criteria

1. THE NexaPlus_Website SHALL achieve a Largest Contentful Paint (LCP) of 2.5 seconds or less on mobile devices
2. THE NexaPlus_Website SHALL achieve a Cumulative Layout Shift (CLS) score of 0.1 or less on all pages
3. THE NexaPlus_Website SHALL achieve an Interaction to Next Paint (INP) of 200 milliseconds or less
4. THE NexaPlus_Website SHALL achieve a Google Lighthouse Performance score of 95 or higher on all pages
5. THE NexaPlus_Website SHALL achieve a Google Lighthouse SEO score of 95 or higher on all pages
6. THE NexaPlus_Website SHALL serve all images in WebP or AVIF format with appropriate srcset sizes for responsive display

### Requirement 7: Service Landing Pages Creation

**User Story:** As a business owner, I want dedicated landing pages for each major service, so that the website targets specific keywords and provides focused conversion paths.

#### Acceptance Criteria

1. THE NexaPlus_Website SHALL provide a Service_Page at the URL path /jasa-pembuatan-website targeting the keyword "jasa pembuatan website"
2. THE NexaPlus_Website SHALL provide a Service_Page at the URL path /jasa-pembuatan-toko-online targeting the keyword "jasa pembuatan toko online"
3. THE NexaPlus_Website SHALL provide a Service_Page at the URL path /jasa-landing-page targeting the keyword "jasa landing page"
4. THE NexaPlus_Website SHALL provide a Service_Page at the URL path /website-company-profile targeting the keyword "website company profile"
5. WHEN a Service_Page is rendered, THE NexaPlus_Website SHALL display sections for: service description, benefits, process, pricing, FAQ, testimonials, and a call-to-action
6. WHEN a Service_Page is rendered, THE Metadata_Engine SHALL generate page-specific metadata with the target keyword in the title, description, and OG tags
7. THE NexaPlus_Website SHALL include each Service_Page in the XML sitemap with appropriate priority and changeFrequency values

### Requirement 8: Blog Listing Page

**User Story:** As a content reader, I want a dedicated blog listing page, so that I can browse and discover all published articles in one place.

#### Acceptance Criteria

1. THE NexaPlus_Website SHALL provide a blog listing page at the URL path /blog
2. WHEN the blog listing page is rendered, THE Blog_System SHALL display all published blog posts with title, excerpt, category, date, and cover image
3. THE Blog_System SHALL order blog posts by publishedDate in descending order (newest first)
4. WHEN the blog listing page is rendered, THE Metadata_Engine SHALL generate metadata with the title "Blog - Tips Website & Digital Marketing | NexaPlus"
5. THE NexaPlus_Website SHALL include the /blog page in the XML sitemap

### Requirement 9: AEO-Optimized FAQ Content

**User Story:** As a website owner, I want FAQ content structured for AI answer engines and Google Featured Snippets, so that NexaPlus answers appear in voice search, AI search results, and position zero.

#### Acceptance Criteria

1. THE FAQ_Module SHALL include the following questions with clear, concise answers: "Apa itu jasa pembuatan website?", "Berapa biaya pembuatan website?", "Berapa lama proses pembuatan website?", "Apa manfaat memiliki website sendiri?", "Apa perbedaan website dan marketplace?"
2. THE FAQ_Module SHALL structure each answer with a direct one-sentence response in the first line followed by supporting details
3. THE FAQ_Module SHALL limit each answer to 300 words or fewer for optimal Featured Snippet extraction
4. WHEN a page containing FAQ content is rendered, THE Schema_Markup_Engine SHALL output FAQPage structured data for all FAQ items on that page
5. THE FAQ_Module SHALL include FAQ sections on each Service_Page with questions relevant to that specific service

### Requirement 10: GEO Content Optimization

**User Story:** As a website owner, I want content that AI systems can easily understand and cite, so that NexaPlus is referenced in AI-generated answers across ChatGPT, Gemini, Claude, and Perplexity.

#### Acceptance Criteria

1. THE GEO_System SHALL structure all informational content using clear entity definitions with explicit subject-predicate-object relationships
2. THE GEO_System SHALL format factual information (pricing, timelines, features) as structured lists or tables rather than prose paragraphs
3. THE GEO_System SHALL include a "Tentang NexaPlus" section on the homepage summarizing the company identity, services, location, and unique value proposition in natural language
4. THE GEO_System SHALL ensure each Service_Page opens with a definitive statement answering "What is [service name]?" in the first paragraph
5. THE GEO_System SHALL include comparison content (website vs marketplace, custom vs template) formatted with clear headings and bullet points for AI extraction
6. THE GEO_System SHALL use natural language sentences that can be directly quoted by AI systems without requiring reformulation

### Requirement 11: URL Structure and Sitemap Optimization

**User Story:** As a website owner, I want SEO-friendly URLs and a comprehensive sitemap, so that all pages are properly indexed by search engines.

#### Acceptance Criteria

1. THE NexaPlus_Website SHALL use descriptive, keyword-containing URL slugs in Indonesian for all Service_Pages and blog posts
2. THE NexaPlus_Website SHALL generate an XML sitemap containing all public pages including Service_Pages, blog posts, and portfolio items
3. WHEN a new page is added, THE NexaPlus_Website SHALL automatically include the page in the XML sitemap with lastModified, changeFrequency, and priority attributes
4. THE NexaPlus_Website SHALL set sitemap priority to 1.0 for the homepage, 0.9 for Service_Pages, 0.8 for the blog listing, and 0.7 for blog articles
5. THE NexaPlus_Website SHALL serve a robots.txt file allowing all user agents to crawl all public pages and referencing the sitemap URL

### Requirement 12: Content Strategy Implementation

**User Story:** As a business owner, I want a 12-month content publication strategy, so that the website builds topical authority in the website development niche and attracts sustained organic traffic.

#### Acceptance Criteria

1. THE Content_Strategy SHALL define a 12-month editorial calendar with a minimum of 4 blog articles published per month
2. THE Content_Strategy SHALL cover topic clusters including: jasa pembuatan website, biaya website, manfaat website untuk bisnis, SEO untuk website, toko online, landing page optimization, company profile, dan website UMKM
3. THE Content_Strategy SHALL prioritize content topics based on keyword search volume, competition level, and alignment with Target_Keywords
4. THE Content_Strategy SHALL define content formats including: how-to guides, comparison articles, FAQ-style articles, case studies, and industry trend analysis
5. THE Content_Strategy SHALL assign target keywords and internal linking targets to each planned article

### Requirement 13: Open Graph Image Generation

**User Story:** As a website owner, I want each page to have a relevant Open Graph image, so that social media shares display attractive and branded visual previews.

#### Acceptance Criteria

1. THE Metadata_Engine SHALL generate or reference a unique Open Graph image for each Service_Page with dimensions of 1200x630 pixels
2. THE Metadata_Engine SHALL include the page title and NexaPlus branding in the Open Graph image
3. IF a page does not have a specific Open Graph image, THEN THE Metadata_Engine SHALL fall back to the default site-wide OG image at /images/og-image.jpg
4. THE Metadata_Engine SHALL generate Twitter Card images matching the Open Graph image specifications

### Requirement 14: Image Optimization for SEO

**User Story:** As a website owner, I want all images to be optimized for search engines, so that images appear in Google Image search and contribute to page SEO.

#### Acceptance Criteria

1. THE NexaPlus_Website SHALL include a descriptive alt attribute on every img element that describes the image content and includes relevant keywords where natural
2. THE NexaPlus_Website SHALL use descriptive, keyword-containing file names for all image assets following the format "keyword-description.webp"
3. THE NexaPlus_Website SHALL implement responsive images using Next.js Image component with appropriate width, height, and sizes attributes
4. THE NexaPlus_Website SHALL lazy-load images that are below the viewport fold and prioritize loading for above-the-fold images

### Requirement 15: Optimization Audit and Priority Matrix

**User Story:** As a website owner, I want an audit document that prioritizes optimization tasks by impact, so that the team can execute improvements in the most effective order.

#### Acceptance Criteria

1. THE NexaPlus_Website SHALL include a documented optimization audit identifying current gaps in SEO, AEO, and GEO implementation
2. THE optimization audit SHALL categorize each task by impact level (high, medium, low) and effort level (high, medium, low)
3. THE optimization audit SHALL rank tasks in priority order based on highest impact with lowest effort first
4. THE optimization audit SHALL include baseline measurements for current Lighthouse scores, existing schema markup coverage, and content gaps
5. THE optimization audit SHALL identify quick wins achievable within the first 2 weeks of implementation
