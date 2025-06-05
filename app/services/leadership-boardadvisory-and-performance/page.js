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
import CaseStudies from "@/app/component/coun-layout/CaseStudies";
import Success1 from "../../assets/globalpage/CaseStudies/FranceCase5.webp";
import Success2 from "../../assets/globalpage/CaseStudies/FranceCase6.webp";
import Success3 from "../../assets/globalpage/CaseStudies/FranceCase7.webp";
import Success4 from "../../assets/globalpage/CaseStudies/FranceCase8.webp";
import Success5 from "../../assets/globalpage/India/Success1.webp";
import Success6 from "../../assets/globalpage/India/Success2.webp";
import Success7 from "../../assets/globalpage/India/Success3.webp";
import Success8 from "../../assets/globalpage/India/Success4.webp";
import Success9 from "../../assets/globalpage/India/Success5.webp";
import Success10 from "../../assets/globalpage/India/Success6.webp";
import Success11 from "../../assets/globalpage/CaseStudies/austriliaCase2.webp";

const Page = () => {
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Organizational & Leadership Transformation",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/Organizational&LeadershipTransformation.pdf",
    },
    {
      image: Success2,
      title:
        "Shaping a High-Performing Leadership Team Through Hogan Assessment",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/Shaping aHighPerformingLeadershipTeamThroughHoganAssessment.pdf",
    },
    {
      image: Success3,
      title:
        "Coaching : Enabling Leadership Evolution in a Post-Acquisition Context",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/Evolution in a PostAcquisitionContext.pdf",
    },
    {
      image: Success4,
      title: "Customized Journey from Management to Leadership",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/CustomizedJourneyfromManagementtoLeadership.pdf",
    },
    {
      image: Success5,
      title: "Rebuilding Strategic Leadership in Global Energy",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupRe-EstablishingStrategicLeadershipCaseStudy-India.pdf",
    },
    {
      image: Success6,
      title: "Manufacturing Head for Vikram Solar",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupManufacturingHeadSolarCaseStudy-India.pdf",
    },
    {
      image: Success7,
      title: "Director, Education & Protection | Global Philanthropy",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupDirectorEducation0ProtectionforanInternationalPrivatePhilanthropyCaseStudy%20-India.pdf",
    },
    {
      image: Success8,
      title: "Sales leadership mapping in India’s AlcoBev sector",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupTalentMappingforConsumerProductsCaseStudy%20-India.pdf",
    },
    {
      image: Success9,
      title: "To hire a Vice Chancellor for a Multi-Disciplinary University",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplo%20Group%20PrivateMultiDisciplinaryUniversityCaseStudy-India.pdf",
    },
    {
      image: Success10,
      title: "Workforce Onboarding Guide for India Entry",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupEmployeeHandbookDevelopementCaseStudyIndia.pdf",
    },
    {
      image: Success11,
      title: "Leadership Development Across Multi-Brand Teams",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/austrilia/LeadershipDevelopmentAcrossMultiBrandTeams.pdf",
    },
  ];
  const Successheading = "Recent Success Stories";
  return (
    <>
      <HeroSection />
      <AboutServices />
      <ServicesSection />
      <PerformanceLeadershipSection />
      <AdvisoryLeader />
      <SuccessStories />
      <ContcatSection />
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-xs md:text-base"
      />
      <Leadershipfaq />
    </>
  );
};

export default Page;
