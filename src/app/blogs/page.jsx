// "use client"

import React from 'react'
import Footer from '../../components/navigation/Footer'
import Header from '../../components/navigation/Header'
import SearchForm from '../../components/blog/SearchForm'
// import { useSearchParams } from 'next/navigation'
// import {useGetBlogsByTag} from "../../reactquery/index"
import { getBlogs } from '../../services/apiBlogs'
import MiniLoader from "../../components/MiniLoader"
import { ArrowRightCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SubscribeForEmail from '../../components/blog/SubscribeForEmail'


const BlogsFilterPage = async ({ searchParams }) => {
  const params = new URLSearchParams(searchParams)
  const cat = params.get("cat")
  const tag = params.get("tag")
  const q = params.get("q")
  const isPending = false

  
  const allQueries = cat || tag || q

  const {data} = await getBlogs(allQueries)

  // console.log(data)

  return (
    <div className=" ">
        <Header />

        <section className="   px-4 overflow-hidden rad max-lg:pt-9 lg:pt-16 pb-6  w-full object-cover bg-no-repeat bg-center flex flex-col justify-center items-center">

        <header className="  px-4 overflow-hidden max-w-[1280px] relative  pb-6 gap-6  w-full object-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
                <h1 className='text-[#1E1E1E] font-bold text-5xl md:text-5xl text-center max-sm:text-3xl'>Get updates on  fintech <br /> products and technologies</h1>
                <p className='text-[#000000] md:text-lg hidden md:block text-center'>Get informed on the latest updates on our products and <br /> others in the financial and technological sector worldwide.
                </p>
                <SearchForm />


                <Image
                className="wingContainer max-lg:hidden w-20 lg:w-auto h-auto absolute  z-10 left-40 top-2  "
                src="/skwig-1.svg"
                alt="Hero"
                width={200}
                height={200}
                />
                <Image
                  className="wingContainer max-lg:hidden w-20 lg:w-auto h-auto absolute  z-10 right-40 bottom-18"
                  src="/skwig-3.svg"
                  alt="Hero"
                  width={200}
                  height={200}
                />
            </header>

            <section className=' flex flex-col lg:flex-row gap-5 items-center'>
              <div className=' flex flex-col gap-4 mt-4 w-[90vw] bg-white rounded-lg p-4 lg:w-[900px]'>
                {isPending && <MiniLoader />}
                {data?.length === 0 ? (
                  <div className=' font-bold'>No result for this: <strong> {allQueries}</strong></div>
                ) : 
               ( 
                <div className=' flex flex-col gap-4'>
                  {data?.map((d, idx) => (
                    <div key={idx} className=' flex flex-row items-center gap-2 hover:opacity-70'>
                      <ArrowRightCircle className=' text-blue-400 ' />
                      <Link href={`/blog/${d.id}`} className=' font-bold hover:text-payBrown'>{d.title}</Link>
                    </div>
                  ))}
                </div>
               )
                }
              </div>
            </section>

        </section>

        <SubscribeForEmail />

        <Footer />
    </div>
  )
}

export default BlogsFilterPage