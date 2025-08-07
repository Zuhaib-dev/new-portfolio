"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Frontend Developer (Freelance, Remote)",
    company: "Perfect Health Care",
    period: "Aug 2024 – Sep 2024",
    responsibilities: [
      "Developed a healthcare portal supporting 200+ bookings, user authentication, and real-time doctor scheduling (React.js, TypeScript, Zustand).",
      "Engineered reusable UI components, dynamic form validation, and API integrations with Appwrite and Twilio for secure notifications.",
      "Deployed at live demo; increased patient digital adoption by 25%.",
      "Led automated testing (Jest, Cypress) and CI/CD configuration for reliable and maintainable delivery."
    ],
    skills: ["React.js", "TypeScript", "Zustand", "Appwrite", "Twilio", "Jest", "Cypress", "CI/CD"]
  },
  {
    title: "Frontend Developer (Freelance, Remote)",
    company: "TravelwithTehseen",
    period: "Jan 2024 – Apr 2024",
    responsibilities: [
      "Built and maintained a responsive travel booking platform (React.js, Zustand, Tailwind CSS), serving 50+ daily visitor sessions.",
      "Implemented modular component architecture and complex state management for booking workflows.",
      "Enhanced user experience with animated SVG interfaces, which boosted booking conversions by 20%.",
      "Coordinated remote user testing and agile releases; led code reviews and Git-based collaboration to ensure consistency and quality."
    ],
    skills: ["React.js", "Zustand", "Tailwind CSS", "SVG Animation", "Git", "Agile"]
  },
  
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
