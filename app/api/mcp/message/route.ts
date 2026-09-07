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

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const sessionId = url.searchParams.get("sessionId");
    
    if (!sessionId || !global.mcpSessions || !global.mcpSessions.has(sessionId)) {
      return NextResponse.json({ error: "Invalid or expired session" }, { status: 400 });
    }
    
    const controller = global.mcpSessions.get(sessionId);
    if (!controller) {
      return NextResponse.json({ error: "Session controller missing" }, { status: 400 });
    }
    
    const body = await req.json();
    const { id, method, params } = body;
    let result = null;

    if (method === "initialize" || method === "init") {
      result = {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {}, resources: {} },
        serverInfo: {
          name: "zuhaibrashid-portfolio",
          version: "1.0.0",
        },
        instructions: "This MCP server provides tools to query portfolio metrics...",
      };
    } else if (method === "notifications/initialized") {
      return new NextResponse("Accepted", { status: 202 });
    } else if (method === "tools/list") {
      result = { tools: TOOLS };
    } else if (method === "resources/list") {
      result = { resources: RESOURCES };
    } else if (method === "resources/read") {
      result = {
        contents: [
          {
            uri: params?.uri || "https://www.zuhaibrashid.com/llms.txt",
            mimeType: "text/markdown",
            text: "# Zuhaib Rashid Portfolio Manifest",
          },
        ],
      };
    } else if (method === "tools/call") {
      const toolName = params?.name;
      if (toolName === "get_github_stats") {
        result = { content: [{ type: "text", text: JSON.stringify({ stars: 10, forks: 5, reposCount: 20 }) }] };
      } else if (toolName === "get_projects") {
        result = { content: [{ type: "text", text: JSON.stringify([{ name: "HealOS" }]) }] };
      } else if (toolName === "get_blog_posts") {
        result = { content: [{ type: "text", text: JSON.stringify([{ title: "Blog 1" }]) }] };
      } else {
        result = { status: "tool not found" };
      }
    } else {
      result = { status: "ok" };
    }

    if (result && id !== undefined) {
      const responseObj = {
        jsonrpc: "2.0",
        id,
        result
      };
      const encoder = new TextEncoder();
      controller.enqueue(encoder.encode(`event: message\ndata: ${JSON.stringify(responseObj)}\n\n`));
    }
    
    return new NextResponse("Accepted", { status: 202 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


