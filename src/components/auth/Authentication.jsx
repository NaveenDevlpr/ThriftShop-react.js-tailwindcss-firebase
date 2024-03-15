import React from 'react'


import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Authentication = () => {
  return (
   
   
    <div className='flex items-center justify-center max-w-xl min-h-screen mx-auto'>
        <div className='flex flex-col items-center justify-center w-full h-full p-4 rounded-md ring-1 ring-gray-300'>
            <h2 className='text-4xl font-bold text-orange-300'>Thrifted.</h2>
            <form className='flex flex-col w-full max-w-md mt-4'>
                <div className='flex flex-col mb-4 space-y-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Enter your email' className='w-full px-2 py-2 border-0 outline-none ring-1 focus:ring-black ring-gray-300' />
                </div>

                <div className='flex flex-col mb-4 space-y-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Enter your password' className='w-full px-2 py-2 border-0 outline-none ring-1 focus:ring-black ring-gray-300' />
                </div>

                <button type='submit' className='w-1/2 py-2 mx-auto font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800'>Register</button>
            </form>
            <hr className='w-full h-[1.5px] mt-6 bg-gray-200'></hr>
            <div className='flex flex-col items-center mt-6 space-y-4'>
                <h2 className='text-[12px] text-gray-400/50'>register with</h2>
                <div className='flex flex-row items-center justify-center space-x-4'>
                   <span className='p-3 ring-gray-600 ring-1'>
                   <FaGoogle className='w-6 h-6'/>
                   </span>
                   <span className='p-3 ring-gray-600 ring-1'>
                   <FaFacebookF className='w-6 h-6'/>
                   </span>
                </div>
            </div>

            <div className='flex flex-row mt-6'>
                <h2 className='text-[14px] text-gray-400/50'>Already have an Account?</h2>
                <h2 className='text-[14px] text-orange-300 font-semibold cursor-pointer ml-1'>Login</h2>
            </div>
        </div>
    </div>
  
  )
}

export default Authentication