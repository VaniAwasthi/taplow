"use client";
import Image from "next/image";
import BackgroundImg from "../../assets/globalpage/backgroundImg.webp";

const TaplowInfoSection = ({
  general,
  specific,
  flag,
  greenDescription,
  aboutheadingclass,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 ">
      {/* Green Box */}
      <div className="relative w-full md:h-40 h-64 flex items-center overflow-hidden transition-transform duration-300  hover:scale-105">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={BackgroundImg}
            alt="Background"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
          <p
            className="text-md font-normal text-left"
            dangerouslySetInnerHTML={{ __html: greenDescription }}
          ></p>
        </div>
      </div>
      {/* heading */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-4">
        <h2
          className={`md:w-[400px] text-2xl redhat font-normal md:text-3xl mt-8 mb-2 ${aboutheadingclass}`}
        >
          At the Heart of Leadership, Wherever You Are.
        </h2>
        <div className="flex md:flex-row md:ml-3">
          <div className="bg-[#83A790] my-4 h-[2px] w-[150px] md:w-[600px]"></div>
          <Image
            src={flag}
            alt="flag"
            width={100}
            height={20}
            className="!h-[50px]"
          />
          <div className="bg-[#83A790] my-4 h-[2px] w-[150px] md:w-[200px]"></div>
        </div>
      </div>
      {/* General Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="bg-[#8A9C3E] text-white text-sm px-4 py-1 rounded-md inline-block font-medium">
            {general.title}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm leading-relaxed">
            {general.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={general.image}
            alt="General Info Image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
      <div className="bg-[#83A790] my-4 h-[2px] w-full md:w-full"></div>
      {/* Specific Section */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="flex justify-center md:order-1">
          <Image
            src={specific.image}
            alt="Specific Info Image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="md:order-1">
          <span className="bg-[#96A94A] text-white text-sm px-4 py-1 rounded-md inline-block font-medium">
            {specific.title}
          </span>
          <h2 className="text-3xl font-normal redhat w-2/4 mt-4 mb-6">
            {specific.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
            {specific.services.map((service, idx) => (
              <div className="space-y-2" key={idx}>
                <h3 className="font-semibold uppercase text-sm">
                  {service.title}
                </h3>
                <p>{service.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaplowInfoSection;
