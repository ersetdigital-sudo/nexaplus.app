# Requirements Document

## Introduction

NexaPlus (nexaplus.app) is a premium digital agency website built to sell website creation services to Indonesian small-medium businesses, marketplace sellers, schools, government agencies, and organizations. The website serves as the primary lead generation channel, converting visitors into WhatsApp inquiries through trust-building content, portfolio showcase, and clear service offerings. The site is built with Next.js 15 App Router, TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion, targeting top-tier performance, SEO, AEO, and GEO scores.

## Glossary

- **Website**: The NexaPlus digital agency website at nexaplus.app
- **Visitor**: A person who navigates to the Website
- **Lead**: A Visitor who initiates contact via WhatsApp or other channels
- **CTA**: Call-to-Action; a UI element that prompts the Visitor to take a specific action
- **Hero_Section**: The first visible section of the homepage containing headline, subheadline, CTAs, and mockup
- **Trust_Section**: A section displaying client logos to establish credibility
- **Problem_Section**: A section highlighting marketplace dependency issues
- **Services_Section**: A section displaying premium service cards for each offering
- **Benefits_Section**: A section showcasing reasons to choose NexaPlus
- **Portfolio_Section**: A section displaying project screenshots in a grid layout
- **Process_Section**: A timeline section showing the workflow from consultation to launch
- **Testimonial_Section**: A section with client review cards
- **Pricing_Section**: A section displaying three pricing tiers
- **FAQ_Section**: An accordion section with frequently asked questions
- **Blog_Section**: A section displaying articles with categories
- **Final_CTA_Section**: A closing section with a WhatsApp contact button
- **Footer**: The bottom section with navigation, contact info, and social links
- **Navbar**: The persistent top navigation component
- **WhatsApp_Button**: A floating or inline button linking to WhatsApp contact
- **Schema_Markup**: Structured data in JSON-LD format for search engines
- **Core_Web_Vitals**: Google performance metrics (LCP, INP, CLS)
- **Glassmorphism**: A design style using frosted-glass transparency effects
- **PageSpeed_Score**: Google Lighthouse performance rating (0-100)
- **UMKM**: Usaha Mikro Kecil dan Menengah (Indonesian micro, small, and medium enterprises)
- **AEO**: Answer Engine Optimization; optimizing content for AI-generated answers
- **GEO**: Generative Engine Optimization; optimizing content for generative AI search
- **Renderer**: The Next.js rendering engine responsible for page output

## Requirements

### Requirement 1: Hero Section Display

**User Story:** As a Visitor, I want to see a compelling hero section when I land on the homepage, so that I immediately understand NexaPlus offers professional website creation services.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Hero_Section SHALL display the headline "Jasa Pembuatan Website Profesional untuk Bisnis Modern"
2. WHEN the homepage loads, THE Hero_Section SHALL display the subheadline "Kami membantu UMKM, seller marketplace dan perusahaan memiliki website profesional yang cepat, SEO Friendly dan menghasilkan lebih banyak pelanggan."
3. WHEN the homepage loads, THE Hero_Section SHALL display two CTA buttons labeled "Konsultasi Gratis" and "Lihat Portfolio"
4. WHEN the Visitor clicks the "Konsultasi Gratis" CTA, THE Website SHALL open the WhatsApp contact link in a new browser tab
5. WHEN the Visitor clicks the "Lihat Portfolio" CTA, THE Website SHALL smooth-scroll the page to the Portfolio_Section
6. WHEN the homepage loads on viewports wider than 768px, THE Hero_Section SHALL display a website mockup image on the right side of the content area
7. WHILE the viewport width is 768px or less, THE Hero_Section SHALL hide the mockup image and display the headline, subheadline, and CTA buttons in a single centered column

### Requirement 2: Trust Section Display

**User Story:** As a Visitor, I want to see logos of organizations that trust NexaPlus, so that I feel confident in the agency's credibility.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Trust_Section SHALL display the heading "Dipercaya oleh berbagai bisnis dan organisasi"
2. WHEN the homepage loads, THE Trust_Section SHALL display between 4 and 8 client logo placeholders in a horizontal row with reduced opacity (between 0.5 and 0.7) to maintain subtle styling that does not compete with surrounding content
3. WHILE the viewport width is less than 768px, THE Trust_Section SHALL display the logos in a scrollable horizontal container
4. THE Trust_Section SHALL provide an accessible label for each logo identifying the organization name via alt text

### Requirement 3: Problem Section Display

