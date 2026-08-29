import type { Metadata } from "next";
import AboutClient from "@/components/about-client";

export const metadata: Metadata = {
  title: "About Me | Zuhaib Rashid",
  description:
    "Learn more about Zuhaib Rashid, a Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
  openGraph: {
    title: "About Me | Zuhaib Rashid",
    description:
      "Learn more about Zuhaib Rashid, a Full Stack Developer from Srinagar, Kashmir.",
    url: "https://www.zuhaibrashid.com/about",
    siteName: "Zuhaib Rashid Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Zuhaib Rashid",
    description: "Learn more about Zuhaib Rashid, a Full Stack Developer.",
  },
};

export default function About() {
  return <AboutClient />;
}
