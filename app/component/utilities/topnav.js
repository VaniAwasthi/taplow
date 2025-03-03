"use client"; // Ensure this is at the top

import React from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
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
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Sectors", href: "/sectors" },
  { name: "Insights", href: "/insights" },
  { name: "Global", href: "/globals" },
  { name: "Consultant Directory", href: "/consultant-directory" },
  { name: "Contact Us", href: "/contact" },
];

const TopNav = () => {
  const pathname = usePathname();

  return (
    <header className="top-0 z-[99]">
      <Disclosure as="nav" className="pt-4">
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-2">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <div className="flex lg:flex-1 items-center">
              <Link href="/">
                <Image
                  alt="Your Company"
                  src={logo}
                  className="pb-2 cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      className={`md:px-1 md:text-sm lg:px-3 py-2 lg:text-base font-normal ${
                        pathname === item.href
                          ? "text-white bg-[#98AE40] pb-5"
                          : "text-black hover:text-black"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <DisclosureButton className="relative p-2 text-gray-400 hover:text-white">
                <FaBars className="text-black block size-6 group-data-[open]:hidden" />
                <IoCloseSharp className="text-white hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <DisclosureButton
                  className={`block px-3 py-2 text-black font-medium ${
                    pathname === item.href
                      ? "text-[#98AE40]"
                      : "hover:text-[#98AE40]"
                  }`}
                >
                  {item.name}
                </DisclosureButton>
              </Link>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
};

export default TopNav;
