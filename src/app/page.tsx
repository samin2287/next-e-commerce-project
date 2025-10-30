import Container from "@/components/Container";
import ProductList from "@/components/ProductList";
import { getdata } from "@/helpers/index";

export default async function Home() {
  const endpoint = "https://dummyjson.com/products";
  const { products } = await getdata(endpoint);
  return (
    <main>
      <Container>
        <h1 className="text-4xl text-gray-800 font-bold pt-8"> All Products</h1>
      </Container>
      <ProductList products={products} />
    </main>
  );
}
