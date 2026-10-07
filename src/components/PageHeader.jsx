export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="page-header">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1>{title}</h1>
      {children && <p className="lede">{children}</p>}
    </section>
  );
}
