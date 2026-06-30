'use client'

import { useCartContext } from "@/context/cartContext";
import Cart from "../cart/cart";
import { ShoppingCart, Sparkles, User } from "lucide-react";
import LinesEffect from "./linesEffect";



export default function Header(){
const {modalCart, setModalCart} = useCartContext()

    return(
   <div>
            <div className="w-full h-20 flex items-center justify-evenly">
            {/* LOGO */}
            <div className="flex items-center"> 
                <Sparkles size={25} strokeWidth={1} color="green"/>
               <h1 className="text-2xl">Store</h1>
            </div>

            <div className="flex gap-7">
                <button className="cursor-pointer btn-underline">Shop</button>
                 <button className="cursor-pointer btn-underline">Collections</button>
                 <button className="cursor-pointer btn-underline">Explore</button>
            </div>


            {/* BUTTON CART */}
            <div className="flex gap-3">
              <div onClick={() => setModalCart(!modalCart)} className="flex items-center gap-1 cursor-pointer">
                <ShoppingCart size={16} strokeWidth={2} />
                <button className="cursor-pointer">Cart</button>
              </div>
              <div className="flex items-center gap-1">
                <User size={16} strokeWidth={2}/>
                <span className="cursor-pointer">My account</span>
              </div>
              {modalCart && <Cart/>}
            </div>
        </div>
   </div>
    )
}