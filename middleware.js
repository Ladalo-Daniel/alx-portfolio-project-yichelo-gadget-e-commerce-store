import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import {getUserSession} from "./src/services/session"

import { getProfile } from './src/services/apiUsers'

export async function middleware(req) {
  const session = await getUserSession()
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const profile = await getProfile(session?.user?.id)
  console.log("MIDDLE", session)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user?.id && req.nextUrl.pathname === '/sign-up') {
    if (profile?.data?.onboarded === true && user?.id && profile?.data?.role === "admin" ) return NextResponse.redirect(new URL('/admin', req.url))
    return NextResponse.redirect(new URL('/account', req.url))
  }

  if (!user && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/sign-up', req.url))
  }

  // if(profile === undefined){
  //   return NextResponse.redirect(new URL("/sign-up", req.url))
  // }

  return res
}

export const config = {
  matcher: ['/', '/admin/:path*'],

}