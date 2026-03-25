import { teamMembers } from "@/data/team";
import { TeamCard } from "@/components/ui/TeamCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TeamGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Meet The Team"
          title="The people behind the room, the coffee, and the details"
          copy="Our team blends hospitality, technical skill, and a calm service mindset to shape each visit."
        />
        <div className="card-grid team-grid">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
