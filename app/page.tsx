import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import GithubStats from "@/components/github-stats";
import DailyQuote from "@/components/daily-quote";
import Contact from "@/components/contact";
import VisitorCounter from "@/components/visitor-counter";
import PersonalLife from "@/components/personal-life";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-20 py-10">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <GithubStats />
      <DailyQuote />
      <VisitorCounter />
      <Contact />
      <PersonalLife />
    </div>
  );
}
