import Link from "next/link";
import { ArrowLeft, MonitorSmartphone, Laptop, Smartphone, Puzzle, Monitor, Link as LinkIcon, Settings } from "lucide-react";
import type { Metadata } from "next";
import DailyQuote from "@/components/daily-quote";
import Stats from "@/components/stats";
import VisitorCounter from "@/components/visitor-counter";

export const metadata: Metadata = {
  title: "Gears — Zuhaib Rashid",
  description: "Tools, devices, and software I use to get work done.",
};

const devices = [
  {
    name: "Macbook M3 pro",
    icon: Laptop,
    link: "#",
  },
  {
    name: "Redmi 13 C mobile",
    icon: Smartphone,
    link: "#",
  },
];

const extensions = [
  { name: "Unhook", link: "#" },
  { name: "uBlock Origin", link: "#" },
  { name: "React Developer Tools", link: "#" },
  { name: "daily.dev", link: "#" },
  { name: "Grammarly", link: "#" },
  { name: "Wappalyzer", link: "#" },
  { name: "ColorZilla", link: "#" },
];

const software = [
  { name: "Dia", link: "#" },
  { name: "Notion", link: "#" },
  { name: "TickTick", link: "#" },
  { name: "OBS Studio", link: "#" },
  { name: "VLC", link: "#" },
  { name: "Ghostty", link: "#" },
];

export default function GearsPage() {
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
            Updated April 2026
          </div>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-muted/30 shadow-sm">
            <Settings className="h-6 w-6 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Gears</h1>
        </div>
        <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
          The tools, hardware, and software I rely on to build high-performance web applications and maintain my daily workflow.
        </p>
      </div>

      <div className="mb-20">
        <Stats />
      </div>


      <div className="space-y-12 mt-12">
        {/* Devices Section */}
        <div className="grid sm:grid-cols-2 gap-4">
          {devices.map((device, i) => {
            const Icon = device.icon;
            return (
              <a
                key={i}
                href={device.link}
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all hover:border-violet-500/30 flex flex-col gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-background shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-violet-500" />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight group-hover:text-violet-400 transition-colors">
                    {device.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    Primary Device <LinkIcon className="h-2.5 w-2.5" />
                  </p>
                </div>
              </a>
            );
          })}
        </div>


        {/* Extensions Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-muted/30">
              <Puzzle className="h-5 w-5 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">Web Extensions</h2>
          </div>
          <div className="space-y-3">
            {extensions.map((ext, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-border/50 bg-muted/20 text-xs text-muted-foreground font-medium">
                  {i + 1}
                </div>
                <div className="flex-1 flex items-center gap-2 min-w-0 py-2 border-b border-border/50 group-last:border-0 hover:bg-muted/10 px-2 rounded-lg transition-colors cursor-pointer">
                  <p className="font-medium text-sm text-foreground/80 group-hover:text-foreground transition-colors">{ext.name}</p>
                  <a href={ext.link} target="_blank" rel="noreferrer" className="text-muted-foreground/50 hover:text-foreground transition-colors">
                    <LinkIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Section */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-muted/30">
              <Monitor className="h-5 w-5 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">Software</h2>
          </div>
          <div className="space-y-3 mt-6">
            {software.map((sw, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-border/50 bg-muted/20 text-xs text-muted-foreground font-medium">
                  {i + 1}
                </div>
                <div className="flex-1 flex items-center gap-2 min-w-0 py-2 border-b border-border/50 group-last:border-0 hover:bg-muted/10 px-2 rounded-lg transition-colors cursor-pointer">
                  <p className="font-medium text-sm text-foreground/80 group-hover:text-foreground transition-colors">{sw.name}</p>
                  <a href={sw.link} target="_blank" rel="noreferrer" className="text-muted-foreground/50 hover:text-foreground transition-colors">
                    <LinkIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <VisitorCounter />
      </div>

      <div className="mt-10">
        <DailyQuote />
      </div>
    </main>
  );
}
