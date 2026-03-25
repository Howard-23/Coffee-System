import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutPreview() {
  return (
    <section className="section about-preview-section">
      <div className="container split-layout">
        <div className="split-media">
          <Image
            alt="Brew Haven counter with pastries, ceramic cups, and warm interior details"
            height={560}
            src="/images/about-coffee.svg"
            width={520}
          />
        </div>
        <div className="split-content">
          <SectionTitle
            eyebrow="Our Story"
            title="Built for people who want more than just a quick cup"
            copy="Brew Haven began as a neighborhood cafe concept rooted in detail, comfort, and genuinely excellent coffee. The room is designed to feel intimate, calm, and quietly luxurious."
          />
          <ul className="feature-list">
            <li>Seasonal beans sourced with care and roasted for clarity.</li>
            <li>Interiors shaped with warm textures, soft contrast, and relaxed flow.</li>
            <li>Service that feels polished, personal, and never rushed.</li>
          </ul>
          <Button href="/about" variant="secondary">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
