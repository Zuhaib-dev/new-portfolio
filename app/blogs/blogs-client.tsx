"use client";

import { useState, useMemo } from "react";
import { blogs } from "@/lib/blogs";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

export default function BlogsClient() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Build tag counts from all blogs
  const tagCounts = useMemo(() => {
    const map: Record<string, number> = {};
    blogs.forEach((b) =>
      b.tags.forEach((t) => {
        map[t] = (map[t] || 0) + 1;
      }),
    );
    return Object.entries(map).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const filtered = useMemo(
    () => (activeTag ? blogs.filter((b) => b.tags.includes(activeTag)) : blogs),
    [activeTag],
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* Back */}
      <Link
        href="/#blogs"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      {/* Centered header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-3">Blogs</h1>
        <p className="text-muted-foreground text-sm">
          Thoughts, tutorials, and insights on engineering, and programming.
        </p>
      </div>

      <hr className="border-border/40 mb-8" />

      {/* Popular Tags */}
      <div className="mb-8">
        <p className="text-sm font-semibold mb-3">Popular Tags</p>
        <div className="flex flex-wrap gap-2">
          {tagCounts.map(([tag, count]) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-xs rounded-full border px-3 py-1 transition-colors ${
                activeTag === tag
                  ? "bg-violet-600 border-violet-600 text-white"
                  : "border-border/60 text-muted-foreground hover:border-violet-500 hover:text-foreground"
              }`}
            >
              {tag} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Latest Posts count */}
      <div className="flex items-center gap-2 mb-5">
        <h2 className="text-lg font-bold">
          {activeTag ? `#${activeTag}` : "Latest Posts"}
        </h2>
        <span className="text-xs text-muted-foreground border border-border/50 rounded-full px-2 py-0.5">
          {filtered.length} {filtered.length === 1 ? "post" : "posts"}
        </span>
      </div>

      {/* Blog grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        {filtered.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="group block"
          >
            <div className="rounded-2xl border border-border/50 bg-muted/20 overflow-hidden hover:bg-muted/30 transition-colors h-full flex flex-col">
              {/* Cover */}
              <div className="relative h-44 w-full overflow-hidden">
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
                <h3 className="font-bold text-base leading-snug group-hover:text-violet-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium border border-border/50 rounded-full px-2.5 py-0.5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className="text-[11px] font-medium border border-border/50 rounded-full px-2.5 py-0.5 text-muted-foreground">
                      +{blog.tags.length - 3} more
                    </span>
                  )}
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

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-16 text-sm">
          No posts found for <strong>#{activeTag}</strong>.
        </p>
      )}
    </main>
  );
}
