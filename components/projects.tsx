"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/lib/projects-data";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiAppwrite,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiVite,
  SiSupabase,
  SiResend,
  SiAxios,
} from "react-icons/si";
import { TbBrandFramerMotion, TbChartBar, TbBrain } from "react-icons/tb";

// Map tag names to react-icons components + colors
const techIconMap: Record<
  string,
  { icon: React.ElementType; color: string; label: string }
> = {
  "React.js": { icon: SiReact, color: "#61DAFB", label: "React" },
  React: { icon: SiReact, color: "#61DAFB", label: "React" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
  Nextjs: { icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
  TypeScript: { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  Typescript: { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  Appwrite: { icon: SiAppwrite, color: "#FD366E", label: "Appwrite" },
  "Framer Motion": {
    icon: TbBrandFramerMotion,
    color: "#BB4FFF",
    label: "Framer Motion",
  },
  HTML: { icon: SiHtml5, color: "#E34F26", label: "HTML" },
  CSS: { icon: SiCss3, color: "#1572B6", label: "CSS" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  Recharts: { icon: TbChartBar, color: "#22C55E", label: "Recharts" },
  "Node.js": { icon: SiNodedotjs, color: "#339933", label: "Node.js" },
  PWA: { icon: SiFramer, color: "#9333EA", label: "PWA" },
  Vite: { icon: SiVite, color: "#646CFF", label: "Vite" },
  Puter: { icon: TbBrain, color: "#F97316", label: "Puter" },
  Claude: { icon: TbBrain, color: "#D97706", label: "Claude AI" },
  Gemini: { icon: TbBrain, color: "#4285F4", label: "Gemini AI" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E", label: "Supabase" },
  Resend: { icon: SiResend, color: "#000000", label: "Resend" },
  Axios: { icon: SiAxios, color: "#5A29E4", label: "Axios" },
  Lenis: { icon: SiFramer, color: "#9333EA", label: "Lenis" },
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-2xl border border-border/40 bg-muted/10 backdrop-blur-sm overflow-hidden transition-all duration-300"
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset" }}
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(120,80,255,0.08),transparent_65%)]" />

      {/* Top gradient accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 opacity-60 z-10" />

      {/* Project Screenshot */}
      <div className="relative w-full h-48 bg-muted/30 overflow-hidden border-b border-border/30 shrink-0">
        {/* Browser chrome bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-background/80 backdrop-blur-sm border-b border-border/20">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <span className="ml-2 flex-1 text-[10px] text-muted-foreground/50 truncate font-mono">
            {project.demoUrl}
          </span>
        </div>

        {/* Screenshot */}
        <div className="absolute inset-0 top-8">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
            priority={index < 2}
            loading={index < 2 ? "eager" : "lazy"}
          />
          {/* Gradient fade at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        {/* Hover overlay */}
        <Link
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 top-8 z-20 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 text-sm font-medium shadow-lg border border-border/50 backdrop-blur-sm">
            <ExternalLink className="w-3.5 h-3.5" />
            Open Live Site
          </span>
        </Link>
      </div>

      {/* Card Body */}
      <div className="relative z-10 flex flex-col flex-1 p-5 gap-3">
        {/* Title */}
        <h3 className="text-base font-bold tracking-tight">{project.title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => {
            const tech = techIconMap[tag];
            if (!tech)
              return (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full border border-border/40 text-muted-foreground bg-muted/20"
                >
                  {tag}
                </span>
              );
            const Icon = tech.icon;
            return (
              <div
                key={tag}
                title={tech.label}
                className="flex items-center gap-1 px-2 py-1 rounded-lg bg-background/50 border border-border/40 hover:border-border/70 transition-colors"
              >
                <Icon
                  style={{ color: tech.color }}
                  className="w-3 h-3 shrink-0"
                />
                <span className="text-[10px] text-muted-foreground font-medium">
                  {tech.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex-1" />

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-3 border-t border-border/20">
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-80 transition-opacity"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </Link>
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border/50 text-xs font-medium hover:bg-muted/40 hover:border-border transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const topProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Featured Work
        </p>
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {topProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* See All Projects button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 bg-muted/10 backdrop-blur-sm text-sm font-medium hover:border-border hover:bg-muted/20 transition-all duration-300"
          >
            See All Projects
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
