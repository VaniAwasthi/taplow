"use client";
import Image from "next/image";
import Button from "../utilities/Button";
import ButtonImage from "../../assets/homePage/btn-img.svg";
import HoverImage from "../../assets/homePage/hover.svg";
const ExpertiseSection = ({
  sectionTitle,
  sectionHeading,
  paragraphs,
  buttonText,
  imageUrl,
  imageAlt = "Section Image",
  buttonLink = "#",
}) => {
  return (
    <section className=" w-full max-w-7xl mx-auto py-7 md:py-4 px-4">
      <div className=" flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-3">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          {sectionTitle && (
            <h2 className="text-green-600 text-3xl md:text-4xl font-normal mb-2">
              {sectionTitle}
            </h2>
          )}
          {sectionHeading && (
            <h1 className=" text-3xl md:text-4xl font-normal text-blue-800 mb-4">
              {sectionHeading}
            </h1>
          )}
          {paragraphs &&
            paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 text-[15px] mb-4 md:w-9/12"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></p>
            ))}
          {buttonText && (
            <div className="mt-6">
              <Button
                className="w-[250px] md:w-[242px]"
                text={buttonText}
                image={ButtonImage}
                hoverImage={HoverImage}
              />
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 relative h-[350px] md:h-[700px]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
