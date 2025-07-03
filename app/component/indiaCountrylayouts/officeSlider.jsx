"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import officeImage from "../../assets/globalpage/IndiaGurgaon.webp";
import ColImg from "../../assets/globalpage/generalImg.webp";

import BackgroundImg from "../../assets/globalpage/backgroundImg.webp";
import NextArrow from "../../assets/homePage/NextArrow.png";
import PrevArrow from "../../assets/homePage/prev-arrow.png";
import Flag1 from "../../assets/globalpage/India/flag1.webp";
import Flag2 from "../../assets/globalpage/India/flag2.webp";
import Flag3 from "../../assets/globalpage/India/flag3.webp";
import IndiaFlag from "../../assets/globalpage/IndiaFlag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import OneOffice from "../coun-layout/OneOffice";

// office Slider
export const OfficeSlider = () => {
  const officeSecHeading = "Our Office in India";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Gurgaon",
    address:
      "Office No. 306- 307, 3rd Floor, Tower-B, Emaar Digital Greens, Golf Course Extension Road, Sector-61, Gurgaon-122102, Haryana, India.",
    // phone: "+34 656 844 582",
    // email: "eric@macdonaldsearchgroup.com",
  };
  return (
    <>
      <OneOffice officeData={officeData} heading={officeSecHeading} />
    </>
  );
};

// AboutSect
export const AboutSect = () => {
  const Aboutheading = "About Taplow India";
  const greenDescription = `Shaping leadership in India, Asia, Middle East & Africa since 2014`;
  const AboutContent = {
    aboutContentpara1:
      "Established in 2014 by Sangeeta Sabharwal and Shaista Sabharwal, The Taplow Group – India is a trusted partner to organisations seeking high-impact leadership talent across sectors and geographies such as India, Asia, Middle East & Africa.",
    aboutContentpara2:
      "As a premier Executive Search & Leadership Advisory firm, we bring the agility of a boutique firm with the credibility of a global brand, and help businesses build strong and future- ready leadership teams.",
    aboutContentpara3: `Our Teams specialize in Executive Search, Leadership Advisory and Executive Interim mandates across sectors such as Manufacturing, Industrial, Consumer & Retail, Professional Services, Philanthropy & Social Impact, Aviation, Education, Healthcare, Pharmaceuticals & Life Sciences, Fashion, Energy etc.<br/><br/> `,
    aboutContentpara4:
      "Our approach is deeply embedded in relationships where we don’t view clients as accounts. We become their voice in the market and advisors at the table.<br/>We support large, medium, and small enterprises across Global MNCs setting up or scaling up, Indian MNCs expanding into global markets, Family-run and promoter-led businesses on transformation journeys",
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Blue Box - 3/12 */}
          <div className="md:col-span-3 bg-[#005581] rounded-lg p-6 text-white">
            <h2 className="md:hidden block redhat text-4xl font-normal mb-2">
              {Aboutheading}
            </h2>
            <h2 className="hidden md:block redhat text-4xl font-normal mb-2">
              About <br />
              Taplow India
            </h2>
          </div>

          {/* Green Box with Background - 9/12 */}
          <div className="relative md:col-span-9 w-full md:h-40 h-64 flex items-center overflow-hidden transition-transform duration-300 hover:scale-105">
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
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center my-5 md:my-2">
          {/* Text Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm leading-relaxed">
              {Object.values(AboutContent).map((item, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src={ColImg}
              alt="diversity"
              width={500}
              height={500}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// flagship
export const Flagship = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const offerings = [
    {
      title: "Executive Search",
      description:
        "Our flagship offering. We specialise in identifying senior leaders who align with an organisation’s strategy, culture, and transformation agenda. Every mandate is led by senior partners to ensure rigour, confidentiality, and fit.",
      image: Flag1,
      color: "bg-[#7BA23F]", // green
    },
    {
      title: "Interim Management",
      description:
        "We support companies undergoing transition, turnaround, or rapid scale by placing seasoned leaders for fixed-term roles across functions and sectors.",
      image: Flag2,
      color: "bg-[#005581]", // blue
    },
    {
      title: "HR Advisory Services",
      description:
        "We work with Boards, CEOs and CHROs on leadership development, succession planning, and organisation design to enable long term leadership excellence. Our work helps future-proof leadership teams.",
      image: Flag3,
      color: "bg-[#7BA23F]", // green
    },
    // {
    //   title: "HR Advisory Services",
    //   description:
    //     "We support leadership development, succession planning, and organisation design...",
    //   image: Flag3,
    //   color: "bg-[#7BA23F]", // green
    // },
  ];
  return (
    <>
      <div className="container mx-auto px-4 md:max-w-7xl">
        <div className="relative w-full flex flex-col items-start ustify-center md:justify-left space-y-6">
          <h2 className="text-4xl redhat font-base pb-[1.5rem] text-center md:text-left ">
            Our Core Services
          </h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="w-full max-w-7xl px-4 py-10"
          >
            {offerings.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[250px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full"
                  />

                  {/* Colored Overlay */}
                  <div
                    className={`absolute inset-0 ${
                      index === 1 ? "bg-[#005581]" : item.color
                    } bg-opacity-70 flex flex-col  p-6 text-white`}
                  >
                    <h4 className="redhat text-3xl font-regular mb-6 mt-2">
                      {item.title}
                    </h4>
                    <p className="text-[15px]">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          {!isBeginning && (
            <div
              onClick={() => swiperInstance?.slidePrev()}
              className="lg:block hidden absolute bottom-10 left-[-5rem] z-10 cursor-pointer"
            >
              <Image src={PrevArrow} alt="Prev" width={50} height={50} />
            </div>
          )}

          {!isEnd && (
            <div
              onClick={() => swiperInstance?.slideNext()}
              className="lg:block hidden absolute bottom-10 right-[-4rem] z-10 cursor-pointer"
            >
              <Image src={NextArrow} alt="Next" width={50} height={50} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// CommitmentSec

export const CommitmentSec = () => {
  const data = {
    Image: DiversityImg,
    title: "Our Commitment To Diversity",
    description:
      "At Taplow India, we believe that leadership should reflect in the world that we live in. We actively champion diverse leadership slates to ensure every search includes candidates from underrepresented backgrounds—across gender, experience, and social context. We actively work with clients to build inclusive leadership teams, knowing that diversity fuels innovation, better decisions, and sustainable growth.  ",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-10">
      {/* Top Divider with Flag */}
      <div className="flex gap-4 mb-10">
        <div className="flex-grow h-[2px] bg-[#83A790] max-w-[300px]" />
        <Image
          src={IndiaFlag}
          alt="flag"
          width={100}
          height={20}
          className="!h-[50px] translate-y-[-13px]"
        />
        <div className="flex-grow h-[2px] bg-[#83A790] max-w-full" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="flex justify-center">
          <Image
            src={data.Image}
            alt="Diversity"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="space-y-4 md:pr-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
            {data.title}
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>

      {/* Bottom Divider with Green Square */}
      <div className="flex items-center justify-end gap-2 mt-10">
        <div className="flex-grow h-[2px] bg-[#83A790] max-w-full" />
        <div className="w-4 h-4 bg-[#8A9C3E]" />
        <div className="w-[150px] h-[2px] bg-[#83A790]" />
      </div>
    </div>
  );
};
