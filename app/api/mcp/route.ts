import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    jsonrpc: "2.0",
    name: "zuhaibrashid-portfolio",
    version: "1.0.0",
    protocolVersion: "2024-11-05",
    capabilities: {
      tools: {
        listChanged: false,
      },
    },
    tools: [
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
      },
    ],
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
            version: "1.0.0",
          },
        },
      });
    }

    // MCP: tools/list
    if (method === "tools/list") {
      return NextResponse.json({
        jsonrpc: "2.0",
        id: id ?? 1,
        result: {
          tools: [
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
