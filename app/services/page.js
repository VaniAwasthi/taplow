import React from "react";
import HeroSection from "../component/services/HeroSection";
import LeadershipRight from "../component/services/LeadershipRight";
import InsightRelated from "../component/services/InsightRelated";
import Faq from "../component/services/Faq";
import ContactSection from "../component/services/ContactSection";
import SuccessStories from "../component/services/SuccessStories";
import MeetOurExperts from "../component/services/MeetOurExpert";
import IndustrySlider from "../component/home/Industries";
import ExecutiveSearch from "../component/services/ExecutiveSearch";
import ExecutiveSearchProcess from "../component/services/ExecutiveSearchProcess";
import WhyChooseExecutive from "../component/services/WhyChooseExecutive";

const Services = () => {
  return (
    <>
      <HeroSection />
      <ExecutiveSearch />
      <ExecutiveSearchProcess />
      <WhyChooseExecutive />
      <IndustrySlider />
      <MeetOurExperts />
      <SuccessStories />
      <ContactSection />
      <Faq />
      <InsightRelated />
      <LeadershipRight />
      {/* <Image src="/homePage/service.jpg" alt="Service" width={1920} height={1080} className="w-full" /> */}
    </>
  );
};

export default Services;
