"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  links: Array<{ href: string; label: string }>;
}

export function MobileMenu({ links }: MobileMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="mobile-menu-wrap">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className={`mobile-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu-panel ${open ? "open" : ""}`} id="mobile-navigation">
        <nav aria-label="Mobile navigation" className="mobile-nav">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <Button href="/reservations">Reserve a Table</Button>
        </nav>
      </div>
    </div>
  );
}
