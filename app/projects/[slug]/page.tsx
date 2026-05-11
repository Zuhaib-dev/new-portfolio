import { getProjectBySlug } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Layers } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study | Zuhaib Rashid`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Project Case Study`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Back navigation */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      {/* Hero Section */}
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            {project.label && (
              <div className="mb-3 w-fit px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                {project.label}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-border/60 bg-muted/20 px-4 py-2.5 text-sm font-medium hover:bg-muted/60 transition-colors"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-foreground text-background px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-border/50 bg-muted/10 text-sm font-medium text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Big Cover Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-border/30 shadow-2xl bg-muted/20 group">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            priority
            unoptimized={project.image.endsWith(".gif")}
          />
        </div>
      </header>

      {/* Case Study Content */}
      <article className="prose prose-invert prose-violet max-w-none">
        {project.content ? (
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        ) : (
          <div className="text-center py-20 px-4 border border-border/30 border-dashed rounded-3xl bg-muted/5">
            <Layers className="h-10 w-10 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2 mt-0">Detailed Case Study Coming Soon</h2>
            <p className="text-muted-foreground m-0">
              I am currently writing a deep dive into the architecture, challenges, and code behind {project.title}. 
              In the meantime, feel free to check out the live demo or source code!
            </p>
          </div>
        )}
      </article>
    </main>
  );
}
