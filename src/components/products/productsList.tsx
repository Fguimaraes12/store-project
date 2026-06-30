'use client'

import getProducts from "@/services/productsServices"
import ProductCard from "./productCard"
import { useEffect, useState } from "react"
import useFilterContext from "@/context/filterContext"
import { Product } from "@/types/products"

export default function ProductsList() {
  const {state} = useFilterContext()
  const [products, setProducts] = useState<Product[]>([])


  useEffect(() => {
    getProducts(state.category).then(({data}) => {
      setProducts(data.products)
    })
  }, [state.category])


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