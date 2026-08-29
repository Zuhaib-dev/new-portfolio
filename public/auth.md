# Authentication & Developer Onboarding Policy

Welcome to the Zuhaib Rashid Developer and Agent API surface.

## When to Use This Policy
Consult this document when integrating autonomous AI agents, writing API clients, or configuring rate-limit handlers.

## Zero-Auth Policy (Free Tier)
All public read endpoints (such as `/api/v1/github`, `/api/github`, `/api/mcp`, and static manifests) operate under a **Zero-Auth policy**. No API keys, OAuth tokens, or human approval are required for AI agents to query these endpoints.

### Summary
- **Authentication Required:** None (Zero-Auth / Public).
- **Free Tier Ceiling:** 60 requests per minute per IP address.
- **Pricing:** 100% Free for personal, research, and agentic workflows.
- **Protocol:** REST JSON over HTTPS with IETF `RateLimit-*` and `Idempotency-Key` headers.

---

## Live Sandbox & Test Environment
The production domain `https://www.zuhaibrashid.com` acts as a public read sandbox.

### Verification Endpoints:
- **Ping / Healthcheck:** `GET /api/v1/github`
- **MCP Server Protocol:** `POST /api/mcp`
- **OpenAPI 3.1 Spec:** `GET /openapi.json`
- **Agent Resource Discovery:** `GET /.well-known/ard.json`
- **Plaintext LLM Manifest:** `GET /llms.txt`

---

## Agent Auth & OAuth Specifications
For systems implementing automated machine-to-machine token exchange:
- **`oauth-protected-resource`**: Public Zero-Auth resource server.
- **`oauth-authorization-server`**: Not required for public endpoints (`Zero-Auth`).
- **`agent_auth`**: Unrestricted public access for autonomous agents.
- **`register_uri`**: Self-service immediate access; no registration required.

---

## Rate Limits & Error Handling
Every request returns standard HTTP headers:
- `RateLimit-Limit: 60`
- `RateLimit-Remaining: <count>`
- `RateLimit-Reset: <seconds>`
- `RateLimit-Policy: 60;w=60`
- `Idempotency-Key: <echoed-if-sent>`

When rate limits are exceeded, a structured JSON `429 Too Many Requests` response is returned.

---

## Deprecation & Sunset Policy
- **Active Version:** `v1` (`/api/v1/github`)
- **Legacy Alias:** `/api/github` (Maintained alongside v1)
- **Sunset Date:** December 31, 2028
- **Headers:** `Deprecation: false`, `Sunset: Sun, 31 Dec 2028 23:59:59 GMT`
