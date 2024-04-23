'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


export default function AuthForm() {
  const supabase = createClientComponentClient()

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa,
        extend: false,

        className: {
          button: "text-base font-bold min-w-[20rem] sm:text-xl px-6 py-2 capitalize bg-payBlue text-white rounded-[1.5rem]",
          label: "block space-y-2 text-muted-foreground mb-1 font-bold",
          input: "p-2 ring-1 ring-blue-500 rounded-md shadow  focus:ring-blue-50 mt-2 transition-all mb-2 w-full",
          container: "flex flex-col gap-4",
          message: "p-4 rounded-md bg-blue-50 border border-green-500 shadow text-green-700 mt-2 w-full",
          // anchor: buttonVariants({variant: "link"})
        }
      }}
      theme=""
      showLinks={false}
      providers={[]}
      redirectTo={`${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`}
    />
  )
}