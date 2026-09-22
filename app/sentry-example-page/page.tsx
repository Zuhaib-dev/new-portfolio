"use client";

import Head from "next/head";

export default function SentryExamplePage() {
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
            throw new Error("Sentry Test Error from Frontend");
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
