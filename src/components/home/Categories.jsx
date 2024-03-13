import React from 'react'
import CategoryCard from '../ui/CategoryCard'
import Ad from '../ui/Ad'

const Categories = () => {
    const categories=['Oversized-Tee','Korean Pants','Retro','Street Wear']

    const images=[
        'https://threadheads.com/cdn/shop/files/Hero_35_1cac682f-9098-44db-ab37-513b2501307a.jpg?v=1701143951&width=2000',
        'https://ordicle.com/cdn/shop/products/product-image-1695353018_720x.jpg?v=1615061129',
        'https://www.thrifted.com/cdn/shop/files/THRIFTEDBANNER_1080x.webp?v=1708526614',
        'https://domno-vintage.com/cdn/shop/articles/Vintage_Ralph_Lauren_Style_Oversized_Sweatshirt_Baggy_Outfit.jpg?v=1667488368&width=1500'
    ]
  return (
    <div className='flex flex-col mx-auto mt-[40px]'>
        <div className=' max-w-5xl mx-auto flex items-center justify-center p-4'>
            <p className='text-[28px] font-semibold text-black leading-normal'><span className='text-3xl text-orange-300 font-bold'>Thrifted</span> is the home for all fashion lover. We offer a selection of the best quality clothing and accessories, helping you look confident every day.
                We are committed to providing an exceptional shopping experience and  friendly customer service.
            </p>
        </div>
        <div className='bg-emerald-100/80 w-full mt-10 flex flex-col items-center justify-center'>
            <div className='h-10'></div>
            <div className='flex flex-col items-center justify-center mt-5 mb-6 space-y-6'>
                <h2 className='text-[42px] font-bold'>Explore hype categories</h2>
                <p className='text-2xl text-black font-medium'>Thrift Instagram's hottest styles at flea market prices.</p>
            </div>
            <div className='max-w-5xl mx-auto grid grid-cols-2 gap-6 p-4 mt-4'>
                {
                    categories.map((e,i)=>{
                        return(
                            <CategoryCard key={i} type={e} img={images[i]}/>
                        )
                    })
                }
            </div>
            <div className='h-[60px]'></div>
        </div>
        <Ad img={'https://i0.wp.com/pinklungi.com/wp-content/uploads/2023/06/Thrift-Stores-From-Kerala-That-You-Must-Try-Shopping-At.jpg?resize=768%2C432&ssl=1'}
    main={'Get Everything you need for fashion look and lifestyle.'}
    sub={'enabling you to focus on what matters by designing simplistic objects and apparel for every day use.'}
    button={'shop'}
    />
    </div>
  )
}

export default Categories