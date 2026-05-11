import Link from "next/link";
import { ArrowLeft, Terminal as TerminalIcon, Command, Cpu, Layers } from "lucide-react";
import type { Metadata } from "next";
import VisitorCounter from "@/components/visitor-counter";

export const metadata: Metadata = {
  title: "Terminal Setup — Zuhaib Rashid",
  description: "My terminal emulator, shell configuration, and CLI tools.",
};

const terminalConfig = [
  { name: "Terminal Emulator", value: "Ghostty" },
  { name: "Shell", value: "Zsh (Z shell)" },
  { name: "Prompt", value: "Starship" },
  { name: "Multiplexer", value: "Tmux" },
  { name: "Font", value: "JetBrains Mono Nerd Font" },
  { name: "Theme", value: "Tokyo Night" },
];

const cliTools = [
  { name: "Fastfetch", description: "System information tool written in C (faster neofetch)." },
  { name: "zsh-autosuggestions", description: "Fish-like autosuggestions for Zsh based on history." },
  { name: "zsh-syntax-highlighting", description: "Syntax highlighting for Zsh in the interactive terminal." },
  { name: "fzf", description: "A general-purpose command-line fuzzy finder." },
  { name: "bat", description: "A cat clone with syntax highlighting and Git integration." },
  { name: "eza", description: "A modern, maintained replacement for ls." },
  { name: "zoxide", description: "A smarter cd command that remembers your directories." },
  { name: "NVM", description: "Node Version Manager to quickly switch Node.js versions." },
];

export default function TerminalPage() {
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
            <TerminalIcon className="h-6 w-6 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Terminal</h1>
        </div>
        <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
          The command line is where I spend half my day. Here is my complete terminal architecture, designed for maximum speed, aesthetics, and productivity.
        </p>
      </div>

      <div className="space-y-12 mt-12">
        {/* Core Stack Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-muted/30">
              <Layers className="h-5 w-5 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">Core Stack</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {terminalConfig.map((setting, i) => (
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

        {/* Note block: Ghostty */}
        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 flex items-start gap-4">
          <Cpu className="h-6 w-6 text-violet-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-foreground mb-1">Why Ghostty?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I recently switched to Ghostty. It is a wildly fast, native, GPU-accelerated terminal emulator written in Zig. It has incredible font rendering, native macOS integration, and zero noticeable input latency. Combined with a Nerd Font, it creates a gorgeous command-line experience.
            </p>
          </div>
        </div>

        {/* CLI Tools Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-muted/30">
              <Command className="h-5 w-5 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">CLI Utilities</h2>
          </div>
          <div className="space-y-3">
            {cliTools.map((tool, i) => (
              <div
                key={i}
                className="flex items-start sm:items-center gap-4 group flex-col sm:flex-row p-3 rounded-xl border border-border/50 bg-muted/10 hover:bg-muted/30 transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-background text-xs text-violet-500 font-bold shadow-sm">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground/90 group-hover:text-violet-400 transition-colors">
                    {tool.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <VisitorCounter />
      </div>
    </main>
  );
}
