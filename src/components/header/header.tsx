'use client'

import { useCartContext } from "@/context/cartContext";
import Cart from "./cart/cart";



export default function Header(){
const {modalCart, setModalCart} = useCartContext()

    return(
        <div>
            <button onClick={() => setModalCart(!modalCart)} className="cursor-pointer">Cart</button>
            {modalCart && <Cart/>}
        </div>
    )
}