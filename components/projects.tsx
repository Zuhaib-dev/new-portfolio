"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    logo: "/humanitycarefoundationLogo.svg",
    title: "CarePulse",
    description:
      "A real-time healthcare dashboard for hospitals, tracking patient vitals via API integrations and providing automated, actionable alerts to healthcare professionals. Built for fast monitoring, data visualization, and robust user management.",
    image: "/carepulse.png",
    tags: ["React.js","Nextjs", "Tailwind CSS", "Typescript", "Appwrite", "Twilio"],
    demoUrl: "https://hms-seven-green.vercel.app/",
    githubUrl: "https://github.com/Zuhaib-dev/HMS",
    features: [
      "Live monitoring of patient vitals from IoT medical devices",
      "Automated critical alerts using Firebase Cloud Messaging",
      "Advanced data charts and dashboards for clinicians",
      "User authentication, access control, and secure data flows"
    ]
  },
  {
    logo: "/resumind.png",
    title: "Resumind",
    description:
      "A full-stack AI resume builder leveraging GPT-3.5 to generate optimized, role-specific content with instant editing and export features. Prioritizes privacy, user experience, and seamless integration of AI-driven suggestions.",
    image: "/resumind.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Puterjs",  "React"],
    demoUrl: "https://resumind-ebon.vercel.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Resumind",
    features: [
      "AI-powered generation of tailored resume content",
      "Live editing, preview, and PDF export",
      "Secure Supabase backend for user data",
      "Modern UI/UX built with Next.js and TypeScript"
    ]
  },
  {
    logo: "/kilamate.svg",
    title: "Kilamate",
    description:
      "A modern weather forecasting app displaying real-time weather data with interactive charts, a sleek UI, and responsive design.",
    image: "/SEO.png",
    tags: ["Next.js", "React", "TypeScript", "shadcn/ui", "Tailwind CSS", "Recharts","Tanstack Query"],
    demoUrl: "https://kilamate.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Kilamate",
    features: [
      "Real-time weather updates for any location",
      "Beautiful, responsive user interface",
      "Interactive charts powered by Recharts",
      "High performance and scalability with modern tech stack"
    ]
  },
  {
    logo: "/friendcirlce.png",
    title: "Friend Circle",
    description:
      "A dynamic website showcasing my adventurous friend circle with profiles, testimonials, and stunning visuals of our trips and hobbies.",
    image: "/friendcircle.png",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer Motion", "Formspree"],
    demoUrl: "https://friendcirclee.netlify.app/",
    githubUrl: "https://zuhaib-dev.github.io/Friend-circle",
    features: [
      "Custom-built animated layout with scroll effects",
      "Friend profiles with pictures and activity highlights",
      "Responsive, clean design optimized for mobile",
      "Testimonials, event calendar, and Instagram integration"
    ]
  }
];


export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title ?? "Project image"}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {project.githubUrl && (
                    <Button size="sm" variant="outline">
                      <Link
                        href={project.githubUrl}
                        className="flex items-center"
                        target="_blank"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
