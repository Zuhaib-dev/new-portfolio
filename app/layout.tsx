import type React from "react";
import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import AdHeader from "@/components/ad-header";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zuhaib Rashid - Web Developer",
  description:
    "Portfolio website of Zuhaib Rashid, a Web Developer specializing in modern frontend technologies.",

  // ✅ General Icons and Apple Touch Icon
  icons: {
    icon: [
      {
        url: "/android-chrome-512x512.png",
        sizes: "any",
        type: "image/x-icon",
      },
      { url: "/android-chrome-192x192.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // ✅ Open Graph metadata for social previews
  openGraph: {
    title: "Zuhaib Rashid - Web Developer Portfolio",
    description:
      "Explore Zuhaib Rashid's portfolio featuring AI projects, web development, and UI/UX mastery.",

    // 🔗 Host this image publicly, dimensions: 1200x630px
    images: [
      {
        url: "/SC.png", // <-- Replace this
        width: 1200,
        height: 630,
        alt: "Zuhaib Rashid Portfolio Preview Image",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://zuhaib-portfolio-tau.vercel.app/", // <-- Replace with your actual domain
    siteName: "Zuhaib Rashid Portfolio",
  },

  // ✅ Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Zuhaib Rashid - Web Developer",
    description:
      "Showcasing projects including AI resume tools, clones, and frontend innovations.",
    creator: "https://x.com/xuhaib_x9", // <-- Optional: Replace with your Twitter/X handle
    images: [
      "/SC.png", // Same as OG image
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
// done with the implement of contact functionailty
