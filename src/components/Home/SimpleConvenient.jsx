"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const SimpleConvenient = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const statistics = [
    {
      amount: 100,   
      desc: "Happy Users",
    },
    {
      amount: 50,
      desc: "Approved Organisations",
    },
    {
      amount: 200,
      desc: "Positive User Reviews ",
    },
    {
      amount: 300,
      desc: "Processed payments",
    },
  ];

  return (

    <section className="min-h-screen relative xl:h-screen w-full flex items-center">

      <Image src={'/spline5.png'} alt="spline" width={100} height={100} className="absolute object-cover right-[10%] bottom-5 w-auto h-auto"/>

      <div className="flex flex-col w-full gap-10 mx-12 my-10">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="flex flex-col md:flex-row lg:items-start blueGreen gap-8 md:gap-0 justify-between p-4 md:p-8 rounded-3xl"
        >
          <div className="w-full text-center md:text-start">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Simple. Fast. <br /> Convenient.
            </h1>

            {/* <Link
              target="_blank"
              href="http://user.payslate.com.ng"
              className="bg-white rounded-2xl py-1.5 px-4 md:px-16 text-[#00A8DC]"
            >
              Sign up for free
            </Link> */}
          </div>

          <div className="w-full text-center md:text-start">
            <p className="max-sm:px-12 max-sm:text-start text-white sm:text-lg text-base">
              You don&apos;t have to go the extra mile to pay your children&apos;s school
              fees, inquire about payment plans for accommodation from a real
              estate agent, or determine your security service needs for your
              safety, and more.
            </p>
          </div>
        </div>

        <div className="flex flex-col max-sm:items-center justify-between gap-10 xl:flex-row rounded-xl">
          <div 
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="md:w-[950px] rounded-md md:h-[400px] w-full"
            >
            <Image
              src={"/laptop1.png"}
              alt="user"
              width={720}
              height={400}
              className=" w-full h-full rounded-md md:h-[400px] object-cover"
            />

          </div>

            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="flex flex-col justify-start"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-[#00A8DC]">
                Your financial convenience is our{" "}
              goal
              </h1>
              <div className="flex w-[90%]  flex-wrap gap-2 md:gap-5">
                {statistics.map((stat, i) => (
                  <div
                    key={i}
                    className=" md:w-[42%] flex items-center md:gap-2 md:py-2 mx-4"
                  >
                    <h1 className="font-bold text-[28px] flex items-center">
                      {stat.amount}
                      <span className="text-teal-400 ml-1 text-lg">+</span>
                    </h1>
                    <p className="max-sm:ml-3">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleConvenient;
