import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrGoogle } from "react-icons/gr";
import { Nunito } from '@next/font/google'

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '600']
})


const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2 ring ring-gray-100 ">

        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/bd.png" alt="" fill className="object-cover"/>
        </div>

        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className={`{nunito.classname} text-2xl`}>Welcome to <span className="text-orange-500">Sound</span>WRLD</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className=" buttons flex gap-4 p-4 ring-1 ring-orange-100 rounded-md justify-center">
          <GrGoogle className="mt-1" />
            <span>Sign in with Google</span>
          </button>
          
          <p className="text-sm">
            Any problem?<Link className="text-orange-400" href="/"> Contact us at 900-300-1002</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;