import React from "react";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { getdata } from "@/helpers";
import { ProductType } from "../../type";

const POPULAR_ENDPOINT = "https://dummyjson.com/products?limit=100";
const POPULAR_COUNT = 8;

const pickRandomProducts = (items: ProductType[], count: number) => {
  if (items.length <= count) return items;
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const HomePage = async () => {
  const data = await getdata(POPULAR_ENDPOINT);
  const products: ProductType[] = data?.products ?? [];
  const popularProducts = pickRandomProducts(products, POPULAR_COUNT);

  return (
    <main>
      <Banner />
      <section className="py-14 bg-[#f7f9fb]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
                Trending now
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Popular products
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl">
                Handpicked gadgets and essentials that shoppers can&apos;t stop
                adding to their carts. Grab them before they sell out.
              </p>
            </div>
            <Link
              href="/product"
              className="inline-flex items-center rounded-full bg-green-600 text-white px-6 py-2 font-semibold hover:bg-green-700 transition-colors">
              View all products
            </Link>
          </div>

          {popularProducts.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {popularProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-10 text-center text-gray-500">
              Products are loading. Please check back shortly.
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
