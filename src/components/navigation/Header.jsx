"use client"

import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../Logo';
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const navItems = [
    {
        name: "Products",
        link: "/",
    },
    {
        name: "Category",
        link: "#",

    },
    {
        name: "Brands",
        link: "#",

    },
    {
        name: "About us",
        link: "#",

    },
    
]

function Header() {

    const [mobileNav, setMobileNav] = useState(false)
    const [nav, setNav] = useState(false);
    const navRef = useRef(null)

    const handleMobileOpen = () => {
        setMobileNav(!mobileNav)
    }

    useEffect(() => {
      if (typeof window !== "undefined") {
        //access to window
        const changeBackground = () => {
          if (window.scrollY >= 80) {
            setNav(true);
          } else {
            setNav(false);
          }
        };
  
        window.addEventListener("scroll", changeBackground);
      }
    }, []);

    const rounter = useRouter()
    const path = usePathname()

    const isAdminRoute = path.startsWith("/admin")
    // console.log("ADMIN",isAdminRoute)
    // console.log("PATH",path)



  return (
    <nav className={`flex ${isAdminRoute ? "hidden" : "block"}  px-1 lg:px-0 flex-row items-center max-w-7xl mx-auto  justify-between z-50 ${nav ? "bg-slate-50 transition-all" : "bg-white"} w-full  h-[80px] fixed top-0 `}>
        {/* IMAGELOGO_HERE */}
        <div className=' flex flex-row gap-2 items-center px-5'>
            <div className=' lg:hidden' onClick={handleMobileOpen}>
                {
                    mobileNav ? 
                    (
                     <X size={50} className=' text-gray-500 rounded-md ring-1 ring-orange-800 cursor-pointer' />
                    ) :
                    (
                     <MenuIcon size={50} className=' text-gray-500 p-2  rounded-md ring-1 ring-orange-800 cursor-pointer' />
                    ) &&
                    (
                     <MenuIcon size={40} className=' text-gray-500 p-2  rounded-md ring-1 ring-orange-800 cursor-pointer' />
                    )
                }
            </div>
            <Link href={"/"} className=' max-md:hidden'>
                 <Logo name="ichelo" />
             </Link>
            <Link href={"/"} className=' md:hidden' >
                  <Logo />
             </Link>
        </div>

        {/* DESKTOP_MENU */}

      <ul className=' lg:flex flex-row items-center gap-3 hidden  '>
        {navItems.map((item, idx) => (
            <li key={idx} >
                <Link 
                href={item.link}
                className={`${path === item.link ? " border-b-2 border-normalorange font-bold  px-6 py-1  text-black duration-100 rounde text-lg " : ""}px-3 text-sm py-  text-gray-600 font-medium duration-100 hover:text-normalorange rounde  `}
                >{item.name}</Link>
            </li>
        ))}
      </ul>
       
       {/* LOGIN_BUTTON */}
       <div className=' flex flex-row items-center gap-2'>
        {/* <Link 
        href="#" 
        onClick={mobileNav && handleMobileOpen}
        className='  py-2.5 lg:py-2 text-[#A6A6A6] text-lg font-semibold hover:opacity-90 max-sm:text-sm md:text-lg  px-2 lg:px-4 mr-5'
        >
          Login
        </Link> */}
        <Link 
        href="/sign-up" 
        onClick={mobileNav && handleMobileOpen}
        className='  py-2.5 lg:py-2 text-white text-lg hover:opacity-80 max-sm:text-sm md:text-lg bg-orange-500  px-2 lg:px-4 mr-5'
        >
          Shop Now
        </Link>
       </div>


      {/* MOBILEMENU */}
     { 
       mobileNav &&
        (    
            <div ref={navRef} className={ ` ${mobileNav ? "  transition-all transform  w-[264px] duration-1000  shadow-2xl" : ""}   flex flex-col lg:hidden transition-all left-0 w-0   gap-3 top-[0px] absolute bg-slate-100 h-[100vh] px-3 py-4  duration-1000  `}>
            <X  
            onClick={mobileNav && handleMobileOpen}
            size={30}
            className=' absolute right-2 top-2 ring-1 ring-normalorange p-2 cursor-pointer rounded-md text-gray-500'/>

            <div className=' h-[50px] w-[150px]'>
            <Link href={"/"}  onClick={handleMobileOpen}>
                 <Logo name="ichelo" />
             </Link>
            </div>
            <hr className=' text-green-300' />
            <div className=' mt-1'>
                {navItems.map((item, idx) => (
                    <span key={idx} className=' flex flex-col gap-6' >
                        <Link 
                        href={item.link}
                        onClick={handleMobileOpen}
                        className={`${path === item.link ? " border-b-2 border-normalorange text-black hover:opacity-75   px-3 py-2.5   duration-100 rounde text-lg " : ""}px-3 text-sm py-2.5  text-gray-600 duration-100 hover:text-sky-800 round  `}
                        >{item.name}
                        </Link>
                    </span>
                 ))}
            </div>

            <hr className=' absolute bottom-8 px-3 py-2 text-lg w-[250px] text-sky-500' />

            <p className=' absolute bottom-2 px-3 py-2 text-lg text-gray-500'>&copy; Yichelo 2024</p>

            
          </div>
        )
      }


    </nav>
  )
}

export default Header