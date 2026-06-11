# Implementation Plan: NexaPlus Website

## Overview

This plan implements the NexaPlus premium digital agency website (nexaplus.app) using Next.js 15 App Router, TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion. The implementation follows a bottom-up approach: project setup → design system → content data → shared components → layout → homepage sections → detail pages → SEO → testing. All pages use Static Site Generation (SSG) with content sourced from TypeScript data files.

## Tasks

- [ ] 1. Project setup and configuration
  - [ ] 1.1 Initialize Next.js 15 project with TypeScript and configure tooling
    - Run `npx create-next-app@latest` with App Router, TypeScript, Tailwind CSS v4, ESLint
    - Install dependencies: `framer-motion`, `@radix-ui/react-accordion`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`
    - Install dev dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `fast-check`, `@playwright/test`
    - Configure `tsconfig.json` with path aliases (`@/` → `./`)
    - Create `vitest.config.ts` with jsdom environment and globals enabled
    - Create `playwright.config.ts` with mobile/tablet/desktop projects
    - _Requirements: 19.4, 19.5, 19.6_

  - [ ] 1.2 Set up shadcn/ui and configure component library
    - Run `npx shadcn@latest init` with New York style and dark theme defaults
    - Add shadcn/ui components: button, card, badge, accordion
    - Configure `components.json` with correct paths and aliases
    - Create `lib/utils.ts` with `cn()` helper using `clsx` + `tailwind-merge`
    - _Requirements: 16.3, 16.5_

  - [ ] 1.3 Configure Next.js settings and fonts
    - Configure `next.config.ts` with image domains/patterns and strict mode
    - Set up Inter font via `next/font/google` in the root layout
    - Configure font-display swap and CSS size-adjust for zero layout shift
    - _Requirements: 16.2, 19.6_

- [ ] 2. Design system and global styles
  - [ ] 2.1 Create globals.css with Tailwind v4 directives and CSS custom properties
    - Define CSS custom properties for colors: `--background: #050816`, `--primary: #2563EB`, `--secondary: #7C3AED`, `--accent: #22D3EE`, `--text: #FFFFFF`
    - Configure Tailwind v4 theme extension with custom colors
    - Add base styles for smooth scrolling, selection colors, scrollbar styling
    - Define glassmorphism utility classes (`bg-white/5 backdrop-blur-md border border-white/10`)
    - Define gradient utility classes (`gradient-primary`, `gradient-accent`)
    - _Requirements: 16.1, 16.3, 16.4_

  - [ ] 2.2 Create animation presets library (`lib/animations.ts`)
    - Implement `fadeUpVariants` (opacity 0→1, y 30→0, 500ms easeOut)
    - Implement `cardHoverVariants` (scale 1→1.03, 200ms)
    - Implement `navbarTransition` (200ms easeInOut)
    - Implement `drawerVariants` (x 100%→0, 300ms)
    - Implement `pulseVariants` (scale + boxShadow pulse, 2s infinite)
    - Add `useReducedMotion` integration pattern
    - _Requirements: 22.1, 22.2, 22.3, 22.5, 15.3_

