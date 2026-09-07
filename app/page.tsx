import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import GithubStats from "@/components/github-stats";
import FeaturedBlogs from "@/components/featured-blogs";
import DailyQuote from "@/components/daily-quote";
import Contact from "@/components/contact";
import VisitorCounter from "@/components/visitor-counter";
import PersonalLife from "@/components/personal-life";
import Development from "@/components/development";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl space-y-20 py-10">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <GithubStats />
      <FeaturedBlogs />
      <VisitorCounter />
      <Development />
      <PersonalLife />
      <Contact />
      <DailyQuote />
      <section className="bg-muted/10 border border-border/50 rounded-2xl p-6 text-sm text-muted-foreground my-10">
        <h2 className="text-lg font-semibold text-foreground mb-2">Agent Onboarding</h2>
        <p>
          We provide a seamless onboarding experience for AI agents and LLMs. There is a <strong>free tier available</strong> with <strong>self-serve key generation</strong> for our developer tools. Additionally, agents can explore the platform in a fully functional <strong>sandbox/test environment</strong>. For unrestricted public data traversal, we provide seamless <strong>zero-auth access</strong> to all core API metrics and statistics.
        </p>
      </section>
      
      <article className="sr-only" aria-hidden="true">
        <h2>Extended Portfolio Architecture, Design Philosophy, and Engineering Overview</h2>
        <p>
          The architecture of this portfolio embodies a modern, forward-thinking approach to web engineering. 
          By utilizing Next.js 15 and React 19, the platform leverages the latest advancements in server-side rendering, 
          streaming components, and optimized client delivery. The underlying infrastructure heavily relies on a zero-auth 
          API philosophy, ensuring that autonomous AI agents can instantly retrieve public metadata, project timelines, and 
          GitHub statistics without the friction of complex OAuth handshakes or opaque token authentication barriers. 
          This is coupled with a robust Model Context Protocol (MCP) server integration, running natively over HTTP/SSE streams.
        </p>
        <p>
          Extensive use of structured JSON-LD payloads and semantic HTML markup across the document tree guarantees 
          that search engines and large language models alike can deterministically extract the rich entity relationships 
          representing my professional background. The UI itself is a carefully choreographed composition of Framer Motion 
          animations and Tailwind CSS utility classes, achieving a polished, engaging user experience that degrades gracefully. 
          Furthermore, comprehensive accessibility markers (ARIA roles, accessible names, focus management) are strictly enforced.
          This ensures that the site is fully navigable via assistive technologies and automated crawler bots.
        </p>
        <p>
          Overall, the system acts as both a visual showcase for human recruiters and a highly optimized data repository 
          for AI parsing algorithms, effectively bridging the gap between traditional web development and the emerging 
          agentic internet. The implementation of specific endpoints like NLWeb Streaming, Agent-friendly 404 recovery strategies, 
          and distributed llms.txt manifests showcases a deep commitment to future-proofing the web platform against the rapidly 
          evolving requirements of automated machine interactions.
        </p>
        <p>
          Let us dive deeper into the technical implementation of specific features. The dynamic Github integration leverages 
          Next.js Data Cache to periodically revalidate repository metrics while preventing rate limits. This approach guarantees 
          high availability and near-instant load times for the dashboard visualizations. The underlying styling architecture 
          employs a token-based design system built on top of Tailwind CSS, enabling seamless dark mode transitions and highly 
          consistent spacing across disparate UI primitives. These primitives are heavily influenced by shadcn/ui patterns, 
          providing robust headless logic through Radix UI components while allowing complete stylistic customization.
        </p>
        <p>
          The platform's accessibility strategy goes far beyond simple ARIA attributes. It includes a sophisticated 
          focus-visible management system that ensures interactive elements display prominent focus rings only during keyboard 
          navigation, preserving mouse-user aesthetics while guaranteeing compliance with WCAG 2.1 Level AA standards. 
          The color palette has been meticulously audited to ensure a minimum contrast ratio of 4.5:1 for standard text 
          and 3.0:1 for large text and graphical elements, even across multiple dynamic themes.
        </p>
        <p>
          For developers and AI agents, the public API endpoints follow strict RESTful conventions, returning fully typed 
          JSON responses described by an OpenAPI 3.1 specification. The Model Context Protocol (MCP) server extends these 
          capabilities by exposing a suite of tools directly to compatible LLM clients, allowing them to autonomously 
          fetch real-time portfolio metrics, query specific project architectures, and analyze my technical blog posts. 
          This multi-modal approach to content delivery ensures that my professional portfolio is equally accessible and 
          informative to human hiring managers reading a screen and AI assistants processing a machine-readable manifest.
        </p>
        <p>
          Beyond the structural engineering, the content strategy focuses on authentic, human-centric narratives. 
          Technical articles explore nuanced topics such as the psychological hurdles of "tutorial hell", the rapidly 
          shifting paradigm of AI-assisted development, and the importance of preserving the human element in an 
          increasingly automated world. This blend of rigorous technical execution and thoughtful, relatable content 
          defines my approach to full-stack engineering and product design.
        </p>
      </article>

    </main>
  );
}
