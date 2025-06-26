"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/homePage/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  {
    name: "Services",
    href: "/services/executive-search",
    submenu: [
      { name: "Executive Search", href: "/services/executive-search" },
      {
        name: "Executive Interim",
        href: "/services/executive-interim-management",
      },
      { name: "Board Advisory", href: "/services/board-advisory-services" },
      {
        name: "Leadership Performance and Advisory",
        href: "/services/leadership-boardadvisory-and-performance",
      },
    ],
  },
  {
    name: "Sectors",
    href: "/sectors/conusmer-sector",
    submenu: [
      { name: "Consumer Products", href: "/sectors/conusmer-sector" },
      { name: "Financial Services", href: "/sectors/financial-service" },
      { name: "Digital ICT", href: "/sectors/digital-ict" },
      { name: "Not-for-Profit", href: "/sectors/not-for-profit" },
      {
        name: "Life Sciences and Pharma",
        href: "/sectors/life-science-and-pharma",
      },
      { name: "Professional Services", href: "/sectors/professional-service" },
      { name: "Real Estate", href: "/sectors/realestate-sector" },
      { name: "Industrial", href: "/sectors/industry" },
    ],
  },
  { name: "Insights", href: "/insights" },
  {
    name: "Global Locations",
    href: "/globals",
    submenu: [
      { name: "Australia", href: "/countries/australia" },
      { name: "Bulgaria", href: "/countries/bulgaria" },
      { name: "Canada", href: "/countries/canada" },
      { name: "China", href: "/countries/china" },
      { name: "Denmark", href: "/countries/denmark" },
      { name: "Finland", href: "/countries/finland" },
      { name: "France", href: "/countries/france" },
      { name: "Germany", href: "/countries/germany" },
      { name: "India", href: "/countries/india" },
      { name: "Italy", href: "/countries/italy" },
      { name: "New Zealand", href: "/countries/new-zealand" },
      { name: "Norway", href: "/countries/norway" },
      { name: "Singapore", href: "/countries/singapore" },
      { name: "Spain", href: "/countries/spain" },
      { name: "Sweden", href: "/countries/sweden" },
      { name: "UK", href: "/countries/uk" },
      { name: "US", href: "/countries/us" },
    ],
  },
  { name: "Consultant Directory", href: "/consultant-directory" },
  { name: "Contact Us", href: "/contact" },
];

const TopNav = () => {
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    "Australia",
    "Bulgaria",
    "Canada",
    "China",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "India",
    "Italy",
    "New Zealand",
    "Norway",
    "Singapore",
    "Spain",
    "Sweden",
    "UK",
    "US",
  ];

  return (
    <header className="top-0 z-[99] bg-white sticky">
      <Disclosure as="nav" className="pt-4">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-2">
              <div className="relative flex items-center justify-between">
                {/* Logo */}
                <div className="flex lg:flex-1 items-center">
                  <Link href="/">
                    <Image
                      alt="Your Company"
                      src={logo}
                      className="pb-2 cursor-pointer w-auto h-10"
                    />
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-4 items-center">
                  {navigation.map((item) => {
                    const isParentActive =
                      pathname.startsWith(item.href) ||
                      (item.submenu &&
                        item.submenu.some((sub) => pathname === sub.href));

                    return item.submenu ? (
                      <div key={item.name} className="relative group">
                        <Link href={item.href}>
                          <span
                            className={`px-3 py-1 text-base font-normal cursor-pointer ${
                              isParentActive
                                ? "text-white bg-[#98AE40] pb-[0.7rem]"
                                : "text-black hover:text-black"
                            }`}
                          >
                            {item.name}
                          </span>
                        </Link>
                        <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-50 min-w-[180px] max-h-44 overflow-y-auto pointer-events-auto scrollbar-thin scrollbar-thumb-[#98AE40] scrollbar-track-gray-200 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                          {item.submenu.map((sub) => (
                            <Link key={sub.name} href={sub.href}>
                              <div className="px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-[#98AE40]">
                                {sub.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link key={item.name} href={item.href}>
                        <span
                          className={`px-3 py-2 text-base font-normal ${
                            pathname === item.href
                              ? "text-white bg-[#98AE40] pb-[10px]"
                              : "text-black hover:text-black"
                          }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    );
                  })}

                  {/* Language Switcher */}
                  <div className="relative">
                    <button
                      onClick={() => setLangOpen(!langOpen)}
                      className="flex items-center space-x-1 text-black hover:text-[#98AE40]"
                    >
                      <FaGlobeAsia className="w-5 h-5" />
                      <span className="hidden md:inline">Language</span>
                    </button>
                    {langOpen && (
                      <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md z-50 min-w-[180px] max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#98AE40] scrollbar-track-gray-200">
                        {languages.map((lang) => (
                          <div
                            key={lang}
                            className="px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-[#98AE40] cursor-pointer"
                            onClick={() => {
                              setLangOpen(false);
                              // handle language change here if needed
                              console.log(`Language selected: ${lang}`);
                            }}
                          >
                            {lang}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                  <DisclosureButton className="relative p-2 text-black">
                    {open ? (
                      <IoCloseSharp className="size-6" />
                    ) : (
                      <FaBars className="size-6" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <DisclosurePanel className="lg:hidden">
              <div className="space-y-1 px-4 pb-3 pt-2">
                {navigation.map((item) =>
                  item.submenu ? (
                    <Disclosure key={item.name} as="div" className="w-full">
                      {({ open }) => (
                        <>
                          <Link href={item.href}>
                            <DisclosureButton
                              className="w-full px-3 py-2 font-medium text-left text-black hover:text-[#98AE40] flex justify-between items-center"
                              as="div"
                            >
                              <span>{item.name}</span>
                              <svg
                                className={`w-4 h-4 transform transition-transform duration-300 ${
                                  open ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </DisclosureButton>
                          </Link>
                          <DisclosurePanel className="pl-6">
                            {item.submenu.map((sub) => (
                              <Link key={sub.name} href={sub.href}>
                                <span className="block py-1 text-sm text-black hover:text-[#98AE40]">
                                  {sub.name}
                                </span>
                              </Link>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link key={item.name} href={item.href}>
                      <DisclosureButton
                        as="span"
                        className={`block px-3 py-2 font-medium ${
                          pathname === item.href
                            ? "text-[#98AE40]"
                            : "text-black hover:text-[#98AE40]"
                        }`}
                      >
                        {item.name}
                      </DisclosureButton>
                    </Link>
                  )
                )}

                {/* Mobile Language Switcher */}
                <div className="mt-2">
                  <button
                    onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center space-x-1 text-black hover:text-[#98AE40]"
                  >
                    <FaGlobeAsia className="w-5 h-5" />
                    <span className="hidden md:inline">Language</span>
                  </button>
                  {langOpen && (
                    <div className="mt-1 bg-white shadow-lg rounded-md z-50 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#98AE40] scrollbar-track-gray-200">
                      {languages.map((lang) => (
                        <div
                          key={lang}
                          className="px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-[#98AE40] cursor-pointer"
                          onClick={() => {
                            setLangOpen(false);
                            console.log(`Language selected: ${lang}`);
                          }}
                        >
                          {lang}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default TopNav;
