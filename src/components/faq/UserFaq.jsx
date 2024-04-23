"use client"
import React, { useState } from "react";

const data = [
    {
      question: "Who is a User?",
      answer:
        "A User is any customer that needs to buy and pay for the goods and services of an Organisation on Payslate",
    },
    {
      question: "How does a User sign up?",
      answer:
        "A user signs up by providing all the necessary details that conforms with the basic KYC in the Nigerian financial services sector",
    },
   
  ];
const UserFaq = () => {
    const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div>
      {data.map((item, i) => (
        <div key={item.question} className="py-5 border-[#AEDB04]  border-b ">
          <div
            className={
              selected === i
                ? "  flex justify-between items-center cursor-pointer"
                : "flex justify-between items-center  cursor-pointer"
            }
            onClick={() => toggle(i)}
          >
            <h2
              className={` text-2xl font-semibold ${
                selected === i ? "text-payBlue" : "text-black"
              }`}
            >
              {item.question}
            </h2>
            <span
              className={`text-netBlue text-2xl ${
                selected === i ? "text-payBlue" : "text-black"
              }`}
            >
              {selected === i ? "-" : "+"}
            </span>
          </div>
          <div
            className={
              selected === i
                ? "text-netBlue font-thin py-3 lg:py-5 block transition-all duration-350 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                : "text-netBlue font-thin hidden transition-all duration-350 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
            }
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserFaq;
