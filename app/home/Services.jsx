"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Executive from "../Assest/homePage/Executive.png";
import ExecutiveIntrim from "../Assest/homePage/ExecutiveIntrim.png";
import Leadership from "../Assest/homePage/Leadership.png";
import NextArrow from "../Assest/homePage/NextArrow.png";
import PrevArrow from "../Assest/homePage/prev-arrow.png";

const services = [
  { title: "Executive Search", image: Executive },
  { title: "Executive Interim Management", image: ExecutiveIntrim },
  { title: "Leadership Advisory and Performance", image: Leadership },
  { title: "Executive Interim Management", image: ExecutiveIntrim },
];

const ServicesSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);

      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);

  return (
    <div className="container mx-auto px-4 md:max-w-6xl">
      <div className="relative w-full flex flex-col items-start space-y-6">
        <h2 className="text-4xl redhat font-base pb-[1.5rem]">
          Explore Our Services
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
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="w-full max-w-6xl px-4"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[480px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-3 ">
                  <span className="text-white text-3xl font-regular">
                    {service.title}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        {!isBeginning && (
          <div
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute bottom-10 left-[-5rem] z-10 cursor-pointer"
          >
            <Image src={PrevArrow} alt="Prev" width={50} height={50} />
          </div>
        )}

        {!isEnd && (
          <div
            onClick={() => swiperInstance?.slideNext()}
            className="absolute bottom-10 right-[-4rem] z-10 cursor-pointer"
          >
            <Image src={NextArrow} alt="Next" width={50} height={50} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSlider;
