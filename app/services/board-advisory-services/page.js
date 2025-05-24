"use client";
import {
  AboutBoard,
  HeroSection,
  OurOffering,
  SuccesStoryBoard,
  WhyChooseBoardAdvisory,
} from "@/app/component/boardadvisory/HeroAboutWhy";
import IndustrySlider from "@/app/component/home/Industries";
import Faq from "@/app/component/services/Faq";
import MeetOurExperts from "@/app/component/services/MeetOurExpert";
import React from "react";

const Page = () => {
  return (
    <>
      <HeroSection />
      <AboutBoard />
      <OurOffering />
      <WhyChooseBoardAdvisory />
      <IndustrySlider />
      <MeetOurExperts />
      <SuccesStoryBoard />
      <Faq />
    </>
  );
};

export default Page;
