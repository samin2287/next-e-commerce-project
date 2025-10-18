import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import { getdata } from "@/helpers/index";

export default async function Home() {
  const endpoint = "https://dummyjson.com/products";
  const { products } = await getdata(endpoint);
  return (
    <main>
      <Banner />
      <ProductList products={products} />
    </main>
  );
}
