import { featuredSpecials } from "@/data/menu";
import { MenuCard } from "@/components/ui/MenuCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FeaturedSpecials() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Featured Specials"
          title="A few favorites worth arriving early for"
          copy="Our signature pours and pastry pairings are designed to feel rich, balanced, and memorable."
        />
        <div className="card-grid specials-grid">
          {featuredSpecials.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
