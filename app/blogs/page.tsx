import type { Metadata } from "next";
import BlogsClient from "./blogs-client";

export const metadata: Metadata = {
  title: "Blogs — Zuhaib Rashid",
  description:
    "Thoughts, tutorials, and insights on engineering, and programming.",
};

export default function BlogsPage() {
  return <BlogsClient />;
}
