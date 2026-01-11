import React, { useContext, useEffect, useState } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { BsCake2Fill } from "react-icons/bs";
import { dataContext } from '../context/UserContext';
import { cake_items } from '../Cake';
import { useSelector } from 'react-redux';
function Nav() {
    const {input, setInput, cate, setCate, showCart, setShowCart} = useContext(dataContext)
    useEffect(()=>{
       let newlist =  cake_items.filter((item)=>item.cake_name.includes(input) ||
    item.cake_name.toLowerCase().includes(input))
       setCate(newlist)
    },[input])
    let items = useSelector(state=>state.cart)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
      <BsCake2Fill  className='w-[30px] h-[30px] text-pink-500'/>
      </div>
      <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md 
      shadow-md md:w-[70%]'onSubmit={(e)=>e.preventDefault()} >
      <IoSearch  className='text-pink-500 w-[20px] h-[20px] '/>
      <input type="text" placeholder='Search Items...' 
       className='w-[100%] outline-none text-[16px]
        md:text-[20px]' onChange={(e)=> setInput(e.target.value)} value={input}/>
      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{
        setShowCart(true)
      }}>
        <span className='absolute top-0 right-2 text-pink-500 font-bold text-[18px]'>
            {items.length}
        </span>
      <LuShoppingBag className='w-[30px] h-[30px] text-pink-500 '/>
      </div>
      
    </div>
  )
}

export default Nav;
