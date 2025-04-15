"use client";
import React from "react";
import BackgroundImage from "../../assets/homePage/bg-4.webp";
import ButtonImg from "../../assets/homePage/getintouchIcon.png";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className="relative  md:h-[540px] flex items-center justify-center px-6 md:px-12">
      <Image
        src={BackgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        // className="absolute inset-0 "
      />
      <div className="relative z-10 flex flex-col md:flex-row md:items-start items-center max-w-6xl w-full">
        {/* Left Text Section */}
        <div className="text-white md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl py-3 mt-4  redhat md:text-4xl font-base mb-4 leading-normal md:leading-[3.5rem]  transition-all duration-300 hover:scale-105">
            Why Choose the <br /> Taplow Group
          </h2>
          <div
            className="my-6 h-[1px] w-[200px] md:w-[320px]"
            style={{
              background: "linear-gradient(to right, #D9D9D9 30%, #96A94A 30%)",
            }}
          ></div>
          <p className="text-white font-light text-[14px] mt-3 md:w-[400px] mb-[3rem]">
            Driven by a passion to expedite change in our pursuit of a
            sustainable future, we partner with businesses and industries to
            catalyse innovation, enable smarter decision-making and deliver
            positive impact
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
