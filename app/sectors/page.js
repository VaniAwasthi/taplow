"use client";
import Image from "next/image";
import React from "react";
import sectorImg from "../assets/sector.webp";

const Sectors = () => {
  return (
    <div className=" relative">
      <Image
        src={sectorImg}
        alt="Sector"
        width={1500}
        height={1500}
        className="w-full h-full"
      />
    </div>
  );
};

export default Sectors;
