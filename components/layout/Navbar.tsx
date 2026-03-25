import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link aria-label="Brew Haven home page" className="brand" href="/">
          <span className="brand-mark">BH</span>
          <span>
            Brew Haven
            <small>Crafted coffee. Calm moments.</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="desktop-nav">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="navbar-actions">
          <Button className="desktop-cta" href="/reservations" variant="secondary">
            Reserve
          </Button>
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
