"use client";

import React, { useState } from "react";
import Image from "next/image";
import ButtonImg from "../../Assest/homePage/hover.svg";
import TriangleImage from "../../Assest/homePage/triangle-leading.png";
import BusinessMeeting from "../../Assest/homePage/leading-img.png";

const LeadershipMatter = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="w-full bg-[#88A24B] flex flex-col xl:flex-row relative my-10">
      {/* Left Section */}
      <div className="w-full xl:w-1/2 text-white flex flex-col justify-start px-6 xl:px-12 pt-12 relative">
        <div className="w-[80%] xl:ml-[7rem]">
          <h2 className="text-3xl md:text-4xl font-regular pb-[1.5rem]">
            Where Leadership Matters!
          </h2>
          <p className="text-md leading-relaxed mb-[2rem]">
            Driven by a passion to expedite change in our pursuit of a
            sustainable future, we partner with businesses and industries to
            catalyze innovation, enable smarter decision-making, and deliver
            positive impact.
          </p>
          <button className="mt-6 mb-[2rem] md:mt-[3.5rem] border border-[#96a94a] relative group w-[242px] h-[42px] bg-white text-[#96a94a] rounded-full flex items-center justify-center gap-2 transition-all duration-500 ease-out overflow-hidden hover:bg-gray-200 transform hover:scale-105">
            <span className="relative z-10 font-redhat text-sm transition-colors duration-500 ease-out">
              Know More
            </span>
            <div className="relative">
              <Image src={ButtonImg} alt="Button Icon" />
            </div>
          </button>
        </div>

        {/* Triangle Image */}
        <div className="absolute top-[12rem] right-[0] hidden xl:block">
          <Image
            src={TriangleImage}
            alt="Triangle Design"
            width={578}
            height={478}
          />
        </div>
      </div>

      {/* Right Section - Clickable Video */}
      <div
        className="w-full xl:w-1/2 relative cursor-pointer"
        // onClick={() => setIsVideoPlaying(true)}
      >
        {isVideoPlaying ? (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Leadership Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative">
            <Image
              src={BusinessMeeting}
              alt="Business Meeting"
              layout="responsive"
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadershipMatter;
