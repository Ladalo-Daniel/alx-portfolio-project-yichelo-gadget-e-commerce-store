"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Organization = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        id="organisation"
        className="bg-payWhite overflow-hidden lg:px-20 px-4 py-10 lg:py-20 h-screen flex justify-between flex-col lg:flex-row items-center lg:gap-x-20"
      >
        <div className="lg:w-1/2 pb-5 lg:pb-0 relative">
          <Image
            className="w-20 lg:w-auto h-auto absolute -top-2 lg:-top-2 right-1 md:right-4  lg:right-0 hover:animate-spin duration-150 z-0"
            src="/skwig-8.svg"
            alt="Hero"
            width={200}
            height={200}
          />
          <p className="text-payGreen text-lg uppercase z-[900]">
            About Payslate
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-netBlue pb-5 z-50">
            Payslate for Organizations
          </h1>

         
          <p className="text-black font-thin pb-3 lg:text-lg">
            Organizations using Payslate aim to streamline payment collection by
            generating instant payment links for customers, centralizing user
            payments within a single dashboard for efficient auditing and
            verification of payments .
          </p>
        

          <Link
            target_blank
            href="https://organization.payslate.com.ng"
            className="bg-payBlue z-50 text-payWhite hover:bg-payGreen w-60 mt-5 flex justify-center p-2 font-semibold rounded-[30px] transform hover:scale-110 hover:shadow-lg transition-transform"
          >
            Organization Sign Up
          </Link>
          <Image
            className="w-20 lg:w-auto h-auto  absolute bottom-0 right-2 lg:-bottom-20 z-10 lg:left-0 hover:animate-spin duration-150 "
            src="/skwig-9.svg"
            alt="Hero"
            width={200}
            height={200}
          />
        </div>
        <div className="lg:w-1/2 relative flex justify-center">
          <div
            className="absolute -top-0 -right-10 lg:-top-10 z-10 lg:right-0"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Image
              className=" w-40   lg:w-72 "
              src="/computer-top.svg"
              alt="Hero"
              width={200}
              height={200}
            />
          </div>
          <div
            className="absolute top-20 -left-20 lg:top-40 lg:left-0"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Image
              className=" lg:h-auto h-40"
              src="/computer-left.svg"
              alt="Hero"
              width={200}
              height={200}
            />
          </div>
          <div
            className="absolute bottom-2 -right-10 lg:bottom-20 lg:right-0"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Image
              className=" lg:w-auto w-40  "
              src="/computer-bottom.svg"
              alt="Hero"
              width={200}
              height={200}
            />
          </div>

          <Image
            alt="Experience Image"
            src="/computer.svg"
            width={500}
            height={200}
            className="block w-72 lg:w-auto lg:h-[600px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Organization;
