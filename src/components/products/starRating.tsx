import { Star as StarIcon } from "lucide-react"

type StarFill = "full" | "half" | "empty"

type StarProps = {
  fill: StarFill
}

function Star({ fill }: StarProps) {
  return (
    <div className="relative w-4 h-4">
      {/* fundo cinza */}
      <StarIcon size={16} className="text-gray-300" fill="#d1d5db" strokeWidth={0} />

      {/* preenchimento amarelo por cima */}
      {fill !== "empty" && (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: fill === "half" ? "50%" : "100%" }}
        >
          <StarIcon size={16} className="text-yellow-400" fill="#facc15" strokeWidth={0} />
        </div>
      )}
    </div>
  )
}

type StarRatingProps = {
  rating: number
  maxStars?: number
}

export default function StarRating({ rating, maxStars = 5 }: StarRatingProps) {
  const stars = Array.from({ length: maxStars }, (_, i) => {
    const position = i + 1
    if (position <= Math.floor(rating)) return "full"
    if (position - 0.5 <= rating) return "half"
    return "empty"
  }) as StarFill[]

  return (
    <div className="flex items-center gap-0.5">
      {stars.map((fill, i) => (
        <Star key={i} fill={fill} />
      ))}
    </div>
  )
}