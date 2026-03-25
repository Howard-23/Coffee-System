export type MenuCategory = "coffee" | "non-coffee" | "pastries" | "snacks" | "signature";

export interface MenuCategoryLink {
  id: MenuCategory;
  label: string;
  description: string;
}

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: string;
  tag?: string;
  image: string;
  featured?: boolean;
  signature?: boolean;
}

export const menuCategories: MenuCategoryLink[] = [
  { id: "coffee", label: "Coffee", description: "Espresso-led classics and slow-crafted brews." },
  { id: "non-coffee", label: "Non-Coffee", description: "Silky alternatives, teas, and refreshers." },
  { id: "pastries", label: "Pastries", description: "Freshly baked sweetness made for coffee breaks." },
  { id: "snacks", label: "Snacks", description: "Savory cafe plates and lighter bites." },
  { id: "signature", label: "Signature Drinks", description: "Our house creations with depth and character." }
];

export const menuItems: MenuItem[] = [
  {
    id: "velvet-latte",
    category: "coffee",
    name: "Velvet Latte",
    description: "Double espresso with steamed milk and a cocoa-dusted finish.",
    price: "$5.80",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    featured: true
  },
  {
    id: "brown-sugar-cortado",
    category: "coffee",
    name: "Brown Sugar Cortado",
    description: "Balanced espresso, textured milk, and a touch of molasses sweetness.",
    price: "$5.10",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    featured: true
  },
  {
    id: "slow-bar-pour-over",
    category: "coffee",
    name: "Slow Bar Pour Over",
    description: "Single-origin beans brewed to highlight florals, caramel, and citrus notes.",
    price: "$6.90",
    tag: "Seasonal",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "iced-shaken-espresso",
    category: "coffee",
    name: "Iced Shaken Espresso",
    description: "Cold, lively espresso shaken with oat milk and raw cane syrup.",
    price: "$6.20",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "vanilla-bean-cream",
    category: "non-coffee",
    name: "Vanilla Bean Cream",
    description: "Steamed vanilla milk with whipped cream and toasted sugar.",
    price: "$4.90",
    tag: "New",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "amber-chai",
    category: "non-coffee",
    name: "Amber Chai",
    description: "House chai concentrate with cinnamon, cardamom, and velvety milk.",
    price: "$5.40",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "citrus-cold-spritz",
    category: "non-coffee",
    name: "Citrus Cold Spritz",
    description: "Sparkling citrus tea with orange peel, basil, and tonic brightness.",
    price: "$5.70",
    image: "https://images.unsplash.com/photo-1496318447583-f524534e9ce1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "butter-croissant",
    category: "pastries",
    name: "Butter Croissant",
    description: "Flaky laminated pastry baked until crisp and honey-golden.",
    price: "$3.90",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    featured: true
  },
  {
    id: "hazelnut-morning-bun",
    category: "pastries",
    name: "Hazelnut Morning Bun",
    description: "Swirled pastry with toasted hazelnut praline and espresso glaze.",
    price: "$4.60",
    tag: "Chef Pick",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "almond-financier",
    category: "pastries",
    name: "Almond Financier",
    description: "Buttery almond cake with browned butter aroma and crisp edges.",
    price: "$4.20",
    image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "truffle-toastie",
    category: "snacks",
    name: "Truffle Toastie",
    description: "Sourdough toastie with aged cheddar, mushrooms, and truffle butter.",
    price: "$8.90",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "garden-pesto-sandwich",
    category: "snacks",
    name: "Garden Pesto Sandwich",
    description: "Mozzarella, basil pesto, roasted tomatoes, and peppery greens.",
    price: "$8.40",
    image: "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "maple-sea-salt-mocha",
    category: "signature",
    name: "Maple Sea Salt Mocha",
    description: "Espresso, dark chocolate, maple syrup, and delicate sea salt cream.",
    price: "$6.80",
    tag: "Signature",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
    featured: true,
    signature: true
  },
  {
    id: "campfire-latte",
    category: "signature",
    name: "Campfire Latte",
    description: "Espresso layered with smoked syrup, toasted marshmallow foam, and spice.",
    price: "$6.60",
    tag: "Signature",
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80",
    featured: true,
    signature: true
  },
  {
    id: "rose-pistachio-latte",
    category: "signature",
    name: "Rose Pistachio Latte",
    description: "Fragrant rose, pistachio cream, and espresso in a silky warm pour.",
    price: "$6.90",
    tag: "Limited",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    signature: true
  }
];

export const featuredSpecials = menuItems.filter((item) => item.featured);
export const signatureDrinks = menuItems.filter((item) => item.signature);
