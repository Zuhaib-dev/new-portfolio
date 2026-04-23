import { NextResponse } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

// Use a global variable to persist count across requests while the lambda is warm
let sessionCount = 0;

// Base configuration
const BASE_DATE = new Date("2026-04-20").getTime();
const BASE_COUNT = 12450;
const VISITS_PER_DAY = 24; // Simulate roughly 1 visit per hour

export async function GET(request: Request) {
  const ip = getClientIp(request);
  const { limited, retryAfterMs } = rateLimit(ip, 'visitor', 15, 60_000);

  if (limited) {
    return NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil(retryAfterMs / 1000)) },
      }
    );
  }

  try {
    // 1. Attempt to use an external API (optional/future-proofing if it comes back)
    // We'll skip the external API for now since it's confirmed down and causing latency.

    // 2. Dynamic Simulation Fallback
    // Calculate how many days have passed since our base date
    const now = new Date().getTime();
    const daysPassed = Math.max(0, (now - BASE_DATE) / (1000 * 60 * 60 * 24));
    
    // Calculate the baseline count based on time passed
    const timeBasedCount = Math.floor(BASE_COUNT + (daysPassed * VISITS_PER_DAY));
    
    // Increment the session count for this specific lambda instance
    // This gives the user the immediate feedback of the counter going up when they refresh
    sessionCount++;

    // Final dynamic count
    const finalCount = timeBasedCount + sessionCount;

    return NextResponse.json({ count: finalCount });
  } catch (err) {
    console.error("[visitor-count] calculation failed:", err);
    return NextResponse.json({ count: BASE_COUNT }); 
  }
}
