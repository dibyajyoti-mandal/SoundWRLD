import React from 'react'
import { category } from '@/data'
import Link from 'next/link'

const Products = () => {
  return (
    <>
      <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
        {category.map((category) => (
          <Link
            href={`/products/${category.title}`}
            key={category.id}
            className="w-full h-1/3 bg-cover p-8 md:h-1/2 border hover:shadow-orange-100 shadow-xl"
            style={{ backgroundImage: `url(${category.img})` }}
          >
            <div className={`text-orange-500 w-1/2`}>
              <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
              <p className="text-sm my-8">{category.desc}</p>
              <button className={`hidden 2xl:block bg-gray-200 xl:buttons py-2 px-4 rounded-md`}>Explore</button>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Products