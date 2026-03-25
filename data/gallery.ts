export interface GalleryItem {
  image: string;
  caption: string;
  variant?: "default" | "wide" | "tall";
}

export const galleryItems: GalleryItem[] = [
  {
    image: "/images/gallery/gallery-interior-01.svg",
    caption: "Soft textures, warm timber, and a calm all-day cafe floor.",
    variant: "wide"
  },
  {
    image: "/images/gallery/gallery-drink-01.svg",
    caption: "Signature drinks poured with latte art and seasonal garnish."
  },
  {
    image: "/images/gallery/gallery-corner-01.svg",
    caption: "Quiet corners designed for reading, meetings, and slow mornings.",
    variant: "tall"
  },
  {
    image: "/images/gallery/gallery-pastry-01.svg",
    caption: "Fresh pastry cabinets stocked with daily small-batch bakes."
  },
  {
    image: "/images/gallery/gallery-bar-01.svg",
    caption: "The espresso bar at the center of the room.",
    variant: "wide"
  },
  {
    image: "/images/gallery/gallery-community-01.svg",
    caption: "Shared tables made for conversation and easy afternoons."
  }
];
