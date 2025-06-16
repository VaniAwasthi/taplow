"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonImg from "../../assets/homePage/hover.svg";
import TriangleImage from "../../assets/homePage/intersecttriangle.webp";
import BusinessMeeting from "../../assets/homePage/leading-img.png";
// import PlayButton from "../../assets/homePage/play-button.svg";

const LeadershipMatter = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const data = {
    heading: "Where Leadership Matters!",
    desc: "Fueled by a commitment to a sustainable future, we collaborate with businesses to spark innovation, accelerate transformation, and create lasting impact.",
    btnText: "Know More",
  };

  return (
    <div className="w-full flex flex-col-reverse xl:flex-row relative my-10">
      {/* Left Section */}
      <div className="w-full xl:w-1/2 bg-[#88A24B] text-white flex flex-col px-6 xl:px-12 pt-12 relative">
        <div className="md:w-[80%] xl:ml-[7rem]">
          <h2 className="text-3xl md:text-4xl font-regular pb-6 text-center md:text-left ">
            {data.heading}
          </h2>
          <p className="text-md leading-relaxed  text-center md:text-left mb-[2rem] md:mb-2">
            {data.desc}
          </p>
          {/* <div className="flex justify-center md:justify-start mb-[12rem] md:mb-[2rem]">
            <button className="mt-6 mb-6 md:mt-10 border border-[#96a94a] relative group w-[242px] h-[42px] bg-white text-[#96a94a] rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-200 transform hover:scale-105">
              <span className="relative z-10 font-redhat text-sm">
                {data.btnText}
              </span>
              <Image src={ButtonImg} alt="Button Icon" width={20} height={20} />
            </button>
          </div> */}
          {/* Triangle Image Positioned to Bottom-Right */}
          <div className="absolute bottom-[0px] md:right-6 right-1">
            <Image src={TriangleImage} alt="Triangle Design" />
          </div>
        </div>
      </div>

      {/* Right Section - Clickable Video */}
      <div
        className="w-full xl:w-1/2 relative cursor-pointer"
        onClick={() => setIsVideoPlaying(true)}
      >
        {isVideoPlaying ? (
          <video
            src="/videos/leadershipMatter.mp4" // Adjust the path based on where your file is in the public folder
            className="w-full h-auto object-cover"
            controls
            autoPlay
          />
        ) : (
          <div className="relative">
            <Image
              src={BusinessMeeting}
              alt="Business Meeting"
              layout="responsive"
              className="object-cover"
              priority
            />
            {/* Optional Play Button Overlay */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/50 p-4 rounded-full">
        <Image
          src={PlayButton}
          alt="Play Button"
          width={60}
          height={60}
        />
      </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadershipMatter;
