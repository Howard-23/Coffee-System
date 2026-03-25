import Image from "next/image";
import type { Metadata } from "next";
import { CTASection } from "@/components/blocks/CTASection";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "About",
  "Learn the story, mission, values, and team behind Brew Haven."
);

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Brew Haven</p>
          <h1>A coffee house built around warmth, craft, and calm hospitality.</h1>
          <p className="page-copy">
            Brew Haven was imagined as a premium neighborhood cafe where quality ingredients,
            thoughtful interiors, and steady service come together in one welcoming room.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout story-layout">
          <div className="split-media">
            <Image
              alt="Warm Brew Haven cafe interior with bar seating and pastries"
              height={620}
              src="/images/about-coffee.svg"
              width={520}
            />
          </div>
          <div className="split-content">
            <p className="eyebrow">Our Story</p>
            <h2>From a simple espresso ritual to a full cafe experience</h2>
            <p>
              The idea for Brew Haven started with the belief that coffee should feel both elevated
              and comfortable. Every element, from sourcing to service flow, is meant to create a
              sense of ease.
            </p>
            <div className="story-panels">
              <article className="story-panel">
                <h3>Mission</h3>
                <p>
                  Serve beautifully balanced drinks and create a room people genuinely want to
                  return to.
                </p>
              </article>
              <article className="story-panel">
                <h3>Vision</h3>
                <p>
                  Become a neighborhood standard for design-led coffee culture and thoughtful
                  hospitality.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <TeamGrid />

      <section className="section muted-section">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Values</p>
            <h2>What guides the Brew Haven experience</h2>
            <p>
              We keep the standard high across ingredients, service, and the atmosphere people step
              into each day.
            </p>
          </div>
          <div className="values-grid">
            <article className="value-card">
              <h3>Quality Ingredients</h3>
              <p>Seasonal beans, fresh bakes, and honest sourcing shape everything on the menu.</p>
            </article>
            <article className="value-card">
              <h3>Customer Experience</h3>
              <p>We design the service to feel attentive, easy, and consistently polished.</p>
            </article>
            <article className="value-card">
              <h3>Community</h3>
              <p>The cafe is built as a local meeting point for work, rest, and conversation.</p>
            </article>
            <article className="value-card">
              <h3>Passion For Coffee</h3>
              <p>Technique matters, but so does warmth. We care about both with equal rigor.</p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        copy="Explore the menu, discover our signature drinks, or stop by and settle into your new favorite corner."
        eyebrow="Next Stop"
        primaryHref="/menu"
        primaryLabel="Explore The Menu"
        secondaryHref="/contact"
        secondaryLabel="Plan Your Visit"
        title="See what Brew Haven is serving today"
      />
    </>
  );
}
