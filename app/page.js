import Image from "next/image";
import Talentsec from "./pages/home/TalentSec";
import Carousel from "./pages/home/HeroSec";
import BlogSection from "./pages/home/BlogSection";
import GetInTouch from "./pages/home/GetInTouch";
import WhyChoose from "./pages/home/WhyChoose";
import ConnectExpert from "./pages/home/ConnectExpert";
import IndustrySlider from "./pages/home/Industries";
import LeadershipMatter from "./pages/home/Leadershipmatter";
import ServicesSlider from "./pages/home/Services";

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
