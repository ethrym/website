import { Link } from "react-router-dom";
import { site, nav } from "../config/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="brand footer-brand">{site.name}</div>
          <p className="muted">{site.tagline}</p>
        </div>
        <nav className="footer-nav">
          {nav.map((n) => (
            <Link key={n.to} to={n.to}>{n.label}</Link>
          ))}
        </nav>
        <div className="footer-meta">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="muted">© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
