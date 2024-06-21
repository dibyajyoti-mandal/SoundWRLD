import Image from "next/image";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-orange-500 lg:flex-row ">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-20">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/cat1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className=" text-xl font-bold">Beyerdynamic 990</h1>
            <span>Quantity: 1</span>          </div>
          <h2 className="font-bold text-black">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/boseqc.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className=" text-xl font-bold">Bose QC 100</h1>
            <span>Quantity: 1</span>
          </div>
          <h2 className="font-bold text-black">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between  mb-4">
          <Image src="/cat2.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className=" text-xl font-bold">ATH M50xBT2</h1>
            <span>Quantity: 1</span>          </div>
          <h2 className="font-bold text-black">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-gray-100 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-20 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="text-black">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="text-black">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-black">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="text-black font-semibold">TOTAL COST</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="buttons flex justify-center">
        <FaAnglesRight className="mt-1 mr-1"/>CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;