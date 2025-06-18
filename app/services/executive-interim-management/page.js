"use client";

import CaseStudies from "@/app/component/coun-layout/CaseStudies";
import {
  AboutEntrim,
  HeroSectionEntrim,
  IntrimFaq,
  OurOfferingEntrim,
  WhyChooseEntrimManagement,
} from "@/app/component/EntrimManagement/HeroSecAboutwhy";
import IndustrySlider from "@/app/component/home/Industries";
import ContcatSection from "@/app/component/services/ContactSection";
import Faq from "@/app/component/services/Faq";
import MeetOurExperts from "@/app/component/services/MeetOurExpert";
import React from "react";
import Success1 from "../../assets/globalpage/CaseStudies/FranceCase1.webp";
import Success2 from "../../assets/globalpage/CaseStudies/FranceCase2.webp";
import Success3 from "../../assets/globalpage/CaseStudies/FranceCase3.webp";
import Success4 from "../../assets/globalpage/CaseStudies/FranceCase4.webp";
import Success5 from "../../assets/servicepage/EntrimMangement/Success5.webp";
import Success6 from "../../assets/servicepage/EntrimMangement/Success6.webp";
import Success7 from "../../assets/servicepage/EntrimMangement/Success7.webp";
const Page = () => {
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Interim Managing Director in the Industrial sector",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/InterimManagingDirectorintheIndustyfield.pdf",
    },
    {
      image: Success2,
      title: "R & D Director",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/TheTaplowGroupInterimExecutiveRDDirectorCaseStudy.pdf",
    },
    {
      image: Success3,
      title: "Interim Managing Director in the Industry field",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/InterimManagingDirectorintheIndustrialsector.pdf",
    },
    {
      image: Success4,
      title: "Interim Human Resources Director",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/InterimHumanResourcesDirector.pdf",
    },
    {
      image: Success5,
      title: "Interim Finance Consultant",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/InterimFinanceConsultant.pdf",
    },
    {
      image: Success6,
      title: "Technical People for client systems development",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/TransformationinCIMTSector.pdf",
    },
    {
      image: Success7,
      title: "Technical People for client systems development",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/TechnicalPeopleforclientsystemsdevelopment.pdf",
    },
  ];
  const Successheading = "Recent Success Stories";
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
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-xs md:text-base"
      />
      <ContcatSection ContactData={ContactData} />
    </>
  );
};

export default Page;
