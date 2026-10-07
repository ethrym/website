import { useState } from "react";
import { templates } from "../data/templates";
import PageHeader from "../components/PageHeader";
import BuyButton from "../components/BuyButton";
import usePageTitle from "../lib/usePageTitle";

export default function Templates() {
  usePageTitle("Templates");
  const categories = ["All", ...new Set(templates.map((t) => t.category))];
  const [active, setActive] = useState("All");
  const list = active === "All" ? templates : templates.filter((t) => t.category === active);

  return (
    <>
      <PageHeader eyebrow="Shop" title="Templates">
        Working documents for product managers and architects — cleaned up, explained, and ready to use.
      </PageHeader>
      <div className="filters">
        {categories.map((c) => (
          <button key={c} className={`chip ${active === c ? "chip-active" : ""}`} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-2">
        {list.map((t) => (
          <div key={t.id} className="card product">
            <div className="product-top">
              <span className="tag">{t.category}</span>
              <span className="price">{t.price}</span>
            </div>
            <h3>{t.title}</h3>
            <p>{t.description}</p>
            <div className="product-foot">
              <span className="muted small">{t.format}</span>
              <BuyButton url={t.buyUrl} price={t.price} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
