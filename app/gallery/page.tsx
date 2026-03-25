import type { Metadata } from "next";
import { CTASection } from "@/components/blocks/CTASection";
import { GalleryGrid } from "@/components/blocks/GalleryGrid";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "Gallery",
  "Explore Brew Haven interiors, coffee moments, pastries, and cafe atmosphere."
);

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>A closer look at the textures, pours, and moments that define Brew Haven.</h1>
          <p className="page-copy">
            Explore the cafe through a visual collection of warm interiors, signature drinks, and
            everyday scenes from around the room.
          </p>
        </div>
      </section>

      <GalleryGrid />

      <CTASection
        copy="The easiest way to experience the atmosphere is to visit in person and stay awhile."
        eyebrow="See It In Person"
        primaryHref="/reservations"
        primaryLabel="Reserve A Table"
        secondaryHref="/menu"
        secondaryLabel="View Menu"
        title="Step into the full Brew Haven atmosphere"
      />
    </>
  );
}
