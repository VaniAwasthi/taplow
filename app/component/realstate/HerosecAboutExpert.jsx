"use client";
import Banner from "../../assets/sectors/RealstateBanner.webp";
import AboutImage from "../../assets/sectors/AboutRealstate.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NextArrow from "../../assets/homePage/NextArrow.png";
import PrevArrow from "../../assets/homePage/prev-arrow.png";
import Faq from "../services/Faq";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import Icon1 from "../../assets/sectors/RealstateChoose1.svg";
import Icon2 from "../../assets/sectors/RealstateChoose2.svg";
import Icon3 from "../../assets/sectors/RealstateChoose3.svg";
import Icon4 from "../../assets/sectors/RealstateChoose4.svg";
import Icon5 from "../../assets/sectors/RealstateChoose5.svg";
import Icon6 from "../../assets/sectors/RealstateChoose6.svg";
import { SectorBanner } from "../utilities/SectorBanner";
import offer1 from "../../assets/sectors/realstateOffer1.webp";
import offer2 from "../../assets/sectors/realstateOffer2.webp";
import offer3 from "../../assets/sectors/realstateOffer3.webp";
import offer4 from "../../assets/sectors/realstateOffer4.webp";
import offer5 from "../../assets/sectors/realstateOffer5.webp";
import offer6 from "../../assets/sectors/realstateOffer6.webp";
import { useEffect, useState } from "react";
export const RealStateHeroSec = () => {
  return (
    <>
      <SectorBanner
        textColor="text-white w-[200px] md:w-[450px]"
        textColorDes="text-white"
        Banner={Banner}
        heading="Building Leadership for a Changing Landscape"
        description="The Real estate and infrastructure are transforming rapidly, requiring strategic leadership.
Taplow’s Executive Search delivers leaders who shape people, performance, and places."
        buttonText="Know More"
      />
    </>
  );
};

