import getProducts from "@/services/productsServices"
import ProductCard from "./productCard"

export default async function ProductsList() {
  const { data } = await getProducts()
  const products = data.products

  return (
 <div className="flex justify-center">
      <ul className="w-330  h-full flex flex-wrap justify-start items-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
 </div>
  )
}