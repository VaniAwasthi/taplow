"use client";
import {
  AboutBoard,
  HeroSection,
  OurOffering,
  SuccesStoryBoard,
  WhyChooseBoardAdvisory,
} from "@/app/component/boardadvisory/HeroAboutWhy";
import { IntrimFaq } from "@/app/component/EntrimManagement/HeroSecAboutwhy";
import IndustrySlider from "@/app/component/home/Industries";
import ContcatSection from "@/app/component/services/ContactSection";
import Faq from "@/app/component/services/Faq";
import MeetOurExperts from "@/app/component/services/MeetOurExpert";
import React from "react";

const Page = () => {
  const ContactData = {
    heading: "Connect with a Board Advisory Expert",

    description:
      "Ready to find your next great leader? Fill out the form below to Connect with a Board Advisory Expert and discuss your hiring needs.",
  };
  return (
    <>
      <HeroSection />
      <AboutBoard />
      <OurOffering />
      <WhyChooseBoardAdvisory />
      <IndustrySlider />
      <MeetOurExperts />
      <SuccesStoryBoard />
      <IntrimFaq />
      <ContcatSection ContactData={ContactData} />
    </>
  );
};

export default Page;
