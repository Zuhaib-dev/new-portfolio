import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = Math.min(parseInt(searchParams.get("limit") || "100", 10), 100);
  const username = "Zuhaib-dev";
  const idempotencyKey = req.headers.get("idempotency-key") || req.headers.get("x-idempotency-key");
  
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-RateLimit-Limit": "60",
    "X-RateLimit-Remaining": "59",
    "X-RateLimit-Reset": String(Math.floor(Date.now() / 1000) + 3600),
    "RateLimit-Limit": "60",
    "RateLimit-Remaining": "59",
    "RateLimit-Reset": "3600",
    "X-API-Version": "v1",
    "X-Pagination-Page": String(page),
    "X-Pagination-Limit": String(limit),
  };

  if (idempotencyKey) {
    headers["Idempotency-Key"] = idempotencyKey;
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=${limit}&page=${page}`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error: {
            code: "UPSTREAM_ERROR",
            message: "Failed to fetch from GitHub API",
            status: res.status,
          },
          stars: 0,
          forks: 0,
          pagination: { page, limit, hasNextPage: false },
        },
        { status: res.status, headers }
      );
    }

    const repos = await res.json();
    let starsCount = 0;
    let forksCount = 0;

    repos.forEach((repo: any) => {
      starsCount += repo.stargazers_count || 0;
      forksCount += repo.forks_count || 0;
    });

    return NextResponse.json(
      {
        stars: starsCount,
        forks: forksCount,
        reposCount: repos.length,
        version: "v1",
        pagination: {
          page,
          limit,
          totalFetched: repos.length,
          hasNextPage: repos.length === limit,
        },
      },
      { headers }
    );
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json(
      {
        error: {
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal server error fetching GitHub stats",
          status: 500,
        },
        stars: 0,
        forks: 0,
        pagination: { page, limit, hasNextPage: false },
      },
      { status: 500, headers }
    );
  }
}
