import Image from "next/image";
import React from "react";
import { FaRegWindowClose, FaWindowClose } from "react-icons/fa";

const CrowdTestingModal = ({ setOpenModal }) => {
  return (
    <>
      <div className=" top-20">
        <div>
          <div className="rad z-[1000] overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="relative">
              <div className="absolute top-3 right-5">
                <FaRegWindowClose
                  className="text-xl text-black cursor-pointer "
                  onClick={() => setOpenModal(false)}
                />
              </div>
            </div>
            <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full modal sm:mx-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                    className="w-10 h-10 fill-payWhite"
                  >
                    <path d="M215 71.1L126.1 160H24c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24h102.1l89 89c15 15 41 4.5 41-17V88c0-21.5-26-32-41-17zm233.3-51.1c-11.2-7.3-26.2-4.2-33.5 7-7.3 11.2-4.2 26.2 7 33.5 66.3 43.5 105.8 116.6 105.8 195.6 0 79-39.6 152.1-105.8 195.6-11.2 7.3-14.3 22.3-7 33.5 7 10.7 21.9 14.6 33.5 7C528.3 439.6 576 351.3 576 256S528.3 72.4 448.4 20zM480 256c0-63.5-32.1-121.9-85.8-156.2-11.2-7.1-26-3.8-33.1 7.5s-3.8 26.2 7.4 33.4C408.3 166 432 209.1 432 256s-23.7 90-63.5 115.4c-11.2 7.1-14.5 22.1-7.4 33.4 6.5 10.4 21.1 15.1 33.1 7.5C447.9 377.9 480 319.5 480 256zm-141.8-76.9c-11.6-6.3-26.2-2.2-32.6 9.5-6.4 11.6-2.2 26.2 9.5 32.6C328 228.3 336 241.6 336 256c0 14.4-8 27.7-20.9 34.8-11.6 6.4-15.8 21-9.5 32.6 6.4 11.7 21.1 15.8 32.6 9.5 28.2-15.6 45.8-45 45.8-76.9s-17.5-61.3-45.8-76.9z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 pb-3 text-gray-900 font-bold">
                  Welcome to our crowdtesting chat group !  
                  </h3>
                  <p className="text-sm">
                    Welcome to our crowdtesting chat group ! Thank you for your
                    willingness to participate in this groundbreaking
                    crowdtesting event. Our tech team will available to attend
                    any issues you may encounter during the testing. Please feel
                    free to drop your questions in this WhatsApp group dedicated
                    for this test. Click the link below to join.
                  </p>
                  <div className="mt-2">
                    {/* <p className="text-sm leading-5 text-gray-500">
                      {` Are you sure you want to delete ${name}? This
                    action cannot be undone.`}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-4 py-3 sm:px-6 flex justify-center">
              <a
                target="_blank"
                href="https://chat.whatsapp.com/B8I4lKQlSV9HltG8lA6fbh"
                className="flex bg-payWhite gap-2 px-3 py-1.5 w-full rounded-md shadow-sm sm:ml-3 sm:w-auto justify-center items-center"
              >
                <Image
                  src="/whatsapp.png"
                  alt=""
                  width={50}
                  height={50}
                  className="w-10 h-10"
                />
                <button
                  type="button"
                  //   onClick={closeModal}
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2   text-black font-semibold leading-6   shadow-sm  focus:outline-none focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Click to Join
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrowdTestingModal;
