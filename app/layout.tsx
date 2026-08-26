import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { JsonLd } from "@/components/JsonLd";
import { NavLinks } from "@/components/NavLinks";
import { NavAvatar } from "@/components/NavAvatar";
import { buildJsonLd } from "@/lib/json-ld";
import { navItems, siteConfig, seoKeywords } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  category: "Technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
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
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-dvh bg-bg font-sans text-primary">
        <JsonLd data={buildJsonLd({ navItems })} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.theme==='light')document.documentElement.classList.add('light')}catch(e){}",
          }}
        />

        <header className="sticky top-0 z-50 border-b border-card-border bg-bg/85 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:px-10">
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
            >
              <NavAvatar />
              <span
                className="font-heading text-xl font-bold tracking-tight"
                style={{ color: "var(--accent)" }}
              >
                JN.
              </span>
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
              <NavLinks
                items={navItems}
                ulClassName="flex items-center gap-2"
                liClassName=""
              />
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <MobileNav items={navItems} />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1200px]">
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
