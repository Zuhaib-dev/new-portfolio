# zuhaibrashid

> **The Official CLI & AI Agent Interface for Zuhaib Rashid's Developer Portfolio**

[![npm version](https://badge.fury.io/js/zuhaibrashid.svg)](https://badge.fury.io/js/zuhaibrashid)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`zuhaibrashid` is an interactive CLI business card and toolset. It allows developers, recruiters, and autonomous AI agents to seamlessly query live portfolio statistics, access project architecture overviews, and pull GitHub analytics directly from the terminal.

## Installation

You can run the CLI instantly without installing it globally by using `npx`:

```bash
npx zuhaibrashid
```

Or, install it globally via npm:

```bash
npm install -g zuhaibrashid
```

## Usage

### 📇 Interactive Business Card
Run the CLI without any arguments to print the interactive, styled terminal business card containing all relevant social links, emails, and technology stack information.

```bash
npx zuhaibrashid
```

### 🌟 Live GitHub Statistics
Query the live `api/v1/github` endpoint from the portfolio backend to fetch real-time aggregated repository statistics (Stars, Forks, Total Repositories).

```bash
npx zuhaibrashid github
```

## AI Agent Integration

This CLI tool is specifically designed to be easily executable by AI Agents (like Claude, ChatGPT, or custom LLMs) operating within terminal environments. The output is structured to be readable by both humans and machines, acting as a lightweight companion to the official [Model Context Protocol (MCP)](https://www.zuhaibrashid.com/.well-known/mcp.json) server.

For the full agent-friendly API documentation, visit the [Developer Portal](https://www.zuhaibrashid.com/developers).

## Author

**Zuhaib Rashid**
- **Website:** [zuhaibrashid.com](https://zuhaibrashid.com)
- **Twitter:** [@xuhaib_x9](https://x.com/xuhaib_x9)
- **GitHub:** [@zuhaib-dev](https://github.com/zuhaib-dev)
- **LinkedIn:** [zuhaib-rashid](https://linkedin.com/in/zuhaib-rashid)

## License

This project is licensed under the MIT License.
