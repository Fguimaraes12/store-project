'use client'

import CartReducer, { Action, initialState, State } from "@/reducers/cartReducer";
import React, { createContext, useContext, useReducer, useState } from "react";

export type ContextType = {
  modalCart: boolean
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>
  state: State
  dispatch: React.ActionDispatch<[action: Action]>
}

const CartContext = createContext<ContextType | null>(null)

export function CartProvider({children} : {children: React.ReactNode}){
    const [modalCart, setModalCart] = useState<boolean>(false)
    const [state, dispatch] = useReducer(CartReducer, initialState)

    return(
        <CartContext.Provider value={{state, dispatch, modalCart, setModalCart}}>
          {children}
        </CartContext.Provider>
    )
}

export function useCartContext(){
  const context = useContext(CartContext)
  if (!context) throw new Error("useCartContext deve ser usado dentro do CartProvider")
  return context
}