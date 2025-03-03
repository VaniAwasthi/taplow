"use client";
import React from "react";
import Image from "next/image";
import GrowthImg from "../../assets/homePage/growth.png";
import PerformanceImg from "../../assets/homePage/performance.png";
import AccelerateImg from "../../assets/homePage/accelerate.png";
import DiversificationImg from "../../assets/homePage/diversification.png";
import ExpectionalTalent from "../../assets/homePage/Group-81.svg";

const TriangleSection = () => {
  return (
    <>
      <div className="relative hidden lg:flex items-center justify-center mt-[6rem] mb-[5rem]  md:w-1/2 w-full">
        <div className="h-32  min-w-100%  relative translate-x-[118px] translate-y-[-20px] xl:translate-x-[169px] xl:translate-y-[-55px]">
          <Image
            className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            src={GrowthImg}
            alt="Growth"
          />
        </div>
        <div className="flex ">
          <div className="h-32 min-w-100% relative translate-x-[-64px] translate-y-[76px] xl:translate-x-[-64px] xl:translate-y-[76px]">
            <Image
              className="object-contain transition-transform duration-300 ease-in-out hover:scale-105 "
              src={PerformanceImg}
              alt="Performance"
            />
          </div>
          <div className="h-32 min-w-100% relative translate-x-[-124px] translate-y-[80px] xl:translate-x-[-143px] xl:translate-y-[74px]">
            <Image
              className="object-contain scale-105 transition-transform duration-300 ease-in-out hover:scale-110"
              src={AccelerateImg}
              alt="Accelerate"
            />
          </div>
          <div className="h-32  min-w-100% relative translate-x-[-184px] translate-y-[80px] xl:translate-x-[-222px] xl:translate-y-[76px]">
            <Image
              className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
              src={DiversificationImg}
              alt="Diversification"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden md:w-1/2 flex justify-center md:justify-start">
        <Image
          alt="exceptional-talent"
          src={ExpectionalTalent}
          className="max-w-full h-auto  transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </>
  );
};

export default TriangleSection;
