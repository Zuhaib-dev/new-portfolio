import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return handleRequest(request);
}

export async function POST(request: NextRequest) {
  return handleRequest(request);
}

async function handleRequest(request: NextRequest) {
  let query = "";

  if (request.method === "GET") {
    query = request.nextUrl.searchParams.get("q") || "";
  } else if (request.method === "POST") {
    try {
      const body = await request.json();
      if (body.messages && body.messages.length > 0) {
        query = body.messages[body.messages.length - 1].content;
      } else if (body.q) {
        query = body.q;
      }
    } catch (error) {
      // ignore
    }
  }

  return NextResponse.json({
    answer: `Hello! You asked: "${query}". This is a dummy response from Zuhaib Rashid's portfolio NLWeb endpoint.`,
    messages: [
      {
        role: "assistant",
        content: `Hello! You asked: "${query}". This is a dummy response from Zuhaib Rashid's portfolio NLWeb endpoint.`
      }
    ]
  });
}
