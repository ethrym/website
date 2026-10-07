// Loads Markdown posts from src/content/posts/*.md
// To add a post: create a new .md file with front matter (title, date, category, summary).
import { marked } from "marked";

const files = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (/^".*"$/.test(value) || /^'.*'$/.test(value)) value = value.slice(1, -1);
    data[key] = value;
  });
  return { data, body: match[2] };
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop().replace(/\.md$/, "");
    const { data, body } = parseFrontMatter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      category: data.category || "General",
      summary: data.summary || "",
      html: marked.parse(body),
      readMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug) => posts.find((p) => p.slug === slug);

export const formatDate = (iso) =>
  iso
    ? new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
