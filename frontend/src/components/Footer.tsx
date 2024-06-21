import React from 'react'
import Link from 'next/link'
import {Nunito} from '@next/font/google'

const nunito = Nunito({
    subsets:['latin'],
    weight:['400', '600']
})

const Footer = () => {
  return (
    <div className="h-6 md:h-12 p-6 lg:px-20 xl:px-40 text-orange-500 flex items-center justify-between bg-gray-100 bottom-0 fixed w-full">
      <Link href="/" className={nunito.className}>SoundWRLD</Link>
      <p className='text-sm md:text-md'>© ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer