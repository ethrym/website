import { Link } from "react-router-dom";
import { site } from "../config/site";
import { posts } from "../lib/posts";
import { books } from "../data/books";
import { templates } from "../data/templates";
import { architectures } from "../data/architectures";
import PostList from "../components/PostList";
import ConsultingCTA from "../components/ConsultingCTA";
import usePageTitle from "../lib/usePageTitle";

const statusLabel = { writing: "In progress", preorder: "Pre-order", available: "Available" };

export default function Home() {
  usePageTitle("");
  return (
    <>
      <section className="hero">
        <div className="eyebrow">Product Management · AI Architecture</div>
        <h1>{site.tagline}</h1>
        <p className="lede">
          Essays, books, templates, and reference architectures for people who build products
          and the AI platforms underneath them.
        </p>
        <div className="hero-actions">
          <Link to="/posts" className="btn btn-primary">Read the posts</Link>
          <Link to="/books" className="btn btn-outline">See the books</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Latest posts</h2>
          <Link to="/posts" className="more">All posts →</Link>
        </div>
        <PostList posts={posts.slice(0, 3)} />
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Books in progress</h2>
          <Link to="/books" className="more">Details →</Link>
        </div>
        <div className="grid grid-2">
          {books.map((b) => (
            <Link to="/books" key={b.id} className="card book-card">
              <span className="badge">{statusLabel[b.status]}</span>
              <h3>{b.title}</h3>
              <p>{b.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2">
          <div className="card card-tinted">
            <h3>Templates</h3>
            <p>{templates.length} ready-to-use documents for PMs and architects.</p>
            <Link to="/templates" className="more">Browse templates →</Link>
          </div>
          <div className="card card-tinted">
            <h3>Unvalidated Reference Architectures</h3>
            <p>{architectures.length} designs shared early — with their gaps stated openly.</p>
            <Link to="/unvalidated-ra" className="more">Browse architectures →</Link>
          </div>
        </div>
      </section>

      <ConsultingCTA />
    </>
  );
}
