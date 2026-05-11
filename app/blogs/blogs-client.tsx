"use client";

import { useState, useMemo } from "react";
import { blogs } from "@/lib/blogs";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Search, X } from "lucide-react";

export default function BlogsClient() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filtered = useMemo(() => {
    let result = blogs;

    if (activeTag) {
      result = result.filter((b) => b.tags.includes(activeTag));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeTag, searchQuery]);

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

      {/* Search Input */}
      <div className="relative mb-10 max-w-2xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-violet-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-10 py-3.5 border border-border/60 rounded-2xl bg-muted/20 focus:bg-muted/40 text-sm focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500/50 outline-none transition-all placeholder:text-muted-foreground/60 shadow-sm"
            placeholder="Search articles, topics, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

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
        <div className="text-center py-20 bg-muted/10 rounded-2xl border border-border/50 border-dashed mt-8">
          <p className="text-muted-foreground text-sm">
            No posts found for <strong>{searchQuery ? `"${searchQuery}"` : `#${activeTag}`}</strong>.
          </p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setActiveTag(null);
            }}
            className="mt-4 text-xs font-medium text-violet-500 hover:text-violet-400 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </main>
  );
}
