import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://brewhaven.vercel.app"),
  title: {
    default: "Brew Haven | Warm Coffee & Crafted Moments",
    template: "%s | Brew Haven"
  },
  description:
    "Brew Haven is a premium coffee shop website concept with handcrafted drinks, warm interiors, and a polished cafe experience.",
  keywords: ["coffee shop", "cafe", "espresso", "Next.js", "Brew Haven", "premium coffee"],
  openGraph: {
    title: "Brew Haven | Warm Coffee & Crafted Moments",
    description:
      "Discover handcrafted coffee, fresh pastries, and a cozy premium cafe atmosphere at Brew Haven.",
    type: "website",
    siteName: "Brew Haven"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
