"use client";

import React from "react";
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
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  {
    name: "Sectors",
    href: "/sectors",
    submenu: [
      { name: "Consumer Product", href: "/sectors" },
      { name: "Financial Service", href: "/sectors" },
      { name: "Digital ITC", href: "/sectors" },
    ],
  },
  { name: "Insights", href: "/insights" },
  {
    name: "Global",
    href: "/globals",
    submenu: [
      { name: "Australia", href: "/countries/australia" },
      { name: "Canada", href: "/countries/canada" },
      { name: "New Zealand", href: "/countries/new-zealand" },
      { name: "Norway", href: "/countries/norway" },
      { name: "Spain", href: "/countries/spain" },
      { name: "Sweden", href: "/countries/sweden" },
      { name: "UK", href: "/countries/uk" },
    ],
  },
  { name: "Consultant Directory", href: "/consultant-directory" },
  { name: "Contact Us", href: "/contact" },
];

const TopNav = () => {
  const pathname = usePathname();

  return (
    <header className="top-0 z-[99]">
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
                <div className="hidden lg:flex space-x-4">
                  {navigation.map((item) =>
                    item.submenu ? (
                      <div key={item.name} className="relative group">
                        <Link href={item.href}>
                          <span
                            className={`px-3 py-2 text-base font-normal cursor-pointer ${
                              pathname.startsWith(item.href)
                                ? "text-white bg-[#98AE40] pb-5"
                                : "text-black hover:text-black"
                            }`}
                          >
                            {item.name}
                          </span>
                        </Link>
                        <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md z-50 min-w-[180px]">
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
                              ? "text-white bg-[#98AE40] pb-5"
                              : "text-black hover:text-black"
                          }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    )
                  )}
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
                          <DisclosureButton className="w-full px-3 py-2 font-medium text-left text-black hover:text-[#98AE40]">
                            {item.name}
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
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default TopNav;
