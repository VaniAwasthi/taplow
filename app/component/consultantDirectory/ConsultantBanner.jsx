import React from "react";
import HeroSecLayout from "../utilities/HeroSecLayout";
import AboutBanner from "../../assets/Consultantpage/AboutBanner.webp";
import { Search } from "lucide-react";
import { useState } from "react";

export const ConsultantBanner = () => {
  const BannerData = {
    title: "Experts in Leadership. Partners in Success.",
    description:
      "Our consultants bring global expertise and deep industry insight to every engagement, helping businesses find, develop, and empower world-class leaders. Meet the experts shaping the future of leadership.",
    bannerImg: AboutBanner,
  };
  return (
    <HeroSecLayout
      heroBg={BannerData.bannerImg}
      Heading={BannerData.title}
      Description={BannerData.description}
      isButton={false}
      Isdivider={true}
      rightSec={false}
      desclassname="mt-2"
      headingClass="md:w-[550px] w-[300px] md:mt-[8rem] md:text-5xl"
      leftSecClass="flex flex-col justify-start items-start pb-10 md:pb-20 text-left md:mt-[13rem] mt-4"
      rightSecClass="flex justify-center md:justify-end"
      ImageClass="transition-transform duration-300 ease-in-out hover:scale-105"
    />
  );
};

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  const [service, setService] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Search Query:", { search, service, role, location }); // Debugging
    onSearch({ search, service, role, location });
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 bg-white p-3 rounded-lg w-full">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name"
        className="px-4 py-2 border border-green-500 rounded-full focus:outline-none w-full sm:w-[220px]"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter Text (Hidden on Mobile) */}
      <span className="text-gray-600 hidden md:inline-block">Filter by:</span>

      {/* Select Inputs */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        {[
          {
            value: service,
            setter: setService,
            label: "Service",
            options: [
              "All",
              "Consulting",
              "Executive Search",
              "Leadership Advisory and Performance",
              "Board Services",
            ],
          },
          {
            value: role,
            setter: setRole,
            label: "Role",
            options: [
              "All",
              "Senior Consultant",
              "Managing Director & Partner",
              "Managing Partner",
              "Joint Managing Partner",
              "Partner",
              "Principal",
              "Co-Founder",
            ],
          },
          {
            value: location,
            setter: setLocation,
            label: "Location",
            options: ["All", "Canada", "Spain", "New Zealand", "India"],
          },
        ].map(({ value, setter, label, options }, index) => (
          <select
            key={index}
            className="px-4 py-2 border border-green-500 rounded-full focus:outline-none w-full sm:w-[200px] max-w-full"
            value={value}
            onChange={(e) =>
              setter(e.target.value === "All" ? "" : e.target.value)
            }
          >
            <option value="">{label}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ))}
      </div>

      {/* Search Button */}
      <button
        className="bg-green-600 text-white p-3 rounded-full flex items-center justify-center w-12 h-12"
        onClick={handleSearch}
      >
        <Search size={20} />
      </button>
    </div>
  );
}
