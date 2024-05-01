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
import FirstBrandsSection from "../components/products/FirstBrandsSection"

const BlogPage = async () => {
  // const {data, error} = await getBlogs()
  

  return (
    <main className="" >
        {/* <Header /> */}

        <section className="   px-4 overflow-hidden rad  max-lg:pt-9 mt-10 lg:pt-16 pb-6  w-full object-cover bg-no-repeat bg-center flex flex-col justify-center items-center">

            <header className="  px-4 overflow-hidden max-w-[1280px] relative  pb-6 gap-6 max-md:pt-7  w-full object-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
                <h1 className='text-[#1E1E1E] font-bold  md:text-5xl text-center max-sm:text-lg'>Welcome to Yichelo Gadgets <br /> And Digital Accesories Hub</h1>
                <p className='text-[#000000] md:text-lg text-sm md:block text-center'>With a focus on convenience, reliability, and a diverse product catalog, <br /> We aim to become a go-to destination for all things tech-related in the online marketplace.
                </p>
                <SearchForm />
            </header>
        </section>

        <section className=" min-h-screen   px-4 overflow-hidden bg-slate-50  max-lg:pt-9 lg:pt-6 pb-6  w-full flex flex-col justify-center items-center">
          <FirstBrandsSection />
        </section>

        {/* <section className="   px-4 overflow-hidden rad max-lg:pt-9 lg:pt-16 pb-6  w-full object-cover bg-no-repeat bg-center flex flex-col justify-center items-center">

            <header className="  px-4 overflow-hidden max-w-[1280px] relative  pb-6 gap-6  w-full object-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
                <h1 className='text-[#1E1E1E] font-bold text-5xl md:text-5xl text-center max-sm:text-3xl'>Get updates on  fintech <br /> products and technologies</h1>
                <p className='text-[#000000] md:text-lg hidden md:block text-center'>Get informed on the latest updates on our products and <br /> others in the financial and technological sector worldwide.
                </p>
                <SearchForm />
            </header>
        </section>

        <section className=' flex flex-col lg:flex-row-reverse max-w-[1280px] mx-auto gap-5 items-center lg:items-start bg-payWhite overflow-hidden lg:px-20 px-4 py-1 lg:py-1  justify-between  lg:gap-x-0'>
          {error && <div className=' text-red-500 font-bold text-3xl p-4 bg-white rounded-lg'>Something went wrong, try again or check your internet connection</div>}
          <Suspense fallback={<MiniLoader />}>
          <BlogReel data={data} />
          </Suspense>
          <CategoriesPopularCards />
        </section>

        <SubscribeForEmail /> */}

        {/* <Footer /> */}

    </main>
  )
}

export default BlogPage

