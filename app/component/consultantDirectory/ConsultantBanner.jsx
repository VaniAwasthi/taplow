"use client";
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

export default function SearchBar({ onSearch, locations, roles }) {
  const [search, setSearch] = useState("");
  const [service, setService] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  const triggerSearch = (next = {}) => {
    const updated = {
      search,
      service,
      role,
      location,
      ...next,
    };
    onSearch(updated);
  };
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 bg-white p-3 rounded-lg w-full">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name"
        className="px-4 py-2 border border-green-500 rounded-full focus:outline-none w-full sm:w-[220px]"
        value={search}
        onChange={(e) => {
          const val = e.target.value;
          setSearch(val);
          triggerSearch({ search: val });
        }}
      />

      {/* Filter Text (Hidden on Mobile) */}
      <span className="text-gray-600 hidden md:inline-block">Filter by:</span>

      {/* Select Inputs */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        {[
          {
            value: service,
            setter: (val) => {
              setService(val);
              triggerSearch({ service: val });
            },
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
            setter: (val) => {
              setRole(val);
              triggerSearch({ role: val });
            },
            label: "Role",
            options: ["All", ...roles],
          },
          {
            value: location,
            setter: (val) => {
              setLocation(val);
              triggerSearch({ location: val });
            },
            label: "Location",
            options: ["All", ...locations],
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
        onClick={
          () => onSearch({ search, service, role, location }) // fallback use
        }
      >
        <Search size={20} />
      </button>
    </div>
  );
}
