import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
const ProductsList = ({}) => {

    const {search}=useParams()

    const [products,setProducts]=useState([])


    const getData=()=>{

    }

    useEffect(()=>{
        getData()
    },[search])

  return (
    <div className='w-full p-8 flex flex-col'>
        <div className='flex flex-row items-center justify-between'>
            <h2 className='text-orange-300 text-4xl font-bold'>{search}<span className='text-xl ml-3 text-black font-medium'> collections</span></h2>
            <div className='flex flex-row items-center space-x-2'>
                <IoIosArrowBack className='w-5 h-5'/>
               
                <h2>
                    back
                </h2>
              
            </div>
        </div>
    </div>
  )
}

export default ProductsList