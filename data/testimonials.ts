export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ariana Brooks",
    role: "Weekend regular",
    quote: "The space feels warm without trying too hard, and the maple sea salt mocha is genuinely memorable.",
    rating: 5
  },
  {
    name: "Daniel Chen",
    role: "Remote worker",
    quote: "Strong coffee, soft lighting, and a calm energy that makes it easy to stay for hours.",
    rating: 5
  },
  {
    name: "Mia Patel",
    role: "Neighborhood local",
    quote: "Their baristas are consistent, welcoming, and precise. It feels like a premium cafe with real personality.",
    rating: 5
  }
];
