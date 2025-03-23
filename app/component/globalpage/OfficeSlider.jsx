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
  MapPin,
  Phone,
  Mail,
  Navigation2,
} from "lucide-react";
import SliderImg1 from "../../assets/Consultantpage/heroImage.webp";
import SliderImg2 from "../../assets/globalpage/officeSlide.webp";

const offices = [
  {
    id: 1,
    name: "Stockholm",
    image: SliderImg1,
    address:
      "Taplow Sweden(A-Search ABC)O WeWork, Malmskillnadsgatan 32 111 51 Stockholm",
    phone: "604-687-6464",
    email: "ericmacdonald@searchgroup.com",
  },
  {
    id: 2,
    name: "Gothenburg",
    image: SliderImg2,
    address:
      "Taplow Sweden(A-Search ABC)O WeWork, Malmskillnadsgatan 32 111 51 Stockholm",
    phone: "604-687-6464",
    email: "ericmacdonald@searchgroup.com",
  },
  {
    id: 3,
    name: "Malmö",
    image: SliderImg1,
    address:
      "Taplow Sweden(A-Search ABC)O WeWork, Malmskillnadsgatan 32 111 51 Stockholm",
    phone: "604-687-6464",
    email: "ericmacdonald@searchgroup.com",
  },
  {
    id: 4,
    name: "Malmö",
    image: SliderImg1,
    address:
      "Taplow Sweden(A-Search ABC)O WeWork, Malmskillnadsgatan 32 111 51 Stockholm",
    phone: "604-687-6464",
    email: "ericmacdonald@searchgroup.com",
  },
];

const OfficeSlider = () => {
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
          Our Office in Sweden
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative -mt-10 ">
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
          {offices.map((office, index) => (
            <SwiperSlide key={office.id}>
              <div className="flex items-center justify-center mb-10">
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Image with Overlay */}
                  <div className="relative p-4">
                    <Image
                      src={office.image}
                      alt={office.name}
                      className="w-full h-48 object-cover"
                    />
                    {/* Office Name Overlay */}
                    <div className="absolute bottom-0 left-0 w-full  p-6">
                      <h3 className="text-white font-bold text-lg">
                        {office.name}
                      </h3>
                    </div>
                  </div>

                  {/* Office Details */}
                  <div className="p-5 space-y-3">
                    {/* Address */}
                    <div className="flex items-start text-gray-700 text-sm">
                      <Navigation2 className="w-5 h-5 text-[#00B2A9] mr-2" />
                      <span>{office.address}</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center text-gray-700 text-sm">
                      <Phone className="w-5 h-5 text-[#00B2A9] mr-2" />
                      <span>{office.phone}</span>
                    </div>

                    {/* Email */}
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
