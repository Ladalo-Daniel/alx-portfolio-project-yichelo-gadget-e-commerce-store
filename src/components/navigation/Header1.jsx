"use client";
import React, { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import styles from "../../utils/styles/Navigation.module.css";
import { FaAngleDown } from "react-icons/fa";

const links = [
  // { href: "#about", label: "About Payslate" },
  // { href: "#features", label: "Features" },
  { href: "", label: "Blog" },
  // { href: "#faqs", label: "Faq" },
  // { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setNav(true); // Set nav to true initially to make the navbar white
  }, []);

  const handleHamburger = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      //access to window
      const changeBackground = () => {
        if (window.scrollY >= 95) {
          setNav(true);
        } else {
          setNav(false);
        }
      };

      window.addEventListener("scroll", changeBackground);
    }
  }, []);

  const pathname = usePathname();

  return (
    <div className="bg-transparent">
      <nav
        className={
          nav
            ? `${styles.nav} ${styles.active} ${styles.fixedTop} py-4 lg:py-6 top-0 lg:bg-netWhite z-[998] shadow-md lg:mx-10 mx-5 mt-5 rounded-[40px] `
            : `${styles.nav} ${styles.fixedTop} top-0 lg:bg-netWhite z-[998] shadow-md py-4 lg:py-6  lg:mx-10 mx-5  mt-5 rounded-[40px] `
        }
      >
        <div
          className={`${
            isActive ? "h-[28rem] lg:h-auto" : "h-auto"
          } lg:max-w-[1920px] w-full px-4 mx-auto lg:px-20 `}
        >
          <div className="flex justify-between">
            <div className="flex lg:justify-between lg:items-center lg:w-full">
              <div className="">
                <Link href={"/"}>
                  <Image
                    className="w-8 h-auto object-cover"
                    src="/logo.png"
                    width={100}
                    height={50}
                    alt="Netrix Logo"
                  />
                </Link>
              </div>

              <div className="hidden lg:flex lg:w-[910px] lg:pl-14  justify-end">
                {" "}
                {/* lg:px-48 */}
                <ul className="text-black lg:flex lg:justify-end items-center">
                  {links.map((link) => (
                    <li
                      key={link.label}
                      className="lg:text-lg lg:mr-6 font-thin text-payWhite cursor-pointer"
                    >
                      <Link href={`/${link.href}`}>{link.label}</Link>
                    </li>
                  ))}
                  <div className="dropdown inline-block relative">
                    <button className="  group px-4 rounded inline-flex gap-2 items-center">
                      <span className="lg:text-lg  font-thin text-payWhite">
                        Get Started
                      </span>
                      <FaAngleDown className="text-payWhite group-hover:rotate-180" />
                    </button>
                    <ul className="dropdown-menu rounded-b text-black shadow-md bg-white text-left absolute hidden p-2 min-w-[15rem]">
                      <li className="d-link w-full p-2">
                        <Link
                          target="_blank"
                          href="https://user.payslate.com.ng"
                          className=" text-sm block w-full"
                        >
                          Become a User
                        </Link>
                      </li>
                      <li className="d-link w-full p-2">
                        <Link
                          target="_blank"
                          href="https://organization.payslate.com.ng"
                          className=" text-sm block w-full"
                        >
                          Become an Organisation
                        </Link>
                      </li>
                    </ul>
                            
                  </div>
                  {/* <ScrollLink to="organisation" smooth={true} duration={500}>
                    <button className="text-payBlue font-bold text-xl bg-white px-10 py-3 ml-4 rounded-[5rem]">
                      {" "}
                      Use Payslate
                    </button>
                  </ScrollLink> */}
                  <div className="grow"></div>
                </ul>
              </div>
            </div>

            {/* mobile */}
            <div className="flex items-center pr-3 lg:hidden">
              <div
                className="flex gap-x-2 items-center justify-end flex-end"

                // }}
              >
                {/*Toggle locations */}

                <span onClick={handleHamburger} className="lg:hidden">
                  <svg
                    className="w-10 "
                    width="55"
                    height="34"
                    viewBox="0 0 55 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.93457"
                      y="0.115662"
                      width="53.7037"
                      height="7.76871"
                      rx="3.88435"
                      fill="#ffffff"
                    />
                    <rect
                      x="0.93457"
                      y="25.338"
                      width="53.7037"
                      height="7.76871"
                      rx="3.88435"
                      fill="#ffffff"
                    />
                    <rect
                      x="0.93457"
                      y="12.7268"
                      width="35.4283"
                      height="7.76871"
                      rx="3.88435"
                      fill="#ffffff"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        {isActive && (
          <aside
            id="sidebar"
            className={`lg:hidden bg-netWhite md:w-64 w-full h-[75%] text-white top-[4rem] rounded-lg px-10 pb-10 flex-col absolute flex overflow-y-auto ${
              isActive ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            <div className="flex h-full w-full">
              <nav className="flex flex-col gap-5 mt-3 items-start w-full h-full">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    onClick={() => {
                      setIsActive(false);
                    }}
                    className="px-4 w-full"
                  >
                    <ScrollLink to={link.href} smooth={true} duration={500}>
                      {" "}
                      <p className="text-[16px] font-semibold">{link.label}</p>
                    </ScrollLink>
                  </Link>
                ))}

                <ScrollLink to="organisation" smooth={true} duration={500}>
                  <button className="bg-white w-full flex pl-5 text-payBlue p-2 rounded-xl text-sm">
                    Use Payslate
                  </button>
                </ScrollLink>
                <div className="dropdown inline-block relative">
                  <button className=" py-2 group px-4 rounded inline-flex gap-2 items-center">
                    <span className="lg:text-lg  font-semibold text-payWhite">
                      Get Started
                    </span>
                    <FaAngleDown className="text-payWhite group-hover:rotate-180" />
                  </button>
                  <ul className="dropdown-menu rounded-b text-black shadow-md bg-white text-left absolute hidden p-2 min-w-[15rem]">
                    <li className="d-link w-full p-2">
                      <Link
                        target="_blank"
                        href="https://user.payslate.com.ng"
                        className=" text-sm block w-full"
                      >
                        Become a User
                      </Link>
                    </li>
                    <li className="d-link w-full p-2">
                      <Link
                        target="_blank"
                        href="https://organization.payslate.com.ng"
                        className=" text-sm block w-full"
                      >
                        Become an Organisation
                      </Link>
                    </li>
                  </ul>
                          
                </div>
              </nav>
            </div>
          </aside>
        )}
      </nav>
    </div>
  );
};

export default Header;
