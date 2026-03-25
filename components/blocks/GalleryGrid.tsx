import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function GalleryGrid() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Inside Brew Haven"
            title="A gallery of warm corners, crafted drinks, and cafe moments"
            copy="The atmosphere is grounded in texture, soft contrast, and a calm rhythm that feels easy to return to."
          />
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure className={`gallery-card ${item.variant ?? "default"}`} key={item.image}>
                <Image alt={item.caption} height={520} src={item.image} width={640} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container highlight-grid">
          <article className="highlight-card">
            <h3>Cozy corners</h3>
            <p>Comfortable seating, layered lighting, and thoughtful spacing for quiet conversation.</p>
          </article>
          <article className="highlight-card">
            <h3>Freshly brewed drinks</h3>
            <p>From early espresso to evening signatures, every pour is made to feel intentional.</p>
          </article>
          <article className="highlight-card">
            <h3>Best moments in the cafe</h3>
            <p>Slow mornings, catch-ups with friends, and the everyday ritual of finding your usual.</p>
          </article>
        </div>
      </section>
    </>
  );
}
