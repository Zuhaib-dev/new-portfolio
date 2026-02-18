"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    institution: "Sheryians Coding School",
    degree: "Full Stack Web Development Bootcamp",
    period: "Mar 2025 – Sep 2025",
    location: "Online",
    status: "Completed",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    initials: "SC",
    initialsColor: "from-violet-500 to-purple-600",
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
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    initials: "HS",
    initialsColor: "from-emerald-500 to-teal-600",
    gpa: "88.1%",
    highlights: [
      "Graduated with 88.1% — among the top performers in the batch.",
      "Developed strong analytical and problem-solving skills through the science curriculum.",
      "Pursued self-taught programming alongside academics, building the foundation for a tech career.",
    ],
  },
];

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

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border/50 bg-muted/20 p-6 hover:bg-muted/30 transition-colors"
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                  {/* Initials avatar */}
                  <div
                    className={`flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br ${edu.initialsColor} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                  >
                    {edu.initials}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-base">
                        {edu.institution}
                      </span>
                      {/* Status badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${edu.statusColor}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                {/* Date + location */}
                <div className="text-right shrink-0">
                  <div className="flex items-center justify-end gap-1.5 text-sm font-medium">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    {edu.period}
                  </div>
                  <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center justify-end gap-1.5 text-xs font-semibold text-emerald-500 mt-1">
                      <Award className="h-3 w-3" />
                      {edu.gpa}
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2">
                {edu.highlights.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {point}
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
