"use client"
import React from 'react'
import Image from 'next/image'

const Offer = () => {
  return (
    <>
      <div className='bg-black w-full text-orange-500 p-4 font-semibold text-center text-2xl'>EXCITING OFFERS AVAILABLE</div>
      <div className="bg-white h-screen flex flex-col md:flex-row md:justify-between md:bg-gray-300 md:h-[70vh] w-full">
        
        
        
        <div className="flex-1 w-full relative md:h-full">
          <Image src="/offer_bg.png" alt="" fill className="object-contain" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 px-6">
          <h1 className="text-black text-4xl font-bold xl:text-5xl">Get 20% Off on all Over Ear Headphones</h1>
          <p className="text-black xl:text-xl">
            Limited time offer, avail now to get the best deals! Only few days to go. Get your devices now.
          </p>
          
          <button className="buttons">Buy Now</button>
        </div>
      </div>
    </>
  )
}

export default Offer