"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import FinlandFlag from "../../assets/globalpage/finlandflag.webp";
import AustraliaFlag from "../../assets/globalpage/australiaflag.webp";
import IndiaFlag from "../../assets/globalpage/IndiaFlag.webp";
import USAFlag from "../../assets/globalpage/flgUsa.webp";
import UKFlag from "../../assets/globalpage/UKflag.webp";
import LeftArrow from "../../assets/servicepage/arrow-lef.png";
import RightArrow from "../../assets/homePage/rightarrow.png";

const CaseStudies = () => {
  const caseData = [
    {
      img: FinlandFlag,
      title: "Wood Industry New Market Strategy",
      desc: "A mechanical wood industry company needed a new CEO in a situation where the company was in the middle of heavy investment process, building a new strategy,doubling its production volumes and had quite new foreign owners..",
      href: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/finland/WoodIndustryNewMarketStrategy.pdf",
      contact: "Timo Toivanen, Finland",
      contactHref: "https://example.com/contact-timo",
    },
    {
      img: AustraliaFlag,
      title: "Producer of Polypropylene and Polyolefin Films",
      desc: "The mandate was taken by the Australian partnership and passed to our executive search colleagues in Japan. Our researchers mapped the market and targeted relevant organisations,and a long list of prospects were identified. Under very strict confidentiality approaches were made to prospects and and a shortlist of candidates profiled to the client.",
      href: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/austrilia/ProducerofPolypropyleneandPolyolefinFilms.pdf",
      contact: "Peter Tanner AM",
      contactHref: "https://example.com/contact-timo",
    },
    {
      img: IndiaFlag,
      title: "Rebuilding Strategic Leadership in Global Energy",
      desc: "One of the largest logistics companies in Finland needed a new CIO.",
      href: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupRe-EstablishingStrategicLeadershipCaseStudy-India.pdf",
      contact: "Shaista Sabharwal",
      contactHref: "https://example.com/contact-timo",
    },
    {
      img: USAFlag,
      title: "A challenge to assure Excellence & Diversity",
      desc: "Taplow carefully examined the medical and management roles of the current employees as best could be accomplished, without one-on-one interviews but relying n information provided by client leadership.",
      href: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/USA/AchallengetoassureExcellenceDiversity.pdf",
      contact: "Darryl Miller",
      contactHref: "https://example.com/contact-timo",
    },
    {
      img: UKFlag,
      title: "Next Generation of Leadership",
      desc: "Whilst assessing internal potential, we also externally, discreetly approached and assessed potential leaders from across the European region. Our processes enabled the client EMEA leaders to clearly compare internal possibilities, with possible",
      href: "https://cruxcreativedemo2.com//Taplow-new/SuccessStory/UK/TheTaplowGroup-ExecutiveSearch-NextGenerationofLeadersforEMEARegion.pdf",
      contact: "Mark Firth",
      contactHref: "https://example.com/contact-timo",
    },
  ];
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <div className="relative bg-[#f0f0f0] py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          <h2 className={`text-3xl font-semibold text-center md:text-left `}>
            Case Studies
          </h2>
          {/* navigation */}
          <div className="hidden md:flex justify-center items-center gap-6 mt-6">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                activeIndex === 0
                  ? "opacity-50 border-[#005581] cursor-not-allowed"
                  : "bg-[#005581] border-[#005581]  hover:bg-gray-200"
              }`}
              disabled={activeIndex === 0}
            >
              <Image
                src={LeftArrow}
                className="rotate-180"
                alt="Previous"
                width={10}
                height={10}
              />
            </button>

            <button
              onClick={() => swiperInstance?.slideNext()}
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                activeIndex >= caseData.length - 4
                  ? "opacity-50 border-[#005581] cursor-not-allowed"
                  : "bg-gray border-[#005581] hover:bg-gray-200"
              }`}
              disabled={activeIndex >= caseData.length - 4}
            >
              <Image src={RightArrow} alt="Next" width={20} height={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={false}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {caseData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center mt-4 mb-4 md:mx-4">
                <div className="bg-white rounded-xl border mt-10 border-[#CFCFCF] shadow-md w-full  max-w-[290px] min-h-[350px] flex flex-col  px-8 pt-12 pb-6 relative hover:scale-105 hover:border-[#96A94A] transition-transform duration-300">
                  {/* Flag Icon */}
                  <div className="absolute -top-6 w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white bg-white">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#005581] font-semibold text-lg text-left w-[50%] mt-2">
                    {card.title}
                  </h3>

                  {/* Green line */}
                  <div className="w-[50%] h-[2px] bg-[#96A94A] my-2" />

                  {/* Description */}
                  <p className="text-sm text-[#666] text-left px-1 mb-4 leading-snug">
                    {card.desc}
                  </p>

                  {/* Read More button */}
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#98AE40] w-[50%] text-white text-xs px-4 py-2 rounded hover:bg-[#7d9338] transition-colors"
                  >
                    Read More
                  </a>

                  {/* Footer */}
                  <p className="text-[11px] text-[#666] text-left mt-4 px-1">
                    For further information please contact{" "}
                    <a
                      href={card.contactHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#005581] underline"
                    >
                      {card.contact}
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex md:hidden gap-4 justify-center mt-4">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="w-10 h-10 rounded-full bg-[#005581] flex items-center justify-center hover:bg-gray-300"
          >
            <Image src={LeftArrow} alt="Previous" width={15} height={15} />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="w-10 h-10 rounded-full bg-[#005581] flex items-center justify-center hover:bg-gray-300"
          >
            <Image src={RightArrow} alt="Next" width={15} height={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
