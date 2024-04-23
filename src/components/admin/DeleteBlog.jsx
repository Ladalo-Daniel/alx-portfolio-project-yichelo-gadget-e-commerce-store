"use client"

import { Loader, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { deleteBlog } from '../../services/apiBlogs'
import Modal from "../../components/modal/Modal"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const DeleteBlog = ({ blog }) => {
    const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('id', blog?.id);
        setIsLoading(true)

        const deleteResult = await deleteBlog(null, formData);
        if (deleteResult.success) {
            toast.success("Blog deleted successfully")
            setIsLoading(false)
            router.refresh()
        } else {
            toast.error(deleteResult.message)
        }
        setOpenModal(false); // Close the modal after deletion attempt
    }

    return (
        <>
            <div
                onClick={handleOpenModal}
                className='flex items-center text-blue-100 cursor-pointer flex-row justify-between gap-1 shadow-inner px-1 py-1 bg-red-400 rounded-md'>
                <Trash size={18} className=' text-blue-100' />
                <h3 className=' text-sm'>Delete</h3>
            </div>

            {openModal && (
                <Modal openModal={openModal} setOpenModal={setOpenModal}>
                    <div className='bg-payWhite rounded-md flex items-center gap-2 flex-col py-4'>
                        <form onSubmit={handleDelete} className='flex items-center justify-center flex-col gap-2'>
                            <input type="hidden" name="id" value={blog?.id} />
                            <h1 className=' text-red-400 text-lg'>Are you sure you want to delete;</h1>
                            <h1 className= ' text-center'>{blog?.title} ?</h1>
                            <button type='submit' className='rounded-md w-1/2 ring-red-400 bg-red-400 hover:opacity-90 p-2 text-white flex items-center justify-center flex-row ring-1'>
                            {isLoading ? 
                                (<div className=" flex flex-row gap-2  items-center self-center">
                                <Loader className=" animate-spin text-white" />
                                <span>Deleting...</span>
                                </div>) :
                                (
                                <span className=" text-center">Confirm delete</span>
                                )
                            }
                            </button>
                            <button onClick={handleCloseModal} className=' w-1/2 mt-2 hover:bg-blue-50 rounded-lg ring-payBlue p-2  text-gray-900 ring-1 '>
                            Cancel
                            </button>
                        </form>
                    </div>
                </Modal>)
            }
        </>
    )
}

export default DeleteBlog






