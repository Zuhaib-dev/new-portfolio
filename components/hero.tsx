"use client";

import { motion } from "framer-motion";
import { Copy, Mail } from "lucide-react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaPinterest,
  FaSpotify,
} from "react-icons/fa6";
import Image from "next/image";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: FaXTwitter, href: "https://x.com/xuhaib_x9", label: "X / Twitter" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/zuhaib-rashid-661345318/",
    label: "LinkedIn",
  },
  { icon: FaGithub, href: "https://github.com/zuhaib-dev", label: "GitHub" },
  { icon: FaInstagram, href: "https://www.instagram.com/zoh.aib__/", label: "Instagram" },
  { icon: FaPinterest, href: "https://in.pinterest.com/xuhaibx9/", label: "Pinterest" },
  { icon: Mail, href: "mailto:zuhaibrashid01@gmail.con", label: "Email" },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [spotifyData, setSpotifyData] = useState<any>(null);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify");
        if (res.ok) {
          const data = await res.json();
          setSpotifyData(data);
        }
      } catch (e) {
        console.error("Error fetching Spotify data", e);
      }
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 10000); // Poll every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("zuhaibrashid01@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-8 items-start md:items-center relative"
      >
        {/* Avatar Placeholder */}
        <div className="relative shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border bg-muted/50 flex items-center justify-center">
          <Image
            src="/profilePic.png"
            alt="Zuhaib Rashid"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="space-y-4 flex-1">
          {/* Name & Subtitle */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Zuhaib Rashid
            </h1>
            <div className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground font-medium">
              <span>Engineer</span>
              <span>&bull;</span>
              <span>Developer</span>
              <span>&bull;</span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer group"
                title="Copy Email"
              >
                hi@zuhaibrashid
                <Copy className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                {copied && (
                  <span className="text-[10px] text-green-500">Copied!</span>
                )}
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg leading-relaxed">
            Love to build cool stuff, adventure & explore new technologies.
          </p>

          {/* Spotify Currently Playing */}
          {spotifyData ? (
            spotifyData.isPlaying ? (
              <a
                href={spotifyData.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/10 px-3 py-1.5 rounded-full border border-[#1DB954]/30 hover:bg-[#1DB954]/10 transition-colors group relative overflow-hidden shadow-[0_0_15px_-5px_#1DB954]"
              >
                <div className="relative flex items-center justify-center w-4 h-4">
                  <FaSpotify className="absolute h-4 w-4 text-[#1DB954] z-10" />
                  <span className="absolute h-full w-full rounded-full bg-[#1DB954] opacity-50 animate-ping"></span>
                </div>
                <span className="text-xs truncate max-w-[200px] sm:max-w-[300px]">
                  Listening to{" "}
                  <span className="text-foreground font-semibold">
                    {spotifyData.title}
                  </span>{" "}
                  &middot; {spotifyData.artist}
                </span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/20 px-3 py-1.5 rounded-full border border-border/50">
                <FaSpotify className="h-4 w-4" />
                <span className="text-xs">Not listening to anything</span>
              </div>
            )
          ) : (
            <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/20 px-3 py-1.5 rounded-full border border-border/50">
              <FaSpotify className="h-4 w-4 text-muted-foreground/50 animate-pulse" />
              <span className="text-xs">Loading Spotify...</span>
            </div>
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2 flex-wrap">
            {socialLinks.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
