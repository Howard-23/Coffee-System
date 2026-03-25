import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="card testimonial-card">
      <div className="testimonial-top">
        <div aria-hidden="true" className="avatar-placeholder">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.role}</p>
        </div>
      </div>
      <p className="testimonial-quote">
        &quot;{testimonial.quote}&quot;
      </p>
      <p aria-label={`${testimonial.rating} out of 5 stars`} className="rating-stars">
        {`Rating ${testimonial.rating}/5`}
      </p>
    </article>
  );
}
