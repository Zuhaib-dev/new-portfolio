import { NextResponse } from "next/server";

export async function GET() {
  const jwk = {
    keys: [
      {
        kty: "OKP",
        crv: "Ed25519",
        kid: "key-1",
        nbf: 1693526400,
        exp: 1893456000,
        x: "V4R9w_Y2Wz2qN9XJ8Rz3Hj2d1gR_2-39M1k-jLp3R3I" // Dummy valid format Ed25519 public key
      }
    ]
  };

  return NextResponse.json(jwk, {
    headers: {
      "Cache-Control": "public, max-age=86400",
    },
  });
}
