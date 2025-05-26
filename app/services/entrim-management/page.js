"use client";

import {
  AboutEntrim,
  HeroSectionEntrim,
  OurOfferingEntrim,
  SuccesStoryEntrim,
  WhyChooseEntrimManagement,
} from "@/app/component/EntrimManagement/HeroSecAboutwhy";
import IndustrySlider from "@/app/component/home/Industries";
import Faq from "@/app/component/services/Faq";
import MeetOurExperts from "@/app/component/services/MeetOurExpert";
import React from "react";

const Page = () => {
  return (
    <>
      <HeroSectionEntrim />
      <AboutEntrim />
      <OurOfferingEntrim />
      <WhyChooseEntrimManagement />
      <IndustrySlider />
      <MeetOurExperts />
      <SuccesStoryEntrim />
      <Faq />
    </>
  );
};

export default Page;
