"use client";
import React, { useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import LeftArrow from "../../assets/servicepage/arrow-lef.png";
import RightArrow from "../../assets/homePage/rightarrow.png";
import test1 from "../../assets/servicepage/flags/test01.png";
import test2 from "../../assets/servicepage/flags/test02.png";
import test3 from "../../assets/servicepage/flags/test03.png";
import test4 from "../../assets/servicepage/flags/test04.png";
import test5 from "../../assets/servicepage/flags/test05.png";
import Image from "next/image";
const ExecutiveSearchProcess = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const steps = [
    {
      title: "Understanding Your Needs",
      description:
        "We start by aligning with your strategic goals, company culture, and leadership expectations.",
      bgImage: test1,
    },
    {
      title: "Talent Identification",
      description:
        "Using our extensive network and research tools, we identify the best candidates globally.",
      bgImage: test2,
    },
    {
      title: "Comprehensive Assessment",
      description:
        "We evaluate candidates not just on experience but on leadership potential, cultural fit, and future readiness.",
      bgImage: test3,
    },
    {
      title: "Compensation Structure",
      description:
        "From interviews to compensation structuring, we guide you in securing the right leader.",
      bgImage: test4,
    },
    {
      title: "Onboarding & Integration",
      description:
        "Our support extends beyond hiring, ensuring a seamless leadership transition for long-term impact.",
      bgImage: test5,
    },
  ];
  const ExecutiveData = {
    heading: " Our Executive Search Process",
    subHeading:
      "Our structured, data-driven approach ensures you hire the best executive talent while mitigating risks.",
  };
  return (
    <>
      <div className="py-10 px-5 mt-[2rem] text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl  text-[#111D15] redhat mb-6">
            {ExecutiveData.heading}
          </h2>
          <p className="text-[#666666] redhat font-normal mb-8 ">
            {ExecutiveData.subHeading}
          </p>
          <Swiper
            key={steps.length}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={2}
            slidesPerView={5}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setSwiperInstance(swiper);
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              1280: { slidesPerView: 5, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 15 },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: false,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
              },
              0: { slidesPerView: 1, spaceBetween: 5, centeredSlides: true },
            }}
          >
            {steps.map((step, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="w-full flex flex-col justify-center items-center md:mx-[1rem]">
                  <p className="text-sm text-[#666666] md:w-[200px] px-4 md:px-1 text-center md:text-left">
                    {step.description}
                  </p>
                  <div
                    className="h-96 flex items-center w-[210px] transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
                    style={{
                      background: `url(${step.bgImage.src})center center / contain no-repeat`,
                    }}
                  >
                    <h3 className="text-base md:pt-[2rem] md:px-1 w-8/12 md:w-5/12 md:mx-4 font-light text-white mb-2 px-[1rem] pt-[1rem]">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex md:hidden justify-center items-center gap-6 mt-6">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
              activeIndex === 0
                ? "opacity-50 border-[#005581] cursor-not-allowed"
                : "bg-[#005581] border-[#005581]  hover:bg-gray-200"
            }`}
            disabled={activeIndex === 0}
          >
            <Image
              src={LeftArrow}
              className="rotate-180"
              alt="Previous"
              width={10}
              height={10}
            />
          </button>

          <button
            onClick={() => swiperInstance?.slideNext()}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
              activeIndex >= steps.length - 4
                ? "opacity-50 border-[#005581] cursor-not-allowed"
                : "bg-gray border-[#005581] hover:bg-gray-200"
            }`}
            disabled={activeIndex >= steps.length - 4}
          >
            <Image src={RightArrow} alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
    </>
  );
};
export default ExecutiveSearchProcess;
