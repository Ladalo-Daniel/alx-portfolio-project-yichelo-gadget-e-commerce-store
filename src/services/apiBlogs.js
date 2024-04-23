import { supabaseClient, supabaseUrl } from "./supabase"

export async function getBlogs() {
    try{
 
        const {data, error, count} = await supabaseClient.from("blogs").select("*")
        .order("updated_at", {
            ascending: false
         })
         .order("created_at", {
             ascending: false
         })
         
         if(error) throw error
         
         return {data, error, count}
 
     } catch(error){
         throw new Error(error)
     }
     
 }


 export async function getBlogById(id) {
    const { data, error } = await supabaseClient.from("blogs")
    .select("*")
    .eq("id", id)
    .single()

    if(error) throw error

    return { data }

}



export async function getBlogsByTag(tag) {
    try {
        const {data, error, count} = await supabaseClient.from("blogs").select("*")
        .order("updated_at", {
            ascending: false
        })
        .order("created_at", {
            ascending: false
        })
        .filter("tags", "like", tag)


        if(error) throw error

        return {data, error, count}

    } catch (error) {
        throw new Error(error)
    }
}

export async function getBlogsByQuery(query) {
    try {
        const {data, error, count} = await supabaseClient.from("blogs").select("*")
        .order("updated_at", {
            ascending: false
        })
        .order("created_at", {
            ascending: false
        })
        .filter("title", "like", query )

        if(error) throw error

        return {data, error, count}

    } catch (error) {
        throw new Error(error)
    }
}




 export async function createUpdateBlog({ image, blogId, ...rest}) {

    try{
        // console.log(image)
        const hasImagePath = image?.startsWith?.(supabaseUrl)
        const imageName = `${Math.random()}-${image[0]?.name}`?.replaceAll('/', '')

        const imagePath = hasImagePath ? image : `${supabaseUrl}/storage/v1/object/public/blog/${imageName}`
        // const imagePath = "hellllllllllllllllllllllllllllllllllllll"
        // console.log(imagePath)

        const {data, error} = await supabaseClient.from("blogs").upsert({
            id:blogId,
            updated_at: new Date().toISOString(),
            image_url: imagePath,
            ...rest
        })

        if(error) throw error

        console.log(imageName, image[0])
        const _imageName = imageName
        const _image = image[0]
        
        const {error: storageError} = await supabaseClient
        .storage
        .from("blog")
        .upload(_imageName, _image)

        if(storageError){
            await supabaseClient
            .from("blog")
            .delete()
            .eq("id", data?.id)
            throw storageError
        }

    }catch(error){
        throw error
    }
}



export async function deleteBlog(prevState, formData) {
    const { error } = await supabaseClient.from("blogs")
    .delete()
    .eq("id", formData.get("id"))

    if (error)
      return {
        message: error.message,
        success: false,
        pending: false
      }
    
    return {
      message: 'Success! Blog has been deleted.',
      success: true,
      pending: false
    }
}