**User Story:** As a Visitor, I want to understand the risks of marketplace dependency, so that I recognize the value of owning a dedicated website.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Problem_Section SHALL display the heading "Masih Bergantung Pada Marketplace?"
2. WHEN the homepage loads, THE Problem_Section SHALL display 4 pain points: account suspension risk, increasing marketplace fees, difficulty building customer databases, and not owning digital assets
3. THE Problem_Section SHALL present each pain point with an icon, a title, and an explanation of no more than 100 characters
4. THE Problem_Section SHALL conclude with a solution statement explaining that a dedicated website is the long-term solution
5. THE Problem_Section SHALL use a responsive layout adapting from 1 column on viewports below 768px to 2 columns on viewports of 768px and wider

### Requirement 4: Services Section Display

**User Story:** As a Visitor, I want to browse available website creation services, so that I can identify which service matches my needs.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Services_Section SHALL display a section heading and 6 service cards: Website Toko Online, Landing Page, Company Profile, Website Sekolah, Website Pemerintahan, and Website Organisasi
2. THE Services_Section SHALL display each service card with an icon, a title, a description of no more than 150 characters, and a CTA button linking to the WhatsApp contact link
3. WHEN the Visitor hovers over a service card on devices with pointer capability, THE Website SHALL apply a hover effect consisting of an elevation increase (box-shadow change) and a gradient border highlight
4. WHILE the viewport width is less than 768px, THE Services_Section SHALL display service cards in a single-column layout; WHILE the viewport width is 768px or greater, THE Services_Section SHALL display service cards in a grid of up to 3 columns
5. WHEN the Visitor clicks a service card CTA button, THE Website SHALL open the WhatsApp contact link in a new browser tab with a pre-filled message referencing the selected service name

### Requirement 5: Benefits Section Display

**User Story:** As a Visitor, I want to understand the advantages of choosing NexaPlus, so that I can compare the value against competitors.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Benefits_Section SHALL display the heading "Mengapa Memilih NexaPlus?"
2. THE Benefits_Section SHALL display exactly 8 benefit items in this order: Desain Profesional, Mobile Friendly, SEO Friendly, Fast Loading, Keamanan Tinggi, Support WhatsApp, Gratis Konsultasi, and Responsive di Semua Device, each with an icon, title, and a description of no more than 100 characters
3. THE Benefits_Section SHALL use a responsive grid layout that adapts from 1 column on viewports below 768px, to 2 columns on viewports between 768px and 1023px, to 4 columns on viewports 1024px and above
4. WHEN the Visitor hovers over a benefit item on devices with pointer capability, THE Website SHALL apply a visual hover effect with elevation change

### Requirement 6: Portfolio Section Display

**User Story:** As a Visitor, I want to view NexaPlus's past projects, so that I can assess the quality of their work.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Portfolio_Section SHALL display a minimum of 6 project items in a grid layout
2. THE Portfolio_Section SHALL display each project item with a screenshot image, project name, and a category label matching one of the offered services (Toko Online, Landing Page, Company Profile, Website Sekolah, Website Pemerintahan, or Website Organisasi)
3. WHEN the Visitor hovers over a portfolio item on devices with pointer capability, THE Website SHALL display a detail overlay with a "Lihat Detail" button within a transition duration of 200ms to 300ms
4. THE Portfolio_Section SHALL use a responsive grid layout that adapts from 1 column on viewports below 768px to 3 columns on viewports of 1024px and above
5. WHEN the Visitor clicks the "Lihat Detail" button on a portfolio item overlay, THE Website SHALL navigate the Visitor to a project detail view displaying the full project information

### Requirement 7: Process Section Display

**User Story:** As a Visitor, I want to see the project workflow, so that I understand how NexaPlus delivers a website from start to finish.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Process_Section SHALL display 6 steps in a timeline layout: Konsultasi, Perencanaan, Desain, Development, Revisi, and Launching
2. THE Process_Section SHALL display each step with a numbered marker (1–6), a title, and a description of no more than 100 characters
3. WHILE the viewport width is 768px or wider, THE Process_Section SHALL display the timeline in a horizontal layout; WHILE the viewport width is less than 768px, THE Process_Section SHALL display the timeline in a vertical layout
4. THE Process_Section SHALL display a visible connecting line between each consecutive step indicating sequential progression
5. THE Process_Section SHALL render on a dark background using the Website color palette background color

### Requirement 8: Testimonial Section Display

**User Story:** As a Visitor, I want to read client reviews, so that I can evaluate customer satisfaction before making contact.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Testimonial_Section SHALL display a minimum of 3 testimonial cards
2. THE Testimonial_Section SHALL display each testimonial card with a client photo, name, position, review text (maximum 300 characters), and star rating rendered as filled and unfilled star icons (1-5)
3. THE Testimonial_Section SHALL use a responsive layout that adapts from 1 column on viewports below 768px to 3 columns on viewports of 768px and above
4. IF a client photo fails to load, THE Testimonial_Section SHALL display a fallback placeholder showing the client's initials

