"use client"
import React, { useState } from "react";

const data = [
    {
        question: "Who is an organisation?",
        answer:
          "An organization is any company accepting online payment or wallet payment for the goods or services provided to customers. ",
      },
    {
      question: "How does organization sign up",
      answer:
        "Organisation signs up by providing details of the owner of the organization as well as details of the organization itself. This includes all the statutory documents about the organization. Once these details and documents are confirmed and approved, the organization gets onboarded on Payslate.",
    },
    {
      question: "Does a User need to have account on Payslate before paying to an organization?",
      answer:
        "No, users don’t necessarily need to have account on Payslate before paying for goods and services of an organization on Payslate. All the organization needs to do is to generate a payment link and send to the user for payment on Payslate",
    },
    {
      question: "What is Organisation Wallet?",
      answer:
        "This is the wallet account associated with organization on Payslate. Customers (Ussers) make payments into the organization wallet each time payment is made on the organization’s portal on Payslate",
    },
    
  ];
const OrgFaq = () => {
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

export default OrgFaq;