- [ ] 3. Content data files
  - [ ] 3.1 Create site configuration and navigation data
    - Create `data/site-config.ts` with brand info, WhatsApp number, meta tags, color palette
    - Create `data/navigation.ts` with typed NavLink array for all sections (Beranda, Layanan, Portfolio, Harga, FAQ, Blog, Kontak)
    - Define TypeScript interfaces for all configuration types
    - _Requirements: 14.2, 13.2, 18.1, 18.2_

  - [ ] 3.2 Create service and benefit data files
    - Create `data/services.ts` with 6 services: Website Toko Online, Landing Page, Company Profile, Website Sekolah, Website Pemerintahan, Website Organisasi
    - Each service: id, icon, title, description (≤150 chars), whatsappMessage
    - Create `data/benefits.ts` with 8 benefit items in specified order
    - Each benefit: id, icon, title, description (≤100 chars)
    - _Requirements: 4.1, 4.2, 5.1, 5.2_

  - [ ] 3.3 Create portfolio and process steps data files
    - Create `data/portfolio.ts` with minimum 6 portfolio items
    - Each portfolio: slug, name, category (one of 6 valid types), screenshot, description, fullDescription
    - Create `data/process-steps.ts` with 6 steps: Konsultasi, Perencanaan, Desain, Development, Revisi, Launching
    - Each step: id, number (1-6), title, description (≤100 chars), icon
    - _Requirements: 6.1, 6.2, 7.1, 7.2_

  - [ ] 3.4 Create testimonials and pricing data files
    - Create `data/testimonials.ts` with minimum 3 testimonial items
    - Each testimonial: id, name, position, photo, review (≤300 chars), rating (1-5)
    - Create `data/pricing.ts` with 3 tiers: Starter, Professional (isRecommended: true), Business
    - Each tier: id, name, targetAudience, price, features (min 3), isRecommended, whatsappMessage
    - _Requirements: 8.1, 8.2, 9.1, 9.2, 9.3_

  - [ ] 3.5 Create FAQ and blog data files
    - Create `data/faq.ts` with exactly 6 FAQ items
    - Each FAQ: id, question (heading phrase ≤70 chars), answer (≤80 words, self-contained)
    - Create `data/blog-posts.ts` with 6 blog post entries
    - Each post: slug, title (≤80 chars), excerpt (≤150 chars), category, publishedDate, coverImage, content
    - Categories: 'SEO' | 'Website' | 'Bisnis Online' | 'UMKM' | 'Toko Online'
    - _Requirements: 10.1, 11.1, 11.2, 21.1, 21.4_

- [ ] 4. Utility libraries
  - [ ] 4.1 Implement WhatsApp URL builder (`lib/whatsapp.ts`)
    - Implement `buildWhatsAppUrl(options: WhatsAppLinkOptions): string`
    - Implement `buildServiceWhatsAppUrl(serviceName: string): string`
    - Implement `buildPricingWhatsAppUrl(tierName: string): string`
    - Validate phone number format (starts with country code, digits only)
    - URL-encode the message parameter
    - _Requirements: 4.5, 9.4, 12.4, 15.2_

  - [ ]* 4.2 Write property test for WhatsApp URL generation
    - **Property 1: WhatsApp URL Generation**
    - Test that for any non-empty string input, the generated URL starts with `https://wa.me/`, contains the phone number, and includes the input in the decoded `text` parameter
    - Use fast-check `fc.string()` with non-empty constraint
    - File: `__tests__/properties/whatsapp-url.property.test.ts`
    - **Validates: Requirements 4.5, 9.4, 12.4, 15.2**

  - [ ] 4.3 Implement schema markup generators (`lib/schema-markup.ts`)
    - Implement `generateOrganizationSchema()` → Organization JSON-LD
    - Implement `generateLocalBusinessSchema()` → LocalBusiness JSON-LD
    - Implement `generateServiceSchemas(services)` → Service[] JSON-LD
    - Implement `generateFAQSchema(items)` → FAQPage JSON-LD
    - Implement `generateArticleSchema(post)` → Article JSON-LD
    - All schemas must include `@context: "https://schema.org"` and correct `@type`
    - _Requirements: 18.3, 10.4, 21.2_

  - [ ]* 4.4 Write property test for JSON-LD schema generation
    - **Property 6: JSON-LD Schema Generation Round-Trip**
    - Test FAQ schema: for any valid FAQ list, output has correct @context, @type, and mainEntity mapping
    - Test Service schema: for any valid service data, output has valid @type, name, description, provider
    - Use fast-check arbitraries for FAQ and service data
    - File: `__tests__/properties/schema-generation.property.test.ts`
    - **Validates: Requirements 10.4, 18.3, 21.2**

  - [ ] 4.5 Implement blog filter and date formatting utilities (`lib/utils.ts`)
    - Implement `filterBlogPosts(posts, category)` returning filtered subset
    - Implement `formatDate(date: Date): string` using Indonesian locale "DD MMM YYYY"
    - Handle "All" category returning full list
    - _Requirements: 11.3, 11.1_

  - [ ]* 4.6 Write property test for blog category filter
    - **Property 8: Blog Category Filter**
    - Test that filtered results only contain posts matching selected category
    - Test that "All" returns all posts unchanged
    - Test that result is always a subset of input
    - File: `__tests__/properties/blog-filter.property.test.ts`
    - **Validates: Requirements 11.3**

  - [ ]* 4.7 Write property test for date formatting
    - **Property 7: Date Formatting**
    - Test that for any valid Date, output matches "DD MMM YYYY" pattern with Indonesian month abbreviations
    - Use fast-check date arbitrary
    - File: `__tests__/properties/date-formatting.property.test.ts`
    - **Validates: Requirements 11.1**

