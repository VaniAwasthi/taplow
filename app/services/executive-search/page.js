"use client";
import React from "react";
import Icon1 from "../../assets/servicepage/Icon1.png";
import Icon2 from "../../assets/servicepage/Icon2.png";
import Icon3 from "../../assets/servicepage/Icon3.png";
import Icon4 from "../../assets/servicepage/Icon4.png";
import Icon5 from "../../assets/servicepage/Icon5.png";
import Icon6 from "../../assets/servicepage/Icon6.png";
import SearchImage from "../../assets/servicepage/ExecutiveSearch.png";
import HeroSection from "@/app/component/services/HeroSection";
import ExecutiveSearch from "@/app/component/services/ExecutiveSearch";
import ExecutiveSearchProcess from "@/app/component/services/ExecutiveSearchProcess";
import WhyChooseExecutive from "@/app/component/services/WhyChooseExecutive";
import IndustrySlider from "@/app/component/home/Industries";
import MeetOurExperts from "@/app/component/services/MeetOurExpert";
import SuccessStories from "@/app/component/services/SuccessStories";
import Faq from "@/app/component/services/Faq";
import LeadershipRight from "@/app/component/services/LeadershipRight";
import ContcatSection from "@/app/component/services/ContactSection";
import InightRelated from "@/app/component/services/InsightRelated";

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
  const FaqData = [
    {
      index: 1,
      question: "What industries does The Taplow Group specialise in?",
      answer:
        "We serve various industries, including finance, healthcare, technology, consumer goods, etc.",
    },
    {
      index: 2,
      question: "How does Taplow ensure the exemplary leadership fit?",
      answer:
        "We ensure leadership fit through a rigorous selection process tailored to each client's needs.",
    },
    {
      index: 3,
      question: "What is your executive search process?",
      answer:
        "Our process includes market research, candidate assessment, and in-depth interviews.",
    },
    {
      index: 4,
      question: "How long does an executive search typically take?",
      answer:
        " An executive search typically takes 6 to 12 weeks, depending on the complexity of the role.",
    },
    {
      index: 5,
      question: "How does Taplow differ from other executive search firms?",
      answer:
        "We provide a personalized, hands-on approach with a strong global network.",
    },
  ];
  return (
    <>
      <HeroSection />
      <ExecutiveSearch ExecutiveData={ExecutiveData} />
      <ExecutiveSearchProcess />
      <WhyChooseExecutive heading={heading} cards={cards} />
      <IndustrySlider />
      <MeetOurExperts />
      <SuccessStories />
      <ContcatSection />
      <Faq
        heading="Frequently Asked Questions for Executive Search"
        FaqData={FaqData}
      />
      <InightRelated />
      <LeadershipRight />
      {/* <Image src="/homePage/service.jpg" alt="Service" width={1920} height={1080} className="w-full" /> */}
    </>
  );
};

export default Services;
