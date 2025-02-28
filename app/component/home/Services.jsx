"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Executive from "../../assets/homePage/ExecutiveSearch.webp";
import ExecutiveIntrim from "../../assets/homePage/Executiveinterim.webp";
import Leadership from "../../assets/homePage/LeadershipAdvisory.webp";
import BoardAdvisory from "../../assets/homePage/BoardAdvisory.webp";
import VirtualLeadership from "../../assets/homePage/VirtualLeadership.png";
import NextArrow from "../../assets/homePage/NextArrow.png";
import PrevArrow from "../../assets/homePage/prev-arrow.png";

const services = [
  { title: "Executive Search", image: Executive, link: "/services" },
  {
    title: "Executive Interim Management",
    image: ExecutiveIntrim,
    link: "/services",
  },
  {
    title: "Leadership Advisory and Performance",
    image: Leadership,
    link: "/services",
  },
  {
    title: "Board Advisory Services",
    image: BoardAdvisory,
    link: "/services",
  },
  {
    title: "Virtual Leadership Training",
    image: VirtualLeadership,
    link: "/services",
  },
];

const ServicesSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const data = {
    heading: "Explore Our Services",
  };
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
      <div className="relative w-full flex flex-col items-start ustify-center md:justify-left space-y-6">
        <h2 className="text-4xl redhat font-base pb-[1.5rem] text-center md:text-left j">
          {data.heading}
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
                    <a href={service.link}>{service.title}</a>
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
  );
};

export default ServicesSlider;
