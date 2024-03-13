import React ,{useState}from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
import ReviewCard from '../ui/ReviewCard';
import Ad from '../ui/Ad';

const Reviews = () => {

    const [bannerData,setBannerData]=useState(['Accessories','Pants','T-shirts','Shirts','Sneakers','Sweatshirts','Hoodie'])
  return (
    <div className='w-full'>
        <div className='max-w-5xl mx-auto p-4'>
        <div className='flex flex-row items-center justify-between max-w-5xl mx-auto'>
            <h2 className='text-5xl text-black font-semibold'>Customer Says</h2>
            <button className='rounded-full bg-blue-900 font-medium text-white flex flex-row items-center px-4 py-[6px]' >
                <h2 className='font-semibold mb-[2px] text-[14px]'>read more</h2>
                <FiArrowUpRight className={`w-4 h-4 ml-1 `}/>
            </button>
        </div>

        <div className='mt-8'>
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