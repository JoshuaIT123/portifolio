import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
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
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-dvh bg-bg font-sans text-primary">
        {/* Apply the stored theme before first paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.theme==='light')document.documentElement.classList.add('light')}catch(e){}",
          }}
        />
        {/* Full-height identity + nav sidebar (desktop); drawer below lg */}
        <Sidebar items={navItems} />

        {/* Slim top bar: theme toggle (always) + hamburger (below lg) */}
        <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-end gap-2 px-6 py-5">
          <ThemeToggle />
          <MobileNav items={navItems} />
        </header>

        {/* Content column: independent scroll container on lg+, with a thin
            custom scrollbar; smooth-scrolls to section anchors */}
        <div
          id="content-scroll"
          className="thin-scrollbar scroll-smooth lg:ml-[17.5rem] lg:h-dvh lg:overflow-y-auto"
        >
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
