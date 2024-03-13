import React from 'react'

const ProductCard = ({data,img}) => {
  return (
    <div className='w-[300px] h-[300px] rounded-xl shadow-xl bg-blue-900/50 cursor-pointer'>
        <img src={img}
        alt=''
        className='w-full h-full rounded-xl object-cover'
        />
        <div className='flex flex-col py-1'>
            <div className='flex flex-row items-center justify-between'>
                <div>
                    <h2 className='text-black text-md font-semibold'>{data.category}</h2>
                </div>
                <h2 className='text-md font-semibold text-orange-300'><span className='font-sans text-lg'>₹</span> {data.price}</h2>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <div>
                    <h2 className='text-slate-400 text-[12px] '>{data.brand}</h2>
                </div>

                 <div className='flex flex-row items-center'>
                    <h2 className='text-slate-400 text-[12px] '>4.9</h2>
                    <h2 className='text-slate-400 text-[12px] '>{`(4 review)`}</h2>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProductCard