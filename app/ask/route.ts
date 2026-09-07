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

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      const message = `Hello! You asked: "${query}". This is a dummy response from Zuhaib Rashid's portfolio NLWeb endpoint.`;
      const chunks = message.split(" ");
      let i = 0;
      
      const interval = setInterval(() => {
        if (i < chunks.length) {
          const text = chunks[i] + (i < chunks.length - 1 ? " " : "");
          const chunkData = JSON.stringify({
            id: "chatcmpl-123",
            object: "chat.completion.chunk",
            created: Math.floor(Date.now() / 1000),
            model: "portfolio-gpt",
            choices: [
              {
                index: 0,
                delta: { content: text },
                finish_reason: null
              }
            ]
          });
          controller.enqueue(encoder.encode(`data: ${chunkData}\n\n`));
          i++;
        } else {
          const doneData = JSON.stringify({
            id: "chatcmpl-123",
            object: "chat.completion.chunk",
            created: Math.floor(Date.now() / 1000),
            model: "portfolio-gpt",
            choices: [
              {
                index: 0,
                delta: {},
                finish_reason: "stop"
              }
            ]
          });
          controller.enqueue(encoder.encode(`data: ${doneData}\n\n`));
          controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
          controller.close();
          clearInterval(interval);
        }
      }, 50);
    }
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
