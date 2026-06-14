import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema-markup";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
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
    "Jasa pembuatan website profesional di Indonesia. Toko online, landing page, company profile, dan website sekolah. Mulai dari Rp 500.000, hosting gratis.",
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
      "Jasa pembuatan website profesional di Indonesia. Toko online, landing page, company profile, dan website sekolah. Mulai dari Rp 500.000, hosting gratis.",
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
        {children}
      </body>
    </html>
  );
}
