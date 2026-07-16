import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema-markup";
import { siteConfig } from "@/data/site-config";

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
  title: {
    default: "Jasa Pembuatan Website Profesional untuk Bisnis | NexaPlus",
    template: "%s | NexaPlus",
  },
  description:
    "Jasa pembuatan website profesional: toko online, landing page, company profile, website sekolah. Mulai Rp 500rb — hosting + SSL gratis 1 tahun. Konsultasi gratis via WhatsApp.",
  metadataBase: new URL("https://nexaplus.web.id"),
  applicationName: "NexaPlus",
  authors: [{ name: "NexaPlus", url: "https://nexaplus.web.id" }],
  creator: "NexaPlus",
  publisher: "NexaPlus",
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
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Profesional untuk Bisnis | NexaPlus",
    description:
      "Jasa pembuatan website profesional: toko online, landing page, company profile, website sekolah. Mulai Rp 500rb — hosting + SSL gratis 1 tahun.",
  },
  alternates: {
    canonical: "https://nexaplus.web.id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
                  "@id": `${siteConfig.url}/#website`,
                  name: "NexaPlus",
                  url: siteConfig.url,
                  description:
                    "Jasa pembuatan website profesional di Indonesia untuk UMKM, sekolah, organisasi, dan perusahaan.",
                  inLanguage: "id-ID",
                  publisher: { "@id": `${siteConfig.url}/#organization` },
                },
              ],
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
