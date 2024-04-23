"use client"

import React from 'react'

const SubscribeForEmail = () => {
  return (
    <section className=' flex flex-col  max-w-[1280px] mx-auto gap-5 items-center py-9 bg-gradient-to-r from-cyan-50 via-cyan-50 to-white overflow-hidden lg:px-20 px-4 justify-center  lg:gap-x-0'>
        <h1 className=' text-[#AEDB04] text-3xl sm:text-lg font-bold text-center'>To STAY UPDATED</h1>
        <h2 className=' text-[#1E1E1E] md:text-5xl text-2xl font-bold'>Join our News Letter</h2>
        <form 
            onSubmit={(e) => e.preventDefault()}
            className="items-center justify-center sm:flex">
            <input 
                type="email"
                placeholder="Enter your email"
                className="text-gray-500 w-full md:w-[400px] p-3 rounded-md border outline-none focus:border-[#00A8DC]"
                />
            <button
                className="w-full mt-3 px-5 py-3 rounded-md text-white bg-[#00A8DC] hover:bg-[#3993ae] active:bg-[#00A8DC] duration-150 outline-none shadow-md focus:shadow-none ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto"
                >
                Subscribe
            </button>
        </form>
  </section>
  )
}

export default SubscribeForEmail