"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CaseStudies = ({ SuccessData, heading, textClass }) => {
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
    <section className="bg-[#F0F0F0] py-10 md:py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-normal redhat mb-6 text-[#111D15]">
              {heading}
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex gap-8 items-center justify-end white_arrow mb-6 md:mb-0">
              <button
                className={`swiper-button-prev !relative !w-10 !h-10 z-10 p-2 rounded-full border-2 cursor-pointer ${
                  isBeginning
                    ? "bg-transparent text-[#CACACA] border-[#CACACA] disabled"
                    : "bg-[#005581] text-white border-[#005581]"
                }`}
              >
                <HiOutlineChevronLeft size={20} />
              </button>

              <button
                className={`swiper-button-next !relative !w-10 !h-10 z-10 p-2 rounded-full border-2 cursor-pointer ${
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
                <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
                  {/* Image */}
                  <div className="w-full h-[25rem] relative">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      priority
                    />
                  </div>

                  {/* Bottom Gradient + Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <Link href={slide.link ? slide.link : "#"} target="_blank">
                      <p
                        className={`text-white text-sm ${textClass} font-semibold leading-snug`}
                      >
                        {slide.title}
                      </p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
