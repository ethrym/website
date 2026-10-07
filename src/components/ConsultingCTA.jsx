import { site } from "../config/site";

export default function ConsultingCTA() {
  return (
    <section className="cta">
      <div>
        <h2>Need help with a product or AI platform decision?</h2>
        <p>
          Limited consulting engagements: product strategy, roadmap reviews, AI architecture
          assessments, and competitive positioning.
        </p>
      </div>
      <a className="btn btn-light" href={`mailto:${site.email}?subject=Consulting%20inquiry`}>
        Start a conversation
      </a>
    </section>
  );
}
