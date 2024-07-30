import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-black flex flex-col justify-center items-center  bottom-0 w-full'>
        <div className="logo font-bold text-white text-2xl">
            <span className='text-blue-500'>&lt;</span>
            Pass
            <span className='text-blue-500'>KEY/&gt;</span>
            </div>
        <div className='flex justify-center items-center text-white'>
      Created with <img className="w-5 mx-1" src="/images/love.png" alt="love" />
        </div>
    </div>
  )
}

export default Footer
