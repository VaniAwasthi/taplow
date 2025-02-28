"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useRef, useState } from "react";

// Import images
import Digi from "../../assets/homePage/digi.png";
import Financial from "../../assets/homePage/financial.webp";
import Notforprofit from "../../assets/homePage/notforprofit.png";
import Realestate from "../../assets/homePage/realestate.webp";
import Consumer from "../../assets/homePage/consumer.webp";
import Industrial from "../../assets/homePage/Industrial.webp";
import Life from "../../assets/homePage/lifeSci.webp";
import Professional from "../../assets/homePage/professional.webp";
import LeftArrow from "../../assets/homePage/arrow-left.png";
import RightArrow from "../../assets/homePage/rightarrow.png";

const industries = [
  {
    title: "Consumer Products",
    text: "Driven by a passion to expedite change.",
    image: Consumer,
  },
  {
    title: "Financial Services",
    text: "Delivering excellence in financial leadership.",
    image: Financial,
  },
  {
    title: "Digital and ICT",
    text: "Innovating through technology and ICT solutions.",
    image: Digi,
  },
  {
    title: "Not for Profit",
    text: "Empowering social causes with leadership.",
    image: Notforprofit,
  },
  {
    title: "Industrial",
    text: "Optimizing supply chains with expert leadership.",
    image: Industrial,
  },
  {
    title: "Life Sciences",
    text: "Advancing healthcare and biotech solutions.",
    image: Life,
  },
  {
    title: "Professional Services",
    text: "Enhancing advisory and leadership excellence.",
    image: Professional,
  },
  {
    title: "Real Estate",
    text: "Market insights and sustainable growth strategies.",
    image: Realestate,
  },
];

const IndustrySlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl text-center md:text-left font-semibold mb-6 ">
        Industries We Serve
      </h2>

      {/* Swiper Slider */}
      <Swiper
        key={industries.length}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
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
          768: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false }, // ✅ Prevent weird centering issues
          480: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false }, // ✅ Slight preview on mobile
          0: { slidesPerView: 1, spaceBetween: 5, centeredSlides: false }, // ✅ Fix for smallest screens
        }}
      >
        {industries.map((industry, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <div
                className={`relative w-[275px] h-[280px] rounded-2xl overflow-hidden transition-transform duration-300 group ${
                  index % 2 === 0 ? "lg:mb-[4rem]" : "lg:mt-[4rem]"
                }`}
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>

                  {/* Text Content */}
                  <div
                    className="absolute w-full px-4 text-white transition-all duration-300 bottom-4 text-left
                    group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:text-center"
                  >
                    <h3 className="px-2 font-semibold transition-all duration-300 group-hover:text-lg">
                      {industry.title}
                    </h3>
                    <p className="text-sm opacity-100 transition-all duration-300 px-2 py-2">
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
