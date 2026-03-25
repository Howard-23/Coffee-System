import { AboutPreview } from "@/components/blocks/AboutPreview";
import { CTASection } from "@/components/blocks/CTASection";
import { FeaturedSpecials } from "@/components/blocks/FeaturedSpecials";
import { HeroSection } from "@/components/blocks/HeroSection";
import { HoursSection } from "@/components/blocks/HoursSection";
import { Testimonials } from "@/components/blocks/Testimonials";
import { WhyChooseUs } from "@/components/blocks/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSpecials />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />
      <HoursSection />
      <CTASection
        copy="Plan a relaxed coffee date, a quiet work session, or an evening catch-up over signature drinks."
        eyebrow="Plan Your Visit"
        primaryHref="/reservations"
        primaryLabel="Reserve a Table"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
        title="Make your next visit to Brew Haven feel effortless"
      />
    </>
  );
}
