"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, Navigation2, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const TwoOffice = ({ Officeheading, offices }) => {
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
                className={`w-full object-cover rounded ${
                  !office.address && !office.phone ? "h-[360px]" : "h-48"
                }`}
              />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-white font-bold text-lg">{office.name}</h3>
              </div>
            </div>

            {office.address || office.phone ? (
              <div className="p-5 space-y-3">
                <div className="flex items-start text-gray-700 text-sm">
                  <Navigation2 className="w-5 h-5 text-[#00B2A9] mr-2" />
                  <span>{office.address}</span>
                </div>
                {office.phone ? (
                  <div className="flex items-center text-gray-700 text-sm">
                    <Phone className="w-5 h-5 text-[#00B2A9] mr-2" />
                    <span>{office.phone}</span>
                  </div>
                ) : null}
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
                    className="w-full h-48 object-cover rounded"
                    width={400}
                    height={200}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-white font-bold text-lg">
                      {office.name}
                    </h3>
                  </div>
                </div>

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
