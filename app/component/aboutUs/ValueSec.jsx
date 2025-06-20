"use client";
import React from "react";
import Image from "next/image";
import IntegrityImg from "../../assets/aboutuspage/IntegrityImg.png";
import CommitmentImg from "../../assets/aboutuspage/CommitmentImg.png";
import CollaborationImg from "../../assets/aboutuspage/collaborationImg.png";
import ExcellenceImg from "../../assets/aboutuspage/ExcellenceImg.png";
import Arrow1 from "../../assets/aboutuspage/Arrow1.png";
import Arrow2 from "../../assets/aboutuspage/Arrow2.png";
import Arrow3 from "../../assets/aboutuspage/Arrow3.png";
import Arrow4 from "../../assets/aboutuspage/Arrow4.png";
import Icon1 from "../../assets/aboutuspage/Icon1.png";
import Icon2 from "../../assets/aboutuspage/Icon2.png";
import Icon3 from "../../assets/aboutuspage/Icon3.png";
import Icon4 from "../../assets/aboutuspage/Icon4.png";
import OurValues from "../../assets/aboutuspage/OurValues.png";

const ValuesSection = () => {
  const coreValues = [
    {
      icon: Icon1,
      title: "Integrity & Transparency",
      text: "Dedicated to the success of our clients and candidates.",
    },
    {
      icon: Icon2,
      title: "Commitment & Passion",
      text: "Upholding the highest ethical standards in every engagement.",
    },
    {
      icon: Icon3,
      title: "Collaboration & Inclusion",
      text: "Diversity strengthens leadership and drives innovation.",
    },
    {
      icon: Icon4,
      title: "Excellence & Innovation",
      text: "Continuously striving to improve and deliver meaningful results.",
    },
  ];
  return (
    <div className=" mt-4 mb-16 px-4 container mx-auto  lg:max-w-6xl ">
      <h2 className="text-4xl font-semibold mb-8">Our Values</h2>
      <div className="flex flex-col items-center justify-center">
        {/* Mobile View - Show Image First, Then Icons in a Row */}
        <div className="w-full flex flex-col items-center lg:hidden">
          <Image
            alt="Our Values"
            src={OurValues}
            className="w-full max-w-md transition-transform duration-300 ease-in-out hover:scale-105"
          />

          {/* Icons and Text in a Row for Mobile */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 w-full max-w-xl">
            {coreValues.map((value, index) => (
              <div key={index} className="flex items-start gap-4 max-w-xs">
                <Image
                  src={value.icon}
                  alt={`${value.title} icon`}
                  className="w-8 h-8 shrink-0"
                />
                <div>
                  <h2 className="font-semibold">{value.title}</h2>
                  <p className="text-sm mt-1">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - Keep Original Layout */}
        <div className="relative w-[650px] hidden lg:flex items-center justify-center">
          {/* Center Triangle */}
          <div className="relative w-[650px] hidden lg:flex items-center justify-center mt-[6rem] mb-[5rem]">
            <div className="z-50 h-32 min-w-100% relative translate-x-[229px] translate-y-[-89px] xl:translate-x-[218px] xl:translate-y-[-97px]">
              <Image
                className="z-50 object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                src={IntegrityImg}
                alt="Growth"
              />
            </div>
            <div className="flex">
              <div className="z-10 h-32 min-w-100% relative translate-x-[64px] translate-y-[-3px] xl:translate-x-[55px] xl:translate-y-[-11px]">
                <Image
                  className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                  src={CommitmentImg}
                  alt="Performance"
                />
              </div>
              <div className="z-10 h-32 min-w-100% relative translate-x-[-180px] translate-y-[49px] xl:translate-x-[-188px] xl:translate-y-[41px]">
                <Image
                  className="object-contain  transition-transform duration-200 ease-in-out hover:scale-105"
                  src={CollaborationImg}
                  alt="Accelerate"
                />
              </div>
              <div className="z-10 h-32 min-w-100% relative translate-x-[-180px] translate-y-[49px] xl:translate-x-[-190px] xl:translate-y-[41px]">
                <Image
                  className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                  src={ExcellenceImg}
                  alt="Diversification"
                />
              </div>
            </div>
          </div>

          {/* Arrows and Icons */}
          <div className="absolute top-[35px] left-[-160px] flex items-center space-x-2">
            <p className="text-sm text-right w-56 mb-[4rem]">
              Dedicated to the success of our clients and candidates.
            </p>
            <Image
              src={Icon1}
              alt="Icon"
              className="mb-[4rem] transition-transform duration-200 ease-in-out hover:scale-105"
            />
            <Image src={Arrow1} alt="Arrow" />
          </div>

          {/* Top Right Content (Content → Icon → Arrow) */}
          <div className="absolute top-[20px] right-[-120px] flex items-center space-x-2">
            <Image src={Arrow2} alt="Arrow" />
            <Image
              src={Icon2}
              alt="Icon"
              className="transition-transform duration-200 ease-in-out hover:scale-105"
            />
            <p className="text-sm w-56">
              Upholding the highest ethical standards in every engagement.
            </p>
          </div>

          {/* Bottom Left Content (Content → Icon → Arrow) */}
          <div className="absolute bottom-[20px] left-[-220px] flex items-center space-x-2">
            <p className="text-sm text-right w-56">
              Diversity strengthens leadership and drives innovation.
            </p>
            <Image
              src={Icon3}
              alt="Icon"
              className="transition-transform duration-200 ease-in-out hover:scale-105"
            />
            <Image src={Arrow3} alt="Arrow" />
          </div>

          {/* Bottom Right Content (Content → Icon → Arrow) */}
          <div className="absolute bottom-[20px] right-[-180px] flex items-center space-x-2">
            <Image src={Arrow4} alt="Arrow" />
            <Image
              src={Icon4}
              alt="Icon"
              className="transition-transform duration-200 ease-in-out hover:scale-105"
            />
            <p className="text-sm w-56">
              Continuously striving to improve and deliver meaningful results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
