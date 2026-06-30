
export type State = {
  category: string,
  price: string,
  rating: string
}

export type Action =
| {type: "SET_CATEGORY", payload: string}
| {type: "SET_PRICE", payload: string}
| {type: "SET_RATING", payload: string}


export const initialState = {
  category: "",
  price: "",
  rating: ""
}


export default function FilterReducer(state: State, action: Action){
 switch(action.type){
    case "SET_CATEGORY":
        return {...state, category: action.payload}
    case "SET_PRICE":
        return {...state, price: action.payload}
    case "SET_RATING":
        return {...state, rating: action.payload}
 }
}