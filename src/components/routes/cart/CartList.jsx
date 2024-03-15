import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { IoMdClose } from "react-icons/io";
import { removeItem } from '../../redux/slice/CartSlice';
import ProductDetails from '../ProductDetails';
import { set } from 'firebase/database';
const CartList = () => {

    const [open,setOpen]=useState(false)

    const [productDetails,setProductDetails]=useState()

    const [productImages,setProductImages]=useState()
    
    const cartItems=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    const remove=(index)=>{
        dispatch(removeItem(index))
    }
    
    const openModal=(data)=>{
        setOpen(true)
        const {brand,type,category,price,url}=data

        const obj={
            brand:brand,
            type:type,
            category:category,
            price:price,
        }
        
        setProductDetails(obj)

        const imgObj={
            images:url
        }

        setProductImages(imgObj)
        
    }
    const closeModal=()=>{
     
        setOpen(false)
      
      }
  return (
    <div className='flex flex-col w-full p-8'>
        <h2 className='text-xl font-semibold text-blackk'>Your cart :</h2>
        <div className='w-full'>
            {
                cartItems.length!==0?(
                    cartItems.map((e,i)=>{
                        return(
                            <div className='w-full h-[250px] flex flex-col px-4  bg-yellow-100/20 ring-1 ring-gray-400/50  overflow-hidden mt-8 relative' key={i}>
                                  <div className='absolute top-0 left-0 right-0 flex flex-row items-center justify-between w-full px-4 py-2'>
                                        <h2 className='text-xl font-bold'>{i+1}.</h2>  
                                        <IoMdClose className='w-6 h-6 cursor-pointer' onClick={()=>{remove(i)}}/>
                                  </div>

                                <div className='flex flex-row h-full ml-10'>
                                    <div className='w-1/4 h-full'>
                                        <img src={e.url} alt='' className='object-cover w-full h-full '/>
                                    </div>
                                    <div className='flex flex-col justify-center w-2/3 ml-10 space-y-3'>
                                        <div>
                                        <h2 className='text-3xl font-semibold text-black'>
                                            {e.category}
                                        </h2>
                                        <h2 className='text-xl font-medium text-black/50'>
                                            {e.type}
                                        </h2>
                                        </div>
                                        <h2 className='text-lg font-semibold text-black'>
                                            <span className='font-sans text-lg'>₹</span>{e.price}
                                        </h2>
                                        <h2 className='font-medium text-gray-400 text-md'>
                                            {e.brand}
                                        </h2>
                                        <div className='flex flex-row items-center w-1/2 space-x-6'>
                                        <button className='w-1/3 px-2 py-2 text-white bg-black' onClick={()=>{openModal(e)}}>
                                            View product
                                        </button>
                                        <button className='w-1/3 px-2 py-2 text-white bg-black'>
                                            Buy now
                                        </button>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        )
                    })
                ):(
                    <h2 className='text-2xl font-medium text-center text-black'>No Items in the Cart</h2>
                )
            }
        </div>
        {
          open &&<div className={`absolute inset-0 bg-black/80 opacity-50 w-full h-full`} onClick={()=>{closeModal()}}></div>
        }
        {
        open && (
            <div className='fixed w-full bg-gray-100 rounded-tl-[54px] h-[600px] rounded-tr-[54px] shadow-2xl bottom-0 left-0 right-0 p-0'>
                <div className="relative flex flex-row items-center w-full h-full mx-auto overflow-x-hidden overflow-y-auto px-[40px] py-[20px]">
                    <ProductDetails productDetail={productDetails} images={productImages} closeModal={closeModal}/>
                </div>
            </div> 
        )
    }
    </div>
  )
}

export default CartList