import { ProductsPromise } from "@/types/products";
import { api } from "./products";



export default function getProducts(category?: string){
    const url = category
    ? `/products/category/${category}?limit=0`
    : `/products/?limit=0`

    return api.get<ProductsPromise>(url)
}



