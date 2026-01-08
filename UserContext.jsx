import React, { createContext, useState } from 'react'
import { cake_items } from '../Cake';

export const dataContext = createContext()
export default function UserContext({children}) {
    let[cate, setCate]=useState(cake_items);
    let[input, setInput] = useState("");
    let[showCart, setShowCart] = useState("");
    let data ={
        input,
        setInput,
        cate,
        setCate,
        showCart,
        setShowCart
    }
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
    </div>
  )
}
