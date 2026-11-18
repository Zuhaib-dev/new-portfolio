"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import type { Project } from "@/lib/projects-data";

export function ProjectQuickstart({ project }: { project: Project }) {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!project.quickstart) return null;

  const copyCode = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedStep(index);
      window.setTimeout(() => setCopiedStep(null), 1800);
    } catch {
      setCopiedStep(null);
    }
  };

  return (
    <section className="mb-12 overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-muted/30 via-background to-violet-500/[0.06]">
      <div className="border-b border-border/40 px-6 py-6 md:px-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-400">
          Quickstart · Make it yours
        </p>
        <h2 className="mb-2 text-2xl font-bold tracking-tight">Install it. Make it yours.</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {project.quickstart.intro}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold text-muted-foreground">Dependencies</span>
          {project.quickstart.dependencies.map((dependency) => (
            <span key={dependency} className="rounded-full border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-[11px] text-foreground/80">
              {dependency}
            </span>
          ))}
        </div>
      </div>

      <ol className="divide-y divide-border/40">
        {project.quickstart.steps.map((step, index) => {
          const copied = copiedStep === index;
          return (
            <li key={step.title} className="grid gap-4 px-6 py-6 md:grid-cols-[minmax(180px,0.7fr)_minmax(0,1.3fr)] md:gap-8 md:px-8">
              <div>
                <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-violet-400">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-400/30 bg-violet-400/10 text-[10px]">{String(index + 1).padStart(2, "0")}</span>
                  {step.language === "shell" ? "Terminal" : "Usage example"}
                </p>
                <h3 className="mb-1 text-sm font-semibold">{step.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
              <div className="relative min-w-0 overflow-hidden rounded-xl border border-border/50 bg-[#0b0b10]">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-3 py-2">
                  <span className="flex items-center gap-2 font-mono text-[10px] text-white/45">
                    {step.language === "shell" ? <Terminal className="h-3 w-3" /> : null}
                    {step.language}
                  </span>
                  <button
                    type="button"
                    onClick={() => copyCode(step.code, index)}
                    className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] text-white/65 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    aria-label={copied ? "Copied code" : `Copy ${step.title}`}
                  >
                    {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre className="max-w-full overflow-x-auto p-4 text-xs leading-relaxed text-slate-200"><code>{step.code}</code></pre>
              </div>
            </li>
          );
        })}
      </ol>

      {project.slug === "flourish-ui" && (
        <p className="border-t border-border/40 px-6 py-4 text-xs text-muted-foreground md:px-8">
          Run <code className="rounded bg-muted px-1.5 py-0.5 font-mono">pnpm dlx shadcn@latest init</code> once before adding your first registry item. The generated source stays in your project and is yours to customize.
        </p>
      )}
      {project.slug === "traceora" && (
        <p className="border-t border-border/40 px-6 py-4 text-xs text-muted-foreground md:px-8">
          Development captures stay in a bounded local timeline. Request bodies and headers are not collected unless you explicitly enable them.
        </p>
      )}
    </section>
  );
}
