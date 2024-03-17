import React ,{useEffect, useState}from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import ReviewCard from '../ui/ReviewCard';
import Ad from '../ui/Ad';

import { app } from '../../firebaseServices';
import { getDatabase ,ref as dbRef, get} from 'firebase/database';


const db=getDatabase(app)

const Reviews = () => {

const [reviews,setReviews]=useState()


  const getReviews=async()=>{
    const products = [];
            
    const productRef = dbRef(db, 'products');

    const snapshot = await get(productRef);
  try {
    
    if (snapshot.exists()) 
    {
     
      snapshot.forEach((childSnapshot) => {
       
        
        const product = childSnapshot.val();
          if(product.review){
            
            products.push(product.review);
          }
       
        
      });
      setReviews(products)
    } else {
      console.log('No products found.');
    }
   
  } catch (error) {
   
    console.error('Error getting data:', error);
  }     
  }

  useEffect(()=>{
    getReviews()
  },[])

  console.log(reviews)
    const [bannerData,setBannerData]=useState(['Accessories','Pants','T-shirts','Shirts','Sneakers','Sweatshirts','Hoodie'])
  return (
    <div className='w-full'>
        <div className='max-w-5xl p-4 mx-auto'>
        <div className='flex flex-row items-center justify-between max-w-5xl mx-auto'>
            <h2 className='text-5xl font-semibold text-black'>Customer Says</h2>
            <button className='rounded-full bg-blue-900 font-medium text-white flex flex-row items-center px-4 py-[6px]' >
                <h2 className='font-semibold mb-[2px] text-[14px]'>read more</h2>
                <FiArrowUpRight className={`w-4 h-4 ml-1 `}/>
            </button>
        </div>

        <div className='flex flex-row items-center justify-center w-full mt-8 space-x-8'>
          {
            (reviews&&reviews.length!==0)&&
            reviews[0].slice(0,3).map((e,i)=>{
              return(
                <ReviewCard review={e.review}/>
              )
            })
          }
       </div>
       
    </div>
    <Ad img={'https://miro.medium.com/v2/resize:fit:828/format:webp/1*fD8VnBV0zgNbGK3LRvVuZQ.jpeg'}
        sub={'Join our Instagram page to stay up-to-date with the latest fashion trends, receive expert styling tips and gain access to insider only exclusive offers.'}
        main={'Special offers for you every month'}
        button={'subscribe'}
        />
    </div>
  )
}

export default Reviews