"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import SearchBar from "./ConsultantBanner";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  MoveRight,
  Navigation2,
  Phone,
} from "lucide-react";
import { consultantData } from "../utilities/data/consultantData";

const chunkArray = (arr, size) => {
  return arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    []
  );
};

export default function OurConsultants() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    search: "",
    services: "",
    role: "",
    location: "",
  });
  const [hovered, setHovered] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);
  const consultantSectionRef = useRef(null);

  // Dropdown options
  const uniqueLocations = [
    ...new Set(consultantData.map((c) => c.location).filter(Boolean)),
  ].sort();

  const uniqueRoles = ["Managing Partner", "Consultant", "Researcher"];
  const RoleConsultantKeywords = [
    "Partner",
    "Senior partner",
    "Executive partner",
    "Partner value search",
    "Coaching psychologist",
    "Leadership advisory and performance coach",
    "Leadership advisory and performance",
    "Senior consultant",
    "Senior partner",
    "Commercial and marketing",
    "Translational medicine/ informatics/ biology/ bd& alliance",
    "Head of clinical development/medical affairs/ra",
    "Practice leader",
    "Principal",
    "Associate principal",
    "Member- advisory council india",
    "Coo, recruitment consultant sweden",
    "Recruitment consultant",
    "Leadership development partner",
  ];
  const RoleManagingPartnerKeywords = [
    " Managing director",
    " Managing partner",
    "Joint managing partner",
    "Co-Founder-The Taplow Group, India Global CEO & Board Member-The Taplow Group S.A.",
    "Co-Founder-The Taplow Group, India  Global CEO & Board Member-The Taplow Group S.A.",
  ];
  const RoleResearcherKeywords = ["Researcher", "Research manager"];
  // 🔄 FILTERING LOGIC WITH UPDATED SERVICES CHECK
  const filteredConsultants = consultantData.filter((c) => {
    if (c.hideFromDirectory) return false;

    const matchesSearch =
      !filters.search ||
      c.name.toLowerCase().includes(filters.search.toLowerCase());

    const serviceList = Array.isArray(c.services)
      ? c.services
      : typeof c.services === "string"
      ? [c.services]
      : [];

    const matchesService =
      !filters.services || serviceList.includes(filters.services);

    const matchesRole = (() => {
      if (!filters.role) return true;

      const roleText = c.role?.toLowerCase().trim() || "";

      const isConsultantMatch = RoleConsultantKeywords.some((keyword) =>
        roleText.includes(keyword.toLowerCase().trim())
      );
      const isManagingMatch = RoleManagingPartnerKeywords.some((keyword) =>
        roleText.includes(keyword.toLowerCase().trim())
      );
      const isResearcherMatch = RoleResearcherKeywords.some((keyword) =>
        roleText.includes(keyword.toLowerCase().trim())
      );

      const selectedRole = filters.role.trim().toLowerCase();

      if (selectedRole === "consultant") {
        return isConsultantMatch && !isManagingMatch;
      }

      if (selectedRole === "managing partner") {
        return isManagingMatch;
      }

      if (selectedRole === "researcher") {
        return isResearcherMatch;
      }

      return roleText.includes(selectedRole);
    })();

    const matchesLocation =
      !filters.location ||
      c.location.toLowerCase().includes(filters.location.toLowerCase());

    const finalResult =
      matchesSearch && matchesService && matchesRole && matchesLocation;

    return finalResult;
  });

  const sortedConsultants = [...filteredConsultants].sort((a, b) =>
    a.location.localeCompare(b.location)
  );
  const consultantGroups = chunkArray(sortedConsultants, 12);

  useEffect(() => {
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current.navigation.update();
        swiperRef.current.pagination.update();
      }, 0);
    }
  }, []);

  const scrollToConsultants = () => {
    consultantSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-6 md:max-w-7xl mx-auto" ref={consultantSectionRef}>
      <SearchBar
        inputs={[
          { type: "text", key: "search", placeholder: "Search by name" },
          {
            type: "select",
            key: "location",
            label: "Location",
            options: uniqueLocations,
          },
          {
            type: "select",
            key: "role",
            label: "Role",
            options: uniqueRoles,
          },
          {
            type: "select",
            key: "services",
            label: "Service",
            options: [
              "Executive Search",
              "Executive Interim",
              "Board Services",
              "Leadership Advisory and Performance",
            ],
          },
        ]}
        onSearch={(filters) => setFilters(filters)}
        locations={uniqueLocations}
        roles={uniqueRoles}
      />

      <h2 className="text-left text-3xl md:text-4xl font-normal my-8 py-2 relative">
        Our Consultants
        <div className="w-60 h-1 md:ml-[3rem] bg-[#96A94A] mt-2"></div>
      </h2>

      <div className="relative mt-6">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={1}
          navigation={{
            prevEl: paginationRef.current,
            nextEl: paginationRef.current,
          }}
          pagination={{ clickable: true, el: paginationRef.current }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={() => scrollToConsultants()}
        >
          {consultantGroups.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                          className="w-[350px] md:w-full h-[350px] md:h-[19rem] object-cover rounded-lg shadow"
                        />

                        {hovered === `${index}-${idx}` && (
                          <div
                            onClick={() =>
                              router.push(
                                `/ConsultantProfile?id=${consultant.id}`
                              )
                            }
                            className="cursor-pointor absolute inset-0 bg-[#005581] text-white flex flex-col justify-center items-start p-4 rounded-lg transition-opacity duration-300 opacity-100"
                          >
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
                            {consultant.phone ? (
                              <div className="flex items-center text-white text-sm font-medium mb-3">
                                <Phone className="text-white w-3 h-3 mr-2" />
                                <span>{consultant.phone}</span>
                              </div>
                            ) : null}
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
                          router.push(`/ConsultantProfile?id=${consultant.id}`)
                        }
                      >
                        {consultant.name}
                      </h3>
                      <p
                        className="text-sm text-gray-600 cursor-pointer"
                        onClick={() =>
                          router.push(`/ConsultantProfile?id=${consultant.id}`)
                        }
                        dangerouslySetInnerHTML={{ __html: consultant.role }}
                      ></p>
                      <div
                        className="flex items-center text-[#009688] text-sm font-medium mt-1 cursor-pointer"
                        onClick={() =>
                          router.push(`/ConsultantProfile?id=${consultant.id}`)
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

        {consultantGroups.length > 1 && (
          <div className="flex mx-auto justify-center items-center">
            <div className="flex justify-center items-center mt-[2rem] mb-[2rem]">
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
              <div ref={paginationRef} className="custom-pagination flex"></div>
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
    </div>
  );
}
