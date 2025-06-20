"use client";
import { useState } from "react";
import MapComponent from "./MapComponent";
import { officeData } from "../utilities/data/officeLocations";

const continents = ["Asia", "Europe", "Oceania", "North America"];

export default function GlobalOffices() {
  const [activeContinent, setActiveContinent] = useState("Asia");
  const data = officeData[activeContinent];

  return (
    <div className="px-6 md:px-20 py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-center text-[#111D15] text-2xl md:text-4xl font-semibold mb-2">
          Global offices
        </h2>
        <p className="text-center text-sm mb-6 text-[#666666] max-w-[600px] mx-auto">
          We have a global footprint. Our organizational consulting services
          synchronize strategy and talent to drive superior performance for our
          clients. Our 1,000+ colleagues serve clients in more than 50
          countries.
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-6">
          {continents.map((continent) => (
            <button
              key={continent}
              onClick={() => setActiveContinent(continent)}
              className={`text-md font-medium pb-2 border-b-2 ${
                activeContinent === continent
                  ? "border-[#00634F] text-[#00634F]"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              {continent}
            </button>
          ))}
        </div>

        {/* Google Map */}
        <MapComponent center={data.mapCenter} markers={data.locations} />

        {/* Office List */}
        <div className="mt-10">
          <h3 className="text-center text-3xl font-semibold my-10">
            {activeContinent}
          </h3>
          <div className="grid md:grid-cols-3 divide-x divide-gray-300 px-8">
            {data.offices?.map((office, idx) => (
              <div key={idx} className="px-6">
                <h4 className="font-bold">{office.country}</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  {office.addresses.map((addr, i) => (
                    <li key={i}>{addr}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-green-600 text-sm mt-2 inline-block"
                >
                  Read more &gt;
                </a>
              </div>
            ))}
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
