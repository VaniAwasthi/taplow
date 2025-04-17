"use client";
import React, { useEffect, useState } from "react";
import HeroSecLayout from "../../component/utilities/HeroSecLayout";
import Location from "../../assets/globalpage/location.webp";

import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const GlobalpageBanner = ({ title, desc, Banner }) => {
  return (
    <>
      <HeroSecLayout
        heroBg={Banner}
        Heading={title}
        Description={desc}
        isButton={false}
        Isdivider={true}
        rightSec={false}
        headingClass="md:w-[400px] w-[250px] text-3xl md:text-5xl"
        leftSecClass="flex flex-col justify-start items-start pb-10 md:pb-20 text-left  mt-4"
        rightSecClass="flex justify-center md:justify-end"
        ImageClass="transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </>
  );
};
export const SuccessStory = ({ SuccessData, heading }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);
  return (
    <>
      <section className="bg-[#F0F0F0] py-10 md:py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col  justify-between">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-normal redhat mb-6  text-[#111D15]">
                {heading}
              </h2>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex gap-8 items-center justify-end white_arrow mb-6 md:mb-0">
                <button
                  className={`swiper-button-prev !relative !w-10 !mt-auto !h-10 z-10 p-2 rounded-full border-2  cursor-pointer ${
                    isBeginning
                      ? "bg-transparent text-[#CACACA] border-[#CACACA] disabled"
                      : "bg-[#005581] fill-white border-[#005581]"
                  }`}
                >
                  <HiOutlineChevronLeft size={20} />
                </button>

                <button
                  className={`swiper-button-next !relative !mt-auto !w-10 !h-10  z-10 p-2 rounded-full border-2  cursor-pointer ${
                    isEnd
                      ? "bg-transparent text-[#CACACA] border-[#CACACA] disabled"
                      : "bg-[#005581] text-white border-[#005581]"
                  }`}
                >
                  <HiOutlineChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="relative mt-4">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              onSwiper={setSwiperInstance}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {SuccessData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
                    style={{
                      boxShadow: `0px 9px 19px 0px #0000001A,
                                                        0px 34px 34px 0px #00000017,
                                                        0px 78px 47px 0px #0000000D,
                                                        0px 138px 55px 0px #00000003,
                                                        0px 215px 60px 0px #00000000`,
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[20rem]"
                    />
                    <p className="text-lg md:text-xl redhat font-semibold absolute bottom-4 w-3/4  left-1/2 -translate-x-2/4 mx-auto text-white z-10">
                      {slide.title}
                    </p>
                    <div
                      className={`${
                        index % 2 === 0
                          ? "bg-[#96A94A] mix-blend-multiply"
                          : "bg-black/30 mix-blend-multiply"
                      } text-white p-6 min-h-full flex items-end absolute bottom-0 w-full mx-auto`}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export const GlobalLocation = () => {
  return (
    <div className="md:max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl text-center py-4">
          Our Global Locations
        </h2>
        <Image src={Location} alt="location" />
        <div
          className="my-7 h-[2px] w-full"
          style={{
            background: "linear-gradient(to right, #D9D9D9 30%, #96A94A 30%)",
          }}
        ></div>
      </div>
    </div>
  );
};
