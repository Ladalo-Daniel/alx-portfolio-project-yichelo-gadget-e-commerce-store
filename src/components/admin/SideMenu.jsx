"use client"

import { LayoutDashboard, SquarePlus, ToyBrick, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const navigation = [
    {
        name: "Dashboard",
        link: "/admin",
        icon: <LayoutDashboard />
    },
    {
        name: "Create Blog",
        link: "/admin/create-blog",
        icon: <SquarePlus />

    },
    {
        name: "Profile",
        link: "/admin/profile",
        icon: <User />

    },
    {
        name: "All Blog Lists",
        link: "/admin/all-blogs",
        icon: <ToyBrick />

    }
]

const SideMenu = ({profile}) => {
    const path = usePathname()

  return (
    <aside className="md:w-[18rem] bg-payWhite relative shadow-xl md:h-screen max-lg:hidden h-auto w-full flex flex-row md:flex-col md:justify-normal gap-8 md:gap-4">
    <div className="w-[10rem] bg-gray-50 p-4  max-lg:hidden h-[200px] text-center md:w-[85%] md:max-h-[200px] border-0 flex gap-1 md:gap-2 flex-row md:flex-col justify-start py-2 md:justify-center md:mt-1 md:ml-4 items-center rounded-xl"
    >
      <Image
        className=" rounded-full h-[120px] w-[120px] object-cover"
        src={profile?.image || "/logo.png"}
        width={100}
        height={100}
        alt="Netrix Logo"
        />
        <h1 className=' text-2xl text-gray-900'>Hello, {profile?.username ? profile?.username : "Admin"}</h1>
    </div>
    <ul className=' text-white overflow-y-auto'>
     {navigation.map((nav, idx) => (
        <li key={nav.link} className=' py-2 pr-4 gap-4 flex flex-col'>
          <Link href={nav.link} className={` ${path === nav.link ? "bg-orange-600 text-payWhite hover:opacity-90" : "bg-white"} p-3 shadow-lg text-gray-500 hover:text-white hover:bg-orange-600 rounded-r-2xl flex flex-row gap-2`}>
            <span>{nav.icon}</span>
            <span>{nav.name}</span>
          </Link>
        </li>
     ))}
     
    </ul>
    <div className=' bottom-0 absolute flex flex-row gap-2 items-center ml-11 justify-center shadow-inner p-2 m-2 '>
      <Image
        className="w-8 h-auto object-cover"
        src="/payLogo.png"
        width={100}
        height={50}
        alt="Netrix Logo"
        />
       <p className=' text-gray-500 p-2'>&copy; Payslate 2024</p>
    </div>
   </aside>
  )
}

export default SideMenu