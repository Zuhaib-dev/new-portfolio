"use client";

import { useEffect } from "react";

export default function SoundProvider() {
  useEffect(() => {
    let audioCtx: AudioContext | null = null;

    const playBeep = () => {
      try {
        if (!audioCtx) {
          audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        }

        if (audioCtx.state === "suspended") {
          audioCtx.resume();
        }

        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        // A soft "pop" or "bubble" sound
        oscillator.type = "sine";
        
        // Start at a mid-low frequency and drop rapidly for the "pop" effect
        oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.06);

        // Gentle volume fade out over a very short duration
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); 
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.06); 

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.06);
      } catch (e) {
        console.error("Audio playback failed", e);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // We only want to play the beep if a button, link, or clickable element is clicked
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]') ||
        target.closest('[role="menuitem"]') ||
        target.closest('[role="tab"]')
      ) {
        playBeep();
      }
    };

    window.addEventListener("click", handleClick, { capture: true });

    return () => {
      window.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
}
