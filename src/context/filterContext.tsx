'use client'

import FilterReducer, { Action, State } from "@/reducers/filterReducer";
import { initialState } from "../reducers/filterReducer";
import { ActionDispatch, createContext, useContext, useReducer } from "react";



export type ContextType = {
  state: State
  dispatch: ActionDispatch<[action: Action]>
}

const FilterContext = createContext<ContextType | null>(null)

export function FilterProvider({children}: {children: React.ReactNode}){
    const [state, dispatch] = useReducer(FilterReducer, initialState)

    return(
        <FilterContext.Provider value={{state, dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

export default function useFilterContext(){
    const context = useContext(FilterContext)
    if(!context) throw new Error("useFilterContext deve ser usado dentro do FilterProvider")
    return context
}