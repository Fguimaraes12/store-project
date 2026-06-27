'use client'
import { useCartContext } from "@/context/cartContext"
import CartReducer, { initialState } from "@/reducers/cartReducer"
import { Minus, Plus } from "lucide-react"
import { useReducer } from "react"




export default function Cart(){
const {state, setModalCart} = useCartContext()

    return(
        <div className="flex justify-center items-center z-50 fixed inset-0 bg-black/50 backdrop-blur-sm">
            <div className="w-300 max-h-11/12 min-h-32 flex flex-col absolute bg-gray-100">
              <div className=" w-full h-30">
              <button onClick={() => setModalCart(false)} className="cursor-pointer items-center justify-center flex absolute inset-1 bg-red-400 w-13 h-10">Close</button>
              </div>
              <ul className="h-full w-full flex flex-col items-center overflow-y-auto">
                {state.cart.map((product) => (
                        <li key={product.id} className=" bg-white w-250 min-h-30 flex items-center my-3 rounded-2xl shadow-sm">
                           <div className="flex w-full h-full items-center">
                            <img src={product.images[0]} alt={product.title} className="size-25 mx-5"/>
                              <div className="ml-4 mr-9 w-120">
                                <h1 className="text-2xl mb-2">{product.title}</h1>
                                <p className="w-100 text-sm text-gray-400 line-clamp-2">{product.description}</p>
                              </div>
                              
                              <div className="w-70 flex items-center justify-between ">
                                 <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1">
                                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-green-400 text-white font- hover:bg-green-500 transition-colors text-sm">
                                      <Plus size={14} strokeWidth={3}/>
                                    </button>
                                    <span className="text-sm font-semibold text-gray-700 min-w-[16px] text-center">                                  
                                      1
                                    </span>
                                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-green-400 text-white font-bold hover:bg-green-500 transition-colors">                                  
                                      <Minus size={14} strokeWidth={3}/>
                                    </button>
                                 </div>
                                <span className="text-2xl">{product.price}</span>
                              </div>
 
                           </div>
                        </li>
                ))}
              </ul>
              
              <div className="w-250 self-center h-full flex justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>Agree with Our Shippinh Policy</p>
                </div>
               <button className="w-65 bg-green-600 my-6 p-2 text-white text-lg flex items-center justify-center sticky rounded-2xl">Order Now</button>
              </div>
            </div>
        </div>
    )
}