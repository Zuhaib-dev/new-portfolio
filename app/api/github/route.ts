import { NextResponse } from "next/server";

export async function GET() {
  const username = "Zuhaib-dev";
  try {
    // We fetch from GitHub API on the server side
    // next: { revalidate: 3600 } caches the result for 1 hour so we don't hit GitHub rate limits
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) {
      return NextResponse.json({ stars: 0, forks: 0, error: "Failed to fetch from GitHub" }, { status: res.status });
    }

    const repos = await res.json();
    let starsCount = 0;
    let forksCount = 0;

    repos.forEach((repo: any) => {
      starsCount += repo.stargazers_count;
      forksCount += repo.forks_count;
    });

    return NextResponse.json({ stars: starsCount, forks: forksCount });
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json({ stars: 0, forks: 0, error: "Internal Server Error" }, { status: 500 });
  }
}
