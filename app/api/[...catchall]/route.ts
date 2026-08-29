import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

function createJsonErrorResponse(req: Request) {
  const url = new URL(req.url);
  return NextResponse.json(
    {
      error: {
        code: "RESOURCE_NOT_FOUND",
        message: `The requested API endpoint '${url.pathname}' does not exist.`,
        status: 404,
        availableEndpoints: [
          "/api/github",
          "/api/v1/github",
          "/api/send-email",
          "/api/visitor-count",
          "/api/spotify",
        ],
        documentation: "https://www.zuhaibrashid.com/openapi.json",
      },
      status: 404,
    },
    {
      status: 404,
      headers: {
        "Content-Type": "application/json",
        "RateLimit-Limit": "60",
        "RateLimit-Remaining": "59",
        "RateLimit-Reset": "3600",
        "RateLimit-Policy": "60;w=60",
        "RateLimit": "limit=60, remaining=59, reset=3600",
        "X-RateLimit-Limit": "60",
        "X-RateLimit-Remaining": "59",
        "X-RateLimit-Reset": "3600",
        "Deprecation": "false",
      },
    }
  );
}

export async function GET(req: Request) {
  return createJsonErrorResponse(req);
}

export async function POST(req: Request) {
  return createJsonErrorResponse(req);
}

export async function PUT(req: Request) {
  return createJsonErrorResponse(req);
}

export async function DELETE(req: Request) {
  return createJsonErrorResponse(req);
}

export async function PATCH(req: Request) {
  return createJsonErrorResponse(req);
}
