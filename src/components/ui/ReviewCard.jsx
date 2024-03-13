import React from 'react'

const ReviewCard = ({type}) => {
  return (
    <div className='h-[300px] bg-transparent ring-1 ring-black rounded-xl '>
        <p className='text-blue-900 text-[16px]'>{type}</p>
    </div>
  )
}

export default ReviewCard