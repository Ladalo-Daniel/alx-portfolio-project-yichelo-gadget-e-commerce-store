
import React, { Suspense } from 'react'
import Header from '../../../components/navigation/Header'
import Footer from '../../../components/navigation/Footer'
import SearchForm from '../../../components/blog/SearchForm'
import Image from 'next/image'
import { Calendar, Dot, User } from 'lucide-react'
import { getBlogById, getBlogs } from '../../../services/apiBlogs'
import BlogMarkDown from "../../../components/blog/BlogMarkdown"
import { formatCustomDate } from '../../../utils/helpers'
import Link from 'next/link'
import MiniLoader from '../../../components/MiniLoader'
import SubscribeForEmail from '../../../components/blog/SubscribeForEmail'

const BlogDetailPage = async ({params}) => {


  const blogId = params.id
  const blog = await getBlogById(blogId)

  const popularPosts = await getBlogs()

  console.log(popularPosts?.data)
  // console.log(blog)

  // console.log(blogId)

  return (
    <div className=" bg-slate-100 px-0 lg:px-0 rad object-cover bg-no-repeat bg-center ">
        <Header />

         <div className=" rad object-cover bg-no-repeat bg-center mx-auto    overflow-hidden max-w-7xl relative  pb-6 gap-  w-full flex flex-col py-1">
          {/* IMAGE CONTAINER */}
          <div className=' px-6 lg:px-16 flex flex-col gap-4 rad object-cover bg-no-repeat bg-center  py-10 lg:py-20' >
          <h1 className=' text-[#00A8DC] uppercase  text-2xl'>{blog?.data?.tags}</h1>
          <h1 className='  text-[#1E1E1E] text-5xl max-md:text-lg font-semibold'>{blog?.data?.title}</h1>
          <div className=' flex flex-row gap-4 items-center'>
             <span className=' text-[#1E1E1E] text-lg font-thin max-sm:text-sm'>Published on</span>
             <span className=' text-[#00A8DC] max-sm:text-sm'>{formatCustomDate(blog?.data?.updated_at)}</span>
              <div className=' flex flex-row  items-center'>
              <Dot size={46} className='  font-bold text-gray-500' />
              <span className=' text-medium max-sm:text-sm text-[#00A8DC]'>{blog?.data?.minutes_read} min read</span>
              </div>
            </div>
          <Image 
              height={1000}
              width={1000}
              className=' w-full max-h-[400px] lg:h-[500px] lg:max-h-[600px] object-cover' alt='blog-detail-page-image'
              src={blog?.data?.image_url}
           />
          </div>

          {/* BLOG_CONTENT */}
          <div className="  mx-auto bg-payWhite  overflow-hidden max-w-7xl relative  pb-6 gap-6  w-full flex flex-col py-10">
            <div className=' px-2 lg:px-32 flex flex-col lg:flex-row items-start gap-6'>
              <div className=' w-full lg:w-3/5 p-4'>
              <BlogMarkDown content={blog?.data?.content} />   
              </div>
              <div className=' w-full lg:w-2/5  h-full flex flex-col gap-6 '>
                <h1 className=' text-[#000000] text-lg font-bold uppercase'>Popular Posts</h1>
                <Suspense fallback={<MiniLoader />}>
                {
                  popularPosts?.data?.slice(0, 3)?.map((p, idx) => (
                    <div key={idx} className=' flex flex-row items-start gap-2 border-b border-b-gray-400 pb-4 '>
                    <Image src={p?.image_url} height={1000} width={1000} className=' w-20 h-20 object-cover' alt='blog image'/>
                    <div className=' flex flex-col gap-1'>
                      <h1 className='text-[#00A8DC] text-sm uppercase'>{p?.tags}</h1>
                      <Link  href={`/blog/${p.id}`} className='text-[#000000] hover:opacity-60 text-lg font-semibold'>{p?.title}</Link>
                    </div>
                  </div>
                  ))
                }
                </Suspense>
              </div>     
            </div>
          </div>

          </div>

        <SubscribeForEmail />

        <Footer />
    </div>
  )
}

export default BlogDetailPage