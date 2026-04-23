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
    slug: "nextjs-security-issues-and-prevention",
    title: "Next.js Security: Recent Vulnerabilities and How to Prevent Them",
    description:
      "A deep dive into recent Next.js security issues like SSRF in Server Actions and RSC vulnerabilities, with practical steps to secure your app.",
    date: "April 23, 2026",
    tags: ["Next.js", "Security", "Web Development", "DevOps"],
    coverImage: "/nextjs-security-issues.png",
    readTime: "8 min read",
    content: `
<h2>The Shift in Next.js Security</h2>
<p>As Next.js evolves from a simple SSR framework to a full-stack powerhouse with Server Components and Server Actions, the attack surface has shifted. Recent vulnerabilities have highlighted that with great power comes great responsibility — especially when it comes to how we handle server-side logic and data flow.</p>

<div class="my-8 rounded-xl overflow-hidden border border-white/10">
  <img src="/nextjs-security-issues.png" alt="Next.js Security" class="w-full h-auto" />
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
    coverImage: "/how_to_optimize_nextjs_app.png",
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
