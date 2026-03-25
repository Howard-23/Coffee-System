"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Textarea } from "@/components/ui/Textarea";

export function ContactSection() {
  const [message, setMessage] = useState("Send us a note and we will get back to you soon.");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Message sent. Thanks for reaching out to Brew Haven.");
  };

  return (
    <>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-stack">
            <SectionTitle
              eyebrow="Contact Info"
              title="Come by for your next coffee break"
              copy="We are easy to find, simple to reach, and happy to help with reservations, events, or general questions."
            />

            <div className="contact-grid">
              <article className="info-card">
                <h3>Address</h3>
                <p>18 Cedar Lane, Brookfield</p>
              </article>
              <article className="info-card">
                <h3>Phone</h3>
                <p>(555) 018-2435</p>
              </article>
              <article className="info-card">
                <h3>Email</h3>
                <p>hello@brewhaven.com</p>
              </article>
              <article className="info-card">
                <h3>Opening Hours</h3>
                <p>Mon-Wed: 7 AM - 7 PM</p>
                <p>Thu-Sat: 7 AM - 9 PM</p>
                <p>Sun: 8 AM - 6 PM</p>
              </article>
            </div>
          </div>

          <div className="form-shell">
            <SectionTitle
              eyebrow="Send A Message"
              title="Contact the Brew Haven team"
              copy="Use the form below for questions, catering inquiries, or reservation support."
            />
            <form className="form-grid" onSubmit={handleSubmit}>
              <Input id="contact-name" label="Name" name="name" placeholder="Your name" required type="text" />
              <Input id="contact-email" label="Email" name="email" placeholder="you@example.com" required type="email" />
              <Input id="contact-subject" label="Subject" name="subject" placeholder="What can we help with?" required type="text" />
              <Textarea id="contact-message" label="Message" name="message" placeholder="Write your message here" required rows={6} />
              <div className="form-actions">
                <Button type="submit">Submit Message</Button>
                <p className="form-status" role="status">
                  {message}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container contact-bottom-grid">
          <div className="map-placeholder">
            <span>Map Placeholder</span>
            <p>Static location block for Brew Haven, ready to swap with an embedded map later.</p>
          </div>
          <div className="social-panel">
            <h3>Follow Along</h3>
            <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
              Instagram
            </a>
            <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
              Facebook
            </a>
            <a href="https://www.tiktok.com" rel="noreferrer" target="_blank">
              TikTok
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
