import React, { useState } from 'react'


import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';

import { auth } from '../../firebaseServices';
import {signInWithEmailAndPassword} from 'firebase/auth'
const Login = () => {


    const[invalidError,setInvalidError]=useState(false)
    const [notVerified,setNotVerfied]=useState(false)

    const navigate=useNavigate()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()


    const handleSubmit=async(e)=>{
        e.preventDefault()

       try {
        const userDetails=await signInWithEmailAndPassword(auth,email,password)
        
        const user=userDetails.user
        if(user.emailVerified){
            navigate('/')
        }
        else{
            setNotVerfied(true)
            let timer;
            timer=setTimeout(()=>{
                setNotVerfied(false)
                return()=> clearTimeout(timer)
            },4000)
        }
       } catch (error) {
        setInvalidError(true)
        let timer;
        timer=setTimeout(()=>{
            setInvalidError(false)
            return()=> clearTimeout(timer)
        },4000)
       }
    }
  return (   
<div className='relative max-h-screen overflow-y-hidden'>
    {
        (invalidError || notVerified) &&(
            <div className='absolute top-0 left-0 right-0 z-10 w-full h-[50px] p-4 text-blue-900 bg-yellow-200'>
                {
                    invalidError?(
                        <h2 className='text-xl font-semibold text-center'>Invalid Credentials</h2>
                    ):(
                        <h2 className='text-xl font-semibold text-center'>User is not verified yet. Please check your mailbox</h2>
                    )
                }
            </div>
        )
    }
  <img
    src={'https://cdn.shopify.com/s/files/1/0046/4869/7949/articles/GEWINNSPIEL_Story-Werbeanzeige_297_x_420_mm_340_x_260_mm_-3_1024x1024.png?v=1681214401'}
    alt=''
    className='object-cover w-full'
  />
  <div className={`absolute inset-0 bg-black/90 opacity-60 w-full h-full`}></div>

  <div className='absolute z-10 flex flex-col items-center justify-center w-full max-w-xl p-4 translate-x-1/2 -translate-y-1/2 rounded-md top-1/2 right-1/2 ring-1 ring-gray-300'>
    <h2 className='text-4xl font-bold text-orange-300'>Thrifted.</h2>
    <form className='flex flex-col w-full max-w-md mt-4' onSubmit={handleSubmit}>
      <div className='flex flex-col mb-4 space-y-2'>
        <label htmlFor='email' className='text-white'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='Enter your email'
          className='w-full px-2 py-2 border-0 outline-none ring-2 focus:ring-black ring-yellow-300'
          onChange={(e)=>{setEmail(e.target.value)}}
        />
      </div>

      <div className='flex flex-col mb-4 space-y-2'>
        <label htmlFor='password' className='text-white'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Enter your password'
          className='w-full px-2 py-2 border-0 outline-none ring-2 focus:ring-black ring-yellow-300'
        onChange={(e)=>{setPassword(e.target.value)}}
        />
      </div>

      <button
        type='submit'
        className='w-1/2 py-2 mx-auto mt-2 font-semibold text-white bg-blue-900 rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-gray-800'
      >
        Login
      </button>
    </form>
    <hr className='w-full h-[1.5px] mt-6 bg-gray-200 opacity-80'></hr>
    <div className='flex flex-col items-center mt-6 space-y-4'>
      <h2 className='text-[12px] text-gray-100/90'>login with</h2>
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
      <h2 className='text-[14px] text-gray-100/90'>Create an Account?</h2>
      <Link to='/auth/register'>
      <h2 className='text-[14px] text-orange-300 font-semibold cursor-pointer ml-1 underline'>Register</h2>
      </Link>
    </div>
  </div>
</div>
  
  )
}

export default Login