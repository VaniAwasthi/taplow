"use client";
import React from "react";
import GlobalImg from "../../assets/aboutuspage/global-img.webp";
import LftsecImg from "../../assets/aboutuspage/global-left.webp";
import Image from "next/image";
import Triangle from "../../assets/aboutuspage/aboutsec.webp";
import Mission from "../../assets/aboutuspage/Mssion.webp";
import VissionImg from "../../assets/aboutuspage/Vission.webp";
import Ourfoundingright from "../../assets/aboutuspage/leftsecImg.webp";

export const OurFoundingPartner = () => {
  const data = {
    mdHeading: `<h3>Our Founding Partners</h3>`,
    heading: "Our Founding Partners",
    GlobalImg: GlobalImg,
    LftsecImg: LftsecImg,
    RightsecImg: Ourfoundingright,
    Triangle: Triangle,
  };
  return (
    <section className="container mx-auto px-4 lg:max-w-7xl py-10 ">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="md:w-1/3">
          <h2
            className="hidden md:block text-3xl font-normal redhat px-2"
            dangerouslySetInnerHTML={{ __html: data.mdHeading }}
          ></h2>
          <h2 className="block md:hidden text-3xl font-normal redhat">
            {data.heading}
          </h2>
        </div>
        <div
          className="my-4 h-[2px] w-[80%] md:w-3/3 "
          style={{
            background: "#83A790",
          }}
        ></div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start md:mt-[5rem] mt-[2rem] md:mb-[7rem] mb-[2rem]">
        {/* Image Section */}
        <div className="relative w-full md:w-1/3 mt-[2rem] md:mt-0 md:mb-2 mb-[8rem]">
          {/* Text Box Over Image */}
          <div className="absolute -top-12  right-[0.5rem] left-[0.8rem] md:right-[2rem] md:left-[2.5rem] h-[70px] w-[350px] border-[#E7E7E7] border-2 bg-white text-black px-3 py-1 rounded-lg shadow-sm shadow-[#E7E7E7] text-sm transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="text-[#5E5E5E] text-sm font-bold px-4 py-3">
              Founding Partners of The Taplow Group S.A. - Taplow House, UK, May
              2002
            </p>
          </div>
          <Image
            src={data.LftsecImg}
            alt="Founding Partners of The Taplow Group"
            className="rounded-lg shadow-lg md:w-[500px] md:h-[250px] "
          />
          <div className="absolute bg-[#96A94A] bottom-[-8rem] border-2 border-white text-white p-4 rounded-lg shadow-md w-full transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="text-sm">
              Top row from left to right: Helmut Bohler, Terry Hannock, Finn
              Aagaard, Matti Aito, Mark Firth.
            </p>
            <p className="text-sm mt-2">
              Bottom row from left to right: Susie Rydneor, Roger Prior, Carmen
              Alarcon, George Griffith, Renate Sieger, Charles Russam, Niels
              Budde-Lund, Marios Paras.
            </p>
          </div>
        </div>

        {/* Badge Section */}
        <div className="md:w-1/3 flex flex-col items-center justify-between mt-[4rem] md:mt-0">
          <Image
            src={data.GlobalImg}
            width={250}
            height={250}
            alt="globalBadge"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="mt-[2rem] bg-gray-200 text-gray-700 px-3 py-1 rounded shadow-md text-xs w-[250px] h-[50px] flex items-center justify-center">
            <p className="px-2 py-2 font-bold text-xs">
              Global Top 40 firm 2015 – 2025
            </p>
          </div>
        </div>

        {/* Text Section */}
        <div className="relative w-full md:w-1/3 mt-[6rem] md:mt-0 md:mb-2 mb-[8rem]">
          {/* Text Box Over Image */}
          <div className="absolute flex justify-center items-center -top-12 right-[0.5rem] left-[0.8rem] md:right-[2rem] md:left-[2.5rem] h-[70px] w-[350px] border-[#E7E7E7] border-2 bg-white text-black px-3 py-1 rounded-lg shadow-sm shadow-[#E7E7E7] text-sm transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="text-[#5E5E5E] text-md font-bold px-4 py-3">
              About The Taplow Group
            </p>
          </div>
          <Image
            src={data.RightsecImg}
            alt="Founding Partners of The Taplow Group"
            className="rounded-lg shadow-lg md:w-[500px] md:h-[250px]"
          />
          <div className="absolute bg-[#96A94A] bottom-[-8rem] border-2 border-white  text-white p-4 rounded-lg shadow-md w-full transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="text-sm">
              The Taplow Group is a trusted global firm specialising in
              leadership solutions. Since 2002, we have been helping
              organisations secure top executive talent, strengthen leadership
              teams, and navigate business transformation. With a presence
              worldwide, we combine global reach with local expertise to drive
              long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VissionSec = () => {
  const content = [
    {
      title: "Mission",
      description: `<p>Empower organizations’ development by providing comprehensive, trusted executive search
and people advisory services globally, using local expertise and insights.
</p>`,
      image: Mission,
    },
    {
      title: "Vision",
      description: `<p>Be the leading catalyst in the growth of organizations and people,
by maximizing the value of human capital across the globe.</p>`,
      image: VissionImg,
    },
  ];

  return (
    <div className=" py-10 bg-gray-100 md:mb-[10rem]">
      {/* Heading */}
      <div className="relative container mx-auto px-4 lg:max-w-7xl">
        <h2 className="text-3xl font-semibold text-left md:text-center mb-[2rem] md:mb-2">
          Our Mission & Vision
        </h2>

        {/* Card Container */}
        <div className="relative flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto md:-mb-16">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex-1 bg-white shadow-lg rounded-lg border-[#96A94A] border-2 overflow-hidden flex flex-col md:flex-row md:relative md:top-16  transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <Image
                  src={item.image}
                  alt={`${item.title} Image`}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Text Section */}
              <div className="p-6 md:w-1/2">
                <h3 className="md:text-2xl text-xl font-semibold mb-2 text-[#005581]">
                  {item.title}
                </h3>
                <p
                  className="text-[#666666] text-sm"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
