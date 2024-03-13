import React from 'react'

const AddProducts = () => {

    const gender=['Women','Men','Unisex']
    const categories=['Oversized-Tee','Korean Pants','Streetwear','Retro']
    const type=['Shirts','T-shirts','Accessories','Sneakers','Hoodie','Pants','Sweatshirts']
  return (
    <div className='w-full mb-4'>
    <div className='h-[250px] w-full bg-yellow-100 relative'>
    <img src={'https://media.assettype.com/homegrown%2Fimport%2Fbook%2F12258-wnbiyndoag-1596005069.jpeg?w=1200&auto=format%2Ccompress&fit=max'}
        alt=''
        className='w-full h-full object-cover'
        />
        <div className={`absolute inset-0 bg-black/70 opacity-50 w-full h-full`}></div>
        <div className='absolute inset-0 flex items-center justify-center'>
        <h2 className='text-2xl font-semibold text-yellow-200 tracking-tighter'>Get all your <span className='font-bold  text-orange-300 text-5xl'>Thrifted</span> collections listed here</h2>
        </div>
    </div>
    <div className='flex flex-col max-w-xl mx-auto'>
        <form className='w-full mt-4 flex flex-col space-y-5'>
           <div className='flex flex-col space-y-3'>
                <label>Brand</label>
                <input type='text' placeholder='Type your brand' className='rounded-md px-4 py-2 ring-1 ring-gray-300 focus:ring-black outline-0 border-0'/>
           </div>
           <div className='flex flex-col space-y-3'>
                <label>Gender</label>
                <select className='rounded-md px-4 py-2 ring-1 ring-gray-300 focus:ring-black outline-0 border-0'>
                    {
                        gender.map((e,i)=>{
                            return(
                                <option value={e}>{e}</option>
                            )
                        })
                    }
                </select>
           </div>
           <div className='flex flex-col space-y-3'>
                <label>Category</label>
                <select className='rounded-md px-4 py-2 ring-1 ring-gray-300 focus:ring-black outline-0 border-0'>
                    {
                        categories.map((e,i)=>{
                            return(
                                <option value={e}>{e}</option>
                            )
                        })
                    }
                </select>
           </div>

           <div className='flex flex-col space-y-3'>
                <label>Type</label>
                <select className='rounded-md px-4 py-2 ring-1 ring-gray-300 focus:ring-black outline-0 border-0'>
                    {
                        type.map((e,i)=>{
                            return(
                                <option value={e}>{e}</option>
                            )
                        })
                    }
                </select>
           </div>
           <div className='flex flex-col space-y-3'>
                <label>Price</label>
                <input type='number' placeholder='Price your product' className='rounded-md px-4 py-2 ring-1 ring-gray-300 focus:ring-black outline-0 border-0'/>
           </div>

           <div className='flex flex-col space-y-3'>
                <label>Image Upload</label>
                <input type='file' className='rounded-md px-4 py-2 ring-1 ring-gray-300 focus:ring-black outline-0 border-0'/>
           </div>  

           <button className='rounded-md inline-block bg-blue-900 font-medium text-white px-4 py-[6px]' >
                <h2 className='font-semibold mb-[2px] text-[14px]'>Add</h2>
            </button> 
        </form>
    </div>
  </div>
  )
}

export default AddProducts