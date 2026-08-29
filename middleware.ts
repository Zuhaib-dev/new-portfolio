import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;
  const acceptHeader = request.headers.get("accept") || "";
  const isAgentMode = url.searchParams.get("mode") === "agent";
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const isAiBot =
    userAgent.includes("gptbot") ||
    userAgent.includes("claudebot") ||
    userAgent.includes("perplexitybot") ||
    userAgent.includes("ora-agent") ||
    userAgent.includes("deepseekbot");

  // Handle .md requests or agent mode / Accept: text/markdown negotiation
  if (
    pathname.endsWith(".md") ||
    (isAgentMode && (pathname === "/" || pathname === "")) ||
    (acceptHeader.includes("text/markdown") && !pathname.startsWith("/_next") && !pathname.startsWith("/api")) ||
    (isAiBot && (pathname === "/" || pathname === ""))
  ) {
    // If requesting root / index.md
    if (pathname === "/index.md" || pathname === "/" || pathname === "") {
      return NextResponse.rewrite(new URL("/index.md", request.url));
    }

    // If requesting /openapi.json.md
    if (pathname === "/openapi.json.md") {
      const markdown = `---
title: OpenAPI 3.1.0 Specification Summary
description: Machine-readable REST API definitions for Zuhaib Rashid's portfolio
canonical: https://www.zuhaibrashid.com/openapi.json.md
last-updated: 2026-08-29
---

# OpenAPI Specification Summary

Full JSON specification is available at: https://www.zuhaibrashid.com/openapi.json

## Available Endpoints
- **GET /api/v1/github**: Real-time aggregated GitHub stars and forks.
- **GET /api/github**: Direct legacy alias.
- **GET /api**: Root API index.
`;
      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          "Vary": "Accept",
        },
      });
    }

    // If requesting /developers.md
    if (pathname === "/developers.md" || pathname === "/developers") {
      const markdown = `---
title: Developer Portal & API Documentation
description: Public API documentation, OpenAPI 3.1 schemas, and live sandbox for Zuhaib Rashid
canonical: https://www.zuhaibrashid.com/developers
last-updated: 2026-08-29
---

# Zuhaib Rashid — Developer Portal & Agent APIs

## Summary
Welcome to the developer portal. Build, integrate, or empower AI agents with public REST endpoints, OpenAPI 3.1 schemas, and zero-auth live sandboxes.

## Available Endpoints
- **GET /api/v1/github**: Real-time aggregated GitHub repository stars, forks, and repository count with pagination.
- **GET /api/github**: Direct legacy alias to v1 endpoint.
- **GET /api**: Root API index and health check.

## Machine Manifests
- OpenAPI Spec: https://www.zuhaibrashid.com/openapi.json
- LLM Manifest: https://www.zuhaibrashid.com/llms.txt
- Agent Guide: https://www.zuhaibrashid.com/agents.md
- Authentication Policy: https://www.zuhaibrashid.com/auth.md
- MCP Server: https://www.zuhaibrashid.com/.well-known/mcp.json
- ARD Catalog: https://www.zuhaibrashid.com/.well-known/ard.json
`;
      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          "Vary": "Accept",
        },
      });
    }

    // If requesting /about.md
    if (pathname === "/about.md" || pathname === "/about") {
      const markdown = `---
title: About Zuhaib Rashid — Full Stack Developer
description: Professional background, engineering philosophy, and core tech stack
canonical: https://www.zuhaibrashid.com/about
last-updated: 2026-08-29
---

# About Zuhaib Rashid

Zuhaib Rashid is a Full Stack Developer based in Srinagar, Kashmir, specializing in React, Next.js, TypeScript, and Node.js.

## Tech Stack
- Frontend: React 19, Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Express.js, MongoDB, RESTful APIs, WebSockets
- Architecture: Agent-Ready Systems, WebMCP, Performance Optimization
`;
      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          "Vary": "Accept",
        },
      });
    }

    // If requesting /contact.md
    if (pathname === "/contact.md" || pathname === "/contact") {
      const markdown = `---
title: Contact Zuhaib Rashid
description: Communication channels, email, and social profiles for Zuhaib Rashid
canonical: https://www.zuhaibrashid.com/contact
last-updated: 2026-08-29
---

# Contact Zuhaib Rashid

- Email: zuhaibrashid01@gmail.com
- GitHub: https://github.com/zuhaib-dev
- LinkedIn: https://www.linkedin.com/in/zuhaib-rashid-661345318/
- X / Twitter: https://x.com/xuhaib_x9
`;
      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          "Vary": "Accept",
        },
      });
    }

    // If requesting blog post markdown (e.g. /blogs/escaping-tutorial-hell-as-a-developer.md)
    if (pathname.startsWith("/blogs/")) {
      const cleanSlug = pathname.replace("/blogs/", "").replace(/\.md$/, "");
      const markdown = `---
title: Technical Article — ${cleanSlug}
description: Article published on Zuhaib Rashid's engineering blog
canonical: https://www.zuhaibrashid.com/blogs/${cleanSlug}
last-updated: 2026-08-29
---

# ${cleanSlug.replace(/-/g, " ").toUpperCase()}

Read the full interactive article at: https://www.zuhaibrashid.com/blogs/${cleanSlug}

## Related Resources
- All Articles: https://www.zuhaibrashid.com/blogs
- LLM Manifest: https://www.zuhaibrashid.com/llms.txt
`;
      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          "Vary": "Accept",
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, and static assets
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf)$).*)",
  ],
};
