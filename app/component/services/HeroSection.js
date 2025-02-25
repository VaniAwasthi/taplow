import React from "react";
import BannerLayout from "../utilities/BannerLayout";
import heroBg from "../../assets/servicepage/herobg.webp";
import ButtonImage from "../../assets/homePage/btn-img.svg";
import HoverImage from "../../assets/homePage/hover.svg";
const HeroSection = () => {
  return (
    <BannerLayout
      image={heroBg}
      title="Welcome to Our Website"
      title2="Experience the Best"
      description="Discover amazing features and services tailored for you."
      buttonText="Get Started"
      buttonImage={ButtonImage}
      hoverImage={HoverImage}
      // bgColor="#123456"
      overlayOpacity="0.8"
    />
  );
};

export default HeroSection;
