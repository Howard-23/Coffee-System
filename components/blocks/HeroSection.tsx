import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-media">
        <Image
          alt="A warm coffee shop interior with espresso drinks and soft lighting"
          fill
          priority
          sizes="100vw"
          src="/images/hero-coffee.svg"
        />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">Warm coffee-inspired comfort</p>
        <h1>Crafted coffee, quiet corners, and a premium cafe atmosphere.</h1>
        <p className="hero-copy">
          Brew Haven brings together seasonal espresso, fresh pastries, and design-led hospitality
          in a space made for slow mornings and meaningful pauses.
        </p>
        <div className="hero-actions">
          <Button href="/menu">View Menu</Button>
          <Button href="/reservations" variant="secondary">
            Reserve a Table
          </Button>
        </div>
      </div>
    </section>
  );
}
