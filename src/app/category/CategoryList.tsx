"use client";

import Container from "@/components/Container";
import Link from "next/link";

interface Props {
  categories: any[];
}

export default function CategoryList({ categories }: Props) {
  if (!categories || categories.length === 0) return null;

  return (
    <Container>
      <div className="w-full p-4">
      <h3 className="text-2xl font-bold mb-3 text-gray-800">Categories</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {categories
          .filter(Boolean)
          .map((cat, idx) => {
            const label = typeof cat === "string" ? cat : cat?.name || cat?.slug || String(cat);
            const key = `${label}-${idx}`;
            return (
              <Link
                key={key}
                href={`/category?category=${encodeURIComponent(label)}`}
                className="block w-full px-3 py-2 border rounded-md text-center capitalize hover:bg-emerald-600 hover:text-white transition text-sm truncate"
                aria-label={`View ${label} products`}
              >
                {label}
              </Link>
            );
          })}
      </div>
    </div>
    </Container>
  );
}
