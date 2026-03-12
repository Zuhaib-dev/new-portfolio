"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiAppwrite,
  SiJest,
  SiCypress,
} from "react-icons/si";
import { TbAtom } from "react-icons/tb";
import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";

// Tech icon map
const techIconMap: Record<string, { icon: React.ElementType; color: string }> =
  {
    "React.js": { icon: SiReact, color: "#61DAFB" },
    TypeScript: { icon: SiTypescript, color: "#3178C6" },
    Redux: { icon: SiRedux, color: "#764ABC" },
    Appwrite: { icon: SiAppwrite, color: "#FD366E" },
    Tailwind: { icon: SiTailwindcss, color: "#38BDF8" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
    Zustand: { icon: TbAtom, color: "#F97316" },
    Twilio: { icon: Briefcase, color: "#F22F46" },
    Jest: { icon: SiJest, color: "#C21325" },
    Cypress: { icon: SiCypress, color: "#17202C" },
  };

const experiences = [
  {
    title: "Frontend Developer",
    type: "Internship · Remote",
    company: "Internpe",
    initials: "IP",
    gradient: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.15)",
    borderGlow: "rgba(139,92,246,0.3)",
    period: "Nov 2025 – Dec 2025",
    location: "India (Remote)",
    status: "Completed",
    statusColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    responsibilities: [
      "Built and shipped 12+ pixel-perfect, responsive UI components with React, Next.js, Tailwind, and shadcn/ui, improving UI consistency and reducing CSS duplication by 35%.",
      "Integrated RESTful APIs with loading states, skeletons, and optimistic UI, decreasing perceived wait time by 25% and reducing error retries by 18% across core user flows.",
      "Improved Core Web Vitals (CLS 0.11 → 0.03, LCP +28%) via image optimization, preloading, and route-level code splitting, raising Lighthouse Performance from 67 to 92.",
    ],
    skills: ["React.js", "TypeScript", "Redux", "Appwrite", "Tailwind"],
  },
  {
    title: "Frontend Developer",
    type: "Freelance · Remote",
    company: "Perfect Health Care",
    initials: "PH",
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.15)",
    borderGlow: "rgba(16,185,129,0.3)",
    period: "Jun 2024 – Oct 2024",
    location: "Remote",
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    responsibilities: [
      "Developed a healthcare portal supporting 200+ bookings, user authentication, and real-time doctor scheduling (React.js, TypeScript, Zustand).",
      "Engineered reusable UI components, dynamic form validation, and API integrations with Appwrite and Twilio for secure notifications.",
      "Led automated testing (Jest, Cypress) and CI/CD configuration for reliable and maintainable delivery.",
    ],
    skills: [
      "React.js",
      "TypeScript",
      "Zustand",
      "Appwrite",
      "Twilio",
      "Jest",
      "Cypress",
    ],
  },
  {
    title: "Frontend Developer",
    type: "Freelance · Remote",
    company: "TravelwithTehseen",
    initials: "TT",
    gradient: "from-orange-500 to-amber-500",
    glowColor: "rgba(249,115,22,0.15)",
    borderGlow: "rgba(249,115,22,0.3)",
    period: "Apr 2024 – Sep 2024",
    location: "Remote",
    status: "Completed",
    statusColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    responsibilities: [
      "Built and maintained a responsive travel booking platform (React.js, Zustand, Tailwind CSS), serving 50+ daily visitor sessions.",
      "Implemented modular component architecture and complex state management for booking workflows.",
      "Enhanced user experience with animated SVG interfaces, boosting booking conversions by 20%.",
    ],
    skills: ["React.js", "Zustand", "Tailwind CSS"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Career
        </p>
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-border/80 via-border/40 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative sm:pl-16 group"
              >
                {/* Timeline dot — visible only on sm+ */}
                <div
                  className={`absolute left-0 top-6 hidden sm:flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br ${exp.gradient} shadow-lg z-10`}
                  style={{
                    boxShadow: `0 0 18px 2px ${exp.glowColor}`,
                  }}
                >
                  <span className="text-white font-bold text-xs select-none">
                    {exp.initials}
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-border/40 bg-muted/10 backdrop-blur-sm p-5 sm:p-6 relative overflow-hidden"
                  style={{
                    boxShadow: `0 0 0 1px rgba(255,255,255,0.03) inset`,
                  }}
                >
                  {/* Hover glow layer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${exp.glowColor}, transparent 70%)`,
                    }}
                  />

                  {/* Gradient border top stripe */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${exp.gradient} opacity-60`}
                  />

                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5 relative">
                    <div className="flex items-center gap-3">
                      {/* Mobile avatar (hidden on sm+) */}
                      <div
                        className={`sm:hidden flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white font-bold text-xs shadow-md`}
                      >
                        {exp.initials}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-base tracking-tight">
                            {exp.company}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${exp.statusColor}`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                            {exp.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {exp.title}{" "}
                          <span className="opacity-60">·</span>{" "}
                          <span className="italic opacity-80">{exp.type}</span>
                        </p>
                      </div>
                    </div>

                    {/* Date + location */}
                    <div className="text-right shrink-0 space-y-1">
                      <div className="flex items-center justify-end gap-1.5 text-xs font-medium text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground/70">
                        <MapPin className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-5 relative">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70 mb-2.5">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => {
                        const tech = techIconMap[skill];
                        const Icon = tech?.icon;
                        return (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/40 px-2.5 py-1 text-xs font-medium hover:border-border transition-colors"
                          >
                            {Icon && (
                              <Icon
                                style={{ color: tech.color }}
                                className="h-3.5 w-3.5 shrink-0"
                              />
                            )}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 relative">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-br ${exp.gradient} shrink-0 opacity-80`}
                        />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
