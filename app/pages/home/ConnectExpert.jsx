"use-client";
import Button from "@/app/component/Button";
import React from "react";
import ButtonImage from "../../Assest/homePage/btn-img.svg";
import HoverImage from "../../Assest/homePage/hover.svg";
import ButtonImg from "../../Assest/homePage/getintouchIcon.png";
import Image from "next/image";
import ExpertImg from "../../Assest/homePage/connectExpert.png";

const ConnectExpert = () => {
  return (
    <div className="container mx-auto px-4 md:max-w-6xl">
      <div className="my-6 h-[1px] w-full bg-[#83A790]"></div>
      <div className="flex mb-[2rem] flex-col md:flex-row md:items-start items-center max-w-7xl w-full">
        <div className="text-white md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl py-3  text-black redhat md:text-4xl font-base mb-4 leading-normal md:leading-[3.5rem]">
            Connect with Our Experts
          </h2>
          <div className="bg-[#F0F0F0] shadow-xl border border-[#F0F0F0] rounded-xl p-4 w-full md:w-[400px]">
            <p className="py-[2.5rem] px-[1rem] text-[14px] text-black  leading-relaxed ">
              Driven by a passion to expedite change in our pursuit of a
              sustainable future, we partner with businesses and industries to
              catalyse innovation, enable smarter decision-making and deliver
              positive impact
            </p>
          </div>
          <button className="mt-[2rem]  border border-black relative group w-[242px] h-[42px] bg-black text-white rounded-full flex items-center justify-center gap-2 transition-all duration-500  ease-out overflow-hidden hover:bg-transparent hover:text-black transform hover:scale-105">
            {/* Background Animation */}
            <span className="absolute inset-0 bg-black transform -translate-x-0 transition-transform duration-500 ease-out group-hover:translate-x-full"></span>

            {/* Button Text (Turns White on Hover) */}
            <span className="relative z-10 font-redhat text-sm transition-colors duration-500 ease-out">
              Meet Consultants
            </span>

            {/* Button Icon (Stays Visible) */}
            <div className="relative w-[34px] h-[25px]">
              <Image src={ButtonImg} alt="Button Icon" />
            </div>
          </button>
          <div className="mt-[1rem] flex md:justify-start">
            <Button
              text="Find Local Offices"
              buttonImage={ButtonImage}
              hoverImage={HoverImage}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image src={ExpertImg} alt="expert-img" />
        </div>
      </div>
    </div>
  );
};

export default ConnectExpert;
