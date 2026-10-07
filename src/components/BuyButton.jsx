// Renders a checkout link when buyUrl is set; otherwise a disabled "Coming soon" state.
export default function BuyButton({ url, price, label = "Buy", soonLabel = "Coming soon" }) {
  if (!url) {
    return <span className="btn btn-disabled">{soonLabel}</span>;
  }
  return (
    <a className="btn btn-primary" href={url} target="_blank" rel="noreferrer">
      {label}{price ? ` · ${price}` : ""}
    </a>
  );
}
