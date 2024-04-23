import Image from "next/image";
import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <>
      {" "}
      <div className="users overflow-hidden lg:px-20 px-4 py-10 lg:py-20 lg:h-screen flex flex-col-reverse justify-between  lg:flex-row items-center lg:gap-x-20">
        <div className="lg:w-1/2 relative flex justify-end ml-20 lg:ml-0 lg:justify-center">
          <div
            className="absolute -right-10 -top-5 lg:-top-10 z-10  lg:right-20"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Image
              className=" w-40 h-40 lg:h-auto lg:w-auto"
              src="/users-right.svg"
              alt="Hero"
              width={200}
              height={200}
            />
          </div>
          <div
            className="absolute -left-24  top-20  lg:top-40 lg:left-10 z-50 "
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Image
              className=""
              src="/users-center.svg"
              alt="Hero"
              width={200}
              height={200}
            />
          </div>
          <div
            className="absolute bottom-0 -right-10  lg:-bottom-5 lg:right-36 z-50"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Image
              className=" "
              src="/users-bottom.svg"
              alt="Hero"
              width={200}
              height={200}
            />
          </div>
          <div
            className=""
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Image
              alt="Experience Image"
              src="/phone.svg"
              width={500}
              height={200}
              className=" w-60 lg:w-auto lg:h-[600px] object-cover"
            />
          </div>
        </div>
        <div className="lg:w-1/2 pb-5 lg:pb-0 relative">
          <Image
            className="w-20 lg:w-auto h-auto right-1 md:right-4 absolute -top-5 lg:top-0  lg:right-0 hover:animate-spin duration-150 z-0"
            src="/skwig-6.svg"
            alt="Hero"
            width={200}
            height={200}
          />
          <p className="text-payGreen text-lg uppercase z-50">About Payslate</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-netBlue pb-5 z-50">
            Payslate for Users
          </h1>
          <p className="text-black font-thin pb-3 lg:text-lg">
            As a payslate user, you are entitled to a single dashboard which
            manages and controls all our payments to various organizations.
            Being a user on our platform you are given access to an array of
            organizations and pay for services rendered by these organizations.
          </p>

          {/* <ul className="list-inside pl-5 list-disc text-black font-thin pb-3 lg:text-lg">
            <li>
              To manage all the payment and expenses in a single dashboard
            </li>
            <li> To pay for any organization service on single platform</li>
            <li>To pay for organization service from their comfort zone</li>
          </ul> */}
          <div>
            <p className="text-black font-thin pb-3 lg:text-lg">
              With our modern and fast technologies, users are assured of
              secure,fast and reilable transactions using our{" "}
              <Link
              target="_blank"
              href="https://huiospay.com"
                className="font-semibold text-blue-600"
              >
                Payment Gateway
              </Link>{" "}
              to process, manage and audit transactions.
            </p>
            {/* <ul className="list-inside pl-5 list-disc text-black font-thin pb-3 lg:text-lg">
              <li>Enhance payment transparency</li>
              <li> Secure and reliable payment process</li>
              <li>Instant payment collection</li>
              <li>
                Advance payment management and auditing sharable payment link
              </li>
            </ul> */}
            <Image
              className="w-20 lg:w-auto h-auto absolute -bottom-16 md:-bottom-10 lg:bottom-0 z-10 lg:-left-40 hover:animate-spin duration-150 "
              src="/skwig-7.svg"
              alt="Hero"
              width={200}
              height={200}
            />
          </div>
          <Link
            target="_blank"
            href="https://user.payslate.com.ng"
            className="bg-payBlue z-50 text-payWhite hover:bg-payGreen w-40 mt-3 md:mt-5 flex justify-center p-2 font-semibold rounded-[30px] transform hover:scale-110 hover:shadow-lg transition-transform"
          >
            Become a User
          </Link>
        </div>
      </div>
    </>
  );
};

export default Users;
