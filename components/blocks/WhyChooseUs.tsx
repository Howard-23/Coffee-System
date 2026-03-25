import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  {
    title: "Fresh Beans",
    copy: "We rotate beans seasonally to keep the cup profile bright, balanced, and expressive."
  },
  {
    title: "Cozy Place",
    copy: "Layered lighting, tactile materials, and intentional seating create a room that invites you in."
  },
  {
    title: "Skilled Baristas",
    copy: "Every drink is dialed in with precision, from espresso texture to milk temperature."
  },
  {
    title: "Fast Service",
    copy: "Even during peak hours, the flow stays efficient without losing warmth or detail."
  }
];

export function WhyChooseUs() {
  return (
    <section className="section muted-section">
      <div className="container">
        <SectionTitle
          align="center"
          eyebrow="Why Choose Us"
          title="A premium cafe experience shaped by detail"
          copy="Everything from the bean program to the seating rhythm is designed to feel smooth, warm, and elevated."
        />
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="card feature-card" key={feature.title}>
              <div className="feature-mark" aria-hidden="true">
                <span />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
