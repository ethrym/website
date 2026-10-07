import { books } from "../data/books";
import { site } from "../config/site";
import PageHeader from "../components/PageHeader";
import BuyButton from "../components/BuyButton";
import usePageTitle from "../lib/usePageTitle";

const statusLabel = { writing: "In progress", preorder: "Pre-order", available: "Available" };

export default function Books() {
  usePageTitle("Books");
  return (
    <>
      <PageHeader eyebrow="Books" title="Two books, written in public">
        Chapters are developed through the posts first. Join the early-reader list to get drafts.
      </PageHeader>
      <div className="stack">
        {books.map((b) => (
          <section key={b.id} className="card book-detail">
            <span className="badge">{statusLabel[b.status]}</span>
            <h2>{b.title}</h2>
            <p className="subtitle">{b.subtitle}</p>
            <p>{b.description}</p>
            <h4>Planned chapters</h4>
            <ol className="chapters">
              {b.chapters.map((c) => <li key={c}>{c}</li>)}
            </ol>
            <div className="actions">
              <BuyButton url={b.buyUrl} price={b.price} label="Get the book" soonLabel="Not yet available" />
              <a
                className="btn btn-outline"
                href={site.newsletterUrl || `mailto:${site.email}?subject=Early%20reader%3A%20${encodeURIComponent(b.title)}`}
                target={site.newsletterUrl ? "_blank" : undefined}
                rel="noreferrer"
              >
                Join early readers
              </a>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