- [ ] 5. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Shared components
  - [ ] 6.1 Create SectionWrapper component (`components/shared/section-wrapper.tsx`)
    - Client component with `'use client'` directive
    - Props: id (for anchor nav), children, className, animate (default true)
    - Render semantic `<section>` element with `id` attribute
    - Use Framer Motion `useInView` with 0.2 threshold for fade-up entrance
    - Check `useReducedMotion()` — disable animation when active
    - Duration 300-600ms configurable
    - _Requirements: 22.1, 22.3, 20.5_

  - [ ] 6.2 Create AnimatedCard and StarRating components
    - `components/shared/animated-card.tsx`: Client component with `whileHover` scale (1.02-1.05), 200ms transition
    - `components/shared/star-rating.tsx`: Server component rendering filled/unfilled star SVGs with `aria-label`
    - AnimatedCard respects reduced motion preference
    - _Requirements: 22.2, 8.2, 22.3_

- [ ] 7. Layout components
  - [ ] 7.1 Implement Navbar component (`components/layout/navbar.tsx`)
    - Client component with scroll detection (transparent at 0, glassmorphism when scrolled)
    - Fixed position with z-50
    - Desktop: horizontal nav links + CTA button ("Konsultasi Gratis")
    - Mobile (<768px): hamburger icon → slide-in drawer (300ms via drawerVariants)
    - Drawer closes on link click with smooth-scroll
    - Smooth-scroll to section anchors on link click
    - Keyboard accessible hamburger toggle with aria-label and aria-expanded
    - Background transition ≤200ms
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 20.6, 20.7, 22.5_

  - [ ] 7.2 Implement Footer component (`components/layout/footer.tsx`)
    - Server component with 4 columns: Brand/About, Navigation, Services, Contact
    - Display NexaPlus logo and brand name
    - Navigation links to all sections
    - Services list (all 6 services)
    - Contact: WhatsApp, email, social links (Instagram, Facebook, LinkedIn) with aria-labels
    - Copyright: "© {year} NexaPlus. All rights reserved."
    - Responsive: columns → stacked on mobile
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 20.6_

  - [ ] 7.3 Implement WhatsApp floating button (`components/layout/whatsapp-button.tsx`)
    - Client component, fixed bottom-right (16-24px offset), z-index above all
    - Minimum 48x48px touch target
    - WhatsApp brand icon (green)
    - Pulse animation via pulseVariants (1500-3000ms cycle)
    - Respects `prefers-reduced-motion` — no pulse when enabled
    - Opens `wa.me/{number}?text={message}` in new tab with `rel="noopener noreferrer"`
    - aria-label for accessibility
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 20.6_

  - [ ] 7.4 Create root layout (`app/layout.tsx`)
    - Server component importing Inter font via next/font
    - Include Navbar, Footer, and WhatsApp floating button
    - Set up metadata (title, description, OpenGraph, canonical)
    - Wrap children in `<main>` semantic element
    - Include Organization + LocalBusiness JSON-LD scripts
    - _Requirements: 16.2, 18.1, 18.2, 18.7, 18.8, 19.6, 20.5_

