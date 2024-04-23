"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {  Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const Map = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-[60vh] flex  flex-col justify-start md:justify-center relative blueGreen items-center py-10">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="flex flex-col gap-5 justify-center items-center mb-20"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-white text-center">
          Ready for the best payment <br /> experience and convenience?
        </h1>
        
        {/* <Link target="_blank"  href="http://organization.payslate.com.ng" className="w-fit px-3 text-sm md:px-[3.5rem] py-1 md:py-4 bg-white rounded-[1.5rem] text-payBlue font-bold md:text-xl">
          Use Payslate
        </Link> */}
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className=" z-10 relative"
      >
        <Image
          alt="image"
          src={"/Ellipse-1.png"}
          width={100}
          height={100}
          className=" w-[25px] md:w-[65px]  rounded-full absolute top-[15%] left-[50%]"
        />
        <Image
          alt="image"
          src={"/Ellipse-2.png"}
          width={50}
          height={200}
          className="w-[35px] md:w-[85px] rounded-full absolute top-[55%] left-[47%]"
        />
        <Image
          alt="image"
          src={"/Ellipse-3.png"}
          width={100}
          height={200}
          className="w-[40px] md:w-[100px] rounded-full absolute bottom-[35%] right-[23%] "
        />
        <Image
          alt="image"
          src={"/Ellipse-4.png"}
          width={120}
          height={200}
          className="w-[45px] md:w-[90px] rounded-full absolute top-[12%] left-[15%]"
        />
        <Image
          src={"/Earth.png"}
          height={300}
          width={1200}
          className=" object-contain z-30"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Map;
