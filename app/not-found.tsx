"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      {/* Animated 404 Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <span className="text-[12rem] font-black text-muted/20 select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-500/20 bg-violet-500/10 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]">
            <Search className="h-10 w-10 text-violet-500" />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-md"
      >
        <h1 className="text-3xl font-bold mb-3 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, you can find your way back home below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="default" size="lg" className="rounded-full px-8 gap-2 group">
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2 group">
            <Link href="/blogs">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              View Blogs
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Decorative Background Glows */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-[-1]" />
    </div>
  );
}
