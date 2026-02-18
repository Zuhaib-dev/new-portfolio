import { blogs } from "@/lib/blogs";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs — Zuhaib Rashid",
  description:
    "Articles on frontend development, design, and software engineering by Zuhaib Rashid.",
};

export default function BlogsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Writing
        </p>
        <h1 className="text-3xl font-bold mb-2">All Blogs</h1>
        <p className="text-muted-foreground">
          Thoughts on frontend development, design, and building things on the
          web.
        </p>
      </div>

      {/* Blog list */}
      <div className="grid sm:grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="group block"
          >
            <div className="rounded-2xl border border-border/50 bg-muted/20 overflow-hidden hover:bg-muted/30 transition-colors h-full flex flex-col">
              {/* Cover image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized={blog.coverImage.endsWith(".gif")}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <h2 className="font-bold text-base leading-snug group-hover:text-violet-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium border border-border/50 rounded-full px-2.5 py-0.5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-border/40">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {blog.date}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-violet-400 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
