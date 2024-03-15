import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { selectCartLength } from '../redux/slice/CartSlice';
const Header = () => {
    const navMenus=['Men','Women','Accessories','About Us']

    const cartLength=useSelector(selectCartLength)
  return (
    <div className='w-full'>
        <div className='flex flex-row items-end justify-between w-full'>
            <div className='flex flex-row'>
                <Link to={'/'}>
                    <h2 className='text-4xl font-bold text-black cursor-pointer'>Thrifted.</h2>
                </Link>
                <nav className='flex flex-row items-end ml-10'>
                    <ul className='flex flex-row items-center space-x-6'>
                        {
                            navMenus.map((e,i)=>{
                                return(
                                    <li key={i}
                                    className='font-normal transition-colors duration-500 cursor-pointer text-md text-gray-400/90 hover:text-gray-600 hover:transition-colors hover:duration-500'
                                    >{e}</li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>

            <div className='flex flex-row space-x-8'>
            <span className='relative'>
                <FaRegHeart className='w-5 h-5 transition-colors duration-500 cursor-pointer text-gray-400/90 hover:text-black hover:transition-colors hover:duration-500'/>
                    <span className={`absolute w-[14px] h-[14px] bg-red-500 rounded-full -top-2 -right-2 text-white font-bold text-center text-[10px] ${cartLength?'block':'hidden'}`}>
                            {cartLength}
                    </span>
                </span>
                <Link to={'/cart'}>
                        <span className='relative'>
                        <FiShoppingCart className='w-5 h-5 transition-colors duration-500 cursor-pointer text-gray-400/90 hover:text-black hover:transition-colors hover:duration-500'/>
                            <span className={`absolute w-[14px] h-[14px] bg-red-500 rounded-full -top-2 -right-2 text-white font-bold text-center text-[10px] ${cartLength?'block':'hidden'}`}>
                                {cartLength}
                            </span>
                        </span>
                </Link>
                <FaRegUser className='w-5 h-5 transition-colors duration-500 cursor-pointer text-gray-400/90 hover:text-black hover:transition-colors hover:duration-500'/>
            </div>
        </div>
    </div>
  )
}

export default Header