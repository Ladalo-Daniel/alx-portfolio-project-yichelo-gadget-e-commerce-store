

import React from 'react'
import AuthForm from '../auth-form'
import { getUserSession } from '../../../services/session'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Logo from '../../../components/Logo'

export default async function Home() {
  const session = await getUserSession()
  if (session?.user) redirect("/admin")
  return (
    <section className="w-full h-full min-h-screen text-black">
      <div className="flex mx-auto justify-center items-center min-h-screen w-full p-4 backdrop:fill-transparent backdrop-filter blueGree opacity-90 transition-all hover:from-black hover:to-slate-500 hover:animate-pulse-plus"
      >
        <div className="p-8 flex flex-col gap-6 w-[90vw] min-h-[400px] md:w-[400px] bg-payWhite rounded-md">
           {/* <Image
                className="w-8 h-auto object-cover self-center "
                src="/payLogo.png"
                width={100}
                height={50}
                alt="Netrix Logo"
            /> */}
            <Logo name="ichelo" />
          <h1 className="text-2xl tracking-tight font-semibold ">Welcome to Payslate Admin</h1>
          <p className="text-black font-inherit tracking-tight text-lg">
            Login to continue
          </p>
          <div className="col-6 auth-widget">
            <AuthForm />
          </div>
         </div>
         </div>
    </section>
  )
}
