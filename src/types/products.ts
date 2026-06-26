export interface Products {
    id: number
    images: [string]
    category: string
    brand: string
    title: string
    rating: number
    description: string
    price: number
    discountPercentage: number
}

export type ProductsPromise = {
    products: Products[]
}
