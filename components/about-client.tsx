"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Layout, Laptop, Sparkles, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-5 w-5 text-blue-500" />,
    items: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: <Database className="h-5 w-5 text-green-500" />,
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Tools & Practices",
    icon: <Laptop className="h-5 w-5 text-purple-500" />,
    items: ["Git", "Docker", "Accessibility", "SEO", "WebMCP", "Agile"],
  },
];

export default function AboutClient() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Sparkles className="h-4 w-4" />
          <span>About Me</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Crafting Digital <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Experiences</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          I am Zuhaib Rashid, a passionate Full Stack Developer based in Srinagar, Kashmir.
          I specialize in building modern, accessible, and high-performance web applications that leave a lasting impression.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <Button asChild className="gap-2 rounded-full h-11 px-6">
            <Link href="/resume">
              View Resume <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="gap-2 rounded-full h-11 px-6">
            <Link href="/#contact">
              Get in Touch <Mail className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Journey Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Code2 className="h-8 w-8 text-violet-500" />
            My Journey
          </h2>
          <div className="prose dark:prose-invert">
            <p className="text-muted-foreground leading-relaxed text-lg">
              With a strong passion for continuous learning and a deep interest in modern web architecture, I have built several projects ranging from intricate healthcare platforms to stunning portfolio websites.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My focus is always on delivering seamless user experiences combined with scalable backend services. I believe in writing clean, maintainable code and staying at the forefront of web technologies.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl transform -rotate-6 scale-105" />
          <div className="relative bg-card border border-border/50 p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-violet-500" />
              </div>
              <div>
                <p className="font-semibold text-lg">Srinagar, Kashmir</p>
                <p className="text-sm text-muted-foreground">Current Location</p>
              </div>
            </div>
            <div className="h-px bg-border/50" />
            <div className="space-y-2">
              <p className="font-medium">Currently focused on:</p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Advanced Next.js Architectures</li>
                <li>• AI/LLM Integrations</li>
                <li>• High-performance UI/UX</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-background shadow-sm border border-border/50">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-background border border-border/50 text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
