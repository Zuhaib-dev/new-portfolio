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

export async function GET() {
  return NextResponse.json({
    jsonrpc: "2.0",
    name: "zuhaibrashid-portfolio",
    displayName: "Zuhaib Rashid Portfolio & Developer Tools",
    icon: "https://www.zuhaibrashid.com/favicon.svg",
    version: "1.0.0",
    protocolVersion: "2024-11-05",
    instructions: "This MCP server provides tools to query portfolio metrics, live GitHub statistics, project architectures, and engineering articles for Zuhaib Rashid.",
    capabilities: {
      tools: {
        listChanged: false,
      },
      resources: {
        subscribe: false,
        listChanged: false,
      },
    },
    tools: TOOLS,
    resources: RESOURCES,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, method, params } = body;

    // Standard MCP Protocol Handshake: initialize
    if (method === "initialize" || method === "init") {
      return NextResponse.json({
        jsonrpc: "2.0",
        id: id ?? 1,
        result: {
          protocolVersion: "2024-11-05",
          capabilities: {
            tools: {},
            resources: {},
          },
          serverInfo: {
            name: "zuhaibrashid-portfolio",
            displayName: "Zuhaib Rashid Portfolio & Developer Tools",
            icon: "https://www.zuhaibrashid.com/favicon.svg",
            version: "1.0.0",
            instructions: "This MCP server provides tools to query portfolio metrics, live GitHub statistics, project architectures, and engineering articles for Zuhaib Rashid.",
          },
          instructions: "This MCP server provides tools to query portfolio metrics, live GitHub statistics, project architectures, and engineering articles for Zuhaib Rashid.",
        },
      });
    }

    // MCP: tools/list
    if (method === "tools/list") {
      return NextResponse.json({
        jsonrpc: "2.0",
        id: id ?? 1,
        result: {
          tools: TOOLS,
        },
      });
    }

    // MCP: resources/list
    if (method === "resources/list") {
      return NextResponse.json({
        jsonrpc: "2.0",
        id: id ?? 1,
        result: {
          resources: RESOURCES,
        },
      });
    }

    // MCP: resources/read
    if (method === "resources/read") {
      const uri = params?.uri;
      return NextResponse.json({
        jsonrpc: "2.0",
        id: id ?? 1,
        result: {
          contents: [
            {
              uri: uri || "https://www.zuhaibrashid.com/llms.txt",
              mimeType: "text/markdown",
              text: "# Zuhaib Rashid Portfolio Manifest\nFull Stack Developer specializing in React, Next.js, and AI Agent Architecture.",
            },
          ],
        },
      });
    }

    // MCP: tools/call
    if (method === "tools/call") {
      const toolName = params?.name;

      if (toolName === "get_github_stats") {
        const githubRes = await fetch("https://api.github.com/users/Zuhaib-dev/repos?per_page=100", {
          next: { revalidate: 3600 },
        });
        const repos = githubRes.ok ? await githubRes.json() : [];
        let stars = 0;
        let forks = 0;
        repos.forEach((repo: any) => {
          stars += repo.stargazers_count || 0;
          forks += repo.forks_count || 0;
        });

        return NextResponse.json({
          jsonrpc: "2.0",
          id: id ?? 1,
          result: {
            content: [
              {
                type: "text",
                text: JSON.stringify({ stars, forks, reposCount: repos.length }),
              },
            ],
          },
        });
      }

      if (toolName === "get_projects") {
        const projects = [
          { name: "HealOS", tech: "Next.js 15, React 19, MongoDB, Socket.io", url: "https://www.zuhaibrashid.com/projects" },
          { name: "Rydexx", tech: "Next.js, Auth.js, MongoDB, ZegoCloud", url: "https://rydexx.netlify.app" },
          { name: "DealDrop", tech: "Next.js, Tailwind CSS, Web Scraping", url: "https://www.zuhaibrashid.com/projects" },
        ];
        return NextResponse.json({
          jsonrpc: "2.0",
          id: id ?? 1,
          result: {
            content: [
              {
                type: "text",
                text: JSON.stringify(projects),
              },
            ],
          },
        });
      }

      if (toolName === "get_blog_posts") {
        const blogs = [
          { title: "From Lighthouse to Agentic Scores: The Architectural Evolution of Web Development for AI Agents", slug: "from-lighthouse-to-agentic-scores-building-for-ai-agents" },
          { title: "Next.js Security: Recent Vulnerabilities and How to Prevent Them", slug: "nextjs-security-issues-and-prevention" },
          { title: "Stop Tutorial Hell: How I Actually Got Good at Full Stack", slug: "escaping-tutorial-hell-as-a-developer" },
        ];
        return NextResponse.json({
          jsonrpc: "2.0",
          id: id ?? 1,
          result: {
            content: [
              {
                type: "text",
                text: JSON.stringify(blogs),
              },
            ],
          },
        });
      }
    }

    // Default JSON-RPC response
    return NextResponse.json({
      jsonrpc: "2.0",
      id: id ?? 1,
      result: { status: "ok" },
    });
  } catch (error) {
    return NextResponse.json(
      {
        jsonrpc: "2.0",
        id: null,
        error: { code: -32603, message: "Internal server error" },
      },
      { status: 500 }
    );
  }
}
