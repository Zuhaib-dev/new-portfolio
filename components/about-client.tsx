"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Github, Twitter, Linkedin, Briefcase, GraduationCap, Code2, Coffee } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutClient() {
  const bentoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Hello, I'm Zuhaib.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A full-stack developer blending technical precision with thoughtful design. I build robust web applications from the heart of Kashmir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
        
        {/* Main Intro Box */}
        <motion.div 
          custom={0} initial="hidden" animate="visible" variants={bentoVariants}
          className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl bg-muted/20 border border-border/50 p-8 flex flex-col justify-between group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="z-10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">My Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I believe that great software is about more than just code—it's about solving real problems elegantly. I focus on creating accessible, scalable, and highly performant applications. My journey started with a curiosity for how things work on the web, and it has evolved into a deep passion for modern architectures and continuous learning.
            </p>
          </div>
        </motion.div>

        {/* Location Box */}
        <motion.div 
          custom={1} initial="hidden" animate="visible" variants={bentoVariants}
          className="rounded-3xl bg-muted/20 border border-border/50 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
          <MapPin className="h-10 w-10 text-blue-500 mb-4" />
          <h3 className="font-semibold text-lg">Based in</h3>
          <p className="text-muted-foreground">Srinagar, Kashmir</p>
          <p className="text-xs text-muted-foreground mt-2 font-mono">IST (UTC +5:30)</p>
        </motion.div>

        {/* Currently Box */}
        <motion.div 
          custom={2} initial="hidden" animate="visible" variants={bentoVariants}
          className="rounded-3xl bg-muted/20 border border-border/50 p-6 flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-green-500">Currently</span>
          </div>
          <p className="font-medium text-sm lg:text-base leading-snug">
            Building advanced Next.js applications and exploring AI integrations.
          </p>
        </motion.div>

        {/* Tech Stack Box */}
        <motion.div 
          custom={3} initial="hidden" animate="visible" variants={bentoVariants}
          className="md:col-span-2 rounded-3xl bg-muted/20 border border-border/50 p-8 flex flex-col justify-center"
        >
          <h3 className="text-lg font-bold mb-6">Core Arsenal</h3>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "MongoDB", "PostgreSQL", "Docker"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full text-sm font-medium bg-background border border-border/50 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Education Box */}
        <motion.div 
          custom={4} initial="hidden" animate="visible" variants={bentoVariants}
          className="md:col-span-2 lg:col-span-2 rounded-3xl bg-muted/20 border border-border/50 p-8 flex flex-col justify-center group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl bg-orange-500/10">
              <GraduationCap className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold">Continuous Learner</h3>
          </div>
          <p className="text-muted-foreground">
            I don't just write code; I study systems. Whether it's reading documentation, experimenting with new frameworks, or optimizing legacy codebases, I'm always looking for ways to improve my craft.
          </p>
        </motion.div>

        {/* Social Links Box */}
        <motion.div 
          custom={5} initial="hidden" animate="visible" variants={bentoVariants}
          className="rounded-3xl bg-muted/20 border border-border/50 p-6 flex flex-col justify-between"
        >
          <h3 className="font-semibold mb-4">Connect</h3>
          <div className="flex flex-col gap-3">
            <Link href="https://github.com/Zuhaib-dev" target="_blank" className="flex items-center justify-between p-3 rounded-xl hover:bg-background transition-colors border border-transparent hover:border-border/50">
              <div className="flex items-center gap-3"><Github className="h-5 w-5" /><span className="text-sm font-medium">GitHub</span></div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link href="https://x.com/xuhaib_x9" target="_blank" className="flex items-center justify-between p-3 rounded-xl hover:bg-background transition-colors border border-transparent hover:border-border/50">
              <div className="flex items-center gap-3"><Twitter className="h-5 w-5" /><span className="text-sm font-medium">Twitter</span></div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link href="https://www.linkedin.com/in/zuhaib-rashid-661345318/" target="_blank" className="flex items-center justify-between p-3 rounded-xl hover:bg-background transition-colors border border-transparent hover:border-border/50">
              <div className="flex items-center gap-3"><Linkedin className="h-5 w-5" /><span className="text-sm font-medium">LinkedIn</span></div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
