import React, { useState,useEffect } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { addToCart } from '../redux/slice/CartSlice';
import {useDispatch,useSelector} from 'react-redux'
import { app } from '../../firebaseServices';
import { getDatabase,push,set,ref as dbRef,get } from 'firebase/database';

const db=getDatabase(app)
const ProductDetails = ({productDetail,images,closeModal}) => {

  
const para=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  

const truncatedPara = para.split(' ').slice(0, 40).join(' ');

const togglePara = () => {
  setShowFullPara(!showFullPara);
};
  
const [currentImage,setCurrentImage]=useState(images.images)
const [showFullPara, setShowFullPara] = useState(false);


const [cartData,setCartData]=useState({...productDetail,url:currentImage})

const [review,setReview]=useState('')


const dispatch=useDispatch()

const cartProducts=useSelector((state)=>state.cart)

const addCart=()=>{
  for(let i=0;i<cartProducts.length;i++)
  {
      if(cartProducts[i].images===cartData.images)
      {
       console.log('already added')
       return   
      }
  }
 
  dispatch(addToCart(cartData))
}

const handleReviewSubmit=async(e)=>{
  e.preventDefault()
      
  const productRef = dbRef(db, `products/${productDetail.images}`);
 
        
  const snapshot = await get(productRef);
try {
  
  if (snapshot.exists()) 
  {
  

        const product=snapshot.val()
       
        const updatedData={
          ...product,review:[...(product.review || []),review]
        }

       
        set(productRef,updatedData).then(()=>{
          console.log('submitted')
        }).catch((error)=>{
          console.log("error"+error)
        })
        
      }
 
    
  
}catch(error){
  
}
}

useEffect(()=>{
  
},[])

  return (
    <div className='flex flex-col w-full h-full  px-[40px] py-[20px] relative'>
       
            <IoCloseOutline className='absolute w-6 h-6 font-bold cursor-pointer right-10 top-5' onClick={closeModal}/>
      
        <div  className='flex flex-row h-full'>
        <div className='flex flex-row items-start w-2/3 h-full'>
              <div className='flex flex-col w-1/4 space-y-4 '>
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
              <div className='w-2/3 h-full '>
                  <img src={currentImage} alt='' className='object-cover w-full h-full'/>
              </div>
        </div>
        <div className='w-1/3 h-full'>
                <div className='flex flex-col justify-center h-full'>
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
                        <button className='w-full h-10 text-center text-white bg-black' onClick={()=>addCart()}>
                          Add to cart
                        </button>

                        <button className='w-full h-10 text-center text-black bg-yellow-200 ring-1 ring-black'>
                          Buy now
                        </button>
                    </div>
                </div>
        </div>
     
        </div>

        <div className='flex flex-row w-full mt-4 space-x-10'>
            <div className='flex flex-col w-1/2 mb-5 space-y-4'>
                <h2 className='text-xl font-medium text-black'>Write your Review</h2>
              
                <form className='flex flex-col' onSubmit={handleReviewSubmit}>
                    <textarea placeholder=''  onChange={(e) => setReview(e.target.value)}  className='h-[300px] bg-gray-200/50 rounded-md ring-1 ring-gray-300/90 text-black p-4 focus:outline-none focus:ring-gray-500'/>
                    <button type='submit' className='px-4 py-2 mt-5 text-white bg-black'
                    >
                        Add Review
                    </button>
                </form>
            
            </div>

            <div className='flex flex-col'>
                <h2 className='text-xl font-medium text-black'>Reviews:</h2>
                
            </div>
    </div>
        
   
  </div>
  )
}

export default ProductDetails