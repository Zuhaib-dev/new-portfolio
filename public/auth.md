# Authentication & Developer Onboarding Policy

Welcome to the Zuhaib Rashid Developer and Agent API surface.

## When to Use This Policy
Consult this document when integrating autonomous AI agents, writing API clients, or configuring rate-limit handlers.

## Agent Walkthrough & Protocol Sections

### 1. Discover
Discover available API services and machine manifests:
- **`oauth-protected-resource`**: Public Zero-Auth resource server at `https://www.zuhaibrashid.com`.
- **`oauth-authorization-server`**: Not required for public Zero-Auth endpoints.
- **`agent_auth`**: Unrestricted public access for autonomous agents.
- **Manifests**: OpenAPI spec at `/openapi.json`, MCP server at `/.well-known/mcp.json`, and ARD at `/.well-known/ard.json`.

### 2. Register
- **`register_uri`**: Self-service immediate access. No human registration or API key provisioning required.

### 3. Pick a method
- **Zero-Auth (Recommended)**: Query read endpoints (`GET /api/v1/github`, `POST /api/mcp`) without headers or credentials.
- **Model Context Protocol (MCP)**: Connect via JSON-RPC 2.0 streamable HTTP at `/api/mcp`.

### 4. Claim
- Free Tier grant: 60 requests per minute per IP address.
- Zero-cost access for personal, research, evaluation, and AI agent workloads.

### 5. Use credential
- Pass optional `Idempotency-Key` header on all mutation or query requests for deterministic caching and retry safety:
  ```http
  GET /api/v1/github HTTP/1.1
  Host: www.zuhaibrashid.com
  Idempotency-Key: 7b29a613-2ef1-4b2a-8742-1e9a7e9df182
  ```

### 6. Errors
- Structured JSON error responses conforming to `ErrorResponse` schema:
  - `400 Bad Request`: Invalid pagination cursor or parameters.
  - `404 Not Found`: Non-existent API route.
  - `429 Too Many Requests`: Rate limit exceeded (reset in `RateLimit-Reset` seconds).
  - `500 Internal Server Error`: Upstream failure.

### 7. Revocation
- Public credentials do not expire. To reset your client session state, clear your local token or change client IP address.

---

## Deprecation & Sunset Policy
- **Active Version:** `v1` (`/api/v1/github`, `/api/mcp`)
- **Sunset Date:** December 31, 2028
- **Headers:** `Deprecation: false`, `Sunset: Sun, 31 Dec 2028 23:59:59 GMT`
