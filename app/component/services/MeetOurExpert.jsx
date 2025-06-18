"use client";
import React from "react";
import BackgroundImage from "../../assets/servicepage/expertBg.webp";
import Image from "next/image";
import Button from "../utilities/Button";
import HoverImage from "../../assets/homePage/hover.svg";
import ButtonImage from "../../assets/homePage/getintouchIcon.png";

const MeetOurExperts = () => {
  const ExpertData = {
    heading: "Meet Our Experts",
    description:
      "Our executive search consultants bring industry expertise and global insights to every search. Connect with our specialists to find exemplary leadership for your business.",
    buttonText: "Meet Our Experts",
  };

  return (
    <div className="container max-w-[300px]  md:max-w-6xl mx-auto relative h-[400px] md:h-[300px] flex items-center justify-center  px-6 my-[2rem] md:px-12">
      <Image
        src={BackgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 rounded-xl "
      />
      <div className="relative z-10 flex flex-col md:flex-row md:items-end items-center max-w-5xl w-full ">
        {/* Left Text Section */}
        <div className="text-white w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl py-3  redhat md:text-4xl font-base mb-4 leading-normal md:leading-[3.5rem] transition-transform duration-300 hover:scale-105  hover:cursor-pointer">
            {ExpertData.heading}
          </h2>
          <p className="text-white md:text-left font-light text-[14px] mt-3 md:w-[400px] md:mb-[3rem]">
            {ExpertData.description}
          </p>
        </div>
        {/* right section */}
        <div className="flex w-full md:w-1/2 items-center justify-center md:justify-end mb-[2rem]">
          <Button
            text={ExpertData.buttonText}
            hoverImage={HoverImage}
            bgColor="#fff"
            textColor="#99AC4D"
            buttonImage={ButtonImage}
            href="/consultant-directory"
            className="mt-[3rem] "
            filter="none"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetOurExperts;
