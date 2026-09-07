import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

const TOOLS = [
  {
    name: "get_github_stats",
    description: "Fetch real-time aggregated GitHub statistics (stars, forks, repositories count) for Zuhaib Rashid",
    inputSchema: {
      type: "object",
      properties: {
        cursor: { type: "string", description: "Pagination cursor token" },
        limit: { type: "integer", description: "Number of repositories to process", default: 100 },
      },
    },
    annotations: {
      readOnly: true,
      audience: ["assistant", "user"],
    },
  },
  {
    name: "get_projects",
    description: "Fetch portfolio showcase projects including HealOS, Rydexx, DealDrop, Repoviz, and Resumind with architecture tech stacks",
    inputSchema: {
      type: "object",
      properties: {
        category: { type: "string", description: "Optional project filter (e.g. fullstack, ai, web)" },
      },
    },
    annotations: {
      readOnly: true,
      audience: ["assistant", "user"],
    },
  },
  {
    name: "get_blog_posts",
    description: "Retrieve list of published technical articles on Next.js security, AI agent web development, and performance optimization",
    inputSchema: {
      type: "object",
      properties: {
        limit: { type: "integer", description: "Max articles to return", default: 10 },
      },
    },
    annotations: {
      readOnly: true,
      audience: ["assistant", "user"],
    },
  },
];

const RESOURCES = [
  {
    uri: "https://www.zuhaibrashid.com/llms.txt",
    name: "Site LLM Manifest",
    mimeType: "text/markdown",
    description: "Plaintext overview of portfolio structure, background, and machine links",
  },
  {
    uri: "https://www.zuhaibrashid.com/openapi.json",
    name: "OpenAPI 3.1 Specification",
    mimeType: "application/json",
    description: "Full machine-readable REST API schema",
  },
  {
    uri: "https://www.zuhaibrashid.com/agents.md",
    name: "Agent Operating Guide",
    mimeType: "text/markdown",
    description: "Operational instructions and rules for autonomous AI agents",
  },
];

declare global {
  var mcpSessions: Map<string, ReadableStreamDefaultController>;
}
if (!global.mcpSessions) {
  global.mcpSessions = new Map();
}

export async function GET(req: Request) {
  const sessionId = Math.random().toString(36).substring(2, 15);
  
  const stream = new ReadableStream({
    start(controller) {
      global.mcpSessions.set(sessionId, controller);
      const encoder = new TextEncoder();
      
      const host = req.headers.get("host") || "www.zuhaibrashid.com";
      const protocol = host.includes("localhost") ? "http" : "https";
      const endpoint = `${protocol}://${host}/api/mcp/message?sessionId=${sessionId}`;
      
      controller.enqueue(encoder.encode(`event: endpoint\ndata: ${endpoint}\n\n`));
      
      const interval = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`:\n\n`));
        } catch (e) {
          clearInterval(interval);
          global.mcpSessions.delete(sessionId);
        }
      }, 15000);
      
      // Keep reference to interval
      (controller as any)._interval = interval;
    },
    cancel() {
      global.mcpSessions.delete(sessionId);
    }
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    }
  });
}


