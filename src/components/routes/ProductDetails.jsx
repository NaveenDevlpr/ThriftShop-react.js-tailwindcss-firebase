import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
const ProductDetails = ({productDetail,images,closeModal}) => {

  
const [currentImage,setCurrentImage]=useState(images.images)
const [showFullPara, setShowFullPara] = useState(false);

const para=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`


const truncatedPara = para.split(' ').slice(0, 40).join(' ');

const togglePara = () => {
  setShowFullPara(!showFullPara);
};
  return (
    <>
       
            <IoCloseOutline className='absolute w-6 h-6 font-bold cursor-pointer right-10 top-5' onClick={closeModal}/>
      
        <div className='flex flex-row items-start w-2/3 h-full'>
              <div className='flex flex-col w-1/4 space-y-4'>
                  {
                    images&&images.images.map((e,i)=>{
                      return(
                        <div className='w-full h-[100px] cursor-pointer' key={i} onClick={()=>{setCurrentImage(e)}} >
                            <img src={e} alt='' className='object-contain w-full h-full'/>
                        </div>
                      )
                    })
                  }
              </div>
              <div className='w-2/3 h-full'>
                  <img src={currentImage} alt='' className='object-cover w-full h-full'/>
              </div>
        </div>
        <div className='w-1/3'>
                <div className='flex flex-col'>
                    <h2 className='text-[40px] text-black font-bold'>{productDetail.brand}</h2>
                    <h2 className='text-[18px] text-gray-600 font-medium'>{productDetail.category}</h2>
                    <div className='flex flex-row items-center justify-between mt-8'>
                        <h2 className='text-xl text-gray-500 text-medium'>{productDetail.type}</h2>
                        <h2 className='text-xl font-semibold text-black'><span className='font-sans'>₹</span>{productDetail.price}</h2>
                    </div>
                    <div className='w-full mt-4'>
                    {
                        showFullPara ? para : truncatedPara}
                        <button onClick={togglePara} className='ml-2 text-orange-500 hover:underline focus:outline-none'>
                          {showFullPara ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                    
                    <div className='flex flex-col mt-10 space-y-6'>
                        <button className='w-full h-10 text-center text-white bg-black'>
                          Add to cart
                        </button>

                        <button className='w-full h-10 text-center text-black bg-yellow-200 ring-1 ring-black'>
                          Buy now
                        </button>
                    </div>
                </div>
        </div>
    </>
  )
}

export default ProductDetails