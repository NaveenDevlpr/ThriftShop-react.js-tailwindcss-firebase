import React from 'react'
import { FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";


const About = () => {
  return (
    <div className='mb-2'>
    <div className='max-w-5xl mx-auto mt-6'>
        <div className='flex flex-row items-center justify-between w-full p-2'>
                        <h2 className='text-5xl font-semibold text-black'>
                            Why use <span className='text-orange-300 font-bold'>Thrifted</span>
                        </h2>
                        <button className='rounded-full bg-blue-900 font-medium text-white flex flex-row items-center px-4 py-[6px]' >
                            <h2 className='font-semibold mb-[2px] text-[14px]'>Know more</h2>
                        </button>
            </div>
        <div className='w-full flex flex-row space-x-4 mt-6 ring-1 ring-black rounded-tr-xl rounded-tl-xl'>
            <div className='w-1/3'>
                <img src='https://images.squarespace-cdn.com/content/v1/57fa9cafe4fcb5e6ab28144a/bd625007-f9a6-485d-b475-e791f2d4fd2f/women%27s+vintage+clothing?format=1500w'
                alt=''
                className='object-cover w-full h-full rounded-tl-xl'
                />
            </div>
            <div className='w-2/3 flex flex-col items-start p-8'>
                
                <div>
                    <h2 className='text-5xl text-black font-medium leading-relaxed'>
                        What makes us the preferred choice
                    </h2>
                    <p className='text-[14px] mt-2 leading-relaxed'>
                        embark journey thriugh our currated collection of memsmerizing style. Within our offering you'll find a diverse of array of clothing 
                        and accessories meticulously chosen to resonate within and embady your individuality.
                    </p>
                </div>


                <div className='flex flex-col space-y-8 mt-8'>
                    <div className='flex flex-row justify-between items-center space-x-8'>
                        <FaTruck className='w-12 h-12' />
                        <div className='flex flex-col space-y-1'>
                            <h2 className='text-2xl font-semibold text-black'>Free Delivery</h2>
                            <p className='text-[12px]'>Enjoying the free shipping throughout worldwide. we want to make is easy for to get the lowest style without having to worry about shipping costs</p>
                        </div>  
                    </div>

                    <div className='flex flex-row justify-between items-center space-x-8'>
                        <GiReturnArrow className='w-12 h-12'/>
                        <div className='flex flex-col space-y-1'>
                            <h2 className='text-2xl font-semibold text-black'>Return Guarantee</h2>
                            <p className='text-[12px]'>Customer satisfaction our priority. If you are not completely satisfied with your purchase we offer an easy and fast return guarantee.</p>
                        </div>  
                    </div>

                    <div className='flex flex-row justify-between items-center space-x-8'>
                        <FaWallet className='w-12 h-12'/>
                        <div className='flex flex-col space-y-1'>
                            <h2 className='text-2xl font-semibold text-black'>Easy Payment</h2>
                            <p className='text-[12px]'>We accept credit , debit and bank transfer cards, e-wallet. Choose the best payment method that best chooses you.</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default About