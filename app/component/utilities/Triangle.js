"use client";
import React from "react";
import Image from "next/image";
import GrowthImg from "../../assets/homePage/growth.png";
import PerformanceImg from "../../assets/homePage/performance.png";
import AccelerateImg from "../../assets/homePage/accelerate.png";
import DiversificationImg from "../../assets/homePage/diversification.png";

const TriangleSection = () => {
  return (
    <div className="relative w-[400px] h-[400px] mx-auto flex items-center justify-center">
      {/* Main Triangle */}
      <div className="relative w-0 h-0 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent border-b-[350px] border-b-transparent">
        {/* Growth Image (Top) */}
        <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2">
          <Image src={GrowthImg} alt="Growth" width={150} height={150} />
        </div>

        {/* Performance Image (Bottom Left) */}
        <div className="absolute bottom-[-10%] left-[-20%]">
          <Image
            src={PerformanceImg}
            alt="Performance"
            width={150}
            height={150}
          />
        </div>

        {/* Diversification Image (Bottom Right) */}
        <div className="absolute bottom-[-10%] right-[-20%]">
          <Image
            src={DiversificationImg}
            alt="Diversification"
            width={150}
            height={150}
          />
        </div>

        {/* Accelerate Image (Center Inverted Triangle) */}
        <div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2">
          <Image
            src={AccelerateImg}
            alt="Accelerate"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default TriangleSection;
