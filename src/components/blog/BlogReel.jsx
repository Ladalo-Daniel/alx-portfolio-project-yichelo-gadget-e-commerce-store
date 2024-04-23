"use client"

import { Calendar, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Pagination from './Pagination'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Dot } from 'lucide-react';
import {formatCustomDate} from "../../utils/helpers"
import BlogMarkdown from './BlogMarkdown'


const BlogReel = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const router = useRouter()
    const searchParams = useSearchParams()
  
    const page = searchParams.get("page") || 1

      useEffect( () => {
      if(page){
        router.push(`/blog/?page=${page}`)
      }
     }, [router, page])


     const blogsPerPage = 3

  const startIndex = (currentPage - 1) * blogsPerPage
  const endIndex = startIndex + blogsPerPage
  const currentPageBlogs = data.slice(startIndex, endIndex);

  const totalData = data?.length;
  const totalPages = Math.ceil(totalData / blogsPerPage);
  // console.log(totalData)



  const handleNext = () =>{
    router.push(`/?page=${currentPage + 1}`)
    setCurrentPage(currentPage + 1)
  }

  const handlePrev = () =>{
    router.push(`/?page=${currentPage - 1}`)
    setCurrentPage(currentPage - 1)
  }

  const handleSkipNext = () => {
    const nextPage = currentPage + 2;
    if (nextPage <= totalPages) {
      router.push(`/?page=${nextPage}`);
      setCurrentPage(nextPage);
    }
  };
  
  const handleSkipPrev = () => {
    const prevPage = currentPage - 2;
    if (prevPage >= 1) {
      router.push(`/?page=${prevPage}`);
      setCurrentPage(prevPage);
    }
  };
  

  return (
   <>
    <div className=' flex flex-col mt-9   items-center gap-5 lg:w-3/4'>
        {/* BLOG CONTAINER */}
        {currentPageBlogs?.map((blog, idx) => ( 
        <div key={blog.id}  className=' flex flex-col md:flex-row-reverse gap-5 p-6 bg-payWhite rounded-lg'>
            <Image
            height={500}
            width={500}
            src={blog.image_url} 
            alt={blog.id}
            className=' md:w-1/3 aspect-[1/2] w-full h-60 object-cover hover:translate-y-1' />
            <div className=' flex flex-col gap-3 md:w-2/3'>
                <div className=' flex flex-row gap-2 items-center bg-slate-50 px-4'>
                  <span className=' text-[#AEDB04] max-sm:text-sm'>{formatCustomDate(blog.updated_at)}</span>
                   <div className=' flex flex-row  items-center'>
                    <Dot size={46} className='  font-bold text-gray-500' />
                    <span className=' text-medium max-sm:text-sm text-[#AEDB04]'>{blog.minutes_read} min read</span>
                   </div>
                   <div className=' flex flex-row  items-center'>
                    <Dot size={46} className='  font-bold text-gray-500' />
                    <Link href={`/blogs/?tag=${blog.tags}`} className=' text-gray-400 text-medium max-sm:text-sm hover:text-gray-600'>{blog.tags}</Link>
                   </div>
                </div>
                <h1 className='  text-[#1E1E1E] text-3xl max-md:text-lg font-semibold'>{blog.title}</h1>
                <p>{blog.content.slice(0, 200)}...</p>
                <Link href={`/blog/${blog.id}`} className=' hover:text-blue-600 w-fit text-[#1ABCFE] font-semibold'>View more</Link>
            </div>
        </div>
        ))}
     <Pagination 
     handleNext={handleNext}  
     handlePrev={handlePrev} 
     data={data} 
     currentPage={currentPage} 
     startIndex={startIndex} 
     endIndex={endIndex}
     totalPages={totalPages}
     setCurrentPage={setCurrentPage}
     router={router}
     handleSkipNext={handleSkipNext}
     handleSkipPrev={handleSkipPrev}
      />
     </div>
   </>
  )
}

export default BlogReel