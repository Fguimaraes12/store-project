import { Product } from "@/types/products"


export type State = {
 cart : Product[]
}

export type Action =
| {type: "ADD_CART", payload: Product}
| {type: "REMOVE_CART", payload: number} 

export const initialState = {
    cart: []
}


export default function CartReducer(state: State, action: Action){
    switch(action.type){
      case "ADD_CART":
        return {...state, cart: [...state.cart, action.payload]}
      
       case "REMOVE_CART":
        return {...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            } 

     return state
    }

}