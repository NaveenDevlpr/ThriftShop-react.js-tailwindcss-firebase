import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='h-10 w-full bg-blue-900  px-4 py-2'>
        <div className='max-w-7xl mx-auto flex flex-row justify-between items-center'>
        <p className='text-yellow-200'>&copy; 2024 All rights reserved</p>
        <div className='flex flex-row items-center space-x-5'>
            <FaInstagram className='w-6 h-6 text-yellow-200'/>
            <FaFacebookSquare className='w-6 h-6 text-yellow-200'/>
            <h2 className='text-yellow-200 font-bold'>Thrifted.</h2>
        </div>
        </div>
    </div>
  )
}

export default Footer