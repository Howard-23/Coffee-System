import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          align="center"
          eyebrow="Testimonials"
          title="Loved by regulars, first-timers, and slow coffee seekers"
          copy="Guests come for the drinks and stay for the atmosphere, service, and sense of ease."
        />
        <div className="card-grid testimonial-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
