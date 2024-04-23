"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const WhatIsPaySlate = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" className="lg:px-20 px-4 py-10 lg:py-20">
      <div className="flex justify-between flex-col lg:flex-row items-center lg:gap-x-20">
        <div className="relative lg:w-1/2 pb-5 lg:pb-0">
          <Image
            className="w-20 lg:w-auto  right-1 md:right-4 h-auto absolute -top-3 lg:top-0 z-10 lg:right-0 hover:animate-spin duration-150 "
            src="/skwig-4.svg"
            alt="Hero"
            width={200}
            height={200}
          />
          <p className="text-payGreen text-lg uppercase">About Payslate</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-netBlue pb-5">
            What is Payslate?
          </h1>

          <p className="text-black font-thin pb-3 lg:text-lg">
            Payslate is a product of{" "}
            <Link
            target="_blank"
              href="https://huiospay.com"
              className="font-medium text-blue-600"
            >
              Huiospay Limited
            </Link>{" "}
            , which gives users the ability to easily access payments for
            services by different organizations, while making the process of
            auditing and account reconciliation easy at the click of a button.
          </p>

          {/* <Link target="_blank"  href="http://user.payslate.com.ng" className="bg-payBlue text-payWhite hover:bg-payGreen w-40 mt-5 flex justify-center p-2 font-semibold rounded-[30px] transform hover:scale-110 hover:shadow-lg transition-transform">
            Sign Up
          </Link> */}
          <Image
            className="w-20 lg:w-auto h-auto absolute hidden md:block  lg:-bottom-20 z-10 lg:left-0 hover:animate-spin duration-150 "
            src="/skwig-5.svg"
            alt="Hero"
            width={200}
            height={200}
          />
        </div>
        <div className="lg:w-1/2 lg:relative">
          <span
            className="flex mb-4 lg:pb-0 lg:absolute lg:-top-7 lg:-left-4 justify-center items-center gap-x-2 h-[3rem] border-2 border-payBlue w-auto px-2 bg-payWhite shadow-xl z-50 rounded-xl "
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <span className="w-6 h-6 rounded-lg bg-payGreen " />
            <p className="text-payBlue font-semibold">Auditing</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="flex  mb-4 lg:pb-0 lg:absolute lg:bottom-7 lg:-left-16 justify-center items-center gap-x-2 h-[3rem] border-2 border-payBlue w-auto px-2 bg-payWhite shadow-xl z-50 rounded-xl "
          >
            <span className="w-6 h-6 rounded-lg bg-payGreen " />
            <p className="text-payBlue font-semibold">Payment Access</p>
          </span>
          <span
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="flex  mb-4 lg:pb-0 lg:absolute lg:bottom-28 lg:right-20 justify-center items-center gap-x-2 h-[3rem] border-2 border-payBlue w-auto px-2 bg-payWhite shadow-xl z-50 rounded-xl "
          >
            <span className="w-6 h-6 rounded-lg bg-payGreen " />
            <p className="text-payBlue font-semibold">Account Reconciliation</p>
          </span>
          <Image
            alt="Experience Image"
            src="/laptop.svg"
            width={500}
            height={200}
            className="block w-full lg:w-[500px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsPaySlate;
