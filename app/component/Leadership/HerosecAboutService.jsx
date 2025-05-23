"use client";
import React from "react";
import heroBg from "../../assets/servicepage/leadership/BannerLeadership.webp";
import Image from "next/image";
import AboutleaderImg from "../../assets/servicepage/leadership/AboutSec.webp";
import BluePolygon from "../../assets/servicepage/leadership/BluePolygon.svg";
import GreenPolygon from "../../assets/servicepage/leadership/greenPolygon.svg";
import Icon1 from "../../assets/servicepage/leadership/Icon1.svg";
import Icon2 from "../../assets/servicepage/leadership/Icon2.svg";
import Icon3 from "../../assets/servicepage/leadership/Icon3.svg";
import Icon4 from "../../assets/servicepage/leadership/Icon4.svg";
import Icon5 from "../../assets/servicepage/leadership/Icon5.svg";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import LeftArrow from "../../assets/homePage/arrow-left.png";
import RightArrow from "../../assets/homePage/rightarrow.png";
import "swiper/css";
import "swiper/css/navigation";

export const HeroSection = () => {
  const Heading = "Finding World-Class Leadership for Exceptional Businesses";

  return (
    <div className="relative w-full h-[500px] xl:min-h-screen flex items-center overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-start justify-start md:justify-center text-white px-6 md:px-32 max-w-7xl ">
        <h2 className="text-[2rem] md:text-4xl font-normal text-left md:w-[400px] w-[330px]">
          {Heading}
        </h2>
      </div>
    </div>
  );
};

export const AboutServices = () => {
  const heading = "Our Leadership Performance and Advisory";
  const Content =
    "At The Taplow Group, we deliver leadership advisory services that elevate both individual capability and team performance. Our approach integrates deep assessment insights, leadership management expertise, and strategic advice to help organisations build high-performing, aligned, and resilient teams. From enhancing leadership potential to driving team effectiveness, we support you in navigating complexity and accelerating success through impactful, people-focused solutions.";

  return (
    <>
      <div className="mx-auto  relative mt-[10rem] mb-[4rem] md:mt-6 md:mb-[2rem] w-full max-w-7xl px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row  gap-0 ">
          {/* Left Section: Content */}
          <div className="relative w-full md:left-[2rem]  bg-[#859839] p-6 md:p-6 shadow-xl text-white rounded-lg  flex flex-col justify-center hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
            {/* Blue Bar on Top */}
            <div className="absolute -top-2 left-[2rem] w-[70px] h-2 bg-[#024996] rounded-md"></div>
            <h2 className="text-[28px] redhat font-normal mb-2 leading-relaxed text-left">
              {heading}
            </h2>
            <div className="mb-4 w-[300px] h-[2px] bg-[#024996] "></div>
            <p className="text-sm md:text-[15px] leading-snug redhat">
              {Content}
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="w-full ">
            <Image
              src={AboutleaderImg}
              alt="Executive Search"
              className="w-[100%] h-full object-fill rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const ServicesSection = () => {
  const data = [
    {
      title: "Team Performance Enhancement",
      polygon: BluePolygon,
      items: [
        "Executive Team Program",
        "Team Performance Optimization",
        "Strategic Workshop Facilitation",
      ],
      icon: Icon1,
      id: "team-performance",
    },
    {
      title: "Leadership Development",
      polygon: GreenPolygon,
      items: [
        "Leadership Development Programs",
        "Executive Onboarding and Coaching",
        "High Performing Executive Program",
      ],
      icon: Icon2,
      id: "leadership-development",
    },
    {
      title: "Change Management",
      polygon: BluePolygon,
      items: [
        "Change Strategy Development",
        "Stakeholder Engagement",
        "Communication Planning & Execution",
        "Change Leadership Development",
        "Change Implementation Planning",
        "Change Sustainability & Reinforcement",
      ],
      icon: Icon3,
      id: "change-management",
    },
    {
      title: "Assessment Insights",
      polygon: GreenPolygon,
      items: [
        "Exec Success Profiling",
        "Talent Mapping and Succession Planning",
        "Assessment for Recruitment",
        "Organizational Assessment",
      ],
      icon: Icon4,
      id: "assessment-insights",
    },
    {
      title: "Advisory Services",
      polygon: BluePolygon,
      items: [
        "Leadership Advisory Services",
        "Organizational Performance Optimization",
        "Organizational Competency Development",
        "Well-being & Psychological Safety",
        "Diversity and Inclusion Advisory",
      ],
      icon: Icon5,
      id: "advisory-services",
    },
  ];
  // for section scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#F0F0F0] py-12 px-4 md:px-10">
      <div className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative text-center cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {/* Polygon Background with Overlay Text */}
                <div className="relative ">
                  <Image
                    src={item.polygon}
                    alt="polygon"
                    className="w-full h-[700px] "
                  />

                  <div className="absolute inset-0 flex flex-col justify-between items-center px-4 py-6 text-white">
                    {/* Title */}
                    <h3 className="text-[18px] text-wrap w-[120px] md:w-full font-semibold leading-tight text-[#006174] text-center py-8  xl:px-10">
                      {item.title}
                    </h3>

                    {/* Points */}
                    <ul className="font-normal space-y-2 flex flex-col justify-center items-center">
                      {item.items.map((point, i) => (
                        <React.Fragment key={i}>
                          <li className="text-[13px]  px-[5rem] xl:px-6">
                            {point}
                          </li>
                          {item.items.length !== 0 &&
                          i !== item.items.length - 1 ? (
                            <div className="bg-white px-8 h-[1px] w-1/2 md:w-2/3"></div>
                          ) : null}
                        </React.Fragment>
                      ))}
                    </ul>

                    {/* Icon */}
                    <div className="mt-3">
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className=" xl:hidden flex justify-center items-center gap-6 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
              activeIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "bg-[#005581] border-gray-300 hover:bg-gray-200"
            }`}
            disabled={activeIndex === 0}
          >
            <Image src={LeftArrow} alt="Previous" width={20} height={20} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
              activeIndex >= data.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "bg-[#005581] border-gray-300 hover:bg-gray-200"
            }`}
            disabled={activeIndex >= data.length - 1}
          >
            <Image src={RightArrow} alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
