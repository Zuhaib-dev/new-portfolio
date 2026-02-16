"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

type CatState = "walking" | "resting" | "sleeping";

export function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Even slower spring for a "chasing" effect (slower chase)
  const springConfig = { damping: 30, stiffness: 50 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const velocityX = useVelocity(cursorXSpring);
  const velocityY = useVelocity(cursorYSpring);
  const rotate = useTransform(velocityX, [-1000, 1000], [-15, 15]); // Tilt based on speed

  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [catState, setCatState] = useState<CatState>("walking");
  const [lastMoveTime, setLastMoveTime] = useState(Date.now());

  useEffect(() => {
    // Check if device is mobile/touch
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  // Monitor velocity to determine cat state
  useEffect(() => {
    const unsubscribeX = velocityX.on("change", (vx) => {
      const vy = velocityY.get();
      const speed = Math.sqrt(vx * vx + vy * vy);

      // Update last move time if there's significant movement
      if (speed > 10) {
        setLastMoveTime(Date.now());
      }

      // Determine cat state based on speed
      if (speed > 100) {
        setCatState("walking");
      } else if (speed > 10) {
        setCatState("resting");
      }
    });

    return () => {
      unsubscribeX();
    };
  }, [velocityX, velocityY]);

  // Check for sleeping state (no movement for 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceLastMove = Date.now() - lastMoveTime;
      if (timeSinceLastMove > 3000) {
        setCatState("sleeping");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastMoveTime]);

  useEffect(() => {
    if (isMobile) return;

    // Initial entrance animation from top-left
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Small delay before entrance

    const moveCursor = (e: MouseEvent) => {
      // Offset by 40px to the right and center vertically so cat stays beside cursor
      cursorX.set(e.clientX + 20);
      cursorY.set(e.clientY - 20);
      if (!isVisible) setIsVisible(true);
      setLastMoveTime(Date.now());
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

  // Determine which cat image to show
  const getCatImage = () => {
    switch (catState) {
      case "walking":
        return "/cat_walking.gif";
      case "resting":
        return "/cat_rest.gif";
      case "sleeping":
        return "/cat_sleeping.gif";
      default:
        return "/cat_walking.gif";
    }
  };

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-24 w-24 items-center justify-center select-none"
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
        <div className="relative flex items-center justify-center w-full h-full">
          <Image
            src={getCatImage()}
            alt="Cat cursor follower"
            width={96}
            height={96}
            className="drop-shadow-lg object-contain"
            unoptimized // Required for GIFs to animate
            priority
          />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 blur-xl bg-orange-400/20 rounded-full -z-10 scale-150" />
        </div>
      </motion.div>
    </>
  );
}
