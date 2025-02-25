"use client";
import React from "react";
import Image from "next/image";
import BackgroundImage from "../assets/homePage/getintouchbg.webp";
import ButtonImg from "../assets/homePage/getintouchIcon.png";
const GetInTouch = () => {
  return (
    <div className="relative h-full md:h-[540px] bg-black flex items-center justify-center px-6 md:px-12">
      <Image
        src={BackgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-50"
      />
      <div className="relative z-10 flex flex-col md:flex-row md:items-start items-center max-w-6xl w-full">
        {/* Left Text Section */}
        <div className="text-white md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl py-3  redhat md:text-4xl font-base mb-4 leading-normal md:leading-[3.5rem]">
            We look forward to discussing
            <br />
            how we can navigate the path <br />
            to success together.
          </h2>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 bg-transparent p-6 rounded-2xl w-full md:ml-8">
          <form className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 p-2 bg-transparent border border-white rounded-3xl text-white placeholder-gray-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 p-2 bg-transparent border border-white rounded-3xl text-white placeholder-gray-300 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-2 bg-transparent border border-white rounded-3xl text-white placeholder-gray-300 focus:outline-none h-32"
            ></textarea>
            <button className="mt-4 mb-4 border border-white relative group w-[242px] h-[42px] bg-white text-black rounded-full flex items-center justify-center gap-2 transition-all duration-500  ease-out overflow-hidden hover:bg-transparent hover:text-white transform hover:scale-105">
              {/* Background Animation */}
              <span className="absolute inset-0 bg-white transform -translate-x-0 transition-transform duration-500 ease-out group-hover:translate-x-full"></span>

              {/* Button Text (Turns White on Hover) */}
              <span className="relative z-10 font-redhat text-sm transition-colors duration-500 ease-out">
                Get In Touch!
              </span>

              {/* Button Icon (Stays Visible) */}
              <div className="relative w-[34px] h-[25px]">
                <Image src={ButtonImg} alt="Button Icon" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
