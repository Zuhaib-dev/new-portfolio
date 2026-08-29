import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  const linkset = {
    linkset: [
      {
        anchor: "https://www.zuhaibrashid.com/api/v1",
        "service-desc": [
          {
            href: "https://www.zuhaibrashid.com/openapi.json",
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: "https://www.zuhaibrashid.com/developers",
            type: "text/html",
          },
        ],
        item: [
          {
            href: "https://www.zuhaibrashid.com/api/v1/github",
            title: "GitHub Statistics API",
            type: "application/json",
          },
        ],
      },
    ],
  };

  return NextResponse.json(linkset, {
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
