import React from 'react'
import Banner from '../components/home/Banner'
import Categories from '../components/home/Categories'
import About from '../components/home/About'
import Reviews from '../components/home/Reviews'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div className='w-full'>
     
        <Banner/>
        <Categories/>
        <About/>
        <Reviews/>
        <Footer/> 
    </div>
  )
}

export default Home