"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Github, ExternalLink, GitCommit, Star, GitFork } from "lucide-react";
import Link from "next/link";

const username = "Zuhaib-dev";

export default function GithubStats() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    setMounted(true);
    setTimestamp(Date.now());
  }, []);

  const currentTheme = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : "light";
  const isDark = currentTheme === "dark";

  // Theme params tuned to match the site's card style
  const graphUrl = isDark
    ? `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0a0a0a&color=a78bfa&line=7c3aed&point=c4b5fd&area=true&area_color=7c3aed&hide_border=true&custom_title=Contribution+Activity&t=${timestamp}`
    : `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=ffffff&color=6d28d9&line=7c3aed&point=7c3aed&area=true&area_color=7c3aed&hide_border=true&custom_title=Contribution+Activity&t=${timestamp}`;

  // Fallback: GitHub's own contribution calendar embed
  const fallbackUrl = `https://ghchart.rshah.org/${isDark ? "7c3aed" : "7c3aed"}/${username}`;

  return (
    <section id="github-stats" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Open Source
        </p>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">GitHub Activity</h2>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-xs font-medium hover:bg-muted/60 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />@{username}
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </a>
        </div>

        <div className="space-y-8">
          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border/50 bg-muted/20 overflow-hidden"
          >
            {/* Card header */}
            <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-border/40">
              <GitCommit className="h-4 w-4 text-violet-500" />
              <span className="text-sm font-medium">Contribution Graph</span>
              <span className="ml-auto text-xs text-muted-foreground">
                Last 12 months
              </span>
            </div>

            {/* Graph */}
            <div className="p-5">
              {!mounted ? (
                <div className="w-full h-[220px] animate-pulse bg-muted rounded-xl" />
              ) : imgError ? (
                /* Fallback to ghchart */
                <div className="w-full overflow-hidden rounded-xl">
                  <img
                    src={fallbackUrl}
                    alt="GitHub Contribution Graph"
                    className="w-full h-auto"
                    style={{
                      filter: isDark
                        ? "invert(1) hue-rotate(180deg) saturate(0.8)"
                        : "none",
                    }}
                  />
                </div>
              ) : (
                <img
                  key={`${currentTheme}-${timestamp}`}
                  src={graphUrl}
                  alt="GitHub Contribution Graph"
                  className="w-full h-auto rounded-xl"
                  loading="eager"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </motion.div>

          {/* GitHub CTA card */}
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="group flex items-center justify-between rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors px-6 py-5 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-background/60 group-hover:border-violet-500/30 transition-colors">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-sm">See all my repositories</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Projects, contributions &amp; open source work
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" /> Stars
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3.5 w-3.5" /> Forks
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
