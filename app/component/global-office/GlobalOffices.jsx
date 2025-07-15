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
        <div className="mt-10 flex flex-col justify-center items-center">
          <h3 className="text-center text-4xl font-semibold my-10">
            {activeContinent}
          </h3>
          <div
            className={`grid ${
              data.offices.length < 3 ? "md:grid-cols-2" : "md:grid-cols-3"
            } gap-8 px-10`}
          >
            {data.offices?.map((office, idx) => (
              <div key={idx} className="pr-6 border-r last:border-none ">
                <h4 className="font-bold text-[22px] mb-1">{office.country}</h4>

                <div
                  className={`${
                    office.addresses.length > 3
                      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-9"
                      : "flex flex-col gap-4"
                  }`}
                >
                  {office.addresses.map((addr, i) => (
                    <div key={i}>
                      <h2 className="text-[14px] font-semibold text-[#6AA728]">
                        {addr.name}
                      </h2>
                      <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                        {addr.address}
                      </p>
                    </div>
                  ))}
                </div>

                {office.link && (
                  <a
                    href={office.link}
                    className="text-[#005581] text-sm font-medium inline-block mt-2 hover:underline"
                  >
                    Read more &gt;
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
