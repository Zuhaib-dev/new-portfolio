"use client";

import Head from "next/head";
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function SentryExamplePage() {
  useEffect(() => {
    console.log("Initializing Sentry manually...");
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      debug: true,
    });
    console.log("DSN used:", process.env.NEXT_PUBLIC_SENTRY_DSN);
  }, []);

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <Head>
        <title>Sentry Example Page</title>
      </Head>

      <main>
        <h1>Sentry Test Page</h1>
        <p>Click the button below to throw a test error. This should appear in your Sentry dashboard.</p>
        <button
          onClick={() => {
            try {
              throw new Error("Sentry Test Error from Frontend");
            } catch (error) {
              Sentry.captureException(error);
              console.log("Error explicitly sent to Sentry:", error);
            }
          }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#e00000",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Throw Error
        </button>
      </main>
    </div>
  );
}
