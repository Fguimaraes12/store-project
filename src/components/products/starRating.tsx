type StarFill = "full" | "half" | "empty"

type StarProps = {
  fill: StarFill
}

function Star({ fill }: StarProps) {
  const id = `half-${Math.random().toString(36).slice(2, 7)}`

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {fill === "half" && (
        <defs>
          <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="50%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
      )}
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill={fill === "full" ? "#facc15" : fill === "half" ? `url(#${id})` : "#d1d5db"}
        stroke={fill === "empty" ? "#d1d5db" : "#facc15"}
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
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