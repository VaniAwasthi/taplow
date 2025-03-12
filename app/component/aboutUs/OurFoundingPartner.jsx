import React from "react";
import GlobalImg from "../../assets/aboutuspage/global-img.webp";
import LftsecImg from "../../assets/aboutuspage/global-left.webp";
import Image from "next/image";
import Triangle from "../../assets/aboutuspage/aboutsec.webp";
import Mission from "../../assets/aboutuspage/Mssion.webp";
import VissionImg from "../../assets/aboutuspage/Vission.webp";

export const OurFoundingPartner = () => {
  const data = {
    mdHeading: `<h2>Our Founding <br/> Partners</h2>`,
    heading: "Our Founding Partners",
    GlobalImg: GlobalImg,
    LftsecImg: LftsecImg,
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
          className="my-4 h-[2px] w-[100%] md:w-3/3 "
          style={{
            background: "#83A790",
          }}
        ></div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-[2rem] md:mb-[3rem] mb-[2rem]">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          {/* Text Box Over Image */}
          <div className="absolute -top-9 w-[350px] h-[70px] left-[3rem] border-[#E7E7E7] border-2 bg-white text-black px-3 py-1 rounded-lg shadow-sm shadow-[#E7E7E7] text-sm transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="text-[#5E5E5E] text-sm font-bold px-4 py-3">
              Founding Partners of The Taplow Group S.A. - Taplow House, UK, May
              2002
            </p>
          </div>
          <Image
            src={data.LftsecImg}
            alt="Founding Partners of The Taplow Group"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bg-[#96A94A] bottom-[-7rem] left-[6rem] text-white p-4 rounded-lg shadow-md max-w-md md:w-[500px] md:h-[150px] w-[300px] transition-transform duration-300 ease-in-out hover:scale-105">
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

        {/* Badge */}
        <div className="mt-[10rem] md:mt-2">
          <div className="relative flex flex-row items-center">
            <div className="mt-2 bg-gray-200 text-gray-700 px-3 py-1 rounded shadow-md text-xs w-[150px] h-[60px]">
              <p className="px-2 py-2 font-bold text-xs">
                Global Top 40 Firm 2015 - 2024
              </p>
            </div>
            <Image
              src={data.GlobalImg}
              alt="globalBadge"
              className=" transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="mt-[2rem] ml-auto flex justify-end w-full pr-8">
            <Image src={data.Triangle} alt="triangle" width={270} height={70} />
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
      description: `<p>To accelerate organizational growth by providing <b>leadership advisory services</b>, ensuring businesses have the right people to lead in an evolving world.</p>`,
      image: Mission,
    },
    {
      title: "Vision",
      description: `<p>To be the global leader in <b>executive search and CEO development</b>, shaping industries through strong and effective leadership.</p>`,
      image: VissionImg,
    },
  ];

  return (
    <div className=" py-10 bg-gray-100 md:mb-[10rem]">
      {/* Heading */}
      <div className="relative container mx-auto px-4 lg:max-w-7xl">
        <h2 className="text-3xl font-semibold text-center mb-[2rem] md:mb-2">
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
