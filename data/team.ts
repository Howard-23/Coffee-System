export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Lena Hart",
    role: "Founder & Owner",
    bio: "Lena shapes Brew Haven around hospitality, design, and carefully sourced seasonal beans.",
    image: "/images/team/lena-hart.svg"
  },
  {
    name: "Marco Silva",
    role: "Head Barista",
    bio: "Marco leads training, dialing in every espresso shot with consistency and balance.",
    image: "/images/team/marco-silva.svg"
  },
  {
    name: "Ivy Morgan",
    role: "Guest Experience Lead",
    bio: "Ivy curates the flow of the room so each visit feels calm, easy, and personal.",
    image: "/images/team/ivy-morgan.svg"
  }
];
