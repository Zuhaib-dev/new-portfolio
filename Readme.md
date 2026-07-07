<p align="center">
  <img src="https://zuhaibrashid.com/screenShot.webp" alt="Portfolio Preview" width="700" />
</p>

<h1 align="center">Zuhaib Rashid — Portfolio</h1>

<p align="center">
  <strong>A modern, fully-featured developer portfolio built with Next.js 15, TypeScript & Tailwind CSS.</strong>
  <br />
  Smooth animations · Dark/Light theme · PWA · Spotify integration · Command palette · Interactive terminal page
</p>

<p align="center">
  <a href="https://zuhaibrashid.com"><img src="https://img.shields.io/badge/🌐_Live-zuhaibrashid.com-000?style=for-the-badge" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

---

## ⚡ Highlights

| Feature | Description |
|---|---|
| **⌘K Command Palette** | Navigate anywhere, switch themes, toggle cursor followers — all from the keyboard |
| **🎵 Spotify Now Playing** | Real-time "Now Playing" widget via Spotify API, polled every 10 seconds |
| **🐱 Oneko Cat Follower** | An adorable pixel cat that chases your cursor around the page |
| **📊 Live GitHub Stats** | Stars, forks, streak & contribution graph fetched via server-side API route |
| **📱 PWA Support** | Installable on mobile & desktop with offline caching via `next-pwa` |
| **🔊 Sound Effects** | Ambient UI sounds for interactions (toggleable) |
| **🖥️ Terminal Page** | Showcases real terminal setup — Ghostty, Zsh, Starship, tmux & CLI tools |
| **✍️ Blog System** | Dynamic blog pages with syntax highlighting via Shiki |
| **📬 Contact Form** | Working email delivery powered by Nodemailer API route |
| **👁️ Visitor Counter** | Tracks live visitor count |
| **🌗 Theme Switcher** | System, Light & Dark modes via `next-themes` |
| **🧈 Smooth Scroll** | Butter-smooth scrolling powered by Lenis |
| **📈 SEO Optimized** | Open Graph, Twitter Cards, JSON-LD schemas, sitemap & robots.txt |
| **🛡️ Security Headers** | Content Security Policy, cache-control & immutable asset headers |
| **📊 Analytics** | Vercel Analytics + Microsoft Clarity integration |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4, `tailwindcss-animate` |
| **UI Components** | Radix UI, shadcn/ui, `cmdk` |
| **Animations** | Framer Motion, Lenis (smooth scroll) |
| **Icons** | Lucide React, React Icons |
| **Forms** | React Hook Form + Zod validation |
| **Email** | Nodemailer (API route) |
| **Integrations** | Spotify API, GitHub API |
| **Analytics** | Vercel Analytics, Microsoft Clarity |
| **PWA** | `@ducanh2912/next-pwa` |
| **Code Highlighting** | Shiki |
| **Deployment** | Vercel |

---

## 📄 Pages & Sections

| Route | Description |
|---|---|
| `/` | Home — Hero, Experience, Education, Skills, Projects, GitHub Stats, Blogs, Visitor Counter, Development Setup, Personal Life, Contact, Daily Quote |
| `/projects` | All projects gallery |
| `/projects/[slug]` | Individual project case study |
| `/blogs` | Blog listing |
| `/blogs/[slug]` | Individual blog post |
| `/books` | Reading list / book reviews |
| `/movies` | Movie recommendations |
| `/gears` | Gear & tools showcase |
| `/setup` | Development setup details |
| `/terminal` | Terminal emulator & CLI tools config |

---

## 💼 Featured Projects

