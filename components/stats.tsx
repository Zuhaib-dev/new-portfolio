"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Code, Coffee, Github } from "lucide-react";
import { projects } from "@/lib/projects-data";

interface StatItemProps {
  label: string;
  value: string | number | null;
  icon: any;
  delay: number;
}

function StatItem({ label, value, icon: Icon, delay }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors text-center group"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-5 w-5 text-violet-500" />
      </div>
      <div className="text-2xl font-bold tracking-tight">
        {value === null ? "..." : value}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-1">
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitor-count")
      .then((res) => res.json())
      .then((data) => setVisitorCount(data.count))
      .catch(() => setVisitorCount(null));
  }, []);

  const statItems = [
    {
      label: "Profile Visits",
      value: visitorCount ? visitorCount.toLocaleString() : null,
      icon: Users,
    },
    {
      label: "Projects Built",
      value: projects.length,
      icon: Code,
    },
    {
      label: "Cups of Chai",
      value: "1,200+",
      icon: Coffee,
    },
    {
      label: "GitHub Stars",
      value: "50+",
      icon: Github,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {statItems.map((item, i) => (
        <StatItem
          key={item.label}
          label={item.label}
          value={item.value}
          icon={item.icon}
          delay={i * 0.1}
        />
      ))}
    </div>
  );
}
