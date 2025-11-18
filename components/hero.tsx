"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail, MapPin } from "lucide-react";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="py-6 md:py-10">
      <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        {/* ===== LEFT: Hero Text ===== */}
        <motion.div
          // no initial opacity/y to avoid render delay
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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
              <span>Srinagar, India</span>
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
              href="/Zuhaib.pdf"
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

            {/* GitHub */}
            <Link href="https://github.com/Zuhaib-dev" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
                aria-label="Visit GitHub Profile"
              >
                <Github className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
              </Button>
            </Link>

            {/* Email */}
            <Link href="mailto:zuhaibrashid01@gmail.com" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
                aria-label="Send Email"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
              </Button>
            </Link>

            {/* X / Twitter */}
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
              </Button>
            </Link>

            {/* LinkedIn */}
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
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* ===== RIGHT: Animated Grid ===== */}
        {isClient && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-center h-48 md:h-auto"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
              {/* Rotate animation disabled on mobile */}
              {!isMobile && (
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
              )}

              {/* Grid */}
              <div className="absolute inset-0 grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
                {/* React */}
                <motion.div
                  className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {!isMobile && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="text-4xl text-[#087ea4]"
                    >
                      <RiReactjsFill />
                    </motion.div>
                  )}
                  {isMobile && <RiReactjsFill className="text-4xl text-[#087ea4]" />}
                </motion.div>

                {/* Next.js */}
                <motion.div
                  className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                  animate={!isMobile ? { y: [0, -10, 0] } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <RiNextjsFill className="text-4xl" />
                </motion.div>

                {/* MongoDB */}
                <motion.div
                  className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                  animate={!isMobile ? { y: [0, -5, 0] } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <SiMongodb className="text-4xl text-green-600" />
                </motion.div>

                {/* Tailwind */}
                <motion.div
                  className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                  animate={
                    !isMobile
                      ? {
                          boxShadow: [
                            "0 0 0 0px rgba(49,130,206,0.1)",
                            "0 0 0 10px rgba(49,130,206,0.1)",
                            "0 0 0 0px rgba(49,130,206,0.1)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <RiTailwindCssFill className="text-4xl text-sky-500" />
                </motion.div>
              </div>

              {/* Floating badges - visible only on desktop */}
              {!isMobile && (
                <>
                  <motion.div
                    className="absolute -top-5 -left-5 bg-background px-3 py-1 rounded-full text-sm shadow-md border"
                    animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ReactJs
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-5 -right-5 bg-background px-3 py-1 rounded-full text-sm shadow-md border"
                    animate={{ y: [0, 5, 0], rotate: [0, -5, 5, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    Tailwind CSS
                  </motion.div>
                  <motion.div
                    className="absolute -top-5 -right-5 bg-background px-3 py-1 rounded-full text-sm shadow-md border"
                    animate={{ x: [0, 5, 0], rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    Next.js
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-5 -left-5 bg-background px-3 py-1 rounded-full text-sm shadow-md border"
                    animate={{ x: [0, -5, 0], rotate: [0, -5, 5, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  >
                    MongoDB
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
