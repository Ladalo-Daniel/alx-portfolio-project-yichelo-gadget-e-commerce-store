import BlogReel from '../components/blog/BlogReel'
import CategoriesPopularCards from '../components/blog/CategoriesPopularCards'
import SubscribeForEmail from '../components/blog/SubscribeForEmail'
import SearchForm from '../components/blog/SearchForm'
import Footer from '../components/navigation/Footer'
import Header from '../components/navigation/Header'
import React, { Suspense } from 'react'
import { getBlogs } from '../services/apiBlogs'
import MiniLoader from '../components/MiniLoader'
import Image from 'next/image'

const BlogPage = async () => {
  const {data, error} = await getBlogs()
  

  return (
    <main className="" >
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


        </section>

        <section className=' flex flex-col lg:flex-row-reverse max-w-[1280px] mx-auto gap-5 items-center lg:items-start bg-payWhite overflow-hidden lg:px-20 px-4 py-1 lg:py-1  justify-between  lg:gap-x-0'>
          {error && <div className=' text-red-500 font-bold text-3xl p-4 bg-white rounded-lg'>Something went wrong, try again or check your internet connection</div>}
          <Suspense fallback={<MiniLoader />}>
          <BlogReel data={data} />
          </Suspense>
          <CategoriesPopularCards />
        </section>

        <SubscribeForEmail />

        <Footer />

    </main>
  )
}

export default BlogPage

