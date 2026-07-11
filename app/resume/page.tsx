import Link from "next/link";
import { ArrowLeft, FileText, Download, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import DailyQuote from "@/components/daily-quote";
import VisitorCounter from "@/components/visitor-counter";

export const metadata: Metadata = {
  title: "Resume — Zuhaib Rashid",
  description:
    "View and download the professional resume of Zuhaib Rashid — Full Stack Developer specializing in React, Next.js, TypeScript & Node.js.",
  openGraph: {
    title: "Resume — Zuhaib Rashid",
    description:
      "View and download the professional resume of Zuhaib Rashid — Full Stack Developer.",
  },
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Professional
          </p>
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-0.5 text-[10px] font-medium text-emerald-500 uppercase tracking-wider">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Updated July 2026
          </div>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-muted/30 shadow-sm">
            <FileText className="h-6 w-6 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Resume</h1>
        </div>
        <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
          View and download my professional resume.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="/July_2026.pdf"
          download
          className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-500 hover:bg-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
        <a
          href="/July_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-muted/20 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <ExternalLink className="h-4 w-4" />
          Open in New Tab
        </a>
      </div>

      {/* Embedded PDF */}
      <div className="rounded-2xl border border-border/50 bg-muted/10 overflow-hidden shadow-sm">
        <iframe
          src="/July_2026.pdf"
          className="w-full min-h-[80vh] md:min-h-[90vh]"
          title="Zuhaib Rashid — Resume"
          style={{ border: "none" }}
        />
      </div>

      {/* Mobile fallback note */}
      <p className="mt-4 text-xs text-muted-foreground text-center">
        If the PDF doesn&apos;t display on your device, use the download or open
        buttons above.
      </p>

      <div className="mt-20">
        <VisitorCounter />
      </div>

      <div className="mt-10">
        <DailyQuote />
      </div>
    </main>
  );
}
