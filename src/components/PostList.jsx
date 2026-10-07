import { Link } from "react-router-dom";
import { formatDate } from "../lib/posts";

export default function PostList({ posts }) {
  if (!posts.length) return <p className="muted">No posts yet.</p>;
  return (
    <ul className="post-list">
      {posts.map((p) => (
        <li key={p.slug}>
          <div className="post-meta">
            <span className="tag">{p.category}</span>
            <span>{formatDate(p.date)}</span>
            <span>· {p.readMinutes} min read</span>
          </div>
          <Link to={`/posts/${p.slug}`} className="post-title">{p.title}</Link>
          {p.summary && <p className="post-summary">{p.summary}</p>}
        </li>
      ))}
    </ul>
  );
}
