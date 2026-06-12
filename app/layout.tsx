import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema-markup";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional | NexaPlus",
  description:
    "Jasa pembuatan website profesional untuk UMKM, perusahaan, toko online, landing page dan company profile. SEO Friendly, cepat dan mobile friendly.",
  metadataBase: new URL("https://nexaplus.app"),
  openGraph: {
    title: "Jasa Pembuatan Website Profesional | NexaPlus",
    description:
      "Jasa pembuatan website profesional untuk UMKM, perusahaan, toko online, landing page dan company profile. SEO Friendly, cepat dan mobile friendly.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="id" className={cn("font-sans", inter.variable, geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
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
