import Image from "next/image";
import Carousel from "./component/home/HeroSec";
import Talentsec from "./component/home/TalentSec";
import ServicesSlider from "./component/home/Services";
import LeadershipMatter from "./component/home/Leadershipmatter";
import IndustrySlider from "./component/home/Industries";
import ConnectExpert from "./component/home/ConnectExpert";
import WhyChoose from "./component/home/WhyChoose";
import GetInTouch from "./component/home/GetInTouch";
import BlogSection from "./component/home/BlogSection";

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
