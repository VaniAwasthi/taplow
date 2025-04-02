import React from "react";
import Image from "next/image";
import Button from "./Button";

const HeroSection = ({
  heroBg,
  Heading,
  Description,
  rightImage,
  isButton = true,
  ButtonText,
  ButtonImage,
  HoverImage,
  mainDivClass = "",
  leftSecClass = "",
  rightSecClass = "",
  ImageClass = "",
  headingClass = "",
  Isdivider = true,
  rightSec = true,
  desclassname = true,
  dividerBackground,
}) => {
  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroBg}
          alt="Background"
          fill
          className="object-cover w-full h-full [object-position:27%_25%] md:object-center"
          priority
        />
      </div>

      {/* Content Section */}
      <div
        className={`relative z-10 flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 md:px-12 w-full ${mainDivClass}`}
      >
        {/* Left Side - Text */}
        <div className={`text-white md:w-1/2 text-left  ${leftSecClass}`}>
          <h2
            style={{ lineHeight: "3.5rem" }}
            className={`text-2xl md:text-4xl font-normal text-left ${headingClass}`}
            dangerouslySetInnerHTML={{ __html: Heading }}
          ></h2>
          {Isdivider ? (
            <div
              className="my-4 h-[2px] w-[80%] md:w-[320px]"
              style={{
                background: dividerBackground
                  ? dividerBackground
                  : "linear-gradient(to right, #D9D9D9 30%, #96A94A 30%)",
              }}
            ></div>
          ) : null}
          <p
            className={`mt-2 text-sm md:text-base leading-snug max-w-[90%] md:max-w-[400px] ${desclassname}`}
          >
            {Description}
          </p>
          {isButton && (
            <div className="mt-6">
              <Button
                text={ButtonText}
                image={ButtonImage}
                hoverImage={HoverImage}
              />
            </div>
          )}
        </div>

        {/* Right Side - Image */}
        {rightSec ? (
          <div className={`md:flex md:w-1/2 justify-end ${rightSecClass}`}>
            <Image
              src={rightImage}
              alt="Illustration"
              width={500}
              height={500}
              className={`${ImageClass}`}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSection;
