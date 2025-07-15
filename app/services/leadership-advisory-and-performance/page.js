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
  const FaqData = [
    {
      index: 1,
      question:
        "What does The Taplow Group’s Leadership Advisory service include?",
      answer:
        " Our services cover leadership assessments, team effectiveness programs, executive coaching, succession planning, and strategic alignment workshops—all designed to strengthen leadership and performance at every level.",
    },
    {
      index: 2,
      question:
        " How do you assess leadership potential and team effectiveness?",
      answer:
        " We use a mix of psychometric tools, 360° feedback, stakeholder interviews, and behavioural assessments to gain deep insight into leadership styles, competencies, and performance gaps, both at individual and team levels.",
    },
    {
      index: 3,
      question:
        " Can you help our leadership team navigate organizational change?",
      answer:
        "Yes. We specialize in supporting teams during periods of transformation, M&A activity, and leadership transition, ensuring alignment, clarity, and performance continuity through expert advisory.",
    },
    {
      index: 4,
      question: " Is your approach industry-specific or customizable?",
      answer:
        " Our insights are backed by global experience across industries, and we adapt every engagement to your business context, goals, and culture. We don’t believe in one-size-fits-all strategies.",
    },
    {
      index: 5,
      question:
        "Do you offer leadership coaching or just organizational advisory?",
      answer:
        " Both. We provide one-on-one executive coaching, team coaching, and leadership development programs tailored to your leaders’ growth needs and your company’s performance goals.",
    },
    {
      index: 6,
      question: "What makes The Taplow Group different in this space?",
      answer:
        " Our global network, senior-level expertise, and people-first approach allow us to deliver measurable leadership impact that drives long-term business growth, not just short-term fixes.",
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
      <Faq heading="Frequently Asked Questions" FaqData={FaqData} />
    </>
  );
};

export default Page;
