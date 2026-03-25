import type { Metadata } from "next";
import { ContactSection } from "@/components/blocks/ContactSection";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "Contact",
  "Contact Brew Haven for reservations, events, questions, and cafe details."
);

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact Us</p>
          <h1>Reach Brew Haven for reservations, questions, or your next cafe visit.</h1>
          <p className="page-copy">
            Get in touch for table bookings, private inquiries, menu questions, or anything else
            you need before stopping by.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
