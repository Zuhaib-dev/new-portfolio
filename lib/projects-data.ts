export const projects = [
  // ── Top 4 shown on homepage ──────────────────────────────────────────────
  {
    title: "Resumind",
    description:
      "A full-stack AI resume builder leveraging GPT-3.5 to generate optimized, role-specific content with instant editing and export features.",
    image: "/Resumind.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    demoUrl: "https://resumind-ebon.vercel.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Resumind",
  },
  {
    title: "Rommify",
    description:
      "AI-powered architectural visualization SaaS that transforms 2D floor plans into photorealistic 3D renders. Powered by Claude & Gemini with permanent hosting, KV storage, and a global community feed.",
    image: "/Roomify.png",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Puter", "Claude", "Gemini"],
    demoUrl: "https://airoomify.netlify.app//",
    githubUrl: "https://github.com/Zuhaib-dev/Roomify",
  },
  {
    title: "Kilamate",
    description:
      "A modern weather forecasting app displaying real-time weather data with interactive charts, a sleek UI, and responsive design.",
    image: "/Kilamate.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    demoUrl: "https://kilamate.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Kilamate",
  },
  {
    title: "CarePulse",
    description:
      "A real-time healthcare dashboard for hospitals, tracking patient vitals via API integrations and providing automated, actionable alerts to healthcare professionals.",
    image: "/Carepulse.png",
    tags: ["React.js", "Nextjs", "Tailwind CSS", "Typescript", "Appwrite"],
    demoUrl: "https://hms-seven-green.vercel.app/",
    githubUrl: "https://github.com/Zuhaib-dev/HMS",
  },
  // ── Extra projects shown on /projects page ───────────────────────────────
  {
    title: "Lenscapes",
    description:
      "A visually stunning photography portfolio showcasing creative works, breathtaking landscapes, and timeless portraits — built to highlight artistry and storytelling.",
    image: "/Lenscapes.png",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PWA"],
    demoUrl: "https://lenscapes.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/photography",
  },
  {
    title: "Friend Circle",
    description:
      "A dynamic website showcasing my adventurous friend circle with profiles, testimonials, and stunning visuals of our trips and hobbies.",
    image: "/FriendCirclee.png",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://friendcirclee.netlify.app/",
    githubUrl: "https://zuhaib-dev.github.io/Friend-circle",
  },
  {
    title: "DealDrop",
    description:
      "A full-stack price tracker with lightning-fast scraping via Firecrawl, interactive price history charts, instant email alerts via Resend, smart anti-bot proxies, and Google OAuth via Supabase.",
    image: "/dealDrop.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Firecrawl", "Resend", "Recharts"],
    demoUrl: "https://dealdropp.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/DealDrop",
  },
  {
    title: "Repoviz",
    description:
      "A modern web app to visualize GitHub repository README files and folder structures instantly — with syntax highlighting, interactive tree views, repo stats, export options, and a premium glassmorphism UI.",
    image: "/Repoviz.png",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Axios", "Lenis"],
    demoUrl: "https://repoviz.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Repoviz",
  },
];

export type Project = (typeof projects)[0];
