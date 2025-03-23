import Image from "next/image";
import React from "react";
import Swedanflag from "../../assets/globalpage/flag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import BackgroundImg from "../../assets/globalpage/backgroundImg.webp";

const DrivingLeadership = () => {
  const data = {
    title: "Taplow Sweden: Driving Leadership and Diversity Excellence",
    Description: `With over 25 years of experience and offices in <b>Stockholm, Gothenburg, and Malmö</b>, Taplow Sweden is a leading name in executive search and strategic diversity recruitment. Our commitment to quality, speed, and precision ensures that we identify and place the best candidates across a wide range of industries.`,
  };
  return (
    <section className="container mx-auto px-4 lg:max-w-7xl py-6 ">
      <div className="relative w-full md:h-40 h-64 flex items-center overflow-hidden transition-transform duration-300  hover:scale-105">
        {/* Background Image */}
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
            className="text-md font-normal text-center"
            dangerouslySetInnerHTML={{ __html: data.Description }}
          ></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-4">
        <h2 className="md:w-[300px] text-2xl redhat font-normal md:text-3xl mt-8 mb-4">
          {data.title}
        </h2>
        <div className="flex md:flex-row md:ml-3">
          <div className="bg-[#83A790] my-4 h-[2px] w-[150px] md:w-[600px]"></div>
          <Image
            src={Swedanflag}
            alt="flag"
            width={100}
            height={20}
            className="!h-[50px]"
          />
          <div className="bg-[#83A790] my-4 h-[2px] w-[150px] md:w-[200px]"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="w-full md:w-[400px] text-sm text-[#666666] redhat text-left">
          <p className="py-2 px-2 mx-3 my-3 w-full md:w-[300px]">
            As part of a global network with strong local expertise, we provide
            our clients access to top talent worldwide. By expanding
            perspectives in recruitment, we contribute directly to our clients'
            long-term success.
          </p>
          <p className="py-2 px-2 mx-3 my-3 w-full md:w-[300px]">
            Diversity is at the heart of our approach. Taplow Sweden was one of
            Sweden's first executive search firms to integrate strategic
            diversity initiatives. We are also a founding member of the Swedish
            Diversity Charter, a European network established to promote
            inclusive hiring.
          </p>
        </div>
        <div className="w-full md:w-[400px] text-sm text-[#666666] redhat text-left">
          <p className=" py-2 px-2 mx-3 my-3 w-full md:w-[300px]">
            In 2010, we became the first company in our industry to undergo a
            diversity certification process, ensuring that every step of our
            internal and external processes meets the highest standards. This
            was achieved through the Global Diversity Certification Foundation
            (GDCF), a recognised leader in diversity certification.
          </p>
          <p className="py-2 px-2 mx-3 my-3 w-full md:w-[300px]">
            Our proven methodology, deep market insights, and a strong
            commitment to leadership excellence and inclusion continue to impact
            businesses across Sweden.
          </p>
        </div>
        <Image
          src={DiversityImg}
          alt="diversity"
          width={500}
          className="w-full md:w-[500px] transition-transform duration-300  hover:scale-105"
        />
      </div>
      <div className="bg-[#83A790] my-4 h-[2px] w-full "></div>
    </section>
  );
};

export default DrivingLeadership;
