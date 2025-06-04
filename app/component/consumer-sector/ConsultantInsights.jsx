"use client";
import React from "react";
import Insight1 from "../../assets/sectors/ConsumerInsight1.webp";
import Insight2 from "../../assets/sectors/ConsumerInsight2.webp";
import Insight3 from "../../assets/sectors/ConsumerInsight3.webp";
import { InsightSec } from "../utilities/InsightSectiom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ChevronLeft,
  ChevronRight,
  MoveRight,
  Navigation2,
  Phone,
} from "lucide-react";
import ButtonImage from "../../assets/homePage/btn-img.svg";
import HoverImage from "../../assets/homePage/hover.svg";
import { consultantData } from "../utilities/data/consultantData";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../utilities/Button";
import SearchBar from "../consultantDirectory/ConsultantBanner";

export const ConsumerProductsConsultants = ({ Heading, leaderData, desc }) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);
  const consultantSectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const allConsultants = consultantData.flat();
  const matchedLeaders = allConsultants.filter((consultant) =>
    leaderData.some((leader) => leader.name === consultant.name)
  );

  const [filters, setFilters] = useState({
    search: "",
    location: "",
  });
  const uniqueLocations = [
    ...new Set(consultantData.map((c) => c.location).filter(Boolean)),
  ].sort();
  // Filter consultants
  const filteredLeaders = matchedLeaders.filter((consultant) => {
    const nameMatch = filters.search
      ? consultant.name.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    const locationMatch = filters.location
      ? consultant.location === filters.location
      : true;

    return nameMatch && locationMatch;
  });

  // Chunk data
  const chunkedLeaders = [];
  const pageSize = 8;

  for (let i = 0; i < filteredLeaders.length; i += pageSize) {
    chunkedLeaders.push(filteredLeaders.slice(i, i + pageSize));
  }

  const handleSlideChange = (swiper) => {
    setCurrentPage(swiper.activeIndex + 1);
    scrollToConsultants();
  };
  const scrollToConsultants = () => {
    consultantSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (
      paginationRef.current &&
      swiperRef.current &&
      swiperRef.current.pagination
    ) {
      swiperRef.current.params.pagination.el = paginationRef.current;
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.update();
    }
  }, [paginationRef.current]);
  const goToPage = (pageNumber) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(pageNumber - 1);
      setCurrentPage(pageNumber);
      scrollToConsultants();
    }
  };
  return (
    <>
      <div className="p-6 md:max-w-7xl mx-auto" ref={consultantSectionRef}>
        <h2 className="text-left text-3xl md:text-4xl font-normal my-8 py-2 relative w-full md:w-2/3">
          {Heading}
          <div className="w-[80%] h-1 md:ml-[2rem] bg-[#96A94A]  mt-2"></div>
        </h2>
        {desc ? (
          <p className="text-[14px] redhat text-[#666666]">{desc}</p>
        ) : null}
        <SearchBar
          onSearch={(newFilters) => setFilters(newFilters)}
          filterText={true}
          inputs={[
            { type: "text", key: "search", placeholder: "Search by name" },
            {
              type: "select",
              key: "location",
              label: "Location",
              options: uniqueLocations,
            },
          ]}
        />
        {filteredLeaders.length === 0 ? (
          <div className="w-full text-center text-gray-500 py-8">
            No Data Found
          </div>
        ) : (
          <>
            <div className="relative mt-6">
              <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                autoHeight={true} // Add this line!
                slidesPerView={1}
                spaceBetween={1}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
              >
                {chunkedLeaders.map((group, index) => (
                  <SwiperSlide key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {group.map((consultant, idx) => (
                        <div
                          key={idx}
                          className="relative p-2 text-center"
                          onMouseEnter={() => setHovered(`${index}-${idx}`)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          <div className="relative p-4 text-left">
                            <div className="relative">
                              <Image
                                src={consultant.image}
                                alt={consultant.name}
                                width={350}
                                height={350}
                                className="w-[350px] md:w-full h-[350px] md:h-[19rem] object-cover rounded-lg shadow"
                              />
                              {hovered === `${index}-${idx}` && (
                                <div className="absolute inset-0 bg-[#005581] text-white flex flex-col justify-center items-start p-4 rounded-lg transition-opacity duration-300 opacity-100">
                                  <h3 className="font-bold text-lg mt-3 mb-4">
                                    {consultant.name}
                                  </h3>
                                  <p className="text-sm text-white mb-3">
                                    {consultant.role}
                                  </p>
                                  <div className="flex items-center text-white text-sm font-medium mb-3">
                                    <Navigation2 className="text-white w-3 h-3 mr-2" />
                                    <span>{consultant.location}</span>
                                  </div>
                                  <div className="flex items-center text-white text-sm font-medium mb-3">
                                    <Phone className="text-white w-3 h-3 mr-2" />
                                    <span>{consultant.phone}</span>
                                  </div>
                                  <div
                                    className="flex items-center justify-between w-full text-white text-sm font-medium mt-3 cursor-pointer"
                                    onClick={() =>
                                      router.push(
                                        `/ConsultantProfile?id=${consultant.id}`
                                      )
                                    }
                                  >
                                    <span>See Full Bio</span>
                                    <MoveRight className="text-white w-4 h-4 mr-2" />
                                  </div>
                                </div>
                              )}
                            </div>
                            <h3
                              className="font-bold mt-3 text-lg cursor-pointer"
                              onClick={() =>
                                router.push(
                                  `/ConsultantProfile?id=${consultant.id}`
                                )
                              }
                            >
                              {consultant.name}
                            </h3>
                            <p
                              className="text-sm text-gray-600 cursor-pointer"
                              onClick={() =>
                                router.push(
                                  `/ConsultantProfile?id=${consultant.id}`
                                )
                              }
                            >
                              {consultant.role}
                            </p>
                            <div
                              className="flex items-center text-[#009688] text-sm font-medium mt-1 cursor-pointer"
                              onClick={() =>
                                router.push(
                                  `/ConsultantProfile?id=${consultant.id}`
                                )
                              }
                            >
                              <Navigation2 className="text-[#009688] w-3 h-3 mr-2" />
                              <span>{consultant.location}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {chunkedLeaders.length > 1 && (
                <div className="flex mx-auto justify-center items-center">
                  <div className="flex justify-center items-center mt-[1rem] mb-[2rem]">
                    <button
                      ref={prevRef}
                      className="text-[#ccc] cursor-pointer"
                      onClick={() => {
                        swiperRef.current?.slidePrev();
                        scrollToConsultants();
                      }}
                    >
                      <ChevronLeft size={30} />
                    </button>
                    <div className="flex space-x-2">
                      {Array.from({ length: chunkedLeaders.length }, (_, i) => (
                        <span
                          key={i}
                          onClick={() => goToPage(i + 1)}
                          className={`px-3 py-1  ${
                            currentPage === i + 1
                              ? " text-[#96A94A]"
                              : " text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          {i + 1}
                        </span>
                      ))}
                    </div>
                    <button
                      ref={nextRef}
                      className="text-[#ccc] cursor-pointer"
                      onClick={() => {
                        swiperRef.current?.slideNext();
                        scrollToConsultants();
                      }}
                    >
                      <ChevronRight size={30} />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center items-center">
              <Button
                className="w-[250px] md:[350px]"
                text="Explore All Insights"
                buttonImage={ButtonImage}
                hoverImage={HoverImage}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export const InsightsSection = () => {
  const blogData = [
    {
      id: 1,
      image: Insight1,

      title: "How Consumer Brands Are Navigating Leadership in the Digital Age",
    },
    {
      id: 2,
      image: Insight2,

      title:
        "The Rise of the Purpose-Driven Consumer: What Leaders Need to Know",
    },
    {
      id: 3,
      image: Insight3,

      title: "Building Resilient Supply Chain Leadership in Consumer Goods",
    },
  ];
  return (
    <>
      <InsightSec blogData={blogData} />
    </>
  );
};
