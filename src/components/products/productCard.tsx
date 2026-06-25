import StarRating from "./starRating"
import { Products } from "@/types/products"

type ProductCardProps = {
  product: Products
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="bg-white w-96 h-96 m-1 rounded-xs">
      <div className="flex flex-col justify-between h-full p-4">
        <div className="flex justify-center">
          <img src={product.images[0]} alt={product.title} className="size-40 object-contain" />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-400">{product.brand}</span>
            <h2 className="text-base text-black font-medium truncate max-w-48">{product.title}</h2>
              <div className="flex gap-2 ">
                <StarRating rating={product.rating} />
                <span className="text-sm text-gray-400">({product.rating})</span>
              </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xl text-black font-semibold">${product.price}</span>
          </div>

          <button className="w-full mt-1 py-1.5 bg-black text-white text-sm rounded-xs hover:bg-gray-800 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </li>
  )
}