- [ ] 8. Homepage sections (Part 1: Above the fold)
  - [ ] 8.1 Implement Hero Section (`components/sections/hero-section.tsx`)
    - Display headline, subheadline from design spec
    - Two CTAs: "Konsultasi Gratis" (WhatsApp link, new tab) and "Lihat Portfolio" (smooth-scroll to #portfolio)
    - Desktop (>768px): two-column layout with mockup image on right using next/image
    - Mobile (≤768px): single centered column, mockup hidden
    - Fade-up entrance animation via SectionWrapper
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7_

  - [ ] 8.2 Implement Trust Section (`components/sections/trust-section.tsx`)
    - Heading: "Dipercaya oleh berbagai bisnis dan organisasi"
    - Display 4-8 client logo placeholders with opacity 0.5-0.7
    - Desktop: horizontal row; Mobile (<768px): scrollable horizontal container
    - Alt text on each logo for accessibility
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [ ] 8.3 Implement Problem Section (`components/sections/problem-section.tsx`)
    - Heading: "Masih Bergantung Pada Marketplace?"
    - 4 pain points with icon, title, explanation (≤100 chars)
    - Solution statement at bottom
    - Responsive: 1 col mobile → 2 col at 768px+
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 9. Homepage sections (Part 2: Services and Benefits)
  - [ ] 9.1 Implement Services Section (`components/sections/services-section.tsx`)
    - Section heading + 6 service cards from data file
    - Each card: icon, title, description, CTA button
    - Hover effect: elevation + gradient border (pointer devices only)
    - CTA opens WhatsApp with pre-filled service message (new tab)
    - Grid: 1 col mobile, 3 col at 768px+
    - Use AnimatedCard for hover interaction
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [ ] 9.2 Implement Benefits Section (`components/sections/benefits-section.tsx`)
    - Heading: "Mengapa Memilih NexaPlus?"
    - 8 benefit items in specified order from data file
    - Each: icon, title, description
    - Hover: elevation change on pointer devices
    - Grid: 1 col (<768px), 2 col (768-1023px), 4 col (1024px+)
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 10. Homepage sections (Part 3: Social Proof)
  - [ ] 10.1 Implement Portfolio Section (`components/sections/portfolio-section.tsx`)
    - Minimum 6 project items from data file
    - Each: screenshot (next/image), project name, category label
    - Hover overlay with "Lihat Detail" button (200-300ms transition)
    - Click navigates to `/portfolio/[slug]`
    - Grid: 1 col mobile, 2 col tablet, 3 col at 1024px+
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ] 10.2 Implement Process Section (`components/sections/process-section.tsx`)
    - 6 steps in timeline: numbered markers, titles, descriptions
    - Desktop (768px+): horizontal timeline; Mobile: vertical timeline
    - Connecting line between steps
    - Dark background using site palette
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [ ] 10.3 Implement Testimonial Section (`components/sections/testimonial-section.tsx`)
    - Minimum 3 testimonial cards from data file
    - Each: client photo (next/image), name, position, review text, StarRating component
    - Photo fallback: initials on gradient background via onError handler
    - Grid: 1 col mobile, 3 col at 768px+
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [ ] 11. Homepage sections (Part 4: Conversion)
  - [ ] 11.1 Implement Pricing Section (`components/sections/pricing-section.tsx`)
    - 3 tier cards: Starter, Professional (recommended badge/border), Business
    - Each: name, target, price, features list (min 3), CTA button
    - Professional tier highlighted with badge/distinct border
    - CTA opens WhatsApp with tier-specific pre-filled message
    - Layout: stacked column (<768px), 3-column row (768px+)
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [ ] 11.2 Implement FAQ Section (`components/sections/faq-section.tsx`)
    - Client component using shadcn/ui Accordion (single mode)
    - Exactly 6 questions, all collapsed initially
    - Click expands one / collapses others (single-expand behavior)
    - Keyboard accessible (Enter/Space toggle, arrow navigation)
    - aria-expanded updates on state change
    - Include FAQPage JSON-LD script element
    - Questions as heading elements for AEO
    - Answers as self-contained paragraphs in dedicated block-level elements
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 21.1, 21.5_

  - [ ] 11.3 Implement Blog Section (`components/sections/blog-section.tsx`)
    - Client component with category filter state
    - Category buttons: All (default), SEO, Website, Bisnis Online, UMKM, Toko Online
    - Max 6 article cards, each: title, excerpt, category badge, date (DD MMM YYYY)
    - Active filter visually indicated
    - Click navigates to `/blog/[slug]`
    - Grid: 1 col mobile, 3 col desktop
    - Empty state: "Belum ada artikel untuk kategori ini"
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

  - [ ] 11.4 Implement Final CTA Section (`components/sections/final-cta-section.tsx`)
    - Heading: "Siap Memiliki Website Profesional?"
    - Subheading: "Konsultasikan kebutuhan website Anda sekarang dan dapatkan penawaran terbaik."
    - WhatsApp button labeled "Chat WhatsApp Sekarang"
    - Button opens WhatsApp in new tab
    - Gradient background (primary → secondary)
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

