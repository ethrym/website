import { architectures, maturityLabel } from "../data/architectures";
import PageHeader from "../components/PageHeader";
import BuyButton from "../components/BuyButton";
import usePageTitle from "../lib/usePageTitle";

export default function Architectures() {
  usePageTitle("Unvalidated Reference Architectures");
  return (
    <>
      <PageHeader eyebrow="Shop" title="Unvalidated Reference Architectures">
        Designs shared before they are proven — so you can start sooner, with eyes open.
      </PageHeader>

      <aside className="notice">
        <strong>What “unvalidated” means.</strong> These architectures have not been validated in a
        production deployment. Each one states its maturity and lists known gaps. Treat them as a
        well-reasoned starting point, not a certified design. Test before you rely on them.
      </aside>

      <div className="legend">
        <span><b>Concept</b> — reasoned on paper</span>
        <span><b>Prototype</b> — built and run in a lab</span>
        <span><b>Field-tested</b> — used in at least one real environment</span>
      </div>

      <div className="stack">
        {architectures.map((a) => (
          <div key={a.id} className="card product product-wide">
            <div className="product-top">
              <span className={`maturity maturity-${a.maturity}`}>{maturityLabel[a.maturity]}</span>
              <span className="price">{a.price}</span>
            </div>
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <ul className="includes">
              {a.includes.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <div className="product-foot">
              <span />
              <BuyButton url={a.buyUrl} price={a.price} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
