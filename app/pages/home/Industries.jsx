"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useRef, useState } from "react";

// Import images
import Digi from "../../Assest/homePage/digi.png";
import Financial from "../../Assest/homePage/financial.png";
import Consumer from "../../Assest/homePage/consumer.png";
import Notforprofit from "../../Assest/homePage/notforprofit.png";
import LeftArrow from "../../Assest/homePage/arrow-left.png";
import RightArrow from "../../Assest/homePage/rightarrow.png";

const industries = [
  {
    title: "Consumer Products",
    text: "Driven by a passion to expedite change in our pursuit.",
    image: Consumer,
  },
  {
    title: "Financial Services",
    text: "Driven by a passion to expedite change in our pursuit.",
    image: Financial,
  },
  {
    title: "Digit and ICT",
    text: "Driven by a passion to expedite change in our pursuit.",
    image: Digi,
  },
  {
    title: "Not for Profit",
    text: "Driven by a passion to expedite change in our pursuit.",
    image: Notforprofit,
  },
  {
    title: "Industrial",
    text: "Optimizing operations and supply chains with industry-specific leadership.",
    image: Consumer,
  },
  {
    title: "Life Sciences",
    text: "Advancing healthcare innovation with specialized leadership and compliance expertise.",
    image: Financial,
  },
  {
    title: "Professional Services",
    text: "Enhancing client service through expert advisory and leadership solutions.",
    image: Digi,
  },
  {
    title: "Real Estate",
    text: "Delivering market insights and leadership for sustainable property growth.",
    image: Notforprofit,
  },
];

const IndustrySlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6 px-[1rem]">
        Industries We Serve
      </h2>

      {/* Swiper Slider */}
      <Swiper
        key={industries.length}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        centeredSlides={false}
        slidesPerView={4}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSwiperInstance(swiper);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          1280: { slidesPerView: 4, spaceBetween: 10, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 10, centeredSlides: false },
          768: { slidesPerView: 2, spaceBetween: 10, centeredSlides: true },
          0: { slidesPerView: 1, spaceBetween: 5, centeredSlides: true },
        }}
      >
        {industries.map((industry, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              {/* Wrapper to ensure proper bounding */}
              <div
                className={`relative w-[275px] h-[280px] rounded-2xl overflow-hidden transition-transform duration-300 group ${
                  index % 2 === 0 ? "lg:mb-[4rem]" : "lg:mt-[4rem]"
                }`}
              >
                {/* Image with Wrapper */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  {/* Image */}
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />

                  {/* Strictly Contained Overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>

                  {/* Title & Text (Ensured it's contained within the image box) */}
                  <div
                    className="absolute w-full px-4 text-white transition-all duration-300 bottom-4 text-left
                    group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:text-center"
                  >
                    <h3 className="text-base font-semibold transition-all duration-300 group-hover:text-lg">
                      {industry.title}
                    </h3>
                    <p className="text-xs opacity-100 transition-all duration-300">
                      {industry.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Navigation Buttons */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
            activeIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "bg-[#005581] border-gray-300 hover:bg-gray-200"
          }`}
          disabled={activeIndex === 0}
        >
          <Image src={LeftArrow} alt="Previous" width={20} height={20} />
        </button>

        <button
          onClick={() => swiperInstance?.slideNext()}
          className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
            activeIndex >= industries.length - 4
              ? "opacity-50 cursor-not-allowed"
              : "bg-gray border-gray-300 hover:bg-gray-200"
          }`}
          disabled={activeIndex >= industries.length - 4}
        >
          <Image src={RightArrow} alt="Next" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default IndustrySlider;
