"use client"

import { LayoutDashboard, SquarePlus, ToyBrick, Menu, User, X, Loader, TriangleAlert } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import Modal from '../modal/Modal'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from '../Logo'


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
const AdminHeader = ({profile}) => {
  const [mobileNav, setMobileNav] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(false);
  const navRef = useRef(null)
  const rounter = useRouter()
  const path = usePathname()

  const handleMobileOpen = (e) => {
      e.preventDefault()
      setMobileNav(!mobileNav)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }



  const handleSignOut = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Show loading indicator
  
    try {
      // Your sign-out logic here
      const response = await fetch('/auth/signout', {
        method: 'POST',
      });
  
      // Handle response status if needed
      if (response.ok) {
        // After sign-out success
        setOpenModal(false); // Close modal
        setLoading(false); // Hide loading indicator
        toast.success('Signout successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        rounter.push("/")
      } else {
        throw new Error('Sign-out failed');
      }
    } catch (error) {
      console.error('Error signing out:', error);
      setLoading(false); // Hide loading indicator
    }
  };


  return (
        <header className="h-auto bg-payWhite py-5 px-9 sticky max-md:fixed top-0 w-full flex justify-between z-30">
          <Link href="/">
            {/* <Image
                className="w-8 h-auto object-cover "
                src="/payLogo.png"
                width={100}
                height={50}
                alt="Netrix Logo"
                /> */}

                <Logo name="ichelo" />
          </Link>
          <div className=' flex flex-row items-center gap-4'>
                <button onClick={handleOpenModal} className=' rounded-lg ring-red-400 hover:bg-red-50 p-2 text-gray-900 ring-1'>
                  Signout
                </button>

            {openModal && 
              <Modal openModal={openModal} setOpenModal={setOpenModal}>
                  <div className=' bg-payWhite p-4 flex flex-col gap-4 items-center max-sm:w-[90vw] rounded-lg'>
                    <TriangleAlert size={60} className=' text-red-400 animate-bounce duration-1000' />
                    <h2 className=' text-4xl text-red-400'>Warning!</h2>
                    <span>Do you wish to Signout?</span>
                    <form action={'/auth/signout'} method='post' onSubmit={handleSignOut} className='w-1/2'>
                      <button type='submit' className='rounded-lg  p-2 ring-red-400 bg-red-400 hover:opacity-90 text-white flex items-center justify-center flex-row ring-1 w-full'>
                      {loading ? 
                        (<div className=" flex flex-row gap-2  items-center self-center">
                          <Loader className=" animate-spin text-white" />
                          <span>Please wait...</span>
                        </div>) :
                        (
                          <span className=" text-center">Continue</span>
                        )
                      }
                      </button>
                    </form>
                    <button onClick={handleCloseModal} className=' rounded-lg hover:bg-blue-50 ring-payBlue p-2 text-gray-900 ring-1 w-1/2'>
                      Cancel
                    </button>
                  </div>
              </Modal>
            }
              <Menu 
              size={40} 
              className=' text-gray-500 lg:hidden cursor-pointer ring-1 ring-blue-200 p-2 rounded-md '
              onClick={handleMobileOpen} />
            </div>

     { 
       mobileNav &&
        (    
            <div ref={navRef} className={ ` ${mobileNav ? " min-w-[280px]  max-w-[70vw] md:min-w-[30vw]  shadow-2xl" : ""}  flex flex-col lg:hidden left-0   gap-3 top-[0px] absolute bg-payWhite h-screen px-3 py-7   `}>
            <X  
            onClick={mobileNav && handleMobileOpen}
            size={25}
            className=' absolute right-2 top-2 ring-1 ring-red-400 p-2 rounded-md text-gray-500'/>

            <aside className="md:w-[18rem]  flex-col   w-full flex  justify-normal gap-4">
                <div className=" bg-gray-50    text-center w-[85%]  h-[35%] py-4 border-0 flex  gap-2 flex-col justify-start ustify-center mt-1 ml-2 items-center rounded-xl"
                >
                  <Image
                    className=" rounded-full h-[120px] w-[120px] object-cover"
                    src={profile?.image || "/logo.png"}
                    width={100}
                    height={100}
                    alt="Netrix Logo"
                    />
                    <h1 className=' text-2xl text-gray-500'>Hello, {profile?.username ? profile?.username : "Admin"}</h1>
                </div>
                <ul className=' text-white overflow-y-auto mb-[10px]'>
                {navigation.map((nav, idx) => (
                    <li key={idx} className=' py-2 pr-4 gap-4 flex flex-col'>
                      <Link href={nav.link} onClick={handleMobileOpen} className={` ${path === nav.link ? "bg-payBlue text-payWhite hover:opacity-90" : "bg-white"} p-3 shadow-lg text-gray-500 hover:text-white hover:bg-payBlue rounded-r-2xl flex flex-row gap-2`}>
                        <span>{nav.icon}</span>
                        <span>{nav.name}</span>
                      </Link>
                    </li>
                ))}
                </ul>
                <div className=' bottom-0 absolute bg-payWhite  w-[90%] flex flex-row gap-2 items-center  justify-center shadow-inner p-2  '>
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
          </div>
        )
      }
    </header>
  )
}

export default AdminHeader