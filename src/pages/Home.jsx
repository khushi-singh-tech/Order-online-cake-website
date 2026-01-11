import React, {  useContext, useState } from 'react'
import Nav from '../components/Nav'
import { categories } from '../Category'
import Card from '../components/Card'
import { cake_items } from '../Cake'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from 'react-icons/rx'
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function Home() {
  let {cate, setCate, input, showCart, setShowCart} = useContext(dataContext)

  function filter(category){
  setCate(category === "All" ? cake_items : cake_items.filter(item => item.cake_category === category));
}

let items = useSelector(state=>state.cart)
let subtotal = items.reduce((total, item)=>total+item.qty*item.price,0)
let deliveryFee = 20;
let taxes = subtotal*0.5/100;
let total = Math.floor(subtotal+deliveryFee+taxes);

  return (
    <div className='w-full min-h-screen'>
      <Nav />

     {!input?<div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {categories.map((item)=>(
          <div  className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-pink-200 cursor-pointer transition-all duration-200' onClick={()=> filter(item.name)}>
            {item.icon}
            {item.name} 
            
            </div>
        ))}
      </div>:null}
      
     <div className='w-full flex flex-wrap justify-center items-center gap-10 px-5 pt-8 pb-8'>

      {cate.length>1?cate.map((item)=>(
        <Card name={item.cake_name} image={item.cake_image} price={item.price} id={item.id}
        type={item.cake_type}/>
      )):<div className='text-center text-2xl text-pink-500 font-semibold pt-5'>No item found</div>}
       
     </div>
     

      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"} `} >
             <header className='w-[100%] flex justify-between items-center'>
     <span className='text-pink-400 text-[18px] font-semibold'>Order items</span>
     <RxCross2 className='w-[30px] h-[30px] text-pink-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={()=>setShowCart(false)}/>
             </header>

            {items.length>0?  <>
             <div className='w-full mt-9 flex flex-col gap-8'>
              {items.map((item)=>(
                <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
              ))}
             </div>
           <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
            <div className='w-full flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
              <span className='text-md text-pink-400 font-semibold'>Rs {subtotal}/-</span>
            </div>
             <div className='w-full flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
              <span className='text-md text-pink-400 font-semibold'>Rs {deliveryFee}/-</span>
            </div>
             <div className='w-full flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
              <span className='text-md text-pink-400 font-semibold'>Rs {taxes}/-</span>
            </div>
           </div>
           <div className='w-full flex justify-between items-center p-9'>
              <span className='text-2xl text-gray-600 font-semibold'>Total</span>
              <span className='text-2xl text-pink-400 font-semibold'>Rs {total}/-</span>
            </div>
            <button className='w-[80%] p-3 rounded-lg bg-pink-400 text-white hover:bg-pink-400 transition-all' onClick={()=>{
              toast.success("Order Placed")
            }}>Place Order</button>
            </>:<div className='text-center text-2xl text-pink-500 font-semibold pt-5'>Empty Cart</div>}
           
    </div>
    </div>
  )
}
