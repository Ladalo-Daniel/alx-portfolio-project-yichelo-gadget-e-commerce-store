"use client"

import { Edit } from 'lucide-react'
import React, { useState } from 'react'
import Modal from "../../components/modal/Modal"
import CreateBlogForm from './CreateBlogForm'

const EditBlog = ({blog}) => {
    const [openModal, setOpenModal] = useState(false)

        const handleOpenModal = () => {
            setOpenModal(true)
        }


  return (
    <>
        <div onClick={handleOpenModal} className='text-blue-100 flex items-center flex-row gap-1 shadow-inner px-1 cursor-pointer bg-green-500 rounded-md py-1'>
            <Edit size={18} className=' text-blue-100'  />
            <h3 className=' text-sm'>Edit</h3>
        </div>

        {openModal &&  (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <div className=' bg-payWhite h-[450px] rounded-md flex items-center gap-2 p-4 flex-col'>
            <h1 className=' text-red-400 text-2xl'>You are about to edit:</h1>
            <p>{blog?.title}</p>
            <hr className=' text-payBlue h-2' />
            <div className=' overflow-auto custom-scrollbar w-full p-2'>
              <CreateBlogForm blog={blog} isEdit={true} setOpenModal={setOpenModal} />
            </div>
            </div>
        </Modal>)
        }
    </>
  )
}

export default EditBlog