"use client";
import React from "react";
import heroBg from "../../assets/servicepage/herobg.webp";
import ButtonImage from "../../assets/homePage/btn-img.svg";
import HoverImage from "../../assets/homePage/hover.svg";
import Image from "next/image";
import Button from "../utilities/Button";
const HeroSection = () => {
  const Heading = "Finding World-Class Leadership for Exceptional Businesses";
  const Description =
    " The right leaders drive success. With global reach and industry expertise, we help you find executives who fit, perform, and thrive.";
  const ButtonText = "Contact an Expert";
  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Overlay */}
      {/* <div
        className="absolute inset-0 w-full h-full top-0 left-0"
        style={{
          backgroundColor: "#2e2b2b",
          opacity: "0.2",
          zIndex: 1,
        }}
      ></div> */}

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroBg}
          alt="Background Image"
          fill
          className="object-cover w-full h-full [object-position:76%_61%] md:object-center "
          priority
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start justify-start md:justify-center text-white px-6 md:px-32 max-w-7xl ">
        <h2 className="text-[2rem] md:text-4xl font-normal text-left md:w-[400px] w-[330px]">
          {Heading}
        </h2>
        <div
          className="my-4 h-[1px] w-[80%] md:w-[320px]  mx-0 mb-[32rem] md:mb-[1rem]"
          style={{
            background: "linear-gradient(to right, #D9D9D9 30%, #96A94A 30%)",
          }}
        ></div>

        <p className="mt-2 text-sm md:text-base leading-snug max-w-[90%] md:max-w-[400px]">
          {Description}
        </p>

        {/* Button */}
        <div className="mt-6">
          <Button
            text={ButtonText}
            image={ButtonImage}
            hoverImage={HoverImage}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
