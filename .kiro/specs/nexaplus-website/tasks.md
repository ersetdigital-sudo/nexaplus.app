# Implementation Plan: NexaPlus Website

## Overview

Build the NexaPlus premium digital agency website using Next.js 15 App Router, TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion. The implementation proceeds from foundational setup through data layer, utility functions, layout components, homepage sections, dynamic pages, SEO/schema markup, and finally testing. Each task builds incrementally, ensuring no orphaned code.

## Tasks

- [ ] 1. Project setup and foundational configuration
  - [ ] 1.1 Initialize Next.js 15 project with TypeScript, Tailwind CSS v4, and configure base settings
    - Initialize the Next.js 15 App Router project with TypeScript
    - Install dependencies: tailwindcss v4, framer-motion, shadcn/ui
    - Configure `tailwind.config.ts` with the NexaPlus color palette (background #050816, primary #2563EB, secondary #7C3AED, accent #22D3EE, text #FFFFFF)
    - Configure `next.config.ts` with image optimization settings
    - Set up `globals.css` with Tailwind directives and CSS custom properties for glassmorphism
    - Configure Inter font via `next/font` in the root layout
    - Create the project directory structure as defined in the design (`components/`, `data/`, `lib/`, `public/`, etc.)
    - _Requirements: 16.1, 16.2, 19.6, 17.2_

  - [ ] 1.2 Set up shadcn/ui and shared UI components
    - Initialize shadcn/ui with the dark theme configuration
    - Add required shadcn/ui components: Button, Card, Badge, Accordion
    - Create `components/shared/section-wrapper.tsx` — a reusable section container with Framer Motion `useInView` fade-up animation (300-600ms) and `prefers-reduced-motion` respect
    - Create `components/shared/animated-card.tsx` — card with hover scale effect (1.02-1.05, 200ms transition)
    - Create `components/shared/star-rating.tsx` — star rating SVG component with aria-label
    - _Requirements: 16.3, 16.5, 16.6, 22.1, 22.2, 22.3_

  - [ ] 1.3 Create animation presets and utility library
    - Create `lib/animations.ts` with Framer Motion variant presets: `fadeUpVariants`, `cardHoverVariants`, `navbarTransition`, `drawerVariants`, `pulseVariants`
    - Create `lib/utils.ts` with `cn()` helper (clsx + twMerge), `formatDate` function (DD MMM YYYY Indonesian locale)
    - _Requirements: 22.1, 22.2, 22.5, 11.1_

- [ ] 2. Data layer and content files
  - [ ] 2.1 Create site configuration and navigation data
    - Create `data/site-config.ts` with brand info, WhatsApp number, meta tags, color palette, and font configuration
    - Create `data/navigation.ts` with nav links array (Beranda, Layanan, Portfolio, Harga, FAQ, Blog, Kontak)
    - _Requirements: 14.2, 18.1, 18.2_

  - [ ] 2.2 Create service, benefit, and process data files
    - Create `data/services.ts` with 6 service items (Website Toko Online, Landing Page, Company Profile, Website Sekolah, Website Pemerintahan, Website Organisasi) — each with id, icon, title, description (≤150 chars), and whatsappMessage
    - Create `data/benefits.ts` with 8 benefit items in the specified order — each with icon, title, and description (≤100 chars)
    - Create `data/process-steps.ts` with 6 steps (Konsultasi, Perencanaan, Desain, Development, Revisi, Launching) — each with number, title, and description (≤100 chars)
    - _Requirements: 4.1, 4.2, 5.2, 7.1, 7.2_

  - [ ] 2.3 Create pricing, FAQ, testimonial, portfolio, and blog data files
    - Create `data/pricing.ts` with 3 tiers: Starter (Landing Page), Professional (Company Profile, isRecommended: true), Business (Website Toko Online) — each with min 3 features and whatsappMessage
    - Create `data/faq.ts` with 6 FAQ items — each answer ≤80 words, self-contained
    - Create `data/testimonials.ts` with min 3 testimonials — each with photo, name, position, review (≤300 chars), rating (1-5)
    - Create `data/portfolio.ts` with min 6 items — each with slug, name, valid category, screenshot, description
    - Create `data/blog-posts.ts` with 6 articles — each with slug, title (≤80 chars), excerpt (≤150 chars), category (SEO|Website|Bisnis Online|UMKM|Toko Online), publishedDate, coverImage
    - _Requirements: 9.1, 9.2, 10.1, 8.1, 8.2, 6.1, 6.2, 11.1, 21.1_

  - [ ]* 2.4 Write property tests for content data validation
    - **Property 2: Content Data Length Constraints** — verify all data items respect max lengths (pain points ≤100, services ≤150, benefits ≤100, process ≤100, testimonials ≤300, ratings 1-5)
    - **Property 3: Portfolio Category Validity** — verify all portfolio items have valid categories
    - **Property 4: Pricing Tier Feature Count** — verify each tier has ≥3 features
    - **Property 9: FAQ Answer Word Count** — verify each FAQ answer ≤80 words
    - **Property 10: Service Description Structure** — verify 30-150 words and first sentence contains service name
    - **Property 11: Heading Character Limit** — verify all headings ≤70 characters
    - **Validates: Requirements 3.3, 4.2, 5.2, 7.2, 8.2, 6.2, 9.2, 21.1, 21.3, 21.4**

- [ ] 3. Utility functions and helpers
  - [ ] 3.1 Implement WhatsApp URL builder
    - Create `lib/whatsapp.ts` with `buildWhatsAppUrl`, `buildServiceWhatsAppUrl`, and `buildPricingWhatsAppUrl` functions
    - Validate phone number format (country code, digits only) at build time
    - URL encodes pre-filled messages
    - _Requirements: 4.5, 9.4, 12.4, 15.2_

  - [ ] 3.2 Implement schema markup generators
    - Create `lib/schema-markup.ts` with functions: `generateOrganizationSchema`, `generateLocalBusinessSchema`, `generateServiceSchemas`, `generateFAQSchema`, `generateArticleSchema`
    - Each produces valid JSON-LD conforming to Schema.org specifications
    - Include build-time validation for required fields
    - _Requirements: 18.3, 21.2, 10.4_

  - [ ]* 3.3 Write property tests for utility functions
    - **Property 1: WhatsApp URL Generation** — for any non-empty string, URL starts with `https://wa.me/`, contains phone number, and text param decoded contains input
    - **Property 6: JSON-LD Schema Generation Round-Trip** — FAQSchema produces correct @context, @type, mainEntity array; ServiceSchemas produce valid objects
    - **Property 7: Date Formatting** — for any valid Date, output matches DD MMM YYYY pattern
    - **Property 8: Blog Category Filter** — `filterBlogPosts` returns only matching posts; "All" returns all
    - **Validates: Requirements 4.5, 9.4, 12.4, 15.2, 10.4, 18.3, 21.2, 11.1, 11.3**

- [ ] 4. Checkpoint - Verify foundational layers
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Layout components (Navbar, Footer, WhatsApp Button)
  - [ ] 5.1 Implement Navbar component
    - Create `components/layout/navbar.tsx` as a client component
    - Fixed position with z-50, transparent background at scroll offset 0
    - Glassmorphism background (bg-white/5 backdrop-blur-md) when scrolled, transition ≤200ms
    - Desktop: horizontal nav links + CTA button
    - Mobile (<768px): hamburger icon → slide-in drawer (300ms transition)
    - Smooth-scroll to section on link click (desktop ≤800ms, mobile closes drawer within 300ms)
    - Keyboard accessible hamburger toggle with aria-expanded, aria-label
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 22.5, 20.6, 20.7_

  - [ ] 5.2 Implement Footer component
    - Create `components/layout/footer.tsx` as a server component
    - 4-column layout: Brand/About, Navigation, Services, Contact
    - Display NexaPlus logo and brand name
    - Navigation links to all major sections
    - Services list (6 services)
    - Contact info: WhatsApp, email, social links (Instagram, Facebook, LinkedIn) with aria-labels
    - Copyright text with dynamic year
    - Responsive: stacks on mobile
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 20.6_

  - [ ] 5.3 Implement Floating WhatsApp Button
    - Create `components/layout/whatsapp-button.tsx` as a client component
    - Fixed bottom-right (16-24px offset), z-index above all content
    - Minimum 48x48px, WhatsApp brand icon
    - Pulse animation (1500-3000ms cycle) via Framer Motion pulseVariants
    - Respects `prefers-reduced-motion` — disables pulse
    - Opens wa.me URL in new tab with `rel="noopener noreferrer"`
    - aria-label for accessibility
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 20.6_

  - [ ] 5.4 Create root layout integrating Navbar, Footer, and WhatsApp Button
    - Create `app/layout.tsx` with Inter font via next/font, global metadata (title, description, Open Graph tags, canonical URL)
    - Integrate Navbar, Footer, and WhatsApp Button in layout
    - Add Organization and LocalBusiness JSON-LD schema markup
    - Set viewport meta tag correctly
    - _Requirements: 18.1, 18.2, 18.7, 18.8, 19.6, 20.5_

  - [ ]* 5.5 Write unit tests for layout components
    - Test Navbar renders logo and all nav links, hamburger shows on mobile viewport
    - Test Footer renders all columns, copyright year, and navigation links
    - Test WhatsApp Button renders with correct aria-label and wa.me href
    - _Requirements: 14.2, 13.2, 15.2, 20.6_

- [ ] 6. Homepage sections (Part 1: Hero through Benefits)
  - [ ] 6.1 Implement Hero Section
    - Create `components/sections/hero-section.tsx`
    - Display headline, subheadline, two CTA buttons ("Konsultasi Gratis", "Lihat Portfolio")
    - "Konsultasi Gratis" opens WhatsApp in new tab; "Lihat Portfolio" smooth-scrolls to portfolio section
    - Desktop (>768px): content left, mockup image right using next/image
    - Mobile (≤768px): single centered column, no mockup
    - Use SectionWrapper with fade-up animation
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 19.4_

  - [ ] 6.2 Implement Trust Section
    - Create `components/sections/trust-section.tsx`
    - Display heading and 4-8 client logo placeholders with opacity 0.5-0.7
    - Desktop: horizontal row; Mobile (<768px): scrollable horizontal container
    - Each logo has alt text for accessibility
    - Use SectionWrapper with animation
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [ ] 6.3 Implement Problem Section
    - Create `components/sections/problem-section.tsx`
    - Display heading "Masih Bergantung Pada Marketplace?" and 4 pain points (icon + title + explanation ≤100 chars)
    - Solution statement at bottom
    - Responsive: 1 col <768px, 2 cols ≥768px
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ] 6.4 Implement Services Section
    - Create `components/sections/services-section.tsx` with client sub-component for hover
    - 6 service cards using AnimatedCard: icon, title, description (≤150 chars), CTA button
    - Hover effect: elevation increase + gradient border highlight
    - CTA opens WhatsApp with pre-filled service-specific message in new tab
    - Responsive: 1 col <768px, 3 cols ≥768px
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [ ] 6.5 Implement Benefits Section
    - Create `components/sections/benefits-section.tsx`
    - 8 benefit items in specified order using AnimatedCard with hover elevation
    - Each: icon, title, description (≤100 chars)
    - Responsive grid: 1 col <768px, 2 cols 768-1023px, 4 cols ≥1024px
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 7. Homepage sections (Part 2: Portfolio through Final CTA)
  - [ ] 7.1 Implement Portfolio Section
    - Create `components/sections/portfolio-section.tsx` with client sub-component for hover overlay
    - Min 6 project items: screenshot (next/image), name, category label
    - Hover overlay with "Lihat Detail" button (200-300ms transition)
    - Click navigates to `/portfolio/[slug]`
    - Responsive grid: 1 col <768px, 2 col 768-1023px, 3 cols ≥1024px
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ] 7.2 Implement Process Section
    - Create `components/sections/process-section.tsx`
    - 6 timeline steps with numbered markers (1-6), titles, descriptions (≤100 chars)
    - Horizontal layout ≥768px, vertical <768px
    - Visible connecting line between steps
    - Dark background using site color palette
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [ ] 7.3 Implement Testimonial Section
    - Create `components/sections/testimonial-section.tsx`
    - Min 3 testimonial cards using StarRating component
    - Each: client photo (next/image with onError fallback showing initials), name, position, review (≤300 chars), star rating (1-5)
    - Responsive: 1 col <768px, 3 cols ≥768px
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [ ] 7.4 Implement Pricing Section
    - Create `components/sections/pricing-section.tsx`
    - 3 tier cards: Starter, Professional (highlighted as recommended with badge/border), Business
    - Each: tier name, target audience, price, min 3 features, CTA button
    - CTA opens WhatsApp with tier-specific pre-filled message
    - Responsive: stacked <768px, 3-column ≥768px
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [ ] 7.5 Implement FAQ Section
    - Create `components/sections/faq-section.tsx` as client component
    - 6 questions in shadcn/ui Accordion (single mode, all collapsed initially)
    - Click expands/collapses; only one expanded at a time
    - Keyboard accessible (Enter/Space toggle, focus indicators)
    - aria-expanded attribute updates on state change
    - Generate FAQPage JSON-LD script element in the section
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 20.7, 21.1, 21.5_

  - [ ] 7.6 Implement Blog Section
    - Create `components/sections/blog-section.tsx` as client component
    - Max 6 article cards: title (≤80 chars), excerpt (≤150 chars), category label, date (DD MMM YYYY)
    - Category filter buttons: All (default), SEO, Website, Bisnis Online, UMKM, Toko Online
    - Client-side filtering with active filter visual indicator
    - Click article → navigates to `/blog/[slug]`
    - Responsive grid: 1 col <768px, 3 cols desktop
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

  - [ ] 7.7 Implement Final CTA Section
    - Create `components/sections/final-cta-section.tsx`
    - Heading "Siap Memiliki Website Profesional?"
    - Subheading with consultation prompt
    - WhatsApp button "Chat WhatsApp Sekarang" opens wa.me in new tab
    - Gradient background (primary → secondary)
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

