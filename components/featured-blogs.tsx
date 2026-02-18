import { blogs } from "@/lib/blogs";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function FeaturedBlogs() {
  const featured = blogs.slice(0, 2);

  return (
    <section id="blogs" className="py-10">
      {/* Header */}
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
        Featured
      </p>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Blogs</h2>
      </div>

      {/* 2-column card grid */}
      <div className="grid sm:grid-cols-2 gap-5 mb-8">
        {featured.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="group block"
          >
            <div className="rounded-2xl border border-border/50 bg-muted/20 overflow-hidden hover:bg-muted/30 transition-colors h-full flex flex-col">
              {/* Cover image */}
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

      {/* Show all blogs button */}
      <div className="flex justify-center">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-5 py-2.5 text-sm font-semibold hover:bg-muted/60 transition-colors"
        >
          Show all blogs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
