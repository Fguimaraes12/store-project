'use client'

import useFilterContext from "@/context/filterContext"

export default function FilterBar() {
    const {state, dispatch} = useFilterContext()
  return (
    <div className="flex ml-75 gap-3">

      {/* Category */}
      <div className="relative" >
        <select onChange={(e) => dispatch({type: "SET_CATEGORY", payload: e.target.value})} className="appearance-none cursor-pointer bg-white border border-gray-200 rounded-full pl-4 pr-8 py-2.5 text-sm font-medium text-gray-800 hover:border-gray-400 transition-colors focus:outline-none">
          <option value="">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home & Decor</option>
          <option value="sports">Sports</option>
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>

      {/* Price */}
      <div className="relative">
        <select onChange={(e) => dispatch({type: "SET_PRICE", payload: e.target.value})}  className="appearance-none cursor-pointer bg-white border border-gray-200 rounded-full pl-4 pr-8 py-2.5 text-sm font-medium text-gray-800 hover:border-gray-400 transition-colors focus:outline-none">
          <option value="">All Prices</option>
          <option value="0-50">$0 — $50</option>
          <option value="50-100">$50 — $100</option>
          <option value="100-500">$100 — $500</option>
          <option value="500+">$500+</option>
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>

      {/* Rating */}
      <div className="relative">
        <select onChange={(e) => dispatch({type: "SET_RATING", payload: e.target.value})}  className="appearance-none cursor-pointer bg-white border border-gray-200 rounded-full pl-4 pr-8 py-2.5 text-sm font-medium text-gray-800 hover:border-gray-400 transition-colors focus:outline-none">
          <option value="">All Ratings</option>
          <option value="4">4★ & above</option>
          <option value="3">3★ & above</option>
          <option value="2">2★ & above</option>
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>

    </div>
  )
}