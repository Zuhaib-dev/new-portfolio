"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ExternalLink, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DISMISS_KEY = "ad-header-dismissed-until";

interface AdHeaderProps {
  title: string;
  description?: string;
  buttonText: string;
  href: string;
  isExternal?: boolean;
  dismissible?: boolean;
  /** Unique ID — change this whenever you want to force-show a new announcement */
  announcementId?: string;
}

export default function AdHeader({
  title,
  description,
  buttonText,
  href,
  isExternal = false,
  dismissible = true,
  announcementId = "default",
}: AdHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  // On mount, check localStorage to see if user dismissed within the last 7 days
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`${DISMISS_KEY}-${announcementId}`);
      if (stored) {
        const dismissedUntil = parseInt(stored, 10);
        if (Date.now() < dismissedUntil) {
          setIsVisible(false);
          return;
        }
      }
    } catch {
      // localStorage unavailable (SSR / private mode) — just show it
    }
    setIsVisible(true);
  }, [announcementId]);

  const handleClose = () => {
    setIsVisible(false);
    try {
      const dismissedUntil = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days from now
      localStorage.setItem(
        `${DISMISS_KEY}-${announcementId}`,
        String(dismissedUntil),
      );
    } catch {
      // ignore
    }
  };

  const ctaClasses =
    "shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase transition-all duration-300 bg-white text-gray-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full overflow-hidden"
        >
          {/* Main bar */}
          <div
            className="relative text-white overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #1a1a3e 75%, #0f0f23 100%)",
            }}
          >
            {/* Animated shimmer sweep */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.15) 25%, rgba(236,72,153,0.1) 50%, rgba(139,92,246,0.15) 75%, transparent 100%)",
                backgroundSize: "200% 100%",
                animation: "ad-shimmer 3s ease-in-out infinite",
              }}
            />

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), rgba(236,72,153,0.6), rgba(139,92,246,0.6), transparent)",
              }}
            />

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(236,72,153,0.3), rgba(139,92,246,0.3), transparent)",
              }}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 sm:gap-4 py-2.5">
                {/* Live pulse badge */}
                <div className="shrink-0 flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                    Live
                  </span>
                </div>

                {/* Icon + Text */}
                <div className="flex-1 min-w-0 flex items-center gap-2 sm:gap-3">
                  <Zap
                    className="h-4 w-4 shrink-0 text-amber-400"
                    aria-hidden="true"
                    fill="currentColor"
                  />
                  <div className="min-w-0 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                    <span className="font-bold text-sm leading-tight truncate bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                      {title}
                    </span>
                    {description && (
                      <span className="text-[11px] text-white/50 truncate hidden sm:block font-medium">
                        {description}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA button */}
                {isExternal ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaClasses}
                  >
                    {buttonText}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <Link href={href} className={ctaClasses}>
                    {buttonText}
                  </Link>
                )}

                {/* Dismiss button */}
                {dismissible && (
                  <button
                    onClick={handleClose}
                    aria-label="Dismiss announcement"
                    className="shrink-0 rounded-full p-1.5 text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Inject keyframe animation */}
          <style jsx global>{`
            @keyframes ad-shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