- [ ] 8. Homepage composition and dynamic pages
  - [ ] 8.1 Compose homepage with all sections
    - Create `app/page.tsx` composing all 12 sections in order: Hero, Trust, Problem, Services, Benefits, Portfolio, Process, Testimonial, Pricing, FAQ, Blog, Final CTA
    - Wrap in `<main>` semantic element
    - Ensure single h1 on page (in Hero section), proper heading hierarchy (h2 for section headings, h3 for sub-items)
    - Add Service schema JSON-LD markup
    - _Requirements: 18.4, 20.5_

  - [ ] 8.2 Implement blog article detail page
    - Create `app/blog/[slug]/page.tsx` with `generateStaticParams` for SSG
    - Display full article content with proper heading hierarchy
    - Generate Article JSON-LD schema
    - Add meta tags (title, description, Open Graph, canonical)
    - Return `notFound()` for invalid slugs
    - _Requirements: 11.4, 18.3, 18.7, 18.8_

  - [ ] 8.3 Implement portfolio detail page
    - Create `app/portfolio/[slug]/page.tsx` with `generateStaticParams` for SSG
    - Display full project information: screenshot, name, category, description
    - Add meta tags (title, description, Open Graph, canonical)
    - Return `notFound()` for invalid slugs
    - _Requirements: 6.5, 18.7, 18.8_

  - [ ] 8.4 Implement sitemap.xml and robots.txt
    - Create `app/sitemap.ts` listing all public pages (homepage, blog articles, portfolio items)
    - Create `app/robots.ts` permitting crawling of all public pages, referencing sitemap URL
    - _Requirements: 18.5_

  - [ ] 8.5 Create custom 404 page
    - Create `app/not-found.tsx` with brand-consistent styling
    - Used by `notFound()` in blog and portfolio dynamic routes
    - _Requirements: Design error handling specification_

