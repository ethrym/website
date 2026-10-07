// "Unvalidated" Reference Architectures — designs shared before production validation.
// maturity: "concept" | "prototype" | "field-tested"
export const architectures = [
  {
    id: "enterprise-rag",
    title: "Enterprise RAG with Governed Knowledge",
    maturity: "prototype",
    price: "$99",
    description: "Ingestion, chunking, retrieval, and answer grounding with access control and citation tracking.",
    includes: ["Architecture diagram", "Component rationale", "Sizing worksheet", "Known gaps"],
    buyUrl: "",
  },
  {
    id: "mcp-ops",
    title: "MCP-Based IT Operations Agent",
    maturity: "concept",
    price: "$79",
    description: "Agents that read telemetry and open/update tickets through MCP servers with human approval steps.",
    includes: ["Architecture diagram", "Tool contracts", "Approval flow", "Known gaps"],
    buyUrl: "",
  },
  {
    id: "ai-control-plane",
    title: "AI Control Plane: Lifecycle, Governance, Operations, Knowledge",
    maturity: "concept",
    price: "$149",
    description: "A four-pillar reference for running many AI applications on shared infrastructure.",
    includes: ["Layered diagram", "Capability map", "Build-vs-buy notes", "Known gaps"],
    buyUrl: "",
  },
  {
    id: "edge-inference",
    title: "Edge Inference on Small GPUs",
    maturity: "prototype",
    price: "$49",
    description: "Running quantized models on Jetson-class devices with remote monitoring and model updates.",
    includes: ["Hardware bill of materials", "Deployment steps", "Benchmarks template", "Known gaps"],
    buyUrl: "",
  },
];

export const maturityLabel = {
  concept: "Concept",
  prototype: "Prototype",
  "field-tested": "Field-tested",
};
