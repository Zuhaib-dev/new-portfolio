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
      "A smart healthcare dashboard to monitor patient vitals in real-time using API integration and automated alerts.",
    image: "/carepulse.png",
    tags: ["React.js", "Tailwind CSS", "Firebase", "Chart.js"],
    demoUrl: "https://hms-seven-green.vercel.app/",
    githubUrl: "https://github.com/Zuhaib-dev/HMS",
    features: [
      "Live vitals tracking from connected devices",
      "Real-time alerts via Firebase Cloud Messaging",
      "Interactive charts for doctors and patients",
      "User authentication and dashboard system",
    ],
  },
  {
    logo: "/resumind.png",
    title: "Resumind",
    description:
      "An AI-powered resume builder that tailors content to specific job roles, improving job match rates significantly.",
    image: "/resumind.png",
    tags: ["Next.js", "Tailwind CSS", "OpenAI API", "Supabase"],
    demoUrl: "https://resumind-ebon.vercel.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Resumind",
    features: [
      "AI-generated bullet points and summaries",
      "Editable live preview and export to PDF",
      "Role-based resume optimization",
    ],
  },
  {
    logo: "/friendcirlce.png",
    description:
      "A dynamic website showcasing my adventurous friend circle with profiles, testimonials, and stunning visuals of our trips and hobbies.",
    image: "/friendcircle.png",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://zuhaib-dev.github.io/Friend-circle/index.html",
    githubUrl: "https://zuhaib-dev.github.io/Friend-circle",
    features: [
      "Custom-built animated layout with scroll effects",
      "Friend profiles with pictures and activity highlights",
      "Responsive, clean design optimized for mobile",
      "Testimonials, event calendar, and Instagram integration",
    ],
  },
  {
    logo: "/petzone.png",
    title: "Portfolio X (Awwwards Winner)",
    description:
      "An immersive portfolio site featuring scroll animations, 3D models, parallax effects and minimal UX — honored by Awwwards.",
    image: "/petzone.png",
    tags: ["Three.js", "GSAP", "Framer Motion", "React", "Tailwind CSS"],
    demoUrl: "https://award-winning-website-xi.vercel.app/",
    githubUrl: "",
    features: [
      "3D model sections with camera transitions",
      "Smooth parallax and scroll-triggered animations",
      "Mobile-optimized animations and minimal layout",
      "Featured in Awwwards for creative frontend design",
    ],
  },
  {
    logo: "/portfolio.png",
    title: "PetZone",
    description:
      "A beautiful pet store website with product listings, cart integration, pet care blogs, and a fully responsive layout.",
    image: "/portfolio.png",
    tags: ["HTML", "CSS", "JavaScript", "Swiper.js", "Bootstrap"],
    demoUrl: "https://petzone.vercel.app/",
    githubUrl: "",
    features: [
      "Interactive product slider using Swiper.js",
      "Responsive pet product grid and cart UI",
      "Blog section for pet care tips",
      "Animations on scroll with clean UX design",
    ],
  },
]

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
