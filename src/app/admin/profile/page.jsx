import React, { Suspense } from 'react'
import { getUserProfile } from '../../../utils/shared/Profile'
import Image from 'next/image'
import EditUser from '../../../components/admin/EditUser'
import MiniLoader from '../../../components/MiniLoader'

const ProfilePage = async () => {
  const profile = await getUserProfile()

  const user = profile?.data
  // console.log(user)

  return (
    <Suspense fallback={<MiniLoader />}>

    <div className=" max-md max-md:pt-14 max-md:mt-32  max-sm:pt-5 m-4 lg:m-9 flex flex-col gap-4 ">
        <div className=' w-full bg-white p-2 px-4 rounded-md flex flex-row items-center gap-3 justify-between'>
            <div className=' flex items-center flex-row gap-3'>
            <Image src={user?.image} name={user?.username} className=' h-20 w-20 rounded-full object-cover' height={100} width={100} alt='Profile' />
            <div className=' flex flex-col'>
              <span className=' text-black text-small md:text-lg'>{user?.username}</span>
              <span className=' text-black text-small md:text-xl'>{user?.position}</span>
            </div>
            </div>
            <EditUser user={user} />
        </div>

        <div className=' w-full text-black bg-white p-5 rounded-md relative'>
            <h2 className=' text-blue-950 text-2xl p-4'>Profile Information</h2>
             <span className=' absolute w-[70%] md:w-[25%] bg-payBlue h-[0.20rem] top-[5.11rem]'></span>
            <hr className=' text-gray' />
            <div className=' flex flex-row items-center gap-28 py-3'>
              <h1 className=' font-semibold w-[40%]'>Name:</h1>
              <span className=' w-[60%]'>{user?.first_name} {user?.last_name}</span>
            </div>
            <div className=' flex flex-row items-center gap-28 py-3'>
              <h1 className=' font-semibold w-[40%]'>Email:</h1>
              <span className=' w-[60%] text-xs md:text-base'>{user?.email}</span>
            </div>
          </div>

    </div>
    </Suspense>
  )
}

export default ProfilePage