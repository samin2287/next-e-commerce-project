import React from "react";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/Pagination";
import CategorySelector from "./CategoryList";
import { getdata } from "@/helpers/index";

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] };
}) {
  const sp: any = searchParams ?? {};

  const category = Array.isArray(sp.category) ? sp.category[0] : sp.category ?? "";

  const pageNum = parseInt(Array.isArray(sp.page) ? sp.page[0] : sp.page ?? "1", 10) || 1;
  const limit = parseInt(Array.isArray(sp.limit) ? sp.limit[0] : sp.limit ?? "8", 10) || 8;

  const skip = (pageNum - 1) * limit;

  // If no category provided, show empty list
  // fetch categories for sidebar/menu
  const catsData: any = await getdata("https://dummyjson.com/products/categories");
  const categories: string[] = Array.isArray(catsData) ? catsData : [];

  if (!category) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold">No category selected</h2>
        <p className="mt-2 text-sm text-gray-600">Select a category from the list.</p>
        <CategorySelector categories={categories} />
      </div>
    );
  }

  const endpoint = `https://dummyjson.com/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`;

  const data = await getdata(endpoint);
  const products = data?.products ?? [];
  const total = data?.total ?? products.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <main>
      <div className="px-6">
        <h1 className="text-3xl font-bold pt-6">Category: {category}</h1>
      </div>

      <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <CategorySelector categories={categories} />
        </aside>

        <section className="md:col-span-3">
          <ProductList products={products} />

          <div className="mt-6">
            <Pagination page={pageNum} totalPages={totalPages} limit={limit} />
          </div>
        </section>
      </div>
    </main>
  );
}
