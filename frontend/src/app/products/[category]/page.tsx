import { items } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbShoppingCartCopy } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";

const Category = () => {
  return (
    <div className="flex flex-wrap pt-2 px-2">
      {items.map((item) => (
        <Link className="w-full h-[60vh] border shadow-xl hover:shadow-orange-100 sm:w-1/2 lg:w-1/3 p-4 flex flex-col  justify-between group" href={`/product/${item.id}`} key={item.id}>
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-xl p-2">{item.title}</h1>
            <h2 className=" text-xl mr-2 text-gray-500">${item.price}</h2>
            <button className="buttons "><IoCartOutline /></button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Category