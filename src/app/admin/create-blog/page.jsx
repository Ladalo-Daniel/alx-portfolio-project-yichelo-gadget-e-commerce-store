
import { toast } from 'sonner'
import CreateBlogForm from '../../../components/admin/CreateBlogForm'
import React, { Suspense} from 'react'
import { getUserProfile } from '../../../utils/shared/Profile'
import MiniLoader from '../../../components/MiniLoader'

const CreateBlogPage = async () => {

  const profile = await getUserProfile()
  console.log("CREATE", profile)
  

  return (
       <Suspense fallback={ <MiniLoader />}>
        <div  className=" max-md max-md:pt-14  text-gray-700 max-md:mt-32 bg-white max-sm:pt-5 lg:p-9 p-4 lg:m-9 m-4 ">
            <CreateBlogForm profile={profile} isCreate={true} />
        </div>
       </Suspense>
  )
}

export default CreateBlogPage