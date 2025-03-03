"use client";
import Button from "@/app/component/utilities/Button";
import React from "react";
import ButtonImage from "../../assets/homePage/btn-img.svg";
import HoverImage from "../../assets/homePage/hover.svg";
import ButtonImg from "../../assets/homePage/getintouchIcon.png";
import Image from "next/image";
import ExpertImg from "../../assets/homePage/connectExpert.png";

const ConnectExpert = () => {
  return (
    <div className="container mx-auto px-4 md:max-w-6xl">
      <div className="my-6 h-[1px] w-full bg-[#83A790]"></div>
      <div className="flex mb-[2rem] flex-col lg:flex-row lg:items-start items-center max-w-7xl w-full">
        <div className="text-white lg:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl py-3  text-black redhat md:text-4xl font-base mb-4 leading-normal md:leading-[3.5rem]">
            Connect with Our Experts
          </h2>
          <div className="bg-[#F0F0F0] shadow-xl border border-[#F0F0F0] rounded-xl p-4 w-full md:w-[600px] lg:w-[500px] transition-all duration-300 hover:bg-[#96A94A] hover:text-[#fff]">
            <p className="py-[2.5rem] px-[1rem] text-[14px] text-black hover:text-[#fff] leading-relaxed">
              Driven by a passion to expedite change in our pursuit of a
              sustainable future, we partner with businesses and industries to
              catalyse innovation, enable smarter decision-making and deliver
              positive impact.
            </p>
          </div>

          <div className="mt-[2rem] flex md:justify-start">
            <Button
              text="Meet Consultants"
              buttonImage={ButtonImg}
              hoverImage={ButtonImg}
              bgColor="#000000"
              textColor="#ffffff"
              hoverTextColor="#000"
            />
          </div>
          <div className="mt-[2rem] md:mb-[1rem] flex md:justify-start">
            <Button
              text="Find Local Offices"
              buttonImage={ButtonImage}
              hoverImage={HoverImage}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src={ExpertImg}
            alt="expert-img"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectExpert;
