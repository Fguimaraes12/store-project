'use client'

import { useCartContext } from "@/context/cartContext";
import Cart from "../cart/cart";



export default function Header(){
const {modalCart, setModalCart} = useCartContext()

    return(
        <div className="w-full h-20 flex items-center justify-evenly border border-green-500">
            {/* LOGO */}
            <div> 
               <h1 className="text-2xl">Store</h1>
            </div>

            <div className="flex gap-3">
                <button className="cursor-pointer">Shop</button>
                 <button className="cursor-pointer">Collections</button>
                 <button className="cursor-pointer">Explore</button>
            </div>


            {/* BUTTON CART */}
            <div className="flex gap-3">
              <button onClick={() => setModalCart(!modalCart)} className="cursor-pointer">Cart</button>
              <span className="cursor-pointer">My account</span>
              {modalCart && <Cart/>}
            </div>
        </div>
    )
}