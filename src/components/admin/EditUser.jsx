"use client"

import { Edit } from 'lucide-react'
import React, { useState } from 'react'
import Modal from "../../components/modal/Modal"
import AccountForm from '../../app/(auth)/account-form'

const EditUser = ({user}) => {
    const [openModal, setOpenModal] = useState(false)

        const handleOpenModal = () => {
            setOpenModal(true)
        }


  return (
    <>
        <div onClick={handleOpenModal} className='text-blue-100 flex items-center flex-row gap-2 shadow-inner px-2 cursor-pointer bg-payBlue rounded-md py-2'>
            <Edit className=' text-blue-100'  />
            <h3>Edit</h3>
        </div>

        {openModal &&  (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <div className=' bg-payWhite h-[450px] rounded-md flex items-center gap-2 p-4 flex-col'>
            <h1 className=' text-lg text-red-400'>You are about to edit your profile</h1>
            <div className=' overflow-auto w-full custom-scrollbar p-4'>
              <AccountForm profile={user} isEdit={true} setOpenModal={setOpenModal} />
            </div>
            </div>
        </Modal>)
        }
    </>
  )
}

export default EditUser