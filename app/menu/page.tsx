import type { Metadata } from "next";
import { CTASection } from "@/components/blocks/CTASection";
import { MenuGrid } from "@/components/blocks/MenuGrid";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "Menu",
  "Browse Brew Haven coffee, pastries, snacks, and signature drinks."
);

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Menu</p>
          <h1>Crafted drinks, fresh pastries, and cafe favorites with depth and comfort.</h1>
          <p className="page-copy">
            Browse classic coffee, signature specials, and all-day bites designed for slow moments
            and everyday rituals.
          </p>
        </div>
      </section>

      <MenuGrid />

      <CTASection
        copy="Choose your favorites ahead of time, then reserve a table for a relaxed Brew Haven visit."
        eyebrow="Make It A Visit"
        primaryHref="/reservations"
        primaryLabel="Reserve Now"
        secondaryHref="/contact"
        secondaryLabel="Ask A Question"
        title="Pair the menu with a calm table and an easy afternoon"
      />
    </>
  );
}
