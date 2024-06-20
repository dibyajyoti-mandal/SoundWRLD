"use client"
import React, { useEffect } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';


type Props = {
    id: number,
    price: number
}

const Price = ({ id, price }: Props) => {

    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        console.log(quantity)

        setTotal(
            quantity * price
        )
        console.log(total)
    }, [quantity, price])

    return (
        <div>
            <div className="flex justify-center ">
                <p className='flex-1 flex font-semibold p-4 text-2xl'>$<span className='pl-2'> {price} </span></p>
                <div className='flex-2'>
                    <button className="bg-orange-500 flex p-4 text-white hover:bg-orange-300 items-center rounded-xl"><IoCartOutline className='mr-2' />Add to Cart</button>
                </div>
            </div>
            <div className="flex justify-between w-full p-3 mt-6 bg-gray-200 rounded-lg">
                <span>Quantity</span>
                <div className="flex gap-4 items-center">
                    <button
                        onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                        className='hover:text-orange-600'
                    >
                        {"<"}
                    </button>
                    <span>{quantity}</span>
                    <button
                        onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
                        className='hover:text-orange-600'
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Price