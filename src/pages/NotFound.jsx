import { Link } from "react-router-dom";
import usePageTitle from "../lib/usePageTitle";

export default function NotFound() {
  usePageTitle("Not found");
  return (
    <section className="page-header">
      <h1>Page not found</h1>
      <p className="lede">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Go home</Link>
    </section>
  );
}
