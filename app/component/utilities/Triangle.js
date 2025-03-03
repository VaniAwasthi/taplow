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
      <div className="relative w-[650px] hidden lg:flex items-center justify-center mt-[6rem] mb-[5rem] ">
        <div className="z-50 h-32  min-w-100%  relative translate-x-[149px] translate-y-[-40px] xl:translate-x-[175px] xl:translate-y-[-62px]">
          <Image
            className="z-50 object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            src={GrowthImg}
            alt="Growth"
          />
        </div>
        <div className="flex ">
          <div className="z-10  h-32 min-w-100% relative translate-x-[-57px] translate-y-[77px] xl:translate-x-[-62px] xl:translate-y-[72px]">
            <Image
              className="object-contain transition-transform duration-300 ease-in-out hover:scale-105 "
              src={PerformanceImg}
              alt="Performance"
            />
          </div>
          <div className="z-10  h-32 min-w-100% relative translate-x-[-127px] translate-y-[76px] xl:translate-x-[-143px] xl:translate-y-[72px]">
            <Image
              className="object-contain scale-105 transition-transform duration-200 ease-in-out hover:scale-110"
              src={AccelerateImg}
              alt="Accelerate"
            />
          </div>
          <div className="z-10  h-32  min-w-100% relative translate-x-[-197px] translate-y-[78px] xl:translate-x-[-223px] xl:translate-y-[72px]">
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
