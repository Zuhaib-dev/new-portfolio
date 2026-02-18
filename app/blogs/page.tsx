import type { Metadata } from "next";
import BlogsClient from "./blogs-client";

export const metadata: Metadata = {
  title: "Blogs — Zuhaib Rashid",
  description:
    "Thoughts, tutorials, and insights on engineering, and programming.",
  alternates: {
    canonical: "https://www.zuhaibrashid.com/blogs",
  },
  openGraph: {
    title: "Blogs — Zuhaib Rashid",
    description:
      "Thoughts, tutorials, and insights on engineering, and programming.",
    url: "https://www.zuhaibrashid.com/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  return <BlogsClient />;
}
