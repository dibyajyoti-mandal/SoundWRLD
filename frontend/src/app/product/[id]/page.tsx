import React from 'react'
import Image from 'next/image'
import { item } from '@/data'
import Price from '@/components/Price';


const Product = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col gap-2 justify-around md:flex-row'>
      {item.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={item.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase md:text-4xl xl:text-5xl">{item.title}</h1>
        <p>{item.desc}</p>
        <Price id={item.id} price={item.price} />


      </div>
    </div>
  )
}

export default Product