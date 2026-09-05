import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects-data";
import { ProjectCard } from "@/components/projects";

export const metadata: Metadata = {
  title: "All Projects | Zuhaib",
  description:
    "Browse all projects built by Zuhaib — from AI SaaS to healthcare dashboards, weather apps, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-5xl mx-auto">
      {/* Back button */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Portfolio
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">All Projects</h1>
        <p className="text-muted-foreground text-base max-w-xl">
          A collection of everything I&apos;ve built — from AI-powered SaaS to
          full-stack apps and creative experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center rounded-2xl border border-dashed border-border/50 bg-muted/20">
            <h3 className="text-lg font-bold">No projects found</h3>
            <p className="text-muted-foreground mt-2">Check back later for new projects.</p>
          </div>
        )}
      </div>
    </main>
  );
}
