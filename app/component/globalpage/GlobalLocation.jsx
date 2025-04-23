"use client";
import Link from "next/link";
import InteractiveMap from "./Maplayout";
import { GreenMap } from "./Worldmap";

const countries = [
  { index: 1, name: "Australia", link: "/countries/australia" },
  { index: 2, name: "Bulgaria", link: "/countries/bulgaria" },
  { index: 3, name: "Canada", link: "/countries/canada" },
  { index: 4, name: "China", link: "/countries/china" },
  { index: 5, name: "Denmark", link: "/countries/denmark" },
  { index: 6, name: "Finland", link: "/countries/finland" },
  { index: 7, name: "France", link: "/countries/france" }, // fixed wrong link
  { index: 8, name: "Germany", link: "/countries/germany" }, // fixed wrong link
  { index: 9, name: "India", link: "/countries/india" },
  { index: 10, name: "Italy", link: "/countries/italy" },
  { index: 11, name: "Norway", link: "/countries/norway" },
  { index: 12, name: "New Zealand", link: "/countries/new-zealand" },
  { index: 13, name: "Spain", link: "/countries/spain" },
  { index: 14, name: "Sweden", link: "/countries/sweden" },
  { index: 15, name: "Singapore", link: "/countries/singapore" },
  { index: 16, name: "US", link: "/countries/us" },
  { index: 17, name: "UK", link: "/countries/uk" },
];

export default function GlobalLocations() {
  return (
    <div className="max-w-7xl mx-auto  flex flex-col md:flex-row  justify-between p-0 my-4">
      {/* Left Column - Country List */}
      <div className="md:w-1/6 w-full px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Global Locations:</h2>
        <ul className="space-y-2 text-md">
          {countries.map((country) => (
            <li key={country.index}>
              <Link
                href={country.link}
                className="hover:text-green-600 transition-colors duration-200"
              >
                • {country.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column - Map */}
      <div className="md:w-5/6 w-full overflow-hidden  h-full flex justify-center">
        {/* <InteractiveMap /> */}
        <GreenMap />
      </div>
    </div>
  );
}
