/**
 * Rate Limiting Logic
 * 
 * WHAT IT DOES:
 * This script prevents users from "spamming" your API endpoints. 
 * 1. It tracks requests coming from the same IP address.
 * 2. It counts how many requests they made in a specific time window (e.g., 1 minute).
 * 3. If they exceed the limit (e.g., 5 requests per minute for the visitor counter),
 *    it blocks them and tells them how long to wait before trying again.
 * 
 * WHY WE USE IT:
 * - Prevents bots from artificially inflating your "Visitor Count".
 * - Protects your Spotify API keys from being exhausted by too many requests.
 * - Ensures your server stays fast for real users by blocking abusive ones.
 */

// Map<`${ip}:${key}`, timestamp[]>
const requestLog = new Map<string, number[]>();

// Periodically clean up the entire map to prevent memory leaks (every hour)
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, timestamps] of requestLog.entries()) {
      // If the latest request in the log is older than 1 hour, remove the entry
      if (timestamps.length === 0 || now - timestamps[timestamps.length - 1] > 3600000) {
        requestLog.delete(key);
      }
    }
  }, 3600000);
}

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
): { limited: boolean; retryAfterMs: number; remaining: number } {
  const mapKey = `${ip}:${key}`;
  const now = Date.now();
  const windowStart = now - windowMs;

  // Get existing timestamps and remove those outside the current window
  let timestamps = requestLog.get(mapKey) ?? [];
  timestamps = timestamps.filter((t) => t > windowStart);

  if (timestamps.length >= max) {
    const retryAfterMs = timestamps[0] + windowMs - now;
    return { limited: true, retryAfterMs, remaining: 0 };
  }

  // Record this request
  timestamps.push(now);
  requestLog.set(mapKey, timestamps);

  return { 
    limited: false, 
    retryAfterMs: 0, 
    remaining: max - timestamps.length 
  };
}

/** Extract the real client IP from Next.js request headers. */
export function getClientIp(request: Request): string {
  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }
  
  const xRealIp = request.headers.get("x-real-ip");
  if (xRealIp) return xRealIp;

  return "127.0.0.1"; // Fallback for local development
}
