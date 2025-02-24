import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { FaBars } from "react-icons/fa6";
import logo from "../Assest/homePage/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about-us", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Sectors", href: "/sectors", current: false },
  { name: "Insights", href: "/insights", current: false },
  { name: "Global", href: "/global", current: false },
  {
    name: "Consultant Directory",
    href: "/consultant-directory",
    current: false,
  },
  { name: "Contact Us", href: "/contact-us", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const topnav = () => {
  return (
    <>
      {/* <header className="sticky top-0 z-[99]"> */}
      {/* hello */}
      {/* mell */}
      <header className=" top-0 z-[99]">
        <Disclosure as="nav" className=" pt-4 ">
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-2">
            <div className="relative flex  items-center justify-between">
              <div className="flex lg:flex-1  items-center justify-center md:items-center md:justify-between">
                <div className="flex shrink-0 items-center">
                  <Image alt="Your Company" src={logo} className="pb-2" />
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? " text-white bg-[#98AE40] pb-8"
                            : "text-black hover:text-black",
                          "md:px-1 md:text-sm lg:px-3 py-2 lg:text-base font-normal"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inset-y-0 left-0 flex items-center md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <FaBars
                    aria-hidden="true"
                    className="text-black block size-6 group-data-[open]:hidden"
                  />
                  <IoCloseSharp
                    aria-hidden="true"
                    className="text-white hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? " text-[#98AE40]"
                      : "text-black  hover:text-[#98AE40]",
                    "block px-3 py-2 text-black font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </header>
    </>
  );
};

export default topnav;
