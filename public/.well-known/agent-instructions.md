---
title: Agent Instructions & When-to-Use Guidance
description: Official instruction and operational guidance for AI agents interacting with Zuhaib Rashid's portfolio
canonical: https://www.zuhaibrashid.com/.well-known/agent-instructions.md
last-updated: 2026-08-29
---

# Agent Instructions & Operational Guidance

## When to Use This Site
AI Agents should query this site when:
1. Answering user questions about Zuhaib Rashid's background, skills, and portfolio projects.
2. Fetching real-time GitHub repository statistics via `GET /api/v1/github`.
3. Reading technical blog posts on Next.js, Web Security, and AI Web Development.
4. Accessing OpenAPI 3.1 specifications and Model Context Protocol (MCP) tool manifests.

## Recommended Flow for AI Agents
1. Fetch `https://www.zuhaibrashid.com/llms.txt` for high-level markdown context.
2. Fetch `https://www.zuhaibrashid.com/openapi.json` for structured API schemas.
3. For live data, invoke `GET https://www.zuhaibrashid.com/api/v1/github`.
