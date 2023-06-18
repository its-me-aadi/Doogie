import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext=createContext();
const CartDispatchContext=createContext();


function reducer(state,action){
 switch(action.type){
    case "ADD":
      return [...state,{id:action.id,name:action.name,image:action.image,quantity:action.quantity,size:action.size,price:this.props.finalPrice}]

    default:
      console.log("Error in reducer");
 }
}

export default function ContextReducer({children}) {
  const [state,dispatch]=useReducer(reducer,[])
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}


export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);