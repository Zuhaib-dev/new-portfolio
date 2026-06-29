"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    institution: "Amar Singh College, Srinagar",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2026 – Present",
    location: "Srinagar, J&K",
    status: "1st Semester",
    initials: "AS",
    gradient: "from-blue-500 to-cyan-600",
    glowColor: "rgba(59,130,246,0.15)",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    highlights: [
      "Currently in my 1st semester, building a strong academic foundation in computer science.",
      "Learning core computer science concepts, algorithms, and software engineering principles.",
      "Actively applying theoretical knowledge to real-world full-stack web development projects.",
    ],
  },
  {
    institution: "Sheryians Coding School",
    degree: "Full Stack Web Development Bootcamp",
    period: "Mar 2025 – Sep 2025",
    location: "Online",
    status: "Completed",
    initials: "SC",
    gradient: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.15)",
    statusColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    highlights: [
      "Intensive full-stack bootcamp covering React, Next.js, Node.js, and modern web tooling.",
      "Built and shipped multiple real-world projects with a focus on performance and clean architecture.",
      "Gained hands-on experience with TypeScript, Tailwind CSS, and REST API integration.",
    ],
  },
  {
    institution: "Govt. Higher Secondary School Zoohama",
    degree: "Higher Secondary Certificate — Medical Stream",
    period: "Apr 2023 – Jun 2025",
    location: "Zoohama, J&K",
    status: "Completed",
    initials: "HS",
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.15)",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    gpa: "88.1%",
    highlights: [
      "Graduated with 88.1% — among the top performers in the batch.",
      "Developed strong analytical and problem-solving skills through the science curriculum.",
      "Pursued self-taught programming alongside academics, building the foundation for a tech career.",
    ],
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

export default function Education() {
  return (
    <section id="education" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Background
        </p>
        <h2 className="text-3xl font-bold mb-10">Education</h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-border/80 via-border/40 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative sm:pl-16 group"
              >
                {/* Timeline dot badge */}
                <div
                  className={`absolute left-0 top-6 hidden sm:flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br ${edu.gradient} shadow-lg z-10`}
                  style={{
                    boxShadow: `0 0 18px 2px ${edu.glowColor}`,
                  }}
                >
                  <span className="text-white font-bold text-xs select-none">
                    {edu.initials}
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
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${edu.glowColor}, transparent 70%)`,
                    }}
                  />

                  {/* Top gradient stripe */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${edu.gradient} opacity-60`}
                  />

                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5 relative">
                    <div className="flex items-center gap-3">
                      {/* Mobile avatar */}
                      <div
                        className={`sm:hidden flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-white font-bold text-xs shadow-md`}
                      >
                        {edu.initials}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-base tracking-tight">
                            {edu.institution}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${edu.statusColor}`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {edu.degree}
                        </p>
                      </div>
                    </div>

                    {/* Date + location + GPA */}
                    <div className="text-right shrink-0 space-y-1">
                      <div className="flex items-center justify-end gap-1.5 text-xs font-medium text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground/70">
                        <MapPin className="h-3 w-3" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center justify-end gap-1.5 text-xs font-semibold text-emerald-400 mt-0.5">
                          <Award className="h-3 w-3" />
                          <span>{edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 relative">
                    {edu.highlights.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-br ${edu.gradient} shrink-0 opacity-80`}
                        />
                        {point}
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
