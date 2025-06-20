"use client";
import React from "react";
import ButtonImg from "../../assets/homePage/getintouchIcon.png";
import Image from "next/image";
import BackgroundImage from "../../assets/servicepage/insightbg.png";
import InsightImg from "../../assets/servicepage/insightImg.svg";
import Link from "next/link";

const InightRelated = () => {
  const InsightData = {
    heading: "Related Insights",
    description:
      " Stay ahead with expert insights, leadership trends, and industry reports from The Taplow Group.",
    buttonText: "Explore Insights",
  };
  return (
    <div className="relative h-[700px] md:h-[540px] flex items-center justify-center px-6 md:px-12">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={BackgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className=" md:object-cover object-contain"
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center max-w-7xl w-full">
        {/* Image */}
        <div className="w-full md:w-2/2 flex justify-center">
          <div className="relative w-full max-w-[400px] h-[300px] md:h-[550px]">
            <Image
              src={InsightImg}
              alt="Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* content */}
        <div className="text-white w-full md:w-1/2  flex flex-col items-center md:items-start">
          <h2 className="text-2xl py-3 redhat md:text-4xl font-base mb-4 leading-normal md:leading-[3.5rem]">
            {InsightData.heading}
          </h2>
          <div
            className="my-6 h-[1px] w-[320px]"
            style={{
              background: "linear-gradient(to right, #D9D9D9 30%, #96A94A 30%)",
            }}
          ></div>
          <p className="text-white font-light text-[14px] mt-3 md:w-[400px] mb-[3rem]">
            {InsightData.description}
          </p>
          <Link
            href="/insights"
            className="mt-4 mb-4 border border-white relative group w-[242px] h-[42px] bg-white text-black rounded-full flex items-center justify-center gap-2 transition-all duration-500 ease-out overflow-hidden hover:bg-transparent hover:text-white transform hover:scale-105"
          >
            {/* Background Animation */}
            <span className="absolute inset-0 bg-white transform -translate-x-0 transition-transform duration-500 ease-out group-hover:translate-x-full"></span>

            {/* Button Text (Turns White on Hover) */}
            <span className="relative z-10 font-redhat text-sm transition-colors duration-500 ease-out">
              {InsightData.buttonText}
            </span>

            {/* Button Icon (Stays Visible) */}
            <div className="relative w-[34px] h-[25px]">
              <Image src={ButtonImg} alt="Button Icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InightRelated;
