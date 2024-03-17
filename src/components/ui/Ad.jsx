import React from 'react'
import {useNavigate} from 'react-router-dom'
const Ad = ({main,sub,img,button}) => {

  const navigate=useNavigate()

  const navigatePage=()=>{
      if(button==='shop'){
        navigate('/products/type/all')
      }
  }
  return (
    <div className='h-[500px] relative'>
        <img src={img}
        alt=''
        className='w-full h-full object-cover'
        />
        <div className={`absolute inset-0 bg-black/80 opacity-50 w-full h-full`}></div>
        <div className='absolute left-0 right-0 top-0 bottom-0  flex flex-col w-full items-center justify-center space-y-5'>
            <h2 className='text-5xl w-1/2 text-center font-semibold text-yellow-200 leading-relaxed'>{main}</h2>

            <p className='text-[12px] text-center w-1/3 text-yellow-100'>{sub}</p>
            <button className='rounded-full text-[14px] bg-yellow-200 text-blue-900 px-4 py-2 font-semibold' onClick={()=>{navigatePage()}}>
            {button}
        </button>
        </div>
        
    </div>
  )
}

export default Ad