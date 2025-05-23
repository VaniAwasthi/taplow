"use client";
import React from "react";
import Image from "next/image";

const ExecutiveSearch = ({ ExecutiveData }) => {
  return (
    <>
      <div className="mx-auto relative mt-[2rem] mb-[14rem] md:mb-[2rem] w-full max-w-8xl flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12">
        {/* Left Section: Image */}
        <div className="relative w-full md:w-4/5">
          <Image
            src={ExecutiveData.Img}
            alt="Executive Search"
            width={700}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />

          {/* Overlapping Content (For Mobile View - ~2% overlap) */}
          <div className="absolute top-[10rem] left-1/2 transform -translate-x-1/2 md:hidden bg-[#859839] p-6 w-[90%] text-white rounded-lg shadow-lg">
            {/* Blue Bar on Top */}
            <div className="absolute -top-2 left-4 w-12 h-2 bg-[#024996] rounded-md"></div>

            {/* Heading & Text */}
            <h2 className="text-lg font-normal mb-3 leading-relaxed text-center">
              {ExecutiveData.heading}
            </h2>
            <div className=" my-[1rem] w-[300] h-[1px] bg-[#024996] "></div>
            <p
              className="text-sm leading-relaxed text-center"
              dangerouslySetInnerHTML={{ __html: ExecutiveData.description }}
            ></p>
          </div>
        </div>

        {/* Right Section: Overlapping Content (For Desktop) */}
        <div className="absolute right-[4rem] xl:right-[8rem] bg-[#859839] p-6 md:p-8 w-[380px] md:w-[300px] text-white rounded-lg shadow-lg hidden md:block transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
          {/* Blue Bar on Top */}
          <div className="absolute -top-2 left-[2rem] w-[70px] h-2 bg-[#024996] rounded-md"></div>

          {/* Heading & Text */}
          <h2 className="text-xl md:text-[30px] w-[250px] font-medium mb-4 leading-normal">
            {ExecutiveData.heading}
          </h2>
          <div className=" w-[100px] h-[1px] bg-[#005581] mb-[1rem]"></div>

          <p className="text-sm md:text-[13px] leading-relaxed">
            {ExecutiveData.description}
          </p>
        </div>
      </div>
      <div className=" mx-auto mt-[3rem] w-full md:max-w-7xl h-[1px] bg-[#83A790] "></div>
    </>
  );
};

export default ExecutiveSearch;
