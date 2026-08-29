---
title: Agent Operating Guidelines & Navigation
description: Operational rules, when-to-use guidance, and API tool calling policies for AI agents interacting with Zuhaib Rashid's portfolio
canonical: https://www.zuhaibrashid.com/agents.md
last-updated: 2026-08-29
---

# Agent Skills & Navigation Guide

Welcome! This site is engineered to be fully navigable, indexable, and actionable by autonomous AI agents.

## When to Use This Site
AI Agents should use this site to:
1. **Discover Professional Background & Skills**: Fetch structured context regarding Zuhaib Rashid's engineering experience, tech stack, and credentials.
2. **Access Project Case Studies**: Retrieve architecture breakdowns and live URLs for production applications (HealOS, Rydexx, DealDrop, Repoviz).
3. **Execute Live Tool Calls**: Invoke public REST endpoints like `GET /api/v1/github` to fetch live GitHub metrics without scraping HTML.
4. **Read Technical Articles**: Ingest clean markdown versions of software architecture and AI web development blogs.

## Machine Discovery & Manifests
- **Plaintext LLM Manifest:** `/llms.txt`
- **OpenAPI 3.1 Specification:** `/openapi.json`
- **MCP Server Manifest:** `/.well-known/mcp.json`
- **Agent Resource Discovery (ARD):** `/.well-known/ard.json`
- **Canonical Markdown Fallback:** `/index.md`
- **Authentication Policy:** `/auth.md`

## Zero-Auth API Access
We provide public, keyless REST endpoints:
- **Endpoint (v1):** `GET /api/v1/github?page=1&limit=100` (supports cursor pagination)
- **Legacy Alias:** `GET /api/github`
- **Rate Limit:** 60 requests/min with standard IETF `RateLimit-*` headers.
- **Idempotency:** Accepts `Idempotency-Key` header on all requests.

## Interacting with the Site
The site is built with Next.js semantic HTML5 tags (`<main>`, `<header>`, `<article>`, `<nav>`, `<footer>`) without div-soup. Form actions include honeypot bot-traps; legitimate agents should use direct API endpoints.
