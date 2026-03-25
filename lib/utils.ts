import type { Metadata } from "next";

export function buildMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Brew Haven"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function groupByCategory<T extends { category: string }>(items: T[]) {
  return items.reduce<Record<string, T[]>>((groups, item) => {
    groups[item.category] = groups[item.category] ? [...groups[item.category], item] : [item];
    return groups;
  }, {});
}
