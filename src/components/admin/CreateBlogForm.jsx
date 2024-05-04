"use client"

import {validateForm} from "../../app/admin/create-blog/formValidation"

import React, { useCallback, useState } from 'react'

import { useDropzone } from "react-dropzone"
import Image from "next/image"
import { createUpdateBlog } from "../../services/apiBlogs"
import { toast } from "sonner"

import { useCreateUpdateBlog } from "../../reactquery/index"
import {  useRouter } from "next/navigation"
import { Loader } from "lucide-react"



const CreateBlogForm = ({profile, blog, isEdit, isCreate, setOpenModal}) => {
  const {mutate:createUpdateBlog, isPending} = useCreateUpdateBlog()
  const router = useRouter()

  // const blogIdX = profile?.data?.user_id
  // console.log(blogIdX)



  //initail form data
  const initialFormData = {
    title: blog?.title || '',
    content: blog?.content || '',
    image: blog?.image_url || [],
    tags: blog?.tags || '',
    minutes_read: blog?.minutes_read || '',
    author: profile?.data?.username || "Daniel",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [fileUrl, setFileUrl] = useState(blog?.image_url || '');
  
  //input change function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  //image dropzone function
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log("FILE:",[file])
    setFormData({
      ...formData,
      image: [file],
    });
    setFileUrl(URL.createObjectURL(file));
  }, [formData]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": ['.jpg', '.png', '.jpeg', '.svg']
    },
  });

  console.log(fileUrl)


  //function sending data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(formData, setErrors)) {
      try{
        createUpdateBlog({...formData, image:formData.image, blogId:blog?.id},
            {
                onSuccess: () => {
                    setFormData(initialFormData);
                    setFileUrl("")
                    toast.success(isEdit ? "Successfully Edited!" : "Successfully created!", {
                    });
                    isCreate && router.refresh()
                    isCreate && router.push('/admin/all-blogs')
                    
                    setOpenModal(false)
                    isEdit  && router.refresh()
                }
            })
    } catch(error){
        console.error("Error submitting article:", error);
    }

    // console.log(formData);
    // console.log(formData.image_url);
  }
  };
  
  // console.log(fileUrl);

  return (
    <>
    <form onSubmit={handleSubmit} className='flex flex-col gap-9 py-2'>
        <div {...getRootProps()} className='flex flex-col gap-2 cursor-pointer w-full items-center justify-center'>
          <span className='text-gray-800 text-2xl'>{isEdit ? "Change blog image" : "Add blog image"}</span>
          <input {...getInputProps()} />
          {fileUrl ?
            (
              <Image height={1000} width={1000} src={fileUrl} alt='Blog Image' className=' h-96 w-[300px] lg:w-[700px] md:w-[500px] object-cover rounded-md' />
            ) :
            (
              <Image height={100} width={100} src="/upload.png" alt='Blog Image' className='h-36 w-36 object-cover rounded-md' />
            )
          }
          {!fileUrl && <p className='text-red-400'>Blog image is required</p>}
        </div>
        <label htmlFor='title' className='flex flex-col gap-2'>
          <span className='text-gray-800 text-2xl'>Title</span>
          <input
            type='text'
            className=' ring-1 ring-gray-100 outline-none rounded-md p-3 focus:bg-blue-50'
            placeholder='Title here ...'
            name='title'
            id='title'
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && <p className='text-red-500'>{errors.title}</p>}
        </label>
        <label htmlFor='content' className='flex flex-col gap-2'>
          <span className='text-gray-800 text-2xl'>Content</span>
          <textarea
            type='text'
            placeholder='Content here ...'
            className=' rounded-md p-3 min-h-[200px] custom-scrollbar ring-1 ring-gray-100 outline-none focus:bg-blue-50'
            name='content'
            id='content'
            value={formData.content}
            onChange={handleInputChange}
          />
          
          {errors.content && <p className='text-red-500'>{errors.content}</p>}
        </label>
        <label htmlFor='tags' className='flex flex-col gap-2'>
          <span className='text-gray-800 text-2xl'>Tags</span>
          <input
            type='text'
            placeholder='Tags here ...'
            className=' rounded-md p-3 ring-1 ring-gray-100 outline-none focus:bg-blue-50'
            name='tags'
            id='tags'
            value={formData.tags}
            onChange={handleInputChange}
          />
          {errors.tags && <p className='text-red-500'>{errors.tags}</p>}
        </label>
        <label htmlFor='minutes_read' className='flex flex-col gap-2'>
          <span className='text-gray-800 text-2xl'>Minutes read</span>
          <input
            type='text'
            placeholder='Minutes read here ...'
            className=' rounded-md p-3 ring-1 ring-gray-100 outline-none focus:bg-blue-50'
            name='minutes_read'
            id='minutes_read'
            value={formData.minutes_read}
            onChange={handleInputChange}
          />
          {errors.minutes_read && <p className='text-red-500'>{errors.minutes_read}</p>}
        </label>
        <button type='submit' className=' bg-payBlue flex items-center justify-center hover:opacity-70  text-white rounded-md p-2 w-1/2 self-center' disabled={isPending}>
          {isPending ? 
            (<div className=" flex flex-row gap-2  items-center self-center">
              <Loader className=" animate-spin" />
              <span>{isEdit ? "Editing..." : "Creating..."}</span>
            </div>) :
            (
              <span className=" text-center">{isEdit ? "Edit" : "Create"}</span>
            )
          }
        </button>
      </form>
    </>
  )
}

export default CreateBlogForm