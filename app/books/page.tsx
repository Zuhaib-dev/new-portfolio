import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books — Zuhaib Rashid",
  description:
    "Books that have shaped my thinking, influenced my work, and fueled my curiosity as a developer.",
  keywords: [
    "Books",
    "Reading List",
    "Developer Books",
    "Self Improvement",
    "Programming Books",
  ],
  alternates: {
    canonical: "https://www.zuhaibrashid.com/books",
  },
  openGraph: {
    title: "Books — Zuhaib Rashid",
    description:
      "Books that have shaped my thinking, influenced my work, and fueled my curiosity as a developer.",
    url: "https://www.zuhaibrashid.com/books",
    type: "website",
  },
};

const books = [
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    cover: "📘",
    genre: "Software Engineering",
    status: "Read",
    rating: 5,
    note: "A must-read for every developer. Changed how I think about writing clean, maintainable code.",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "📗",
    genre: "Software Engineering",
    status: "Read",
    rating: 5,
    note: "Taught me that code is read far more than it is written. Every line matters.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "📙",
    genre: "Self-Improvement",
    status: "Read",
    rating: 5,
    note: "Small changes compound into remarkable results. Applied this to my learning and coding habits.",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    cover: "📕",
    genre: "Productivity",
    status: "Read",
    rating: 4,
    note: "Convinced me to protect focused time blocks for building real things without distraction.",
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    cover: "📓",
    genre: "JavaScript",
    status: "Reading",
    rating: 4,
    note: "Goes deep into the JavaScript engine. Cleared up so many misconceptions I had about the language.",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "📒",
    genre: "Finance",
    status: "Read",
    rating: 5,
    note: "Money is more about behavior than knowledge. A short, powerful read.",
  },
];

const statusColor: Record<string, string> = {
  Read: "bg-green-500/10 text-green-500 border-green-500/20",
  Reading: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Want to Read": "bg-muted text-muted-foreground border-border/50",
};

export default function BooksPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Back link */}
      <Link
        href="/#personal-life"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Personal
        </p>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-muted/30">
            <BookOpen className="h-5 w-5 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold">Books</h1>
        </div>
        <p className="text-muted-foreground max-w-lg">
          Books that have shaped my thinking, influenced my work, and fueled my
          curiosity. Sorted by impact.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-10">
        {[
          {
            label: "Total Read",
            value: books.filter((b) => b.status === "Read").length,
          },
          {
            label: "Currently Reading",
            value: books.filter((b) => b.status === "Reading").length,
          },
          {
            label: "Avg Rating",
            value:
              (books.reduce((a, b) => a + b.rating, 0) / books.length).toFixed(
                1,
              ) + " ★",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-border/50 bg-muted/20 p-4 text-center"
          >
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Book grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {books.map((book) => (
          <div
            key={book.title}
            className="rounded-2xl border border-border/50 bg-muted/20 p-5 flex flex-col gap-3 hover:bg-muted/30 transition-colors"
          >
            {/* Top row */}
            <div className="flex items-start gap-4">
              <div className="text-4xl leading-none select-none">
                {book.cover}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-snug">
                  {book.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {book.author}
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wide border rounded-full px-2 py-0.5 ${statusColor[book.status]}`}
                  >
                    {book.status}
                  </span>
                  <span className="text-[10px] text-muted-foreground border border-border/40 rounded-full px-2 py-0.5">
                    {book.genre}
                  </span>
                </div>
              </div>
              {/* Stars */}
              <div className="shrink-0 text-xs text-amber-400 tracking-tight">
                {"★".repeat(book.rating)}
                {"☆".repeat(5 - book.rating)}
              </div>
            </div>

            {/* Note */}
            <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
              {book.note}
            </p>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center text-xs text-muted-foreground mt-12">
        More books being added as I read them.
      </p>
    </main>
  );
}
