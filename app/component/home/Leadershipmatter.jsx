"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonImg from "../../assets/homePage/hover.svg";
import TriangleImage from "../../assets/homePage/intersecttriangle.webp";
import BusinessMeeting from "../../assets/homePage/leading-img.png";
import PlayButton from "../../assets/homePage/play-circle.svg"; // Make sure this path is correct

const LeadershipMatter = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const data = {
    heading: "Where Leadership Matters!",
    desc: "Great leadership shapes vision, drives results, and defines success. At The Taplow Group, we identify and support leaders who move your business forward.",
    btnText: "Know More",
  };

  return (
    <div className="w-full flex flex-col-reverse xl:flex-row relative my-10">
      {/* Left Section */}
      <div className="w-full xl:w-1/2 bg-[#88A24B] text-white flex flex-col px-6 xl:px-12 pt-12 relative h-[450px] md:h-auto">
        <div className="md:w-[80%] xl:ml-[7rem]">
          <h2 className="text-3xl md:text-4xl font-regular pb-6 text-center md:text-left">
            {data.heading}
          </h2>
          <p className="text-md leading-relaxed text-center md:text-left mb-[2rem] md:mb-2">
            {data.desc}
          </p>
          {/* Triangle Image Positioned to Bottom-Right */}
          <div className="absolute bottom-[0px] md:right-6 right-1 ">
            <Image src={TriangleImage} alt="Triangle Design" />
          </div>
        </div>
      </div>

      {/* Right Section - Clickable Video */}
      <div className="w-full xl:w-1/2 relative">
        {isVideoPlaying ? (
          <video
            src="/videos/leadershipMatter.mp4"
            className="w-full h-[420px] object-cover" // Increased height
            controls
            autoPlay
          />
        ) : (
          <div
            className="relative cursor-pointer"
            onClick={() => setIsVideoPlaying(true)}
          >
            <Image
              src={BusinessMeeting}
              alt="Business Meeting"
              layout="responsive"
              className="object-cover w-full h-[450px]" // Increased height
              width={600}
              height={600}
              priority
            />
            {/* Play Button Overlay */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/70 p-4 rounded-full">
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
