import { menuCategories, menuItems, signatureDrinks } from "@/data/menu";
import { MenuCard } from "@/components/ui/MenuCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { groupByCategory } from "@/lib/utils";

export function MenuGrid() {
  const groupedItems = groupByCategory(menuItems);

  return (
    <>
      <section className="section">
        <div className="container">
          <nav aria-label="Menu category navigation" className="category-nav">
            {menuCategories.map((category) => (
              <a href={`#${category.id}`} key={category.id}>
                <strong>{category.label}</strong>
                <span>{category.description}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container menu-sections">
          {menuCategories.map((category) => (
            <div className="menu-category-block" id={category.id} key={category.id}>
              <SectionTitle
                eyebrow={category.label}
                title={category.description}
                copy="Designed for clarity on the menu and comfort in the cup."
              />
              <div className="card-grid menu-grid">
                {groupedItems[category.id]?.map((item) => <MenuCard item={item} key={item.id} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionTitle
            eyebrow="Signature Spotlight"
            title="The drinks that define Brew Haven"
            copy="These are our most characterful recipes, built to feel refined, warm, and a little unexpected."
          />
          <div className="signature-grid">
            {signatureDrinks.map((item) => (
              <article className="signature-card" key={item.id}>
                <div>
                  <span className="pill-tag">{item.tag ?? "Signature"}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <strong>{item.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
