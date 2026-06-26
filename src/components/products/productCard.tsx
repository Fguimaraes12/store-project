import { Span } from "next/dist/trace"
import StarRating from "./starRating"
import { Products } from "@/types/products"

type ProductCardProps = {
  product: Products
}

export default function ProductCard({ product }: ProductCardProps) {

  
  return (
    <li className="bg-white w-64 h-96 m-1 my-4 border border-gray-200 rounded-2xl shadow-sm hover:scale-103">
      <div className="flex flex-col justify-between h-full p-4">
        <div className="flex justify-center">
          <img src={product.images[0]} alt={product.title} className="size-40 object-contain" />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col items-start">
            <span className="text-gray-400 text-sm mb-1 capitalize">{product.category}</span>
            <h2 className="text-base text-black font-medium truncate max-w-48">{product.title}</h2>
              <div className="flex gap-2 ">
                <StarRating rating={product.rating} />
                <span className="text-sm text-gray-400">({product.rating})</span>
              </div>
            <span className="text-sm text-green-600">
              <span className="text-gray-400">{product.brand ? "By " : (<span>By <span className="text-green-600">Supermarket</span></span>)}</span>
              {product?.brand}
            </span>
          </div>

          <div className="flex justify-between items-center mt-2">
              <span className="text-lg text-green-600 font-semibold">
                ${product.price}
                <span className="text-sm text-gray-400 ml-2 line-through">${product.discountPercentage}</span>
              </span>
              <button className="text-green-600 bg-gray-200 text-sm rounded-sm p-2 cursor-pointer">
                Add to cart
              </button>
          </div>

        </div>
      </div>
    </li>
  )
}