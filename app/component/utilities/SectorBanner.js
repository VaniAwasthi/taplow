"use Client";

import Button from "./Button";
import ButtonImage from "../../assets/homePage/btn-img.svg";
import HoverImage from "../../assets/homePage/hover.svg";
import Image from "next/image";
export const SectorBanner = ({
  Banner,
  heading,
  textColor,
  description,
  buttonText,
  textColorDes,
}) => {
  return (
    <>
      <div className="relative w-full min-h-[300px] md:min-h-screen block md:flex  items-center overflow-hidden">
        {/* Overlay */}

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-[300px] md:h-full">
          <Image
            src={Banner}
            alt="Background Image"
            fill
            className="object-cover w-full h-[400px] md:min-h-screen "
            priority
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-start justify-start md:justify-center  px-6 md:px-32 max-w-7xl mt-[3rem] md:mt-2">
          <h2
            className={`text-lg md:text-[40px] leading-normal font-normal text-left w-[150px] md:w-[350px] ${textColor}`}
          >
            {heading}
          </h2>
          <div
            className="mt-3 md:mb-[3rem] h-[1px] w-[50%] md:w-[320px]  md:mx-0"
            style={{
              background: "linear-gradient(to right, #005581 20%, #96A94A 30%)",
            }}
          ></div>

          <p
            className={`mt-[1rem] md:mt-[3rem] text-xs md:text-base leading-snug max-w-[40%] md:max-w-[400px] ${textColorDes}`}
          >
            {description}
          </p>

          {/* Button */}
          <div className="mt-6">
            <Button
              className="w-[250px] md:w-[242px]"
              text={buttonText}
              buttonImage={HoverImage} // ✅ lowercase 'b' matches component
              hoverImage={HoverImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};
