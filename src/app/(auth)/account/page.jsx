

import Image from 'next/image'
import AccountForm from '../account-form'
import { getUserSession } from '../../../services/session'
import { redirect } from 'next/navigation'
import { getUserProfile } from '../../../utils/shared/Profile'
import MiniLoader from '../../../components/MiniLoader'

export default async function Account() {
  const profile = await getUserProfile() 

  
  const session = await getUserSession()
  console.log(session)
  
  // console.log(profile)
  
  if (!session?.user) redirect("/sign-up")
  if (profile?.data?.onboarded && profile?.data?.role === "admin" && session?.user) redirect("/admin")
  

  return <div  className='flex flex-col items-center justify-center min-h-screen  gap-3 max-w-7xl mx-auto'> 
          <div className=' max-md:w-[90vw] self-center mx-auto p-9 bg-payWhite m-9 rounded-md'>

            <div className=' flex flex-col space-y-5 mb-4 mt-2'>
              <Image
                className="w-8 h-auto object-cover self-center "
                src="/payLogo.png"
                width={100}
                height={50}
                alt="Netrix Logo"
              />
              <h2 className="md:text-3xl text-center font-medium text-black">Complete your profile to continue</h2>
            </div>
            {/* {profile === undefined && <MiniLoader />} */}
            <AccountForm isCreate={true} session={session}  />
          </div>
        </div>
}