"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Textarea } from "@/components/ui/Textarea";

export function ReservationSection() {
  const [message, setMessage] = useState("Reserve online and we will confirm by email or phone.");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Reservation request received. A member of the Brew Haven team will confirm shortly.");
  };

  return (
    <>
      <section className="section">
        <div className="container reservation-layout">
          <div className="form-shell">
            <SectionTitle
              eyebrow="Reservation Form"
              title="Book a cozy table for coffee, pastries, or an evening catch-up"
              copy="Whether it is a morning meeting or a slow weekend visit, reserve your preferred time below."
            />
            <form className="form-grid" onSubmit={handleSubmit}>
              <Input id="reservation-name" label="Full Name" name="name" placeholder="Your full name" required type="text" />
              <Input id="reservation-email" label="Email" name="email" placeholder="you@example.com" required type="email" />
              <Input id="reservation-phone" label="Phone Number" name="phone" placeholder="(555) 555-5555" required type="tel" />
              <Input id="reservation-date" label="Date" name="date" required type="date" />
              <Input id="reservation-time" label="Time" name="time" required type="time" />
              <Input id="reservation-guests" label="Number of Guests" min="1" name="guests" placeholder="2" required type="number" />
              <Textarea
                id="reservation-request"
                label="Special Request"
                name="message"
                placeholder="Preferred seating, dietary notes, or occasion details"
                rows={5}
              />
              <div className="form-actions">
                <Button type="submit">Send Reservation Request</Button>
                <p className="form-status" role="status">
                  {message}
                </p>
              </div>
            </form>
          </div>

          <aside className="info-panel">
            <h3>Reservation Info</h3>
            <ul className="feature-list">
              <li>Reservations are held for 15 minutes unless we hear from you.</li>
              <li>Walk-ins are always welcome when space is available.</li>
              <li>Peak hours are usually Friday evening and weekend brunch.</li>
            </ul>
            <div className="contact-alt">
              <h4>Prefer to book by phone?</h4>
              <p>(555) 018-2435</p>
              <p>18 Cedar Lane, Brookfield</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
