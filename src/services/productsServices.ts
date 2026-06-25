import { ProductsPromise } from "@/types/products";
import { api } from "./products";



export default function getProducts(){
    const res = api.get<ProductsPromise>("/products")
    return res
}