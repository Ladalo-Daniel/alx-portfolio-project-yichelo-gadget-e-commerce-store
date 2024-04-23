"use client";
import React, { useState } from "react";

const data = [
  {
    question: "How does Payslate work?",
    answer:
      "Payslate is a secured payment collection platform that companies of all sizes and sectors can use to allow their customers to pay conveniently for the company’s products and services using their cards or wallets online ",
  },
  {
    question: "Who is Payslate suitable for?",
    answer:
      "        Payslate is well suited to businesses of any type: schools, hotels, boutiques and any institution involved in the receipt of payments for goods and services online.",
  },
  {
    question: "What is a Payout?",
    answer:
      " This is a process whereby organization requests Huiopay Limited to transfer inflows into the organization’s wallet account domiciled with Huiospay;’s bank account, into the organisation’s bank account       ",
  },
  {
    question: "Is Payslate PCI DSS Compliant?",
    answer:
      "Yes, our systems are PCI DSS compliant. This gives all our customers the comfort of the security of their data and transactions on our platform",
  },
  {
    question: "What payment methods does Payslate support?",
    answer:
      " Payslate supports card payment using both local or international Cards as well as Paslate wallet payment (if you are Payslate user or organization) ",
  },
];
const AboutFaq = () => {
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

export default AboutFaq;
