import Image from "next/image";
import type { MenuItem } from "@/data/menu";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="card menu-card">
      <div className="card-media">
        <Image alt={item.name} height={320} src={item.image} width={320} />
      </div>
      <div className="card-content">
        <div className="card-meta">
          {item.tag ? <span className="pill-tag">{item.tag}</span> : <span className="pill-tag muted">House Pick</span>}
          <strong className="price-tag">{item.price}</strong>
        </div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
