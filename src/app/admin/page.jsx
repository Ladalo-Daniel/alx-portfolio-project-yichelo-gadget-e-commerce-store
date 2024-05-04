

import { Atom, Eye, Import, PlusCircle, User, UserSquare, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaFly } from 'react-icons/fa';
import { getBlogs } from '../../services/apiBlogs';




const AdminPage = async () => {

  const {data:blogs, error} = await getBlogs()


  const data = [
    {
        count: blogs?.length,
        tag: "Blogs",
        link: "/admin/all-blogs",
        icon: <Atom />,
        bg:"bg-orange-600"
    },
    {
        // count: "+",
        tag: "Create Blog",
        link: "/admin/create-blog",
        icon: <PlusCircle />,
        bg:"bg-green-500"
    },
    {
        // count: "!",
        tag: "Go to Profile",
        link: "/admin/profile",
        icon: <User />,
        bg:"bg-yellow-500"
    },
    {
        // count: "?",
        tag: "See all Blogs",
        link: "/admin/all-blogs",
        icon: <Eye />,
        bg:"bg-red-400"
    },
    
  ]

 
  return (
       <div className="  max-md max-md:pt-14 flex flex-col gap-5  max-sm:pt-16 p-5 rounded-lg lg:m-9 " >
          <h1 className=' text-black text-4xl mt-10 lg:mt-0'>Welcome Admin</h1>
          <div className=' flex flex-col items-center lg:flex-row gap-4'>
            {data.map((d, idx) => (
             <div key={idx+ 1} className=' bg-payWhite h-[100px] lg:w-[200px] w-full p-4 rounded-lg'>
                <Link href={d.link}  className=' flex flex-row items-center gap-4'>
                  <span className={` ${d.bg} p-4 py-4  rounded-lg text-white`}>{d.icon}</span>
                  <div className=' flex flex-col items-center gap-1'>
                    <span className=' font-bold'>{d.count}</span>
                    <span>{d.tag}</span>
                  </div>
                </Link>
             </div>
            ))}
          </div>
        </div>
  );
};

export default AdminPage;
