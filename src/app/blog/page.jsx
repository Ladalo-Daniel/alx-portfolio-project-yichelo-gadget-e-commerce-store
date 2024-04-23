import BlogReel from '../../components/blog/BlogReel'
import CategoriesPopularCards from '../../components/blog/CategoriesPopularCards'
import SearchForm from '../../components/blog/SearchForm'
import Footer from '../../components/navigation/Footer'
import Header from '../../components/navigation/Header'
import React, { Suspense } from 'react'
import { getBlogs } from '../../services/apiBlogs'
import MiniLoader from '../../components/MiniLoader'

const BlogPage = async () => {
  const {data, error} = await getBlogs()
  

  return (
    < >
        {/* <Header /> */}

        <section className="  px-4 overflow-hidden rad lg:pt-40 pb-6  w-full object-cover bg-no-repeat bg-center flex flex-col justify-center items-center">

            <header className="  px-4 overflow-hidden  pb-6 gap-6  w-full object-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
                <h1 className='text-[#1E1E1E] font-bold text-3xl md:text-5xl'>Our Content Hub</h1>
                <p className='text-[#1E1E1E] md:text-lg hidden md:block text-center'>Stay informed, inspired, and empowered with our latest insights, <br /> news, and trends in the ever-evolving realm of Fintech Industry.
                </p>
                <p className='text-[#1E1E1E] md:text-lg md:hidden text-center'>Stay informed, inspired, and empowered <br /> with our latest insights, news, and trends in the ever-evolving realm of Fintech Industry.
                </p>
                <SearchForm />
            </header>

        </section>

        <section className=' flex flex-col lg:flex-row gap-5 items-center'>
          {error && <div className=' text-red-500 font-bold text-3xl p-4 bg-white rounded-lg'>Something went wrong, try again or check your internet connection</div>}
          <Suspense fallback={<MiniLoader />}>
          <BlogReel data={data} />
          </Suspense>
          <CategoriesPopularCards />
        </section>

        <Footer />

    </>
  )
}

export default BlogPage