- [ ] 9. Checkpoint - Full site functional review
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 10. Accessibility, SEO, and performance hardening
  - [ ] 10.1 Accessibility audit and fixes
    - Verify all interactive elements have minimum 44x44px touch targets on mobile
    - Verify all icon-only elements have aria-labels (WhatsApp button, social links, hamburger menu)
    - Verify color contrast ratios meet WCAG 4.5:1 for normal text, 3:1 for large text
    - Verify tab order follows visual layout, all focusable elements have 2px solid outline focus indicators
    - Verify semantic HTML structure (nav, main, section, article, header, footer)
    - Verify all informational images have descriptive alt text (5-125 chars), decorative images have empty alt
    - _Requirements: 20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 17.3, 17.4_

  - [ ] 10.2 SEO final implementation
    - Verify heading hierarchy (single h1, no skipped levels)
    - Verify canonical URL on all pages (self-referencing)
    - Verify Open Graph meta tags on all pages
    - Ensure Lighthouse SEO score of 100
    - _Requirements: 18.4, 18.6, 18.7, 18.8_

  - [ ] 10.3 Performance optimization
    - Verify all raster images ≥32px use next/image component
    - Implement dynamic imports for client components to keep initial JS bundle <150KB gzipped per route
    - Verify no horizontal overflow on viewports 320px-2560px
    - Verify fonts loaded via next/font (no render-blocking requests, no layout shift)
    - Ensure minimum 16px body text on mobile
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 17.1, 17.5_

  - [ ]* 10.4 Write property test for color contrast compliance
    - **Property 12: Color Contrast Compliance** — verify all foreground/background color pairs in the design system meet WCAG 4.5:1 for normal text, 3:1 for large text
    - **Validates: Requirements 20.3**

