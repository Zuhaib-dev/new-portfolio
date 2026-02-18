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
