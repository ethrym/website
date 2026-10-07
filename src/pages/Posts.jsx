import { useState } from "react";
import { posts } from "../lib/posts";
import PageHeader from "../components/PageHeader";
import PostList from "../components/PostList";
import usePageTitle from "../lib/usePageTitle";

export default function Posts() {
  usePageTitle("Posts");
  const categories = ["All", ...new Set(posts.map((p) => p.category))];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <PageHeader eyebrow="Writing" title="Posts">
        Regular notes on product management and AI architecture.
      </PageHeader>
      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`chip ${active === c ? "chip-active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <PostList posts={filtered} />
    </>
  );
}
