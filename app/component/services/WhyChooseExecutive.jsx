"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import your images
import LeftArrow from "../../assets/servicepage/arrow-lef.png";
import RightArrow from "../../assets/homePage/rightarrow.png";
import Icon1 from "../../assets/servicepage/Icon1.png";
import Icon2 from "../../assets/servicepage/Icon2.png";
import Icon3 from "../../assets/servicepage/Icon3.png";
import Icon4 from "../../assets/servicepage/Icon4.png";

const WhyChooseExecutive = () => {
  const heading = "Why Choose Taplow for Executive Search?";

  const cards = [
    {
      img: Icon1,
      title: "Bespoke Talent Solutions",
      desc: "Every executive role is unique. We customize searches to align with your business goals, industry trends, and leadership requirements.",
    },
    {
      img: Icon2,
      title: "Global Reach, Local Expertise",
      desc: "With consultants across key global markets, we identify top talent wherever your business operates.",
    },
    {
      img: Icon3,
      title: "Deep Industry Knowledge",
      desc: "Our sector specialists understand the challenges and opportunities specific to your industry.",
    },
    {
      img: Icon4,
      title: "Commitment to Long-Term Success",
      desc: "Our candidates aren’t just hires—they are future leaders who drive transformation and growth.",
    },
    {
      img: Icon3,
      title: "Deep Industry Knowledge",
      desc: "Our sector specialists understand the challenges and opportunities specific to your industry.",
    },
    {
      img: Icon4,
      title: "Commitment to Long-Term Success",
      desc: "Our candidates aren’t just hires—they are future leaders who drive transformation and growth.",
    },
  ];
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <div className="relative bg-[#f0f0f0] ">
      <div className=" container mx-auto max-w-7xl py-10 px-4">
        <div className="block md:flex items-center md:justify-between justify-center mt-4 mb-[2rem]">
          <h2 className="text-3xl font-regular text-center md:text-center redhat md:w-[300px] ">
            {heading}
          </h2>
          {/* navigation */}
          <div className="hidden md:flex justify-center items-center gap-6 mt-6">
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
                activeIndex >= cards.length - 4
                  ? "opacity-50 border-[#005581] cursor-not-allowed"
                  : "bg-gray border-[#005581] hover:bg-gray-200"
              }`}
              disabled={activeIndex >= cards.length - 4}
            >
              <Image src={RightArrow} alt="Next" width={20} height={20} />
            </button>
          </div>
        </div>
        <Swiper
          key={cards.length}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={5}
          slidesPerView={4}
          loop={true} // ✅ Enable loop for better UX
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setSwiperInstance(swiper);
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            1280: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
            480: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
            0: { slidesPerView: 1, spaceBetween: 5, centeredSlides: false },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-xl border border-[#CFCFCF] shadow-md text-left w-full max-w-[300px] h-[350px] ">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={50}
                    height={50}
                    className="mb-4 transition-transform duration-300 hover:scale-105"
                  />
                  <h3 className="text-xl font-bold text-[#005581] w-[200px]">
                    {card.title}
                  </h3>
                  <div className=" my-[1rem] w-[200] h-[1px] bg-[#859839] "></div>
                  <p className="text-[#666666] w-[200px] mt-2 text-sm">
                    {card.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Navigation Buttons */}
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
              activeIndex >= cards.length - 4
                ? "opacity-50 border-[#005581] cursor-not-allowed"
                : "bg-gray border-[#005581] hover:bg-gray-200"
            }`}
            disabled={activeIndex >= cards.length - 4}
          >
            <Image src={RightArrow} alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseExecutive;
