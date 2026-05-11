"use client";

import { motion } from "framer-motion";
import { Settings, Monitor, Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";

const items = [
  {
    icon: Settings,
    title: "Gears",
    description: "Tools, devices, and software I use to get work done.",
    href: "/gears",
    available: true,
  },
  {
    icon: Monitor,
    title: "Setup",
    description: "VSCode / Cursor configuration and extensions guide.",
    href: "/setup",
    available: true,
  },
  {
    icon: Terminal,
    title: "Terminal",
    description: "Zsh, Starship, Fastfetch, and shell configuration.",
    href: "/terminal",
    available: false,
  },
];

export default function Development() {
  return (
    <section id="development" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <h2 className="text-3xl font-bold mb-8">Development</h2>

        {/* Rows */}
        <div className="space-y-3">
          {items.map((item, i) => {
            const Icon = item.icon;

            const inner = (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={item.available ? { x: 4 } : {}}
                className={`flex items-center gap-4 rounded-2xl border border-border/50 bg-muted/20 px-5 py-4 transition-colors ${
                  item.available
                    ? "hover:bg-muted/40 cursor-pointer"
                    : "opacity-60 cursor-default"
                }`}
              >
                {/* Icon box */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background/60">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.description}
                  </p>
                </div>

                {/* Arrow or coming soon */}
                {item.available ? (
                  <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                ) : (
                  <span className="text-xs text-muted-foreground shrink-0 border border-border/50 rounded-full px-2 py-0.5">
                    Soon
                  </span>
                )}
              </motion.div>
            );

            return item.available ? (
              <Link key={item.title} href={item.href!} className="block">
                {inner}
              </Link>
            ) : (
              <div key={item.title}>{inner}</div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
