export interface Blog {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage: string;   // path in /public
  readTime: string;
  content: string;      // HTML string (code blocks use <pre><code class="language-*">)
}

export const blogs: Blog[] = [
  {
    slug: "from-lighthouse-to-agentic-scores-building-for-ai-agents",
    title: "From Lighthouse to Agentic Scores: The Architectural Evolution of Web Development for AI Agents",
    description:
      "How web architecture evolved from sitemaps, meta tags, and Lighthouse 100/100 to llms.txt, agents.md, MCP, and AI Readiness audits on is-agentic and ora.ai.",
    date: "August 29, 2026",
    tags: ["AI Agents", "Web Development", "Architecture", "SEO", "Next.js"],
    coverImage: "/agentic-web-dev.jpg",
    readTime: "12 min read",
    content: `
<h2>The Silent Paradigm Shift: The Web Has a New User</h2>
<p>For three decades, web development revolved around a singular premise: <strong>optimizing for human visual consumption</strong>. We crafted layouts for retina screens, compressed responsive images, minimized Largest Contentful Paint (LCP), and chased the elusive 100/100 score on Google Lighthouse.</p>
<p>Search engines crawled our sites with dumb spiders that indexed keywords. We handed them a <code>robots.txt</code> to set boundaries and a <code>sitemap.xml</code> to guide their path. That was the contract.</p>
<p>In 2026, that contract has fundamentally broken.</p>
<p>Today, your website is frequently visited, parsed, and acted upon by <strong>autonomous AI agents</strong> — LLM web searchers (Perplexity, ChatGPT Search, Gemini), AI browser agents (Claude Computer Use, Operator), coding assistants (Antigravity, Cursor, Devin), and automated task executors. These agents don't gaze at CSS gradients or admire micro-interactions; they execute goal-directed loops, extract structured knowledge, and invoke API actions on behalf of humans.</p>

<div class="my-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
  <img src="/agentic-web-dev.jpg" alt="From Google Lighthouse to AI Autonomous Agent Readiness" class="w-full h-auto" />
</div>

<p>This reality has triggered the biggest architectural shift in frontend engineering since responsive web design: <strong>The transition from SEO to Agentic AI Readiness</strong>.</p>

<h2>The Old Playbook vs. The Agentic Reality</h2>
<p>Let's contrast where we were just a few years ago with where modern web engineering is today:</p>

<div class="my-6 overflow-x-auto">
  <table class="w-full text-left text-sm border-collapse border border-white/10 rounded-lg">
    <thead>
      <tr class="bg-muted/30 text-white font-semibold">
        <th class="p-3 border border-white/10">Dimension</th>
        <th class="p-3 border border-white/10">Traditional Web (SEO Era)</th>
        <th class="p-3 border border-white/10">Agentic Web (2026 & Beyond)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-white/10 text-muted-foreground">
      <tr>
        <td class="p-3 font-medium text-foreground">Primary Consumer</td>
        <td class="p-3">Human eyes & Web crawlers (Googlebot)</td>
        <td class="p-3">Humans + Autonomous AI Agents & LLMs</td>
      </tr>
      <tr>
        <td class="p-3 font-medium text-foreground">Discovery Protocols</td>
        <td class="p-3"><code>sitemap.xml</code>, <code>robots.txt</code>, OpenGraph</td>
        <td class="p-3"><code>llms.txt</code>, <code>agents.md</code>, <code>/.well-known/ard.json</code></td>
      </tr>
      <tr>
        <td class="p-3 font-medium text-foreground">Interface Format</td>
        <td class="p-3">Heavy HTML / CSS DOM tree, Hydrated SPAs</td>
        <td class="p-3">Semantic Markdown, Tool Schemas, OpenAPI REST</td>
      </tr>
      <tr>
        <td class="p-3 font-medium text-foreground">Benchmark Metrics</td>
        <td class="p-3">Google Lighthouse (LCP, FID/INP, CLS, SEO)</td>
        <td class="p-3">Agent Readiness (is-agentic, ora.ai, Token Density)</td>
      </tr>
      <tr>
        <td class="p-3 font-medium text-foreground">Interaction Model</td>
        <td class="p-3">Clicking buttons, filling forms with mouse/touch</td>
        <td class="p-3">Function calling, WebMCP tools, headless transactions</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>The Essential Agentic Manifest Stack</h2>
<p>If you want your website or SaaS to be discoverable and reliably actionable by AI models, shipping a standard HTML bundle is no longer enough. Here is the modern manifest stack that modern web applications must implement:</p>

<h3>1. <code>/llms.txt</code> and <code>/llms-full.txt</code></h3>
<p>Pioneered by Jeremy Howard and Answer.AI, <code>llms.txt</code> is to LLMs what <code>sitemap.xml</code> was to Google. When an agent lands on your domain, ingesting 500KB of Minified React JS and CSS markup wastes valuable context window tokens and introduces hallucination risks.</p>
<p>A <code>llms.txt</code> file is a standardized, clean Markdown file at the root of your domain providing concise context, high-level summaries, and direct links to documentation formatted in clean Markdown.</p>

<pre><code class="language-markdown"># Zuhaib Rashid - Portfolio & Agent Surface

## Context
Zuhaib Rashid is a Full Stack Developer specializing in React, Next.js, and TypeScript.

## Key Resources
- [Full Resume](/resume): Structured interactive CV
- [Open Source Projects](/projects): Portfolio of production web apps
- [Technical Blog](/blogs): Deep dives into modern architecture

## Machine Interfaces
- [OpenAPI Spec](/openapi.json): Programmatic API definitions
- [Agent Navigation](/agents.md): Autonomous agent operational rules</code></pre>

<h3>2. <code>/agents.md</code> (or <code>AGENTS.md</code>)</h3>
<p>While <code>robots.txt</code> tells crawlers which paths they can or cannot index, <code>agents.md</code> provides operational guidance, constraints, rate limits, and behavioral guardrails for interactive agents.</p>
<p>It explicitly answers: <em>How should an agent authenticate? What actions have side effects? Which endpoints are idempotent? Where is the rate limit ceiling?</em></p>

<h3>3. <code>/openapi.json</code> & Structured Tool Calling</h3>
<p>Instead of forcing vision models and DOM-parsers to figure out which input element inside an unlabelled <code>&lt;div&gt;</code> is the search bar, agentic web apps expose an <code>openapi.json</code> schema at their root. This allows any agent to directly invoke backend functions with zero UI ambiguity.</p>

<pre><code class="language-json">{
  "openapi": "3.0.0",
  "info": {
    "title": "Zuhaib Portfolio Agent API",
    "version": "1.0.0"
  },
  "paths": {
    "/api/github": {
      "get": {
        "summary": "Retrieve public GitHub metrics and star counts",
        "responses": {
          "200": {
            "description": "JSON payload containing live repo statistics"
          }
        }
      }
    }
  }
}</code></pre>

<h3>4. <code>/.well-known/ard.json</code> (Agent Resource Discovery)</h3>
<p>Similar to <code>/.well-known/security.txt</code> or <code>apple-app-site-association</code>, <code>ard.json</code> allows AI browser extensions, agents, and IDEs to instantly discover capabilities without guessing URLs.</p>

<h2>The Scoring Revolution: From Lighthouse to is-agentic & ora.ai</h2>
<p>For over a decade, engineering teams celebrated when their Lighthouse score hit all green 100s. But a site with a 100/100 Lighthouse score can easily score a miserable <strong>15% on an Agentic Audit</strong>.</p>

<p>Why? Because Lighthouse checks whether a human on a 4G mobile device can view rendered pixels within 2.5 seconds. It does not check if an LLM can understand your site's data flow, whether dynamic hydration breaks headless DOM parsers, or whether your forms are protected against bot hallucination.</p>

<div class="my-8 p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20">
  <h4 class="text-lg font-bold text-violet-400 mb-2">⚡ The Rise of Agentic Audit Platforms</h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Platforms like <strong>is-agentic.org</strong>, <strong>ora.ai</strong>, and <strong>AI Readiness Indexers</strong> have emerged to test how seamlessly AI agents can crawl, reason about, and interact with your web application.
  </p>
</div>

<h3>What Do Agentic Readiness Scores Actually Measure?</h3>
<p>When an auditor like <code>is-agentic</code> or <code>ora.ai</code> tests your application, it evaluates four core pillars:</p>

<ol>
  <li>
    <strong>Context Density & Token Efficiency (Weight: ~30%):</strong>
    <p>How much meaningful information does an agent receive per token spent? If fetching a single blog post requires parsing 80KB of Tailwind classes and boilerplate React hydration script tags vs. a clean 3KB Markdown response, the token efficiency score drops drastically.</p>
  </li>
  <li>
    <strong>Actionability & Accessibility Tree (Weight: ~25%):</strong>
    <p>Does the site rely on <code>&lt;div onClick={...}&gt;</code> or properly structured semantic HTML? Are buttons identifiable with deterministic <code>aria-label</code> or <code>data-testid</code> attributes? Can headless browsers navigate forms without encountering hidden reCAPTCHA dead-ends?</p>
  </li>
  <li>
    <strong>Machine Interface Discovery (Weight: ~25%):</strong>
    <p>Are <code>/llms.txt</code>, <code>/agents.md</code>, and <code>/openapi.json</code> present, well-formed, and linked in response headers (such as <code>Link: &lt;/llms.txt&gt;; rel="llm-manifest"</code>)?</p>
  </li>
  <li>
    <strong>Tool Calling Latency & Determinism (Weight: ~20%):</strong>
    <p>When an agent calls an API route, does it return predictable JSON with clear error schemas, or does it return unexpected HTML error pages that cause the LLM to crash?</p>
  </li>
</ol>

<h2>How to Build an Agentic-First Next.js Web App</h2>
<p>Let's look at how to implement these patterns in a modern Next.js (App Router) project.</p>

<h3>Step 1: Dynamic <code>/llms.txt</code> Generation</h3>
<p>Instead of hardcoding a static text file that gets outdated whenever you publish a blog, you can generate <code>llms.txt</code> dynamically from your database or content files:</p>

<pre><code class="language-typescript">// app/llms.txt/route.ts
import { blogs } from "@/lib/blogs";
import { projects } from "@/lib/projects-data";

export async function GET() {
  const content = \`# Zuhaib Rashid - Portfolio Manifest

## Summary
Full Stack Developer portfolio featuring production web apps, engineering blogs, and public APIs.

## Projects
\${projects.map((p) => \`- [\${p.title}](\${p.liveUrl || p.githubUrl}): \${p.description}\`).join("\\n")}

## Recent Articles
\${blogs.map((b) => \`- [\${b.title}](https://www.zuhaibrashid.com/blogs/\${b.slug}): \${b.description}\`).join("\\n")}

## API Surfaces
- OpenAPI Specification: https://www.zuhaibrashid.com/openapi.json
- Agents Guide: https://www.zuhaibrashid.com/agents.md
\`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}</code></pre>

<h3>Step 2: Semantic Markup Over "Div Soup"</h3>
<p>Vision-based agents and DOM scrapers struggle when everything is a <code>&lt;div&gt;</code>. Use native semantic HTML elements:</p>

<pre><code class="language-tsx">// ❌ Bad for AI Agents: Generic div soup
&lt;div className="card" onClick={handleClick}&gt;
  &lt;div className="title"&gt;Read Article&lt;/div&gt;
&lt;/div&gt;

// ✅ Great for AI Agents & Humans: Semantic, accessible, actionable
&lt;article aria-labelledby="post-heading"&gt;
  &lt;h2 id="post-heading"&gt;From Lighthouse to Agentic Scores&lt;/h2&gt;
  &lt;Link href="/blogs/from-lighthouse-to-agentic-scores" aria-label="Read full article"&gt;
    Read Article
  &lt;/Link&gt;
&lt;/article&gt;</code></pre>

<h3>Step 3: Intelligent Bot Handling & Honeypots</h3>
<p>Building for AI agents doesn't mean leaving your servers open to malicious spam. The best architecture combines open agent manifests for read operations with <strong>honeypot verification and rate limiting</strong> for mutating endpoints (like contact forms):</p>

<pre><code class="language-typescript">// app/api/send-email/route.ts
export async function POST(req: Request) {
  const { name, email, message, website } = await req.json();

  // Honeypot field: invisible to legitimate users, filled by naive bots
  if (website) {
    return Response.json({ success: true, message: "Sent" }); // Silent drop
  }

  // Process verified message with nodemailer...
}</code></pre>

<h2>The Future: The Dual-Interface Web</h2>
<p>We are entering the era of the <strong>Dual-Interface Web</strong>. Your website must serve two equally important audiences:</p>
<ul>
  <li><strong>The Human User:</strong> Desires aesthetic beauty, micro-animations, intuitive ergonomics, and emotional connection.</li>
  <li><strong>The AI Agent:</strong> Desires compact token density, clear schema definitions, deterministic tool calling, and high machine readability.</li>
</ul>
<p>The developers and companies that build for both won't just rank higher on traditional Google search — they will be the primary sources cited, navigated, and utilized by the AI agents that are quickly becoming the front door to the entire internet.</p>
<p>Optimize your Lighthouse score for humans. Optimize your <code>llms.txt</code> and <code>is-agentic</code> score for AI. That is the new standard of excellence.</p>
    `.trim(),
  },
  {
    slug: "escaping-tutorial-hell-as-a-developer",
    title: "Stop Tutorial Hell: How I Actually Got Good at Full Stack",
    description:
      "My journey from watching endless 10-hour bootcamp videos to actually shipping real production applications.",
    date: "May 11, 2026",
    tags: ["Career", "Web Development", "Learning"],
    coverImage: "/tutorial-hell-v2.webp",
    readTime: "7 min read",
    content: `
<h2>The Endless Loop of Learning</h2>
<p>We've all been there. You find a shiny new 10-hour "Complete Web Dev Bootcamp" on YouTube. You follow along, type out exactly what the instructor types, and by the end, you have a working Twitter clone. You feel invincible. You're a developer now.</p>
<p>But then, you open a blank VS Code window to build your own idea. And suddenly... nothing. Your mind goes blank. You don't know where to start. So what do you do? You look for another tutorial.</p>
<p>Welcome to <strong>Tutorial Hell</strong>.</p>

<div class="my-8 rounded-xl overflow-hidden border border-white/10">
  <img src="/tutorial-hell-v2.webp" alt="Escaping Tutorial Hell" class="w-full h-auto" />
</div>

<h2>Why Tutorials Fail Us</h2>
<p>Tutorials are optimized for completion, not comprehension. Instructors edit out the 4 hours they spent debugging a CORS issue. They skip the part where they couldn't figure out why their flexbox layout was breaking. They give you the happy path.</p>
<p>But software engineering isn't about walking the happy path. It's about hacking your way through the jungle with a machete when the path disappears. When you only follow tutorials, you rob yourself of the most important skill a developer can have: <strong>problem-solving through struggle</strong>.</p>

<h2>How I Escaped (And How You Can Too)</h2>

<h3>1. The "Plus One" Rule</h3>
<p>If you <em>must</em> do a tutorial, never build exactly what the instructor builds. If they build a Todo app, build a Habit Tracker. If they build a blog, build a recipe directory. Force yourself to adapt their logic to your own domain. This breaks the copy-paste cycle.</p>

<h3>2. Embrace the Blank Canvas</h3>
<p>The anxiety of the blank VS Code window is exactly what you need to overcome. Start small. Instead of "I'm going to build a full-stack SaaS", start with "I'm going to build a button that fetches a random joke from an API and displays it."</p>

<h3>3. Read the Docs (Seriously)</h3>
<p>I used to avoid documentation because it felt too dense. But docs are the source of truth. Next time you want to learn a library like Framer Motion or a framework like Next.js, try reading the "Getting Started" page in their official docs instead of searching for a video.</p>

<h3>4. Ship Broken Things</h3>
<p>Perfectionism keeps you in tutorial hell. Your first independent project will have messy code. The CSS will be a disaster. The database schema will be inefficient. <strong>Ship it anyway.</strong></p>
<p>I learned more from deploying a buggy version of <em>Rydexx</em> and fixing things as they broke than I did from 100 hours of video courses.</p>

<h2>The Tipping Point</h2>
<p>You know you've escaped when you encounter a bug, paste the error into Google or ask an AI, and actually <em>understand</em> why the solution works before pasting it into your code.</p>
<p>Stop watching. Start building. The struggle is the learning.</p>
    `.trim(),
  },
  {
    slug: "nextjs-security-issues-and-prevention",
    title: "Next.js Security: Recent Vulnerabilities and How to Prevent Them",
    description:
      "A deep dive into recent Next.js security issues like SSRF in Server Actions and RSC vulnerabilities, with practical steps to secure your app.",
    date: "April 23, 2026",
    tags: ["Next.js", "Security", "Web Development", "DevOps"],
    coverImage: "/nextjs-security-issues.webp",
    readTime: "8 min read",
    content: `
<h2>The Shift in Next.js Security</h2>
<p>As Next.js evolves from a simple SSR framework to a full-stack powerhouse with Server Components and Server Actions, the attack surface has shifted. Recent vulnerabilities have highlighted that with great power comes great responsibility — especially when it comes to how we handle server-side logic and data flow.</p>

<div class="my-8 rounded-xl overflow-hidden border border-white/10">
  <img src="/nextjs-security-issues.webp" alt="Next.js Security" class="w-full h-auto" />
</div>

<h2>1. CVE-2024-34351: SSRF in Server Actions</h2>
<p>One of the most talked-about vulnerabilities recently was a Server-Side Request Forgery (SSRF) flaw in Next.js Server Actions. If you were using a version earlier than 14.1.1 and self-hosting your app, an attacker could potentially make unauthorized requests from your server.</p>
<p><strong>The Trigger:</strong> This happened when a Server Action performed a redirect to a relative path starting with a forward slash (<code>/</code>). Attackers could manipulate the <code>Host</code> header to trick the server into requesting internal metadata services (like AWS's 169.254.169.254).</p>

<h3>How to Prevent It:</h3>
<ul>
  <li><strong>Upgrade:</strong> The absolute first step is upgrading to Next.js 14.1.1 or higher.</li>
  <li><strong>Host Header Validation:</strong> If you are self-hosting on a custom server (like Express or Nginx), ensure you are validating the <code>Host</code> header.</li>
  <li><strong>Network Isolation:</strong> Block outbound requests to internal IP ranges from your application server.</li>
</ul>

<h2>2. React2Shell (CVE-2025-66478)</h2>
<p>Late in 2025, a critical vulnerability dubbed "React2Shell" sent shockwaves through the community. It targeted the React Server Components (RSC) protocol, potentially allowing Remote Code Execution (RCE) in certain configurations.</p>
<p>This vulnerability exploited the way the RSC payload was parsed on the server, allowing malicious payloads to be executed with the privileges of the application process.</p>

<h3>How to Prevent It:</h3>
<ul>
  <li><strong>Stay Updated:</strong> This is a recurring theme. Security patches for RSC and Next.js are released frequently.</li>
  <li><strong>Rotate Secrets:</strong> If you suspect your app was vulnerable during the peak of this incident, rotate all environment variables and API keys immediately.</li>
</ul>

<h2>3. Server Actions & Data Exposure</h2>
<p>Beyond specific CVEs, a common issue is the improper use of Server Actions. Since Server Actions are essentially POST endpoints, they are public by default. Developers often forget to implement proper authorization checks inside the action itself.</p>

<pre><code class="language-tsx">// ❌ VULNERABLE: No authorization check
export async function deletePost(postId: string) {
  await db.post.delete({ where: { id: postId } });
}

// ✅ SECURE: Authorization check included
export async function deletePost(postId: string) {
  const session = await auth();
  if (!session || session.user.role !== 'admin') {
    throw new Error("Unauthorized");
  }
  await db.post.delete({ where: { id: postId } });
}</code></pre>

<h2>General Security Best Practices</h2>
<p>To keep your Next.js application secure in 2026, follow these core principles:</p>
<ul>
  <li><strong>Use Taint APIs:</strong> React now provides <code>experimental_taintUniqueValue</code> and <code>experimental_taintObjectReference</code> to prevent sensitive data from being accidentally passed to the client.</li>
  <li><strong>Validate All Input:</strong> Use libraries like <strong>Zod</strong> to validate every piece of data coming into a Server Action or Route Handler.</li>
  <li><strong>Content Security Policy (CSP):</strong> Implement a strict CSP to mitigate XSS and data injection attacks. Next.js makes this easier with nonces.</li>
  <li><strong>Principle of Least Privilege:</strong> Your database user should only have the permissions necessary for the app to function. Don't use a 'root' or 'admin' user for your app's connection.</li>
</ul>

<h2>Conclusion</h2>
<p>Security is not a feature; it's a foundation. As Next.js continues to bridge the gap between client and server, understanding these vulnerabilities is crucial for any modern web developer. Keep your dependencies updated, validate everything, and never trust the client.</p>
    `.trim(),
  },
  {
    slug: "how-to-optimize-a-nextjs-app",
    title: "How to Optimize a Next.js App",
    description:
      "Optimize your Next.js web app to make it lightning fast — from image optimization to code splitting and caching strategies.",
    date: "January 31, 2026",
    tags: ["Frontend", "Next.js", "JavaScript", "Performance"],
    coverImage: "/how_to_optimize_nextjs_app.webp",
    readTime: "6 min read",
    content: `
<h2>Why Performance Matters</h2>
<p>A slow web app loses users. Studies show that a 1-second delay in page load time can reduce conversions by 7%. Next.js gives you powerful tools to make your app blazing fast — but you need to use them correctly.</p>

<h2>1. Use the Next.js Image Component</h2>
<p>Replace all <code>&lt;img&gt;</code> tags with Next.js's built-in <code>&lt;Image&gt;</code> component. It automatically handles lazy loading, modern formats (WebP/AVIF), and responsive sizing.</p>
<pre><code class="language-tsx">import Image from 'next/image'

export default function Hero() {
  return (
    &lt;Image
      src="/hero.png"
      alt="Hero"
      width={800}
      height={400}
      priority
    /&gt;
  )
}</code></pre>

<h2>2. Code Splitting with Dynamic Imports</h2>
<p>Don't load everything upfront. Use <code>next/dynamic</code> to lazy-load heavy components:</p>
<pre><code class="language-tsx">import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/Chart'), {
  loading: () => &lt;p&gt;Loading...&lt;/p&gt;,
  ssr: false,
})</code></pre>

<h2>3. Leverage Server Components</h2>
<p>In Next.js 13+, components are Server Components by default. Keep data fetching on the server — it reduces JavaScript sent to the client and improves Time to First Byte (TTFB).</p>
<pre><code class="language-tsx">// This runs on the server — no useEffect needed
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()
  return &lt;div&gt;{json.title}&lt;/div&gt;
}</code></pre>

<h2>4. Use Route Segment Caching</h2>
<p>Cache your API responses and page segments using the <code>revalidate</code> option:</p>
<pre><code class="language-typescript">// app/page.tsx
export const revalidate = 3600 // revalidate every hour

export default async function Page() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 },
  })
  return &lt;div&gt;...&lt;/div&gt;
}</code></pre>

<h2>5. Optimize Fonts</h2>
<p>Use <code>next/font</code> to load Google Fonts with zero layout shift and automatic subsetting:</p>
<pre><code class="language-typescript">import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    &lt;html className={inter.className}&gt;
      &lt;body&gt;{children}&lt;/body&gt;
    &lt;/html&gt;
  )
}</code></pre>

<h2>6. Analyze Your Bundle</h2>
<p>Install <code>@next/bundle-analyzer</code> to visualize what's making your bundle large:</p>
<pre><code class="language-bash">npm install @next/bundle-analyzer
ANALYZE=true npm run build</code></pre>

<h2>Conclusion</h2>
<p>Performance is not a one-time fix — it's a habit. Start with images and fonts, then move to code splitting and caching. Your users (and your Lighthouse score) will thank you.</p>
    `.trim(),
  },
  {
    slug: "what-is-taste-and-how-to-develop-it",
    title: "What is Taste and How Can You Develop It?",
    description:
      "Understanding what taste means in design and development, and practical ways to sharpen your aesthetic sense.",
    date: "December 7, 2025",
    tags: ["Frontend", "Design", "Career"],
    coverImage: "/how_to_taste.gif",
    readTime: "4 min read",
    content: `
<h2>What is Taste?</h2>
<p>Taste is the ability to recognize quality. In design and development, it means knowing the difference between something that <em>works</em> and something that feels <em>right</em>. It's why some UIs feel effortless and others feel clunky — even when both technically function.</p>

<h2>Why Developers Need Taste</h2>
<p>As a developer, taste helps you:</p>
<ul>
  <li>Write cleaner, more readable code</li>
  <li>Build UIs that feel polished without a designer</li>
  <li>Make better product decisions</li>
  <li>Communicate more effectively with designers</li>
</ul>

<h2>How to Develop Taste</h2>

<h3>1. Study great work obsessively</h3>
<p>Look at Dribbble, Linear, Vercel, Stripe, and Raycast. Don't just admire — ask yourself <em>why</em> it works. What spacing, typography, and color choices are they making?</p>

<h3>2. Build and ship constantly</h3>
<p>Taste without execution is just opinion. Build things, get feedback, and iterate. Your taste improves fastest when you're making real decisions under real constraints.</p>

<h3>3. Consume broadly</h3>
<p>Read books on typography, watch talks on design systems, study architecture and film. Taste cross-pollinates — the best designers and developers draw inspiration from everywhere.</p>

<h3>4. Develop strong opinions, loosely held</h3>
<p>Have a point of view. Know why you prefer one approach over another. But stay open to being wrong — taste evolves.</p>

<h2>The Gap</h2>
<p>Ira Glass said it best: when you start, your taste exceeds your ability. That gap is frustrating — but it means you can recognize good work before you can produce it. That recognition is taste. Keep building until your output catches up.</p>
    `.trim(),
  },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}
