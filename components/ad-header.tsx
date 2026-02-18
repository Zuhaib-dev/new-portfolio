"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ExternalLink, Sparkles } from "lucide-react";
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

  // On mount, check localStorage to see if user dismissed within the last 24h
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
      const dismissedUntil = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
      localStorage.setItem(
        `${DISMISS_KEY}-${announcementId}`,
        String(dismissedUntil),
      );
    } catch {
      // ignore
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="w-full overflow-hidden"
        >
          {/* Gradient bar */}
          <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white">
            {/* Subtle shimmer overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.06)_50%,transparent_100%)] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 py-2.5">
                {/* Icon */}
                <Sparkles
                  className="h-4 w-4 shrink-0 text-yellow-300 animate-pulse"
                  aria-hidden="true"
                />

                {/* Text */}
                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3">
                  <span className="font-semibold text-sm leading-tight truncate">
                    {title}
                  </span>
                  {description && (
                    <span className="text-xs text-white/75 truncate hidden sm:block">
                      {description}
                    </span>
                  )}
                </div>

                {/* CTA button */}
                {isExternal ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 px-3 py-1 text-xs font-semibold transition-colors"
                  >
                    {buttonText}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 px-3 py-1 text-xs font-semibold transition-colors"
                  >
                    {buttonText}
                  </Link>
                )}

                {/* Dismiss button */}
                {dismissible && (
                  <button
                    onClick={handleClose}
                    aria-label="Dismiss announcement"
                    className="shrink-0 rounded-full p-1 text-white/70 hover:text-white hover:bg-white/15 transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
