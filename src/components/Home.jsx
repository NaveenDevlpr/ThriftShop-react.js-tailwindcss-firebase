import React from 'react'
import Banner from '../components/home/Banner'
import Categories from '../components/home/Categories'
import About from '../components/home/About'
import Reviews from '../components/home/Reviews'
import Footer from '../components/home/Footer'
import Header from './home/Header'
const Home = () => {
  return (
    <>
     <div className='max-w-7xl mx-auto p-4'>
      <Header/>
      </div>
        <Banner/>
        <Categories/>
        <About/>
        <Reviews/>
        <Footer/> 
    </>
  )
}

export default Home