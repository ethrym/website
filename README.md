# Ethrym — website

React (Vite) + React Router. Teal theme. 15% | 70% | 15% layout.

## Run locally
    npm install
    npm run dev          # http://localhost:5173

## Where to edit
| What | File |
|---|---|
| Site name, email, domain, LinkedIn | src/config/site.js |
| Menu | src/config/site.js (nav) |
| Posts | add a .md file in src/content/posts/ |
| Books | src/data/books.js |
| Templates (for sale) | src/data/templates.js |
| Unvalidated RA (for sale) | src/data/architectures.js |
| Courses | src/data/courses.js |
| Colors / layout width | src/styles/global.css (:root) |

### New post format (src/content/posts/2026-10-20-my-post.md)
    ---
    title: My Post Title
    date: 2026-10-20
    category: AI Architecture
    summary: One-line summary.
    ---
    Markdown body here.

### Selling
Set `buyUrl` on any template / RA / book to a checkout link
(Stripe Payment Link, Lemon Squeezy, or Gumroad). Empty = "Coming soon".

## Deploy to Cloudflare Pages
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: React (Vite). Build command: `npm run build`. Output directory: `dist`.
4. After deploy → Custom domains → add your ethrym domain (DNS is already on Cloudflare, so it's automatic).

`public/_redirects` makes deep links like /posts/my-post work on refresh.
