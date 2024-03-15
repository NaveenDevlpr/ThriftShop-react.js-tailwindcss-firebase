import React from 'react'


import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Authentication = () => {
  return (
   
   
<div className='relative max-h-screen overflow-y-hidden'>
  <img
    src={'https://i0.wp.com/pinklungi.com/wp-content/uploads/2023/06/Thrift-Stores-From-Kerala-That-You-Must-Try-Shopping-At.jpg?resize=768%2C432&ssl=1'}
    alt=''
    className='object-cover w-full'
  />
  <div className={`absolute inset-0 bg-black/80 opacity-50 w-full h-full`}></div>

  <div className='absolute z-10 flex flex-col items-center justify-center w-full max-w-xl p-4 translate-x-1/2 -translate-y-1/2 rounded-md top-1/2 right-1/2 ring-1 ring-gray-300'>
    <h2 className='text-4xl font-bold text-orange-300'>Thrifted.</h2>
    <form className='flex flex-col w-full max-w-md mt-4'>
      <div className='flex flex-col mb-4 space-y-2'>
        <label htmlFor='email' className='text-white'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='Enter your email'
          className='w-full px-2 py-2 border-0 outline-none ring-2 focus:ring-black ring-yellow-300'
        />
      </div>

      <div className='flex flex-col mb-4 space-y-2'>
        <label htmlFor='password' className='text-white'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Enter your password'
          className='w-full px-2 py-2 border-0 outline-none ring-2 focus:ring-black ring-yellow-300'
        />
      </div>

      <button
        type='submit'
        className='w-1/2 py-2 mx-auto font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800'
      >
        Register
      </button>
    </form>
    <hr className='w-full h-[1.5px] mt-6 bg-gray-200'></hr>
    <div className='flex flex-col items-center mt-6 space-y-4'>
      <h2 className='text-[12px] text-gray-100/90'>register with</h2>
      <div className='flex flex-row items-center justify-center space-x-4'>
        <span className='p-3 ring-gray-200 ring-1'>
          <FaGoogle className='w-6 h-6 text-gray-200' />
        </span>
        <span className='p-3 ring-gray-200 ring-1'>
          <FaFacebookF className='w-6 h-6 text-gray-200' />
        </span>
      </div>
    </div>

    <div className='flex flex-row mt-6'>
      <h2 className='text-[14px] text-gray-100/90'>Already have an Account?</h2>
      <h2 className='text-[14px] text-orange-300 font-semibold cursor-pointer ml-1'>Login</h2>
    </div>
  </div>
</div>
  
  )
}

export default Authentication