"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useEffect, useState } from "react";

export function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Even slower spring for a "chasing" effect (slower chase)
  const springConfig = { damping: 30, stiffness: 50 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const velocityX = useVelocity(cursorXSpring);
  const rotate = useTransform(velocityX, [-1000, 1000], [-15, 15]); // Tilt based on speed

  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // Initial entrance animation from top-left
    const timer = setTimeout(() => {
      setHasEntered(true);
      setIsVisible(true);
    }, 500); // Small delay before entrance

    const moveCursor = (e: MouseEvent) => {
      // Offset by 40px to the right and center vertically so cat stays beside cursor
      cursorX.set(e.clientX + 20);
      cursorY.set(e.clientY - 20);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Hide cursor when leaving window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  // Don't render on server or on mobile to avoid bad UX
  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-10 w-10 items-center justify-center text-4xl select-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 0.2 },
        }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          rotate: rotate,
        }}
      >
        <div className="relative flex items-center justify-center">
          <span className="drop-shadow-lg">👻</span>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 blur-xl bg-orange-400/20 rounded-full -z-10 scale-150" />
        </div>
      </motion.div>
    </>
  );
}
