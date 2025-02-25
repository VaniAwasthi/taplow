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
  bgColor,
  overlayOpacity = 0.9,
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: bgColor, opacity: overlayOpacity }}
      ></div>

      {/* Background Image */}
      <Image
        src={image}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 mix-blend-overlay"
      />

      {/* Content Section - Aligned to Left Center */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-8 md:pl-32 max-w-xl text-white redhat">
        <h2 className="text-3xl md:text-5xl font-normal redhat py-2">
          {title}
        </h2>
        <h2 className="text-3xl md:text-5xl font-normal redhat py-2">
          {title2}
        </h2>
        <div
          className="my-6 h-[1px] w-[320px]"
          style={{
            background: "linear-gradient(to right, #D9D9D9 30%, #96A94A 30%)",
          }}
        ></div>

        <p className="mt-4 text-xs md:text-[16px] leading-snug redhat">
          {description}
        </p>

        {/* Button */}
        <div className="mt-[2rem] mb-[2rem]">
          <Button
            text={buttonText}
            onClick={() => console.log("Button Clicked!")}
            image={buttonImage}
            hoverImage={hoverImage}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerLayout;
