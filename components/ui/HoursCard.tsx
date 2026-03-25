import type { HourEntry } from "@/data/hours";

export function HoursCard({ entry }: { entry: HourEntry }) {
  return (
    <article className="hours-row">
      <div>
        <h3>{entry.day}</h3>
      </div>
      <div className="hours-time">
        <span>{entry.opening}</span>
        <span>{entry.closing}</span>
      </div>
    </article>
  );
}
