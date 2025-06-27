"use client";
import Image from "next/image";
import Button from "./Button";

const BannerLayout = ({
  image,
  title,
  title2,
  description,
  buttonText,
  buttonImage,
  hoverImage,
  bgColor = "#000", // Dark background for better overlay
  overlayOpacity = 0.2, // Stronger overlay for contrast
  zIndex = 10,
  href,
  BgClassname = "object-cover w-full h-[600px] md:min-h-screen object-center",
}) => {
  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-black"
        style={{
          backgroundColor: bgColor,
          opacity: overlayOpacity,
          zIndex: zIndex,
        }}
      ></div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt="Background Image"
          fill
          className={BgClassname}
          priority
        />
      </div>

      {/* Content Section */}
      <div className="relative z-20 flex flex-col items-start justify-center text-white px-4 sm:px-8 md:px-32 py-10 md:py-0 max-w-7xl">
        <h2 className="text-base sm:text-xl md:text-5xl font-light text-left">
          {title}
        </h2>
        <h2 className="text-lg sm:text-2xl md:text-5xl font-light mt-2 text-left">
          {title2}
        </h2>

        {/* Gradient Line */}
        <div
          className="my-4 h-[1px] w-full max-w-[280px] sm:max-w-[320px]"
          style={{
            background: "linear-gradient(to right, #D9D9D9 30%, #96A94A 30%)",
          }}
        ></div>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm md:text-base leading-relaxed max-w-[90%] sm:max-w-[500px] text-left">
          {description}
        </p>

        {/* Button */}
        {buttonText && (
          <div className="mt-6">
            <Button
              text={buttonText}
              image={buttonImage}
              hoverImage={hoverImage}
              href={href ? href : "#"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerLayout;