export const AboutRealState = () => {
  const heading = "Our Real Estate & Infrastructure Expertise";
  const Content = `From investment management and capital markets to urban development and sustainable design, our team understands the unique demands of real estate and infrastructure leadership. Many of our consultants have worked in these industries themselves, bringing first-hand knowledge of how to balance risk, growth, and community value.
<br/><br/>We support a diverse client base, including developers, investors, asset managers, infrastructure operators, and professional services firms. Whether your priority is navigating ESG, driving operational excellence, or reshaping your team to meet new market challenges, we bring insight and clarity to every engagement.
<br/> <br/> Our <b>Real Estate Executive Search Firm</b> approach goes beyond placements. We provide nuanced advisory services—from succession planning to performance enhancement—ensuring your leadership team is built to thrive.
`;
  return (
    <>
      <div className="mx-auto relative mt-[2rem] mb-[4rem] md:mt-6 md:mb-[2rem] w-full max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          {/* Left Section: Image */}
          <div className="relative w-full md:w-[150%] h-[300px] md:h-[600px] lg:h-[600px] overflow-hidden">
            <Image
              src={AboutImage}
              alt="ConsumerProduct"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right Section: Content */}
          <div className="relative w-full md:w-[85%] md:ml-[3rem] top-0 md:top-[4rem] bg-[#859839] p-6 md:p-6 shadow-xl text-white rounded-lg flex flex-col justify-center hover:scale-105 transition-transform duration-300 hover:cursor-pointer h-[500px] z-10">
            {/* Blue Bar on Top */}
            <div className="absolute -top-2 right-[2rem] w-[70px] h-2 bg-[#024996] rounded-md"></div>

            <h2 className="text-[25px] md:text-[30px] redhat font-normal md:mt-2 mt-4 mb-2 leading-relaxed text-left">
              {heading}
            </h2>

            <div className="mb-4 w-[300px] h-[2px] bg-[#024996]"></div>

            <p
              className="text-xs md:text-[15px] leading-snug redhat"
              dangerouslySetInnerHTML={{ __html: Content }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export const RealStateFaq = () => {
  const FaqData = [
    {
      index: 1,
      question:
        " What leadership roles do you specialize in within real estate and infrastructure?",
      answer:
        " We recruit across asset management, development, investment, capital markets, and operational leadership—spanning C-suite, board, and project leadership roles.",
    },
    {
      index: 2,
      question:
        "How do you align leaders with sector-specific challenges like tenant experience or community impact?",
      answer:
        "We apply deep industry insight and assessment tools to evaluate a leader’s ability to enhance stakeholder experience and long-term community value.",
    },
    {
      index: 3,
      question:
        "Can you help with succession planning for real estate funds or asset management firms?",
      answer:
        "Yes, our advisory services include succession planning tailored to the specific dynamics of real estate and infrastructure firms.",
    },
    {
      index: 4,
      question:
        "Do you offer interim leadership for major real estate or infrastructure projects?",
      answer:
        "Absolutely. We maintain a network of experienced interim executives ready to step into transitional or project-critical roles",
    },
    {
      index: 5,
      question:
        " What makes The Taplow Group different in real estate executive search?",
      answer:
        "Our sector-specific experience, global reach with local insight, and commitment to long-term partnerships set us apart.",
    },
    {
      index: 6,
      question:
        " How do you ensure cultural fit within diverse real estate portfolios?",
      answer:
        "We use a rigorous assessment framework that evaluates leadership style, values alignment, and adaptability across asset types and geographies.",
    },
  ];
  return (
    <>
      <Faq heading="Frequently Asked Questions (FAQs)" FaqData={FaqData} />
    </>
  );
};
export const RealstateOurOffering = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const data = {
    heading: "Our Offerings",
    content: "",
  };
  const Offering = [
    {
      id: 1,
      heading: "Real Estate Executive Search ",
      content:
        "Identifying leaders who combine deal-making acumen with people-first leadership.",
      img: offer1,
    },
    {
      id: 2,
      heading: "Infrastructure Executive Search",
      content:
        "Sourcing senior talent with the expertise to deliver complex projects on time and on budget.",
      img: offer2,
    },
    {
      id: 3,
      heading: " Leadership Assessment & Development ",
      content:
        "Enhancing team cohesion and resilience for future-focused performance.",
      img: offer3,
    },
    {
      id: 4,
      heading: "Board and CEO Advisory",
      content:
        "Supporting governance and leadership transitions with strategic, impartial counsel.",
      img: offer4,
    },
    {
      id: 5,
      heading: "ESG & Sustainability Advisory",
      content:
        "Aligning leadership with environmental, social, and governance priorities.",
      img: offer5,
    },
    {
      id: 6,
      heading: "Interim Leadership Solutions",
      content:
        "Providing experienced leaders to navigate periods of transition, growth, or transformation.",
      img: offer6,
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

export const WhyChooseRealstateSec = () => {
  const heading = "Why Taplow for Real Estate & Infrastructure";

  const cards = [
    {
      img: Icon4,
      title: "Sector-Focused Agility",
      desc: "We adapt to your changing needs—be it regulation, urban trends, or ESG demands.",
    },
    {
      img: Icon5,
      title: " Inclusive Leadership Focus",
      desc: "We champion diversity, knowing inclusive leaders drive stronger communities and investor confidence.",
    },
    {
      img: Icon6,
      title: "True Partnership",
      desc: " Beyond placements—we build enduring relationships, ensuring leadership that delivers long-term value.",
    },
    {
      img: Icon1,
      title: "Sector-Deep Insight",
      desc: `Firsthand experience in real estate and infrastructure, giving us a clear view of your sector’s opportunities and challenges.`,
    },
    {
      img: Icon2,
      title: "Global-Local Expertise",
      desc: " Global reach combined with local understanding to deliver impactful leaders.",
    },
    {
      img: Icon3,
      title: "End-to-End Solutions",
      desc: ` Executive search, succession planning, interim leadership, and advisory—all aligned with your asset lifecycle.`,
    },
  ];
  return (
    <>
      <WhyChooseExecutive
        heading={heading}
        cards={cards}
        headingClass="md:w-[300px]"
      />
    </>
  );
};
