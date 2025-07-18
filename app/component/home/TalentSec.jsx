"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/component/utilities/Button";
import ButtonImage from "../../assets/homePage/btn-img.svg";
import HoverImage from "../../assets/homePage/hover.svg";
import TriangleSection from "../utilities/Triangle";

const Talentsec = () => {
  return (
    <div className="container mx-auto px-4 lg:max-w-7xl py-10 mt-4 mb-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Image */}

        <TriangleSection />
        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl lg:text-4xl font-semibold redhat leading-relaxed text-[#222222]">
            Connecting Companies to <br className="hidden md:block" />
            Exceptional Talent
          </h2>
          <p className="mt-4 text-md redhat text-[#666666] leading-relaxed ">
            At The Taplow Group, we help businesses and leaders move
            forward—faster. Accelerate growth with the right executive talent,
            enhance performance through leadership excellence, drive
            diversification with fresh perspectives, and shape strategies that
            create lasting impact. The right people make the difference—let’s
            find them together.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Button
              href="/taplow"
              text="About Us"
              buttonImage={ButtonImage}
              hoverImage={HoverImage}
            />
          </div>
        </div>
      </div>
      <div className="my-6 h-[1px] w-full bg-[#83A790]"></div>
    </div>
  );
};

export default Talentsec;
