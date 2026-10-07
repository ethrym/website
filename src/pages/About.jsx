import { site } from "../config/site";
import PageHeader from "../components/PageHeader";
import ConsultingCTA from "../components/ConsultingCTA";
import usePageTitle from "../lib/usePageTitle";

export default function About() {
  usePageTitle("About Us");
  return (
    <>
      <PageHeader eyebrow="About" title="About Ethrym">
        Practical knowledge for people building products and AI platforms.
      </PageHeader>

      <div className="prose">
        <p>
          Ethrym started with a simple idea: most useful product and architecture knowledge is
          buried in internal decks and never written down clearly. This site writes it down.
        </p>
        <h2>What we do</h2>
        <ul>
          <li><b>Write</b> — regular posts and two books on product management and AI architecture.</li>
          <li><b>Share tools</b> — templates and reference architectures you can use right away.</li>
          <li><b>Advise</b> — selected consulting engagements on product strategy and AI platforms.</li>
        </ul>
        <h2>Principles</h2>
        <ul>
          <li>Plain language over jargon.</li>
          <li>Say what is proven and what is not.</li>
          <li>Every artifact should be usable on Monday morning.</li>
        </ul>
        <h2>Founder</h2>
        <p>
          {site.author} is a product management leader working on enterprise AI platforms, with a
          focus on AI lifecycle, governance, operations, and knowledge.
        </p>
        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${site.email}`}>{site.email}</a> or connect on{" "}
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>.
        </p>
      </div>

      <ConsultingCTA />
    </>
  );
}