- [ ] 12. Compose homepage (`app/page.tsx`)
  - [ ] 12.1 Create homepage composing all 12 sections in order
    - Import and render all sections in sequence: Hero, Trust, Problem, Services, Benefits, Portfolio, Process, Testimonial, Pricing, FAQ, Blog, Final CTA
    - Server component (sections handle their own client boundaries)
    - Include Service schemas JSON-LD in page
    - Ensure single h1 in Hero, h2 for all section headings
    - Verify heading hierarchy (no skipped levels)
    - _Requirements: 18.4, 20.5_

- [ ] 13. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 14. Detail pages
  - [ ] 14.1 Implement blog detail page (`app/blog/[slug]/page.tsx`)
    - Static generation with `generateStaticParams` from blog data
    - Display full article content, title, date, category
    - Article JSON-LD schema markup
    - Metadata (title, description, OG tags, canonical)
    - `notFound()` for invalid slugs
    - _Requirements: 11.4, 18.3, 18.4, 18.7, 18.8_

  - [ ] 14.2 Implement portfolio detail page (`app/portfolio/[slug]/page.tsx`)
    - Static generation with `generateStaticParams` from portfolio data
    - Display full project information, screenshots, description
    - Metadata (title, description, OG tags, canonical)
    - `notFound()` for invalid slugs
    - _Requirements: 6.5, 18.7, 18.8_

  - [ ] 14.3 Create custom 404 page
    - Friendly 404 design with navigation back to homepage
    - Consistent with site design system
    - _Requirements: 18.4_

- [ ] 15. SEO implementation
  - [ ] 15.1 Implement sitemap and robots.txt
    - Create `app/sitemap.ts` listing all pages (homepage, blog posts, portfolio items)
    - Create `app/robots.ts` permitting all public pages, referencing sitemap URL
    - _Requirements: 18.5_

  - [ ] 15.2 Verify SEO markup completeness
    - Verify all pages have canonical URLs (self-referencing)
    - Verify all pages have OG tags (og:title, og:description, og:image, og:url)
    - Verify heading hierarchy across all pages (one h1, no skipped levels)
    - Verify all schema markup renders correctly in page source
    - _Requirements: 18.4, 18.6, 18.7, 18.8_

- [ ] 16. Accessibility and performance
  - [ ] 16.1 Implement accessibility enhancements
    - Verify all images use next/image with descriptive alt (5-125 chars) or empty alt for decorative
    - Verify all interactive elements have focus indicators (min 2px solid outline)
    - Verify keyboard tab order follows visual layout
    - Verify semantic HTML usage (nav, main, section, article, header, footer)
    - Verify aria-labels on icon-only elements (WhatsApp, social links, hamburger)
    - Verify aria-expanded/aria-hidden on dynamic widgets
    - Verify touch targets ≥44x44px on mobile
    - _Requirements: 20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7_

  - [ ] 16.2 Implement performance optimizations
    - Verify all raster images ≥32px use next/image with lazy loading
    - Verify code splitting per route (no bundle >150KB gzipped)
    - Use dynamic imports for heavy client components if needed
    - Verify fonts load via next/font (no render-blocking requests)
    - Verify no horizontal overflow on any viewport (320px-2560px)
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 17.1_

- [ ] 17. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 18. Content data property tests
  - [ ]* 18.1 Write property test for content data length constraints
    - **Property 2: Content Data Length Constraints**
    - Test service descriptions ≤150 chars, benefit descriptions ≤100 chars, process steps ≤100 chars, pain points ≤100 chars, testimonial reviews ≤300 chars, ratings 1-5
    - File: `__tests__/properties/content-data.property.test.ts`
    - **Validates: Requirements 3.3, 4.2, 5.2, 7.2, 8.2**

  - [ ]* 18.2 Write property test for portfolio category validity
    - **Property 3: Portfolio Category Validity**
    - Test each portfolio item's category is one of the 6 valid categories
    - File: `__tests__/properties/content-data.property.test.ts`
    - **Validates: Requirements 6.2**

  - [ ]* 18.3 Write property test for pricing tier feature count
    - **Property 4: Pricing Tier Feature Count**
    - Test each pricing tier has at least 3 features
    - File: `__tests__/properties/content-data.property.test.ts`
    - **Validates: Requirements 9.2**

  - [ ]* 18.4 Write property test for FAQ answer word count
    - **Property 9: FAQ Answer Word Count**
    - Test each FAQ answer contains no more than 80 words
    - File: `__tests__/properties/content-data.property.test.ts`
    - **Validates: Requirements 21.1**

  - [ ]* 18.5 Write property test for service description structure
    - **Property 10: Service Description Structure**
    - Test service descriptions are 30-150 words and first sentence contains service name
    - File: `__tests__/properties/content-data.property.test.ts`
    - **Validates: Requirements 21.3**

  - [ ]* 18.6 Write property test for heading character limit
    - **Property 11: Heading Character Limit**
    - Test all heading strings in content data files are ≤70 characters
    - File: `__tests__/properties/content-data.property.test.ts`
    - **Validates: Requirements 21.4**

