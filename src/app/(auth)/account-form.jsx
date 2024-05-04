'use client'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useUpdateProfile } from "../../reactquery";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { toast } from "sonner";

export const userSchema = yup.object({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters.")
    .matches(
      /^[a-zA-Z0-9_][a-zA-Z0-9_.]{1,18}[a-zA-Z0-9_]$/,
      "Username must contain 3-20 characters of letters, numbers, underscores, or periods."
    ),
  email: yup.string().email("You have to provide a valid email address").required(),
  image: yup.mixed().optional(),
  first_name: yup.string().optional(),
  last_name: yup.string().optional(),
  position: yup.string().optional(),
});






export default function AccountForm({session, profile, setOpenModal, isCreate, isEdit}) {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(isEdit ? profile?.image : "");

  console.log(profile)


  const user = session?.user

  // console.log("USER:" ,user)
  

  const { mutateAsync: updateProfile, isPending: isUpdating } = useUpdateProfile()
  const router = useRouter()


  const defaultValues = {
    username: isEdit ? profile?.username || "" : "", // Set default value based on edit mode
    first_name: isEdit ? profile?.first_name || "" : "",
    last_name: isEdit ? profile?.last_name || "" : "",
    email: isEdit ? profile?.email : isCreate && user?.email,
    position: isEdit ? profile?.position || "" : "",
    // image: isEdit ? profile?.image || "" : ""
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(userSchema),
    mode: "onChange",
  });

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFileUrl(URL.createObjectURL(file));
    setFile(file); 
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": ['.jpg', '.png', '.jpeg', '.svg']
    },
  });

  // console.log(fileUrl)
  // console.log([file])


  const handleUserSubmit = async (data) => {

    const newUserData = {
      email: isEdit ? profile?.email || "" : isCreate && data.email,
      username: data.username,
      last_name: data.last_name,
      first_name: data.first_name,
      position: data.position,
      image: isEdit && !file ? profile?.image : [file]
    };

    updateProfile({...newUserData, userId:isEdit ? profile?.id : user?.id || "", image:newUserData.image, onboarded: true}, {
      onSuccess: () => {
        isCreate && router.push("/admin")
        isCreate && toast.success("Successfully created your profile")
        isEdit && router.refresh()
        isEdit && toast.success("Profile Edited successfully")
        isEdit && setOpenModal(false)
        reset()
      },
    })
    // console.log(newUserData)

  } 

  return(
    <>
      <form onSubmit={handleSubmit(handleUserSubmit)} className='flex flex-col gap-9 py-2'>
      <div {...getRootProps()} className='flex flex-col gap-2 cursor-pointer w-full items-center justify-center'>
          <span className='text-gray-800 md:text-2xl'>{isEdit ? "Change profile image" : "Add Profile image"}</span>
          <input {...getInputProps()} />
          {fileUrl ?
            (
              <Image height={100} width={100} src={ fileUrl} alt='Blog Image' className=' h-96 w-[300px] lg:w-[700px] md:w-[500px] object-cover rounded-md' />
            ) :
            (
              <Image height={100} width={100} src="/upload.png" alt='Blog Image' className='h-36 w-36 object-cover rounded-md' />
            )
          }
          {!fileUrl && <p className='text-red-500'>Image is required</p>}
        </div>

        <div className="flex flex-col items-start">
        <input 
          id={"userName"}
          { ...register("username") }
          type="text" 
          placeholder='Username here' 
          className='w-full p-4 sm:text-xl font-thin outline-orange-400 border-orange-300 outline-1 rounded-xl placeholder:text-slate-400 focus:outline ' />
          <span className="text-red-600 py-0.5 pl-4 text-xs md:text-sm ">{errors.username?.message}</span>
        </div>
        <div className="flex flex-col items-start">
        <input 
          id={"firstName"}
          { ...register("first_name") }
          type="text" 
          placeholder='Firstname here' 
          className='w-full p-4 sm:text-xl font-thin outline-orange-400 border-orange-300 outline-1 rounded-xl placeholder:text-slate-400 focus:outline ' />
          <span className="text-red-600 py-0.5 pl-4 text-xs md:text-sm ">{errors.first_name?.message}</span>
        </div>
        <div className="flex flex-col items-start">
        <input 
          id={"lastName"}
          { ...register("last_name") }
          type="text" 
          placeholder='Lastname here' 
          className='w-full p-4 sm:text-xl font-thin outline-orange-400 border-orange-300 outline-1 rounded-xl placeholder:text-slate-400 focus:outline ' />
          <span className="text-red-600 py-0.5 pl-4 text-xs md:text-sm ">{errors.last_name_name?.message}</span>
        </div>
        <div className="flex flex-col items-start">
        <input 
          id={"position"}
          { ...register("position") }
          type="text" 
          placeholder='Position here' 
          className='w-full p-4 sm:text-xl font-thin outline-orange-400 border-orange-300 outline-1 rounded-xl placeholder:text-slate-400 focus:outline ' />
          <span className="text-red-600 py-0.5 pl-4 text-xs md:text-sm ">{errors.position?.message}</span>
        </div>
        <div className="flex flex-col items-start">
        <input 
          id={"email"}
          { ...register("email") }
          type="text" 
          disabled={true}
          placeholder='Email here' 
          className='w-full p-4 sm:text-xl font-thin rounded-xl outline-1 border-orange-300 placeholder:text-slate-400 focus:outline outline-orange-400' />
          <span className="text-red-600 py-0.5 pl-4 text-xs md:text-sm ">{errors.email?.message}</span>
        </div>

        <button className='text-base font-bold md:min-w-[20rem] sm:text-xl px-16 py-3 hover:opacity-70 capitalize bg-orange-600 text-white rounded-[1.5rem]'>
           {isUpdating ? "Please wait..." : isEdit ? "Edit" : "Submit"}
        </button>
      </form>
    </>
    )
}