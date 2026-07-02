"use client";

import { useFollower } from "@/hooks/use-follower";
import { OnekoFollower } from "@/components/oneko-follower";
import { CustomFollower } from "@/components/custom-follower";

export function CursorFollower() {
  const { followerType } = useFollower();

  if (followerType === "oneko") {
    return <OnekoFollower />;
  }

  if (followerType === "oneko-white") {
    return <OnekoFollower image="/oneko-white.png" />;
  }

  if (followerType === "oneko-multiple") {
    return (
      <>
        <OnekoFollower image="/oneko.gif" />
        <OnekoFollower image="/oneko-white.png" offsetX={30} offsetY={30} />
        <OnekoFollower image="/oneko-black.png" offsetX={-30} offsetY={30} />
        <OnekoFollower image="/oneko-gray.png" offsetX={0} offsetY={-35} />
        <OnekoFollower image="/oneko-tora.png" offsetX={45} offsetY={-15} />
      </>
    );
  }

  if (followerType === "custom") {
    return <CustomFollower />;
  }

  return null;
}