- [ ] 19. Interaction and accessibility property tests
  - [ ]* 19.1 Write property test for FAQ accordion single-expand behavior
    - **Property 5: FAQ Accordion Single-Expand Behavior**
    - Test that clicking an item results in at most one expanded item at any time
    - Model accordion state machine and verify invariant across random action sequences
    - File: `__tests__/properties/accordion-state.property.test.ts`
    - **Validates: Requirements 10.2, 10.3**

  - [ ]* 19.2 Write property test for color contrast compliance
    - **Property 12: Color Contrast Compliance**
    - Test all foreground/background color pairs in design system meet WCAG 2.1 ratios (4.5:1 normal, 3:1 large)
    - Implement contrast ratio calculation per WCAG formula
    - File: `__tests__/properties/color-contrast.property.test.ts`
    - **Validates: Requirements 20.3**

- [ ] 20. E2E tests with Playwright
  - [ ]* 20.1 Write E2E tests for page rendering and navigation
    - Test homepage loads all 12 sections in correct order
    - Test smooth-scroll navigation from navbar links
    - Test mobile drawer open/close cycle
    - Test WhatsApp links have correct wa.me URLs
    - Test blog category filter interaction
    - Test portfolio hover overlay and navigation
    - _Requirements: 14.3, 14.4, 14.5, 11.3, 6.3, 6.5_

  - [ ]* 20.2 Write E2E tests for responsive layout
    - Test viewports: 320px, 768px, 1024px, 1440px, 2560px — no horizontal overflow
    - Test mobile-specific layouts (stacked columns, hidden mockup, mobile drawer)
    - Test desktop-specific layouts (multi-column grids, horizontal timeline)
    - _Requirements: 17.1, 17.2, 17.3_

  - [ ]* 20.3 Write E2E accessibility and SEO tests
    - Test keyboard-only navigation through entire page
    - Test reduced-motion: verify animations disabled
    - Test meta tags presence (title, description, OG tags, canonical)
    - Test heading hierarchy (one h1, no skipped levels)
    - Test JSON-LD schema blocks present in page source
    - _Requirements: 20.1, 20.4, 22.3, 18.1, 18.4, 18.7, 18.8_

- [ ] 21. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- E2E tests validate integration, responsive behavior, and accessibility
- All content is in Indonesian language as specified in requirements
- All pages use Static Site Generation (SSG) — no server runtime needed
- The implementation uses TypeScript throughout with strict typing

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["2.1", "2.2"] },
    { "id": 3, "tasks": ["3.1", "3.2", "3.3", "3.4", "3.5"] },
    { "id": 4, "tasks": ["4.1", "4.3", "4.5"] },
    { "id": 5, "tasks": ["4.2", "4.4", "4.6", "4.7"] },
    { "id": 6, "tasks": ["6.1", "6.2"] },
    { "id": 7, "tasks": ["7.1", "7.2", "7.3"] },
    { "id": 8, "tasks": ["7.4"] },
    { "id": 9, "tasks": ["8.1", "8.2", "8.3"] },
    { "id": 10, "tasks": ["9.1", "9.2"] },
    { "id": 11, "tasks": ["10.1", "10.2", "10.3"] },
    { "id": 12, "tasks": ["11.1", "11.2", "11.3", "11.4"] },
    { "id": 13, "tasks": ["12.1"] },
    { "id": 14, "tasks": ["14.1", "14.2", "14.3"] },
    { "id": 15, "tasks": ["15.1", "15.2"] },
    { "id": 16, "tasks": ["16.1", "16.2"] },
    { "id": 17, "tasks": ["18.1", "18.2", "18.3", "18.4", "18.5", "18.6"] },
    { "id": 18, "tasks": ["19.1", "19.2"] },
    { "id": 19, "tasks": ["20.1", "20.2", "20.3"] }
  ]
}
```
