import Link from "next/link";
import { ArrowLeft, Monitor, Code2, Paintbrush, FileJson, Link as LinkIcon } from "lucide-react";
import type { Metadata } from "next";
import VisitorCounter from "@/components/visitor-counter";

export const metadata: Metadata = {
  title: "Setup — Zuhaib Rashid",
  description: "My development environment, editor settings, and themes.",
};

const editorSettings = [
  { name: "Editor", value: "Cursor / VS Code" },
  { name: "Theme", value: "Tokyo Night Dark" },
  { name: "Font Family", value: "JetBrains Mono" },
  { name: "Font Ligatures", value: "Enabled" },
  { name: "Font Size", value: "14px" },
  { name: "Line Height", value: "1.6" },
  { name: "Format On Save", value: "Enabled" },
];

const extensions = [
  { name: "Prettier - Code formatter", description: "Opinionated code formatter." },
  { name: "ESLint", description: "Integrates ESLint into the editor." },
  { name: "Tailwind CSS IntelliSense", description: "Advanced autocomplete for Tailwind." },
  { name: "Prisma", description: "Syntax highlighting and formatting for Prisma." },
  { name: "Error Lens", description: "Highlights errors and warnings inline." },
  { name: "GitLens", description: "Supercharge Git capabilities inside the editor." },
  { name: "Auto Rename Tag", description: "Auto rename paired HTML/XML tag." },
  { name: "Color Highlight", description: "Highlights web colors in your editor." },
];

export default function SetupPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* Back link */}
      <Link
        href="/#development"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Development
          </p>
          <div className="flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 px-2.5 py-0.5 text-[10px] font-medium text-violet-500 uppercase tracking-wider">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500" />
            </span>
            Updated May 2026
          </div>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-muted/30 shadow-sm">
            <Monitor className="h-6 w-6 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Setup</h1>
        </div>
        <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
          A glimpse into my development environment. This is my exact editor configuration, theme, and the extensions I use daily to build full-stack applications.
        </p>
      </div>

      <div className="space-y-12 mt-12">
        {/* Editor Config Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-muted/30">
              <Paintbrush className="h-5 w-5 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">Editor & Theme</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {editorSettings.map((setting, i) => (
              <div
                key={i}
                className="group p-4 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all flex flex-col gap-1"
              >
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {setting.name}
                </p>
                <h3 className="font-bold text-sm text-foreground/90 group-hover:text-violet-400 transition-colors">
                  {setting.value}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Extensions Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-muted/30">
              <FileJson className="h-5 w-5 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">VS Code Extensions</h2>
          </div>
          <div className="space-y-3">
            {extensions.map((ext, i) => (
              <div
                key={i}
                className="flex items-start sm:items-center gap-4 group flex-col sm:flex-row p-3 rounded-xl border border-border/50 bg-muted/10 hover:bg-muted/30 transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-background text-xs text-violet-500 font-bold shadow-sm">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground/90 group-hover:text-violet-400 transition-colors">
                    {ext.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ext.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note block */}
        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 flex items-start gap-4">
          <Code2 className="h-6 w-6 text-violet-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-foreground mb-1">Why Cursor?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I primarily use Cursor (a fork of VS Code) because of its seamless AI integration. It has native support for reading my entire codebase and generating highly contextual code. It uses the exact same extensions and settings as regular VS Code, making the transition effortless.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <VisitorCounter />
      </div>
    </main>
  );
}
