
import { getBlogs } from '../../../services/apiBlogs'
import Link from 'next/link'
import { Calendar, Edit, Eye, Trash, UserIcon } from 'lucide-react'
import Pagination from '../../../components/blog/Pagination'
import MiniLoader from '../../../components/MiniLoader'
import Image from 'next/image'
import { Suspense } from 'react'
import { formatCustomDate } from '../../../utils/helpers'
import EditBlog from "../../../components/admin/EditBlog"
import DeleteBlog from "../../../components/admin/DeleteBlog"




const AllBlogPage = async  () => {
    
    const {data, error} = await getBlogs()

      // console.log(data)

      if(error) return <h1>Error, Please refresh the page</h1>

  return (
    <Suspense fallback={<MiniLoader />}>

    <div className=" max-md max-md:pt-14 text-gray-700   max-sm:pt-5 lg:p-9 p-4 m-1 lg:m-9 ">
         <h1 className=' text-3xl text-black mt-20 md:mt-0'>All Blogs</h1>

         <div className=' shadow-sm border rounded-sm overflow-x-auto custom-scrollbar mt-5 '>
          <table className=' w-full table-auto text-sm text-left '>
             <thead className="bg-gray-50 text-gray-600 font-medium border-b">
               <tr>
                <th className="py-3 px-6">S/N</th>
                <th className="py-3 px-6">Date Posted</th>
                <th className="py-3 px-6">Image</th>
                <th className="py-3 px-6">Author</th>
                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6 text-center">Actions</th>
               </tr>
             </thead>

             <tbody className="text-gray-600 divide-y divide-gray-200 bg-payWhite">
              {
                data?.map((blog, idx) => (
                <tr key={idx + 1}>
                  <td className="px-6 py-4 whitespace-nowrap">{idx + 1}.</td>
                  <td className="px-6 py-4 whitespace-nowrap">{formatCustomDate(blog.updated_at)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Image 
                      height={1000}
                      width={1000}
                      src={blog.image_url} 
                      alt={blog.title}
                      className=' w-16  h-12  object-cover' />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{blog?.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{blog.title?.slice(0, 17)}...</td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">
                    <div className=' flex items-center flex-row justify-between gap-3'>
                     <Link href={`/blog/${blog.id}`} className='text-blue-100 flex items-center flex-row gap-1 shadow-inner px-1 cursor-pointer bg-payBlue rounded-md py-1'>
                      <Eye size={18} className=' text-blue-100' />
                      <h1 className=' text-sm'>View</h1>
                     </Link>
                      <EditBlog blog={blog} />
                      <DeleteBlog blog={blog} />
                    </div>
                  </td>
                </tr>
                ))
              }
             </tbody>
          </table>
     </div>

     <div className=' mt-9'>
     <Pagination data={data} />
     </div>


    </div>
    </Suspense>
  )
}

export default AllBlogPage