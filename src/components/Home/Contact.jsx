"use client"

import Image from 'next/image'
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link';




// contact schema
const userSchema = yup.object({
  Email: yup.string().required().email("Email is not valid"),
  Phone: yup
    .string()
    .required()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  Name: yup.string().required("Full Name is requied"),
  Message: yup.string().required(),

});

const Contact = () => {

  const devURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    
    resolver: yupResolver(
      userSchema )
    ,
    mode: "onChange",
  });



    useEffect(() => {
        AOS.init();
       }, [])


      const handleContact = async (data) => {
   

        const newUserData = {
          email: data.Email,
          phone: data.Phone,
          name: data.Name,
          message: data.Message
        };
  
        try {   
          setLoading(true)
          const result = await axios.post(
            `${devURL}/contact-us`, newUserData,
            {
              headers: {
                "Content-Type": "application/json"
              },
            }
          );
          if (result) {
            toast.success('Message sent successfully', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            reset();
            setLoading(false)
          }
        } catch (error) {
        
          if (error) {
            toast.error(error.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
          setLoading(false)
        }
        // reset();
      }
  return (
    <section id='contact' className='min-h-screen py-5 w-full relative bg-gradient-to-r from-cyan-50 via-cyan-50 to-white flex items-start justify-center'>
      <ToastContainer />
        {/* border design */}


        <Image
        src={'/spline6.png'}
        width={120}
        height={100}
        className='absolute w-[40px] sm:w-[120px] bottom-3 left-[6rem] sm:bottom-[9%]  lg:block'
        alt='spline'
        />
        
        <Image
            className="wingContainer w-10 lg:w-auto h-auto absolute top-5 lg:top-16 z-10 right-10 md:right-[20%]  "
            src="/skwig-1.svg"
            alt="Hero"
            width={200}
            height={200}
          />
        <Image
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        src={'/border-left.png'}
        width={350}
        height={500}
        alt='Border'
        className='absolute md:w-[250px] xl:w-[350px] -left-[7rem] top-4 hidden lg:block'
        />
        <Image
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        src={'/border-right.png'}
        alt='border'
        width={350}
        height={400}
        className='absolute md:w-[250px] xl:w-[350px] -bottom-0 -right-[6rem] hidden lg:block'
        />

        {/* contact form */}
        <div className='flex flex-col md:mx-5 px-5 md:w-[60%] h-full items-center justify-start py-12 overflow-y-hidden'>
            <h2 className='text-xl text-[#AEDB04]'>CONTACT US</h2>
            <h1 className='text-[2rem] sm:text-[3.2rem] text-black font-semibold tracking-tighter mb-12' >Want to reach out?</h1>

            <div 
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            className='w-full'>
                <form onSubmit={handleSubmit(handleContact)}
                className='flex flex-col gap-8'>
                    <div  className="flex flex-col items-start">
                      <input 
                      id={"fullName"}
                      { ...register("Name") }
                      type="text" 
                      placeholder='Full Name' 
                      className='w-full p-4 sm:text-xl font-thin rounded-xl placeholder:text-slate-400 focus:outline outline-slate-300' />
                      <span className="text-red-600 py-0.5 pl-4 text-xs md:text-sm ">{errors.Name?.message}</span>
                    </div>

                    <div>
                      <input
                        id={"email"}
                      { ...register("Email") }
                     
                      type="email" placeholder='Email' 
                      className='w-full p-4 sm:text-xl  font-thin rounded-xl placeholder:text-slate-400 focus:outline outline-slate-300' 
                      />
                       <span className="text-red-600 py-0.5 pl-4 text-xs md:text-sm ">{errors.Email?.message}</span>
                    </div>  
                    

                    <div>
                      <input
                        id={"phoneNumber"}
                        { ...register("Phone") }
                        
                      type="phone" placeholder='Phone Number' className='w-full p-4 sm:text-xl font-thin rounded-xl placeholder:text-slate-400 focus:outline outline-slate-300' />
                      <span className="text-red-600 py-0.5 pl-4 text-xs md:text-sm ">{errors.Phone?.message}</span>

                    </div>

                    <div>
                      <textarea 
                        { ...register("Message") }
                        id="message"
                        type="text" 
                        placeholder='Message' 
                        className='w-full p-4 sm:text-xl font-thin rounded-xl placeholder:text-slate-400 min-h-[7rem] max-h-[7rem] focus:outline outline-slate-300' />
                      <span className="text-red-600 py-0.5 pl-4 text-xs md:text-sm ">{errors.Message?.message}</span>
                    </div>
                    <div className='flex flex-col gap-5 items-center justify-center'>
                        <p className='text-center text-sm sm:text-base text-slate-500'>By submitting this form you consent to us emailing you occasionally about Payslate updates and new products. You can unsubscribe from emails at any time, and we will never pass your email onto third parties. <Link href={'/terms&conditions'} className=' text-payBlue'>Privacy Policy</Link> </p>

                        <button className='text-base font-bold min-w-[20rem] sm:text-xl px-16 py-3 capitalize bg-payBlue text-white rounded-[1.5rem]'>
                          { loading ?  
                              'Loading...' :
                       " Send us a Message"
                        }
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    </section>
  )
}

export default Contact