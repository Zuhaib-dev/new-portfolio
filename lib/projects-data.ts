export const projects = [
  // ── Top 4 shown on homepage ──────────────────────────────────────────────
  {
    title: "Resumind",
    description:
      "A full-stack AI resume builder leveraging GPT-3.5 to generate optimized, role-specific content with instant editing and export features.",
    image: "/resumind.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    demoUrl: "https://resumind-ebon.vercel.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Resumind",
  },
  {
    title: "Rommify",
    description:
      "AI-powered architectural visualization SaaS that transforms 2D floor plans into photorealistic 3D renders. Powered by Claude & Gemini with permanent hosting, KV storage, and a global community feed.",
    image: "/resumind.webp", // 👉 replace with /rommify.webp once you add the screenshot
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Puter", "Claude", "Gemini"],
    demoUrl: "https://rommify.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Rommify",
  },
  {
    title: "Kilamate",
    description:
      "A modern weather forecasting app displaying real-time weather data with interactive charts, a sleek UI, and responsive design.",
    image: "/kilamate.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    demoUrl: "https://kilamate.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Kilamate",
  },
  {
    title: "CarePulse",
    description:
      "A real-time healthcare dashboard for hospitals, tracking patient vitals via API integrations and providing automated, actionable alerts to healthcare professionals.",
    image: "/carepulse.webp",
    tags: ["React.js", "Nextjs", "Tailwind CSS", "Typescript", "Appwrite"],
    demoUrl: "https://hms-seven-green.vercel.app/",
    githubUrl: "https://github.com/Zuhaib-dev/HMS",
  },
  // ── Extra projects shown on /projects page ───────────────────────────────
  {
    title: "Lenscapes",
    description:
      "A visually stunning photography portfolio showcasing creative works, breathtaking landscapes, and timeless portraits — built to highlight artistry and storytelling.",
    image: "/lenscapes.webp",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PWA"],
    demoUrl: "https://lenscapes.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/photography",
  },
  {
    title: "Friend Circle",
    description:
      "A dynamic website showcasing my adventurous friend circle with profiles, testimonials, and stunning visuals of our trips and hobbies.",
    image: "/friendcircle.webp",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://friendcirclee.netlify.app/",
    githubUrl: "https://zuhaib-dev.github.io/Friend-circle",
  },
];

export type Project = (typeof projects)[0];
