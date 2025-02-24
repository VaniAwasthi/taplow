"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import "swiper/css";
import BgImag from "../../Assest/homePage/chess-piece.png";
import ButtonImage from "../../Assest/homePage/btn-img.svg";
import HoverImage from "../../Assest/homePage/hover.svg";
import LeftArrow from "../../Assest/homePage/left.png";
import RightArrow from "../../Assest/homePage/rightarrow.png";
import Button from "@/app/component/Button";

const slides = [
  {
    id: 1,
    title: "See beyond with",
    title2: "The Taplow Group",
    description:
      "We go beyond traditional executive search, leadership advisory, interim management, and board consulting to help you build future-ready leadership. Look ahead, think bigger, and see beyond the expected.",
    buttonText: "Know More",
    image: BgImag,
  },
  {
    id: 2,
    title: "See beyond with ",
    title2: "The Taplow Group",
    description:
      "We go beyond traditional executive search, leadership advisory, interim management, and board consulting to help you build future-ready leadership. Look ahead, think bigger, and see beyond the expected.",
    buttonText: "Read More",
    image: BgImag,
  },
];

export default function Carousel() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setActiveIndex(swiperRef.current.realIndex);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={false}
        loop={false}
        navigation={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex); // Ensure initial index is set
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#005581] opacity-90"></div>

            {/* Background Image */}
            <Image
              src={slide.image}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 mix-blend-overlay"
            />

            {/* Content Section - Aligned to Left Center */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full pl-8 md:pl-32 max-w-xl text-white redhat">
              <h2 className="text-3xl md:text-5xl font-normal redhat py-2">
                {slide.title}
              </h2>
              <h2 className="text-3xl md:text-5xl font-normal redhat py-2">
                {slide.title2}
              </h2>
              <div
                className="my-6 h-[1px] w-[320px]"
                style={{
                  background:
                    "linear-gradient(to right, #D9D9D9 30%, #96A94A 30%)",
                }}
              ></div>

              <p className="mt-4 text-xs md:text-[16px] leading-snug redhat">
                {slide.description}
              </p>

              {/* Button */}
              <div className="mt-[2rem] mb-[2rem]">
                <Button
                  // className="mt-[3rem] mb-[3rem]"
                  text={slide.buttonText}
                  onClick={() => console.log("Button Clicked!")}
                  buttonImage={ButtonImage}
                  hoverImage={HoverImage}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons - Positioned at Bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <button
          onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
            activeIndex === 0
              ? "bg-transparent text-white border-white opacity-50 cursor-not-allowed"
              : "bg-white text-black border-white hover:bg-gray-200"
          }`}
          disabled={activeIndex === 0}
        >
          <Image src={LeftArrow} alt="leftarrow" />
        </button>

        <button
          onClick={() => swiperRef.current && swiperRef.current.slideNext()}
          className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
            activeIndex === slides.length - 1
              ? "bg-[#CACACA] text-white border-white opacity-50 cursor-not-allowed"
              : "bg-white text-black border-white hover:bg-gray-200"
          }`}
          disabled={activeIndex === slides.length - 1}
        >
          <Image src={RightArrow} alt="rightarrow" />
        </button>
      </div>
    </div>
  );
}
