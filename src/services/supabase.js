// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "@supabase/supabase-js"

// export const supabaseClient = createClientComponentClient<Database>()
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

export const supabaseClient = createClient(supabaseUrl, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, 
    {
        global: { fetch: fetch.bind(globalThis) }
    }
)
