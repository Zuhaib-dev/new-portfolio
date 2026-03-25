/**
 * Simple in-memory sliding-window rate limiter.
 * Resets on cold starts — suitable for a portfolio hosted on Vercel Hobby.
 * To scale to multi-instance: swap the Map for Upstash Redis.
 */

// Map<`${ip}:${key}`, timestamp[]>
const requestLog = new Map<string, number[]>();

/**
 * @param ip      - Client IP address
 * @param key     - Route identifier (e.g. 'spotify', 'visitor')
 * @param max     - Max requests allowed in the window
 * @param windowMs - Window duration in milliseconds
 * @returns `{ limited: true }` if rate limit exceeded, `{ limited: false }` otherwise
 */
export function rateLimit(
  ip: string,
  key: string,
  max: number,
  windowMs: number
): { limited: boolean; retryAfterMs: number } {
  const mapKey = `${ip}:${key}`;
  const now = Date.now();
  const windowStart = now - windowMs;

  // Get existing timestamps, evict ones outside the window
  const timestamps = (requestLog.get(mapKey) ?? []).filter(
    (t) => t > windowStart
  );

  if (timestamps.length >= max) {
    // Earliest request in window — tell client when to retry
    const retryAfterMs = timestamps[0] + windowMs - now;
    return { limited: true, retryAfterMs };
  }

  // Record this request
  timestamps.push(now);
  requestLog.set(mapKey, timestamps);
  return { limited: false, retryAfterMs: 0 };
}

/** Extract the real client IP from Next.js request headers. */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return "unknown";
}
