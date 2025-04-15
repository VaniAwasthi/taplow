"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Navigation2,
  MailIcon,
} from "lucide-react";
import { FaEnvelope } from "react-icons/fa6";

const OfficeSlider = ({ heading, officeData }) => {
  const [hovered, setHovered] = useState(null);
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
          {heading}
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative -mt-10 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          modules={[Navigation]}
        >
          {officeData.map((office, index) => (
            <SwiperSlide key={office.id}>
              <div className="flex items-center justify-center mb-10">
                {office.image ? (
                  // 👉 Card with Image
                  <div
                    className="bg-white md:w-[350px] rounded-lg shadow-lg overflow-hidden max-w-sm transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Image with Overlay */}
                    <div className="relative p-4">
                      <Image
                        src={office.image}
                        alt={office.name}
                        className="w-full h-48 object-cover rounded"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-6">
                        <h3 className="text-white font-bold text-lg">
                          {office.name}
                        </h3>
                      </div>
                    </div>

                    {/* Office Details */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-start text-gray-700 text-sm">
                        <Navigation2 className="w-5 h-5 text-[#00B2A9] mr-2" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <Phone className="w-5 h-5 text-[#00B2A9] mr-2" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <Mail className="w-5 h-5 text-[#00B2A9] mr-2" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-[#00B2A9] hover:underline"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  // 👉 Card Without Image (Like Image You Uploaded)
                  <div className="bg-[#9DB54D] text-white p-6 rounded-md max-w-sm shadow-lg h-[368px] md:w-[340px]">
                    <div className="flex">
                      <div className="my-4 h-[2px] w-[10%] bg-white"></div>
                      <h2 className="text-xl w-1/4 font-semibold mb-4">
                        {office.name}
                      </h2>
                      <div className="my-4 h-[2px] w-[100%] bg-white"></div>
                    </div>
                    <div className="space-y-3 text-md w-[80%]">
                      <div className="flex items-start gap-2">
                        <Navigation2 className="w-9 h-9 text-white mt-1" />
                        <p>{office.address}</p>
                      </div>
                      <div className="flex items-center gap-2 pt-3">
                        <Phone className="w-5 h-5 text-white" />
                        <p>{office.phone}</p>
                      </div>
                      <div className="flex items-center text-gray-700 text-sm mt-4">
                        <Mail className="w-6 h-6 text-white mr-2" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-white hover:underline"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
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

export default OfficeSlider;
