"use client";
import React, { useEffect, useState } from "react";
import heroBg from "../../assets/servicepage/EntrimMangement/Banner.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import NextArrow from "../../assets/homePage/NextArrow.png";
import PrevArrow from "../../assets/homePage/prev-arrow.png";
import BoardImage from "../../assets/servicepage/EntrimMangement/AbotImage.webp";
import offer1 from "../../assets/servicepage/EntrimMangement/offer1.webp";
import offer2 from "../../assets/servicepage/EntrimMangement/offer2.webp";
import offer3 from "../../assets/servicepage/EntrimMangement/offer3.webp";
import Success1 from "../../assets/globalpage/CaseStudies/FranceCase1.webp";
import Success2 from "../../assets/globalpage/CaseStudies/FranceCase2.webp";
import Success3 from "../../assets/globalpage/CaseStudies/FranceCase3.webp";
import Success4 from "../../assets/globalpage/CaseStudies/FranceCase4.webp";
import Icon1 from "../../assets/servicepage/EntrimMangement/chooseIcon1.svg";
import Icon2 from "../../assets/servicepage/EntrimMangement/chooseIcon2.svg";
import Icon3 from "../../assets/servicepage/EntrimMangement/chooseIcon3.svg";
import Icon4 from "../../assets/servicepage/EntrimMangement/chooseIcon4.svg";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import CaseStudies from "../coun-layout/CaseStudies";
import Faq from "../services/Faq";
export const HeroSectionEntrim = () => {
  const Heading = "Rapid Leadership. Real Results.";
  const Description =
    "When your business faces transformation, transition, or disruption, Taplow Executive Interim delivers impact fast. We provide experienced interim executives and senior specialists across HR, Finance, Sales and Technology to lead changes, stabilize operations, or drive critical projects.";
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

export const AboutEntrim = () => {
  const heading = "Our Executive Interim Management Expertise";
  const Content = `At The Taplow Group, we understand that not every leadership need can wait for a permanent hire. Business transformations, crisis recovery, mergers, or sudden leadership exits demand immediate, experienced, and decisive leadership.<br/>
Our Executive Interim Management solution places highly qualified senior executives into your organization on a short-term basis—individuals who are not only skilled in managing complexity but who embed quickly, take ownership, and deliver tangible results.<br/><br/>
From C-suite leaders to functional experts, our interim professionals are ready to step in from day one. Whether it's managing a crisis, executing strategy, or filling urgent gaps, we ensure business continuity and strategic momentum—without long-term commitments.<br/>
These are career interims—many with over a decade of experience—who bring fresh perspective, objective insight, and focused execution to the table. We match leaders not just by skillset, but by strategic fit, culture, and business need, often within days of engagement.`;
  return (
    <>
      <div className="mx-auto relative mt-[2rem] mb-[4rem] md:mt-6 md:mb-[2rem] w-full max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-0">
          {/* Left Section: Image */}
          <div className="w-full md:w-[100%] h-[200px] md:h-[600px] lg:h-[550px]">
            <Image
              src={BoardImage}
              alt="Executive Search"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right Section: Content */}
          <div className="relative w-full md:w-[85%] top-0 md:top-[2rem] md:left-[-3rem] bg-[#859839] p-6 md:p-6 shadow-xl text-white rounded-lg flex flex-col justify-center hover:scale-105 transition-transform duration-300 hover:cursor-pointer h-[500px]">
            {/* Blue Bar on Top */}
            <div className="absolute -top-2 left-[2rem] w-[70px] h-2 bg-[#024996] rounded-md"></div>

            <h2 className="text-[25px] md:text-[28px] redhat font-normal md:mt-1 mt-2 mb-2 leading-relaxed text-left">
              {heading}
            </h2>

            <div className="mb-4 w-[200px] h-[4px] bg-[#024996]"></div>

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
export const OurOfferingEntrim = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const data = {
    heading: "Our Executive Interim Management Offerings",
    content:
      "Taplow Executive Interim delivers the expertise you need—exactly when you need it.",
  };
  const Offering = [
    {
      id: 1,
      heading: "Transformation & Change Management",
      content:
        "Support for restructuring, digital transformation, cultural change, and business model shifts.",
      img: offer1,
    },
    {
      id: 2,
      heading: "Crisis Management & Turnaround",
      content:
        "Rapid stabilisation through skilled leadership during disruption, loss, or organizational risk.",
      img: offer2,
    },
    {
      id: 3,
      heading: "Leadership Gaps & Continuity",
      content:
        "Interim CEOs, CFOs, COOs, CHROs and functional heads to bridge leadership transitions.",
      img: offer3,
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
export const WhyChooseEntrimManagement = () => {
  const heading = "Why Choose The Taplow Group for Interim Leadership?";

  const cards = [
    {
      img: Icon1,
      title: "Speed and Precision",
      desc: "We act fast. From brief to placement, our process delivers the right fit, often in a matter of days.",
    },
    {
      img: Icon2,
      title: "Access to Career Interims",
      desc: "Our network includes proven C-suite leaders who specialize in short-term mandates and thrive in high-stakes environments.",
    },
    {
      img: Icon3,
      title: "Global Reach,Local Insight",
      desc: "With offices across 4 continents, we provide international capability with on-the-ground expertise tailored to your market.",
    },
    {
      img: Icon4,
      title: "Structured, Insight-Led Approach",
      desc: "From role scoping to onboarding, performance monitoring to final review, we provide end-to-end support for mission success.",
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

export const SuccesStoryEntrim = () => {
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Interim Managing Director in the Industrial sector",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/InterimManagingDirectorintheIndustyfield.pdf",
    },
    {
      image: Success2,
      title: "R & D Director",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/TheTaplowGroupInterimExecutiveRDDirectorCaseStudy.pdf",
    },
    {
      image: Success3,
      title: "Interim Managing Director in the Industry field",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/InterimManagingDirectorintheIndustrialsector.pdf",
    },
    {
      image: Success4,
      title: "Interim Human Resources Director",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/InterimHumanResourcesDirector.pdf",
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
export const IntrimFaq = () => {
  const FaqData = [
    {
      index: 1,
      question: "What is Executive Interim Management?",
      answer:
        "It’s the placement of highly experienced leaders in senior roles for a defined period to manage specific challenges, transitions, or projects.",
    },
    {
      index: 2,
      question: "When should a company consider an interim executive?",
      answer:
        " During transformation, leadership gaps, crisis situations, M&A activities, or when specific expertise is needed for strategic execution.",
    },
    {
      index: 3,
      question: " How quickly can you place an interim executive?",
      answer:
        "Often within 5–10 business days, thanks to our global network and streamlined assessment process.",
    },
    {
      index: 4,
      question: "What levels of leadership do you provide?",
      answer:
        "We provide C-level executives (CEO, CFO, COO, CHRO, etc.), functional leaders, board-level support, and programme/project heads.",
    },
    {
      index: 5,
      question: "Are your interim executives full-time employees?",
      answer:
        " No—they are independent, contract-based professionals engaged for the duration of the assignment, with no long-term obligations.",
    },
    {
      index: 6,
      question: "Can interim leaders transition to permanent roles?",
      answer:
        "While the primary goal is short-term delivery, some clients choose to transition interims to full-time positions when mutually beneficial.",
    },
  ];
  return (
    <>
      <Faq heading="Frequently Asked Questions (FAQs)" FaqData={FaqData} />
    </>
  );
};
