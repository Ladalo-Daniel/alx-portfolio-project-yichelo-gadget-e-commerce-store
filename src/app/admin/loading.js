import { Loader, Loader2 } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-transparent fixed top-0 bottom-0 right-0 left-0'>
        <Loader size={36} className='animate-spin text-blue-400' />
    </div>
  )
}

export default Loading