### Requirement 9: Pricing Section Display

**User Story:** As a Visitor, I want to compare pricing tiers, so that I can select a package that fits my budget and needs.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Pricing_Section SHALL display 3 pricing tier cards: Starter (Landing Page), Professional (Company Profile), and Business (Website Toko Online)
2. THE Pricing_Section SHALL display each tier card with a tier name, target description, price, a CTA button, and a list of at minimum 3 included features
3. THE Pricing_Section SHALL visually highlight the Professional tier as the recommended option by displaying a distinguishing indicator such as a badge label or a distinct border treatment that differentiates it from the other two tier cards
4. WHEN the Visitor clicks a pricing tier CTA button, THE Website SHALL navigate the Visitor to the WhatsApp contact link with a pre-filled message containing the selected tier name
5. THE Pricing_Section SHALL use a responsive layout that adapts from a single vertically stacked column on viewports narrower than 768px to a 3-column horizontal row on viewports of 768px or wider

### Requirement 10: FAQ Section Display

**User Story:** As a Visitor, I want to find answers to common questions, so that I can resolve doubts without contacting support.

#### Acceptance Criteria

1. WHEN the homepage loads, THE FAQ_Section SHALL display exactly 6 questions in an accordion component with all items in a collapsed state
2. WHEN the Visitor clicks a collapsed accordion item, THE FAQ_Section SHALL expand that item's answer content and collapse any other currently expanded item
3. WHEN the Visitor clicks an already-expanded accordion item, THE FAQ_Section SHALL collapse that item's answer content
4. THE FAQ_Section SHALL render a valid FAQPage JSON-LD script element containing each question and its corresponding answer text as structured data parseable by search engines
5. THE FAQ_Section SHALL allow each accordion item to be focused and toggled via keyboard interaction

### Requirement 11: Blog Section Display

**User Story:** As a Visitor, I want to browse educational articles, so that I can learn about website creation and online business topics.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Blog_Section SHALL display a maximum of 6 article cards, each showing a title (maximum 80 characters), an excerpt (maximum 150 characters), a category label, and a publication date in "DD MMM YYYY" format
2. THE Blog_Section SHALL display category filter buttons for: SEO, Website, Bisnis Online, UMKM, and Toko Online, with an "All" option selected by default showing articles from all categories
3. WHEN the Visitor clicks a category filter button, THE Blog_Section SHALL display only article cards matching the selected category and visually indicate the active filter
4. WHEN the Visitor clicks an article card, THE Website SHALL navigate to the full article page
5. THE Blog_Section SHALL use a responsive grid layout that adapts from 1 column on viewports below 768px to 3 columns on desktop viewports

### Requirement 12: Final CTA Section Display

**User Story:** As a Visitor, I want a final prompt to take action, so that I can easily contact NexaPlus after reviewing the page.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Final_CTA_Section SHALL display the heading "Siap Memiliki Website Profesional?"
2. WHEN the homepage loads, THE Final_CTA_Section SHALL display the subheading "Konsultasikan kebutuhan website Anda sekarang dan dapatkan penawaran terbaik."
3. WHEN the homepage loads, THE Final_CTA_Section SHALL display a WhatsApp_Button with the label "Chat WhatsApp Sekarang"
4. WHEN the Visitor clicks the WhatsApp_Button, THE Website SHALL open the WhatsApp contact link in a new browser tab
5. THE Final_CTA_Section SHALL render with a gradient background using combinations of primary and secondary colors

### Requirement 13: Footer Display

**User Story:** As a Visitor, I want a comprehensive footer, so that I can navigate the site and find contact information.

#### Acceptance Criteria

1. THE Footer SHALL display the NexaPlus logo and brand name
2. THE Footer SHALL display navigation links to all major sections: Beranda, Layanan, Portfolio, Harga, FAQ, Blog, and Kontak
3. THE Footer SHALL display a list of services offered: Website Toko Online, Landing Page, Company Profile, Website Sekolah, Website Pemerintahan, and Website Organisasi
4. THE Footer SHALL display contact information including WhatsApp number, email address, and social media links (Instagram, Facebook, LinkedIn)
5. THE Footer SHALL display copyright text in the format "© {current year} NexaPlus. All rights reserved."
6. THE Footer SHALL organize content into columns: Brand/About, Navigation, Services, and Contact

### Requirement 14: Navbar and Navigation

