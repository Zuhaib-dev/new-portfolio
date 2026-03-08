import type { Metadata, Viewport } from "next/types";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import AdHeader from "@/components/ad-header";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import SmoothScroll from "@/components/smooth-scroll";
import DeferredUI from "@/components/deferred-ui";

// display:swap ensures text is always visible while the font loads (eliminates FOIT)
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zuhaibrashid.com"),
  title: "Zuhaib Rashid — Full Stack Developer & Next.js Engineer | Portfolio",
  description:
    "Full Stack Developer from Srinagar specializing in React, Next.js, TypeScript & Node.js. Building modern, fast, accessible web apps. Open to freelance & full-time roles.",
  keywords: [
    "Zuhaib Rashid",
    "Full Stack Developer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer Kashmir",
    "Web Developer Srinagar",
    "Web Developer India",
    "Portfolio",
    "Freelance Developer India",
    "UI/UX Developer",
    "Open Source Developer",
    "JavaScript Engineer",
  ],
  authors: [{ name: "Zuhaib Rashid", url: "https://www.zuhaibrashid.com" }],
  creator: "Zuhaib Rashid",
  publisher: "Zuhaib Rashid",
  category: "Technology",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=2",
  },
  openGraph: {
    title: "Zuhaib Rashid — Full Stack Developer & Next.js Engineer",
    description:
      "Full Stack Developer from Srinagar specializing in React, Next.js, TypeScript & Node.js. Building modern, fast, accessible web apps.",
    images: [
      {
        url: "/screenShot.webp",
        width: 1200,
        height: 630,
        alt: "Zuhaib Rashid Portfolio Preview",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://www.zuhaibrashid.com",
    siteName: "Zuhaib Rashid Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuhaib Rashid — Full Stack Developer",
    description:
      "Portfolio showcasing React.js, Next.js, TypeScript and Node.js projects by Zuhaib Rashid from Srinagar, Kashmir.",
    creator: "@xuhaibx9",
    images: ["/screenShot.webp"],
  },
  alternates: {
    canonical: "https://www.zuhaibrashid.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "KNk6HMTy4DzUcER3Dpsd2o3Xy2YgFKapFkN50AirDjs",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Zuhaib Rashid" />

        {/* Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zuhaib Rashid",
              url: "https://www.zuhaibrashid.com",
              image: "https://www.zuhaibrashid.com/screenShot.webp",
              sameAs: [
                "https://x.com/xuhaib_x9",
                "https://github.com/Zuhaib-dev",
                "https://www.linkedin.com/in/zuhaib-rashid-661345318/",
              ],
              jobTitle: "Full Stack Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Srinagar",
                addressRegion: "Jammu and Kashmir",
                addressCountry: "IN",
              },
              worksFor: { "@type": "Organization", name: "Freelance" },
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Frontend Architecture",
                "Web Accessibility",
                "Full Stack Development",
              ],
              description:
                "Zuhaib Rashid is a Full Stack Developer based in Srinagar, Kashmir. Expert in React.js, Next.js, TypeScript and Node.js, building modern, accessible, high-performance web apps.",
            }),
          }}
        />
        {/* WebSite schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Zuhaib Rashid Portfolio",
              url: "https://www.zuhaibrashid.com",
              description:
                "Portfolio of Zuhaib Rashid — Full Stack Developer specializing in React, Next.js, TypeScript and Node.js.",
              author: {
                "@type": "Person",
                name: "Zuhaib Rashid",
              },
            }),
          }}
        />
        {/* BreadcrumbList schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.zuhaibrashid.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blogs",
                  item: "https://www.zuhaibrashid.com/blogs",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Books",
                  item: "https://www.zuhaibrashid.com/books",
                },
              ],
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AdHeader
            announcementId="resumind-v1"
            title="🚀 Resumind"
            description="Optimize Your Resume with AI"
            buttonText="Try it free"
            href="https://resumind-ebon.vercel.app/"
            isExternal={true}
            dismissible={true}
          />
          <Suspense fallback={<Loading />}>
            <SmoothScroll>
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
              >
                Skip to main content
              </a>
              <Analytics />
              <Header />
              <main
                id="main-content"
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                {children}
              </main>
              <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Zuhaib Rashid. All rights reserved.
              </footer>
              <DeferredUI />
            </SmoothScroll>
          </Suspense>
        </ThemeProvider>

        {/* ✅ Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tpjufkrsmw");`,
          }}
        />
      </body>
    </html>
  );
}
