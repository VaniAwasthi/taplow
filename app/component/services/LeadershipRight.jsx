"use client";
import React from "react";
import BackgroundImage from "../../assets/servicepage/leadershipBg.webp";
import Image from "next/image";
import Button from "../utilities/Button";
import HoverImage from "../../assets/homePage/hover.svg";
import chessPiece from "../../assets/servicepage/chess-piece.webp";

const LeadershipRight = () => {
  const Leadershipdata = {
    heading: "The Right Leadership Makes All the Difference",
    greenHeading: "Let’s Find Yours.",
    buttonText: "Contact an Executive Search Expert Today",
  };
  return (
    <div className="relative h-[700px] md:h-[540px] flex items-center justify-center px-6 md:px-12">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={BackgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className=" md:object-cover object-contain"
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center max-w-6xl w-full">
        {/* content */}
        <div className=" w-full md:w-1/2  flex flex-col items-center justify-center md:justify-start  md:items-start">
          <h2 className="text-xl mt-[1rem] md:mt-1 py-3 w-[220px] md:w-[350px] redhat md:text-3xl font-base mb-2 leading-normal md:leading-leading-relaxed">
            {Leadershipdata.heading}
          </h2>
          <h2 className="text-2xl py-3 redhat md:text-4xl font-semibold mb-[2rem] leading-normal md:leading-[3.5rem] text-[#96A94A]">
            {Leadershipdata.greenHeading}
          </h2>
          <div>
            <Button
              text={Leadershipdata.buttonText}
              hoverImage={HoverImage}
              buttonImage={HoverImage}
              className="w-[250px] md:w-[350px] px-4 py-6"
              href="/contact"
            />
          </div>
        </div>
        {/* Image */}
        <div className="w-full md:w-2/2 flex justify-center md:justify-end items-center ">
          <div className="relative w-full md:w-[550px] md:h-[500px] h-[300px]">
            <Image
              src={chessPiece}
              alt="Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipRight;
