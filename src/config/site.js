// ─────────────────────────────────────────────────────────────
// Edit this file to change site-wide settings.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: "Ethrym",
  domain: "ethrym.com", // TODO: confirm exact domain (e.g., ethrym.com / ethrym.ai)
  tagline: "Product management and AI architecture, written from the field.",
  author: "Ganesh Walavalkar",
  email: "hello@ethrym.com", // TODO: set up Cloudflare Email Routing for this address
  linkedin: "https://www.linkedin.com/", // TODO: your profile URL
  newsletterUrl: "", // optional: Substack / Buttondown / ConvertKit signup link
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Posts", to: "/posts" },
  { label: "Books", to: "/books" },
  { label: "Templates", to: "/templates" },
  { label: "Unvalidated RA", to: "/unvalidated-ra" },
  { label: "Courses", to: "/courses" },
  { label: "About Us", to: "/about" },
];
