import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Book a Table" },
  { href: "/contact", label: "Contact" }
];

const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.facebook.com", label: "Facebook" },
  { href: "https://www.tiktok.com", label: "TikTok" }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Brew Haven</p>
          <h2>Warm coffee, thoughtful design, and room to stay awhile.</h2>
          <p>
            Visit us for handcrafted drinks, fresh pastries, and a cafe atmosphere shaped for slow
            mornings and easy evenings.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="footer-list">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Visit Us</h3>
          <ul className="footer-list">
            <li>18 Cedar Lane, Brookfield</li>
            <li>(555) 018-2435</li>
            <li>hello@brewhaven.com</li>
            <li>Mon-Wed: 7 AM - 7 PM</li>
            <li>Thu-Sat: Late hours until 9 PM</li>
          </ul>
        </div>

        <div>
          <h3>Social</h3>
          <ul className="footer-list">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>(c) 2026 Brew Haven. Designed for premium cafe experiences.</p>
      </div>
    </footer>
  );
}