| Project | Stack | Links |
|---|---|---|
| **Rydexx** — Vehicle booking platform | Next.js, Auth.js, MongoDB, Cloudinary, ZegoCloud | [Live](https://rydexx.netlify.app/) |
| **Resumind** — AI-powered resume builder (GPT-3.5) | Next.js, TypeScript, Tailwind CSS | [Live](https://resumind-ebon.vercel.app/) · [Code](https://github.com/Zuhaib-dev/Resumind) |
| **Roomify** — AI architectural visualization (Claude + Gemini) | React, Vite, TypeScript, Puter.js | [Live](https://airoomify.netlify.app/) · [Code](https://github.com/Zuhaib-dev/Roomify) |
| **CarePulse** — Healthcare management dashboard | Next.js, TypeScript, Appwrite | [Live](https://hms-seven-green.vercel.app/) · [Code](https://github.com/Zuhaib-dev/HMS) |
| **DealDrop** — Price tracker with email alerts | Next.js, Supabase, Firecrawl, Resend | [Live](https://dealdropp.netlify.app/) · [Code](https://github.com/Zuhaib-dev/DealDrop) |
| **Repoviz** — GitHub repo visualizer | React, Vite, TypeScript, Axios | [Live](https://repoviz.netlify.app/) · [Code](https://github.com/Zuhaib-dev/Repoviz) |
| **Lenscapes** — Photography portfolio (PWA) | Next.js, Framer Motion | [Live](https://lenscapes.netlify.app/) · [Code](https://github.com/Zuhaib-dev/photography) |
| **Kilamate** — Weather forecasting app | Next.js, Recharts | [Live](https://kilamate.netlify.app/) · [Code](https://github.com/Zuhaib-dev/Kilamate) |
| **Friend Circle** — Social group showcase | Next.js, MongoDB, Framer Motion | [Live](https://friendcirclee.netlify.app/) |

---

## 📂 Project Structure

```
new-portfolio/
├── app/
│   ├── api/
│   │   ├── github/          # GitHub stats API route
│   │   ├── send-email/      # Contact form email handler
│   │   ├── spotify/         # Spotify now-playing API
│   │   └── visitor-count/   # Visitor counter API
│   ├── blogs/               # Blog listing & dynamic [slug] pages
│   ├── books/               # Books page
│   ├── gears/               # Gear showcase page
│   ├── movies/              # Movies page
│   ├── projects/            # Projects listing & [slug] case studies
│   ├── setup/               # Dev setup page
│   ├── terminal/            # Terminal config page
│   ├── globals.css
│   ├── layout.tsx           # Root layout (SEO, JSON-LD, CSP headers)
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── opengraph-image.tsx  # Dynamic OG image generation
├── components/
│   ├── ui/                  # shadcn/ui primitives (40+ components)
│   ├── command-menu.tsx     # ⌘K command palette
│   ├── hero.tsx             # Hero section with Spotify widget
│   ├── oneko-follower.tsx   # Pixel cat cursor follower
│   ├── custom-follower.tsx  # Custom cursor follower
│   ├── sound-provider.tsx   # UI sound effects
│   ├── smooth-scroll.tsx    # Lenis smooth scrolling
│   └── ...                  # 20+ feature components
├── hooks/
│   ├── use-follower.ts      # Cursor follower state management
│   ├── use-mobile.tsx       # Mobile device detection
│   └── use-toast.ts         # Toast notification hook
├── lib/
│   ├── blogs.ts             # Blog content & metadata
│   ├── projects-data.ts     # Projects data & types
│   ├── spotify.ts           # Spotify API helpers
│   ├── rate-limit.ts        # API rate limiting utility
│   ├── highlight.ts         # Shiki syntax highlighting
│   └── utils.ts             # General utilities (cn, etc.)
├── public/                  # Static assets, favicons, PWA manifest
├── styles/
│   └── globals.css          # Global styles, noise/glow effects
├── next.config.mjs          # Next.js + PWA config, CSP & caching headers
├── tailwind.config.ts
├── next-sitemap.config.js   # Sitemap generation config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Zuhaib-dev/new-portfolio.git
cd new-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your Spotify, email, and other API credentials

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

| Variable | Description |
|---|---|
| `SPOTIFY_CLIENT_ID` | Spotify API client ID |
| `SPOTIFY_CLIENT_SECRET` | Spotify API client secret |
| `SPOTIFY_REFRESH_TOKEN` | Spotify refresh token for now-playing |
| `EMAIL_USER` | Email address for contact form |
| `EMAIL_PASS` | Email password / app password |

### Build for Production

```bash
npm run build   # Builds the app + generates sitemap (postbuild)
npm start       # Starts the production server
```

---

## 🌐 Connect

<p align="center">
  <a href="https://zuhaibrashid.com">🌍 Portfolio</a> ·
  <a href="https://www.linkedin.com/in/zuhaib-rashid-661345318/">LinkedIn</a> ·
  <a href="https://x.com/xuhaib_x9">X / Twitter</a> ·
  <a href="https://github.com/Zuhaib-dev">GitHub</a> ·
  <a href="https://www.instagram.com/zoh.aib__/">Instagram</a> ·
  <a href="mailto:zuhaibrashid01@gmail.com">📧 Email</a>
</p>

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<p align="center">
  Designed & built with ❤️ by <strong>Zuhaib Rashid</strong>
  <br />
  © 2025 All rights reserved.
</p>