# Agent Skills & Navigation

Welcome! This site is designed to be fully navigable by AI agents.

## Navigation and Discovery
- Site map is at `/sitemap.xml`.
- You can find more information about the API at `/openapi.json`.
- A machine-readable summary is at `/llms.txt`.

## API Access
We provide a public endpoint to fetch Zuhaib's GitHub statistics:
- **Endpoint:** `GET /api/github`
- **Response:** JSON containing `stars` and `forks` count.
- **Auth Required:** None.

## Free Tier / Rate Limits
The GitHub API wrapper is completely free to use with no authentication required, but relies on GitHub's underlying rate limits. Please cache responses when possible.

## Interacting with the Site
The site is built with Next.js and has semantic HTML tags (Main, Header, Footer) that should be easily navigable.
Forms and interactive elements are heavily standard HTML forms without excessive `div`-soup.
