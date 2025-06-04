"use client";

import {
  AboutEntrim,
  HeroSectionEntrim,
  IntrimFaq,
  OurOfferingEntrim,
  SuccesStoryEntrim,
  WhyChooseEntrimManagement,
} from "@/app/component/EntrimManagement/HeroSecAboutwhy";
import IndustrySlider from "@/app/component/home/Industries";
import ContcatSection from "@/app/component/services/ContactSection";
import Faq from "@/app/component/services/Faq";
import MeetOurExperts from "@/app/component/services/MeetOurExpert";
import React from "react";

const Page = () => {
  const ContactData = {
    heading: "Connect with an Executive Interim Management",

    description:
      "Ready to find your next great leader? Fill out the form below to Connect with an Executive Interim Management and discuss your hiring needs.",
  };
  return (
    <>
      <HeroSectionEntrim />
      <AboutEntrim />
      <OurOfferingEntrim />
      <WhyChooseEntrimManagement />
      <IndustrySlider />
      <MeetOurExperts />
      <IntrimFaq />
      <ContcatSection ContactData={ContactData} />
    </>
  );
};

export default Page;
