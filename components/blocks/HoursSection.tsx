import { openingHours } from "@/data/hours";
import { HoursCard } from "@/components/ui/HoursCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function HoursSection() {
  return (
    <section className="section hours-section">
      <div className="container hours-layout">
        <div>
          <SectionTitle
            eyebrow="Opening Hours"
            title="Drop by for a quick espresso or settle in for the evening"
            copy="We open early for commuters, stay relaxed for daytime meetings, and extend later into the evening from Thursday onward."
          />
        </div>
        <div className="hours-panel">
          {openingHours.map((entry) => (
            <HoursCard entry={entry} key={entry.day} />
          ))}
        </div>
      </div>
    </section>
  );
}
