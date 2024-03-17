import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Link,useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { selectCartLength } from '../redux/slice/CartSlice';
import { auth } from '../../firebaseServices';
import {onAuthStateChanged,signOut} from 'firebase/auth'

const Header = () => {
    const navMenus=['Men','Women','Accessories','About Us']

    const [userMenu,setUserMenu]=useState(false)

    const [username,setUsername]=useState('')
    const [user,setUser]=useState(false)
    
    const cartLength=useSelector(selectCartLength)

    const navigate=useNavigate()

    const logout=async()=>{
        await signOut(auth).then(()=>{
            navigate('/auth/login')
        }).catch((error)=>{
            console.log(error)
        })
    }

    const checkUserLoggedIn=async()=>{
        await auth.onAuthStateChanged((user)=>{
            if(user)
            {
                setUser(true)
                const userName=user.email
                setUsername(userName)
            }
            else{
               setUser(false)
            }
        })
    }

    useEffect(()=>{
        checkUserLoggedIn()
    },[])
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
                                    onClick={()=>{navigate(`/products/gender/${e}`)}}
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
               <span className='relative'>
               <FaRegUser className='w-5 h-5 transition-colors duration-500 cursor-pointer text-gray-400/90 hover:text-black hover:transition-colors hover:duration-500'
                onClick={()=>{setUserMenu(!userMenu)}}
                />
               </span>
                {
                   userMenu && <div className='p-4 absolute flex flex-col space-y-2 bg-white top-[9%] right-[5%] z-10 rounded-md shadow-xl transition-opacity duration-700 opacity-100'>
                                    {
                                    user ? (
                                          <div className='p-2 cursor-pointer hover:bg-gray-200/60 hover:rounded-xl'>
                                           <h2 className='text-black text-[16px] font-medium'>{username}</h2>
                                          </div>
                                        ):(
                                            <div className='flex flex-row items-center w-full cursor-pointer' onClick={()=>{navigate('/auth/login')}}>
                                                <h2 className='text-[16px] font-medium text-black'>login</h2>
                                                <FiLogIn className='w-6 h-6 ml-2 text-black'/>
                                            </div>
                                        )
                                    }
                                   {
                                    user&& <div className='flex flex-col space-y-2'>
                                                <div className='flex flex-row items-center w-full p-2 cursor-pointer hover:bg-gray-200/60 hover:rounded-xl'
                                                onClick={()=>{logout()}}
                                                >
                                                    <h2 className='text-[16px] font-medium text-black '>logout</h2>
                                                    <FiLogOut className='w-4 h-4 ml-2 text-black'/>
                                                </div>
                                                <h2 className='text-black text-[16px] font-medium cursor-pointer p-2 hover:bg-gray-200/60 hover:rounded-xl'
                                                onClick={()=>{
                                                    setUserMenu(!userMenu)
                                                    navigate('/addProducts')}}
                                                >Add Products</h2>
                                            </div>
                                   }
                               </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Header