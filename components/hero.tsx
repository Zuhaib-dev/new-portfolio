"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail, MapPin } from "lucide-react";
import { FaNode } from "react-icons/fa";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-6 md:py-10">
      <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        {/* Hero Content (Text Section) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:col-span-2"
        >
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Zuhaib Rashid
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Web Developer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:zuhaibrashid01@gmail.com">
                zuhaibrashid01@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Srinager, India</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base">
            A goal-oriented software developer with experience in building web
            applications using modern technologies like React, Next.js, and
            more. Seeking to leverage my technical skills to deliver exceptional
            user experiences.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {/* Resume Button */}
            <a
              href="/Zuhaib Rashid.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button
                size="sm"
                className="text-xs sm:text-sm"
                aria-label="Download Resume"
              >
                <Download
                  className="mr-2 h-3 w-3 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
                Resume
              </Button>
            </a>

            {/* GitHub Button */}
            <Link href="https://github.com/Zuhaib-dev" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
                aria-label="Visit GitHub Profile"
              >
                <Github className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            {/* Email Button */}
            <Link href="mailto:zuhaibrashid01@gmail.com" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
                aria-label="Send Email"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>

            {/* Twitter Button */}
            <Link href="https://x.com/xuhaib_x9" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
                aria-label="Follow on Twitter (X)"
              >
                <RiTwitterXLine
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>

            {/* LinkedIn Button */}
            <Link
              href="https://www.linkedin.com/in/zuhaib-rashid-661345318/"
              target="_blank"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image/Animation Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center h-48 md:h-auto"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Tech Stacks Grid */}
            <div className="absolute inset-0 grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
              {/* Tech Icons (React, Next.js, MongoDB, Tailwind CSS) */}
              {/** Reduce animations here for quicker LCP */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <RiReactjsFill className="text-4xl text-[#087ea4]" />
              </motion.div>

              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <RiNextjsFill className="text-4xl" />
              </motion.div>

              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <SiMongodb className="text-4xl text-green-600" />
              </motion.div>

              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(49, 130, 206, 0.1)",
                    "0 0 0 10px rgba(49, 130, 206, 0.1)",
                    "0 0 0 0px rgba(49, 130, 206, 0.1)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <RiTailwindCssFill className="text-4xl text-sky-500" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
