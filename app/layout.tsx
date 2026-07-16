import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema-markup";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional untuk Bisnis | NexaPlus",
  description:
    "Jasa pembuatan website profesional: toko online, landing page, company profile, website sekolah. Mulai Rp 500rb — hosting + SSL gratis 1 tahun. Konsultasi gratis via WhatsApp.",
  metadataBase: new URL("https://nexaplus.web.id"),
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
      "Jasa pembuatan website profesional: toko online, landing page, company profile, website sekolah. Mulai Rp 500rb — hosting + SSL gratis 1 tahun. Konsultasi gratis via WhatsApp.",
    url: "https://nexaplus.web.id",
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
    canonical: "https://nexaplus.web.id",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
    <html lang="id" className={cn("font-sans", sora.variable, inter.variable)}>
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
                  "url": "https://nexaplus.web.id",
                  "description": "Jasa pembuatan website profesional di Indonesia",
                  "publisher": { "@type": "Organization", "name": "NexaPlus" }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
