"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <>
      {" "}
      <section className=" h-[100dvh] px-4 overflow-hidden rad lg:pt-40 pb-6  w-full object-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
        <header className="lg:pt-20 lg:max-w-3xl mx-auto flex flex-col justify-center items-center pb-5 relative">
          <Image
            className="wingContainer w-20 lg:w-auto h-auto absolute -top-5 lg:top-10 z-10 -left-0 lg:-left-10  "
            src="/skwig-1.svg"
            alt="Hero"
            width={200}
            height={200}
          />
          <Image
            className="w-20 lg:w-auto h-auto absolute -bottom-[200px] left-0 lg:bottom-10 z-10  lg:-left-20"
            src="/skwig-3.svg"
            alt="Hero"
            width={200}
            height={200}
          />
          <h1 className="text-black text-4xl lg:text-6xl font-bold text-center z-50">
            Empower your financial freedom with Payslate
          </h1>
          <p className="text-center pt-5 text-gray-600 lg:max-w-2xl mx-auto ">
            Your path to financial convenience starts here with payments, auditing
            and account reconciliation made easy .
          </p>
          {/* <ScrollLink to='organisation' smooth={true} duration={500}>
          <button className="bg-payBlue hover:bg-payGreen w-48  h-12 transform hover:scale-110 hover:shadow-lg transition-transform flex justify-center items-center rounded-[30px] text-payWhite mt-3">
            Get Started
          </button>
          </ScrollLink> */}
          <Image
            className="w-20 lg:w-auto h-auto absolute bottom-0 right-0 lg:bottom-10 z-10  lg:right-0"
            src="/skwig-2.svg"
            alt="Hero"
            width={200}
            height={200}
          />
        </header>
        <div
          className="flex lg:px-10 px-5 relative items-start"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Image
            className="w-20 lg:w-auto h-auto absolute -top-5 lg:-top-20 z-10 -left-0 lg:-left-10"
            src="/hero-grid-1.svg"
            alt="Hero"
            width={200}
            height={200}
          />
          <Image
            className="w-20 lg:w-auto h-auto z-0"
            src="/hero-grid-2.svg"
            alt="Hero"
            width={200}
            height={200}
          />
          <Image
            className="w-44 lg:w-auto h-auto "
            src="/hero-grid-3.svg"
            alt="Hero"
            width={200}
            height={200}
          />
          <div className="flex flex-col-reverse">
            <Image
              className="w-32 lg:w-auto h-auto lg:-mt-5 -mt-3"
              src="/hero-grid-4.svg"
              alt="Hero"
              width={200}
              height={200}
            />
            <Image
              className="w-32 lg:w-auto h-auto "
              src="/hero-grid-5.svg"
              alt="Hero"
              width={200}
              height={200}
            />
          </div>

          <Image
            className="w-20 lg:w-auto h-auto absolute lg:-top-20 z-10 -top-5 -right-0 lg:-right-10"
            src="/hero-grid-6.svg"
            alt="Hero"
            width={200}
            height={200}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
