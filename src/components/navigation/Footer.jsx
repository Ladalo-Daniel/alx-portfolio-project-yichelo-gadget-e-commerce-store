"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "../Logo";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();


  const path = usePathname()

  const isAdminRoute = path.startsWith("/admin")

  return (
    <>
      <footer
        id="footer"
        className={`lg:px-20 px-10  pt-4 flex flex-col ${isAdminRoute ? "hidden" : "block"} shadow-xl bg-gray-900`}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-x-4 items-start py-10 border-b border-payWhite">
          <div className="lg:flex lg:w-2/5  pb-5 lg:pb-0">
            <div className=" w-full ">
              <Link href={"/"}>
                <Logo name="ichelo" />
              </Link>
            </div>
          </div>
          <div className=" lg:w-1/5 flex   justify-center">
            <div className="lg:px-4 w-full flex lg:flex-row flex-col gap-y-4 lg:gap-y-0 items-start  gap-x-20 ">
              <div className="flex flex-col ">
                <h2 className="text-netWhite text-xl font-bold pb-5 text-left text-payWhite">
                  Company
                </h2>
                <ul className="list-none footer-links lg:space-y-2 ">
                  <li className="mb-2 pb-2 text-left cursor-pointer ">
                    <span className="flex gap-2 items-start lg:items-center   text-netWhite text-lg text-left text-payWhite font-thin justify-center ">
                      <ScrollLink to="about" smooth={true} duration={500}>
                        About Yichelo
                      </ScrollLink>
                    </span>
                  </li>
                  <li className="mb-2 pb-2 text-left cursor-pointer ">
                    <span className="flex gap-2 items-center   text-netWhite text-lg text-left justify-start text-payWhite">
                      <ScrollLink to="features" smooth={true} duration={500}>
                        Features
                      </ScrollLink>
                    </span>
                  </li>

                  <li className="mb-2 pb-2 text-left cursor-pointer ">
                    <span className="flex gap-2 items-center   text-netWhite text-lg text-left  justify-start text-payWhite">
                      <ScrollLink to="contact" smooth={true} duration={500}>
                        Contact Us
                      </ScrollLink>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/5 flex   justify-center pb-5 lg:pb-0">
            <div className="p-5 flex flex-col  gap-y-2 bg-orange-600 bg-opacity-10 rounded-lg w-full">
              <h2 className="text-payWhite font-semibold">Subscribe</h2>
              <span className="flex">
                <input
                  placeholder="Email Address"
                  className="h-10 p-2 rounded-sm bg-payWhite w-4/5"
                />
                <span className="bg-orange-600 flex items-center justify-center w-1/5 cursor-pointer">
                  <BsArrowRight className="text-payWhite" />
                </span>
              </span>
            </div>
          </div>
          <div className=" w-full lg:w-1/5 flex   justify-center">
            <div className="p-5 flex flex-col justify-center items-center  gap-y-2 bg-blue-600 bg-opacity-10 rounded-lg w-full">
              <h2 className="text-payWhite font-semibold">Shop Now</h2>
              <Link
                href="/sign-up"
                className="bg-payWhite w-full rounded-[30px] flex justify-center items-center h-10 text-payBlue"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row  py-10  border-t justify-center items-center lg:justify-between">
          <span className="flex gap-2">
            <Link className="text-payWhite text-sm underline" href="/#">
              Terms of Use
            </Link>
            <Link className="text-payWhite text-sm underline" href="/#">
              {" "}
              Privacy Policy
            </Link>
          </span>
          <div className="flex gap-2">
            <Link
              href="#"
              className="flex items-center justify-center p-2 border border-payWhite rounded-full"
            >
              <FaInstagram className="text-payWhite" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center p-2 border border-payWhite rounded-full"
            >
              <FaLinkedin className="text-payWhite" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center p-2 border border-payWhite rounded-full"
            >
              <FaTwitter className="text-payWhite" />
            </Link>
          </div>
          <h1 className="text-payWhite text-sm text-left lg:text-center">
            © {year} All rights reserved Powered by{" "}
            <Link
              href="#"
              className="font-bold "
            >
              Yichelo
            </Link>
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