**User Story:** As a Visitor, I want persistent navigation, so that I can access any section of the website at any time.

#### Acceptance Criteria

1. THE Navbar SHALL remain fixed at the top of the viewport during scrolling
2. THE Navbar SHALL display the NexaPlus logo and navigation links to the following sections: Beranda, Layanan, Portfolio, Harga, FAQ, Blog, and Kontak
3. WHILE the viewport width is less than 768px, THE Navbar SHALL replace navigation links with a hamburger menu icon that, when tapped, opens a mobile navigation drawer with a slide-in animation lasting no more than 300ms
4. WHEN the Visitor clicks a navigation link inside the mobile drawer, THE Website SHALL smooth-scroll to the corresponding section and close the drawer within 300ms
5. WHEN the Visitor clicks a navigation link on the desktop navbar, THE Website SHALL smooth-scroll to the corresponding section within 800ms
6. WHILE the page is scrolled to the top (scroll offset is 0), THE Navbar SHALL display a fully transparent background
7. WHEN the page scroll offset exceeds 0, THE Navbar SHALL apply a semi-transparent background with a backdrop blur of at least 8px

### Requirement 15: Floating WhatsApp Button

**User Story:** As a Visitor, I want a persistent WhatsApp button, so that I can contact NexaPlus from any point on the page.

#### Acceptance Criteria

1. THE WhatsApp_Button SHALL remain fixed in the bottom-right corner of the viewport with an offset of 16px to 24px from both the right and bottom edges, and a z-index sufficient to remain above all other page content
2. WHEN the Visitor clicks the WhatsApp_Button, THE Website SHALL open the WhatsApp contact link (wa.me URL with NexaPlus phone number) in a new browser tab
3. THE WhatsApp_Button SHALL display with a minimum size of 48x48px, the WhatsApp brand logo icon, and a repeating pulse animation with a cycle duration between 1500ms and 3000ms
4. IF the Visitor has enabled the prefers-reduced-motion setting, THEN THE WhatsApp_Button SHALL not display the pulse animation

### Requirement 16: Visual Design System

**User Story:** As a Visitor, I want a premium and consistent visual experience, so that I perceive NexaPlus as trustworthy and professional.

#### Acceptance Criteria

