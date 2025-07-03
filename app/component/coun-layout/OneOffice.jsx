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
} from "lucide-react";

const OneOffice = ({ heading, officeData }) => {
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
      <div className="bg-[#005581] py-20 relative w-full">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-4xl font-normal mb-4">
          {heading}
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative -mt-10 ">
        <div className="flex flex-col md:flex-row items-center gap-2 justify-center mb-10">
          <div className="bg-white w-[320px] md:w-[340px] rounded-lg shadow-xl overflow-hidden max-w-sm transition-all duration-300 hover:scale-105">
            {/* Image with Overlay */}
            <div className="relative p-2">
              <Image
                src={officeData.image}
                alt={officeData.name}
                className="w-full h-[320px] object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-[#9DB54D] w-[320px] text-white p-6 rounded-md max-w-sm shadow-lg h-[320px] md:w-[340px]">
            <div className="flex">
              <div className="my-4 h-[2px] w-[10%] bg-white"></div>
              <h2 className="text-xl w-2/4 font-semibold mb-4">
                {officeData.name}
              </h2>
              <div className="my-4 h-[2px] w-[100%] bg-white"></div>
            </div>
            <div className="space-y-3 text-md w-[80%]">
              <div className="flex items-start gap-2">
                <Navigation2 className="w-9 h-9 text-white mt-1" />
                <p dangerouslySetInnerHTML={{ __html: officeData.address }}></p>
              </div>
              {officeData.phone ? (
                <div className="flex items-center gap-2 pt-3">
                  <Phone className="w-5 h-5 text-white" />
                  <p>{officeData.phone}</p>
                </div>
              ) : null}
              {/* <div className="flex items-center text-gray-700 text-sm mt-4">
                <Mail className="w-6 h-6 text-white mr-2" />
                <a
                  href={`mailto:${officeData.email}`}
                  className="text-white hover:underline"
                >
                  {officeData.email}
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneOffice;
