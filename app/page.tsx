import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import FeaturedBlogs from "@/components/featured-blogs";

// Below-the-fold components dynamically imported to optimize initial page load & FID/LCP
const GithubStats = dynamic(() => import("@/components/github-stats"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-muted/20 rounded-2xl" />,
});

const VisitorCounter = dynamic(() => import("@/components/visitor-counter"), {
  loading: () => <div className="h-24 w-full animate-pulse bg-muted/20 rounded-2xl" />,
});

const Development = dynamic(() => import("@/components/development"), {
  loading: () => <div className="h-48 w-full animate-pulse bg-muted/20 rounded-2xl" />,
});

const PersonalLife = dynamic(() => import("@/components/personal-life"), {
  loading: () => <div className="h-48 w-full animate-pulse bg-muted/20 rounded-2xl" />,
});

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-muted/20 rounded-2xl" />,
});

const DailyQuote = dynamic(() => import("@/components/daily-quote"), {
  loading: () => <div className="h-32 w-full animate-pulse bg-muted/20 rounded-2xl" />,
});

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-20 py-10">
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
    </div>
  );
}
