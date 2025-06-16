"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import "swiper/css";
import BgImag from "../../assets/homePage/Hersecbg2.png";
import BgImag2 from "../../assets/homePage/HeroBannner2.webp";
import BgImag3 from "../../assets/homePage/HeroBannner3.webp";
import ButtonImage from "../../assets/homePage/btn-img.svg";
import HoverImage from "../../assets/homePage/hover.svg";
import LeftArrow from "../../assets/homePage/left.png";
import RightArrow from "../../assets/homePage/rightarrow.png";
import BannerLayout from "../utilities/BannerLayout";

const slides = [
  {
    id: 1,
    title: "See beyond with",
    title2: "The Taplow Group",
    description:
      "We go beyond traditional executive search, leadership advisory, interim management, and board consulting to help you build future-ready leadership. Look ahead, think bigger, and see beyond the expected.",
    buttonText: "Know More",
    image: BgImag,
    buttonImage: require("../../assets/homePage/btn-img.svg").default,
    href: "#",
  },
  {
    id: 2,
    title: "Connecting Talent ",
    title2: "Locally and Across Globe",
    description: "",
    buttonText: "Know More",
    image: BgImag2,
    buttonImage: require("../../assets/homePage/btn-img.svg").default,
    href: "#",
  },
  {
    id: 3,
    title: "Sourcing the Leaders ",
    title2: "of Tomorrow ",
    description: "Executive Search Services across 17 countries",
    buttonText: "Know More",
    image: BgImag3,
    buttonImage: require("../../assets/homePage/btn-img.svg").default,
    href: "#",
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
    <div className="relative w-full h-[700px] md:min-h-screen">
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
            <BannerLayout
              image={slide.image}
              title={slide.title}
              title2={slide.title2}
              description={slide.description}
              buttonText={slide.buttonText}
              hoverImage={HoverImage}
              // href={slide.href}
              BgClassname="object-cover w-full h-full object-center "
              // zIndex="1"
            />
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
