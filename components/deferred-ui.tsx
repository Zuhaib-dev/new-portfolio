"use client";

/**
 * DeferredUI — wraps purely decorative/interactive components that should
 * NOT be part of the critical server-rendered bundle. This file must be a
 * "use client" module because next/dynamic with ssr:false is only valid
 * inside client components.
 */
import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top"), {
  ssr: false,
});

const CursorFollower = dynamic(
  () =>
    import("@/components/cursor-follower").then((m) => ({
      default: m.CursorFollower,
    })),
  { ssr: false },
);

export default function DeferredUI() {
  return (
    <>
      <ScrollToTop />
      <CursorFollower />
    </>
  );
}
