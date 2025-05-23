"use client";
import React from "react";
import heroBg from "../../assets/servicepage/boardadvisory/boardAdvisoryBanner.webp";
import Image from "next/image";
import ExecutiveSearch from "../services/ExecutiveSearch";
import BoardImage from "../../assets/servicepage/boardadvisory/BoardAdvisory.webp";
export const HeroSection = () => {
  const Heading =
    "Guiding Boards. Empowering Leadership. Enabling Performance.";
  const Description =
    " Boards today face growing pressure to stay agile, informed, and aligned. The Taplow Group offers strategic counsel and governance insight to help leaders navigate complexity with clarity and impact.";
  return (
    <div className="relative w-full xl:min-h-screen flex items-center overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-start  justify-center text-white py-14 px-6 md:px-32 max-w-7xl ">
        <h2 className="text-[2rem] md:text-[3rem] font-normal text-left md:w-[550px] w-[330px]">
          {Heading}
        </h2>
        <div
          className="my-4 h-[1px] w-[80%] md:w-[420px]  mx-0 mb-[3rem] md:mb-[1rem]"
          style={{
            background: "linear-gradient(to right, #D9D9D9 30%, #96A94A 30%)",
          }}
        ></div>

        <p className="mt-2 text-sm md:text-base leading-snug max-w-[90%] md:max-w-[450px]">
          {Description}
        </p>
      </div>
    </div>
  );
};

export const AboutBoard = () => {
  const data = {
    heading: " Our Board Advisory Expertise",
    Img: BoardImage,
    description: `Board leadership today demands more than oversight—it requires foresight, diversity of thought, and the ability to guide through complexity. At The Taplow Group, our consultants draw on years of executive experience and global insight to support board effectiveness, governance best practices, and leadership succession at the highest levels. <br>Our work spans both mature and emerging markets, offering board-level advisory services to public companies, private enterprises, family-led businesses, and mission-driven organisations. Whether supporting board recruitment, refining board composition, or facilitating CEO succession planning, we help boards fulfil their responsibilities while preparing for the future.`,
  };
  return (
    <>
      <ExecutiveSearch ExecutiveData={data} />
    </>
  );
};
