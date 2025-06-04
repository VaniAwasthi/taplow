"use client";
import React from "react";
import {
  AboutServices,
  HeroSection,
  ServicesSection,
} from "@/app/component/Leadership/HerosecAboutService";
import ContcatSection from "@/app/component/services/ContactSection";
import Faq from "@/app/component/services/Faq";
import SuccessStories from "@/app/component/services/SuccessStories";
import {
  AdvisoryLeader,
  Leadershipfaq,
  PerformanceLeadershipSection,
} from "@/app/component/Leadership/IformativeSec";

const Page = () => {
  return (
    <>
      <HeroSection />
      <AboutServices />
      <ServicesSection />
      <PerformanceLeadershipSection />
      <AdvisoryLeader />
      <SuccessStories />
      <ContcatSection />
      <Leadershipfaq />
    </>
  );
};

export default Page;
