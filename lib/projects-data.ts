export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  npmUrl?: string;
  weeklyDownloads?: string;
  label?: string;
  content?: string;
  quickstart?: {
    intro: string;
    dependencies: string[];
    steps: Array<{ title: string; description: string; code: string; language: string }>;
  };
}

export const projects: Project[] = [
  // ── Top 4 shown on homepage ──────────────────────────────────────────────
  {
    slug: "flourish-ui",
    title: "Flourish UI",
    description:
      "A premium, highly interactive UI component library for modern web apps, with 54+ crafted components and design experiments built with React, Next.js, WebGL, Framer Motion, and Tailwind CSS.",
    image: "/Flourish-UI.webp",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "WebGL", "UI Components"],
    demoUrl: "https://flourish-ui.vercel.app",
    githubUrl: "https://github.com/Zuhaib-dev/Flourish-UI",
    quickstart: {
      intro: "Install a component directly into your app, then own and customize the source code.",
      dependencies: ["framer-motion", "lucide-react"],
      steps: [
        {
          title: "Initialize shadcn/ui",
          description: "Run once in a Next.js or React project that uses shadcn/ui.",
          language: "shell",
          code: "pnpm dlx shadcn@latest init",
        },
        {
          title: "Add Botanical Pixel Dispersion",
          description: "The registry copies editable source into components/flourish/.",
          language: "shell",
          code: "pnpm dlx shadcn@latest add https://flourish-ui.vercel.app/r/botanical-pixel-dispersion.json",
        },
        {
          title: "Install its dependencies",
          description: "Add the animation and icon packages used by this registry component.",
          language: "shell",
          code: "pnpm add framer-motion lucide-react",
        },
        {
          title: "Render the component",
          description: "Import the generated component into any page or section.",
          language: "tsx",
          code: 'import { BotanicalPixelDispersion } from "@/components/flourish/botanical-pixel-dispersion";\n\nexport default function Page() {\n  return <BotanicalPixelDispersion />;\n}',
        },
      ],
    },
    content: `
<h2>A component library shaped by digital craft</h2>
<p><strong>Flourish UI</strong> is an ongoing exploration of polished, tactile interface design. Its collection includes more than 54 high-fidelity components and design experiments for modern web applications.</p>
<h2>Made to feel interactive</h2>
<p>Components combine React and Next.js with Tailwind CSS, Framer Motion, and WebGL. The collection ranges from expressive text and shader effects to navigation, galleries, forms, dashboards, and editorial layouts.</p>
<h2>Explore and build</h2>
<p>Browse the live library to preview the components, or visit the open-source repository to explore the implementation and contribute.</p>
    `.trim(),
  },
  {
    slug: "traceora",
    title: "Traceora",
    description:
      "Next-generation runtime intelligence and telemetry for modern applications. Traceora connects browser and backend events in a bounded local timeline, with optional trace ID propagation through trace.fetch(). Used by 4K+ developers per week.",
    image: "/Traceora.webp",
    tags: ["TypeScript", "React", "Next.js", "Vite", "OpenTelemetry", "Playwright", "Express.js"],
    demoUrl: "https://traceora-web.vercel.app/",
    githubUrl: "https://github.com/zuhaib-dev/traceora",
    npmUrl: "https://www.npmjs.com/package/@traceora/core",
    weeklyDownloads: "4K+ developers / week",
    quickstart: {
      intro: "Add Traceora to a React + Vite app and open its floating timeline while you work.",
      dependencies: ["@traceora/core", "@traceora/react", "@traceora/vite-plugin"],
      steps: [
        {
          title: "Install the React + Vite packages",
          description: "The core event engine, React bindings, and Vite instrumentation plugin.",
          language: "shell",
          code: "npm install @traceora/core @traceora/react @traceora/vite-plugin",
        },
        {
          title: "Enable component instrumentation",
          description: "Place Traceora before the React plugin so it can transform supported components.",
          language: "tsx",
          code: 'import { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\nimport { traceoraPlugin } from "@traceora/vite-plugin";\n\nexport default defineConfig({\n  plugins: [traceoraPlugin(), react()],\n});',
        },
        {
          title: "Wrap the app and mount DevTools",
          description: "The provider, error boundary, and floating timeline capture local development activity.",
          language: "tsx",
          code: 'import {\n  TraceoraProvider,\n  TraceoraErrorBoundary,\n  TraceoraDevtools,\n} from "@traceora/react";\n\n<TraceoraProvider>\n  <TraceoraErrorBoundary>\n    <App />\n    <TraceoraDevtools />\n  </TraceoraErrorBoundary>\n</TraceoraProvider>',
        },
      ],
    },
    content: `
<h2>Runtime intelligence for modern apps</h2>
<p><strong>Traceora</strong> records browser and backend events in a bounded local timeline. Pass a trace handle to <code>trace.fetch()</code> to connect an interaction with its request under a shared trace ID.</p>
<h2>Developer focused diagnostics</h2>
<ul>
  <li><strong>Browser diagnostics:</strong> Capture network timing, errors, route changes, and component lifecycle events in local DevTools.</li>
  <li><strong>IDE navigation and network mocking:</strong> Jump from an error to its source location, or intercept a request and simulate responses.</li>
  <li><strong>Portable reports:</strong> Export versioned, sanitized diagnostic reports for offline inspection or CI.</li>
  <li><strong>Playwright support:</strong> Attach browser timelines to failed and flaky tests.</li>
  <li><strong>Performance clues:</strong> Correlate render, network, and database timings with evidence-linked investigation suggestions.</li>
  <li><strong>OpenTelemetry bridge:</strong> Convert events to spans or load OTLP-style spans into the local timeline.</li>
  <li><strong>Framework packages:</strong> React bindings, Next.js App Router diagnostics, Vite component instrumentation, Express middleware, and Node.js integrations.</li>
</ul>
<h2>Packages</h2>
<p>The ecosystem includes <code>@traceora/core</code>, <code>@traceora/react</code>, <code>@traceora/next</code>, <code>@traceora/vite-plugin</code>, <code>@traceora/express</code>, <code>@traceora/node</code>, and <code>@traceora/playwright</code>. The core package is available on npm.</p>
<h2>Privacy-aware by default</h2>
<p>Development instrumentation is enabled by default. The event buffer keeps the latest 1,000 events, and request bodies and headers are not captured unless explicitly enabled. Performance suggestions are investigation clues, not automatic diagnoses.</p>
    `.trim(),
  },
  {
    slug: "healos",
    title: "HealOS",
    description:
      "A comprehensive, centralized platform designed to streamline healthcare operations with a sleek, intuitive, and highly responsive interface.",
    image: "/HealOs.webp",
    tags: ["Next.js 15", "React 19", "Tailwind", "Framer Motion", "Zustand", "React Query", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    demoUrl: "https://healos-theta.vercel.app/",
    githubUrl: "https://github.com/zuhaib-dev/HealOS",
    label: "Building 🚀",
    content: `
<h2>Streamlining Healthcare Operations</h2>
<p>HealOS is a comprehensive, centralized platform designed to streamline healthcare operations. Whether it's managing patient records, scheduling appointments, or handling staff rosters and billing, HealOS provides a sleek, intuitive, and highly responsive interface to make hospital administration effortless.</p>

<h2>Frontend Architecture</h2>
<ul>
  <li><strong>Core:</strong> Next.js 15 (App Router) & React 19 with strict client/server component separation.</li>
  <li><strong>Styling & UI:</strong> Tailwind CSS v4 using modern logical properties, custom Emerald Prestige Design System, and Framer Motion.</li>
  <li><strong>State & Data:</strong> Zustand for global state and TanStack React Query for server state caching.</li>
</ul>

<h2>Backend Infrastructure</h2>
<ul>
  <li><strong>API & Runtime:</strong> Node.js & Express.js written in strictly typed TypeScript.</li>
  <li><strong>Database:</strong> MongoDB & Mongoose for NoSQL data modeling.</li>
  <li><strong>Real-time:</strong> Socket.io for immediate clinical updates via Pub/Sub.</li>
  <li><strong>Integrations:</strong> JWT for Role-Based Access Control (RBAC) and Razorpay API for online billing.</li>
</ul>
    `.trim(),
  },
  {
    slug: "rydexx",
    title: "Rydexx",
    description:
      "Rydex lets you book bikes, cars, and trucks instantly. Fast, affordable, and reliable vehicle booking at your fingertips.",
    image: "/rydexx.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Auth.js", "NextAuth", "Framer Motion", "Axios", "ZegoCloud", "MongoDB", "Cloudinary"],
    demoUrl: "https://rydexx.netlify.app/",
    githubUrl: "https://github.com/zuhaib-dev/rydex",
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
    image: "/Resumind.webp",
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
    image: "/Roomify.webp",
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
    image: "/Carepulse.webp",
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
    slug: "friend-circle",
    title: "Friend Circle",
    description:
      "A dynamic website showcasing my adventurous friend circle with profiles, testimonials, and stunning visuals of our trips and hobbies.",
    image: "/FriendCirclee.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB", "NextAuth", "Zod", "Radix UI"],
    demoUrl: "https://friendcirclee.netlify.app/",
    githubUrl: "https://zuhaib-dev.github.io/Friend-circle",
  },
  {
    slug: "kilamate",
    title: "Kilamate",
    description:
      "A modern weather forecasting app displaying real-time weather data with interactive charts, a sleek UI, and responsive design.",
    image: "/Kilamate.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    demoUrl: "https://kilamate.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Kilamate",
  },
  {
    slug: "lenscapes",
    title: "Lenscapes",
    description:
      "A visually stunning photography portfolio showcasing creative works, breathtaking landscapes, and timeless portraits — built to highlight artistry and storytelling.",
    image: "/Lenscapes.webp",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PWA"],
    demoUrl: "https://lenscapes.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/photography",
  },
  
  {
    slug: "dealdrop",
    title: "DealDrop",
    description:
      "A full-stack price tracker with lightning-fast scraping via Firecrawl, interactive price history charts, instant email alerts via Resend, smart anti-bot proxies, and Google OAuth via Supabase.",
    image: "/dealDrop.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Firecrawl", "Resend", "Recharts"],
    demoUrl: "https://dealdropp.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/DealDrop",
  },
  {
    slug: "repoviz",
    title: "Repoviz",
    description:
      "A modern web app to visualize GitHub repository README files and folder structures instantly — with syntax highlighting, interactive tree views, repo stats, export options, and a premium glassmorphism UI.",
    image: "/Repoviz.webp",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Axios", "Lenis"],
    demoUrl: "https://repoviz.netlify.app/",
    githubUrl: "https://github.com/Zuhaib-dev/Repoviz",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
