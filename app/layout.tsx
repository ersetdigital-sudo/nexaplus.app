import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema-markup";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional untuk Bisnis | NexaPlus",
  description:
    "NexaPlus adalah jasa pembuatan website profesional di Indonesia. Melayani toko online, landing page, company profile, website sekolah, dan organisasi. Mulai dari Rp 500.000, termasuk hosting dan SSL gratis.",
  metadataBase: new URL("https://nexaplus.app"),
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan website profesional",
    "jasa bikin website toko online",
    "jasa website company profile",
    "jasa website sekolah",
    "jasa website UMKM",
    "buat website bisnis",
    "web developer Indonesia",
  ],
  openGraph: {
    title: "Jasa Pembuatan Website Profesional untuk Bisnis | NexaPlus",
    description:
      "Jasa pembuatan website profesional untuk UMKM, toko online, company profile, sekolah, dan organisasi di Indonesia. Mulai dari Rp 500.000.",
    url: "https://nexaplus.app",
    siteName: "NexaPlus",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexaPlus - Jasa Pembuatan Website Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://nexaplus.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="id" className={cn("font-sans", lato.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                organizationSchema,
                localBusinessSchema,
                {
                  "@type": "WebSite",
                  "name": "NexaPlus",
                  "url": "https://nexaplus.app",
                  "description": "Jasa pembuatan website profesional di Indonesia",
                  "publisher": { "@type": "Organization", "name": "NexaPlus" }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
