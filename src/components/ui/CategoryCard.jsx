import React from 'react'
import { Link } from 'react-router-dom'
const CategoryCard = ({type,img}) => {
  return (
   
        <Link to={`/products/category/${type}`}>
        <div className='w-[500px] h-[260px] rounded-xl bg-black relative cursor-pointer'>
            <img src={img} alt='' className='object-cover w-full h-full rounded-xl'/>
            <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent w-full h-full rounded-xl opacity-90 `}></div>
            <div className='absolute bottom-4 right-[50%] translate-x-[50%]  flex flex-row justify-between items-center p-4'>
                <h2 className='text-xl font-semibold text-center text-white'>{type}</h2>
            </div>
        </div>
        </Link>

  )
}

export default CategoryCard