- [ ] 11. Checkpoint - Accessibility and performance verification
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 12. FAQ accordion behavior and animation tests
  - [ ]* 12.1 Write property test for FAQ accordion state
    - **Property 5: FAQ Accordion Single-Expand Behavior** — verify that at most one item is expanded at any time; clicking collapsed item expands it and collapses others; clicking expanded item collapses it
    - **Validates: Requirements 10.2, 10.3**

  - [ ]* 12.2 Write integration tests for animations and interactions
    - Test sections trigger fade-up animation on viewport entry
    - Test hover scale transform on interactive cards
    - Test prefers-reduced-motion disables all non-essential animations
    - Test navbar background transitions between transparent and glassmorphism states
    - Test no more than 3 elements animate simultaneously per viewport frame
    - _Requirements: 22.1, 22.2, 22.3, 22.4, 22.5_

- [ ] 13. Final checkpoint - Complete verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The site uses Static Site Generation (SSG) — no server runtime required
- All content lives in TypeScript data files for type safety and easy updates
- Testing uses Vitest + fast-check for property tests, React Testing Library for components

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["2.1", "2.2", "2.3", "3.1", "3.2"] },
    { "id": 3, "tasks": ["2.4", "3.3"] },
    { "id": 4, "tasks": ["5.1", "5.2", "5.3"] },
    { "id": 5, "tasks": ["5.4", "5.5"] },
    { "id": 6, "tasks": ["6.1", "6.2", "6.3", "6.4", "6.5"] },
    { "id": 7, "tasks": ["7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7"] },
    { "id": 8, "tasks": ["8.1", "8.2", "8.3", "8.4", "8.5"] },
    { "id": 9, "tasks": ["10.1", "10.2", "10.3"] },
    { "id": 10, "tasks": ["10.4", "12.1", "12.2"] }
  ]
}
```
