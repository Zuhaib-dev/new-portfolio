import Link from "next/link";
import { ArrowLeft, Clapperboard } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies — Zuhaib Rashid",
  description:
    "Movies and shows that have inspired and entertained me. A curated list of my all-time favourites.",
  keywords: [
    "Movies",
    "Films",
    "Favourites",
    "Cinema",
    "Shows",
    "Zuhaib Rashid",
  ],
  alternates: {
    canonical: "https://www.zuhaibrashid.com/movies",
  },
  openGraph: {
    title: "Movies — Zuhaib Rashid",
    description:
      "Movies and shows that have inspired and entertained me. A curated list of my all-time favourites.",
    url: "https://www.zuhaibrashid.com/movies",
    type: "website",
  },
};

const movies = [
  {
    title: "Ford v Ferrari",
    year: "2019",
    genre: "Drama / Sport",
    emoji: "🏎️",
    rating: 5,
    note: "Pure obsession with craft and winning. Le Mans '66 is one of the greatest final race sequences ever put on screen.",
  },
  {
    title: "Whiplash",
    year: "2014",
    genre: "Drama / Music",
    emoji: "🥁",
    rating: 5,
    note: "What does it cost to be great? This film answers that brutally. Fletcher's last scene is legendary.",
  },
  {
    title: "The Social Network",
    year: "2010",
    genre: "Drama / Tech",
    emoji: "💻",
    rating: 5,
    note: "The best film about ambition, betrayal, and building something from nothing. Sorkin's dialogue is relentless.",
  },
  {
    title: "Rush",
    year: "2013",
    genre: "Drama / Sport",
    emoji: "🏁",
    rating: 5,
    note: "Hunt vs Lauda — two completely different philosophies of life competing at 200mph. Absolutely gripping.",
  },
  {
    title: "Steve Jobs",
    year: "2015",
    genre: "Drama / Biopic",
    emoji: "🍎",
    rating: 4,
    note: "Three product launches, one portrait of a hard-to-love genius. Fassbender and Sorkin are an unstoppable duo.",
  },
  {
    title: "The Founder",
    year: "2016",
    genre: "Drama / Biopic",
    emoji: "🍔",
    rating: 4,
    note: "Ray Kroc stole a dream and built an empire. Uncomfortable, fascinating, and totally honest about ambition.",
  },
  {
    title: "Silicon Valley",
    year: "2014",
    genre: "Comedy / Tech",
    emoji: "📱",
    rating: 5,
    note: "The most accurate depiction of startup culture ever made. Erlich Bachman is an icon.",
  },
  {
    title: "Black Swan",
    year: "2010",
    genre: "Psychological Thriller",
    emoji: "🦢",
    rating: 4,
    note: "The price of perfection told through ballet. Natalie Portman's performance is one for the ages.",
  },
  {
    title: "The Big Short",
    year: "2015",
    genre: "Drama / Finance",
    emoji: "📉",
    rating: 5,
    note: "How a handful of outsiders saw the 2008 crash coming. Made complex finance entertaining and terrifying.",
  },
  {
    title: "F1",
    year: "2025",
    genre: "Action / Sport",
    emoji: "🏎️",
    rating: 4,
    note: "Stunning cinematography shot trackside at real races. Loud, visceral, and a love letter to Formula 1.",
  },
];

export default function MoviesPage() {
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
            <Clapperboard className="h-5 w-5 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold">Movies</h1>
        </div>
        <p className="text-muted-foreground max-w-lg">
          Movies and shows that have inspired and entertained me. Sorted by
          impact.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-10">
        {[
          { label: "Total Watched", value: movies.length },
          {
            label: "Top Rated",
            value: movies.filter((m) => m.rating === 5).length,
          },
          {
            label: "Avg Rating",
            value:
              (
                movies.reduce((a, m) => a + m.rating, 0) / movies.length
              ).toFixed(1) + " ★",
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

      {/* Movie grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.title}
            className="rounded-2xl border border-border/50 bg-muted/20 p-5 flex flex-col gap-3 hover:bg-muted/30 transition-colors"
          >
            {/* Top row */}
            <div className="flex items-start gap-4">
              <div className="text-4xl leading-none select-none">
                {movie.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-snug">
                  {movie.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {movie.year}
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-[10px] text-muted-foreground border border-border/40 rounded-full px-2 py-0.5">
                    {movie.genre}
                  </span>
                </div>
              </div>
              {/* Stars */}
              <div className="shrink-0 text-xs text-amber-400 tracking-tight">
                {"★".repeat(movie.rating)}
                {"☆".repeat(5 - movie.rating)}
              </div>
            </div>

            {/* Note */}
            <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
              {movie.note}
            </p>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center text-xs text-muted-foreground mt-12">
        More movies being added as I watch them.
      </p>
    </main>
  );
}
