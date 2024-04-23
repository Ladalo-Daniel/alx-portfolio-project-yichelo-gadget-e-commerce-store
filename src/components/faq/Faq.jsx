"use client";
import React, { useState } from "react";
import AboutFaq from "./AboutFaq";
import UserFaq from "./UserFaq";
import OrgFaq from "./OrgFaq";
import Image from "next/image";

const tabs = [
  {
    id: 1,
    name: "About Payslate ",
    component: <AboutFaq />,
  },
  {
    id: 2,
    name: "Being a User on Payslate",
    component: <UserFaq />,
  },
  {
    id: 3,
    name: "Being an organization on Payslate",
    component: <OrgFaq />,
  },

  // Add more tabs if needed
];
const Faq = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <main className="relative my-20 lg:max-w-4xl mx-auto" id="faqs">
       <Image
            className="w-20 lg:w-auto h-auto absolute -top-5 lg:top-0 z-10 lg:left-20 hover:animate-spin duration-150 "
            src="/skwig-4.svg"
            alt="Hero"
            width={200}
            height={200}
          />
      <header className="text-center">
        <p className="text-payGreen text-lg uppercase z-50">FAQS</p>
        <h1 className="text-3xl lg:text-5xl font-bold text-netBlue pb-5 z-50">
        Get to know some FAQs
        </h1>
      </header>
      <ul className="lg:py-4 py-2 px-4 flex justify-between pb-2 mb-10 items-center flex-row   lg:space-x-6 space-x-4  sticky top-0 w-full overflow-y-hidden z-10 lg:overflow-x-hidden overflow-x-scroll no-scrollbar">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`mr-2 cursor-pointer text-center ${
              activeTab.id === tab.id
                ? "font-bold text-sm lg:text-lg  rounded-lg bg-payBlue text-payWhite p-2"
                : "text-black text-sm lg:text-base font-normal"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div className=" p-10 lg:p-20  bg-payWhite  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[30px]">
      <Image
            className="w-12 lg:w-auto h-auto absolute -top-5 lg:top-0  right-0 hover:animate-spin duration-150 z-0"
            src="/skwig-6.svg"
            alt="Hero"
            width={200}
            height={200}
          />
           <Image
              className="w-20 lg:w-auto h-auto absolute -bottom-10 lg:bottom-0 z-10 lg:-left-40 hover:animate-spin duration-150 "
              src="/skwig-7.svg"
              alt="Hero"
              width={200}
              height={200}
            />
         {activeTab.component}
      </div>
    </main>
  );
};

export default Faq;
