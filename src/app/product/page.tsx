import ProductList from "@/components/ProductList";
import Pagination from "@/components/Pagination";
import { getdata } from "@/helpers/index";
import Container from "@/components/Container";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] };
}) {
  const sp: any = searchParams ?? {};

  const page =
    parseInt(Array.isArray(sp.page) ? sp.page[0] : sp.page ?? "1", 10) || 1;
  const limit =
    parseInt(Array.isArray(sp.limit) ? sp.limit[0] : sp.limit ?? "8", 10) || 8;

  const skip = (page - 1) * limit;
  const endpoint = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  const data = await getdata(endpoint);
  const products = data?.products ?? [];
  const total = data?.total ?? products.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div>
       <Container><h2 className="text-4xl text-gray-800 font-bold pt-10 ">
    All Products
   </h2></Container>
      <ProductList products={products} />
      <Pagination page={page} totalPages={totalPages} limit={limit} />
    </div>
  );
}
