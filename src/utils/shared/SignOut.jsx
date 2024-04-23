import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const SignOut = async (content) => {
  return (
    <form action={'/auth/signout'} method='post'>
        {
          content ? (
            <button className='bg-background border-rose-500 p-4' type="submit">{content}</button>
          ) :
          <button className={'mr-2 p-4 border-rose-300'} type='submit'>Sign Out <ArrowRightIcon size={15}/></button>}
    </form>
  )
}

export default SignOut