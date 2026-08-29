import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  const headers = {
    "Content-Type": "application/json",
    "RateLimit-Limit": "60",
    "RateLimit-Remaining": "59",
    "RateLimit-Reset": "3600",
    "RateLimit-Policy": "60;w=60",
    "RateLimit": "limit=60, remaining=59, reset=3600",
    "X-RateLimit-Limit": "60",
    "X-RateLimit-Remaining": "59",
    "X-RateLimit-Reset": "3600",
    "X-API-Version": "v1",
    "Deprecation": "false",
  };

  return NextResponse.json(
    {
      name: "Zuhaib Rashid Developer & Agent API",
      version: "v1",
      status: "healthy",
      description: "Official public API endpoints for portfolio metrics, machine manifests, and agent services.",
      endpoints: {
        githubStatsV1: {
          path: "/api/v1/github",
          method: "GET",
          description: "Fetches aggregated GitHub stars, forks, and repository statistics with pagination.",
          parameters: {
            page: "integer (optional, default 1)",
            limit: "integer (optional, default 100, max 100)",
            cursor: "string (optional)",
          },
        },
        githubStatsLegacy: {
          path: "/api/github",
          method: "GET",
          description: "Direct legacy alias to GitHub stats endpoint.",
        },
        visitorCount: {
          path: "/api/visitor-count",
          method: "GET",
          description: "Real-time portfolio visitor analytics counter.",
        },
        spotify: {
          path: "/api/spotify",
          method: "GET",
          description: "Currently playing track from Spotify.",
        },
      },
      manifests: {
        openapi: "https://www.zuhaibrashid.com/openapi.json",
        llms: "https://www.zuhaibrashid.com/llms.txt",
        ard: "https://www.zuhaibrashid.com/.well-known/ard.json",
        mcp: "https://www.zuhaibrashid.com/.well-known/mcp.json",
        agents: "https://www.zuhaibrashid.com/agents.md",
        auth: "https://www.zuhaibrashid.com/auth.md",
        markdown: "https://www.zuhaibrashid.com/index.md",
      },
      contact: {
        email: "zuhaibrashid01@gmail.com",
        developerPortal: "https://www.zuhaibrashid.com/developers",
      },
    },
    { headers }
  );
}
