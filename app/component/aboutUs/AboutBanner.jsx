"use client";
import React from "react";
import HeroSecLayout from "../utilities/HeroSecLayout";
import Banner from "../../assets/aboutuspage/aboutBg.webp";
// import VideoBanner from "../../assets/aboutuspage/gifnew.mp4";
// import Banner from "../../assets/aboutuspage/compress.gif";
import BannerImg from "../../assets/aboutuspage/aboutImage.webp";
import AllStartedImg from "../../assets/aboutuspage/Frame39.webp";
import LogoNameImg from "../../assets/aboutuspage/aboutsec.webp";

import Image from "next/image";
import TriangleArrow from "../utilities/TriangleArrow";
export const AboutBanner = () => {
  const Data = {
    title: "Finding the Right Leaders to Shape Tomorrow",
    desc: "",
  };
  return (
    <>
      <HeroSecLayout
        HeroSecDiv="lg:hidden block"
        heroBg={Banner}
        rightImage={BannerImg}
        Heading={Data.title}
        Description={Data.desc}
        isButton={false}
        Isdivider={true}
        rightSec={true}
        headingClass="md:w-[300px] w-[300px] md:mt-[1rem] md:text-5xl text-[#005581]"
        leftSecClass="flex flex-col justify-start items-start pb-10 md:pb-20 text-left md:mt-[5rem] mt-4"
        rightSecClass="flex justify-center md:justify-end"
        ImageClass="transition-transform duration-300  ease-in-out hover:scale-110"
        dividerBackground="linear-gradient(to right, #96A94A 30%, #005581 30%)"
      />
      <div className="relative hidden lg:block w-full lg:h-[750px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/gifnew.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};
export const ItAllStarted = () => {
  const data = {
    sec1heading: "Taplow and the Tulip Tree: Our Brand Story",
    sec1des:
      "The Taplow name is derived from our inaugural conference held in 2002 in Taplow, UK, on the banks of the River Thames, a short distance from Windsor Castle. Mentioned in the Domesday Book in 1086, the village was originally Anglo-Saxon and is steeped in history.",
    sec1des2: `<p>Our logo is inspired by the Tulip Trees found within the grounds of Taplow House Hotel. Originally planted during the reign of Elizabeth I, these trees have stood the test of time, weather, and evolving economies and nations.</p>`,

    sec1img: LogoNameImg,
    image: AllStartedImg,
    sec2heading: "Our Journey: How It All Began",
    sec2des1:
      "In 2002, a group of independent senior Executive Search and Human Resource consultants began a dialogue over the state of the industry, and how they could combine to offer high value, highly differentiated search and consulting services – locally, internationally and globally.",
    sec2des2:
      "Considering all of the other models in the industry, our founders decided on an incremental approach to building a global business and founded The Taplow Group. They set out a number of standards and procedures by which we all adhere and abide by – that remains true today as it did on the 1st day of our being.",
  };

  return (
    <section className="container mx-auto px-10 lg:max-w-7xl md:max-w-6xl py-10 ">
      <div className="flex flex-wrap items-center justify-between">
        {/* Section 1 */}
        <div className="w-full lg:w-1/3 p-2 text-left">
          <h2 className="text-3xl font-normal redhat">
            Taplow And The Tulip Tree :
            <br className="hidden md:block" /> Our Brand Story
          </h2>

          <p className="text-sm py-4 text-[#5E5E5E] redhat md:w-[300px] w-full">
            {data.sec1des}
          </p>
          <div
            className="text-sm text-[#5E5E5E] redhat md:w-[300px] w-full"
            dangerouslySetInnerHTML={{ __html: data.sec1des2 }}
          ></div>
          <div className="mt-[3rem]">
            {/* <Image
              src={LogoNameImg}
              alt="image"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            /> */}
            <TriangleArrow />
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <Image
            src={data.image}
            alt="Taplow Logo"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Section 2 */}
        <div className="w-full lg:w-[300px] max-lg:w-full max-w-full p-2">
          <h2 className="text-3xl font-normal redhat">
            Our Journey : <br className="hidden md:block" />
            How It All Began
          </h2>

          <p className="text-sm py-4 text-[#5E5E5E] redhat w-full ">
            {data.sec2des1}
          </p>
          <p className="text-sm text-[#5E5E5E] redhat w-full">
            {data.sec2des2}
          </p>
        </div>
      </div>
    </section>
  );
};
