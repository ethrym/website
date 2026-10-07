import { courses } from "../data/courses";
import { site } from "../config/site";
import PageHeader from "../components/PageHeader";
import usePageTitle from "../lib/usePageTitle";

const statusLabel = { planned: "Planned", waitlist: "Waitlist open", open: "Enrolling" };

export default function Courses() {
  usePageTitle("Courses");
  return (
    <>
      <PageHeader eyebrow="Learn" title="Courses">
        Structured learning built on the books. Join the waitlist to hear when enrollment opens.
      </PageHeader>
      <div className="grid grid-2">
        {courses.map((c) => (
          <div key={c.id} className="card product">
            <div className="product-top">
              <span className="badge">{statusLabel[c.status]}</span>
              <span className="muted small">{c.level} · {c.length}</span>
            </div>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <div className="product-foot">
              <span />
              {c.status === "open" && c.url ? (
                <a className="btn btn-primary" href={c.url} target="_blank" rel="noreferrer">Enroll</a>
              ) : (
                <a className="btn btn-outline" href={`mailto:${site.email}?subject=Course%20waitlist%3A%20${encodeURIComponent(c.title)}`}>
                  Join waitlist
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
