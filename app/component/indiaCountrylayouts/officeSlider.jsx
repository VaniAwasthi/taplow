"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, Navigation2, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Office1 from "../../assets/globalpage/India/Mumbai.webp";
import Office2 from "../../assets/globalpage/India/Gurgaon.webp";
import BackgroundImg from "../../assets/globalpage/backgroundImg.webp";
import NextArrow from "../../assets/homePage/NextArrow.png";
import PrevArrow from "../../assets/homePage/prev-arrow.png";
import Flag1 from "../../assets/globalpage/India/flag1.webp";
import Flag2 from "../../assets/globalpage/India/flag2.webp";
import Flag3 from "../../assets/globalpage/India/flag3.webp";
import IndiaFlag from "../../assets/globalpage/IndiaFlag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";

// office Slider
export const OfficeSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  // useEffect//
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setTimeout(() => {
        const swiperInstance = swiperRef.current.swiper;
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }, 100);
    }
  }, []);
  const Officeheading = "Our office in India";
  const offices = [
    {
      id: 1,
      image: Office2,
      name: "Gurgaon",
      isOfficeData: true,
      address:
        "Office No. 306- 307, 3rd Floor, Tower-B, Emaar Digital Greens, Golf Course Extension Road, Sector-61, Gurgaon-122102, Haryana, India.",
      phone: "+91(0)1442 383361",
      email: "eric@macdonaldsearchgroup.com",
    },
    {
      id: 2,
      image: Office1,
      name: "Mumbai",
      isOfficeData: false,
      address:
        "Office No. 306- 307, 3rd Floor, Tower-B, Emaar Digital Greens, Golf Course Extension Road, Sector-61, Gurgaon-122102, Haryana, India.",
      phone: "+91(0)1442 383361",
      email: "eric@macdonaldsearchgroup.com",
    },
  ];
  return (
    <>
      <div className="bg-[#005581] py-16 relative w-full">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-4xl font-normal mb-4">
          {Officeheading}
        </div>
      </div>

      {/* Desktop View */}
      <div className="max-w-6xl mx-auto relative -mt-10 hidden md:flex justify-center gap-6">
        {offices.map((office, index) => (
          <div
            key={index}
            className="bg-white w-[300px] xl:w-[350px] rounded-lg shadow-lg overflow-hidden max-w-sm transition-all duration-300 hover:scale-105 h-[360px]"
          >
            <div className="relative p-4">
              <Image
                src={office.image}
                alt={office.name}
                className={`w-full ${
                  office.isOfficeData === true ? "h-48" : "h-[320px]"
                } object-cover rounded`}
              />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-white font-bold text-lg">{office.name}</h3>
              </div>
            </div>
            {office.isOfficeData === true ? (
              <div className="p-5 space-y-3">
                <div className="flex items-start text-gray-700 text-sm">
                  <Navigation2 className="w-5 h-5 text-[#00B2A9] mr-2" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <Phone className="w-5 h-5 text-[#00B2A9] mr-2" />
                  <span>{office.phone}</span>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Mobile View - OUTSIDE the md:flex container */}
      <div className="md:hidden -mt-10 px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          modules={[Navigation]}
        >
          {offices.map((office, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white w-full rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 h-[360px]">
                <div className="relative p-4">
                  <Image
                    src={office.image}
                    alt={office.name}
                    className={`w-full ${
                      office.isOfficeData === true ? "h-48" : "h-[320px]"
                    } object-cover rounded`}
                    width={400}
                    height={200}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-white font-bold text-lg">
                      {office.name}
                    </h3>
                  </div>
                </div>
                {office.isOfficeData === true ? (
                  <div className="p-5 space-y-3">
                    <div className="flex items-start text-gray-700 text-sm">
                      <Navigation2 className="w-5 h-5 text-[#00B2A9] mr-2" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <Phone className="w-5 h-5 text-[#00B2A9] mr-2" />
                      <span>{office.phone}</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6 mb-[2rem]">
          <button
            ref={prevRef}
            className="swiper-prev bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            ref={nextRef}
            className="swiper-next bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

// AboutSect
export const AboutSect = () => {
  const greenDescription = `<b>Established in 2014 by Sangeeta Sabharwal and Shaista Sabharwal</b>,<br/>
The Taplow Group – India is a trusted partner for organisations seeking high-impact leadership talent across <b>India, Asia & Middle East</b>. As a premier executive search and leadership advisory firm, we help businesses build strong, future-ready leadership teams`;
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Blue Box - 3/12 */}
          <div className="md:col-span-3 bg-[#005581] rounded-lg p-6 text-white">
            <h2 className="md:hidden block redhat text-4xl font-normal mb-2">
              About Taplow India
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
        "Our flagship offering. We identify senior leaders who align with your business goals and culture. Every engagement is led by senior consultants for precision, care, and strategic alignment.",
      image: Flag1,
      color: "bg-[#7BA23F]", // green
    },
    {
      title: "Interim Management",
      description:
        "We provide seasoned executives to support organisations during transformation, turnaround, or growth phases—especially within aviation and manufacturing.",
      image: Flag2,
      color: "bg-[#005581]", // blue
    },
    {
      title: "HR Advisory Services",
      description:
        "We support leadership development, succession planning, and organisation design to enable long-term leadership excellence.",
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
          <h2 className="text-4xl redhat font-base pb-[1.5rem] text-center md:text-left j">
            Our Flagship Offerings
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
            className="w-full max-w-7xl px-4"
          >
            {offerings.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[200px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
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
      "At Taplow India & Middle East, diversity in leadership is a personal and professional priority. We actively work with clients to build inclusive leadership teams, knowing that diversity fuels innovation, better decisions, and sustainable growth.",
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
