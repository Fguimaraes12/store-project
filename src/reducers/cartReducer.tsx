import { Product } from "@/types/products"
import { constants } from "buffer"
import { collectSegmentData } from "next/dist/server/app-render/collect-segment-data"
import { ReactJsxRuntime } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints"

export type CartItem = Product & {
    quantity: number
}

export type State = {
 cart : CartItem[]
}

export type Action =
| {type: "ADD_CART", payload: Product}
| {type: "REMOVE_CART", payload: number}
| {type: "DECREASE_QUANTITY", payload: number}
| {type: "INCREASE_QUANTITY", payload: number}


export const initialState = {
    cart: []
}


export default function CartReducer(state: State, action: Action){
    switch(action.type){
      case "ADD_CART": {
        const existingProduct = state.cart.find((product) => action.payload.id === product.id)

        if(!existingProduct) {
            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]} 
        } 

        return {
            ...state,
            cart: state.cart.map((product) => 
              product.id === action.payload.id
              ? {...product, quantity: product.quantity + 1}
              : product
            )
        }
      }
      
       case "REMOVE_CART": {
        return {...state, cart: state.cart.filter((product) => product.id !== action.payload)}
       }

       case "DECREASE_QUANTITY": {

        return {...state,
                cart: state.cart.map((product) => {
                   if(product.quantity > 0 && product.id == action.payload){
                   return {...product, quantity: product.quantity - 1}
                 }
                 return product
            })
         }
       }

       case "INCREASE_QUANTITY": {
        return {...state, cart: state.cart.map((product) =>
             product.id == action.payload
             ? {...product, quantity: product.quantity + 1}
             : product

            )
         }
       }

       return state
    }
    
}