
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
// import { toast } from "sonner";
import { createUpdateBlog, getBlogById, getBlogs, getBlogsByQuery, getBlogsByTag } from "../services/apiBlogs";
import { updateProfile } from "../services/apiUsers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { string } from "zod";

const queryClient = new QueryClient()


export const useGetBlogs = () => {
    return useQuery({
        queryFn: getBlogs,
        queryKey: ["get-blogs"],
    })
}


export const useGetBlogById = (id) =>{
    return useQuery({
        queryKey: ["get-blogs"],
        queryFn: () => getBlogById(id),
        enabled: true
    })
}


export const useGetBlogsByTag = (tag) => {
    return useQuery({
        queryKey: ["get-blogs"],
        queryFn: () => getBlogsByTag(tag),
        enabled: true
    })
}
export const useGetBlogsByQuery = (query) => {
    return useQuery({
        queryKey: ["get-blogs"],
        queryFn: () => getBlogsByQuery(query),
        enabled: true
    })
}


export const useCreateUpdateBlog = () => {
    const router = useRouter()

    return useMutation({
        mutationFn: ({ image, blogId, ...rest}) => createUpdateBlog({ image, blogId, ...rest}),
        mutationKey: ["create_update_blog_data"],
        onSuccess: ()=> {
            queryClient.invalidateQueries({
                queryKey: ["create_update_blog_data"],
            })
            router.refresh();
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
}





export const useUpdateProfile = () => {
    const router = useRouter()
    return useMutation({
        mutationFn: ({userId, onboarded, image, ...rest}) => updateProfile({userId, image, ...rest}),
        mutationKey: ["update_user_profile"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["update_user_profile"]
            })
            toast.success('Your profile was created successfully, Kindly wait for Admin Approval to continue to Dashboard!.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            router.refresh()
        },
        onError: ({message}) => {
            console.log(message)
            if (message === 'duplicate key value violates unique constraint "users_email_key"') {
                toast.error("Email already exists. Why don't you try another one?")
                return
            }
            toast.error("Sorry, an error occured while we were trying to update your profile... but hang on, let us give it another shot.")
            return
        }
    })
}