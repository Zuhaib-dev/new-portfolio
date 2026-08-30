"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Github, ExternalLink, GitCommit, Star, GitFork } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

const username = "Zuhaib-dev";

export default function GithubStats() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({ stars: 0, forks: 0, loaded: false });
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    activity: any;
  }>({ visible: false, x: 0, y: 0, activity: null });

  useEffect(() => {
    setMounted(true);

    const fetchStats = async () => {
      try {
        const res = await fetch(`/api/github`);
        if (!res.ok) {
          setStats({ stars: 0, forks: 0, loaded: true });
          return;
        }
        const data = await res.json();
        setStats({ stars: data.stars || 0, forks: data.forks || 0, loaded: true });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setStats({ stars: 0, forks: 0, loaded: true });
      }
    };

    fetchStats();
  }, []);

  const currentTheme = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : "light";
  const isDark = currentTheme === "dark";

  return (
    <section id="github-stats" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border/50 bg-muted/20 overflow-hidden relative"
          >
            <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-border/40">
              <GitCommit className="h-4 w-4 text-violet-500" />
              <span className="text-sm font-medium">Contribution Graph</span>
              <span className="ml-auto text-xs text-muted-foreground">
                Last 12 months
              </span>
            </div>

            <div className="p-4 sm:p-6 w-full overflow-hidden">
              {!mounted ? (
                <div className="w-full h-[180px] animate-pulse bg-muted rounded-xl" />
              ) : (
                <div className="w-full overflow-x-auto pb-4 relative">
                  <div className="min-w-[750px] p-4 sm:p-6 rounded-xl border border-border/50 bg-background/50 flex justify-center relative">
                    <GitHubCalendar
                      username={username}
                      colorScheme={isDark ? "dark" : "light"}
                      theme={{
                        light: ["#ebedf0", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed"],
                        dark: ["#161b22", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed"],
                      }}
                      fontSize={12}
                      blockSize={12}
                      blockMargin={4}
                      style={{
                        width: '100%',
                      }}
                      renderBlock={(block, activity) => {
                        const blockElement = block as React.ReactElement<any>;
                        return React.cloneElement(blockElement, {
                          onPointerEnter: (e: React.PointerEvent) => {
                            const rect = (e.target as Element).getBoundingClientRect();
                            setTooltip({
                              visible: true,
                              x: rect.left + rect.width / 2,
                              y: rect.top,
                              activity,
                            });
                          },
                          onPointerLeave: () => {
                            setTooltip((prev) => ({ ...prev, visible: false }));
                          },
                          className: "hover:opacity-60 transition-opacity duration-200 outline-none",
                          style: { ...blockElement.props.style, cursor: "pointer", pointerEvents: "auto" }
                        });
                      }}
                    />
                  </div>
                </div>
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
              <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground mr-2">
                <div className="flex items-center gap-1.5 font-medium">
                  <Star className="h-4 w-4 text-amber-400" />
                  {stats.loaded ? (
                    <span className="text-foreground">{stats.stars}</span>
                  ) : (
                    <span className="w-4 h-4 rounded-full border-2 border-border border-t-amber-400 animate-spin" />
                  )}
                  Stars
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <GitFork className="h-4 w-4 text-blue-400" />
                  {stats.loaded ? (
                    <span className="text-foreground">{stats.forks}</span>
                  ) : (
                    <span className="w-4 h-4 rounded-full border-2 border-border border-t-blue-400 animate-spin" />
                  )}
                  Forks
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </motion.a>
        </div>
      </motion.div>

      {mounted && tooltip.visible && tooltip.activity && (
        <div
          className="fixed z-[100] pointer-events-none -translate-x-1/2 -translate-y-full pb-2 transition-all duration-75"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="bg-[#09090b] dark:bg-[#09090b] text-white text-[12px] px-3 py-1.5 rounded-lg border border-white/10 shadow-xl whitespace-nowrap">
            <strong className={tooltip.activity.count > 0 ? "font-semibold text-[#8b5cf6]" : "font-normal opacity-80"}>
              {tooltip.activity.count === 0
                ? "No contributions"
                : tooltip.activity.count === 1
                ? "1 contribution"
                : `${tooltip.activity.count} contributions`}
            </strong>{" "}
            on{" "}
            {!isNaN(new Date(tooltip.activity.date + "T00:00:00").getTime())
              ? new Date(tooltip.activity.date + "T00:00:00").toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : tooltip.activity.date}
          </div>
        </div>
      )}
    </section>
  );
}
