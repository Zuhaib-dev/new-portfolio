import { getBlogBySlug, blogs } from "@/lib/blogs";
import { highlightBlogContent } from "@/lib/highlight";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: `${blog.title} — Zuhaib Rashid`,
    description: blog.description,
    keywords: blog.tags,
    authors: [{ name: "Zuhaib Rashid", url: "https://www.zuhaibrashid.com" }],
    alternates: {
      canonical: `https://www.zuhaibrashid.com/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      url: `https://www.zuhaibrashid.com/blogs/${slug}`,
      images: [
        { url: blog.coverImage, width: 1200, height: 630, alt: blog.title },
      ],
      publishedTime: new Date(blog.date).toISOString(),
      authors: ["Zuhaib Rashid"],
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      creator: "@xuhaibx9",
      images: [blog.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const highlightedContent = await highlightBlogContent(blog!.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog!.title,
    description: blog!.description,
    image: `https://www.zuhaibrashid.com${blog!.coverImage}`,
    datePublished: new Date(blog!.date).toISOString(),
    dateModified: new Date(blog!.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Zuhaib Rashid",
      url: "https://www.zuhaibrashid.com",
    },
    publisher: {
      "@type": "Person",
      name: "Zuhaib Rashid",
      url: "https://www.zuhaibrashid.com",
    },
    url: `https://www.zuhaibrashid.com/blogs/${slug}`,
    keywords: blog!.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.zuhaibrashid.com/blogs/${slug}`,
    },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Back */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        All blogs
      </Link>

      {/* Cover image */}
      <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-8">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover"
          priority
          unoptimized={blog.coverImage.endsWith(".gif")}
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium border border-border/50 rounded-full px-2.5 py-0.5 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title + description */}
      <h1 className="text-3xl font-bold leading-tight mb-3">{blog.title}</h1>
      <p className="text-muted-foreground mb-4">{blog.description}</p>

      {/* Meta row */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-10 pb-6 border-b border-border/40">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {blog.date}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {blog.readTime}
        </span>
        <span>by Zuhaib Rashid</span>
      </div>

      {/* Article content */}
      <article
        className="
          prose prose-neutral dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
          prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-li:text-muted-foreground
          prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5
          prose-code:rounded prose-code:text-sm prose-code:font-mono
          prose-code:before:content-none prose-code:after:content-none
          prose-pre:p-0 prose-pre:bg-transparent prose-pre:rounded-none
          prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline
        "
        dangerouslySetInnerHTML={{ __html: highlightedContent }}
      />

      {/* Shiki overrides */}
      <style>{`
        .code-block .shiki {
          margin: 0;
          padding: 1.25rem 1.5rem;
          background: #0d1117 !important;
          font-size: 0.875rem;
          line-height: 1.7;
          overflow-x: auto;
        }
        .code-block .shiki code {
          background: transparent !important;
          padding: 0;
          border-radius: 0;
          font-size: inherit;
        }
      `}</style>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border/40 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Zuhaib Rashid</p>
          <p className="text-xs text-muted-foreground">Full Stack Developer</p>
        </div>
        <Link href="/blogs" className="text-sm text-violet-400 hover:underline">
          ← More articles
        </Link>
      </div>
    </main>
  );
}
