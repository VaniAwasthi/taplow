"use client";
import React, { useEffect, useState } from "react";
import heroBg from "../../assets/servicepage/boardadvisory/boardAdvisoryBanner.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NextArrow from "../../assets/homePage/NextArrow.png";
import PrevArrow from "../../assets/homePage/prev-arrow.png";
import BoardImage from "../../assets/servicepage/boardadvisory/BoardAdvisory.webp";
import offer1 from "../../assets/servicepage/boardadvisory/offer1.webp";
import offer2 from "../../assets/servicepage/boardadvisory/offer2.webp";
import offer3 from "../../assets/servicepage/boardadvisory/offer3.webp";
import Succes1 from "../../assets/servicepage/boardadvisory/Success1.webp";
import Succes2 from "../../assets/servicepage/boardadvisory/Success2.webp";
import Succes3 from "../../assets/servicepage/boardadvisory/Success3.webp";
import Icon1 from "../../assets/servicepage/boardadvisory/chooseIcon1.svg";
import Icon2 from "../../assets/servicepage/boardadvisory/chooseIcon2.svg";
import Icon3 from "../../assets/servicepage/boardadvisory/chooseIcon3.svg";
import Icon4 from "../../assets/servicepage/boardadvisory/chooseIcon4.svg";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import { SuccessStory } from "../coun-layout/GlobalpageBanner";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
export const HeroSection = () => {
  const Heading =
    "Guiding Boards. Empowering Leadership. Enabling Performance.";
  const Description =
    " Boards today face growing pressure to stay agile, informed, and aligned. The Taplow Group offers strategic counsel and governance insight to help leaders navigate complexity with clarity and impact.";
  return (
    <div className="relative w-full xl:min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroBg}
          alt="Background Image"
          fill
          className="object-cover w-full h-full [object-position:76%_61%] md:object-center "
          priority
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start  justify-center text-white py-14 px-6 md:px-32 max-w-7xl ">
        <h2 className="text-[2rem] md:text-[3rem] font-normal text-left md:w-[550px] w-[330px]">
          {Heading}
        </h2>
        <div
          className="my-4 h-[1px] w-[80%] md:w-[420px]  mx-0 mb-[3rem] md:mb-[1rem]"
          style={{
            background: "linear-gradient(to right, #D9D9D9 30%, #96A94A 30%)",
          }}
        ></div>

        <p className="mt-2 text-sm md:text-base leading-snug max-w-[90%] md:max-w-[450px]">
          {Description}
        </p>
      </div>
    </div>
  );
};

