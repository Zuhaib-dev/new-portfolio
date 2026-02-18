"use client";

import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiPostman,
  SiAppwrite,
  SiSupabase,
  SiFramer,
  SiVite,
  SiPwa,
  SiShadcnui,
  SiZod,
  SiPrisma,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import { TbAtom, TbChartBar } from "react-icons/tb";
import { Network } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    color: "from-yellow-500/10 to-orange-500/10 border-yellow-500/20",
    labelColor: "text-yellow-500",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3 className="text-blue-400" /> },
    ],
  },
  {
    title: "Frontend",
    color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    labelColor: "text-blue-400",
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-black dark:text-white" />,
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-cyan-400" />,
      },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Zustand", icon: <TbAtom className="text-orange-400" /> },
      {
        name: "Shadcn/ui",
        icon: <SiShadcnui className="text-black dark:text-white" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Vite", icon: <SiVite className="text-violet-500" /> },
      { name: "Recharts", icon: <TbChartBar className="text-blue-400" /> },
      { name: "Zod", icon: <SiZod className="text-blue-600" /> },
      { name: "PWA", icon: <SiPwa className="text-indigo-500" /> },
    ],
  },
  {
    title: "Backend & Databases",
    color: "from-green-500/10 to-emerald-500/10 border-green-500/20",
    labelColor: "text-green-400",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      {
        name: "Express.js",
        icon: <SiExpress className="text-black dark:text-white" />,
      },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Appwrite", icon: <SiAppwrite className="text-pink-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
      { name: "Prisma", icon: <SiPrisma className="text-teal-400" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-violet-500/10 to-purple-500/10 border-violet-500/20",
    labelColor: "text-violet-400",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      {
        name: "GitHub",
        icon: <FaGithub className="text-black dark:text-white" />,
      },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "Figma", icon: <IoLogoFigma className="text-purple-500" /> },
      {
        name: "Vercel",
        icon: <IoLogoVercel className="text-black dark:text-white" />,
      },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Axios", icon: <Network className="h-4 w-4 text-purple-400" /> },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Tech Stack
        </p>
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <p className="text-muted-foreground mb-10 text-sm">
          Technologies and tools I use to build modern, scalable web
          applications.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl border bg-gradient-to-br p-5 ${category.color}`}
            >
              {/* Category label */}
              <h3
                className={`text-xs font-bold uppercase tracking-widest mb-4 ${category.labelColor}`}
              >
                {category.title}
              </h3>

              {/* Skills grid */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={item}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/70 px-2.5 py-1.5 text-xs font-medium backdrop-blur-sm cursor-default"
                  >
                    <span className="text-base leading-none">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
