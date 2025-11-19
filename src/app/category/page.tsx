import React from "react";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/Pagination";
import CategorySelector, { CategoryOption } from "./CategoryList";
import { getdata } from "@/helpers/index";
import Container from "@/components/Container";

interface PageSearchParams {
  [key: string]: string | string[];
}

interface PageProps {
  searchParams?: PageSearchParams;
}

export default async function Page({ searchParams }: PageProps) {
  const sp = (searchParams ?? {}) as PageSearchParams;

  const category = Array.isArray(sp.category)
    ? sp.category[0]
    : sp.category ?? "";

  const pageNum =
    parseInt(Array.isArray(sp.page) ? sp.page[0] : sp.page ?? "1", 10) || 1;
  const limit =
    parseInt(Array.isArray(sp.limit) ? sp.limit[0] : sp.limit ?? "8", 10) || 8;

  const skip = (pageNum - 1) * limit;

  const catsData = await getdata("https://dummyjson.com/products/categories");
  const categoriesRaw = Array.isArray(catsData) ? catsData : [];
  const seen = new Set<string>();
  const categories: CategoryOption[] = (
    categoriesRaw
      .map((cat) => {
        if (typeof cat === "string") {
          const slug = cat;
          return {
            slug,
            label: slug.replace(/-/g, " "),
          };
        }
        const slug =
          (cat as { slug?: string; name?: string })?.slug ||
          (cat as { name?: string })?.name ||
          "";
        if (!slug) return null;
        const label =
          (cat as { name?: string })?.name || slug.replace(/-/g, " ");
        return { slug, label };
      })
      .filter(Boolean) as CategoryOption[]
  ).filter((category) => {
    if (seen.has(category.slug)) return false;
    seen.add(category.slug);
    return true;
  });

  if (!category) {
    return (
      <div className="py-12 bg-gradient-to-b from-white to-green-50">
        <Container className="space-y-8">
          <div className="rounded-3xl border border-green-100 bg-white p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.4em] text-green-600">
              Explore
            </p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">
              Choose a category
            </h1>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Dive into our curated collections. Select any category below to
              see the latest arrivals tailored to your interests.
            </p>
          </div>
          <CategorySelector categories={categories} />
        </Container>
      </div>
    );
  }

  const endpoint = `https://dummyjson.com/products/category/${encodeURIComponent(
    category
  )}?limit=${limit}&skip=${skip}`;

  const data = await getdata(endpoint);
  const products = data?.products ?? [];
  const total = data?.total ?? products.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const readableCategory = category.replaceAll("-", " ");

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-green-50 py-12">
      <Container className="space-y-10">
        <div className="rounded-3xl border border-gray-100 bg-white/70 p-10 shadow-sm backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-green-600">
            Category spotlight
          </p>
          <h1 className="mt-3 text-4xl font-bold capitalize text-gray-900">
            {readableCategory}
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Showing curated results from the {readableCategory} catalog. Filter
            via the list on the left and paginate to see more discoveries.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
          <aside>
            <CategorySelector
              categories={categories}
              activeCategory={category}
            />
          </aside>

          <section>
            <ProductList products={products} />
            <div className="mt-6">
              <Pagination
                page={pageNum}
                totalPages={totalPages}
                limit={limit}
              />
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
