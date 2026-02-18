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
import { Briefcase, MapPin, Calendar } from "lucide-react";

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
    initialsColor: "from-violet-500 to-purple-600",
    period: "Nov 2025 – Dec 2025",
    location: "India (Remote)",
    status: "Completed",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
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
    initialsColor: "from-emerald-500 to-teal-600",
    period: "Jun 2024 – Oct 2024",
    location: "Remote",
    status: "Completed",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
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
    initialsColor: "from-orange-500 to-amber-600",
    period: "Apr 2024 – Sep 2024",
    location: "Remote",
    status: "Completed",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    responsibilities: [
      "Built and maintained a responsive travel booking platform (React.js, Zustand, Tailwind CSS), serving 50+ daily visitor sessions.",
      "Implemented modular component architecture and complex state management for booking workflows.",
      "Enhanced user experience with animated SVG interfaces, boosting booking conversions by 20%.",
    ],
    skills: ["React.js", "Zustand", "Tailwind CSS"],
  },
];

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
          Featured
        </p>
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border/50 bg-muted/20 p-6 hover:bg-muted/30 transition-colors"
            >
              {/* Top row: logo + company info + date */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                  {/* Company initials avatar */}
                  <div
                    className={`flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br ${exp.initialsColor} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                  >
                    {exp.initials}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-base">
                        {exp.company}
                      </span>
                      {/* Status badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${exp.statusColor}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {exp.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {exp.title} · <span className="italic">{exp.type}</span>
                    </p>
                  </div>
                </div>

                {/* Date + location */}
                <div className="text-right shrink-0">
                  <div className="flex items-center justify-end gap-1.5 text-sm font-medium">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    {exp.period}
                  </div>
                  <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Tech stack pills */}
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2.5">
                  Technologies &amp; Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => {
                    const tech = techIconMap[skill];
                    const Icon = tech?.icon;
                    return (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/60 px-2.5 py-1 text-xs font-medium"
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
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
