"use client";
import React from "react";
import HeroSecLayout from "../utilities/HeroSecLayout";
import AboutBanner from "../../assets/Consultantpage/AboutBanner.webp";
import { Search } from "lucide-react";
import { useState } from "react";
import { FaBroom } from "react-icons/fa6";

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

export default function SearchBar({ onSearch, inputs, filterText = false }) {
  // Maintain local state for each input key
  const [filters, setFilters] = useState({});

  // When input changes
  const handleChange = (key, value) => {
    const updated = { ...filters, [key]: value };

    setFilters(updated);
    onSearch(updated);
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 bg-white p-3 rounded-lg w-full">
      {filterText ? (
        <span className="text-[#9E9E9E] text-[14px]">Filter by:</span>
      ) : null}
      {inputs.map((input) => {
        if (input.type === "text") {
          return (
            <input
              key={input.key}
              type="text"
              placeholder={input.placeholder}
              className="px-4 py-2 border border-[#96A94A] rounded-full focus:outline-none w-full sm:w-[220px]"
              value={filters[input.key] || ""}
              onChange={(e) => handleChange(input.key, e.target.value)}
            />
          );
        }

        if (input.type === "select") {
          return (
            <select
              key={input.key}
              className="px-4 py-2 border border-[#96A94A] rounded-full focus:outline-none w-full sm:w-[200px] max-w-full"
              value={filters[input.key] || ""}
              onChange={(e) =>
                handleChange(
                  input.key,
                  e.target.value === "All" ? "" : e.target.value
                )
              }
            >
              <option value="">{input.label}</option>
              {input.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        }

        return null;
      })}

      {/* Search Button */}
      <button
        className="bg-[#96A94A] text-white p-3 rounded-full flex items-center justify-center w-12 h-12"
        onClick={() => onSearch(filters)}
      >
        <Search size={20} />
      </button>
      <button
        className="border border-[#96A94A] text-[#96A94A] p-3 rounded-full flex items-center justify-center w-12 h-12 hover:bg-[#96A94A] hover:text-white transition"
        onClick={() => {
          setFilters({});
          onSearch({});
        }}
        title="Clear Filters"
      >
        <FaBroom size={20} />
      </button>
    </div>
  );
}
