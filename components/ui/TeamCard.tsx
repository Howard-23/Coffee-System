import Image from "next/image";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="card team-card">
      <div className="card-media">
        <Image alt={`${member.name}, ${member.role}`} height={360} src={member.image} width={320} />
      </div>
      <div className="card-content">
        <p className="eyebrow">{member.role}</p>
        <h3>{member.name}</h3>
        <p>{member.bio}</p>
      </div>
    </article>
  );
}
