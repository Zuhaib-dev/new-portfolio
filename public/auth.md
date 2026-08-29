# Authentication & Developer Onboarding Policy

Welcome to the Zuhaib Rashid Developer and Agent API surface.

## Zero-Auth Policy (Free Tier)
All public read endpoints (such as `/api/v1/github`, `/api/github`, and static manifests) operate under a **Zero-Auth policy**. No API keys, OAuth tokens, or human approval are required for AI agents to query these endpoints.

### Summary
- **Authentication Required:** None (Zero-Auth / Public).
- **Free Tier Ceiling:** 60 requests per minute per IP address.
- **Pricing:** 100% Free for personal, research, and agentic workflows.
- **Protocol:** REST JSON over HTTPS with standard rate limit and idempotency headers.

---

## Live Sandbox & Test Environment
The production domain `https://www.zuhaibrashid.com` acts as a public read sandbox.

### Verification Endpoints:
- **Ping / Healthcheck:** `GET /api/v1/github`
- **OpenAPI 3.1 Spec:** `GET /openapi.json`
- **Agent Resource Discovery:** `GET /.well-known/ard.json`
- **Plaintext LLM Manifest:** `GET /llms.txt`

---

## Rate Limits & Error Handling
Every request returns standard HTTP headers:
- `X-RateLimit-Limit: 60`
- `X-RateLimit-Remaining: <count>`
- `X-RateLimit-Reset: <timestamp>`
- `Idempotency-Key: <echoed-if-sent>`

When rate limits are exceeded, a structured JSON `429 Too Many Requests` response is returned.

---

## Scopes & Safe Mutating Actions
- **Read Operations:** Open and unrestricted.
- **Mutating Operations (`/api/send-email`):** Protected by honeypot verification and strict server-side rate limits.
