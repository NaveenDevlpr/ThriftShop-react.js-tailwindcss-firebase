import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import {useDispatch,useSelector} from 'react-redux'

import { addToCart } from '../redux/slice/CartSlice';
const ProductCard = ({data,img}) => {


    const [cartData,setCartData]=useState({...data,url:img})

   
    
    const dispatch=useDispatch()

    const cartProducts=useSelector((state)=>state.cart)
   
    
    const addCart=()=>{
        for(let i=0;i<cartProducts.length;i++)
        {
            if(cartProducts[i].images===cartData.images)
            {
             console.log('already added')
             return   
            }
        }
       
        dispatch(addToCart(cartData))
    }
  return (
    <>
    <div className='w-[300px] rounded-xl shadow-xl  cursor-pointer flex flex-col relative' >
        <img src={img[0]}
        alt=''
        className='object-cover w-full h-[300px] rounded-xl'
        />
        <div className='flex flex-col p-4 bg-yellow-100/20'>
            <div className='flex flex-row items-center justify-between '>
                <div>
                    <h2 className='font-semibold text-black text-md'>{data.category?data.category:''}</h2>
                </div>
                <h2 className='font-semibold text-orange-300 text-md'><span className='font-sans text-lg'>₹</span> {data.price}</h2>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <div>
                    <h2 className='text-slate-400 text-[12px] '>{data.brand}</h2>
                </div>

                 <div className='flex flex-row items-center'>
                    <h2 className='text-slate-400 text-[12px] '>4.9</h2>
                    <h2 className='text-slate-400 text-[12px] '>{`(4 review)`}</h2>
                </div>
            </div>
            
        </div>
        <div className='absolute top-0 right-0 flex flex-col px-4 py-2 space-y-4'>
            <FaRegHeart className='w-5 h-5 overflow-hidden text-gray-500'/>
            <IoMdAdd className='w-6 h-6 text-gray-500' onClick={()=>{addCart()}}/>
        </div>
    </div>

    
    </>
  )
}

export default ProductCard