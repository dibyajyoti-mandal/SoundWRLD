"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const data = [
    {
        id: 1,
        title: "Crisp and Clear sound, anywhere anytime",
        image: "/bd.png",
    },
    {
        id: 2,
        title: "We deliver your order wherever you are",
        image: "/ath.png",
    },
    {
        id: 3,
        title: "The best sounding headphones you can get",
        image: "/sony.png",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
            6000
        );
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-white">
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex items-center justify-center flex-col gap-2 text-orange-500 font-bold">
                <h1 className="text-3xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl">
                    {data[currentSlide].title}
                </h1>
                <Link href='/products'>
                <button className="buttons">Explore</button>
                </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="w-full flex-1 relative">
                <Image
                    src={data[currentSlide].image}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    )
}

export default Slider