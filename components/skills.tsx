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
    emoji: "{ }",
    gradient: "from-yellow-500 to-orange-500",
    glowColor: "rgba(234,179,8,0.12)",
    borderGlow: "rgba(234,179,8,0.25)",
    labelColor: "text-yellow-400",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3 className="text-blue-400" /> },
    ],
  },
  {
    title: "Frontend",
    emoji: "◈",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.12)",
    borderGlow: "rgba(59,130,246,0.25)",
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
    emoji: "⬡",
    gradient: "from-green-500 to-emerald-500",
    glowColor: "rgba(34,197,94,0.12)",
    borderGlow: "rgba(34,197,94,0.25)",
    labelColor: "text-emerald-400",
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
    emoji: "⚙",
    gradient: "from-violet-500 to-purple-500",
    glowColor: "rgba(139,92,246,0.12)",
    borderGlow: "rgba(139,92,246,0.25)",
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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
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
        <p className="text-muted-foreground mb-10 text-sm max-w-md">
          Technologies and tools I use to build modern, scalable web
          applications.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="group relative rounded-2xl border border-border/40 bg-muted/10 backdrop-blur-sm p-5 overflow-hidden"
              style={{
                boxShadow: `0 0 0 1px rgba(255,255,255,0.03) inset`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at top left, ${category.glowColor}, transparent 70%)`,
                }}
              />

              {/* Gradient top stripe */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${category.gradient} opacity-70`}
              />

              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4 relative">
                <span
                  className={`text-sm font-mono font-bold ${category.labelColor} opacity-70 select-none`}
                >
                  {category.emoji}
                </span>
                <h3
                  className={`text-xs font-bold uppercase tracking-widest ${category.labelColor}`}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills pills */}
              <motion.div
                className="flex flex-wrap gap-2 relative"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={pillVariants}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/50 px-2.5 py-1.5 text-xs font-medium backdrop-blur-sm cursor-default hover:border-border transition-colors"
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
