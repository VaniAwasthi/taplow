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
import Success1 from "../../assets/globalpage/CaseStudies/FranceCase5.webp";
import Success2 from "../../assets/globalpage/CaseStudies/FranceCase6.webp";
import Success3 from "../../assets/globalpage/CaseStudies/FranceCase7.webp";
import Success4 from "../../assets/globalpage/CaseStudies/FranceCase8.webp";
import Icon1 from "../../assets/servicepage/boardadvisory/chooseIcon1.svg";
import Icon2 from "../../assets/servicepage/boardadvisory/chooseIcon2.svg";
import Icon3 from "../../assets/servicepage/boardadvisory/chooseIcon3.svg";
import Icon4 from "../../assets/servicepage/boardadvisory/chooseIcon4.svg";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import { SuccessStory } from "../coun-layout/GlobalpageBanner";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import CaseStudies from "../coun-layout/CaseStudies";
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
          <h2 className="text-[30px] md:text-[32px] font-normal redhat font-base pb-[2px] text-center md:text-left">
            {data.heading}
          </h2>
          <p className="text-lg text-[#666666] font-normal redhat font-base pb-[0.5rem] text-center md:text-left">
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
                    className="w-full md:h-[450px] h-[480px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-3 ">
                    <h2 className="text-white text-[20px] md:text-[28px]  pb-4  font-regular">
                      {service.heading}
                    </h2>
                    <p className="text-white text-sm pb-[2rem] font-regular">
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
      image: Success1,
      title: "Organizational & Leadership Transformation",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/Organizational&LeadershipTransformation.pdf",
    },
    {
      image: Success2,
      title:
        "Shaping a High-Performing Leadership Team Through Hogan Assessment",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/Shaping aHighPerformingLeadershipTeamThroughHoganAssessment.pdf",
    },
    {
      image: Success3,
      title:
        "Coaching : Enabling Leadership Evolution in a Post-Acquisition Context",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/Evolution in a PostAcquisitionContext.pdf",
    },
    {
      image: Success4,
      title: "Customized Journey from Management to Leadership",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/CustomizedJourneyfromManagementtoLeadership.pdf",
    },
  ];

  const Successheading = "Recent Success Stories";

  return (
    <>
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-sm md:text-lg"
      />
    </>
  );
};
