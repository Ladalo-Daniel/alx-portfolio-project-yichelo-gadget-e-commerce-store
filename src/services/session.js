import { cookies } from 'next/headers'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"


const supabase = createServerComponentClient( { cookies })

export const getUserSession = async() => {
    const {
        data: { session },
      } = await supabase.auth.getSession()

      return session
}