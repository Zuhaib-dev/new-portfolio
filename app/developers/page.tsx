import type { Metadata } from "next";
import Link from "next/link";
import { Terminal, Key, ShieldCheck, Zap, Code2, Globe, Cpu, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Developer Portal & API Docs | Zuhaib Rashid",
  description: "Official Developer Portal and Agent Documentation for Zuhaib Rashid's portfolio APIs, OpenAPI specs, and MCP integration tools.",
  keywords: [
    "Zuhaib Rashid Developer Portal",
    "Zuhaib Rashid API",
    "OpenAPI Spec",
    "MCP Server",
    "AI Agent Tools",
    "Developer Console",
  ],
  openGraph: {
    title: "Developer Portal & API Docs | Zuhaib Rashid",
    description: "Official Developer Portal and Agent Documentation for Zuhaib Rashid's portfolio APIs.",
    url: "https://www.zuhaibrashid.com/developers",
  },
};

export default function DevelopersPage() {
  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider">
          <Terminal className="h-3.5 w-3.5" />
          Developer Portal & Agent Console
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          APIs & Machine Interfaces
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Welcome to the developer portal. Build, integrate, or empower AI agents with public REST endpoints, OpenAPI 3.1 schemas, and zero-auth live sandboxes.
        </p>
      </div>

      {/* Key Features Cards */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-border/50 bg-muted/20 space-y-3">
          <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
            <Key className="h-5 w-5" />
          </div>
          <h2 className="font-bold text-base">Zero-Auth & Free Tier</h2>
          <p className="text-sm text-muted-foreground">
            No API keys or approval needed. Public read endpoints are available with 60 req/min limits.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border/50 bg-muted/20 space-y-3">
          <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
            <Zap className="h-5 w-5" />
          </div>
          <h2 className="font-bold text-base">Live Sandbox</h2>
          <p className="text-sm text-muted-foreground">
            Directly probe endpoints on production or localhost with instant JSON responses and rate-limit headers.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border/50 bg-muted/20 space-y-3">
          <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
            <Cpu className="h-5 w-5" />
          </div>
          <h2 className="font-bold text-base">Agent Ready (MCP)</h2>
          <p className="text-sm text-muted-foreground">
            Compatible with OpenAI Operator, Claude Computer Use, Cursor, and Model Context Protocol.
          </p>
        </div>
      </div>

      {/* API Endpoints Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Code2 className="h-6 w-6 text-violet-500" />
          Available Endpoints
        </h2>

        <div className="rounded-2xl border border-border/50 bg-muted/20 overflow-hidden divide-y divide-border/40">
          {/* Endpoint 1 */}
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-green-500/10 text-green-500 border border-green-500/20">
                  GET
                </span>
                <code className="text-sm sm:text-base font-mono font-bold">/api/v1/github</code>
              </div>
              <span className="text-xs text-muted-foreground font-mono">v1 (Current)</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fetches real-time aggregated GitHub repository stars, forks, and repository count with pagination support.
            </p>
            <div className="bg-[#0d1117] p-4 rounded-xl text-xs font-mono text-white/90 overflow-x-auto">
              <code>curl https://www.zuhaibrashid.com/api/v1/github?page=1&limit=100</code>
            </div>
          </div>

          {/* Endpoint 2 */}
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-green-500/10 text-green-500 border border-green-500/20">
                  GET
                </span>
                <code className="text-sm sm:text-base font-mono font-bold">/api/github</code>
              </div>
              <span className="text-xs text-muted-foreground font-mono">Legacy Alias</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Direct alias to the v1 GitHub statistics endpoint.
            </p>
          </div>
        </div>
      </div>

      {/* Manifests & Specs Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Globe className="h-6 w-6 text-violet-500" />
          Machine Manifests & Specifications
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/openapi.json"
            target="_blank"
            className="p-5 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors flex items-center justify-between group"
          >
            <div>
              <p className="font-bold text-sm">OpenAPI 3.1.0 Specification</p>
              <p className="text-xs text-muted-foreground">Raw JSON schema of all endpoints & models</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>

          <a
            href="/llms.txt"
            target="_blank"
            className="p-5 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors flex items-center justify-between group"
          >
            <div>
              <p className="font-bold text-sm">llms.txt Manifest</p>
              <p className="text-xs text-muted-foreground">Plaintext Markdown index for AI models</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>

          <a
            href="/agents.md"
            target="_blank"
            className="p-5 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors flex items-center justify-between group"
          >
            <div>
              <p className="font-bold text-sm">Agent Operating Guide (agents.md)</p>
              <p className="text-xs text-muted-foreground">Rules and navigation policies for AI agents</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>

          <a
            href="/auth.md"
            target="_blank"
            className="p-5 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors flex items-center justify-between group"
          >
            <div>
              <p className="font-bold text-sm">Authentication Policy (auth.md)</p>
              <p className="text-xs text-muted-foreground">Zero-auth, sandbox, and rate limit documentation</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
