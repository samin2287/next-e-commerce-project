"use client";

import Link from "next/link";

export interface CategoryOption {
  slug: string;
  label: string;
}

type CategoryInput =
  | string
  | {
      slug?: string;
      name?: string;
      label?: string;
    };

interface Props {
  categories: Array<CategoryInput | CategoryOption>;
  activeCategory?: string;
}

const normalizeCategory = (cat: CategoryInput | CategoryOption) => {
  if (typeof cat === "string") {
    const slug = cat;
    return { slug, label: slug.replace(/-/g, " ") };
  }
  const slug =
    cat?.slug || cat?.label || cat?.name || (typeof cat === "object" ? "" : "");
  if (!slug) return null;
  const label =
    cat?.label || cat?.name || slug.replace(/-/g, " ");
  return { slug, label };
};

export default function CategoryList({ categories, activeCategory }: Props) {
  if (!categories || categories.length === 0) return null;

  const normalized = categories
    .map(normalizeCategory)
    .filter((item): item is CategoryOption => Boolean(item));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-green-600">
            Browse
          </p>
          <h3 className="text-2xl font-bold text-gray-900">Categories</h3>
        </div>
        <span className="text-sm text-gray-500">
          {normalized.length} options
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2">
        {normalized.map(({ slug, label }) => {
          const isActive =
            activeCategory &&
            activeCategory.toLowerCase() === slug.toLowerCase();
          return (
            <Link
              key={slug}
              href={`/category?category=${encodeURIComponent(slug)}`}
              className={`text-sm capitalize rounded-xl border px-4 py-2 transition flex items-center justify-center text-center ${
                isActive
                  ? "border-green-600 bg-green-50 text-green-700 font-semibold"
                  : "border-gray-200 text-gray-700 hover:border-green-400 hover:bg-green-50"
              }`}
              aria-label={`View ${label} products`}>
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
