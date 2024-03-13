import React,{useState} from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
const BannerCard = ({type,src,isActive}) => {

   
  return ( 
    <div className={`relative w-[100%] h-[400px]`}>
        <img src={src} alt='' className='h-full w-full object-cover rounded-xl'/>
        <div className={`absolute inset-0 ${isActive?'bg-black/10':'bg-black/90'} opacity-50 w-full h-full rounded-xl `}></div>
        {
            isActive && <div className='absolute bottom-4 right-0 left-0 flex flex-row justify-between items-center p-4'>
            <h2 className='text-white font-semibold text-xl'>{type}</h2>

            <Link to={`products/type/${type}`}>
                <button className='rounded-full bg-blue-900 font-medium text-white flex flex-row items-center px-4 py-[6px]' >
                    <h2 className='font-semibold mb-[2px] text-[14px]'>view all</h2>
                    <FiArrowUpRight className={`w-4 h-4 ml-1 `}/>
                </button>
            </Link>
        </div>
        }
        
    </div>
  )
}

export default BannerCard