1. THE Website SHALL use the color palette: background #050816, primary #2563EB, secondary #7C3AED, accent #22D3EE, text #FFFFFF
2. THE Website SHALL use Inter as the primary font family loaded via next/font
3. THE Website SHALL apply Glassmorphism effects to card components using semi-transparent backgrounds (rgba values with alpha between 0.03 and 0.10) and backdrop blur of at least 8px
4. THE Website SHALL apply gradient effects using linear gradients flowing from primary (#2563EB) to secondary (#7C3AED) or primary to accent (#22D3EE)
5. THE Website SHALL use rounded corners with a minimum border-radius of 8px on interactive elements and 12px on card components
6. WHEN a section scrolls into the viewport, THE Renderer SHALL trigger a fade-in entrance animation using Framer Motion with a duration between 300ms and 600ms

### Requirement 17: Responsive Design

**User Story:** As a Visitor using a mobile device, I want the website to adapt to my screen size, so that I can browse comfortably on any device.

#### Acceptance Criteria

1. THE Website SHALL render on viewports from 320px to 2560px width without horizontal overflow, without overlapping elements, and with all text content visible without horizontal scrolling
2. THE Website SHALL use a mobile-first CSS approach where base styles target mobile and media queries enhance for larger viewports
3. WHILE the viewport width is less than 768px, THE Website SHALL stack content sections vertically and increase touch target sizes to a minimum of 44x44px
4. THE Website SHALL pass all Lighthouse accessibility audits related to tap target sizing and viewport meta tag configuration with no failing audits
5. WHILE the viewport width is less than 768px, THE Website SHALL display body text at a minimum computed font size of 16px to ensure readability without user zooming

### Requirement 18: SEO Optimization

**User Story:** As the site owner, I want the website optimized for search engines, so that potential clients can discover NexaPlus through organic search.

#### Acceptance Criteria

1. THE Website SHALL render the meta title "Jasa Pembuatan Website Profesional | NexaPlus" on the homepage
2. THE Website SHALL render the meta description "Jasa pembuatan website profesional untuk UMKM, perusahaan, toko online, landing page dan company profile. SEO Friendly, cepat dan mobile friendly." on the homepage
3. THE Website SHALL include Schema_Markup in JSON-LD format for Organization, LocalBusiness, Service, and Article types, where each schema block passes validation against schema.org specifications with no errors
4. THE Website SHALL render all heading elements (h1-h6) in a hierarchical structure with exactly one h1 per page, where no heading level is skipped
5. THE Website SHALL generate a sitemap.xml conforming to the Sitemaps XML protocol listing all public pages, and a robots.txt that references the sitemap URL and permits crawling of all public pages
6. THE Website SHALL achieve a Lighthouse SEO score of 100
7. THE Website SHALL render a self-referencing canonical URL in a link element with rel="canonical" on every page
8. THE Website SHALL render Open Graph meta tags (og:title, og:description, og:image, og:url) on every page

### Requirement 19: Performance Optimization

**User Story:** As a Visitor, I want the website to load fast, so that I do not leave before the content appears.

#### Acceptance Criteria

1. THE Website SHALL achieve a Google PageSpeed mobile score of 90 or higher when measured on the homepage using Lighthouse lab data with simulated mobile throttling
2. THE Website SHALL achieve a Google PageSpeed desktop score of 95 or higher when measured on the homepage using Lighthouse lab data with no throttling
3. THE Website SHALL achieve green (good) ratings for all Core_Web_Vitals metrics: LCP under 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1
4. THE Website SHALL use Next.js Image component for all raster images (PNG, JPG, WebP) that are 32px or larger in either dimension to enable lazy loading and format optimization
5. THE Website SHALL implement code splitting per route using Next.js App Router dynamic imports such that no single route produces an initial JavaScript bundle exceeding 150 KB gzipped
6. THE Website SHALL load fonts using next/font to eliminate render-blocking font requests and prevent layout shift from font loading

### Requirement 20: Accessibility

**User Story:** As a Visitor with assistive technology, I want the website to be accessible, so that I can navigate and interact with all content.

#### Acceptance Criteria

1. THE Website SHALL achieve a Google Lighthouse accessibility score of 100
2. THE Website SHALL provide alt text between 5 and 125 characters describing the image content for all informational images, and SHALL mark decorative images with an empty alt attribute
3. THE Website SHALL ensure a minimum color contrast ratio of 4.5:1 for normal text and 3:1 for large text against the background
4. THE Website SHALL support keyboard navigation for all interactive elements in a tab order that follows the visual layout sequence, with focus indicators rendered as a minimum 2px solid outline visible against adjacent colors
5. THE Website SHALL use semantic HTML elements (nav, main, section, article, header, footer) for content structure
6. THE Website SHALL provide an accessible name via aria-label for all icon-only interactive elements including the WhatsApp_Button, social media links, and hamburger menu toggle
7. WHEN a dynamic widget changes state (accordion expand/collapse, mobile navigation drawer open/close), THE Website SHALL communicate the updated state to assistive technology using appropriate ARIA attributes (aria-expanded, aria-hidden)

### Requirement 21: AEO and GEO Optimization

**User Story:** As the site owner, I want content optimized for AI search engines, so that NexaPlus appears in AI-generated answers and recommendations.

#### Acceptance Criteria

1. THE Website SHALL structure FAQ content as individual question-and-answer pairs where each question uses a heading element and each answer is a self-contained paragraph of no more than 80 words that directly answers the question without requiring surrounding context
2. THE Website SHALL include Schema_Markup for FAQPage, Organization, and Service types conforming to Schema.org vocabulary to establish entity relationships between NexaPlus, its services, and its service area
3. THE Website SHALL present service descriptions in factual paragraphs of 30 to 150 words each, where each paragraph opens with a statement identifying the service name and its primary function
4. THE Website SHALL use headings phrased as natural-language queries or keyword phrases relevant to website creation services in the Indonesian market, with each heading containing no more than 70 characters
5. WHEN FAQ content is rendered, THE Website SHALL produce valid HTML where each answer is contained within a dedicated block-level element immediately following its corresponding question element

### Requirement 22: Animations and Interactions

**User Story:** As a Visitor, I want subtle animations, so that the browsing experience feels modern and engaging without being distracting.

#### Acceptance Criteria

1. WHEN a section enters the viewport, THE Renderer SHALL apply a fade-up animation with a duration between 300ms and 600ms using Framer Motion
2. WHEN the Visitor hovers over an interactive card element, THE Renderer SHALL apply a scale transform between 1.02 and 1.05 with a transition duration of 200ms
3. THE Website SHALL respect the prefers-reduced-motion media query by disabling all non-essential animations when the Visitor has enabled reduced motion
4. THE Website SHALL limit animation usage so that no more than 3 elements animate simultaneously within any single viewport frame
5. WHEN the Navbar detects a scroll offset change, THE Navbar background SHALL transition between transparent and glassmorphism states with a duration of no more than 200ms
