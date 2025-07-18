"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/homePage/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/taplow" },
  {
    name: "Services",
    href: "/services/executive-search",
    submenu: [
      { name: "Executive Search ", href: "/services/executive-search" },
      {
        name: "Executive Interim ",
        href: "/services/executive-interim",
      },
      { name: "Board Advisory ", href: "/services/board-services" },
      {
        name: "Leadership Performance and Advisory",
        href: "/services/leadership-advisory-and-performance",
      },
    ],
  },
  {
    name: "Sectors",
    href: "/sectors/conusmer-sector",
    submenu: [
      { name: "Consumer Products", href: "/sectors/consumer-products" },
      { name: "Financial Services", href: "/expertise/financial-services" },
      { name: "Digital ICT", href: "/sectors/ict" },
      { name: "Not for Profit", href: "/sectors/not-for-profit" },
      {
        name: "Life Sciences and Pharma",
        href: "/sectors/life-sciences",
      },
      { name: "Professional Services", href: "/sectors/professional-services" },
      { name: "Real Estate", href: "/sectors/real-estate" },
      { name: "Industrial", href: "/sectors/industrial" },
    ],
  },
  { name: "Insights", href: "/insights" },
  {
    name: "Global Location",
    href: "/countries",
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
  //

  useEffect(() => {
    const getInfo = async () => {
      try {
        const translated = new URLSearchParams(window.location.search).get(
          "translated"
        );

        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();
        const ip = ipData.ip;

        const geoRes = await fetch(`https://ipwho.is/${ip}`);
        const geoData = await geoRes.json();

        const countryCode = geoData.country_code || "US";

        // Map of countries you want to redirect to their language
        const redirectMap = {
          BG: "bg", // Bulgarian
          DK: "da", // Danish
          FR: "fr", // French
          NO: "no", // Norwegian
        };

        const language = redirectMap[countryCode];

        if (language && !translated) {
          const currentURL = window.location.href;
          const sep = currentURL.includes("?") ? "&" : "?";
          const redirectURL = `https://translate.google.com/translate?hl=${language}&sl=en&tl=${language}&u=${encodeURIComponent(
            currentURL + sep + "translated=1"
          )}`;
          window.location.href = redirectURL;
        }
      } catch (error) {
        console.error("Error fetching IP or location info:", error);
      }
    };

    getInfo();
  }, []);

  //

  const pathname = usePathname();

  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    };

    if (!window.google?.translate?.TranslateElement) {
      addScript();
    }
  }, []);

  const handleLangChange = (e) => {
    const lang = e.target.value;
    const select = document.querySelector("select.goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <header className="top-0 z-50 sticky top-0 bg-white">
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

                {/* Google Translate Hidden Element */}
                <div
                  id="google_translate_element"
                  style={{ display: "none" }}
                ></div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-4 items-center">
                  {navigation.map((item) =>
                    item.submenu ? (
                      <div key={item.name} className="relative group">
                        <div className="relative">
                          <Link href={item.href}>
                            <span
                              className={`px-3 py-1 text-base font-normal cursor-pointer ${
                                pathname.startsWith(item.href)
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
                    )
                  )}

                  {/* Language Dropdown placed AFTER Contact Us */}
                  <select
                    onChange={handleLangChange}
                    className="ml-4 border-0 text-sm rounded px-2 py-1"
                    defaultValue="🌐 Language"
                  >
                    <option value="" disabled hidden>
                      🌐 Language
                    </option>
                    <option value="en">English</option>
                    <option value="bg">Bulgarian</option>
                    <option value="da">Danish</option>
                    <option value="fr">French</option>
                    <option value="no">Norwegian</option>
                  </select>
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
                          <DisclosureButton className="w-full px-3 py-2 font-medium text-left text-black hover:text-[#98AE40] flex justify-between items-center">
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
                <select
                  onChange={handleLangChange}
                  className="ml-0 border-0 text-sm rounded px-2 py-1"
                >
                  <option value="" disabled selected hidden>
                    🌐 Language
                  </option>
                  <option value="en">English</option>
                  <option value="bg">Bulgarian</option>
                  <option value="da">Danish</option>
                  <option value="fr">French</option>
                  <option value="no">Norwegian</option>
                </select>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* Google Translate override styles */}
      <style jsx global>{`
        .goog-logo-link,
        .goog-te-gadget span,
        .goog-te-banner-frame {
          display: none !important;
        }

        .goog-te-combo {
          font-family: inherit !important;
          background: white !important;
          color: black !important;
        }

        body * {
          font-family: inherit !important;
        }

        body {
          top: 0px !important;
        }
      `}</style>
    </header>
  );
};

export default TopNav;