export const AboutBoard = () => {
  const heading = "Our Board Advisory Expertise";
  const Content = `Board leadership today demands more than oversight—it requires foresight, diversity of thought, and the ability to guide through complexity. At The Taplow Group, our consultants draw on years of executive experience and global insight to support board effectiveness, governance best practices, and leadership succession at the highest levels.<br/> <br/> Our work spans both mature and emerging markets, offering board-level advisory services to public companies, private enterprises, family-led businesses, and mission-driven organisations. Whether supporting board recruitment, refining board composition, or facilitating CEO succession planning, we help boards fulfil their responsibilities while preparing for the future.`;
  return (
    <>
      <div className="mx-auto relative mt-[2rem] mb-[4rem] md:mt-6 md:mb-[2rem] w-full max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-0">
          {/* Left Section: Image */}
          <div className="w-full md:w-[100%] h-[200px] md:h-[500px] lg:h-[500px]">
            <Image
              src={BoardImage}
              alt="Executive Search"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right Section: Content */}
          <div className="relative w-full md:w-[60%] top-0 md:top-[3rem] md:left-[-4rem] bg-[#859839] p-6 md:p-6 shadow-xl text-white rounded-lg flex flex-col justify-center hover:scale-105 transition-transform duration-300 hover:cursor-pointer h-[400px]">
            {/* Blue Bar on Top */}
            <div className="absolute -top-2 left-[2rem] w-[70px] h-2 bg-[#024996] rounded-md"></div>

            <h2 className="text-[25px] md:text-[28px] redhat font-normal md:mt-2 mt-4 mb-2 leading-relaxed text-left">
              {heading}
            </h2>

            <div className="mb-4 w-[300px] h-[2px] bg-[#024996]"></div>

            <p
              className="text-xs md:text-[15px] leading-snug redhat"
              dangerouslySetInnerHTML={{ __html: Content }}
            ></p>
          </div>
        </div>
        <div className="mt-[6rem] mb-[3rem] w-100% h-[2px] bg-[#83A790]"></div>
      </div>
    </>
  );
};
export const OurOffering = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const data = {
    heading: "Our Offerings",
    content:
      "We offer a comprehensive suite of board advisory services, including:",
  };
  const Offering = [
    {
      id: 1,
      heading: "Board & Committee Recruitment",
      content:
        "Identifying directors with the expertise, experience, and diversity to strengthen your board.",
      img: offer1,
    },
    {
      id: 2,
      heading: "Board Effectiveness Reviews",
      content:
        "Assessing the dynamics, processes, and performance of boards and committees.",
      img: offer2,
    },
    {
      id: 3,
      heading: "Director Succession Planning",
      content: "Helping boards prepare for seamless leadership transitions.",
      img: offer3,
    },
    {
      id: 4,
      heading: "Board & Committee Recruitment",
      content:
        "Identifying directors with the expertise, experience, and diversity to strengthen your board.",
      img: offer1,
    },
  ];
  useEffect(() => {
    if (swiperInstance) {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);

      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);
  return (
    <>
      <div className="container mx-auto px-4 md:max-w-7xl my-6">
        <div className="relative w-full flex flex-col md:items-start item-center justify-center md:justify-left space-y-6">
          <h2 className="text-4xl font-normal redhat font-base pb-[0.5rem] text-center md:text-left">
            {data.heading}
          </h2>
          <p className="text-xl font-normal redhat font-base pb-[0.5rem] text-center md:text-left">
            {data.content}
          </p>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            className="w-full px-4"
          >
            {Offering.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={service.img}
                    alt={service.heading}
                    className="w-full md:h-[420px] h-[480px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-5 ">
                    <h2 className="text-white text-3xl pb-9 px-4 font-regular">
                      {service.heading}
                    </h2>
                    <p className="text-white text-md pb-[2rem] font-regular">
                      {service.content}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          {!isBeginning && (
            <div
              onClick={() => swiperInstance?.slidePrev()}
              className="lg:block hidden absolute bottom-10 left-[-5rem] z-10 cursor-pointer"
            >
              <Image src={PrevArrow} alt="Prev" width={50} height={50} />
            </div>
          )}

          {!isEnd && (
            <div
              onClick={() => swiperInstance?.slideNext()}
              className="lg:block hidden absolute bottom-10 right-[-4rem] z-10 cursor-pointer"
            >
              <Image src={NextArrow} alt="Next" width={50} height={50} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export const WhyChooseBoardAdvisory = () => {
  const heading = "Why Choose The Taplow Group for Board Advisory Services?";

  const cards = [
    {
      img: Icon1,
      title: "Tailored, Independent Advice",
      desc: "We act as trusted partners, offering impartial, evidence-based advice tailored to your organisation’s context and goals.",
    },
    {
      img: Icon2,
      title: "Global Expertise, Local Understanding",
      desc: "With presence across 6 continents and over 74 countries, we bring a global lens while staying attuned to local governance standards and cultural nuances.",
    },
    {
      img: Icon3,
      title: "Senior-Level Insight",
      desc: "Our board advisers are former CEOs, board members, and senior leaders who understand boardroom dynamics first-hand.",
    },
    {
      img: Icon4,
      title: "Cross-Sector Experience",
      desc: "We serve listed firms, family-run enterprises, non-profits, and high-growth ventures across industrial, consumer, philanthropic, and aviation sectors.",
    },
  ];
  return (
    <>
      <WhyChooseExecutive
        heading={heading}
        cards={cards}
        headingClass="!text-left md:w-[500px] "
      />
    </>
  );
};

export const SuccesStoryBoard = () => {
  const SuccessStoryslidesData = [
    {
      image: Succes1,
      title: "Local BecomesGlobal",
    },
    {
      image: Succes2,
      title: "Succession at the top of a FTSE 250 organization",
    },
    {
      image: Succes3,
      title: "Leadership In The Digital Age",
    },
  ];

  const Successheading = "Recent Success Stories";
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
    <section className="bg-[#F0F0F0] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-normal redhat mb-6 text-[#111D15]">
              {Successheading}
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex gap-8 items-center justify-end white_arrow mb-6 md:mb-0 md:hidden ">
              <button
                className={`swiper-button-prev !relative !w-10 !mt-auto !h-10 z-10 p-2 rounded-full border-2  cursor-pointer ${
                  isBeginning
                    ? "bg-transparent text-[#CACACA] border-[#CACACA] disabled"
                    : "bg-[#005581] fill-white border-[#005581]"
                }`}
              >
                <HiOutlineChevronLeft size={20} />
              </button>

              <button
                className={`swiper-button-next !relative !mt-auto !w-10 !h-10 z-10 p-2 rounded-full border-2  cursor-pointer ${
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

        {/* Mobile Swiper (below md) */}
        <div className="relative mt-4 md:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {SuccessStoryslidesData.map((slide, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="relative w-full overflow-hidden transition-transform duration-300 ease-in-out">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[27rem] object-cover rounded-xl hover:scale-105"
                  />
                  <p className="text-lg md:text-2xl redhat font-semibold absolute bottom-4 w-3/4 left-[40%] -translate-x-2/4 mx-auto text-white z-10 text-left">
                    {slide.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Static Grid (md and up) */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-4">
          {SuccessStoryslidesData.map((slide, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-transform duration-300 ease-in-out"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-[27rem] object-cover rounded-xl hover:scale-105"
              />
              <p className="text-lg md:text-2xl redhat font-semibold absolute bottom-4 w-3/4 left-[40%] -translate-x-2/4 mx-auto text-white z-10 text-left">
                {slide.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
