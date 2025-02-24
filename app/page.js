import Image from "next/image";
import Carousel from "./home/HeroSec";
import Talentsec from "./home/TalentSec";
import ServicesSlider from "./home/Services";
import LeadershipMatter from "./home/Leadershipmatter";
import IndustrySlider from "./home/Industries";
import ConnectExpert from "./home/ConnectExpert";
import WhyChoose from "./home/WhyChoose";
import GetInTouch from "./home/GetInTouch";
import BlogSection from "./home/BlogSection";

export default function Home() {
  return (
    <>
      <Carousel />
      <Talentsec />
      <ServicesSlider />
      <LeadershipMatter />
      <IndustrySlider />
      <ConnectExpert />
      <WhyChoose />
      <GetInTouch />
      <BlogSection />
    </>
  );
}
