// status: "writing" | "preorder" | "available"
// buyUrl: Stripe Payment Link, Gumroad, Lemon Squeezy, Amazon, etc. Leave "" until ready.
export const books = [
  {
    id: "product-management",
    title: "Product Management, Plainly",
    subtitle: "Turning strategy into roadmaps, roadmaps into releases, and releases into revenue.",
    status: "writing",
    description:
      "A practical guide for product managers working on enterprise and platform products — positioning, roadmaps that separate committed from future, use-case definition, and executive communication.",
    chapters: [
      "Why products fail before they ship",
      "Finding the killer use case",
      "Roadmaps: committed vs. future",
      "Positioning against competitors",
      "Writing for executives",
      "Field enablement that actually sells",
    ],
    buyUrl: "",
    price: "",
  },
  {
    id: "ai-architecture",
    title: "AI Architecture for the Enterprise",
    subtitle: "Control planes, governance, and operations for AI that survives production.",
    status: "writing",
    description:
      "An architect's view of enterprise AI — lifecycle, governance, operations, and knowledge — with patterns for agents, RAG, MCP, observability, and data foundations.",
    chapters: [
      "From model demos to production systems",
      "The AI control plane",
      "Data foundations and knowledge engineering",
      "Agents, tools, and MCP",
      "Governance and audit evidence",
      "Operating AI: observability and cost",
    ],
    buyUrl: "",
    price: "",
  },
];
