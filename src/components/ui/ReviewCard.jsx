import React from 'react'

const ReviewCard = ({review}) => {
  
  return (
    <div className='h-[200px] w-[250px] bg-transparent ring-1 ring-black rounded-xl flex flex-col items-center justify-center'>
        <p className='text-blue-900 text-[16px]'>{review}</p>
    </div>
  )
}

export default ReviewCard