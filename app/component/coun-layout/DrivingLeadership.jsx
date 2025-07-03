"use client";
import Image from "next/image";
import React from "react";
import BackgroundImg from "../../assets/globalpage/backgroundImg.webp";

const DrivingLeadership = ({
  greenDescription,
  Aboutheading,
  flag,
  aboutContentpara1,
  aboutContentpara2,
  aboutContentpara3,
  aboutContentpara4,
  aboutContentpara5,
  ColImg,
  aboutheadingclass,
  firstparaclass,
}) => {
  return (
    <section className="container mx-auto px-4 lg:max-w-7xl py-6 ">
      <div className="relative w-full md:h-40 h-64 flex items-center overflow-hidden transition-transform duration-300  hover:scale-105">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={BackgroundImg}
            alt="Background"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
          <p
            className="text-md font-normal text-left"
            dangerouslySetInnerHTML={{ __html: greenDescription }}
          ></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-4">
        <h2
          className={`lg:w-[400px] w-full  text-2xl redhat font-normal md:text-3xl mt-8 mb-4 ${aboutheadingclass}`}
        >
          At the Heart of Leadership, Wherever You Are.
        </h2>
        <div className="flex md:flex-row md:ml-3">
          <div className="bg-[#83A790] my-4 h-[2px] w-[150px] md:w-[200px] xl:w-[600px]"></div>
          <Image
            src={flag}
            alt="flag"
            width={100}
            height={20}
            className="!h-[50px]"
          />
          <div className="bg-[#83A790] my-4 h-[2px] w-[150px] md:w-[200px] xl:w-[200px]"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center my-5 md:my-2">
        {/* Text Section */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: aboutContentpara1 }} />
            <p>{aboutContentpara2}</p>
            <p>{aboutContentpara3}</p>
            <p>{aboutContentpara4}</p>
            {aboutContentpara5 ? <p>{aboutContentpara5}</p> : null}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src={ColImg}
            alt="diversity"
            width={500}
            height={500}
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="bg-[#83A790] my-4 h-[2px] w-full "></div>
    </section>
  );
};

export default DrivingLeadership;
