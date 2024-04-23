
import { supabaseClient, supabaseUrl } from "../services/index"



export async function getUser() {
    const {data: session} = await supabaseClient.auth.getSession()
    if (!session.session) return null

    const {data, error} = await supabaseClient.auth.getUser()

    if (error)
    throw new Error(error.message)

    return data?.user
}



export const getProfile = async(sessionId) => {
    try {

        const { data, error, status } = await supabaseClient
            .from('users')
            .select('*')
            .eq('id', sessionId ||'')
            .single()
    
        if (error && status !== 406) {
            throw error
            
        }
    
        return { data, error }
        } catch (error) {
        }
}




export async function updateProfile({
    userId,
    image,
    ...rest
    }) {
    try {
    const hasImagePath = (image)?.startsWith?.(supabaseUrl)
    const imageName = `${Math.random()}-${(image?.[0] )?.name}`.replaceAll('/', '')
    const imagePath = hasImagePath ? image : `${supabaseUrl}/storage/v1/object/public/profile/${imageName}`
  

    const { error, data } = await supabaseClient.from('users').upsert({
        id: userId,
        updated_at: new Date().toISOString(),
        onboarded: true,
        image: imagePath ,
        ...rest,
    })
    .select()
    .single()

    if (error) throw error

    const { error: storageError } = await supabaseClient
    .storage
    .from('profile')
    .upload(imageName, image?.[0])
  
    if (storageError) {
      await supabaseClient
      .from('profile')
      .delete()
      .eq('id', data?.id)
      throw storageError
    }
    } catch (error) {
    throw error
    } 
}