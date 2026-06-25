import getProducts from "@/services/productsServices"
import ProductCard from "./productCard"

export default async function ProductsList() {
  const { data } = await getProducts()
  const products = data.products

  return (
    <ul className="w-full h-full flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  )
}