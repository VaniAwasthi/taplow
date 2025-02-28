"use client";
import React from "react";
import Image from "next/image";
import SuccessImage from "../../assets/servicepage/success-story.webp";
import Button from "../utilities/Button";
import HoverImage from "../../assets/homePage/hover.svg";
import ButtonImage from "../../assets/homePage/getintouchIcon.png";

const SuccessStories = () => {
  const SucessData = {
    heading: " Success Stories & Case Studies",
    description:
      "Discover how The Taplow Group has helped organizations secure visionary leaders and drive business transformation.",
    buttonText: "Read Our Success Stories",
  };

  return (
    <div className="mt-[7rem]  md:mb-[5rem] mb-[4rem] w-full bg-[#005581] flex justify-center relative overflow-visible">
      {/* Main Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 text-white">
        {/* Left Image Section - Overflow from Top */}
        <div className="absolute -top-24 md:-top-8 w-[90%] md:w-[50%] left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-0">
          <div className="relative w-full h-[300px] md:h-[350px]">
            <Image
              src={SuccessImage}
              alt="Success Stories"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="relative w-full md:w-[50%] ml-auto p-6 md:p-12 text-center md:text-left mt-[15rem] md:mt-0">
          <h2 className="text-xl md:text-3xl  font-base">
            {SucessData.heading}
          </h2>
          <p className="mt-4 text-sm">{SucessData.description}</p>
          <div className="flex  items-center justify-center md:justify-start ">
            <Button
              text={SucessData.buttonText}
              hoverImage={HoverImage}
              bgColor="#fff"
              textColor="#99AC4D"
              buttonImage={ButtonImage}
              className="mt-[3rem]"
              filter="none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
