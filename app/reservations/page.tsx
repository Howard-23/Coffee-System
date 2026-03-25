import type { Metadata } from "next";
import { CTASection } from "@/components/blocks/CTASection";
import { ReservationSection } from "@/components/blocks/ReservationSection";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "Reservations",
  "Reserve a table at Brew Haven for coffee, brunch, or a cozy evening visit."
);

export default function ReservationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Reserve A Table</p>
          <h1>Settle into Brew Haven with a table booked in advance.</h1>
          <p className="page-copy">
            Reserve a spot for coffee meetings, brunch catch-ups, or a slower evening over
            signature drinks and fresh pastries.
          </p>
        </div>
      </section>

      <ReservationSection />

      <CTASection
        copy="If you need help with timing, group seating, or special requests, contact us directly."
        eyebrow="Need Assistance?"
        primaryHref="/contact"
        primaryLabel="Contact The Team"
        secondaryHref="/menu"
        secondaryLabel="Preview The Menu"
        title="We can help plan the details of your visit"
      />
    </>
  );
}
