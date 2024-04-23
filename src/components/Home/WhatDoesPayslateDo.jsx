"use client";
import Image from "next/image";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const WhatDoesPayslateDo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="features"
      className="min-h-screen py-20 w-full rad-blue relative flex flex-col justify-center items-center gap-10 px-16 md:px-20 "
    >
      {/* spline images positioned absolute */}
      <Image
        src={"/Spline-01.png"}
        width={150}
        height={150}
        className="w-[50px]  absolute top-36 md:top-10 right-0 md:w-[250px] md:h-[250px]"
        alt="Image"
      />
      <Image
        src={"/Spline-06.png"}
        width={100}
        height={100}
        className="w-[40px] md:w-[120px] absolute left-[20%] md:left-[40%] bottom-8"
        alt="."
      />
      <Image
        src={"/Spline-03.png"}
        width={50}
        height={50}
        className="w-[40px] md:w-[50px] absolute top-[13%] left-[6%]"
        alt="."
      />

      {/* title text */}
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="mb-5 text-center text-white"
      >
        <p className="text-base md:text-2xl font-normal tracking-tighter">
          IT&apos;S FEATURES
        </p>
        <h1 className="text-4xl md:text-6xl font-bold">
          What does Payslate do?
        </h1>
      </div>

      {/* element section */}
      <div className="flex max-sm:flex-col-reverse items-center gap-5 md:gap-10">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="lg:flex-1 flex justify-end"
        >
          <Image
            src="/iphone.png"
            width={350}
            height={350}
            className="md:w-[500px] w-[250px]"
            alt="iphone"
          />
        </div>

        <div className="xl:flex-[1.5] flex flex-col gap-10">
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="bg-white px-5 py-4 md:py-12 gap-5 flex flex-col justify-start rounded-2xl"
          >
            <div className="flex max-sm:flex-col gap-1 md:gap-4 max-sm:mt-5">
              <Image
                src={"/icon-1.png"}
                width={50}
                height={40}
                className="md:w-[83px] md:h-[72px]"
                alt="icon"
              />
              <h2 className="text-2xl font-semibold text-[#00A8DC]">
                All-in-one payment <br /> dashboard
              </h2>
            </div>
            <p className="text-base md:text-lg font-sans">
              Experience seamless financial control with our All-in-One Payment
              Dashboard – Your central hub for effortless payment management.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="bg-white px-5 py-4 md:py-12 gap-5 flex flex-col justify-start rounded-2xl "
          >
            <div className="flex max-sm:flex-col gap-1 md:gap-4 max-sm:mt-5">
              <Image
                src={"/icon-2.png"}
                width={50}
                height={40}
                className="md:w-[80px] md:h-[72px]"
                alt="icon"
              />
              <h2 className="text-2xl font-semibold text-[#00A8DC]">
                Easy payment <br /> convenience
              </h2>
            </div>
            <p className="text-base md:text-lg font-sans">
              Payslate designed with your busy lifestyle in mind. With this
              seamless solution, you can effortlessly make payments, and monitor
              your financial transactions all in one place.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="bg-white px-5 py-4 md:py-12 gap-5 flex flex-col justify-start rounded-2xl"
          >
            <div className="flex max-sm:flex-col gap-1 md:gap-4 max-sm:mt-5">
              <Image
                src={"/icon-3.png"}
                width={50}
                height={40}
                className="md:w-[83px] md:h-[72px]"
                alt="icon"
              />
              <h2 className="text-2xl font-semibold text-[#00A8DC]">
                Seamless <br /> Experience
              </h2>
            </div>
            <p className="text-base md:text-lg font-sans">
              We strive to remove friction from your interactions, allowing you
              to focus on what truly matters, whether it&apos;s growing your
              business, enjoying your leisure time, or paying your fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDoesPayslateDo;
