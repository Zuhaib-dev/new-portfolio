import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username") || "Zuhaib-dev";
  const year = searchParams.get("year") || "last";

  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}&client=react-github-calendar`,
      {
        next: { revalidate: 3600 },
        headers: {
          "User-Agent": "Portfolio-App/1.0",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Upstream API returned status ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error proxying GitHub contributions:", error);

    // Fallback: generate a basic placeholder structure so the calendar doesn't crash
    return NextResponse.json(
      {
        total: { lastYear: 0 },
        contributions: [],
        error: "Failed to load contributions from upstream API",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
