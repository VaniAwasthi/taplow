import { useRef, useState } from "react";
import Image from "next/image";
import GoalBg from "../../assets/globalpage/India/Frame.png";
import GoalImg from "../../assets/globalpage/India/Goal.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import images
import Digi from "../../assets/homePage/digi.png";
import Financial from "../../assets/homePage/financial.webp";
import Notforprofit from "../../assets/homePage/notforprofit.png";
import Industrial from "../../assets/globalpage/India/Industrial.webp";
import Consumer from "../../assets/globalpage/India/Consumer.webp";
import Aviation from "../../assets/globalpage/India/Aviation.webp";
import Health from "../../assets/globalpage/India/Health.webp";
import LeftArrow from "../../assets/homePage/arrow-left.png";
import RightArrow from "../../assets/homePage/rightarrow.png";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import Icon1 from "../../assets/globalpage/India/Icon2.svg";
import Icon2 from "../../assets/globalpage/India/Icon1.svg";
import Icon3 from "../../assets/globalpage/India/Icon3.svg";
import Icon4 from "../../assets/globalpage/India/Icon4.svg";
export const OurGoalSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 relative">
      {/* Outer Wrapper */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-start  md:justify-center md:items-center ">
        {/* Background Content Box */}
        <div className="relative w-full rounded-lg overflow-hidden bg-[#003f63] flex flex-col md:flex-row justify-between items-start  md:justify-center md:items-center md:h-[250px] h-[400px] px-6 md:px-12 py-10 z-10">
          {/* Background Image */}
          <Image
            src={GoalBg}
            alt="Background Pattern"
            fill
            className="object-cover z-0"
          />

          {/* Text Content */}
          <div className="flex flex-col md:flex-row justify-between items-start  md:justify-center md:items-center">
            <div className="relative z-10 text-white max-w-xl text-center md:text-left ">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Our Goal
              </h2>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                To deliver a professional, high-quality experience for clients
                and candidates—rooted in trust, care, and long-term value.{" "}
                <br />
                We don’t just help hire leaders—we help build organisations.
              </p>
            </div>
          </div>
        </div>

        {/* Target Image Overlapping Top & Bottom */}
        <div className="absolute right-0  z-20">
          <Image
            src={GoalImg}
            alt="Target with Arrows"
            width={350}
            height={400}
            className="w-auto h-[300px] md:h-[450px] drop-shadow-xl md:translate-y-[-5%] translate-y-[50%]"
          />
        </div>
      </div>
    </section>
  );
};

export const SectorSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const industries = [
    {
      title: "Consumer & Retail",
      image: Consumer,
      textColor: "text-white",
    },
    {
      title: "Aviation & Aerospace",
      image: Aviation,
      textColor: "text-white",
    },
    {
      title: "Industrial & Manufacturing",
      image: Industrial,
      textColor: "text-white",
    },
    {
      title: "Philanthropy & Social Impact",
      image: Notforprofit,
      textColor: "text-black",
    },
    {
      title: "Healthcare, Pharmaceuticals & Lifesciences",
      image: Health,
      textColor: "text-black",
    },
  ];
  return (
    <div className="relative w-full max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl text-center md:text-center font-semibold mb-6 ">
        Sectors We Serve
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
          768: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
          480: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
          0: { slidesPerView: 1, spaceBetween: 5, centeredSlides: false },
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
                    className="absolute w-full px-4 transition-all duration-300 bottom-4 text-left
                    group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:text-center"
                  >
                    <h3
                      className={`px-3 py-4 font-bold text-xl transition-all duration-300 group-hover:text-xl ${industry.textColor}`}
                    >
                      {industry.title}
                    </h3>
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

export const WhyChooseIndia = () => {
  const heading = "Why Taplow India";

  const cards = [
    {
      img: Icon1,
      title: "Relationship-Led, Not Transactional",
      desc: "We don’t treat clients as accounts—we partner for the long term. We embed ourselves in your context and act as true brand ambassadors when engaging with top leadership talent.",
    },
    {
      img: Icon2,
      title: "Senior-Led Engagement",
      desc: "All mandates are personally led by senior consultants to ensure quality and consistency.",
    },
    {
      img: Icon3,
      title: "Transparent, Milestone-Based Fee Model",
      desc: "Our approach provides clarity and flexibility throughout the engagement.",
    },
    {
      img: Icon4,
      title: "Technology-Driven, Human-Centric",
      desc: "We invest in modern platforms to streamline candidate engagement and operational efficiency—without compromising on the human touch.",
    },
  ];
  return (
    <>
      <WhyChooseExecutive heading={heading} cards={cards} />
    </>
  );
};
