import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { SidebarNav } from "@/components/SidebarNav";
import { navItems, siteConfig } from "@/lib/site";

// Self-hosted via next/font: zero layout shift, no external requests.
// Exposed as CSS variables consumed in globals.css (@theme inline).
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

/* Site-wide SEO defaults. Per-page overrides live in each page/route.
 * The generated opengraph-image.tsx is picked up automatically for
 * og:image / twitter:image. */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
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
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-dvh bg-bg font-sans text-primary">
        {/* <header> holds the fixed logo (top-left) + mobile hamburger (top-right) */}
        <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 md:px-10">
          <Logo />
          <MobileNav items={navItems} />
        </header>

        {/* Desktop-only vertical nav; collapses into MobileNav below md */}
        <SidebarNav items={navItems} />

        {/* Content column: offset by the 160px sidebar on desktop */}
        <main className="relative md:pl-40">{children}</main>

        {/* Footer shares the content column offset */}
        <div className="md:pl-40">
          <Footer />
        </div>
      </body>
    </html>
  );
}
