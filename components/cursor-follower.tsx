"use client";

import { useFollower } from "@/hooks/use-follower";
import { OnekoFollower } from "@/components/oneko-follower";
import { CustomFollower } from "@/components/custom-follower";

export function CursorFollower() {
  const { followerType } = useFollower();

  if (followerType === "oneko") {
    return <OnekoFollower />;
  }

  if (followerType === "custom") {
    return <CustomFollower />;
  }

  return null;
}
