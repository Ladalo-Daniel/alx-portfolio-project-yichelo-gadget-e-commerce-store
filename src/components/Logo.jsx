import React from 'react'
import Image from "next/image";


const Logo = ({name}) => {
  return (
    <div className=' flex flex-row items-center justify-center'>
        {/* <Image  src="/logo.svg" quality={100} width={1000} height={1000} alt='A-logo' className=" h-[70px]    w-full  object-cover"/>  */}
        <h1 className=' text-4xl text-orange-500 font-bold'>Y</h1>
        <h2 className=' text-orange-500 font-bold text-3xl '>{name}</h2>
    </div>
  )
}

export default Logo