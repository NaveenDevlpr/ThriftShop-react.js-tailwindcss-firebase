import React, { useState } from 'react'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import {useNavigate} from 'react-router-dom'

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
import BannerCard from '../ui/BannerCard';


const Banner = () => {


  const navigate=useNavigate()

    const [bannerData,setBannerData]=useState(['Accessories','Pants','T-shirts','Shirts','Sneakers','Sweatshirts','Hoodie'])
   

    const photos = [
        'https://theecohub.com/wp-content/uploads/2022/01/online-thirft-stores-treasure-of-new-york-294x441@2x.jpg',
        'https://theecohub.com/wp-content/uploads/2022/01/online-thirft-stores-threadup-294x441@2x.jpg',
        'https://theecohub.com/wp-content/uploads/2022/01/online-thirft-stores-good-fair-294x441@2x.jpg',
        'https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/165551549-498453624495120-809694083248739527-n-1.jpg',
        'https://communityworxshoponline.org/cdn/shop/files/19446303-A3CB-4954-93BF-00B7CD3AFADF.jpg?v=1703799811&width=823',
        'https://thriftvintagefashion.com/cdn/shop/products/D3E6E09C-C034-4F0D-88D4-B9FD5FC555F7_1_201_a.jpg?v=1639134106&width=1920',
        'https://i.etsystatic.com/38803997/r/il/752e29/5575273482/il_794xN.5575273482_4kmf.jpg'
      ];

      
      const [activeIndex, setActiveIndex] = useState(0);

      const handleSlideChange = (swiper) => {
       
        setActiveIndex(swiper.activeIndex);
      };
  return (
    <section className="max-w-5xl p-4 lg:mx-auto">
        <div className='flex flex-row items-stretch space-x-5'>
            <div className='flex'>
                <h2 className='uppercase text-[60px] text-black font-bold'>Perfect fashion style <br></br>for <div className='inline-block w-[100px] h-12 bg-black rounded-full'>
                    <img src='https://graziamagazine.com/us/wp-content/uploads/sites/15/2024/01/vintage-treasures-unearthing-unique-wide-leg-jeans-at-thrift-stores-5.jpg' alt='' className='object-cover w-full h-full rounded-full'/>
                    </div> your self
                <div className='inline-block w-[140px] h-12 ml-4'><p className='text-[6px] font-light pr-2 flex-shrink'>Fashion encompasses clothing, accessories, and even behaviours, reflecting culture and individuality. Fashion evolves continuously, driven by designers, influencers, and changing norms.</p></div>
                </h2>
            </div>
            <div className='rounded-xl w-[100px] flex flex-grow flex-row items-center justify-center relative'>
               <img src='https://nypost.com/wp-content/uploads/sites/2/2022/04/vintage.png?resize=878,585'
               alt=''
               className='object-cover w-full h-full rounded-xl'
               ></img>
                <div className={`absolute inset-0 bg-black/50 opacity-50 w-full h-full rounded-xl `}></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center p-4'>
                    <h2 className='text-[20px] font-bold text-yellow-200 text-center'>JOIN THE THRIFT REVOLUTION</h2>
                    <p className='text-[10px] text-yellow-100 text-center mt-4'>Get Popular Brands At Unbeatable Price. Start Thrifting @ under RS. 499</p>
                    <button className='rounded-full bg-blue-900 font-medium text-white flex flex-row items-center px-5 py-[5px] mt-4' onClick={()=>{navigate('/products/type/all')}} >
                        <h2 className='text-center font-semibold text-[12px] mb-[2px]'>shop</h2>
                     </button>
                </div>
            </div>
        </div>
      <div className="">
        
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={'coverflow'}
          loop={false}
          initialSlide={2}
          spaceBetween={30}
          slidesPerView={3}
         
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: true,
          }}
          className="coverflow h-[400px] mt-8"
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
         {bannerData.map((p, index) => {
            return (
              <SwiperSlide key={index} className=''>
                <BannerCard src={photos[index]} type={p} isActive={index === activeIndex}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Banner