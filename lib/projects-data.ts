export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl?: string;
  label?: string;
  content?: string;
}

export const projects: Project[] = [
  // ── Top 4 shown on homepage ──────────────────────────────────────────────
  {
    slug: "rydexx",
    title: "Rydexx",
    description:
      "Rydex lets you book bikes, cars, and trucks instantly. Fast, affordable, and reliable vehicle booking at your fingertips.",
    image: "https://rydexx.netlify.app/ogimage.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Auth.js", "NextAuth", "Framer Motion", "Axios", "ZegoCloud", "MongoDB", "Cloudinary"],
    demoUrl: "https://rydexx.netlify.app/",
    label: "Building 🚀",
    content: `
<h2>The Vision</h2>
<p>Finding a reliable, fast, and affordable vehicle rental shouldn't require jumping through hoops. I built <strong>Rydexx</strong> to act as the ultimate middleman between vehicle owners and renters, bringing the "Uber" experience to standard long-term and short-term rentals.</p>

<h2>Architecture & Tech Stack</h2>
<p>Rydexx is built to scale. I chose <strong>Next.js</strong> for its superior routing and server-side rendering capabilities, ensuring the platform is incredibly fast and SEO-optimized.</p>
<ul>
  <li><strong>Authentication:</strong> Handled securely by <strong>Auth.js (NextAuth)</strong>, offering seamless credential and social logins.</li>
  <li><strong>Database:</strong> <strong>MongoDB</strong> provides the flexible schema needed to handle diverse vehicle types, booking histories, and user profiles.</li>
  <li><strong>Media Storage:</strong> All vehicle images and user avatars are instantly uploaded and optimized via <strong>Cloudinary</strong>.</li>
  <li><strong>Real-time Comm:</strong> Integrated <strong>ZegoCloud</strong> for potential real-time chat/support features between renters and owners.</li>
</ul>

<h2>Overcoming Challenges</h2>
<p>The biggest hurdle was managing the booking state and preventing double-bookings. I implemented a robust date-range checking system using MongoDB queries to ensure a vehicle's calendar is locked the moment a transaction is initiated.</p>
<p>The UI relies heavily on <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong> to give users a premium, native-app feel right in their browser.</p>
    `.trim(),
  },
  {
    slug: "resumind",
    title: "Resumind",
    description:
      "A full-stack AI resume builder leveraging GPT-3.5 to generate optimized, role-specific content with instant editing and export features.",
    image: "/Resumind.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    demoUrl: "https://resumind-ebon.vercel.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Resumind",
    content: `
<h2>The Problem</h2>
<p>Crafting a resume that actually gets past Applicant Tracking Systems (ATS) is a nightmare for most job seekers. They spend hours formatting Word documents instead of focusing on their actual achievements. <strong>Resumind</strong> was born to automate this entirely.</p>

<h2>How It Works</h2>
<p>Under the hood, Resumind uses the <strong>OpenAI GPT-3.5 API</strong>. Users input their raw experiences, skills, and the specific job role they are targeting. The AI then processes this data, extracting key metrics and rewriting bullet points to be action-oriented and ATS-friendly.</p>

<h2>Technical Implementation</h2>
<ul>
  <li><strong>Frontend:</strong> Built entirely in <strong>React</strong> and <strong>Next.js</strong>, offering a blazingly fast, client-side editor where users see their resume update in real-time.</li>
  <li><strong>State Management:</strong> Complex form states are managed efficiently to ensure the live preview never lags, even with heavy text inputs.</li>
  <li><strong>Export:</strong> Implemented a robust PDF generation engine that takes the DOM node of the resume preview and cleanly exports it to a perfectly formatted A4 PDF.</li>
</ul>

<h2>The Result</h2>
<p>A completely frictionless tool that takes a user from a blank screen to an interview-ready PDF in under 5 minutes.</p>
    `.trim(),
  },
  {
    slug: "roomify",
    title: "Rommify",
    description:
      "AI-powered architectural visualization SaaS that transforms 2D floor plans into photorealistic 3D renders. Powered by Claude & Gemini with permanent hosting, KV storage, and a global community feed.",
    image: "/Roomify.png",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Puter", "Claude", "Gemini"],
    demoUrl: "https://airoomify.netlify.app//",
    githubUrl: "https://github.com/Zuhaib-dev/Roomify",
    content: `
<h2>Redefining Architectural Visualization</h2>
<p>For decades, turning a flat 2D floor plan into a 3D visualization required expensive software like AutoCAD or SketchUp, plus hours of manual modeling. <strong>Roomify</strong> democratizes this process using cutting-edge generative AI.</p>

<h2>The AI Engine</h2>
<p>The core innovation of Roomify is its multi-model AI approach. It leverages both <strong>Claude</strong> and <strong>Gemini</strong> to analyze uploaded 2D floor plans. The AI understands spatial relationships, wall placements, and room types, and then generates stunning, photorealistic 3D interior renders.</p>

<h2>Infrastructure & Hosting</h2>
<p>Roomify utilizes <strong>Puter.js</strong> for its backend architecture. This provided an incredible advantage:</p>
<ul>
  <li><strong>Permanent Hosting:</strong> Ensuring the app remains live without continuous DevOps maintenance.</li>
  <li><strong>KV Storage:</strong> Fast, globally distributed key-value storage keeps track of user generations and the global community feed.</li>
  <li><strong>Global Feed:</strong> Users can publish their best generations to a Pinterest-style community board.</li>
</ul>

<h2>Why Vite?</h2>
<p>I chose <strong>Vite</strong> + <strong>React</strong> for the frontend because the application relies heavily on massive image processing and complex state. Vite's instant HMR (Hot Module Replacement) made the development cycle incredibly fast.</p>
    `.trim(),
  },
  {
    slug: "carepulse",
    title: "CarePulse",
    description:
      "A real-time healthcare dashboard for hospitals, tracking patient vitals via API integrations and providing automated, actionable alerts to healthcare professionals.",
    image: "/Carepulse.png",
    tags: ["React.js", "Nextjs", "Tailwind CSS", "Typescript", "Appwrite"],
    demoUrl: "https://hms-seven-green.vercel.app/",
    githubUrl: "https://github.com/Zuhaib-dev/HMS",
    content: `
<h2>Modernizing Healthcare Operations</h2>
<p>Hospitals generate thousands of data points per minute, but much of that data is siloed. <strong>CarePulse</strong> is designed as a centralized, real-time command center for healthcare professionals to monitor patient vitals, manage appointments, and track critical alerts.</p>

<h2>Backend as a Service (BaaS) with Appwrite</h2>
<p>To ensure HIPAA-level security and real-time capabilities without writing a massive custom backend, I utilized <strong>Appwrite</strong>. It handles:</p>
<ul>
  <li><strong>Secure Authentication:</strong> Role-based access control ensuring doctors only see relevant patient data.</li>
  <li><strong>Real-time Databases:</strong> When a patient's vitals cross a dangerous threshold, the database pushes a real-time event directly to the Next.js frontend, triggering a dashboard alert instantly.</li>
  <li><strong>Storage:</strong> Securely holding medical documents and patient history files.</li>
</ul>

<h2>The Dashboard Experience</h2>
<p>The UI is heavily data-driven. Using <strong>Tailwind CSS</strong>, I designed a dark-mode optimized dashboard that reduces eye strain for nurses working night shifts. The layout prioritizes the most critical data (active emergencies) while allowing deep dives into historical patient metrics.</p>
    `.trim(),
  },
  // ── Extra projects shown on /projects page ───────────────────────────────
  {
    slug: "kilamate",
    title: "Kilamate",
    description:
      "A modern weather forecasting app displaying real-time weather data with interactive charts, a sleek UI, and responsive design.",
    image: "/Kilamate.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    demoUrl: "https://kilamate.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Kilamate",
  },
  {
    slug: "lenscapes",
    title: "Lenscapes",
    description:
      "A visually stunning photography portfolio showcasing creative works, breathtaking landscapes, and timeless portraits — built to highlight artistry and storytelling.",
    image: "/Lenscapes.png",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PWA"],
    demoUrl: "https://lenscapes.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/photography",
  },
  {
    slug: "friend-circle",
    title: "Friend Circle",
    description:
      "A dynamic website showcasing my adventurous friend circle with profiles, testimonials, and stunning visuals of our trips and hobbies.",
    image: "/FriendCirclee.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB", "NextAuth", "Zod", "Radix UI"],
    demoUrl: "https://friendcirclee.netlify.app/",
    githubUrl: "https://zuhaib-dev.github.io/Friend-circle",
  },
  {
    slug: "dealdrop",
    title: "DealDrop",
    description:
      "A full-stack price tracker with lightning-fast scraping via Firecrawl, interactive price history charts, instant email alerts via Resend, smart anti-bot proxies, and Google OAuth via Supabase.",
    image: "/dealDrop.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Firecrawl", "Resend", "Recharts"],
    demoUrl: "https://dealdropp.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/DealDrop",
  },
  {
    slug: "repoviz",
    title: "Repoviz",
    description:
      "A modern web app to visualize GitHub repository README files and folder structures instantly — with syntax highlighting, interactive tree views, repo stats, export options, and a premium glassmorphism UI.",
    image: "/Repoviz.png",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Axios", "Lenis"],
    demoUrl: "https://repoviz.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Repoviz",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
