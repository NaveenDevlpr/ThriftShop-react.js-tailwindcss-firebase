import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";


const Header = () => {
    const navMenus=['Men','Women','Accessories','About Us']

    
  return (
    <div className='w-full'>
        <div className='w-full flex flex-row items-end justify-between'>
            <div className='flex flex-row'>
                <h2 className='text-4xl text-black font-bold cursor-pointer'>Thrifted.</h2>
                <nav className='flex flex-row items-end ml-10'>
                    <ul className='flex flex-row items-center space-x-6'>
                        {
                            navMenus.map((e,i)=>{
                                return(
                                    <li key={i}
                                    className='text-md text-gray-400/90 font-normal transition-colors duration-500 cursor-pointer hover:text-gray-600 hover:transition-colors hover:duration-500'
                                    >{e}</li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>

            <div className='flex flex-row space-x-8'>
                <FaRegHeart className='w-5 h-5 text-gray-400/90 hover:text-black transition-colors duration-500 cursor-pointer hover:transition-colors hover:duration-500'/>
                <FiShoppingCart className='w-5 h-5 text-gray-400/90 hover:text-black transition-colors duration-500 cursor-pointer hover:transition-colors hover:duration-500'/>
                <FaRegUser className='w-5 h-5 text-gray-400/90 hover:text-black transition-colors duration-500 cursor-pointer hover:transition-colors hover:duration-500'/>
            </div>
        </div>
    </div>
  )
}

export default Header