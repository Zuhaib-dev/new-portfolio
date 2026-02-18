"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, ArrowRight } from "lucide-react";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNodedotjs } from "react-icons/si";
import Link from "next/link";

const roles = [
  "Full Stack Developer",
  "React & Next.js Dev",
  "UI/UX Enthusiast",
  "Open Source Builder",
];

const techGrid = [
  { icon: RiReactjsFill, color: "#087ea4", label: "React", spin: true },
  { icon: RiNextjsFill, color: "currentColor", label: "Next.js", float: true },
  { icon: SiTypescript, color: "#3178c6", label: "TypeScript" },
  { icon: RiTailwindCssFill, color: "#38bdf8", label: "Tailwind" },
  { icon: SiNodedotjs, color: "#68a063", label: "Node.js", float: true },
  { icon: FaGithub, color: "currentColor", label: "GitHub" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Zuhaib-dev", label: "GitHub" },
  { icon: FaXTwitter, href: "https://x.com/xuhaibx9", label: "X / Twitter" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/zuhaib-rashid-661345318/",
    label: "LinkedIn",
  },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="about" className="relative py-6 md:py-12">
      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* ===== LEFT: Hero Text ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:col-span-2"
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-medium text-green-600 dark:text-green-400">
              Available for work
            </span>
          </div>

          {/* Name + role */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Zuhaib Rashid
            </h1>
            {/* Typewriter role */}
            <p className="text-lg sm:text-xl font-medium text-violet-500 dark:text-violet-400 min-h-[1.75rem]">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-violet-500 ml-0.5 animate-pulse align-middle" />
            </p>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <a
              href="mailto:zuhaibrashid01@gmail.com"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              zuhaibrashid01@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Srinagar, India
            </span>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
            Passionate full-stack developer crafting fast, accessible, and
            visually polished web experiences. I love turning ideas into
            products — from clean UIs to scalable backends.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Zuhaib.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
              >
                <Download className="h-4 w-4" />
                Download CV
              </motion.button>
            </a>

            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-4 py-2 text-sm font-semibold hover:bg-muted/60 transition-colors"
              >
                Hire Me
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-2 ml-1">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/60 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT: Tech Grid ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-64 h-64">
            {/* Glow background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 blur-2xl" />

            {/* 3×2 tech icon grid */}
            <div className="relative grid grid-cols-3 gap-3 p-4">
              {techGrid.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    whileHover={{ scale: 1.12, y: -3 }}
                    className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-border/50 bg-muted/40 p-3 backdrop-blur-sm cursor-default"
                  >
                    {tech.spin ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Icon
                          className="h-7 w-7"
                          style={{ color: tech.color }}
                        />
                      </motion.div>
                    ) : tech.float ? (
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      >
                        <Icon
                          className="h-7 w-7"
                          style={{ color: tech.color }}
                        />
                      </motion.div>
                    ) : (
                      <Icon className="h-7 w-7" style={{ color: tech.color }} />
                    )}
                    <span className="text-[10px] font-medium text-muted-foreground">
                      {tech.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
