"use client";

import { useEffect, useState } from "react";

export type FollowerType = "oneko" | "custom" | "off";

export function useFollower() {
  const [followerType, setFollowerType] = useState<FollowerType>("oneko");

  useEffect(() => {
    // Read initial state from localStorage
    const saved = localStorage.getItem("follower-type") as FollowerType;
    if (saved) {
      setFollowerType(saved);
    }

    // Listen for cross-component updates
    const handleStorageChange = () => {
      const updated = localStorage.getItem("follower-type") as FollowerType;
      if (updated) {
        setFollowerType(updated);
      }
    };

    window.addEventListener("follower-changed", handleStorageChange);
    return () => {
      window.removeEventListener("follower-changed", handleStorageChange);
    };
  }, []);

  const changeFollowerType = (type: FollowerType) => {
    setFollowerType(type);
    localStorage.setItem("follower-type", type);
    // Dispatch custom event to notify other components in the same window
    window.dispatchEvent(new Event("follower-changed"));
  };

  return { followerType, setFollowerType: changeFollowerType };
}
