"use client";
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
import Icon1 from "../assets/servicepage/Icon1.png";
import Icon2 from "../assets/servicepage/Icon2.png";
import Icon3 from "../assets/servicepage/Icon3.png";
import Icon4 from "../assets/servicepage/Icon4.png";
import Icon5 from "../assets/servicepage/Icon5.png";
import Icon6 from "../assets/servicepage/Icon6.png";
import SearchImage from "../assets/servicepage/ExecutiveSearch.png";

const Services = () => {
  const heading = "Why Choose Taplow for Executive Search?";

  const cards = [
    {
      img: Icon1,
      title: "Bespoke Talent Solutions",
      desc: "Every executive role is unique. We customize searches to align with your business goals, industry trends, and leadership requirements.",
    },
    {
      img: Icon2,
      title: "Global Reach, Local Expertise",
      desc: "With consultants across key global markets, we identify top talent wherever your business operates.",
    },
    {
      img: Icon3,
      title: "Deep Industry Knowledge",
      desc: "Our sector specialists understand the challenges and opportunities specific to your industry.",
    },
    {
      img: Icon4,
      title: "Commitment to Long-Term Success",
      desc: "Our candidates aren’t just hires—they are future leaders who drive transformation and growth.",
    },
    {
      img: Icon5,
      title: "Rigorous Candidate Evaluation",
      desc: "We assess skills, mindset, leadership potential, and cultural alignment for long-term success.",
    },
    {
      img: Icon6,
      title: "End-to-End Leadership Support",
      desc: "Beyond search, we offer leadership advisory, succession planning, and talent retention strategies.",
    },
  ];
  const ExecutiveData = {
    heading: " Our Executive Search Expertise",
    Img: SearchImage,
    description:
      "With over 150 consultants across the globe, The Taplow Group has a proven track record of delivering high-caliber executive talent for organisations worldwide. We go beyond traditional recruitment, using in-depth market insights, cultural assessments, and leadership evaluation tools to find the right executives for your business.",
  };
  return (
    <>
      <HeroSection />
      <ExecutiveSearch ExecutiveData={ExecutiveData} />
      <ExecutiveSearchProcess />
      <WhyChooseExecutive heading={heading} cards={cards} />
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
