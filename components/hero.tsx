"use client";

import { motion } from "framer-motion";
import { Copy, Mail } from "lucide-react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaMedium,
  FaSpotify,
} from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

const socialLinks = [
  { icon: FaXTwitter, href: "https://x.com/", label: "X / Twitter" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaYoutube, href: "https://youtube.com/", label: "YouTube" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: FaPinterest, href: "https://pinterest.com/", label: "Pinterest" },
  { icon: FaMedium, href: "https://medium.com/", label: "Medium" },
  { icon: Mail, href: "mailto:hi@ramx.in", label: "Email" },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hi@ramx.in");
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
            src="https://avatars.githubusercontent.com/u/101889410" // Using a placeholder avatar since none was explicitly provided
            alt="Ramkrishna Swarnkar"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4 flex-1">
          {/* Name & Subtitle */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Ramkrishna Swarnkar
            </h1>
            <div className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground font-medium">
              <span>Engineer</span>
              <span>&bull;</span>
              <span>Polymath</span>
              <span>&bull;</span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer group"
                title="Copy Email"
              >
                hi@ramx.in
                <Copy className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                {copied && <span className="text-[10px] text-green-500">Copied!</span>}
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg leading-relaxed">
            Love to build cool stuff, content creator & polymath.
          </p>

          {/* Spotify Currently Playing */}
          <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/20 px-3 py-1.5 rounded-full border border-border/50">
            <FaSpotify className="h-4 w-4 text-[#1DB954]" />
            <span className="text-xs">Last played &mdash; Cheques &middot; Shubh</span>
          </div>

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
