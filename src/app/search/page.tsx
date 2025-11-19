import ProductList from "@/components/ProductList";
import Container from "@/components/Container";
import Link from "next/link";
import { getdata } from "@/helpers";
import { ProductType } from "../../../type";

interface SearchPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const queryParam = searchParams?.q;
  const query = Array.isArray(queryParam)
    ? queryParam[0] ?? ""
    : queryParam ?? "";
  const term = query.trim();

  let products: ProductType[] = [];
  let total = 0;

  if (term) {
    const endpoint = `https://dummyjson.com/products/search?q=${encodeURIComponent(
      term
    )}&limit=24`;
    const data = await getdata(endpoint);
    products = data?.products ?? [];
    total = data?.total ?? products.length;
  }

  const heading =
    term.length > 0
      ? `Showing ${products.length} of ${total} result${
          total === 1 ? "" : "s"
        } for "${term}"`
      : "Start typing above to search our catalog.";

  return (
    <div className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold text-gray-900">Search</h1>
        <p className="text-gray-600 mt-2">{heading}</p>
      </Container>

      {term ? (
        products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <Container className="py-16">
            <div className="text-center">
              <p className="text-lg text-gray-700">
                No products matched "{term}".
              </p>
              <p className="mt-2 text-gray-500">
                Try adjusting your keywords or browse all items instead.
              </p>
              <Link
                href="/product"
                className="mt-6 inline-flex items-center rounded-md bg-green-600 px-6 py-2 text-white hover:bg-green-700 transition-colors">
                Explore all products
              </Link>
            </div>
          </Container>
        )
      ) : (
        <Container className="py-16">
          <div className="text-center text-gray-600">
            <p>Use the search bar above to find products instantly.</p>
          </div>
        </Container>
      )}
    </div>
  );
};

export default SearchPage;
