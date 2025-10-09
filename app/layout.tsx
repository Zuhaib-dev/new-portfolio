import type React from "react";
import type { Metadata, Viewport } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import AdHeader from "@/components/ad-header";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

/* -------------------- ✅ Metadata -------------------- */
export const metadata: Metadata = {
  title: "Zuhaib Rashid - Frontend Developer in Srinagar, Kashmir",
  description:
    "Official portfolio of Zuhaib Rashid, a Frontend Developer from Srinagar, Kashmir. Specializing in React.js, Next.js, TypeScript, and modern web technologies with projects in AI and healthcare.",

  icons: {
  icon: [
    { url: "/favicon.ico", type: "image/x-icon" },
    { url: "/favicon.svg", type: "image/svg+xml" }, // ✅ SVG added
    { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }, // ✅ newly added
  ],
  apple: "/apple-touch-icon.png?v=2",
},


  openGraph: {
    title: "Zuhaib Rashid - Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Zuhaib Rashid, a React.js and Next.js developer from Srinagar, Kashmir. Featuring AI-powered apps, healthcare web solutions, and modern frontend design.",
    images: [
      {
        url: "/screenShot.png",
        width: 1200,
        height: 630,
        alt: "Zuhaib Rashid Portfolio Preview Image",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://zuhaibrashid.com",
    siteName: "Zuhaib Rashid Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zuhaib Rashid - Frontend Developer in Srinagar",
    description:
      "Portfolio showcasing React.js, Next.js, and AI-powered projects by Zuhaib Rashid from Srinagar, Kashmir.",
    creator: "https://x.com/xuhaibx9",
    images: ["/screenShot.png"],
  },

  alternates: {
    canonical: "https://zuhaibrashid.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  /* ✅ Google Search Console Verification */
  verification: {
    google: "KNk6HMTy4DzUcER3Dpsd2o3Xy2YgFKapFkN50AirDjs", 
  },
};

/* -------------------- ✅ Viewport -------------------- */
export const viewport: Viewport = {
  themeColor: "#000000",
};

/* -------------------- ✅ Layout Component -------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Apple Mobile Web App Title */}
        <meta name="apple-mobile-web-app-title" content="Zuhaib Rashid" />

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zuhaib Rashid",
              url: "https://zuhaibrashid.com",
              sameAs: [
                "https://x.com/xuhaibx9",
                "https://github.com/Zuhaib-dev",
                "https://www.linkedin.com/in/zuhaib-rashid-661345318/",
              ],
              jobTitle: "Frontend Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Srinagar",
                addressRegion: "Jammu and Kashmir",
                addressCountry: "India",
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              keywords: [
                "Frontend Developer in Srinagar",
                "React.js Developer Kashmir",
                "Next.js Developer India",
                "TypeScript Developer",
                "Web Developer in Jammu and Kashmir",
                "UI/UX Engineer",
                "AI Web Developer",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Frontend Architecture",
                "Web Accessibility",
                "Healthcare Web Apps",
                "AI-powered applications",
              ],
              description:
                "Zuhaib Rashid is a Frontend Developer based in Srinagar, Kashmir. Expert in React.js, Next.js, and TypeScript, with a focus on building modern, accessible, and high-performance web apps.",
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
            title="🚀 Resumind"
            description="Optimize Your Resume with AI"
            buttonText="View"
            href="https://resumind-ebon.vercel.app/"
            isExternal={true}
            dismissible={true}
          />
          <Suspense fallback={<Loading />}>
            <Analytics />
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zuhaib. All rights reserved.
            </footer>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
