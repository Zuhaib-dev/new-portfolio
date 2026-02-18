import { createHighlighter } from "shiki";

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-dark"],
      langs: ["tsx", "typescript", "javascript", "bash", "json", "css", "html"],
    });
  }
  return highlighterPromise;
}

/**
 * Takes raw HTML blog content (with <pre><code class="language-*"> blocks)
 * and replaces them with shiki-highlighted HTML.
 */
export async function highlightBlogContent(html: string): Promise<string> {
  const highlighter = await getHighlighter();

  // Match <pre><code class="language-xxx">...</code></pre>
  const codeBlockRegex =
    /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g;

  const matches = [...html.matchAll(codeBlockRegex)];
  if (matches.length === 0) return html;

  let result = html;

  for (const match of matches) {
    const [fullMatch, lang, encodedCode] = match;

    // Decode HTML entities that were encoded in the content string
    const code = encodedCode
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    const supportedLangs = ["tsx", "typescript", "javascript", "bash", "json", "css", "html"];
    const safeLang = supportedLangs.includes(lang) ? lang : "typescript";

    const highlighted = highlighter.codeToHtml(code, {
      lang: safeLang,
      theme: "github-dark",
    });

    // Wrap with our custom styles
    const wrapped = `<div class="code-block not-prose my-6 rounded-xl overflow-hidden border border-white/10">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-[#161b22] border-b border-white/10">
    <span class="w-3 h-3 rounded-full bg-red-500/70"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-500/70"></span>
    <span class="w-3 h-3 rounded-full bg-green-500/70"></span>
    <span class="ml-2 text-xs text-white/30 font-mono">${lang}</span>
  </div>
  ${highlighted}
</div>`;

    result = result.replace(fullMatch, wrapped);
  }

  return result;
}
